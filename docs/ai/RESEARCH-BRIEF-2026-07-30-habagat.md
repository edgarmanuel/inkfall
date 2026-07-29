# Research brief - HABAGAT (options matrix filled)

**Status:** research complete - **PIN ACCEPTED: C + D** (2026-07-30 operator "C + D. go")  

**Date filled:** 2026-07-30 (research session)  
**Device floor (confirmed 2026-07-30):** **Android 12+ Chrome** only  
**Audience rationale (operator):** no point convincing Android 12- users to use AI -
do not spend eng, fidelity, or support budget on pre-12 
**Bank used:** `bank-build` (greenfield engine/runtime + fidelity path)  
**Intent Lock:** `docs/ai/INTENT-2026-07-30-habagat.md` (confirmed)  
**Rule:** explore-first; cost filter last; **this file does not pin the stack** -
operator accepts Recommend or revises A5/A6, then scaffold or Build Spec

---

## 1. Why research (from Intent)

Operator locked:

- Portfolio / **fidelity showpiece**
- **Snowflow-class** visual ambition (bar, not clone)
- First wow = **wet night city + rain + neon**
- Core verb still **draw-lock-ride** (Inkfall laws)
- Stall fallback = **one beautiful strip**

Research must prove a path that hits look **and** keeps the verb playable on
phone Chrome - or name the honest trade (desktop-first showpiece).

---

## 2. Source ladder (what was done)

| Rung | Action |
|---|---|
| 0 Local | Intent Lock, NEXT_HABAGAT, LEARNINGS, prior session close |
| 1-2 Vendor primary | web.dev WebGPU browsers; Chrome 121 WebGPU Android; threejs.org; babylonjs.com; pmndrs/postprocessing README |
| 3 WebSearch | Engine comparisons 2025-26; mobile WebGPU coverage; wet floor Reflector; rain/bloom patterns |
| 4 WebFetch | Primary pages opened this session (see provenance per claim) |
| 5 X | Snowflow thread + operator bar post (@hey_madni); practitioner reposts (UNVERIFIED social until primary) |
| 6 GitHub | pmndrs/postprocessing; Snowflow repo URL claimed in X/Reddit (full clone not opened - note) |

Claim tags: **VERIFIED** = primary opened this session. **CORROBORATED** = 2+
secondaries. **UNVERIFIED** = single secondary / social / search snippet.

---

## 3. Reference bar - Snowflow (not clone)

| Field | Finding | Tag |
|---|---|---|
| What it is | Browser WebGPU demo: deformable snow, water-inspired spells, cloth, snow-surf, atmospheric lighting | UNVERIFIED (social/Reddit) until repo run |
| Operator bar post | https://x.com/hey_madni/status/2082399524044296263 - "free and runs in browser on webgpu with the code on github" | VERIFIED (thread fetch) |
| Stack signal | Multiple independent posts claim **Babylon.js + custom WGSL / WebGPU** pipeline; ~9h / ~4M tokens with Claude Opus | UNVERIFIED (social consensus, not repo audit) |
| Live claim | `https://snowflow-lilac.vercel.app/` (WebGPU-capable **computer** language in Reddit TLDR) | CORROBORATED (several posts name URL) |
| Fit to Habagat | Steal: density, weather identity, browser prestige. Do not steal: multi-spell sandbox, snow trench core, Avatar-adjacent marketing frame | Intent |

**Honest read:** Snowflow is a **WebGPU desktop-class tech demo**. Copying its
stack 1:1 for "mid Android Chrome first playable" is a coverage risk, not a
shortcut. Habagat's Intent is portfolio showpiece - desktop still/clip can carry
wow; playable loop should still prefer broad WebGL2 unless operator upgrades A6.

---

## 4. Findings by question

### Engine / runtime

| Q | Finding | Tag | Source |
|---|---|---|---|
| Q1 Mobile wet strip without flags? | **WebGL2** path is the broad default on mid Android Chrome. WebGPU is **not** universal mid-range: Chrome enables WebGPU by default on **Android 12+ with Qualcomm/ARM GPUs** (from Chrome 121). Older / odd GPU paths still incomplete; compat mode expands GLES-class devices later. | VERIFIED (Android gate); CORROBORATED (coverage caveats) | https://developer.chrome.com/blog/new-in-webgpu-121 ; https://web.dev/blog/webgpu-supported-major-browsers |
| Q2 Three vs Babylon vs raw WebGPU | Three.js: largest ecosystem, lightweight renderer, custom shaders + `Reflector` + post stack; WebGPU examples growing (r185 site). Babylon.js 9.0: full engine, PBR/OpenPBR, volumetric lighting (WebGPU compute called out), Inspector/Playground - higher "materials wow out of box," heavier product surface. Raw WebGPU: max control / max eng cost. | VERIFIED (sites); CORROBORATED (comparisons) | https://threejs.org/ ; https://www.babylonjs.com/ ; industry writeups 2026 |
| Q3 Min for non-apology still | Mobile-safe **planar floor reflection** (Reflector / mirror RT at reduced res) + emissive neon + **selective bloom** + rain (screen streaks and/or sparse particles) + HDRI or fake env. Full SSR not required for strip. | CORROBORATED | Reflector tutorials; pmndrs bloom docs; common mobile web gl practice |
| Q4 WebGPU-only for Snowflow look? | If Habagat requires **compute-heavy** terrain/cloth like Snowflow, WebGPU-first and **desktop-first** is honest. For wet city strip + ribbon ride, **WebGL2 can hit portfolio stills** if art direction is tight. Escalate A6 only if live phone fails still quality. | CORROBORATED | Snowflow "WebGPU-capable computer"; Chrome Android limits |

