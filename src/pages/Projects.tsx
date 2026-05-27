import { useState, useMemo } from 'react'
import { projects, type ProjectStatus } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'

const ALL_CATEGORIES = Array.from(new Set(projects.map(p => p.category))).sort()
const ALL_STATUSES: ProjectStatus[] = ['Active', 'In Progress', 'Concept', 'Archived']

export function Projects() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<string>('All')

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return projects.filter(p => {
      const matchCat = category === 'All' || p.category === category
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some(t => t.toLowerCase().includes(q))
      return matchCat && matchSearch
    })
  }, [search, category])

  const featured = filtered.filter(p => p.featured)
  const rest = filtered.filter(p => !p.featured)

  return (
    <>
      <header className="page-header">
        <div className="page-header-prefix">// ARCHIVE / PROJECTS</div>
        <h2 className="page-header-title">Projects</h2>
        <p className="page-header-subtitle">
          {projects.length} entries · tools, mods, infrastructure &amp; experiments
        </p>
      </header>

      <div className="projects-page">
        <div className="projects-controls">
          <input
            type="search"
            className="projects-search"
            placeholder="Search projects..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search projects"
          />
          <button
            className={`filter-btn${category === 'All' ? ' active' : ''}`}
            onClick={() => setCategory('All')}
          >
            All
          </button>
          {ALL_CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn${category === cat ? ' active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {featured.length > 0 && (
          <>
            <div style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="badge badge-active">Featured</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {featured.length} project{featured.length !== 1 ? 's' : ''}
              </span>
            </div>
            <div className="projects-grid" style={{ marginBottom: 24 }}>
              {featured.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
          </>
        )}

        {rest.length > 0 && (
          <>
            {featured.length > 0 && (
              <div style={{ marginBottom: 8 }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--mono)' }}>
                  Other projects
                </span>
              </div>
            )}
            <div className="projects-grid">
              {rest.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
          </>
        )}

        {filtered.length === 0 && (
          <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', padding: '24px 0' }}>
            No projects match your search.
          </p>
        )}
      </div>
    </>
  )
}
