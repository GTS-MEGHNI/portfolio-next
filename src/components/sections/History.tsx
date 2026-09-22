import { cn } from '@/lib/utils'
import { experience } from '@/data/experience'
import { ROLE_LABEL, ROLE_TEXT } from '@/data/sections'
import { EngagementChart, jobRole } from '@/components/ui/EngagementChart'
import { Led, Unit, UnitHeader } from '@/components/ui/Unit'

/** Stack entries listed per engagement; the full inventory lives in the Stack unit. */
const STACK_SHOWN = 8

export function History() {
  return (
    <Unit id="experience" labelledBy="experience-heading">
      <UnitHeader
        id="experience"
        headingId="experience-heading"
        title="Experience"
        summary="Four engagements since 2020: backend work first, then the servers and pipelines underneath it."
      />

      <EngagementChart />

      <ol className="m-0 mt-12 list-none border-t border-seam p-0">
        {experience.map((job) => {
          const ongoing = job.end === null
          const role = jobRole(job)
          const extra = job.stack.length - STACK_SHOWN

          return (
            <li
              key={job.company}
              className="grid gap-4 border-b border-seam py-8 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10"
            >
              <div className="text-[15px] leading-relaxed">
                <p className="flex items-center gap-2 font-medium text-text">
                  <Led state={ongoing ? 'live' : 'off'} />
                  {ongoing ? 'Running' : 'Ended'}
                </p>
                <p className="mt-1.5 font-mono text-[13px] text-text tabular">{job.period}</p>
                <p className="mt-1 text-muted">{job.location}</p>
                <p className={cn('mt-1 font-medium', ROLE_TEXT[role])}>
                  {ROLE_LABEL[role]}
                  {job.type === 'Contract' && <span className="text-muted"> · contract</span>}
                </p>
              </div>

              <div className="min-w-0">
                <h3 className="text-[1.75rem] font-bold uppercase leading-none tracking-[0.01em]">
                  {job.role}
                </h3>
                <p className="mt-1.5 text-[17px] font-semibold text-muted">{job.company}</p>

                <ul className="m-0 mt-5 max-w-[70ch] list-none space-y-3 p-0">
                  {job.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="relative pl-5 leading-[1.65] text-muted before:absolute before:left-0 before:top-[0.8em] before:h-px before:w-2.5 before:bg-edge [&_strong]:font-semibold [&_strong]:text-text"
                      // Bullets are static strings from src/data/experience.ts; only <strong> is used.
                      dangerouslySetInnerHTML={{ __html: bullet }}
                    />
                  ))}
                </ul>

                <p className="mt-5 text-[15px] leading-relaxed text-muted">
                  <span className="sr-only">Stack: </span>
                  {job.stack.slice(0, STACK_SHOWN).join(' · ')}
                  {extra > 0 && ` · +${extra} more`}
                </p>
              </div>
            </li>
          )
        })}
      </ol>
    </Unit>
  )
}
