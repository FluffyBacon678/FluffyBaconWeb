export type ProjectStatus = 'Concept' | 'In Progress' | 'Active' | 'Archived'

export interface ProjectLink {
  label: string         // e.g. "GitHub", "Live demo", "Blog post"
  url: string
  primary?: boolean     // primary buttons are styled with accent color
}

export interface ProjectSection {
  heading: string       // e.g. "Why I built it", "How it works", "What I learned"
  body: string          // use \n\n for paragraph breaks
}

export interface ProjectScreenshot {
  src: string           // filename in public/images/ (e.g. "projects/foo.jpg")
  caption?: string
}

export interface Project {
  // === REQUIRED ===
  id: string            // unique slug (used in URL: /projects/:id) — lowercase, dashes
  title: string
  status: ProjectStatus
  category: string
  description: string   // 1-2 sentences shown on the card
  tech: string[]
  date: string          // YYYY-MM-DD (last updated)
  featured: boolean     // show in the "Featured" section at top

  // === OPTIONAL — used on the project detail page ===
  tagline?: string                  // short subtitle under the title
  sections?: ProjectSection[]       // free-form sections in order
  screenshots?: ProjectScreenshot[]
  links?: ProjectLink[]             // extra links (GitHub/demo auto-added below)
  githubUrl?: string                // shortcut — becomes a "GitHub" link
  demoUrl?: string                  // shortcut — becomes a "Live demo" link
}

// ─────────────────────────────────────────────────────────────
// HOW TO ADD A PROJECT
//   1. Copy one object from the list below.
//   2. Change at least `id`, `title`, `description`, `tech`, `date`.
//   3. Add optional `sections` for richer detail page content.
// HOW TO REMOVE A PROJECT
//   Just delete the object.
// ─────────────────────────────────────────────────────────────

export const projects: Project[] = [

  // ============ REAL PROJECTS (on GitHub) ============

  {
    id: 'fluffybacon-web',
    title: 'Personal Website (this site)',
    status: 'Active',
    category: 'Web',
    description:
      'My personal site — projects archive, resume, blog and gallery. Built with Vite + React + TypeScript, hosted on GitHub Pages with a custom cyberpunk-terminal aesthetic.',
    tech: ['Vite', 'React', 'TypeScript', 'CSS', 'GitHub Pages', 'GitHub Actions'],
    githubUrl: 'https://github.com/FluffyBacon678/FluffyBaconWeb',
    demoUrl: 'https://fluffybacon678.github.io/FluffyBaconWeb/',
    date: '2026-05-28',
    featured: true,
    tagline: 'The site you are looking at right now.',
    sections: [
      {
        heading: 'Why I built it',
        body:
          'I wanted one place on the internet that is mine — for project notes, lab work, blog posts and a CV. GitHub Pages is free and reliable. Vite + React gives me a real component model without a backend.\n\nThe earlier version was a plain HTML/CSS site (still preserved on the `legacy-html` branch). This rebuild is the React version.',
      },
      {
        heading: 'How it works',
        body:
          'Everything is a static build. All content lives in `src/data/*.ts` files so I can edit text without touching components. Images live in `public/images/`. On `git push` to main, a GitHub Actions workflow runs `npm run build` and uploads the `dist/` folder to GitHub Pages.\n\nRouting uses HashRouter (works on any static host). The cursor, scrambling text, marquee and scroll-reveal are all custom small components — no heavy animation library.',
      },
      {
        heading: 'What I learned',
        body:
          'Vite is genuinely fast. GitHub Actions for Pages deployment is much cleaner than the old gh-pages branch approach. Keeping content in typed data files (instead of MDX or a CMS) makes the whole thing trivially editable from any machine I git clone onto.',
      },
    ],
  },

  {
    id: 'mineract-ai-app',
    title: 'Mineract AI App',
    status: 'In Progress',
    category: 'AI / Game',
    description:
      'A local Minecraft companion agent — follows the player, observes terrain, remembers locations and responds to in-game chat. Built to run on local AI without cloud dependency.',
    tech: ['JavaScript', 'Mineflayer', 'Local LLM', 'Minecraft Java'],
    githubUrl: 'https://github.com/FluffyBacon678/MineractAiApp',
    date: '2026-05-24',
    featured: true,
    tagline: 'In-game assistant powered by a local model.',
    sections: [
      {
        heading: 'The idea',
        body:
          'A Minecraft bot that does more than mine wood. Chat commands like "follow", "remember this base", "head back to the iron mine" — backed by an LLM small enough to run on consumer hardware.',
      },
      {
        heading: 'Stack',
        body:
          'Mineflayer for the bot connection, a local model (Ollama / similar) for natural-language commands, and a small memory layer for places, players and tasks the bot has been told about.',
      },
      {
        heading: 'Status',
        body:
          'Bot connects, follows, responds to basic chat. Memory layer and natural-language command parsing are next.',
      },
    ],
  },

  {
    id: 'game-idler',
    title: 'GameIdler',
    status: 'Active',
    category: 'Tool / Desktop',
    description:
      'A Steam game idler — keeps games "running" to accumulate playtime, trading cards or seasonal events without occupying real game time. Written in C#.',
    tech: ['C#', '.NET', 'Steam API'],
    githubUrl: 'https://github.com/FluffyBacon678/GameIdler',
    date: '2026-05-26',
    featured: true,
    tagline: 'Idle Steam games for cards and playtime, hands-free.',
    sections: [
      {
        heading: 'What it does',
        body:
          'Spawns lightweight processes that look like real game sessions to the Steam client, so trading-card drops and timed in-game events progress without leaving the actual game open.',
      },
      {
        heading: 'Why',
        body:
          'I had a backlog of trading cards I wanted to claim from games I had no interest in re-launching. Existing tools were either abandoned or sketchy. Easier to build a small clean one.',
      },
    ],
  },

]
