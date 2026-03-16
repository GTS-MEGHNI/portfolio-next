export interface SkillPillar {
  name: string
  icon: string
  skills: string[]
}

export const skills: SkillPillar[] = [
  {
    name: 'Backend',
    icon: 'Server',
    skills: ['Laravel', 'PHP', 'Node.js', 'REST API', 'GraphQL', 'PostgreSQL', 'MySQL', 'SQL Server', 'Redis', 'WebSockets'],
  },
  {
    name: 'DevOps & Infra',
    icon: 'Cloud',
    skills: ['Docker', 'Docker Compose', 'Nginx', 'Linux', 'CI/CD', 'GitHub Actions', 'VPS Management', 'SSL/TLS', 'Bash'],
  },
  {
    name: 'Architecture',
    icon: 'Layers',
    skills: ['Solution Architecture', 'API Design', 'Database Design', 'System Design', 'Performance Optimization', 'Security Hardening', 'Test Driven Development'],
  },
]