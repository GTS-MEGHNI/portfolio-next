import { skills } from '@/data/skills'
import { Unit, UnitHeader } from '@/components/ui/Unit'

export function Stack() {
  return (
    <Unit id="stack" labelledBy="stack-heading">
      <UnitHeader id="stack" headingId="stack-heading" title="Stack" />
      <dl className="m-0 grid gap-y-5">
        {skills.map((pillar) => (
          <div key={pillar.name} className="grid gap-1 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10">
            <dt className="font-label text-[17px] font-semibold uppercase tracking-[0.03em]">
              {pillar.name}
            </dt>
            <dd className="m-0 max-w-[80ch] leading-relaxed text-muted">{pillar.skills.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Unit>
  )
}
