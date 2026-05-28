# Fluffy Bacon Personal Lab

My personal website. Vite + React + TypeScript, deployed to GitHub Pages.

**Live:** https://fluffybacon678.github.io/FluffyBaconWeb/

---

## Run it

```
npm install
npm run dev
```

## Push changes

```
git add .
git commit -m "what changed"
git push
```

GitHub Actions auto-builds and re-deploys on every push to `main`.

---

## Where to edit content

All in `src/data/`:

- `news.ts` — homepage news feed
- `projects.ts` — projects page
- `blogPosts.ts` — blog posts
- `gallery.ts` — gallery images (also drop the image file in `public/images/`)
- `resume.ts` — resume page

Photos live in `public/images/`. Banner is `banner.jpg`, home panels are `home-left.jpg` and `home-right.jpg`.

---

## Branches

- `main` — current site
- `legacy-html` — old plain-HTML version, kept as backup

---

## How the hosting works

GitHub Pages serves the **built** site, not the source. Visitors see the rendered HTML/CSS/JS, never the `.tsx` source.

Flow on every push to `main`:
1. GitHub Actions runs `npm run build` (defined in `.github/workflows/deploy.yml`)
2. It uploads the `dist/` folder to GitHub Pages
3. The live URL serves that build

Source code stays browsable at the repo URL (it's a public repo), but the deployed site at `fluffybacon678.github.io/FluffyBaconWeb/` only shows the finished website.

**One-time setup** (already done if the site loads): Settings → Pages → Source: **GitHub Actions**.
