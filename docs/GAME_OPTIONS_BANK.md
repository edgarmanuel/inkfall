# Game options bank (session 2026-07-30)

Sourced from the plan-before-build pick list for a **web + Android-browser**,
**~2h**, **FB personal / non-AI engagement** game. Built under free-proof static
HTML + Vercel.

**Principal:** operator (Egai).  
**Stack pattern proven by Inkfall:** single `public/index.html` canvas, localStorage
best score, Vercel static deploy, optional `scripts/*-test.mjs` for feel gates.

---

## Status legend

| Status | Meaning |
|---|---|
| SHIPPED | Live product from this wave |
| BANKED | Not built; fair game for a next 2h session |
| DEFERRED | Weak under 2h or content-heavy; only if scoped thin |

---

## 1. Void Parry - BANKED (strong next pick)

- **Loop:** One button. Parry the flash. Chain = score. Miss = die. Instant restart.
- **FB hook:** "One button. I got to 47. Beat me."
- **2h fit:** Excellent - time goes into feel + juice, not content.
- **Wow:** Impact flashes, color pulses, hit-stop; few assets.
- **Controls:** One thumb; Space / click on desktop.
- **Risk:** Feels empty if juice is weak - budget juice first.
- **Why bank it:** Best pure "one more try" after Inkfall's puzzle-draw pace.

## 2. Orbit Snap - BANKED

- **Loop:** Ship orbits a core; tap to reverse/boost; grab orbs; dodge radial hazards.
- **FB hook:** "Circular chicken game - my high score is ___."
- **2h fit:** Strong - one entity, simple geometry.
- **Wow:** Trails + planet glow.
- **Controls:** Tap / hold; left-right on desktop.
- **Risk:** Orbit feel mush if physics soft - prefer fixed angular speed.
- **Why bank it:** Distinct motion in the feed; still low content volume.

## 3. Last Courier - DEFERRED (thin-art only)

- **Loop:** 3-lane swipe runner; avoid crashes; near-miss score.
- **FB hook:** Familiar endless-runner.
- **2h fit:** Weak - art + spawn tuning eat the clock.
- **Only if:** Super-minimal shapes + one hero; no city tileset campaign.
- **Why deferred:** Easy to ship a janky Subway clone under time pressure.

## 4. Ink Gravity / Inkfall - SHIPPED

- **Product name:** Inkfall
- **Live:** https://inkfall.egaimanuel.tech
- **Repo:** https://github.com/edgarmanuel/inkfall
- **Vibe locked:** A-amped wet ink on warm paper + vermilion seal; success-only cyan rim
- **Host:** Vercel
- **Feel law (learned):** Draw-then-lock - pause blot while finger down; wells activate
  on release only; multi-stroke ink budget (not one-shot).
- **Path:** `C:\Projects\inkfall` - see SESSION_HANDOFF.md

## 5. Bloom Relay - DEFERRED (or thin endless)

- **Loop:** Chain adjacent glowing tiles under a timer; combos bloom the board.
- **FB hook:** Pretty, casual, non-gamer friendly.
- **2h fit:** Medium-weak without a strong twist; needs tile variety.
- **Only if:** One endless mode, one palette, no garden meta.
- **Why deferred:** Generic match risk; less "one more try" than 1-2.

---

## Recommended order for "another one after Inkfall"

1. **Void Parry** - fastest second ship; opposite skill fantasy (timing vs draw).
2. **Orbit Snap** - if you want a different look in the feed.
3. Bloom / Courier only with ruthless scope cuts.

## Shared non-goals (keep for next game too)

- Play Store APK / Capacitor out of first 2h
- No accounts, no server leaderboard in v1
- FB post = fun challenge link, not automation resume copy
- ASCII-first markdown (repo hooks)

## Session note

Logged on session close 2026-07-30 so a fresh low-token session can pick without
reloading the full research chat.

**Level design:** operator approved Inkfall archetype progression - carry rules in
`LEARNINGS.md` into any next game (do not only scale time/hazard count).

**Inkfall next engineering session:** Android deploy (PWA and/or Capacitor), not
a new title, until that ships or operator reprioritizes.