### Art / fidelity path

| Q | Finding | Tag |
|---|---|---|
| Q5 Wet asphalt | Recipe: `MeshStandard`/`Physical` dark base, roughness low-mid, normal map puddles, **single planar Reflector** (half or quarter res on mobile), slight fresnel darken. Avoid multi-bounce SSR on phone. | CORROBORATED |
| Q6 Rain | Hybrid wins: **screen-space streaks** (cheap) + sparse world particles near camera. Full volumetric rain is desktop luxury. | UNVERIFIED (practice consensus - spike to prove) |
| Q7 Neon + bloom | Emissive materials + **selective** bloom (threshold high; only neon exceeds). pmndrs `postprocessing` merges effects into fewer passes vs naive EffectComposer chain. Cap resolution scale 0.5-0.75 on mobile. | VERIFIED (library README performance claims); CORROBORATED (selective bloom discourse) |
| Q8 Wind ribbon | **Tube/ribbon mesh** with animated UVs + soft additive trail reads expensive without particle hell. Shader trail second. Pure particles alone often mushy. | UNVERIFIED (design judgment - spike) |

### Feel / sim

| Q | Finding | Tag |
|---|---|---|
| Q9 Draw projection | Mobile accuracy: project stroke onto a **bend plane** (ground-parallel or camera-facing sheet) first; free 3D curve is accuracy death on fat thumbs. Matches draw-then-lock. | Intent + practice |
| Q10 Ride | Catmull-Rom / cubic spline follow; snappy accel after lock; headless unit tests on positions (Inkfall physics-test pattern). No engine pin needed. | LEARNINGS |
| Q11 Breath | Simple meter; incomplete stroke cancel costs fraction; multi-try non-negotiable. | Intent |

### Product / scope

| Q | Finding |
|---|---|
| Q12 Strip content | One corridor strip, one lantern landing, **zero** adversary verbs in spike; add one verb only after look holds. |
| Q13 Deploy | Vite + static (or bare three import map if operator wants zero-build) -> Vercel; domain when proud (Inkfall pattern). |
| Q14 Audio | Defer SFX to after still-quality; wind bed optional in look pass - not gate. |

---

## 5. Options matrix

| Approach | Kind | Cost | Fit to Intent Lock | Unknowns / risks | Recommend? | Provenance |
|---|---|---|---|---|---|---|
| **A. Three.js + WebGL2 + planar wet + selective post** | OSS library + custom scene | free tooling; med eng | **High** - mobile-first playable + portfolio still path; largest tutorials for rain/neon/ribbons; ship pattern matches Inkfall static/Vite->Vercel | Art direction quality; mobile bloom mush if unthrottled; must hand-roll game loop | **Yes (free-proof pin)** | threejs.org (VERIFIED); Reflector ecosystem (CORROBORATED); pmndrs/postprocessing (VERIFIED) |
| **B. Babylon.js 9 PBR-first (WebGL2 default, WebGPU optional)** | Full OSS engine | free; med-high eng (API surface) | **High materials** - PBR/OpenPBR, particles, Inspector accelerate wow; Snowflow-adjacent stack signal | Heavier bundle/API; learning curve; overkill if strip is simple corridor | Alternate if materials stall on A | babylonjs.com 9.0 (VERIFIED); WebGPU support documented in ecosystem lists (CORROBORATED) |
| **C. WebGPU-first custom / Snowflow-class stack** | WebGPU + WGSL (+ maybe Babylon WebGPU) | free; **high** eng | Max wow ceiling; closest to bar demo | **Phone coverage gap**; mid Android fail; longer before playable verb; A6 desktop-first | **No for v0** - escalate later | Chrome 121 Android gate (VERIFIED); Snowflow WebGPU-only social (UNVERIFIED stack detail) |
| **D. Hybrid: A live playable + offline fancy still/clip pipeline** | Dual path | free+$time | Guarantees non-apology **portfolio still** even if live mobile is simpler | Two pipelines to maintain; honesty if clip != live | **Yes as contingency** (not primary eng) | Intent stall fallback |

**Cost filter (last):** All four approaches are $0 license engines. Prefer free
Vercel static host. No paid engine. Paid path later would unlock: stock hero
mesh packs, paid HDRIs, audio SFX packs - none required for pin.

---

## 6. Free-proof recommendation (not a stack pin until operator accepts)

