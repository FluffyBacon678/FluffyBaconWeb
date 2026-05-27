import { useState } from 'react'
import { getImageUrl } from '../utils/images'
import { useScramble } from '../hooks/useScramble'

export function HeroBanner() {
  const [imgError, setImgError] = useState(false)
  const titleLine1 = useScramble('FLUFFY BACON', 900, 200)
  const titleLine2 = useScramble('PERSONAL LAB', 1100, 600)

  return (
    <div className="hero-banner" role="banner">
      {!imgError && (
        <img
          src={getImageUrl('banner.jpg')}
          alt="Fluffy Bacon — server rack work"
          className="hero-img"
          onError={() => setImgError(true)}
        />
      )}
      <div className="hero-banner-overlay">
        <div className="hero-meta">
          <span className="hero-meta-left">
            <span className="hero-prefix">
              <span className="hero-prefix-bracket">[</span> NODE_01 <span className="hero-prefix-bracket">/</span> READY <span className="hero-prefix-bracket">]</span>
            </span>
          </span>
          <span className="hero-meta-right available-pill">
            <span className="available-dot" aria-hidden="true" />
            AVAILABLE FOR WORK
          </span>
        </div>

        <h1 className="hero-banner-title">
          <span className="hero-title-line">{titleLine1}</span>
          <span className="hero-title-line hero-title-line--accent">
            <span className="hero-title-slash">//</span> {titleLine2}
          </span>
        </h1>

        <p className="hero-banner-subtitle">
          Infrastructure <span className="sep">·</span> Projects <span className="sep">·</span> Homelab <span className="sep">·</span> Notes
        </p>
      </div>
    </div>
  )
}
