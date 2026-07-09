export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6" aria-busy="true">
      <div className="font-mono text-sm text-muted space-y-1">
        <p>
          <span className="text-emerald-400">●</span> starting portfolio.service …
        </p>
        <p className="text-muted/70">
          <span className="animate-pulse">loading modules</span>
        </p>
      </div>
    </main>
  )
}
