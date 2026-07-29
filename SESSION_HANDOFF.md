# SESSION_HANDOFF - inkfall

## State

- Date: 2026-07-30 (**Android PWA shipped**)
- Game: **Inkfall** - playable web + installable PWA
- Live: **https://inkfall-swart.vercel.app**
- Repo: **https://github.com/edgarmanuel/inkfall** (main)
- Operator sign-off: **level design is great** - laws in `docs/LEARNINGS.md`

## Shipped this arc

- Core loop + A-amped paper/seal vibe
- Draw-then-lock feel (no mid-draw chase; multi-stroke ink)
- Level **archetypes** (gates, wind, patrol, moving seal, gauntlet every 5, ...)
- Feel + variety tests under `scripts/`
- Options bank for follow-on games
- **Android PWA** - manifest + SW + icons; install from Chrome home screen

## Carry forward (next game)

Read **`docs/LEARNINGS.md`** before starting Void Parry / Orbit Snap:

- Archetype roster > numeric grind
- Teach, rotate, gauntlet cadence, readable labels
- Draw-then-lock / multi-try budget / snappy-after-commit

Banked games: **`docs/GAME_OPTIONS_BANK.md`** (Void Parry preferred next product)

## Exact next action (NEW SESSION - low token)

**Goal: operator smoke-test install on Android** (you do this on phone).

1. Chrome -> https://inkfall-swart.vercel.app
2. Menu (three dots) -> **Install app** / **Add to Home screen**
3. Launch icon; confirm full-screen + play feels right (draw-then-lock)

**Optional later (only if asked):** Capacitor APK / Play Store wrap of `public/`.

**Out of scope unless asked:** new game (Void Parry), FB post body.

## Feel law (do not regress)

1. No mid-draw pull - blot pauses while finger down
2. Wells lock on release only
3. Multi-stroke ink budget
4. After lock, snappy pull (not heavy mush damping)

## FB caption (when operator posts)

```
I made a tiny game you can play in the browser.

Draw wet ink strokes - they pull a living blot like gravity.
Lift your finger to lock a well. Stack strokes if you need to.

I scored _____. Beat me:
https://inkfall-swart.vercel.app
```

## Close checklist

- [x] Level design learnings logged (`docs/LEARNINGS.md`)
- [x] Options bank present
- [x] Next session = Android deploy (not new game)
- [x] Commit + push on close
