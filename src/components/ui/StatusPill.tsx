interface StatusPillProps {
  uptime?: string
  nodes?: number
}

/**
 * Live-infra signal — a monitoring-style "all systems operational" pill.
 * Mirrors the Beszel / Uptime Kuma story from the resume. The pulsing dot
 * is CSS-only (animate-ping), disabled under prefers-reduced-motion in globals.css.
 */
export function StatusPill({ uptime = '~95% uptime', nodes = 11 }: StatusPillProps) {
  return (
    <span
      className="inline-flex items-center gap-2 font-mono text-xs text-muted border border-border rounded-full px-4 py-1.5"
      role="status"
      aria-label={`Systems operational, ${uptime}, ${nodes} nodes monitored`}
    >
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span className="text-emerald-400">systems operational</span>
      <span className="text-border" aria-hidden="true">·</span>
      <span>{uptime}</span>
      <span className="text-border" aria-hidden="true">·</span>
      <span>{nodes} nodes</span>
    </span>
  )
}
