# SESSION_HANDOFF - inkfall

## State

- Date: 2026-07-30 (**session closed**)
- Game: **Inkfall** (idea 4 - Ink Gravity) - playable on Vercel
- Vibe: **A-amped** wet ink on warm paper + vermilion seal; success-only cyan rim
- Host: **https://inkfall-swart.vercel.app**
- Repo: **https://github.com/edgarmanuel/inkfall** (main)
- Latest feel commits: draw-then-lock, multi-stroke ink (not mid-draw chase)

## Shipped

- Canvas game `public/index.html`
- Draw wells (touch + mouse); blot physics; seal capture; level hazards
- Score + best (localStorage); juice; copy score challenge
- Headless feel tests: `node scripts/physics-test.mjs`
- Deploy: `npx vercel ./public --yes --prod`

## Feel law (do not regress)

1. **No mid-draw pull** - blot pauses while finger/mouse is down
2. **Wells lock on release only**
3. **Multi-stroke ink** - budget supports several strokes per level
4. After lock, pull should stay snappy (not 0.86/frame mush)

## Other game options (banked for next build)

Full write-up: **`docs/GAME_OPTIONS_BANK.md`**

| # | Idea | Status | Next? |
|---|---|---|---|
| 1 | **Void Parry** | BANKED | **Best next 2h game** |
| 2 | **Orbit Snap** | BANKED | Strong alt |
| 3 | Last Courier | DEFERRED | Only thin-art scope |
| 4 | Ink Gravity / **Inkfall** | **SHIPPED** | Polish only |
| 5 | Bloom Relay | DEFERRED | Only thin endless |

You can ship another game after Inkfall; prefer **Void Parry** or **Orbit Snap**
using the same static+Vercel pattern.

## Exact next action

**Inkfall polish (optional):** Android hard-refresh playtest; FB post with score.

**New game session:** open `docs/GAME_OPTIONS_BANK.md`, pick 1 or 2, 2h light
build in a **new folder** (e.g. `C:\Projects\void-parry`), same Vercel pattern.

## FB caption

```
I made a tiny game you can play in the browser.

Draw wet ink strokes - they pull a living blot like gravity.
Lift your finger to lock a well. Stack strokes if you need to.

I scored _____. Beat me:
https://inkfall-swart.vercel.app
```

## Close checklist

- [x] Options bank logged
- [x] Feel law written
- [ ] Operator FB post (when ready)
- [ ] Optional: commit this handoff + GAME_OPTIONS_BANK if not yet on remote
