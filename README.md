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

**Live:** https://inkfall.egaimanuel.tech  
(fallback: https://inkfall-swart.vercel.app)

## Install on Android (Chrome - recommended)

Inkfall is a Progressive Web App. No Play Store required.

1. Open **https://inkfall.egaimanuel.tech** in **Chrome** on your phone
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
- Music: bottom-right **M** mutes arcade BGM (SFX still play).

### Capacitor / Play Store APK

Not the default path. PWA install is the supported Android path for now.

## FB caption (paste-ready)

```
I still had 40% left of my weekly Grok limit. So I asked it to build games for me in under two hours.

I got one done in under an hour.

That is how easy building with AI has gotten. You describe the feel, iterate while you play, and ship a real game people can open on their phone - no big team, no long timeline.

Inkfall: draw wet ink strokes. They pull a living blot like gravity. Lift your finger to lock a well. Stack strokes if you need to. Guide it into the red seal before the page dries.

Works in the browser. On Android Chrome: menu (three dots) -> Install app / Add to Home screen.

I scored _____. Beat me:
https://inkfall.egaimanuel.tech
```

## Controls

- **Phone:** finger-draw strokes
- **Desktop:** click-drag
- Short curves steer better than long lines
- Esc abandons a run

## Stack

Static HTML5 Canvas. No build step. localStorage best score.
