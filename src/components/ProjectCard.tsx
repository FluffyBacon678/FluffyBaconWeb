import type { Project, ProjectStatus } from '../data/projects'

function statusBadgeClass(status: ProjectStatus): string {
  const map: Record<ProjectStatus, string> = {
    'Concept':     'badge badge-concept',
    'In Progress': 'badge badge-in-progress',
    'Active':      'badge badge-active',
    'Archived':    'badge badge-archived',
  }
  return map[status]
}

interface Props {
  project: Project
}

export function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <h3 className="project-card-title">{project.title}</h3>
        <span className={statusBadgeClass(project.status)}>{project.status}</span>
      </div>

      <div className="project-card-body">
        <p className="project-card-desc">{project.description}</p>

        <div className="project-tech">
          {project.tech.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <div className="project-card-meta">
          <span>{project.category}</span>
          <span className="sep">//</span>
          <span>{project.date}</span>
        </div>
      </div>

      <div className="project-card-footer">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub — ${project.title}`}
          >
            GitHub →
          </a>
        ) : (
          <span className="btn disabled" aria-disabled="true">GitHub — Coming soon</span>
        )}

        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo — ${project.title}`}
          >
            Demo →
          </a>
        ) : null}
      </div>
    </article>
  )
}
