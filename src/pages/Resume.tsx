import { resumeData, type ExperienceItem } from '../data/resume'
import { getPublicUrl } from '../utils/images'

// ────────────────────────────────────────────────
// Duration helpers — parse "Sep 2025 – Present" etc.
// ────────────────────────────────────────────────
const MONTHS = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']

function parseMonthYear(s: string): Date | null {
  s = s.trim()
  const monthYear = s.match(/^([A-Za-z]+)\s+(\d{4})$/)
  if (monthYear) {
    const idx = MONTHS.indexOf(monthYear[1].toLowerCase().slice(0, 3))
    if (idx >= 0) return new Date(parseInt(monthYear[2], 10), idx, 1)
  }
  const yearOnly = s.match(/^(\d{4})$/)
  if (yearOnly) return new Date(parseInt(yearOnly[1], 10), 0, 1)
  return null
}

function parsePeriod(period: string): { start: Date; end: Date } | null {
  // Accept en-dash, em-dash, or hyphen
  const m = period.match(/^(.+?)\s*[–—-]\s*(.+)$/)
  if (!m) return null
  const start = parseMonthYear(m[1])
  const endStr = m[2].trim().toLowerCase()
  const end = endStr === 'present' ? new Date() : parseMonthYear(m[2])
  if (!start || !end) return null
  return { start, end }
}

function diffMonths(start: Date, end: Date): number {
  return Math.max(1, (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1)
}

function formatDuration(months: number): string {
  const years = Math.floor(months / 12)
  const mo = months % 12
  const parts: string[] = []
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`)
  if (mo > 0)    parts.push(`${mo} mo${mo > 1 ? 's' : ''}`)
  return parts.join(' ') || '< 1 mo'
}

function durationFor(period: string): string | null {
  const parsed = parsePeriod(period)
  if (!parsed) return null
  return formatDuration(diffMonths(parsed.start, parsed.end))
}

// ────────────────────────────────────────────────
// Group consecutive same-company entries
// ────────────────────────────────────────────────
interface CompanyGroup {
  company: string
  positions: ExperienceItem[]
  totalMonths: number
}

function groupByCompany(items: ExperienceItem[]): CompanyGroup[] {
  const groups: CompanyGroup[] = []
  for (const item of items) {
    const last = groups[groups.length - 1]
    const parsed = parsePeriod(item.period)
    const months = parsed ? diffMonths(parsed.start, parsed.end) : 0
    if (last && last.company === item.company) {
      last.positions.push(item)
      last.totalMonths += months
    } else {
      groups.push({ company: item.company, positions: [item], totalMonths: months })
    }
  }
  return groups
}

// ────────────────────────────────────────────────
export function Resume() {
  const r = resumeData
  const groups = groupByCompany(r.experience)

  return (
    <>
      <header className="page-header">
        <div className="page-header-prefix">// PROFILE / RESUME</div>
        <h2 className="page-header-title">{r.name}</h2>
        <p className="page-header-subtitle">{r.title} · {r.location}</p>
      </header>

      <div className="resume-page">
        {/* CONTACT STRIP */}
        <div className="resume-contact-strip">
          <a href={`mailto:${r.contactEmail}`}>{r.contactEmail}</a>
          <a href={r.contactGitHub} target="_blank" rel="noopener noreferrer">
            github.com/FluffyBacon678
          </a>
          <a href={r.contactLinkedIn} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {r.pdfAvailable ? (
            <a href={getPublicUrl('resume.pdf')} download className="btn btn-primary">
              ↓ PDF
            </a>
          ) : null}
        </div>

        {/* EXPERIENCE — grouped by company */}
        <section className="resume-section" aria-labelledby="exp-heading">
          <h3 className="resume-section-title" id="exp-heading">Experience</h3>

          <div className="exp-list">
            {groups.map((group, gi) => (
              <div className="exp-company" key={`${group.company}-${gi}`}>
                <div className="exp-company-header">
                  <div className="exp-company-name">{group.company}</div>
                  {group.totalMonths > 0 && (
                    <div className="exp-company-total">
                      {formatDuration(group.totalMonths)}
                    </div>
                  )}
                </div>

                <div className="exp-positions">
                  {group.positions.map((pos, pi) => {
                    const dur = durationFor(pos.period)
                    return (
                      <div className="exp-position" key={`${pos.role}-${pi}`}>
                        <div className="exp-position-marker" aria-hidden="true" />
                        <div className="exp-position-period">
                          {pos.period}
                          {dur && <span className="exp-position-duration"> · {dur}</span>}
                        </div>
                        <div className="exp-position-role">{pos.role}</div>
                        {pos.location && (
                          <div className="exp-position-location">{pos.location}</div>
                        )}
                        {pos.summary && (
                          <p className="exp-position-summary">{pos.summary}</p>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        {r.education.length > 0 && (
          <section className="resume-section" aria-labelledby="edu-heading">
            <h3 className="resume-section-title" id="edu-heading">Education</h3>
            <div className="exp-list">
              {r.education.map((edu, i) => (
                <div className="exp-company" key={`${edu.school}-${i}`}>
                  <div className="exp-company-header">
                    <div className="exp-company-name">{edu.school}</div>
                  </div>
                  <div className="exp-positions">
                    <div className="exp-position">
                      <div className="exp-position-marker" aria-hidden="true" />
                      <div className="exp-position-period">{edu.period}</div>
                      <div className="exp-position-role">{edu.qualification}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CERTIFICATIONS */}
        {r.certifications.length > 0 && (
          <section className="resume-section" aria-labelledby="cert-heading">
            <h3 className="resume-section-title" id="cert-heading">Certifications</h3>
            <div className="cert-list">
              {r.certifications.map((cert, i) => (
                <div key={`${cert.name}-${i}`} className="cert-item">
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-meta">
                    <span>{cert.issuer}</span>
                    <span className="sep">//</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
