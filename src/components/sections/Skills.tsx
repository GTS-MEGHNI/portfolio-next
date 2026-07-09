import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { StackTag } from '@/components/ui/StackTag'
import { skills } from '@/data/skills'
import { Server, Cloud, Layers } from 'lucide-react'

const iconMap = {
  Server,
  Cloud,
  Layers,
} as const

type IconName = keyof typeof iconMap

/** Reads the three pillars as a top-down architecture stack. */
const layers = ['layer 01 · app', 'layer 02 · infra', 'layer 03 · design']

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24 px-6 bg-surface/30 bg-dot-grid">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionLabel id="skills-heading">Skills</SectionLabel>
          <h2 className="text-3xl font-bold text-primary mb-12">Technical expertise</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {skills.map((pillar, index) => {
              const Icon = iconMap[pillar.icon as IconName]
              const isLast = index === skills.length - 1
              return (
                <div
                  key={pillar.name}
                  className="group relative bg-surface border border-border border-l-2 border-l-accent/40 rounded-lg p-6 hover:-translate-y-1 hover:border-accent/50 hover:border-l-accent hover:shadow-[0_8px_30px_rgba(34,211,238,0.08)] transition-all duration-200"
                >
                  {/* Topology connector into the next layer (desktop only) */}
                  {!isLast && (
                    <span
                      className="hidden sm:flex absolute top-1/2 -right-[26px] -translate-y-1/2 items-center justify-center text-accent/40 font-mono text-sm z-10"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                  <p className="font-mono text-xs text-muted mb-3 tracking-wide">{layers[index]}</p>
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && (
                      <Icon
                        size={20}
                        className="text-accent group-hover:scale-110 transition-transform duration-200"
                        aria-hidden="true"
                      />
                    )}
                    <h3 className="font-semibold text-primary">{pillar.name}</h3>
                  </div>
                  <ul aria-label={`${pillar.name} tech stack`} className="flex flex-wrap gap-2 list-none p-0 m-0">
                    {pillar.skills.map((skill) => (
                      <li key={skill}>
                        <StackTag label={skill} />
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
