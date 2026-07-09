"use client"

import { useEffect, useState } from 'react'

const FULL = 'I build scalable APIs, own production infrastructure, and ship end-to-end.'

/**
 * Hero one-liner rendered as a terminal session with a typewriter effect.
 * The animated line is aria-hidden; a visually-hidden copy carries the full
 * sentence for crawlers and screen readers (matters for AEO). Typing is
 * skipped under prefers-reduced-motion.
 */
export function TerminalTagline() {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      // Defer so we don't call setState synchronously inside the effect body.
      const t = setTimeout(() => {
        setTyped(FULL)
        setDone(true)
      }, 0)
      return () => clearTimeout(t)
    }
    let i = 0
    const id = setInterval(() => {
      i += 1
      setTyped(FULL.slice(0, i))
      if (i >= FULL.length) {
        clearInterval(id)
        setDone(true)
      }
    }, 26)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="mx-auto max-w-xl overflow-hidden rounded-lg border border-border bg-surface/60 text-left font-mono text-sm sm:text-base">
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" aria-hidden="true" />
        <span className="ml-2 text-xs text-muted">~/meghni — zsh</span>
      </div>
      <div className="px-4 py-3">
        <p className="text-muted">
          <span className="text-accent">~/meghni</span> $ whoami
        </p>
        <p className="sr-only">{FULL}</p>
        <p className="mt-1 leading-relaxed text-primary" aria-hidden="true">
          {typed}
          {!done && (
            <span className="ml-0.5 inline-block h-[1em] w-2 -mb-0.5 animate-pulse bg-accent align-middle" />
          )}
        </p>
      </div>
    </div>
  )
}
