export interface ResumeData {
  name: string
  title: string
  contactEmail: string
  contactGitHub: string
  contactLinkedIn: string
  contactLocation: string
  summary: string
  skills: string[]
  technicalEnvironment: string[]
  experience: ExperienceItem[]
  certifications: string[]
  pdfAvailable: boolean  // set to true and add resume.pdf to public/ when ready
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  highlights: string[]
}

// Edit this object to update all resume content on the page.
// Set pdfAvailable: true and place resume.pdf in the public/ folder when ready.
export const resumeData: ResumeData = {
  name: 'Ariel Gal-Nur',
  title: 'IT Infrastructure & Systems Support',
  contactEmail: 'ariel.galnur@gmail.com',
  contactGitHub: 'https://github.com/FluffyBacon678',
  contactLinkedIn: 'https://il.linkedin.com/in/ariel-gal-nur-164115181',
  contactLocation: 'Israel',

  summary:
    'IT infrastructure and systems support professional focused on Windows environments, endpoint troubleshooting, Active Directory, hardware diagnostics, deployment workflows, and practical automation. Interested in Proxmox, Docker, Linux administration, homelab infrastructure, and AI-assisted tooling.',

  skills: [
    'Windows 10 / 11 troubleshooting',
    'Active Directory / RSAT',
    'Endpoint support and deployment',
    'Dell hardware and driver diagnostics',
    'BitLocker / disk / boot diagnostics',
    'RDP and remote support',
    'Networking fundamentals (TCP/IP, DNS, DHCP)',
    'PXE / deployment workflow troubleshooting',
    'Documentation and knowledge-base writing',
    'GitHub project organization',
    'Linux administration (learning)',
    'Docker (learning)',
    'Proxmox VE (learning)',
  ],

  technicalEnvironment: [
    'Windows 10 / Windows 11',
    'Active Directory',
    'RSAT',
    'PowerShell',
    'Dell Command Update / Dell SupportAssist',
    'Remote Desktop Protocol (RDP)',
    'Git / GitHub',
    'Linux (Debian / Ubuntu)',
    'Docker',
    'Proxmox VE',
    'Cisco networking equipment',
    'Minecraft server / modding environments',
  ],

  experience: [
    {
      role: 'IT Support & Infrastructure Technician',
      company: 'Field Work / Internal Projects',
      period: '2023 – Present',
      highlights: [
        'Provide hardware and software support for Windows endpoints in professional environments.',
        'Perform rack installation, structured cabling, and server room organization.',
        'Maintain and troubleshoot Dell hardware including servers, workstations, and networking equipment.',
        'Deploy and configure systems using imaging workflows and Group Policy.',
        'Manage Active Directory users, groups, and organizational units using RSAT.',
        'Document procedures and build internal knowledge-base articles for recurring issues.',
      ],
    },
    {
      role: 'Homelab Infrastructure Engineer (Self-Directed)',
      company: 'Personal Lab',
      period: '2022 – Present',
      highlights: [
        'Built and maintain a Proxmox VE hypervisor environment running multiple VMs and LXC containers.',
        'Self-host services using Docker Compose on a dedicated VM.',
        'Study Linux administration, networking, and virtualization in a hands-on lab environment.',
        'Run Minecraft modded servers to explore Java process management and mod development.',
        'Experiment with local AI models and Python automation tooling.',
      ],
    },
  ],

  certifications: [
    'CompTIA A+ (in progress / planned)',
    'Proxmox VE self-study certification track',
    'Linux Foundation learning path (ongoing)',
    'Docker fundamentals (ongoing)',
  ],

  pdfAvailable: false,
}
