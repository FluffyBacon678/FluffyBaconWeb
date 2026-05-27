import type { ReactNode } from 'react'
import { HeroBanner } from './HeroBanner'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { StatusBar } from './StatusBar'
import { Marquee } from './Marquee'
import { CustomCursor } from './CustomCursor'

interface Props {
  children: ReactNode
}

const MARQUEE_ITEMS = [
  'INFRASTRUCTURE',
  'HOMELAB',
  'WINDOWS',
  'ACTIVE DIRECTORY',
  'NETWORKING',
  'DOCKER',
  'PROXMOX',
  'POWERSHELL',
  'MINECRAFT',
  'LOCAL AI',
  'TROUBLESHOOTING',
  'FIELD WORK',
]

export function Layout({ children }: Props) {
  return (
    <div className="site-wrapper">
      <CustomCursor />
      <StatusBar />
      <HeroBanner />
      <Marquee items={MARQUEE_ITEMS} />
      <Navbar />
      <main className="page-content" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
