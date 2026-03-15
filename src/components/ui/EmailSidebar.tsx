'use client'

import { SITE } from '@/lib/constants'

export function EmailSidebar() {
  return (
    <div
      className="hidden lg:flex fixed bottom-0 right-10 z-40 flex-col items-center gap-5"
      style={{ animation: 'fadeIn 0.5s ease 1.2s both' }}
    >
      <a
        href={`mailto:${SITE.email}`}
        className="text-slate-400 hover:text-slate-200 transition-all duration-200 hover:-translate-y-[3px] text-xs tracking-widest font-mono"
        style={{ writingMode: 'vertical-rl' }}
      >
        {SITE.email}
      </a>
      <div className="w-px h-20 bg-slate-400" />
    </div>
  )
}
