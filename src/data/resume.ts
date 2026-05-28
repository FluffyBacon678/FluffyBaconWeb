// ─────────────────────────────────────────────────────────────
// RESUME DATA — edit the values here, nothing else needs to change.
// Add a job: copy one entry in `experience`, change the fields.
// Add a cert/edu: same idea for `education` / `certifications`.
// ─────────────────────────────────────────────────────────────

export interface ExperienceItem {
  role: string         // job title
  company: string
  location?: string    // city, country
  period: string       // "Sep 2025 – Present" or "2022 – 2023"
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
  title: 'Infrastructure / Systems / Network Administrator',
  location: 'Zikhron Yaakov, Haifa District, Israel',
  contactEmail: 'ariel.galnur@gmail.com',
  contactGitHub: 'https://github.com/FluffyBacon678',
  contactLinkedIn: 'https://il.linkedin.com/in/ariel-gal-nur-164115181',

  // Newest first. The page renders these as a vertical timeline.
  experience: [
    {
      role: 'IT Infrastructure & System Administrator',
      company: 'Ceragon Networks',
      location: 'Israel · On-site',
      period: 'Sep 2025 – Present',
    },
    {
      role: 'System Administrator',
      company: 'Ceragon Networks',
      location: 'Bucharest, Romania · On-site',
      period: 'Feb 2023 – Mar 2025',
      summary: 'On-site IT manager.',
    },
    {
      role: 'IT Infrastructure & System Administrator',
      company: 'Ceragon Networks',
      location: 'Israel',
      period: 'Feb 2020 – Mar 2023',
      summary: 'Manage and support computer hardware and Active Directory.',
    },
    {
      role: 'Network Administrator',
      company: 'IDF — Israel Defence Forces',
      period: 'Nov 2016 – Sep 2019',
    },
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
