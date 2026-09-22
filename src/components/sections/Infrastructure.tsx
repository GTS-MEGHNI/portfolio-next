import { Flow, Node } from '@/components/ui/Diagram'
import { Unit, UnitHeader } from '@/components/ui/Unit'

const TIERS = ['Application', 'Cache', 'Filesystem', 'Database'] as const
const ENVIRONMENTS = ['Pre-production', 'Production'] as const

const readings = [
  { label: 'Linux VPS environments provisioned and maintained', value: '11' },
  { label: 'Deploy time, manual SSH/FTP → pipeline', value: '~2 h → min' },
  { label: 'Major projects with architecture led', value: '2' },
  { label: 'Monitoring', value: 'Beszel · Uptime Kuma' },
]

/** One environment drawn as a small elevation of its own tiers. */
function Environment({ name }: { name: string }) {
  return (
    <div>
      <p className="mb-2 font-label text-[17px] font-semibold uppercase tracking-[0.03em]">{name}</p>
      <ol className="m-0 grid list-none gap-1 rounded-[2px] bg-rail p-1.5 pl-6">
        {TIERS.map((tier) => (
          <li
            key={tier}
            className="rounded-[1px] bg-plate px-3 py-2 text-[15px] font-medium leading-tight"
          >
            {tier}
          </li>
        ))}
      </ol>
    </div>
  )
}

export function Infrastructure() {
  return (
    <Unit id="infrastructure" labelledBy="infrastructure-heading">
      <UnitHeader
        id="infrastructure"
        headingId="infrastructure-heading"
        title="Infrastructure"
        summary="Mohamed took on DevOps at Sadeem as its products grew: the servers, the deploys and the monitoring are his to run."
      />

      <div className="grid gap-12 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] xl:gap-14">
        <div>
          <h3 className="text-[1.375rem] font-bold uppercase leading-none tracking-[0.02em]">
            Deploy pipeline
          </h3>
          <p className="mt-2 max-w-[60ch] text-[15px] text-muted">
            Manual SSH and FTP releases replaced by automated pipelines that report to Slack.
          </p>
          <div className="mt-5 grid items-center gap-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.2fr)_auto_minmax(0,1fr)] md:gap-2">
            <Node title="Git push" detail="Branching policy, reviewed" />
            <Flow />
            <Node tone="core" title="CI/CD" detail="Jenkins · GitHub Actions" />
            <Flow />
            <Node title="Slack" detail="Deploy alerts" />
          </div>

          <dl className="m-0 mt-8 border-t border-seam">
            {readings.map((r) => (
              <div
                key={r.label}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-seam py-3"
              >
                <dt className="text-[15px] text-muted">{r.label}</dt>
                <dd className="m-0 font-mono text-[15px] font-medium text-text tabular">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="m-0">
          <h3 className="text-[1.375rem] font-bold uppercase leading-none tracking-[0.02em]">
            Multi-tier architecture
          </h3>
          <p className="mt-2 max-w-[60ch] text-[15px] text-muted">
            Designed for two major projects: application, cache, filesystem and database on separate
            layers, with pre-production isolated from production.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-4">
            {ENVIRONMENTS.map((env) => (
              <Environment key={env} name={env} />
            ))}
          </div>
          <figcaption className="sr-only">
            Two isolated environments, pre-production and production, each separating application,
            cache, filesystem and database tiers.
          </figcaption>
        </figure>
      </div>
    </Unit>
  )
}
