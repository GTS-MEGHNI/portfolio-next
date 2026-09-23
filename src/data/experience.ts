export interface Job {
  company: string
  /** Short form used on the engagement chart axis. */
  shortName: string
  role: string
  type?: 'Contract' | 'Freelance' | 'Research'
  period: string
  /** First month of the engagement, `YYYY-MM`. Drives the engagement chart. */
  start: string
  /** Last month, `YYYY-MM`; `null` means ongoing. */
  end: string | null
  location: string
  bullets: string[]
  stack: string[]
}

export const experience: Job[] = [
  {
    company: 'Sadeem Informatique',
    shortName: 'Sadeem',
    role: 'CTO',
    period: 'Apr 2024 — Present',
    start: '2024-04',
    end: null,
    location: 'Algiers — Remote',
    bullets: [
      "Lead the technical department — architecture, development, integration, and DevOps — and write the technical specifications for the company's projects, designing their architecture before development starts.",
      'Started building full-stack Laravel projects, then shifted focus to backend engineering — REST API design, database modelling, and scalable system architecture — as the company moved toward larger, more complex products.',
      'Took on DevOps responsibilities organically: provisioned and maintained the company’s <strong>production Linux VPS environments</strong>, replaced manual SSH/FTP deployments with automated CI/CD pipelines (Jenkins, GitHub Actions, Slack alerts), <strong>cutting deployment time from ~2 hrs to minutes</strong>; put every environment under production monitoring with Beszel and Uptime Kuma.',
      'Led solution architecture on 2 major projects — designed a scalable, multi-tier infrastructure separating application, cache, filesystem, and database layers, with isolated pre-production and production environments.',
      'Mentored 5+ junior developers on backend best practices, Git workflows, and branching policies; ran code reviews and contributed to scrum ceremonies.',
      'Wrote <strong>8 technical articles</strong> for the Sadeem engineering blog covering backend architecture and DevOps best practices.',
      'Built an in-house observability platform with NestJS, React, and TypeScript to monitor production exceptions, errors, and logs across client solutions, using ClickHouse for high-volume log storage, PostgreSQL, and Redis, integrated via an SDK.',
    ],
    stack: ['Laravel', 'MySQL', 'PostgreSQL', 'Docker', 'Jenkins', 'GitHub Actions', 'Redis', 'Swagger', 'Linux', 'Nginx', 'Apache', 'TypeScript', 'Python', 'Express.js', 'Microsoft SQL Server', 'Beszel', 'Uptime Kuma', 'NestJS', 'React', 'ClickHouse'],
  },
  {
    company: 'Felhanout',
    shortName: 'Felhanout',
    role: 'Lead Backend Developer',
    type: 'Contract',
    period: 'Dec 2023 — Jan 2024',
    start: '2023-12',
    end: '2024-01',
    location: 'Ben Aknoun, Algiers — Remote',
    bullets: [
      'Led backend design & implementation; resolved critical architectural challenges and guided the dev team.',
    ],
    stack: ['Laravel', 'MySQL', 'PHPUnit', 'Git'],
  },
  {
    company: 'sihaclub.com · jexury.com · Numisky',
    shortName: 'Freelance × 3',
    role: 'Backend Engineer',
    type: 'Freelance',
    period: 'May 2020 — Apr 2022',
    start: '2020-05',
    end: '2022-04',
    location: 'Remote',
    bullets: [
      'Led backend for 3 live platforms — REST APIs, user management, scheduling, and payments (Stripe, SATIM); <strong>one platform scaled to 1k+ users</strong>.',
      'Integrated Google, Facebook, and OpenWeatherMap APIs; owned Linux/Apache server deployment end-to-end.',
    ],
    stack: ['Laravel', 'MySQL', 'Apache', 'Linux', 'Stripe', 'SATIM', 'Google API', 'Facebook API'],
  },
  {
    company: 'CERIST Research Center',
    shortName: 'CERIST',
    role: 'AI Engineer',
    type: 'Research',
    period: 'Apr 2021 — Jul 2022',
    start: '2021-04',
    end: '2022-07',
    location: 'Algiers',
    bullets: [
      'Built deep learning models (Python, TensorFlow) to predict citation impact of scientific articles; collaborated on feature engineering and large dataset processing.',
    ],
    stack: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
]
