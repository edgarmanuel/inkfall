# SESSION_HANDOFF - inkfall

## State

- Date: 2026-07-30
- Game: **Inkfall** (idea 4 - Ink Gravity)
- Vibe: **A-amped** wet ink on warm paper + vermilion seal stamp; success-only cyan rim flash
- Host: Vercel prod **https://inkfall-swart.vercel.app**
- Repo: **https://github.com/edgarmanuel/inkfall** (main pushed)
- Local: `npx serve public -l 3456` (may still be running)

## Shipped in v1

- Single-file canvas game in `public/index.html`
- Draw gravity wells (touch + mouse), blot physics, seal capture
- Levels escalate; dry-blot hazards from level 3
- Score + best (localStorage), juice (shake, stamp, splatter, synth SFX)
- Menu + copy score challenge for FB
- Commit: `7073487` Ship Inkfall v1

## Exact next action (fresh low-token session)

1. Open URL on Android Chrome; play 5 runs; note feel bugs
2. Optional polish packet: stronger first-run tutorial, more seal juice, level seeds
3. FB personal post with caption in README (fill score + URL)
4. If redeploying: `npx vercel ./public --yes --prod` from `C:\Projects\inkfall`

## Known limits (2h cut)

- No Play Store APK / Capacitor
- No server leaderboard
- Art is procedural canvas (not external sprite sheets)
- Title seal glyph uses CJK character in-canvas (visual only)

## FB caption

```
I made a tiny game you can play in the browser.

Draw wet ink strokes - they pull a living blot like gravity.
Get it into the red seal before the page dries.

I scored _____. Beat me:
https://inkfall-swart.vercel.app
```
