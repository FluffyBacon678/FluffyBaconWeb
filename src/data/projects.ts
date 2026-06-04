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
  date: string          // YYYY-MM-DD (last updated / last pushed)
  featured: boolean     // currently used as a pin flag (no separate section)

  // === OPTIONAL — used on the project detail page ===
  tagline?: string                  // short subtitle under the title
  sections?: ProjectSection[]       // free-form sections in order
  screenshots?: ProjectScreenshot[]
  links?: ProjectLink[]             // extra links (GitHub/demo auto-added below)
  githubUrl?: string                // shortcut — becomes a "GitHub" link
  demoUrl?: string                  // shortcut — becomes a "Live demo" link
}

// ─────────────────────────────────────────────────────────────
// Order in this list = order shown on the projects page.
// Convention: newest pushed first.
// HOW TO ADD: copy any block, change the fields. The `id` becomes the URL.
// HOW TO REMOVE: delete the object.
// ─────────────────────────────────────────────────────────────

export const projects: Project[] = [

  {
    id: 'forest-wallpaper-village',
    title: 'Forest Wallpaper Village',
    status: 'Active',
    category: 'Wallpaper Engine',
    description:
      'An animated forest scene with villagers — built as an interactive Wallpaper Engine wallpaper.',
    tech: ['HTML', 'JavaScript', 'CSS', 'Wallpaper Engine'],
    githubUrl: 'https://github.com/FluffyBacon678/ForestWallpaperVillage',
    date: '2026-06-03',
    featured: true,
    tagline: 'Active forest with villagers, as a desktop wallpaper.',
    sections: [
      {
        heading: 'The idea',
        body:
          'Wallpaper Engine lets you ship HTML/CSS/JS as a live wallpaper. This one is a forest scene with little villagers wandering around — animated background, small interactive details, kept light enough to leave running all day.',
      },
    ],
  },

  {
    id: 'ant-war-wallpaper',
    title: 'Ant War Wallpaper',
    status: 'Active',
    category: 'Wallpaper Engine',
    description:
      'A Wallpaper Engine wallpaper of ants fighting each other — small autonomous agents bouncing around the desktop.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Wallpaper Engine'],
    githubUrl: 'https://github.com/FluffyBacon678/AntWarWallpaper',
    date: '2026-06-02',
    featured: false,
    tagline: 'Two colonies, one desktop.',
    sections: [
      {
        heading: 'What it does',
        body:
          'Spawns two factions of ants that wander, find each other, and skirmish. Pure JS canvas behind a Wallpaper Engine wrapper. No game loop you can win — it just keeps going in the background like a desk-aquarium.',
      },
    ],
  },

  {
    id: 'kooshball-wallpaper',
    title: 'Kooshball Wallpaper',
    status: 'Active',
    category: 'Wallpaper Engine',
    description:
      'A small physics toy turned wallpaper — kooshballs bouncing around the screen as a live desktop background.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Wallpaper Engine'],
    githubUrl: 'https://github.com/FluffyBacon678/Kooshball-wallpaper',
    date: '2026-06-02',
    featured: false,
    tagline: 'Bouncy little stress-ball physics on your desktop.',
  },

  {
    id: 'school-2010-redesign',
    title: 'School 2010 Project — Redesigned',
    status: 'Active',
    category: 'Web',
    description:
      'A modern, responsive redesign of a 2010 high-school web project about learning disabilities. Hebrew, right-to-left, hosted on GitHub Pages.',
    tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages', 'RTL', 'Accessibility'],
    githubUrl: 'https://github.com/FluffyBacon678/school-2010-highschool-project',
    demoUrl: 'https://fluffybacon678.github.io/school-2010-highschool-project/',
    date: '2026-05-29',
    featured: true,
    tagline: 'Bringing a 16-year-old school project back to life.',
    sections: [
      {
        heading: 'Why',
        body:
          'I had an old high-school project from 2010 about learning disabilities — written in Hebrew, structured for the era of fixed-width tables and inline styles. Old web, old code, but the content still mattered.\n\nI rebuilt the whole thing as a modern responsive static site. Same content, modern layout, proper RTL handling, accessible markup, hosted on GitHub Pages.',
      },
      {
        heading: 'Things that needed attention',
        body:
          'Right-to-left layout for Hebrew works differently than LTR — direction, mirrored padding, text alignment, scroll behavior all need explicit handling. Accessibility around screen readers and keyboard navigation also got a pass, since the original content is specifically about people who need that kind of consideration.',
      },
    ],
  },

  {
    id: 'fluffybacon-web',
    title: 'Personal Website (this site)',
    status: 'Active',
    category: 'Web',
    description:
      'My personal site — projects archive, resume, blog and gallery. Built with Vite + React + TypeScript, hosted on GitHub Pages with a cyberpunk-terminal aesthetic.',
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
    id: 'game-idler',
    title: 'GameIdler',
    status: 'Active',
    category: 'Tool / Desktop',
    description:
      'A Steam game idler — keeps games "running" to accumulate playtime, trading cards and seasonal events without occupying real game time. Written in C#.',
    tech: ['C#', '.NET', 'Steam API'],
    githubUrl: 'https://github.com/FluffyBacon678/GameIdler',
    date: '2026-05-28',
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

  {
    id: 'mineract-ai-app',
    title: 'Mineract AI App',
    status: 'In Progress',
    category: 'AI / Game',
    description:
      'A local Minecraft companion agent — follows the player, observes terrain, remembers locations and responds to in-game chat. Designed to run on a local model with no cloud dependency.',
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

]
