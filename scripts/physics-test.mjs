/**
 * Headless responsiveness test for Inkfall blot physics.
 * Mirrors public/index.html well force + integration (no DOM).
 * Pass gates are about "feels snappy" not win/lose balance.
 *
 * Run: node scripts/physics-test.mjs
 */

function dist(ax, ay, bx, by) {
  return Math.hypot(bx - ax, by - ay);
}

function nearestOnPolyline(pts, x, y) {
  let bestD = Infinity;
  let bx = pts[0].x, by = pts[0].y;
  let tx = 0, ty = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const ax = pts[i].x, ay = pts[i].y;
    const cx = pts[i + 1].x, cy = pts[i + 1].y;
    const abx = cx - ax, aby = cy - ay;
    const len2 = abx * abx + aby * aby || 1;
    let t = ((x - ax) * abx + (y - ay) * aby) / len2;
    t = Math.max(0, Math.min(1, t));
    const px = ax + abx * t;
    const py = ay + aby * t;
    const d = dist(x, y, px, py);
    if (d < bestD) {
      bestD = d;
      bx = px; by = py;
      const inv = 1 / (Math.hypot(abx, aby) || 1);
      tx = abx * inv;
      ty = aby * inv;
    }
  }
  return { d: bestD, x: bx, y: by, tx, ty };
}

/** OLD mushy formula (pre-fix) */
function forceOld(blob, pts, strength) {
  const n = nearestOnPolyline(pts, blob.x, blob.y);
  const influence = 90;
  if (n.d >= influence) return { ax: 0, ay: 0 };
  const fall = 1 - n.d / influence;
  const pull = strength * fall * fall;
  const inv = 1 / (n.d + 8);
  return {
    ax: (n.x - blob.x) * inv * pull + n.tx * pull * 0.08,
    ay: (n.y - blob.y) * inv * pull + n.ty * pull * 0.08
  };
}

/** NEW responsive formula (matches index.html) */
function forceNew(blob, pts, strength, lifeK, influence) {
  const n = nearestOnPolyline(pts, blob.x, blob.y);
  if (n.d >= influence || n.d < 0.001) {
    if (n.d < 0.001) {
      return { ax: n.tx * strength * 0.12 * lifeK, ay: n.ty * strength * 0.12 * lifeK };
    }
    return { ax: 0, ay: 0 };
  }
  const fall = 1 - n.d / influence;
  const pull = strength * fall * lifeK;
  const inv = 1 / n.d;
  const ux = (n.x - blob.x) * inv;
  const uy = (n.y - blob.y) * inv;
  return {
    ax: ux * pull + n.tx * pull * 0.22,
    ay: uy * pull + n.ty * pull * 0.22
  };
}

function simulate(mode, seconds) {
  // Horizontal well above the blot - should suck upward fast
  const well = [
    { x: 100, y: 200 },
    { x: 320, y: 200 }
  ];
  const blob = { x: 210, y: 320, vx: 0, vy: 0 };
  const dt = 1 / 60;
  const steps = Math.floor(seconds / dt);
  let tToApproach = null; // time to get within 40px of well
  let tToContact = null;  // within 12px
  let peakSpeed = 0;
  let speedAt100ms = 0;

  const strengthOld = 1400;
  const strengthNew = 4200;
  const dampOld = (dt) => Math.pow(0.86, dt * 60);
  const dampNew = (dt) => Math.pow(0.975, dt * 60);
  const maxOld = 420;
  const maxNew = 720;
  const worldG = mode === "old" ? 28 : 18;

  for (let i = 0; i < steps; i++) {
    let ax = 0, ay = worldG;
    if (mode === "old") {
      const f = forceOld(blob, well, strengthOld);
      ax += f.ax; ay += f.ay;
    } else {
      const f = forceNew(blob, well, strengthNew, 1, 170);
      ax += f.ax; ay += f.ay;
    }
    blob.vx += ax * dt;
    blob.vy += ay * dt;
    const damp = mode === "old" ? dampOld(dt) : dampNew(dt);
    blob.vx *= damp;
    blob.vy *= damp;
    const maxSp = mode === "old" ? maxOld : maxNew;
    const sp = Math.hypot(blob.vx, blob.vy);
    if (sp > maxSp) {
      blob.vx *= maxSp / sp;
      blob.vy *= maxSp / sp;
    }
    blob.x += blob.vx * dt;
    blob.y += blob.vy * dt;

    const speed = Math.hypot(blob.vx, blob.vy);
    peakSpeed = Math.max(peakSpeed, speed);
    if (i === Math.floor(0.1 / dt)) speedAt100ms = speed;

    const d = nearestOnPolyline(well, blob.x, blob.y).d;
    const t = (i + 1) * dt;
    if (tToApproach == null && d < 40) tToApproach = t;
    if (tToContact == null && d < 12) tToContact = t;
  }

  const finalD = nearestOnPolyline(well, blob.x, blob.y).d;
  return {
    mode,
    speedAt100ms: round(speedAt100ms),
    peakSpeed: round(peakSpeed),
    tToApproach40: tToApproach == null ? null : round(tToApproach),
    tToContact12: tToContact == null ? null : round(tToContact),
    finalDist: round(finalD),
    finalPos: { x: round(blob.x), y: round(blob.y) }
  };
}

function round(n) {
  return Math.round(n * 100) / 100;
}

// ---- Gates for NEW feel (snappy mobile controls) ----
const GATES = {
  minSpeedAt100ms: 80,   // must already be moving hard by 100ms
  maxTToApproach40: 0.45, // reach near well in under 0.45s from 120px away
  maxTToContact12: 0.75,
  minPeakSpeed: 250
};

const oldR = simulate("old", 2);
const newR = simulate("new", 2);

console.log("=== Inkfall physics responsiveness ===\n");
console.log("OLD:", JSON.stringify(oldR, null, 2));
console.log("NEW:", JSON.stringify(newR, null, 2));

const fails = [];
if (newR.speedAt100ms < GATES.minSpeedAt100ms) {
  fails.push(`speedAt100ms ${newR.speedAt100ms} < ${GATES.minSpeedAt100ms}`);
}
if (newR.tToApproach40 == null || newR.tToApproach40 > GATES.maxTToApproach40) {
  fails.push(`tToApproach40 ${newR.tToApproach40} > ${GATES.maxTToApproach40}`);
}
if (newR.tToContact12 == null || newR.tToContact12 > GATES.maxTToContact12) {
  fails.push(`tToContact12 ${newR.tToContact12} > ${GATES.maxTToContact12}`);
}
if (newR.peakSpeed < GATES.minPeakSpeed) {
  fails.push(`peakSpeed ${newR.peakSpeed} < ${GATES.minPeakSpeed}`);
}
// Must beat old on approach time and 100ms speed
if (oldR.tToApproach40 != null && newR.tToApproach40 != null) {
  if (newR.tToApproach40 >= oldR.tToApproach40) {
    fails.push(`new approach ${newR.tToApproach40}s not faster than old ${oldR.tToApproach40}s`);
  }
}
if (newR.speedAt100ms <= oldR.speedAt100ms) {
  fails.push(`new 100ms speed ${newR.speedAt100ms} not > old ${oldR.speedAt100ms}`);
}

console.log("\n--- Gates ---");
console.log(JSON.stringify(GATES, null, 2));

if (fails.length) {
  console.error("\nFAIL:");
  fails.forEach((f) => console.error(" -", f));
  process.exit(1);
}

console.log("\nPASS: new physics is snappier and meets response gates.");
process.exit(0);