### Wow ranking (operator asked 2026-07-30)

| Rank | Approach | Wow ceiling | Why |
|---|---|---|---|
| **1 highest** | **C** WebGPU-first / Snowflow-class | **Max** | Custom WGSL, compute-class weather/particles, closest to the bar demo; least "webgl mobile compromise" |
| **2** | **B** Babylon 9 PBR-first | **Very high** | Out-of-box PBR/OpenPBR, volumetric/atmosphere tooling, particle editors - wow from engine features |
| **3** | **A** Three.js WebGL2 + selective post | **High if art is elite** | Can look stunning; ceiling set more by art direction and post budget than by API |
| **4** | **D alone** | N/A (delivery) | Not an engine - it is the **video/still pipeline** for people who cannot launch |

**Operator policy (A11):** record a video for those who cannot launch. That **removes
"everyone must run live" as a wow constraint** and elevates C (or B with WebGPU)
as the honest max-wow path. Live play remains for Android 12+ / WebGPU-capable
devices; share path can be clip-first.

### Recommend under max-wow + video fallback: **C primary, D as share path**

**One-liner:** Chase **Snowflow-class WebGPU fidelity (C)** for the showpiece.
Use **recorded video / stills (D)** for portfolio and for anyone who cannot
launch. Keep a **lighter live path** only if cheap (WebGL2 fallback optional,
not fidelity ceiling).

### Prior free-proof recommend (A) - still valid if playable-first

If operator prioritizes **broad Android 12+ playable** over max ceiling, **A**
remains free-proof. With A11 video-for-can't-launch, **A is no longer the
wow-maximizing choice**.

### Why not B first?

Babylon is a strong alternate if A fails materials tooling. It is not required
to start: Habagat is one strip + custom feel law, not a multi-system RPG.
Switching A->B later is possible but rewrite-y - only flip if PBR/Inspector
clearly unblocks wow.

### Why not C first?

Snowflow-class WebGPU-only conflicts with Intent mobile-first and mid-Android
risk (A6 unconfirmed). Portfolio stills can be desktop-captured under D; live
app should not hard-require WebGPU until coverage is measured on operator
devices.

### Mobile vs desktop-first call (explicit)

| Surface | Role |
|---|---|
| **Device floor (confirmed)** | **Android 12+ Chrome** - drops pre-12 support intentionally |
| **Primary playable target** | Android 12+ Chrome mid-range; 30-60fps strip with reduced DPR + cheap rain |
| **API strategy under floor** | Android 12+ **enables** WebGPU on many Qualcomm/ARM devices (Chrome 121+), but **not all** 12+ phones get WebGPU (GPU/driver gaps remain). Do not ship **WebGPU-only** without a WebGL2 path unless operator later hardens A6. |
| **Primary portfolio capture** | Desktop Chrome high settings / WebGPU for stills and short clip |
| **A6 escalation** | Only if live mobile cannot produce a non-apology still after look pass - then market **desktop play + phone playable-lite**, or clip-first showpiece |

**Implication of Android 12+ floor:** Approach A stays free-proof recommend, but WebGPU upgrades (Three WebGPURenderer, or Babylon WebGPU) become a **reasonable S2+ option** for devices that report `navigator.gpu`, not a forbidden path. Approach C (WebGPU-only, no fallback) still rejected for v0.

### Spike acceptance criteria (after pin)

1. Grey strip: draw ribbon on plane -> lock -> snappy ride -> lantern (feel laws).
2. Look pass: wet floor reflection visible in still; rain + neon readable.
3. Phone: opens without flags; target playable (not perfect) on operator phone.
4. Desktop still: operator would post without apology.

---

## 7. Fidelity ladder (maps to Plan A stages)

| Gate | Engine path | Done when |
|---|---|---|
| S0 Research | this file | matrix + recommend + mobile call (done pending accept) |
| S1 Feel | Three WebGL2 | ribbon draw-lock-ride + breath + chase cam; headless spline tests |
| S2 Look | + Reflector floor, emissive neon, selective bloom, hybrid rain | non-apology still on desktop; acceptable phone |
| S3 Hero | simple courier mesh/silhouette | readable chase silhouette |
| S4 Shell | Vite/static, optional score, Vercel, domain when proud | ship |

---

## 8. Answers summary (close checklist)

- [x] Matrix rows filled with real sources cited
- [x] One **Recommend?** = yes with free-proof pin (**A**, contingency **D**)
- [x] Mobile vs desktop-first call explicit (playable mobile WebGL2; capture desktop)
- [ ] Operator accepts pin or revises Intent A5/A6

---

## 9. Out of scope (still)

- Coding / scaffolding Habagat until operator accepts pin and says start spike
- Void Parry
- FB draft for Habagat

---

## 10. Next action after accept

1. Operator: accept **A** (or choose B/C/D revision).
2. Scaffold `C:\Projects\habagat` (Vite + three + postprocessing) **or** full Build Spec if multi-session rigor wanted.
3. Do not rebuild Inkfall; do not start Void Parry.
