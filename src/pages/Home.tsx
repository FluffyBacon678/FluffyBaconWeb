import { ImageWithFallback } from '../components/ImageWithFallback'
import { NewsFeed } from '../components/NewsFeed'
import { getImageUrl } from '../utils/images'
import { useReveal } from '../hooks/useReveal'

export function Home() {
  const left = useReveal<HTMLDivElement>()
  const center = useReveal<HTMLDivElement>()
  const right = useReveal<HTMLDivElement>()

  return (
    <div className="home-grid">
      {/* LEFT — field work / server photo */}
      <div
        ref={left.ref}
        className={`home-grid-left reveal${left.visible ? ' in-view' : ''}`}
      >
        <div className="section-number">01</div>
        <div className="home-image-panel">
          <ImageWithFallback
            src={getImageUrl('home-left.jpg')}
            alt="Working inside a server rack"
            fallbackText="public/images/home-left.jpg"
          />
        </div>
        <div className="home-image-label">
          field_work/infrastructure_moments
        </div>
      </div>

      {/* CENTER — welcome + news */}
      <div
        ref={center.ref}
        className={`home-grid-center reveal${center.visible ? ' in-view' : ''}`}
      >
        <div className="home-welcome">
          <div className="section-number">02</div>
          <div className="home-welcome-prefix">// USER: FLUFFY_BACON</div>
          <h2 className="home-welcome-title cursor">Welcome to my page</h2>
          <p className="home-welcome-text">
            This is my personal lab on the internet — a place for projects,
            infrastructure work, experiments, Minecraft systems, homelab notes,
            and anything I build while learning.
          </p>
          <p className="home-welcome-text">
            I work mostly around IT infrastructure, Windows environments,
            troubleshooting, endpoint support, and practical technical problem
            solving. I also enjoy building weird tools, game-related projects,
            and local AI ideas.
          </p>
        </div>
        <NewsFeed />
      </div>

      {/* RIGHT — rack / homelab photo */}
      <div
        ref={right.ref}
        className={`home-grid-right reveal${right.visible ? ' in-view' : ''}`}
      >
        <div className="section-number">03</div>
        <div className="home-image-panel">
          <ImageWithFallback
            src={getImageUrl('home-right.jpg')}
            alt="Server rack — homelab infrastructure"
            fallbackText="public/images/home-right.jpg"
          />
        </div>
        <div className="home-image-label">
          systems/racks/cables_troubleshooting
        </div>
      </div>
    </div>
  )
}
