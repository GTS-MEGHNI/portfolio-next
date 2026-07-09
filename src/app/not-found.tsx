import Link from 'next/link'
import { SITE } from '@/lib/constants'

export const metadata = { title: `404 — ${SITE.name}` }

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-surface/60 font-mono text-sm">
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" aria-hidden="true" />
          <span className="ml-2 text-xs text-muted">~/meghni — zsh</span>
        </div>
        <div className="px-4 py-4 space-y-1">
          <p className="text-muted">
            <span className="text-accent">~/meghni</span> $ curl -sI {SITE.url}
            <span className="text-primary">{'{path}'}</span>
          </p>
          <p className="text-red-400">HTTP/1.1 404 Not Found</p>
          <h1 className="text-primary pt-2 text-base font-bold">This route doesn&apos;t exist or was moved.</h1>
          <p className="pt-3">
            <span className="text-accent">~/meghni</span> $ cd{' '}
            <Link href="/" className="text-primary underline decoration-border hover:decoration-accent">
              ~
            </Link>
            <span className="ml-1 inline-block h-[1em] w-2 -mb-0.5 animate-pulse bg-accent align-middle" aria-hidden="true" />
          </p>
        </div>
      </div>
    </main>
  )
}
