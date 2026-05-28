export interface BlogPost {
  slug: string
  title: string
  date: string
  tags: string[]
  summary: string
  content: string
}

// To add a new blog post, copy one object block and change all the values.
// The slug must be unique and URL-safe (lowercase, hyphens, no spaces).
// Content supports basic line breaks — use \n\n for paragraph breaks.
export const blogPosts: BlogPost[] = [
  {
    slug: 'starting-personal-github-website',
    title: 'Starting My Personal GitHub Website',
    date: '2026-05-26',
    tags: ['Web', 'GitHub Pages', 'React'],
    summary:
      'Why I finally built a personal site, what I wanted from it, and the tech stack I chose.',
    content: `I've been putting off building a personal website for a while. Not because I didn't want one, but because every time I started thinking about it I got stuck on the wrong questions — what framework, what design, what hosting, what content. Eventually I just decided to stop planning and start building.

The goal was simple: a place on the internet that's actually mine. Not a LinkedIn profile, not a GitHub README, not a social media page — a proper website where I can post projects, keep notes, share what I'm working on, and have a resume that I control.

For the tech stack, I went with Vite + React + TypeScript and plain CSS. No backend, no database, no server to maintain. Just static files hosted on GitHub Pages. It builds in seconds, deploys automatically when I push, and costs nothing to run. For a personal site, this is the right answer.

The design ended up somewhere between a homelab dashboard and a terminal — dark background, neon cyan accents, monospace headings, a scrolling tag strip, a status bar with live uptime, a custom cursor. I wanted it to feel personal and technical, not like a generic portfolio template. The kind of site that looks like someone actually made it.

Next steps: fill in the projects, get some real photos in the gallery, and start actually writing blog posts instead of this meta one about making a blog.`,
  },
  {
    slug: 'why-i-like-building-practical-tools',
    title: 'Why I Like Building Practical Tools',
    date: '2026-05-26',
    tags: ['Philosophy', 'Projects', 'IT'],
    summary:
      'Thoughts on why I prefer tools that solve real problems over impressive demos that go nowhere.',
    content: `The projects I find most satisfying to work on are the ones that solve a specific, annoying problem I actually have. Not demos. Not "look what this technology can do." Something I use, or something that makes a real task faster or less frustrating.

The Mineract AI App came from actually playing Minecraft and wishing I had a helper that could remember where we found iron, or what biome that village was in. Not a complicated AI agent with tool calling and memory graphs. Just something that works, that responds to chat, that I can talk to while I'm playing.

GameIdler came from a different kind of annoyance — a Steam library full of games with trading-card drops I would never claim because I had no interest in launching them again. The tools that existed were either abandoned or sketchy. Easier to build a small clean one myself.

The pattern in both cases: I'm solving a real problem I encountered, not inventing a problem to justify using a technology I like.

I think a lot of personal projects die because they start from the technology instead of the problem. "I want to build something with language models." OK, but what does it actually do? Who is it for? What problem does it solve? Without those answers, you end up building a ChatGPT wrapper and losing interest after two days.

Start with the annoying thing. Then figure out the technology.`,
  },
  {
    slug: 'learning-proxmox-docker',
    title: 'Notes From Learning Proxmox and Docker',
    date: '2026-05-26',
    tags: ['Homelab', 'Proxmox', 'Docker', 'Infrastructure'],
    summary:
      'Field notes from setting up a home lab environment with Proxmox VE and Docker for the first time.',
    content: `I've been running a homelab for a while now and the biggest jump in learning happened when I moved from "physical machines with OS installed directly" to "Proxmox with VMs and containers."

Proxmox VE is an open-source hypervisor built on Debian. You install it on bare metal and then manage VMs (KVM) and containers (LXC) from a web interface. The web interface is surprisingly good for an open-source project — you can create VMs, manage storage, set up networking, take snapshots, and monitor resource usage, all from a browser.

The first thing I noticed: having VMs means you can snapshot before you do something dangerous. This completely changes how you learn. Instead of worrying about breaking something and spending two hours fixing it, you snapshot, experiment, and roll back if it goes wrong. It makes learning much faster.

Docker came next. The jump from "install software directly on a machine" to "run it in a container" is a conceptual shift more than a technical one. Once you get it, it clicks fast. You're not installing the software — you're running a pre-packaged environment that contains the software. The host machine stays clean. When you're done, you delete the container and there's no trace.

The practical combination: Proxmox runs a few VMs. One VM is dedicated to Docker containers — self-hosted services, experiments, things I'm testing. Another VM runs a clean Windows 11 for testing Windows stuff. Another is a Debian VM I use for Linux practice.

The main thing I learned: the homelab isn't a production environment. It's a place to break things safely. The goal isn't uptime — it's learning.`,
  },
  {
    slug: 'minecraft-technical-sandbox',
    title: 'Minecraft as a Long-Term Technical Sandbox',
    date: '2026-05-26',
    tags: ['Minecraft', 'Infrastructure', 'Modding', 'Systems'],
    summary:
      'How years of playing Minecraft map to real infrastructure concepts — and why it remains a useful technical environment.',
    content: `I've been playing Minecraft in some form for over a decade. At some point I stopped treating it just as a game and started treating it as a technical environment.

Running a modded Minecraft server is, in many ways, infrastructure management. You're choosing server software (Fabric vs Forge vs Paper), managing a Java process with memory limits, configuring mod interactions, maintaining a file structure that needs to be backed up, dealing with player authentication through external services, and monitoring performance. These map directly to real skills.

Redstone is logic design. You have latches, flip-flops, clock circuits, AND/OR/NOT gates, buses, memory cells. Skilled Redstone engineers build things that have the same structure as real digital logic. It's not a perfect analogy — Redstone has quirks and inefficiencies that real digital circuits don't — but the thinking patterns carry over.

Mod development is software development with immediate visual feedback. Writing a Fabric mod means learning Java, understanding the Minecraft codebase's architecture, writing mixins to intercept game behavior, using an event system, managing state. It's real programming with a very motivating development environment.

The Mineract AI App came directly from a thing I actually wanted while playing — a partner that could keep notes while exploring, remember locations, respond to chat. That maps to real systems design problems: state management, memory layers, natural language interfaces to structured data.

Minecraft keeps teaching me things. It's a good sandbox.`,
  },
  {
    slug: 'building-personal-project-archive',
    title: 'Building a Personal Project Archive',
    date: '2026-05-26',
    tags: ['Projects', 'Organization', 'GitHub'],
    summary:
      'Why I think keeping a personal project archive matters, and how I am structuring mine.',
    content: `Most of my projects live in a state somewhere between "idea in my head," "half-finished code in a folder," and "thing I built and use but never documented." Building this website is partly an attempt to fix that.

The value of a project archive isn't really to show other people — though that's useful too. It's to show yourself. When I look at a list of things I've actually built, learned, and documented, it changes how I think about what I'm capable of. It's evidence. It counteracts the feeling that you haven't made progress because most work is invisible.

GitHub is good for code, but it's bad at telling the story of what you were trying to do. README files help, but not many people write them well. A personal site with a projects page lets me write the actual story: what problem I was solving, what I learned, what I'd do differently, what the current state is.

The current archive is small on purpose — just the projects that actually have a GitHub repo with real code in it. Concept ideas live in notes, not in the project list. When a concept turns into a repo, it earns its place on the projects page. That keeps the archive honest.

The practical advice for anyone doing the same: start with what you have, not what you wish you had. A handful of real projects with honest descriptions is more valuable than an empty portfolio waiting for the perfect work to show up.`,
  },
]
