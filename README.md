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
npx vercel ./public --yes --prod
```

Deploys the static `public` folder as the site root.

**Live:** https://inkfall-swart.vercel.app

## Install on Android (PWA)

Inkfall is a Progressive Web App. No Play Store required.

1. Open **https://inkfall-swart.vercel.app** in **Chrome** on your phone.
2. Play once (or wait a second) so the service worker registers.
3. Chrome menu (three dots) -> **Install app** (or **Add to Home screen**).
4. Launch from the home-screen icon - full-screen, no browser chrome.

**Tips**

- Use Chrome (not in-app browsers like Instagram/FB WebView).
- If Install is missing: clear site data, reload, wait a few seconds, try again.
- Offline: the shell is cached after first visit; play without network once installed.
- Updates: reopen the app after a deploy; it fetches a fresh `index.html` when online.

### Capacitor / Play Store APK (optional later)

PWA covers install-and-play. For a signed Play listing, wrap `public/` with Capacitor + Android Studio. Not required for day-to-day Android play.

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
