// ─────────────────────────────────────────────────────────────
// HOBBIES — edit, add, or remove entries below.
// To add: copy an object block, change the fields.
// To remove: delete the object.
// `code` is the small monospace label shown on the card (3–4 chars).
// ─────────────────────────────────────────────────────────────

export interface Hobby {
  id: string            // unique slug
  title: string
  code: string          // short uppercase label, e.g. "MC", "LAB", "WE"
  description: string   // 1–3 sentences
  tags?: string[]       // optional tag chips
}

export const hobbies: Hobby[] = [
  {
    id: 'minecraft',
    title: 'Minecraft',
    code: 'MC',
    description:
      'Long-running technical sandbox. Modded servers, Redstone contraptions, Fabric mod tinkering, automation projects, and the occasional pure-vanilla build session.',
    tags: ['Modded', 'Fabric', 'Redstone', 'Servers'],
  },
  {
    id: 'homelab',
    title: 'Homelab',
    code: 'LAB',
    description:
      'A personal rack with a Dell PowerEdge running Proxmox, a few VLAN-segmented switches, and a stack of VMs and containers for self-hosted services and Linux practice.',
    tags: ['Proxmox', 'Networking', 'Linux', 'Self-hosting'],
  },
  {
    id: 'wallpaper-engine',
    title: 'Wallpaper Engine',
    code: 'WE',
    description:
      'Building little live wallpapers as a way to mess around with HTML/CSS/JS without scope creep. Each one is small and self-contained — animated forests, ant colonies, bouncy physics toys.',
    tags: ['JavaScript', 'Canvas', 'Animation'],
  },
  {
    id: 'local-ai',
    title: 'Local AI tinkering',
    code: 'AI',
    description:
      'Running open models on my own hardware. Mostly for chat-style assistants and project ideas like the Mineract Minecraft companion — interesting because it has to work without cloud dependency.',
    tags: ['Ollama', 'Local LLM', 'Mineflayer'],
  },
  {
    id: 'pc-hardware',
    title: 'PC building & hardware',
    code: 'HW',
    description:
      'Putting machines together, swapping parts, watercooling, cable management. Where the homelab ends and the personal rigs begin.',
    tags: ['Hardware', 'Builds', 'RGB'],
  },
  {
    id: 'gaming',
    title: 'Steam gaming',
    code: 'STM',
    description:
      'Wide-ranging Steam library — strategy, sandbox, sim, occasional shooter. Big enough that I had to write GameIdler to keep up with trading card drops.',
    tags: ['Steam', 'Strategy', 'Sandbox'],
  },
]
