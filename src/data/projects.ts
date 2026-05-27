export type ProjectStatus = 'Concept' | 'In Progress' | 'Active' | 'Archived'

export interface Project {
  id: string
  title: string
  status: ProjectStatus
  category: string
  description: string
  tech: string[]
  githubUrl?: string
  demoUrl?: string
  date: string
  featured: boolean
}

// To add a new project, copy one object block and change all the values.
// Set featured: true to highlight it at the top of the projects page.
export const projects: Project[] = [
  {
    id: 'personal-website',
    title: 'Personal GitHub Website',
    status: 'Active',
    category: 'Web',
    description:
      'This website — a personal project hub, portfolio, and lab notes archive. Built with Vite + React + TypeScript and hosted on GitHub Pages. Designed to be easy to edit and expand over time.',
    tech: ['Vite', 'React', 'TypeScript', 'CSS', 'GitHub Pages'],
    githubUrl: 'https://github.com/FluffyBacon678/FluffyBaconWeb',
    date: '2026-05-26',
    featured: true,
  },
  {
    id: 'homelab-proxmox',
    title: 'Homelab / Proxmox Learning Lab',
    status: 'In Progress',
    category: 'Infrastructure',
    description:
      'Infrastructure learning environment built around Proxmox VE. Running Linux VMs, Docker containers, and self-hosted services. Used for testing network configurations, deployment workflows, and learning enterprise-style infrastructure at home.',
    tech: ['Proxmox VE', 'Linux', 'Docker', 'Networking', 'Self-hosting'],
    date: '2026-01-01',
    featured: true,
  },
  {
    id: 'minecraft-ai-companion',
    title: 'Minecraft AI Companion',
    status: 'Concept',
    category: 'AI / Game',
    description:
      'A local Minecraft companion agent that can follow the player, observe and remember locations, respond to in-game chat commands, and assist with navigation. Built around lightweight local AI inference so it runs without cloud dependency.',
    tech: ['Python', 'Mineflayer / Baritone', 'Local LLM', 'Minecraft Java'],
    date: '2026-03-01',
    featured: true,
  },
  {
    id: 'win-taskmanager-ai',
    title: 'Windows Task Manager AI Explainer',
    status: 'In Progress',
    category: 'AI / Windows',
    description:
      'A desktop tool that reads running processes, resource usage spikes, and suspicious activity from Windows Task Manager data, then explains them in plain language using a local or cloud AI model. Aimed at non-technical users and IT support workflows.',
    tech: ['Python', 'psutil', 'Windows API', 'Local LLM / Claude API'],
    date: '2026-04-01',
    featured: false,
  },
  {
    id: 'android-bt-macro',
    title: 'Android Bluetooth Macro Keyboard',
    status: 'Concept',
    category: 'Mobile / Hardware',
    description:
      'An Android app concept that registers as a Bluetooth HID keyboard device, allowing a phone to send customizable text macros, snippets, and shortcuts to any paired computer or device — without special software on the host.',
    tech: ['Android', 'Kotlin', 'Bluetooth HID', 'HID Protocol'],
    date: '2026-02-01',
    featured: false,
  },
  {
    id: 'minecraft-golems',
    title: 'Minecraft Extra Golems / Hive Mind Storage',
    status: 'Concept',
    category: 'Modding',
    description:
      "A Fabric mod concept for smarter item-sorting golems with memory of item locations, improved routing logic, and a \"hive mind\" storage network where all golems share awareness of the storage system's state.",
    tech: ['Java', 'Fabric API', 'Minecraft Modding'],
    date: '2026-03-15',
    featured: false,
  },
]
