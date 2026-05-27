import { resumeData } from '../data/resume'
import { getPublicUrl } from '../utils/images'

export function Resume() {
  const r = resumeData

  return (
    <>
      <header className="page-header">
        <div className="page-header-prefix">// PROFILE / RESUME.DAT</div>
        <h2 className="page-header-title">Resume</h2>
        <p className="page-header-subtitle">IT Infrastructure &amp; Systems Support</p>
      </header>

      <div className="resume-page">
        {/* HEADER */}
        <div className="resume-header">
          <div>
            <h3 className="resume-name">{r.name}</h3>
            <div className="resume-title">{r.title}</div>
          </div>
          <div className="resume-contact">
            <a href={`mailto:${r.contactEmail}`}>{r.contactEmail}</a>
            <a href={r.contactGitHub} target="_blank" rel="noopener noreferrer">
              github.com/FluffyBacon678
            </a>
            <a href={r.contactLinkedIn} target="_blank" rel="noopener noreferrer">
              LinkedIn / ariel-gal-nur
            </a>
            <span>{r.contactLocation}</span>
          </div>
        </div>

        {/* PDF BUTTON */}
        <div style={{ marginBottom: 28 }}>
          {r.pdfAvailable ? (
            <a href={getPublicUrl('resume.pdf')} download className="btn btn-primary">
              ↓ Download PDF Resume
            </a>
          ) : (
            <span className="btn disabled" aria-disabled="true">PDF coming soon</span>
          )}
        </div>

        {/* SUMMARY */}
        <section className="resume-section" aria-labelledby="summary-heading">
          <h4 className="resume-section-title" id="summary-heading">Profile Summary</h4>
          <p className="resume-summary">{r.summary}</p>
        </section>

        {/* SKILLS */}
        <section className="resume-section" aria-labelledby="skills-heading">
          <h4 className="resume-section-title" id="skills-heading">Core Skills</h4>
          <div className="skills-grid">
            {r.skills.map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="resume-section" aria-labelledby="exp-heading">
          <h4 className="resume-section-title" id="exp-heading">Experience</h4>
          {r.experience.map(exp => (
            <div key={exp.role + exp.company} className="experience-item">
              <div className="experience-role">{exp.role}</div>
              <div className="experience-company">
                <span>{exp.company}</span>
                <span className="experience-period">{exp.period}</span>
              </div>
              <ul className="experience-highlights">
                {exp.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* TECHNICAL ENVIRONMENT */}
        <section className="resume-section" aria-labelledby="env-heading">
          <h4 className="resume-section-title" id="env-heading">Technical Environment</h4>
          <div className="skills-grid">
            {r.technicalEnvironment.map(item => (
              <span key={item} className="skill-tag">{item}</span>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="resume-section" aria-labelledby="cert-heading">
          <h4 className="resume-section-title" id="cert-heading">Certifications &amp; Learning Goals</h4>
          <ul className="experience-highlights">
            {r.certifications.map(c => <li key={c}>{c}</li>)}
          </ul>
        </section>
      </div>
    </>
  )
}
