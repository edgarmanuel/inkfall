# Inkfall learnings (carry to next game)

Captured 2026-07-30 session close. Operator confirmed: **level design is great** -
keep this pattern when building Void Parry / Orbit Snap / any short-session game.

## Feel laws (controls)

1. **Draw-then-lock** (or act-then-commit): do not apply incomplete player input
   as live force that steals the plan. Pause or ignore mid-gesture; resolve on release.
2. **Multi-try resource** - if there is a budget (ink, ammo, stamina), afford **several**
   attempts per round, not one expensive gesture that empties the bar.
3. **Mush vs yoink:** avoid per-frame damping near 0.86 (dead). Avoid full live
   cursor follow (too reactive). Middle: snappy after commit, calm during aim.
4. Headless feel tests (`scripts/physics-test.mjs`) catch regressions without play.

## Level design laws (operator: "great" - carry forward)

**Problem we hit:** same geometry every level + "more hazards" = bored by ~Lv15.

**Fix that worked - archetype roster, not numeric grind:**

| Rule | Detail |
|---|---|
| **Layouts, not multipliers** | New *shape* of puzzle each few levels (gate, corridor, wind, moving goal). Not only "same map + 1 more obstacle." |
| **Teach then rotate** | Lv1-2 tutorial, Lv3 introduce one threat, Lv4 first structure, then cycle a full roster. |
| **Boss / gauntlet cadence** | Every N levels (we used 5) combine 2-3 threats so the run has peaks. |
| **Readable twist** | Show a short label on spawn ("thread the gate", "paper wind") so the player knows what changed. |
| **Movers keep living while aiming** | Seal/patrols still move during draw-pause so timing layouts stay honest. |
| **Variety test** | Script first 30 levels: enough unique archetypes, no long consecutive duplicates, mid-run not one type dominated. |
| **Pay hard layouts** | Small score bonus for gauntlet / pinch / movers so skill peaks feel rewarded. |

**Archetypes that shipped well in Inkfall:**

- tutorial / dry lane / wall_gate / same_side / moving_seal / wind_drift
- patrol / corridor / pinch / diagonal folds / bounce_start / gauntlet

**Do not:** scale only time-down + hazard-count-up. That plateaus fast.

## Ship pattern

- Static `public/index.html` + Vercel (`npx vercel ./public --yes --prod`)
- GitHub public repo, SESSION_HANDOFF + options bank for low-token resume
- FB personal: score challenge link, not tech resume framing

## Ship pattern (Android)

- **PWA first** (done): `manifest.webmanifest` + `sw.js` + 192/512 + maskable PNGs under `public/icons/`
- Deploy root is **`public/`** - keep `vercel.json` there (not repo root) so headers apply
- Header order: catch-all first, then specific SW/manifest/icons (last match wins on Vercel)
- SW: network-first navigations, cache-first assets; bump `CACHE` in `sw.js` when precache list changes
- Install steps: README -> Chrome on Android -> Install app / Add to Home screen
- Capacitor/Play APK only if store listing needed

## Next session (this product)

**Operator:** install PWA on Android Chrome and smoke-test.
**Optional later:** Capacitor wrapper for Play Store APK.
Web live: https://inkfall-swart.vercel.app

## Next game (separate product)

See `GAME_OPTIONS_BANK.md` - prefer **Void Parry**, then Orbit Snap.
Apply feel laws + archetype level laws from day one.
