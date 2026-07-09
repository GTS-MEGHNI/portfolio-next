interface StackTagProps {
  label: string
}

type Category = 'infra' | 'data' | 'language' | 'framework' | 'default'

/** Maps a tech label to a colour family so tags scan as a legend, not a wall. */
const CATEGORY: Record<string, Category> = {
  // infra / devops
  Docker: 'infra', 'Docker Compose': 'infra', Nginx: 'infra', Apache: 'infra',
  Linux: 'infra', 'CI/CD': 'infra', 'GitHub Actions': 'infra', Jenkins: 'infra',
  Ansible: 'infra', 'VPS Management': 'infra', 'SSL/TLS': 'infra', Bash: 'infra',
  Beszel: 'infra', 'Uptime Kuma': 'infra',
  // data stores
  PostgreSQL: 'data', MySQL: 'data', 'SQL Server': 'data', 'Microsoft SQL Server': 'data',
  ClickHouse: 'data', Redis: 'data',
  // languages / runtimes
  PHP: 'language', 'Node.js': 'language', TypeScript: 'language', Python: 'language',
  // frameworks / APIs / libs
  Laravel: 'framework', NestJS: 'framework', 'Express.js': 'framework', 'REST API': 'framework',
  GraphQL: 'framework', WebSockets: 'framework', React: 'framework', Swagger: 'framework',
  '.NET': 'framework', PHPUnit: 'framework', TensorFlow: 'framework', 'Scikit-learn': 'framework',
  Pandas: 'framework', NumPy: 'framework',
}

const COLORS: Record<Category, { text: string; border: string }> = {
  infra: { text: '#67e8f9', border: 'rgba(34,211,238,0.35)' },
  data: { text: '#c4b5fd', border: 'rgba(167,139,250,0.35)' },
  language: { text: '#fcd34d', border: 'rgba(251,191,36,0.30)' },
  framework: { text: '#6ee7b7', border: 'rgba(52,211,153,0.30)' },
  default: { text: 'var(--muted)', border: 'var(--border)' },
}

export function StackTag({ label }: StackTagProps) {
  const { text, border } = COLORS[CATEGORY[label] ?? 'default']
  return (
    <span
      className="inline-block font-mono text-xs bg-surface border rounded px-2 py-0.5"
      style={{ color: text, borderColor: border }}
    >
      {label}
    </span>
  )
}
