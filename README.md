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

## Install on Android (Chrome - recommended)

Inkfall is a Progressive Web App. No Play Store required.

1. Open **https://inkfall-swart.vercel.app** in **Chrome** on your phone
   (not Facebook / Instagram / Messenger in-app browsers).
2. Wait a second (or tap Play once) so the service worker can register.
3. Chrome menu (three dots, top-right) -> **Install app**
   or **Add to Home screen** / **Add to phone**.
4. Confirm. Open the new **Inkfall** icon for full-screen play.

**Tips**

- If you do not see Install: you are likely in an in-app browser. Copy the link,
  open Chrome, paste it, then try again.
- Offline: after first visit the shell is cached.
- Updates: reopen when online after a deploy.
- Music: bottom-right **M** mutes ambient music (SFX still play).

### Capacitor / Play Store APK

Not the default path. PWA install is the supported Android path for now.

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
