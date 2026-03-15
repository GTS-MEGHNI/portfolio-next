interface StackTagProps {
  label: string
}

export function StackTag({ label }: StackTagProps) {
  return (
    <span className="inline-block font-mono text-xs text-muted bg-surface border border-border rounded px-2 py-0.5">
      {label}
    </span>
  )
}
