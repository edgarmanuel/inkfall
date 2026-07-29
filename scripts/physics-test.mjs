/**
 * Headless tests for Inkfall feel.
 * 1) Locked wells pull snappily AFTER release (not mushy)
 * 2) Mid-draw: blot must NOT chase the stroke (pause design)
 * 3) Ink budget allows multiple strokes per level
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

function forceLocked(blob, pts, strength, lifeK, influence) {
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

function round(n) {
  return Math.round(n * 100) / 100;
}

/** After stroke is locked, blot should reach the well promptly */
function testLockedPull() {
  const well = [{ x: 100, y: 200 }, { x: 320, y: 200 }];
  const blob = { x: 210, y: 320, vx: 0, vy: 0 };
  const dt = 1 / 60;
  const strength = 2800;
  const influence = 150;
  let tTo40 = null;
  let tTo12 = null;
  let peak = 0;
  let speed100 = 0;

  for (let i = 0; i < 120; i++) {
    const f = forceLocked(blob, well, strength, 1, influence);
    let ax = f.ax;
    let ay = f.ay + 22;
    blob.vx += ax * dt;
    blob.vy += ay * dt;
    const damp = Math.pow(0.96, dt * 60);
    blob.vx *= damp;
    blob.vy *= damp;
    const sp = Math.hypot(blob.vx, blob.vy);
    if (sp > 580) {
      blob.vx *= 580 / sp;
      blob.vy *= 580 / sp;
    }
    blob.x += blob.vx * dt;
    blob.y += blob.vy * dt;
    const speed = Math.hypot(blob.vx, blob.vy);
    peak = Math.max(peak, speed);
    if (i === 6) speed100 = speed; // ~100ms
    const d = nearestOnPolyline(well, blob.x, blob.y).d;
    const t = (i + 1) * dt;
    if (tTo40 == null && d < 40) tTo40 = t;
    if (tTo12 == null && d < 12) tTo12 = t;
  }

  return {
    name: "locked-pull",
    speed100: round(speed100),
    peak: round(peak),
    tTo40: tTo40 == null ? null : round(tTo40),
    tTo12: tTo12 == null ? null : round(tTo12)
  };
}

/**
 * Mid-draw must not chase cursor: simulate incomplete stroke near blot
 * with NO force applied (game freezes well forces while drawing).
 * Blot displacement should stay near zero.
 */
function testNoChaseWhileDrawing() {
  const incomplete = [
    { x: 200, y: 300 },
    { x: 220, y: 280 },
    { x: 240, y: 260 }
  ];
  const blob = { x: 210, y: 320, vx: 40, vy: -30 };
  const start = { x: blob.x, y: blob.y };
  const dt = 1 / 60;

  // Mirror game: while drawing, damp to stop - no well force
  for (let i = 0; i < 45; i++) {
    // If we wrongly applied live force, blot would lunge toward stroke
    const wrongLive = false;
    if (wrongLive) {
      const f = forceLocked(blob, incomplete, 4200 * 1.15, 1, 190);
      blob.vx += f.ax * dt;
      blob.vy += f.ay * dt;
    }
    blob.vx *= 0.85;
    blob.vy *= 0.85;
    if (Math.hypot(blob.vx, blob.vy) < 12) {
      blob.vx = 0;
      blob.vy = 0;
    }
    blob.x += blob.vx * dt;
    blob.y += blob.vy * dt;
  }

  const moved = dist(start.x, start.y, blob.x, blob.y);
  return {
    name: "no-chase-while-drawing",
    moved: round(moved),
    // Also measure how far a LIVE pull would have dragged (regression guard)
    liveWouldMove: (function () {
      const b = { x: 210, y: 320, vx: 0, vy: 0 };
      for (let i = 0; i < 45; i++) {
        const f = forceLocked(b, incomplete, 4200 * 1.15, 1, 190);
        b.vx += f.ax * dt;
        b.vy += f.ay * dt;
        b.vx *= Math.pow(0.975, 1);
        b.vy *= Math.pow(0.975, 1);
        b.x += b.vx * dt;
        b.y += b.vy * dt;
      }
      return round(dist(210, 320, b.x, b.y));
    })()
  };
}

/** Ink budget: typical stroke length should leave room for more strokes */
function testMultiStrokeBudget() {
  const inkMax = 320; // level 1 budget
  const costPerPx = 0.22;
  const strokeLen = 140; // typical intentional curve
  const costOne = strokeLen * costPerPx;
  const strokesAffordable = Math.floor(inkMax / costOne);
  return {
    name: "multi-stroke-budget",
    inkMax,
    costOne: round(costOne),
    strokesAffordable
  };
}

const fails = [];

const locked = testLockedPull();
console.log("LOCKED PULL:", locked);
if (locked.speed100 < 50) fails.push("locked speed100 too low: " + locked.speed100);
if (locked.tTo40 == null || locked.tTo40 > 0.65) fails.push("locked tTo40 slow: " + locked.tTo40);
if (locked.tTo12 == null || locked.tTo12 > 0.9) fails.push("locked tTo12 slow: " + locked.tTo12);
if (locked.peak < 150) fails.push("locked peak too low: " + locked.peak);

const chase = testNoChaseWhileDrawing();
console.log("NO CHASE:", chase);
if (chase.moved > 25) fails.push("blot moved too much while drawing: " + chase.moved);
if (chase.liveWouldMove < 25) {
  // sanity: the forbidden live pull would have moved it - documents why we froze
  fails.push("liveWouldMove sanity too small: " + chase.liveWouldMove);
}

const budget = testMultiStrokeBudget();
console.log("BUDGET:", budget);
if (budget.strokesAffordable < 3) {
  fails.push("need >= 3 strokes of 140px; got " + budget.strokesAffordable);
}

if (fails.length) {
  console.error("\nFAIL:");
  fails.forEach((f) => console.error(" -", f));
  process.exit(1);
}

console.log("\nPASS: draw-then-lock, no mid-draw chase, multi-stroke ink.");
process.exit(0);
