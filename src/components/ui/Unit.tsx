import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { ROLE_LABEL, ROLE_TEXT, sections, type Role } from '@/data/sections'

type LedState = 'on' | 'off' | 'live'

/** Status LED. Shape carries the state as well as colour: filled is on, hollow is off. */
export function Led({ state, className }: { state: LedState; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-block h-2.5 w-2.5 shrink-0 rounded-full',
        state === 'off' ? 'border-2 border-led-off bg-transparent' : 'bg-led-on',
        state === 'live' && 'led-breathe',
        className
      )}
    />
  )
}

interface UnitProps {
  id: string
  labelledBy: string
  children: ReactNode
  className?: string
}

/** One page section: full-width band, content held in the shared container. */
export function Unit({ id, labelledBy, children, className }: UnitProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className="unit border-b border-seam bg-plate last:border-b-0"
    >
      <div className={cn('mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20', className)}>
        {children}
      </div>
    </section>
  )
}

interface UnitHeaderProps {
  id: string
  headingId: string
  title: string
  /** One line under the title saying what this section is. */
  summary?: ReactNode
}

/** Section header: LED, title, kind of work, and the section's reading. */
export function UnitHeader({ id, headingId, title, summary }: UnitHeaderProps) {
  const section = sections.find((s) => s.id === id)
  const role: Role = section?.role ?? 'none'

  return (
    <header className="mb-10 grid gap-x-6 gap-y-3 border-b border-seam pb-6 sm:grid-cols-[1fr_auto] sm:items-end">
      <div>
        <div className="flex items-center gap-3">
          <Led state="off" className="unit-led transition-[background,box-shadow] duration-300" />
          <h2
            id={headingId}
            className="text-[2rem] font-bold uppercase leading-none tracking-[0.01em] sm:text-[2.75rem]"
          >
            {title}
          </h2>
        </div>
        {summary && (
          <p className="mt-3 max-w-2xl text-[1.0625rem] leading-relaxed text-muted">{summary}</p>
        )}
      </div>
      {section && (
        <dl className="m-0 flex gap-6 text-[15px] sm:justify-end">
          {role !== 'none' && (
            <div>
              <dt className="sr-only">Kind of work</dt>
              <dd className={cn('m-0 font-semibold', ROLE_TEXT[role])}>{ROLE_LABEL[role]}</dd>
            </div>
          )}
          <div>
            <dt className="sr-only">Reading</dt>
            <dd className="m-0 font-mono text-[13px] tabular text-text">{section.reading}</dd>
          </div>
        </dl>
      )}
    </header>
  )
}
