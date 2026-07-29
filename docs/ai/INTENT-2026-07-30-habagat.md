# Intent Lock - HABAGAT

**Status:** confirmed  
**Approved by:** operator (session 2026-07-30, clickable Confirm)  
**Principal:** operator (Egai)  
**Product:** HABAGAT (working title)  
**Home until scaffold:** `C:\Projects\inkfall\docs\` (product code target: `C:\Projects\habagat` later)  
**Related:** `docs/NEXT_HABAGAT.md`, `docs/LEARNINGS.md`, `docs/ai/RESEARCH-BRIEF-2026-07-30-habagat.md`

---

## Goal (operator words)

When Habagat works, someone opens it on a phone and in about 30 seconds feels
**wow - PH Habagat baha (flood night)** - then **cuts a wind path through the
flood and rides it**. Art bar = real monsoon flood stills (wet reflective
water, sodium/LED lights, emergency orange accents), not dry neon corridor.
Portfolio / fidelity showpiece; Snowflow-class density. Stall: cut content,
keep the flood look - one beautiful strip.

---

## Domain table

| Domain | Lock |
|---|---|
| Job / outcome | Wow + draw-lock-ride wind through wet night city |
| Users / who | **Hardcore** WebGPU players + portfolio viewers; Inkfall owns broad/casual share. PH FB optional later; clip (D) for can't-launch |
| Surfaces | Web 3D game; later habagat.egaimanuel.tech + optional PWA |
| Constraints | Mobile-first **Android 12+ Chrome** only (confirmed 2026-07-30; operator: no point converting Android 12- into AI audience); original IP only (air-bend *mechanic family*, not Avatar lore); pure skill score if scoring ships; no P2E |
| Risk | Fidelity chase can stall playable loop; even on Android 12+, WebGPU still needs supported GPU (Qualcomm/ARM path) - not 100% of devices |
| Demo / claims | Portfolio still / short clip + playable strip; public score post optional later |
| Learning goals | High-fidelity web 3D; wet city + rain + neon; 3D gesture-commit feel |
| Non-goals | Avatar IP/characters; multi-spell Snowflow clone; full 15-archetype roster before look; Void Parry unless operator flips; Capacitor unless needed |
| Burn memory | Inkfall: feel laws + archetype roster work - keep laws; delay roster under showpiece cut |

---

## Product decisions (confirmed)

| Decision | Choice |
|---|---|
| Primary purpose | Portfolio / fidelity showpiece |
| First 30s feel | Night monsoon city wow + ride wind I drew |
| Session-1 ambition | Snowflow-class fidelity chase |
| Hero | Human runner / courier |
| Camera | Chase 3rd-person, slightly elevated |
| First non-negotiable wow | **Baha flood** - murky reflective water, heavy rain, practical/emergency lights; wind path through flood |
| Time of day | **Any** (day/overcast/night) - night not required (operator 2026-07-30) |
| Fantasy | Habagat bender: draw wind -> lock parts baha -> ride to high ground |
| Stall fallback | Cut content, keep look - one beautiful strip |
| Core loop (from brief) | Draw wind ribbon -> release locks -> snappy ride; multi-try breath; no mid-draw chase |
| Level content early | Minimal; strip / corridor over full archetype bank |

---

## Feel laws (non-negotiable, from Inkfall)

1. No mid-draw chase of the incomplete ribbon.
2. Multi-try breath budget.
3. Snappy after lock; calm while aiming.
4. Headless feel tests as soon as physics exists.
5. Archetype roster later - not a gate for first showpiece.

---

## Assumption ledger

| ID | Assumption | Tag |
|---|---|---|
| A1 | Portfolio showpiece outranks endless levels this arc | confirmed |
| A2 | Human courier + chase camera | confirmed |
| A3 | City / rain / neon before multi-verb spells | confirmed |
| A4 | Fallback = one beautiful strip | confirmed |
| A5 | Engine pin = **C WebGPU-first** (Babylon.js WebGPU + custom scene; Snowflow-class fidelity chase) | **pinned** 2026-07-30 operator "C + D. go" |
| A6 | WebGPU required for live play; can't-launch gets video (A11) - no WebGL2 fidelity ceiling | **pinned** with C |
| A7 | FB score-challenge is not a v0 gate | unconfirmed - treat as later unless operator upgrades |
| A8 | Working title HABAGAT sticks | unconfirmed - naming free |
| A9 | Target floor = **Android 12+ Chrome** (not older Android) | **confirmed** 2026-07-30 |
| A10 | Rationale: **no point converting Android 12- users into AI audience** - product and share path assume modern phone Chrome; do not spend fidelity or support budget on pre-12 | **confirmed** 2026-07-30 (operator words) |
| A11 | **Can't launch -> recorded video** (portfolio/share path). Live play for capable devices; do not water down fidelity for universal launch. | **confirmed** 2026-07-30 (operator words) |
| A12 | Stack pin **C + D** | **pinned** 2026-07-30 |

---

## Explicit non-goals

- Cloning Snowflow (snow trenches, 5 water spells, healing footprint sim)
- Marketing with Avatar / waterbender / airbender IP
- Shipping 15+ archetypes before a portfolio-quality still
- P2E / wallet / grind economy
- Rebuilding Inkfall in 3D

---

## Success checks

| Signal | How we check |
|---|---|
| Wow | Operator would post a still/clip without apology |
| Ride | Draw -> lock -> ride feels snappy; no mid-draw auto-chase |
| Identity | Scene reads as wet PH monsoon night city, not generic neon alley |
| Scope | One beautiful strip playable; content cut if needed to protect look |

---

## Snowflow reference (context only)

- X: https://x.com/hey_madni/status/2082399524044296263
- Role: **fidelity bar + elemental juice ambition**, not design SSOT
- Steal: browser-native density, weather reaction, cloth-class motion ambition
- Do not steal: multi-spell sandbox, snow trench core loop, Avatar-adjacent framing

---

## First next action (after this file)

1. Research matrix filled: `docs/ai/RESEARCH-BRIEF-2026-07-30-habagat.md`
2. **Stop for pin accept** - no scaffold until operator accepts Approach A (or revises)
3. Then: scaffold `C:\Projects\habagat` -> Plan A spike

---

## Open unknowns (honest)

- Engine pin (Three.js vs Babylon vs WebGPU-first) - still open
- Whether WebGPU is **preferred** path with WebGL2 fallback, or WebGL2-first with WebGPU later (Android 12+ floor makes WebGPU viable, not mandatory-only)
- Mobile GPU budget for rain + reflections
- Whether score exists in first public build
- Hero art path (kitbash vs procedural vs simple stylized mesh)
