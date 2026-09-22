import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'
import { experience, type Job } from '@/data/experience'
import { ROLE_BG, type Role } from '@/data/sections'

/** `YYYY-MM` → absolute month count, so ranges can be laid out on one axis. */
function toMonths(ym: string): number {
  const [year, month] = ym.split('-').map(Number)
  return year * 12 + (month - 1)
}

export function jobRole(job: Job): Role {
  if (job.type === 'Contract') return 'client'
  if (job.type === 'Freelance' || job.type === 'Research') return 'freelance'
  return 'employment'
}

/**
 * Every engagement on one shared time axis, overlaps and all. Ongoing work is
 * solid, closed work is hatched, so the state never rests on colour alone.
 */
export function EngagementChart() {
  const now = new Date()
  const nowMonth = now.getFullYear() * 12 + now.getMonth()

  const axisStart = Math.min(...experience.map((job) => toMonths(job.start)))
  const axisSpan = nowMonth - axisStart + 1

  const firstYear = Math.ceil(axisStart / 12)
  const lastYear = Math.floor(nowMonth / 12)
  const years = Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i)
  const pct = (month: number): string => `${((month - axisStart) / axisSpan) * 100}%`

  return (
    <figure className="m-0">
      <figcaption className="mb-4 flex flex-wrap items-baseline justify-between gap-2 text-[15px] text-muted">
        <span>Engagements on one time axis. Overlaps are real.</span>
        <span className="font-mono text-xs text-text tabular">
          {Math.floor(axisSpan / 12)} yrs {axisSpan % 12} mo on record
        </span>
      </figcaption>

      <div aria-hidden="true" className="relative">
        {/* Year grid */}
        <div className="pointer-events-none absolute inset-y-0 left-28 right-0 sm:left-36">
          {years.map((year) => (
            <span
              key={year}
              className="absolute inset-y-0 border-l border-dashed border-seam"
              style={{ left: pct(year * 12) }}
            />
          ))}
        </div>

        <div className="relative space-y-2.5">
          {experience.map((job, i) => {
            const from = toMonths(job.start)
            const to = job.end ? toMonths(job.end) : nowMonth
            const ongoing = job.end === null
            const role = jobRole(job)
            const style = {
              '--i': i,
              left: pct(from),
              width: `max(${((to - from + 1) / axisSpan) * 100}%, 6px)`,
            } as CSSProperties

            return (
              <div key={job.shortName} className="flex items-center">
                <span className="w-28 shrink-0 truncate pr-3 text-[15px] font-medium sm:w-36">
                  {job.shortName}
                </span>
                <div className="relative h-5 flex-1 rounded-[2px] bg-plate-sunk">
                  <span
                    className={cn(
                      'bar-in absolute inset-y-0 rounded-[2px]',
                      ROLE_BG[role],
                      !ongoing &&
                        'bg-[repeating-linear-gradient(135deg,transparent_0_3px,rgb(255_255_255/0.35)_3px_5px)] opacity-80'
                    )}
                    style={style}
                  />
                </div>
              </div>
            )
          })}
        </div>

        <div className="relative mt-2 ml-28 h-5 sm:ml-36">
          {years.map((year) => (
            <span
              key={year}
              className="absolute top-0 -translate-x-1/2 font-mono text-[11px] text-muted tabular"
              style={{ left: pct(year * 12) }}
            >
              {/* Narrow screens keep every other year so labels never collide. */}
              <span className={year % 2 === 1 ? 'hidden sm:inline' : undefined}>{year}</span>
            </span>
          ))}
        </div>
      </div>

      {/* The same data as a table, for screen readers. */}
      <div className="sr-only">
      <table>
        <caption>Engagement periods</caption>
        <thead>
          <tr>
            <th scope="col">Engagement</th>
            <th scope="col">Period</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {experience.map((job) => (
            <tr key={job.shortName}>
              <th scope="row">{job.company}</th>
              <td>{job.period}</td>
              <td>{job.end === null ? 'Ongoing' : 'Ended'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </figure>
  )
}
