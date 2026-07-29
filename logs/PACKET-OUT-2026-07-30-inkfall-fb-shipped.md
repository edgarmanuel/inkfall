# PACKET-OUT-2026-07-30-inkfall-fb-shipped: inkfall -> egai-audience

> **INFORMATIONAL + WORK-ORDER.** Inkfall FB personal post shipped. Dest
> logs the share URL, marks the post file logged, and banks operator Taglish
> edit patterns as a reusable guide for future FB-personal posts.

- Source: inkfall (`C:\Projects\inkfall`), 2026-07-30 session (Grok)
- Destination: egai-audience (`C:\Projects\egai-audience`)
- Scope path: `content/04_posts/`, `content/06_tracking/`, `SESSION_HANDOFF.md`
- Direction: **outbound** (current = inkfall)
- Status: **Applied** (dest mirrored 2026-07-30)
- Class: informational + work-order (log ship + capture guide)
- Builds on: inkfall ship arc close; handoff pointed at
  `content/04_posts/2026-07-30_build_inkfall-game.md`

---

## 0. Why

Operator shipped the Inkfall build post on Facebook personal (Professional Mode)
and edited the Taglish blurb on the read-aloud / paste pass. Audience spoke still
shows that post as `ready` with empty `posted:`. Without a packet, the live URL
and the rewrite patterns (how English scaffold became operator Taglish) do not
land in the tone capture path for other posts.

---

## 1. What

### 1A. Ship fact (log this)

| Field | Value |
|---|---|
| Post file | `content/04_posts/2026-07-30_build_inkfall-game.md` |
| Surface | Facebook personal only (group skipped; LI/X optional, not claimed here) |
| Live share URL | https://www.facebook.com/share/p/19Ah4HnD7c/ |
| Product | https://inkfall.egaimanuel.tech |
| Score in body | 5513 (operator-filled) |
| Week bucket | 2026-07-27..08-02 (+1 FB personal) |

### 1B. As-posted FB personal body (operator-owned Taglish)

Treat the FACEBOOK personal fenced block in the post file as the as-posted spine
unless the operator pastes a delta. Captured body at packet time:

```
Meron pa kong 40% sa Grok limit ko.

So I asked it to help me build games. Target was under two hours. I got one playable in under an hour. 2% lang ang nagamet. so gawa pa ko ng isang mas malufet before 5am

Yun ang AI: describe the feel, play it, fix what is wrong, ship a link someone can open on their phone. No deck. No "coming soon."

Pag may idea ka, instead na mag ask ka sa isang engineering team, ayan lang sya, behind a $20 paywall. Sobrang worth it.

Inkfall is live. Draw wet ink strokes - they pull a living blot like gravity. Lift your finger to lock a well. Stack strokes if you need room. Guide it into the red seal before the page dries.

Works in the browser. On Android, open in Chrome (not the Facebook in-app browser) -> menu (three dots) -> Install app or Add to Home screen. Full screen from the home icon after that.

I scored 5513. Beat me:
https://inkfall.egaimanuel.tech
```

Do not grammar-correct Tagalog particles, spellings, or mid-sentence switches
(TONE_CORE inv 7; 04_posts/README).

### 1C. GUIDE - how to adjust English scaffolds into FB-personal Taglish

Use this when drafting **future** posts. Agent still crafts the English half
and the LI/X variants; operator owns the final Taglish paste.

| Step | Do | Do not |
|---|---|---|
| 1. Scaffold English first | Honest hook + process + proof + soft CTA in plain English (LI canonical) | Paste agent English raw to FB personal |
| 2. Open in Tagalog when the beat is personal budget / vibe | Leftover-limit / journey openers switch first: "Meron pa kong 40% sa Grok limit ko." | Force full pure-Tagalog essay |
| 3. Keep tech / ops words in English | Grok, Chrome, Install app, seal, well, score, product name, URLs | Translate product mechanics into textbook Tagalog |
| 4. Code-switch the conversation half | Short Taglish joins on budget, next move, worth-it: "2% lang ang nagamet", "Yun ang AI:", "Sobrang worth it." | Polish particles toward formal grammar |
| 5. Allow one operator-only value beat | This ship added the "$20 paywall vs engineering team" line - not in LI scaffold; keep if true | Invent client outcomes or fake hours |
| 6. Mechanics + install stay English | Full product how-to + Chrome (not FB in-app) stay English for clarity | Hide install path in pure Tagalog |
| 7. Fill blanks before paste | Score, live URL, any blank | Ship with "____" |
| 8. Soft CTA only | Score challenge + link (build posts); no Book / AUTOMATE stack | Pitch + question stack |
| 9. Log after ship | `posted:` URL, `status: logged`, WEEKLY_LOG note, optional CaptureEntry | Leave file at `ready` forever |
| 10. Capture rewrites | If operator rewrote the scaffold, append TONE_CAPTURE_LOG (surface `fb-personal`) | Invent captures when no rewrite happened |

**Spine pattern from this ship (reusable):**

1. Tagalog personal hook (resource left / what I did)
2. English process line + Taglish spend / next-build aside
3. Taglish frame on the AI method ("Yun ang AI: ...") then English process verbs
4. Optional Taglish worth-it / access beat (paywall, tool, not client claim)
5. English product mechanics
6. English install path (name the FB in-app browser trap when the link is installable)
7. English score challenge + bare URL

**Hashtags (if used):** short set only (`#BuildInPublic` `#Grok` `#AIautomation`
`#FilipinoBuilders` optional `#IndieGame`). No wall.

**Surfaces:**

- FB personal = Taglish register (this guide)
- FB group = English, no outbound promo link (this post: skip)
- LI / X = English, emoji-free; do not force Taglish onto them

### 1D. Dest file ops checklist

1. Frontmatter: `status: logged`; `posted: fb https://www.facebook.com/share/p/19Ah4HnD7c/`
2. FACEBOOK personal section: `**status** posted: <same URL>`
3. NOTES: mark shipped; LI/X still ready/optional if unused
4. WEEKLY_LOG Notes: replace "drafted / wait for paste" with shipped + URL
5. TONE_CAPTURE_LOG: append CaptureEntry (see 1C) status `new` for Sunday promote/reject
6. SESSION_HANDOFF Exact next action: remove or check off the Inkfall FB paste item

---

## 2. Evidence

- Live FB share: https://www.facebook.com/share/p/19Ah4HnD7c/
- Live product: https://inkfall.egaimanuel.tech
- Source post path (dest): `content/04_posts/2026-07-30_build_inkfall-game.md`
- Inkfall close log: `logs/SESSION_2026-07-30-close-bold-next.md`
- Inkfall handoff FB pointer: `SESSION_HANDOFF.md` (FB section)

---

## 3. Proposed dest action (destination-sovereign)

1. Apply 1D checklist (log the ship).
2. Bank 1C as CaptureEntry for Sunday ritual into TONE_SOCIAL fb-personal
   description (structure only; do not paste full Taglish into TONE_SOCIAL if
   that file stays ASCII-only - describe by pattern).
3. Do not rewrite operator Taglish.
4. Do not mark LI/X posted unless operator supplies those URLs.

---

## 4. Close condition

- Post file `status: logged` with FB URL in `posted:`
- WEEKLY_LOG note updated for week 07-27..08-02
- CaptureEntry present (or operator rejects as not durable)
- SESSION_HANDOFF no longer lists Inkfall FB paste as the top next action

Then dest sets this packet **Applied**; source mirrors.
