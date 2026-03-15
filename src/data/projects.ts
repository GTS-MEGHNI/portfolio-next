export interface Project {
  title: string
  description: string
  metric?: string
  stack: string[]
  badge?: 'Client work' | 'Research' | 'Freelance'
}

export const projects: Project[] = [
  {
    title: 'Multi-Environment Infrastructure Platform',
    description: 'Designed and maintain a multi-tenant VPS infrastructure hosting 5 production environments for Sadeem. Built custom Nginx routing, automated SSL renewal, and zero-downtime deployment pipelines.',
    metric: '~95% uptime · 5 VPS environments',
    stack: ['Docker', 'Nginx', 'GitHub Actions', 'Linux', 'Bash'],
    badge: 'Client work',
  },
  {
    title: 'High-Traffic REST API Platform',
    description: 'Architected a Laravel REST API serving 1,000+ active users with Redis-backed caching and PostgreSQL query optimisation. Response latency dropped 40% after the optimisation sprint.',
    metric: '1k+ users · 40% faster responses',
    stack: ['Laravel', 'PostgreSQL', 'Redis', 'PHP'],
    badge: 'Client work',
  },
  {
    title: 'CI/CD Deployment Automation',
    description: 'Replaced a 2-hour manual deployment process with a fully automated GitHub Actions pipeline — build, test, SSH deploy — reducing release time to under 5 minutes for all environments.',
    metric: '2hrs → <5 mins deployment',
    stack: ['GitHub Actions', 'Docker Compose', 'Bash', 'Linux'],
    badge: 'Client work',
  },
  {
    title: 'E-Commerce SaaS Backend',
    description: 'Built a multi-vendor e-commerce API with Stripe payment integration, order management, and real-time inventory tracking via WebSockets for a logistics startup.',
    stack: ['Laravel', 'MySQL', 'Stripe API', 'WebSockets', 'Redis'],
    badge: 'Freelance',
  },
  {
    title: 'API Design Pattern Research',
    description: 'Conducted research on REST API design patterns suited for resource-constrained server environments. Findings were published as 7 technical articles used as reference by engineering teams.',
    metric: '7 articles published',
    stack: ['FastAPI', 'Python', 'PostgreSQL'],
    badge: 'Research',
  },
  {
    title: 'Real-Time Logistics Dashboard',
    description: 'Developed a WebSocket-powered logistics tracking dashboard backend for a transport company, enabling real-time driver location updates and automated dispatch notifications.',
    stack: ['Laravel', 'WebSockets', 'PostgreSQL', 'Redis', 'Docker'],
    badge: 'Freelance',
  },
]
