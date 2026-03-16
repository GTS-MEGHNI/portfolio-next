interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedSection({ children, className }: AnimatedSectionProps) {
  return <div className={className ? `animate-fade-in ${className}` : 'animate-fade-in'}>{children}</div>
}
