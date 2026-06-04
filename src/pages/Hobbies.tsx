import { hobbies } from '../data/hobbies'

export function Hobbies() {
  return (
    <>
      <header className="page-header">
        <div className="page-header-prefix">// USER / HOBBIES</div>
        <h2 className="page-header-title">Hobbies</h2>
        <p className="page-header-subtitle">
          What I do when I&apos;m not at work
        </p>
      </header>

      <div className="hobbies-page">
        <div className="hobbies-grid">
          {hobbies.map(h => (
            <article className="hobby-card" key={h.id}>
              <div className="hobby-card-head">
                <span className="hobby-card-code" aria-hidden="true">{h.code}</span>
                <h3 className="hobby-card-title">{h.title}</h3>
              </div>
              <p className="hobby-card-desc">{h.description}</p>
              {h.tags && h.tags.length > 0 && (
                <div className="hobby-card-tags">
                  {h.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
