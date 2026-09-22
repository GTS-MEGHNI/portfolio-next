import { Flow, Node } from '@/components/ui/Diagram'
import { Unit, UnitHeader } from '@/components/ui/Unit'

const facts = [
  { term: 'Collects', detail: 'Production exceptions, errors and logs from the solutions Sadeem delivers to its clients.' },
  { term: 'Stores', detail: 'ClickHouse for high-volume log storage, with PostgreSQL and Redis alongside.' },
  { term: 'Connects', detail: 'Through the company’s SDK, built into each solution.' },
  { term: 'Serves', detail: 'A React interface where engineers monitor and triage production errors.' },
]

export function Watchtower() {
  return (
    <Unit id="watchtower" labelledBy="watchtower-heading">
      <UnitHeader
        id="watchtower"
        headingId="watchtower-heading"
        title="Watchtower"
        summary="An observability platform Mohamed built at Sadeem Informatique to monitor exceptions, errors and logs from its client solutions in production."
      />

      <figure className="m-0">
        <div className="grid items-center gap-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1.15fr)_auto_minmax(0,1.2fr)] md:gap-2">
          <Node title="Client solutions" detail="In production, emitting exceptions and logs" />
          <Flow />
          <Node title="SDK" detail="Built into each solution" />
          <Flow />
          <Node tone="core" title="Watchtower" detail="NestJS · TypeScript" />
          <Flow />
          <div className="grid gap-1.5">
            <Node tone="store" title="ClickHouse" detail="High-volume log storage" />
            <Node tone="store" title="PostgreSQL" />
            <Node tone="store" title="Redis" />
          </div>
        </div>
        <div className="mt-3 grid items-center gap-1 md:mt-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1.15fr)_auto_minmax(0,1.2fr)] md:gap-2">
          <div className="hidden md:block" />
          <div className="hidden md:block" />
          <Node title="Engineers" detail="Monitor and triage" />
          <Flow />
          <Node title="React UI" detail="Reads from Watchtower" />
        </div>
        <figcaption className="mt-5 max-w-[68ch] text-[15px] text-muted">
          Exceptions and logs travel from each client solution in production through the SDK into Watchtower,
          which writes them to ClickHouse. Engineers read them back through the React interface.
        </figcaption>
      </figure>

      <dl className="m-0 mt-10 grid gap-x-10 gap-y-5 border-t border-seam pt-8 sm:grid-cols-2">
        {facts.map((f) => (
          <div key={f.term} className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-3">
            <dt className="font-label text-[17px] font-semibold uppercase tracking-[0.03em]">{f.term}</dt>
            <dd className="m-0 leading-relaxed text-muted">{f.detail}</dd>
          </div>
        ))}
      </dl>
    </Unit>
  )
}
