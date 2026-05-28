// ─────────────────────────────────────────────────────────────
// RESUME DATA — edit the values here, nothing else needs to change.
// Add a job: copy one entry in `experience`, change the fields.
// Add a cert/edu: same idea for `education` / `certifications`.
// ─────────────────────────────────────────────────────────────

export interface ExperienceItem {
  role: string         // job title
  company: string
  location?: string    // city, country
  period: string       // "Jan 2024 – Present" or "2022 – 2023"
  summary?: string     // one short sentence about the role
}

export interface EducationItem {
  school: string
  qualification: string
  period: string
}

export interface CertificationItem {
  name: string
  issuer: string
  date: string         // "Dec 2021"
}

export interface ResumeData {
  name: string
  title: string
  location: string
  contactEmail: string
  contactGitHub: string
  contactLinkedIn: string
  experience: ExperienceItem[]
  education: EducationItem[]
  certifications: CertificationItem[]
  pdfAvailable: boolean   // set true once public/resume.pdf exists
}

export const resumeData: ResumeData = {
  name: 'Ariel Gal-Nur',
  title: 'Network & Security Administrator',
  location: 'Israel',
  contactEmail: 'ariel.galnur@gmail.com',
  contactGitHub: 'https://github.com/FluffyBacon678',
  contactLinkedIn: 'https://il.linkedin.com/in/ariel-gal-nur-164115181',

  // Newest first. The page renders these as a vertical timeline.
  experience: [
    {
      role: 'TODO — role title',
      company: 'Ceragon Networks',
      location: 'Israel',
      period: 'TODO — Start month/year – Present',
      summary: 'TODO — one short sentence on the role.',
    },
    // Add older jobs below (copy the block above).
    // {
    //   role: '',
    //   company: '',
    //   location: '',
    //   period: '',
    //   summary: '',
    // },
  ],

  education: [
    {
      school: 'Ha Moshava High School',
      qualification: 'High School Diploma',
      period: '2013 – 2016',
    },
  ],

  certifications: [
    {
      name: 'Microsoft Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      date: 'Dec 2021',
    },
    {
      name: 'Network Administrator Course',
      issuer: 'IDF',
      date: 'May 2018',
    },
  ],

  pdfAvailable: false,
}
