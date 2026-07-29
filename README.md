# Inkfall

Draw temporary gravity with wet ink. Guide the living blot into the vermilion seal before it dries.

**Vibe:** wet ink on warm paper (amped) - calm page, loud seal-stamp moments.

## Play locally

```bash
cd C:\Projects\inkfall
npx --yes serve public -l 3456
```

Open `http://localhost:3456`.

## Deploy (Vercel)

```bash
cd C:\Projects\inkfall
npx vercel ./public --yes
```

Deploys the static `public` folder as the site root.

## FB caption (paste-ready)

```
I made a tiny game you can play in the browser.

Draw wet ink strokes - they pull a living blot like gravity.
Get it into the red seal before the page dries.

I scored _____. Beat me:
[your Vercel URL]
```

## Controls

- **Phone:** finger-draw strokes
- **Desktop:** click-drag
- Short curves steer better than long lines
- Esc abandons a run

## Stack

Static HTML5 Canvas. No build step. localStorage best score.
