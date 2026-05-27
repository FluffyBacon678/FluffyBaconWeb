# Fluffy Bacon Personal Lab

Personal GitHub Pages website for projects, resume, gallery, and blog posts.

Built with **Vite + React + TypeScript** — static, fast, free to host.

---

## Features

- Static React site, no backend or database
- GitHub Pages ready with automated deployment
- All content in editable TypeScript data files
- Responsive layout (desktop 3-column → tablet → mobile stacked)
- Retro personal-site design: thick borders, white panels, monospace labels
- Project cards with status badges and category filtering
- Blog posts with full detail pages
- Gallery with lightbox and category filters
- Resume page with all content in one data file
- Images gracefully fall back to placeholders if missing

---

## Local Development

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

---

## Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build:

```bash
npm run preview
```

---

## Deploy to GitHub Pages

### Option 1 — Automatic (GitHub Actions, recommended)

1. Push this repo to GitHub as `FluffyBaconWeb` (or your preferred name).
2. Go to **Settings → Pages** in your GitHub repository.
3. Under **Source**, select **GitHub Actions**.
4. Push to the `main` branch — the site deploys automatically.
5. Your site will be at: `https://FluffyBacon678.github.io/FluffyBaconWeb/`

> The workflow file is at `.github/workflows/deploy.yml` — no changes needed.

### Option 2 — Manual (gh-pages)

```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

### Changing the repository name

If your repository is named differently, update `vite.config.ts`:

```typescript
// For project sites (github.io/REPO_NAME):
base: '/YOUR_REPO_NAME/',

// For username sites (FluffyBacon678.github.io):
base: '/',
```

---

## Editing Content

All content lives in `src/data/`. You never need to touch component files to update content.

| File | What it controls |
|------|-----------------|
| `src/data/news.ts` | Homepage news feed entries |
| `src/data/projects.ts` | Projects page cards |
| `src/data/blogPosts.ts` | Blog post list and content |
| `src/data/gallery.ts` | Gallery image list and metadata |
| `src/data/resume.ts` | All resume content, skills, experience |

Each file has comments explaining how to add entries.

---

## How to Add a New Project

Open `src/data/projects.ts` and copy one of the existing project objects:

```typescript
{
  id: 'my-new-project',           // unique slug, no spaces
  title: 'My New Project',
  status: 'In Progress',          // Concept | In Progress | Active | Archived
  category: 'Web',
  description: 'What it does.',
  tech: ['React', 'TypeScript'],
  githubUrl: 'https://github.com/you/repo',  // optional — remove if no link yet
  date: '2026-05-27',
  featured: false,
},
```

---

## How to Add a New Blog Post

Open `src/data/blogPosts.ts` and copy one object:

```typescript
{
  slug: 'my-post-title',          // URL-safe, lowercase, hyphens
  title: 'My Post Title',
  date: '2026-05-27',
  tags: ['Tag1', 'Tag2'],
  summary: 'One sentence summary shown on the blog list page.',
  content: `Full post content here.

Use blank lines between paragraphs.

Each blank line creates a new paragraph.`,
},
```

---

## How to Update the Resume

Open `src/data/resume.ts` — all fields are in one `resumeData` object.

- Edit `summary`, `skills`, `experience`, `certifications` directly.
- To enable the PDF download button, set `pdfAvailable: true` and place `resume.pdf` in the `public/` folder.

---

## Where to Put Images

All images go in `public/images/`. They are served from there automatically.

| File | Used for |
|------|----------|
| `public/images/banner.jpg` | Top hero banner |
| `public/images/home-left.jpg` | Homepage left panel |
| `public/images/home-right.jpg` | Homepage right panel |
| `public/images/*.jpg` | Gallery images |

For gallery images, after placing the file in `public/images/`, add an entry to `src/data/gallery.ts`:

```typescript
{
  id: 'unique-id',
  filename: 'my-photo.jpg',       // exact filename in public/images/
  title: 'Photo Title',
  category: 'Homelab',
  description: 'Caption for the lightbox view.',
  date: '2026-05-27',
},
```

If an image file is missing, the site shows a styled placeholder — nothing breaks.

---

## Folder Structure

```
FluffyBaconWeb/
├── public/
│   ├── images/           ← put your photos here
│   │   ├── banner.jpg
│   │   ├── home-left.jpg
│   │   └── home-right.jpg
│   └── resume.pdf        ← optional, enables download button
├── src/
│   ├── assets/
│   ├── components/       ← reusable UI components
│   │   ├── BlogCard.tsx
│   │   ├── Footer.tsx
│   │   ├── GalleryGrid.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── ImageWithFallback.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── NewsFeed.tsx
│   │   ├── Panel.tsx
│   │   └── ProjectCard.tsx
│   ├── data/             ← EDIT THESE to update content
│   │   ├── blogPosts.ts
│   │   ├── gallery.ts
│   │   ├── news.ts
│   │   ├── projects.ts
│   │   └── resume.ts
│   ├── pages/            ← one file per page
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   ├── Gallery.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   ├── Projects.tsx
│   │   └── Resume.tsx
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   └── images.ts
│   ├── App.tsx
│   └── main.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml    ← GitHub Actions auto-deploy
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## TODOs — Personal Photos

These files are placeholders until you add your own images:

- [ ] `public/images/banner.jpg` — wide desk/workspace photo (any aspect ratio, wide preferred)
- [ ] `public/images/home-left.jpg` — field work / server room photo (portrait works well)
- [ ] `public/images/home-right.jpg` — server rack / homelab photo
- [ ] `public/images/*.jpg` — gallery photos (add filenames to `src/data/gallery.ts`)
- [ ] `public/resume.pdf` — PDF resume (then set `pdfAvailable: true` in `src/data/resume.ts`)

The site looks good without any of these — all images fall back to styled placeholders.

---

Built by Fluffy Bacon · Hosted on GitHub Pages
