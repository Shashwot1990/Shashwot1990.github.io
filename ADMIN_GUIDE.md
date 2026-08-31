# Portfolio Admin Guide

Your site content (Campus Life photos and Projects) is now **data-driven**. Instead of
editing HTML, you edit two JSON files — and you can do that from a web admin panel that
uploads images and commits straight to GitHub. No server to run.

---

## How it works

| Piece | What it is |
|---|---|
| `src/data/campus.json` | The Campus Life photo grid |
| `src/data/projects.json` | The Projects section (cards + filter categories) |
| `src/images/uploads/` | Where admin-uploaded images are stored in the repo |
| `.pages.yml` | Config that tells the admin panel what's editable |
| `index.html` | Fetches the JSON on load and renders the cards |

When you save in the admin panel, it commits the changed JSON (and any new image) to
`Shashwot1990/Shashwot1990.github.io`. GitHub Pages rebuilds automatically — the site
updates in ~1–2 minutes.

---

## One-time setup (Pages CMS)

1. Go to **https://app.pagescms.org**
2. Click **Sign in with GitHub** and authorize it.
   - Choose **"Only select repositories"** → pick **`Shashwot1990.github.io`** only.
3. It reads `.pages.yml` from the repo and shows two collections: **Campus Life photos**
   and **Projects**.

That's it. Bookmark the project URL it gives you.

> Pages CMS is open-source. If you ever don't want to rely on their hosted app, it can be
> self-hosted, or you can just edit the JSON files directly on github.com.

---

## Daily use

### Add a Campus Life photo
1. Open **Campus Life photos** in the admin.
2. Under **Photos**, click **Add item**.
3. **Photo** → upload from your computer (it goes to `src/images/uploads/`).
4. **Caption** → e.g. "Taste of Nepal 2024".
5. **Icon** → a Font Awesome class. Common ones:
   `fa-camera` `fa-utensils` `fa-rocket` `fa-university` `fa-mountain`
   `fa-futbol` `fa-music` `fa-heart` `fa-users` `fa-plane`
6. **Feature as large tile** → turn on for at most one photo (it spans 2×2).
7. **Save**.

### Add a Project
1. Open **Projects** → **Add item**.
2. Fill **Title**, upload an **Image** (a real screenshot beats stock art).
3. **Category** — must be one of `web`, `ml`, `gis`, `mobile`, `game`
   (these are the filter buttons on the site).
4. **Tech tags** — add each tech as its own tag.
5. **Description** — 1–2 sentences.
6. **Links** — add one per link:
   - **Link text**: "View Code" / "Live Demo"
   - **URL**: full `https://...` for external, or a local page like `geolocate.html`
   - **Icon**: `fa-github`, `fa-external-link-alt`, `fa-globe`, ...
   - **Brand icon?**: ON for GitHub/LinkedIn logos, OFF for generic icons
7. **Save**. Reorder cards by dragging items in the list.

---

## Notes / gotchas

- **Existing images are still Unsplash URLs.** They'll render fine but may show as broken
  thumbnails inside the admin's image picker. Replace them by uploading real photos when
  you have them.
- **Category typos break the filter.** Stick to the five allowed values.
- **Order matters** for projects — the first item shows first. Put your best work on top.
- **Rebuild delay** — give GitHub Pages a minute or two after saving before you refresh.
- If a card doesn't appear, the JSON is probably malformed — check the file on github.com
  (it will show a parse error).

---

## Editing without the admin panel

Both files are plain JSON. You can edit them directly in the GitHub web editor
(`github.com/Shashwot1990/Shashwot1990.github.io` → navigate to the file → pencil icon),
or locally and push. Same result.
