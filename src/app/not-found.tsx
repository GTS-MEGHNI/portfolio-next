import Link from 'next/link'
import { SITE } from '@/lib/constants'

export const metadata = { title: `404 — ${SITE.name}` }

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
      <p className="font-mono text-accent text-sm uppercase tracking-widest">404</p>
      <h1 className="text-3xl font-bold text-primary">Page not found</h1>
      <p className="text-muted max-w-sm">This page doesn&apos;t exist or was moved.</p>
      <Link href="/" className="text-accent hover:underline text-sm">
        ← Back to portfolio
      </Link>
    </main>
  )
}
