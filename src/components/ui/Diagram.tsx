import type { ReactNode } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/** A component box in an architecture diagram. */
export function Node({
  title,
  detail,
  tone = 'plain',
  className,
}: {
  title: string
  detail?: ReactNode
  tone?: 'plain' | 'core' | 'store'
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-[2px] px-3.5 py-3',
        tone === 'plain' && 'border border-edge bg-plate',
        tone === 'core' && 'bg-role-employment text-white',
        tone === 'store' && 'border border-edge bg-plate-sunk',
        className
      )}
    >
      <p className="font-label text-[17px] font-semibold uppercase leading-tight tracking-[0.03em]">
        {title}
      </p>
      {detail && (
        <p
          className={cn(
            'mt-1 text-[14px] leading-snug',
            tone === 'core' ? 'text-white/90' : 'text-muted'
          )}
        >
          {detail}
        </p>
      )}
    </div>
  )
}

/** Flow arrow: points right on wide screens, down when the diagram stacks. */
export function Flow({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-1.5 py-1 text-edge md:flex-col md:px-1 md:py-0">
      <ArrowDown size={18} aria-hidden="true" className="md:hidden" />
      <ArrowRight size={18} aria-hidden="true" className="hidden md:block" />
      {label && <span className="font-mono text-[11px] text-muted">{label}</span>}
    </div>
  )
}
