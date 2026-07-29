# NEXT PRODUCT BRIEF - HABAGAT (bold 3D)

**Status:** BANKED - preferred next product (operator 2026-07-30: go bold).  
**Deprioritized:** Void Parry / Orbit Snap (still banked as thin 2h options).  
**Carry:** Inkfall feel laws + archetype level laws (`LEARNINGS.md`).  
**IP:** Original "air bend" fantasy only - not Avatar: The Last Airbender IP,
characters, or lore. Mechanic family = gesture-commit elemental control.

---

## 1. PH zeitgeist anchor (why this, not generic air)

| Signal | How we use it |
|---|---|
| Mobile-first, short sessions | One-thumb bend; 30-90s runs; score challenge link |
| Esports / "banat" culture | Snappy commit timing; readable skill expression on share |
| Habagat / Amihan literacy | Seasons as **modes** and **palette**, not lectures |
| Wet-city night identity | Rain-soaked neon streets, reflections - visual wow |
| Diskarte | Multi-try breath budget = improvise several bends per stage |
| Avoid P2E residue | Pure skill score, no wallet / grind economy |

**Anchor sentence:** You bend **monsoon wind** through a dense night city -
not as a cartoon power fantasy only, but as weather you *shape and ride*.

Working title: **HABAGAT**  
Alt: Amihan (cool dry contrast mode later), Bagong Hangin, Diskarte Wind.

---

## 2. Core loop (Airbender family + Inkfall laws)

### The bend (player verb)

1. **Draw** a **wind ribbon** in 3D (finger / mouse on a bend plane or free curve).
2. While drawing: avatar **does not** auto-chase the incomplete path (draw-then-lock).
3. **Release** = **lock the bend**. Wind becomes a solid rail / force tube.
4. Avatar (or courier kite / paper leaf / runner) **snaps** along the ribbon
   (snappy after commit - not mush damping).
5. **Breath budget** allows **several** ribbons per stage (multi-try), not one
   all-in stroke.
6. Optional second verb later: **gust pulse** on a locked ribbon (burst) to
   fling hazards - do not add until base ride feels great.

### Win / lose

- Reach the **lantern / roof landing / seal-equivalent** before breath dries or
  you hit a wall / dead-air blot.
- Score = speed + unused breath + archetype bonus + clean ribbons (few cancels).

### Adversary verbs (reuse Inkfall lesson)

| Kind | PH-flavored read | Effect |
|---|---|---|
| Dead air | humid pocket | drinks breath / weakens nearby ribbons |
| Sticky fog | low cloud | attracts / drags the rider off path |
| Crack storm | lightning bead | contact knockback |
| Patrol gust | cross-wind | moving force that shears ribbons |
| Billboard / fold | hard geometry | walls / gates (layout archetype) |

### Level archetypes (roster, not grind)

Teach -> rotate -> gauntlet every N:

- open roof (tutorial)
- alley gate
- jeepney corridor (moving blockers - abstract, no real brand)
- flood channel (low ceiling + water plane)
- billboard pinch
- cross-gust patrol
- vertical climb (stacked ribbons)
- habagat gauntlet (combine 2-3)

Readable spawn labels. Movers live while aiming.

---

## 3. Highest visual fidelity targets (3D)

**Target look (aspiration):** stylized **mobile AAA night-city** - wet streets,
bloom, readable silhouette character, particle wind. Think "MLBB / high-end
mobile cinematic stills" density, not 2012 canvas blobs.

**Not the bar for v0.1 playable** - but art and engine choices must *point* here
from day one (no permanent low-poly placeholder trap without a fidelity plan).

### Engine / stack (next-session research lock)

Preferred order for web + Android Chrome:

1. **Three.js** (or React Three Fiber if React already in monorepo muscle) +
   custom post stack
2. **Babylon.js** if PBR / tooling wins on first spike
3. Avoid Unity WebGL for first ship unless operator insists (heavier pipeline)

Deploy still: static or light Vite build -> Vercel -> `habagat.egaimanuel.tech`
later.

### Visual pillars (must-have eventually)

| Pillar | Target |
|---|---|
| Materials | PBR wet asphalt, painted metal, cloth/leaf rider |
| Lighting | Key + rim + neon emissives; night habagat grade |
| Atmosphere | Rain streaks, fog sheets, wind ribbons with motion blur |
| Reflections | Planar or SSR-lite on wet ground (mobile-safe budget) |
| Character | Single hero silhouette; 1 idle + 1 ride + 1 land anim |
| Juice | Commit flash, ribbon freeze, landing stamp, fail dissolve |
| Audio | Wind bed + punchy commit SFX (arcade energy like Inkfall BGM direction) |

### Fidelity ladder (ship gates)

| Gate | Definition of done |
|---|---|
| **Spike (session 1)** | 3D scene + draw ribbon + release ride + camera; greybox OK |
| **Vertical slice** | 5 archetypes, 1 hero mesh, rain + neon, score + PWA shell |
| **Showpiece** | Full PBR pass, 15+ archetype roster, polished fail/win, domain |

---

## 4. Feel laws (non-negotiable from Inkfall)

1. No mid-draw chase of the incomplete ribbon.
2. Multi-try breath budget.
3. Snappy after lock; calm while aiming.
4. Headless feel tests as soon as physics exists.
5. Archetype roster > "more rain + less time."

---

## 5. FB / audience framing (when ship)

- Score challenge link, Chrome install path.
- Tone SSOT via egai-audience if posted publicly.
- Hook shape: "I bent the monsoon for ____. Beat me: habagat.egaimanuel.tech"
- Optional journey line: leftover Grok credits / bold 3D after Inkfall - only if
  honest and anti-slop.

---

## 6. Exact next session (low token)

1. Read this file + `LEARNINGS.md` only.
2. **Spike only:** scaffold `C:\Projects\habagat` (or agreed name) with Three.js,
   one plane city strip, wind-ribbon draw-lock-ride, breath bar.
3. Do **not** rebuild Inkfall; do **not** start Void Parry unless operator flips.
4. Log spike result; decide vertical-slice budget (hours / fidelity gate).

### Open operator choices (ask if ambiguous)

- Hero: human runner vs kite vs paper leaf courier
- Camera: chase 3rd person vs fixed cinematic side-angle 3D
- First palette: full Habagat wet-green-neon vs Amihan cool-blue dry contrast
