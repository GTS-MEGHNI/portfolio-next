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

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24 px-6 bg-surface/30">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionLabel id="skills-heading">Skills</SectionLabel>
          <h2 className="text-3xl font-bold text-primary mb-12">Technical expertise</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {skills.map((pillar) => {
              const Icon = iconMap[pillar.icon as IconName]
              return (
                <div key={pillar.name} className="bg-surface border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && <Icon size={20} className="text-accent" aria-hidden="true" />}
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
