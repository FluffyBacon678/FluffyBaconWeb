import { Link, useParams } from 'react-router-dom'
import { projects, type Project, type ProjectLink, type ProjectStatus } from '../data/projects'
import { ImageWithFallback } from '../components/ImageWithFallback'
import { getImageUrl } from '../utils/images'

function statusBadgeClass(status: ProjectStatus): string {
  const map: Record<ProjectStatus, string> = {
    'Concept':     'badge badge-concept',
    'In Progress': 'badge badge-in-progress',
    'Active':      'badge badge-active',
    'Archived':    'badge badge-archived',
  }
  return map[status]
}

/** Collect all links for a project — auto-includes github/demo shortcuts. */
function collectLinks(project: Project): ProjectLink[] {
  const out: ProjectLink[] = []
  if (project.githubUrl) out.push({ label: 'GitHub', url: project.githubUrl })
  if (project.demoUrl)   out.push({ label: 'Live demo', url: project.demoUrl, primary: true })
  if (project.links)     out.push(...project.links)
  return out
}

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <>
        <header className="page-header">
          <div className="page-header-prefix">// ERROR / 404</div>
          <h2 className="page-header-title">Project not found</h2>
        </header>
        <div className="project-detail-page">
          <Link to="/projects" className="blog-post-back">◀ /projects</Link>
        </div>
      </>
    )
  }

  const links = collectLinks(project)

  return (
    <>
      <header className="page-header">
        <div className="page-header-prefix">// PROJECT / {project.id.toUpperCase()}</div>
        <h2 className="page-header-title">{project.title}</h2>
        {project.tagline && (
          <p className="page-header-subtitle">{project.tagline}</p>
        )}
      </header>

      <article className="project-detail-page">
        <Link to="/projects" className="blog-post-back">◀ /projects</Link>

        {/* Meta strip */}
        <div className="project-detail-meta">
          <span className={statusBadgeClass(project.status)}>{project.status}</span>
          <span className="project-detail-meta-item">
            <span className="project-detail-meta-label">CATEGORY</span>
            {project.category}
          </span>
          <span className="project-detail-meta-item">
            <span className="project-detail-meta-label">UPDATED</span>
            {project.date}
          </span>
          {project.featured && (
            <span className="project-detail-meta-item project-detail-meta-featured">
              ◆ FEATURED
            </span>
          )}
        </div>

        {/* Tech stack */}
        <section className="project-detail-section">
          <h3 className="project-detail-section-title">Stack</h3>
          <div className="project-tech">
            {project.tech.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </section>

        {/* Overview / description */}
        <section className="project-detail-section">
          <h3 className="project-detail-section-title">Overview</h3>
          <p className="project-detail-body">{project.description}</p>
        </section>

        {/* Custom sections — each rendered as heading + paragraphs */}
        {project.sections?.map((section, i) => (
          <section key={i} className="project-detail-section">
            <h3 className="project-detail-section-title">{section.heading}</h3>
            <div className="project-detail-body">
              {section.body.split(/\n\n+/).map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </div>
          </section>
        ))}

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="project-detail-section">
            <h3 className="project-detail-section-title">Screenshots</h3>
            <div className="project-detail-screenshots">
              {project.screenshots.map((s, i) => (
                <figure key={i} className="project-detail-screenshot">
                  <ImageWithFallback
                    src={getImageUrl(s.src)}
                    alt={s.caption ?? `${project.title} screenshot ${i + 1}`}
                  />
                  {s.caption && <figcaption>{s.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Links */}
        {links.length > 0 && (
          <section className="project-detail-section project-detail-links">
            <h3 className="project-detail-section-title">Links</h3>
            <div className="project-detail-link-row">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${link.primary ? 'btn-primary' : ''}`}
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  )
}
