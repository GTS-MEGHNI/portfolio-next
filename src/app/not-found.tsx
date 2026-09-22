import Link from 'next/link'
import { SITE } from '@/lib/constants'

export const metadata = { title: `404 — ${SITE.name}` }

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center p-4">
      <section
        aria-labelledby="nf-heading"
        className="w-full max-w-3xl rounded-[2px] border border-seam bg-plate"
      >
        <div className="px-6 py-12 sm:px-12">
          <p className="flex items-center gap-2 font-mono text-sm text-muted">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full border-2 border-led-off" />
            HTTP 404
          </p>
          <h1
            id="nf-heading"
            className="mt-5 text-[2.75rem] font-bold uppercase leading-[0.9] tracking-[0.01em] sm:text-[4rem]"
          >
            Page not found
          </h1>
          <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-muted">
            Nothing lives at this address. The rest of the site is where you left it.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex min-h-12 items-center rounded-[2px] bg-rail px-5 font-semibold text-white transition-colors duration-150 hover:bg-role-employment"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  )
}
