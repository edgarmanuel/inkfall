/**
 * Ensures levels 1-30 are not a single boring layout forever.
 * Mirrors pickArchetype() from public/index.html
 */
function pickArchetype(lv) {
  if (lv <= 2) return "tutorial";
  if (lv === 3) return "dry";
  if (lv === 4) return "wall_gate";
  if (lv % 5 === 0) return "gauntlet";
  const pool = [
    "wall_gate", "same_side", "moving_seal", "wind_drift",
    "patrol", "corridor", "pinch", "diagonal", "dry", "bounce_start"
  ];
  const band = Math.floor((lv - 5) / 3);
  const idx = (lv + band * 3 + (band % 2 === 0 ? 0 : 4)) % pool.length;
  return pool[idx];
}

const labels = [];
for (let lv = 1; lv <= 30; lv++) labels.push(pickArchetype(lv));

const unique = new Set(labels);
const counts = {};
for (const a of labels) counts[a] = (counts[a] || 0) + 1;

// consecutive same archetype (except tutorial 1-2)
let maxRun = 1, run = 1;
for (let i = 1; i < labels.length; i++) {
  if (labels[i] === labels[i - 1]) run++;
  else run = 1;
  maxRun = Math.max(maxRun, run);
}

console.log("Lv1-30:", labels.join(", "));
console.log("Unique:", unique.size, [...unique].sort().join(", "));
console.log("Counts:", counts);
console.log("Max consecutive same:", maxRun);

const fails = [];
if (unique.size < 8) fails.push("need >= 8 distinct archetypes in first 30, got " + unique.size);
if (maxRun > 2) fails.push("too many consecutive same archetype: " + maxRun);
if (labels[0] !== "tutorial" || labels[1] !== "tutorial") fails.push("lv1-2 should be tutorial");
if (labels[2] !== "dry") fails.push("lv3 should introduce dry");
if (labels[4] !== "gauntlet" || labels[9] !== "gauntlet") fails.push("every 5th should be gauntlet");
// Mid-game (10-20) should not be all dry
const mid = labels.slice(9, 20);
const midDry = mid.filter((a) => a === "dry").length;
if (midDry > 3) fails.push("mid levels too dry-heavy: " + midDry);

if (fails.length) {
  console.error("FAIL:", fails);
  process.exit(1);
}
console.log("PASS: level variety gates ok");
