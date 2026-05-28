import { resumeData } from '../data/resume'
import { getPublicUrl } from '../utils/images'

export function Resume() {
  const r = resumeData

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

        {/* EXPERIENCE TIMELINE */}
        <section className="resume-section" aria-labelledby="exp-heading">
          <h3 className="resume-section-title" id="exp-heading">Experience</h3>
          <div className="timeline">
            {r.experience.map((exp, i) => (
              <div key={`${exp.company}-${i}`} className="timeline-item">
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-period">{exp.period}</div>
                <div className="timeline-content">
                  <div className="timeline-role">{exp.role}</div>
                  <div className="timeline-company">
                    {exp.company}
                    {exp.location && <span className="timeline-location"> · {exp.location}</span>}
                  </div>
                  {exp.summary && <p className="timeline-summary">{exp.summary}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        {r.education.length > 0 && (
          <section className="resume-section" aria-labelledby="edu-heading">
            <h3 className="resume-section-title" id="edu-heading">Education</h3>
            <div className="timeline">
              {r.education.map((edu, i) => (
                <div key={`${edu.school}-${i}`} className="timeline-item">
                  <div className="timeline-marker" aria-hidden="true" />
                  <div className="timeline-period">{edu.period}</div>
                  <div className="timeline-content">
                    <div className="timeline-role">{edu.qualification}</div>
                    <div className="timeline-company">{edu.school}</div>
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
