export interface Job {
  company: string
  role: string
  type?: 'Contract' | 'Freelance' | 'Research'
  period: string
  location: string
  bullets: string[]
  stack: string[]
}

export const experience: Job[] = [
  {
    company: 'Sadeem Informatique',
    role: 'Senior Backend Engineer',
    period: 'Apr 2024 — Present',
    location: 'Algiers — Remote',
    bullets: [
      'Started building full-stack Laravel projects, then shifted focus to backend engineering — REST API design, database modelling, and scalable system architecture — as the company moved toward larger, more complex products.',
      'Took on DevOps responsibilities organically: provisioned and maintained <strong>5 Linux VPS environments</strong>, replaced manual SSH/FTP deployments with automated CI/CD pipelines (Jenkins, GitHub Actions, Slack alerts), <strong>cutting deployment time from ~2 hrs to minutes</strong>; implemented production monitoring achieving <strong>~95% uptime</strong> across all environments.',
      'Led solution architecture on 2 major projects — designed a scalable, multi-tier infrastructure separating application, cache, filesystem, and database layers, with isolated pre-production and production environments.',
      'Mentored 5+ junior developers on backend best practices, Git workflows, and branching policies; ran code reviews and contributed to scrum ceremonies.',
      'Wrote <strong>7 technical articles</strong> for the Sadeem engineering blog covering backend architecture and DevOps best practices.',
    ],
    stack: ['Laravel', 'MySQL', 'PostgreSQL', 'Docker', 'Jenkins', 'GitHub Actions', 'Redis', 'Swagger', 'Linux', 'Nginx', 'Apache', 'TypeScript', 'Python', 'Express.js', 'Microsoft SQL Server'],
  },
  {
    company: 'Felhanout',
    role: 'Lead Backend Developer',
    type: 'Contract',
    period: 'Dec 2023 — Jan 2024',
    location: 'Ben Aknoun, Algiers — Remote',
    bullets: [
      'Led backend design & implementation; resolved critical architectural challenges and guided the dev team.',
    ],
    stack: ['Laravel', 'MySQL', 'PHPUnit', 'Git'],
  },
  {
    company: 'sihaclub.com · jexury.com · Numisky',
    role: 'Backend Engineer',
    type: 'Freelance',
    period: 'May 2020 — Apr 2022',
    location: 'Remote',
    bullets: [
      'Led backend for 3 live platforms — REST APIs, user management, scheduling, and payments (Stripe, SATIM); <strong>one platform scaled to 1k+ users</strong>.',
      'Integrated Google, Facebook, and OpenWeatherMap APIs; owned Linux/Apache server deployment end-to-end.',
    ],
    stack: ['Laravel', 'MySQL', 'Apache', 'Linux', 'Stripe', 'SATIM', 'Google API', 'Facebook API'],
  },
  {
    company: 'CERIST Research Center',
    role: 'AI Engineer',
    type: 'Research',
    period: 'Apr 2021 — Jul 2022',
    location: 'Algiers',
    bullets: [
      'Built deep learning models (Python, TensorFlow) to predict citation impact of scientific articles; collaborated on feature engineering and large dataset processing.',
    ],
    stack: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
]
