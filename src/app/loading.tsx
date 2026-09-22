export default function Loading() {
  return (
    <main className="grid min-h-dvh place-items-center" aria-busy="true">
      <p className="flex items-center gap-3 font-mono text-sm text-muted">
        <span aria-hidden="true" className="led-breathe h-2.5 w-2.5 rounded-full bg-led-on" />
        Loading
      </p>
    </main>
  )
}
