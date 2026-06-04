import { steamProfile } from '../data/hobbies'

export function Hobbies() {
  const s = steamProfile

  return (
    <>
      <header className="page-header">
        <div className="page-header-prefix">// USER / HOBBIES</div>
        <h2 className="page-header-title">Hobbies</h2>
        <p className="page-header-subtitle">
          Mostly Steam, since 2010.
        </p>
      </header>

      <div className="hobbies-page">

        {/* === STEAM PROFILE CARD === */}
        <section className="steam-section">
          <div className="section-header">STEAM PROFILE</div>

          <a
            href={s.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="steam-profile"
          >
            <img
              className="steam-avatar"
              src={s.avatarUrl}
              alt={`${s.displayName} Steam avatar`}
              loading="lazy"
            />
            <div className="steam-profile-body">
              <div className="steam-profile-name">{s.displayName}</div>
              <div className="steam-profile-handle">/id/{s.customUrl}</div>
              <p className="steam-profile-bio">{s.bio}</p>
              <div className="steam-profile-meta">
                <span><span className="meta-label">SINCE</span> {s.memberSince}</span>
                {s.location && (
                  <span><span className="meta-label">LOC</span> {s.location}</span>
                )}
              </div>
            </div>
            <span className="steam-profile-arrow" aria-hidden="true">▶</span>
          </a>
        </section>

        {/* === TOP GAMES === */}
        <section className="steam-section">
          <div className="section-header">MOST PLAYED — LAST 2 WEEKS</div>
          <div className="steam-games">
            {s.topGames.map(g => (
              <a
                key={g.appId}
                href={`https://store.steampowered.com/app/${g.appId}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="steam-game"
              >
                <img
                  className="steam-game-capsule"
                  src={g.capsuleUrl}
                  alt={`${g.name} capsule`}
                  loading="lazy"
                />
                <div className="steam-game-info">
                  <div className="steam-game-name">{g.name}</div>
                  <div className="steam-game-hours">
                    {g.hoursRecent && (
                      <span className="hours-recent">{g.hoursRecent} hrs / 2wk</span>
                    )}
                    <span className="hours-total">{g.hoursTotal} hrs total</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>
    </>
  )
}
