interface SectionLabelProps {
  children: React.ReactNode
  id?: string
}

export function SectionLabel({ children, id }: SectionLabelProps) {
  return (
    <p id={id} className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
      {children}
    </p>
  )
}
