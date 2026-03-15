import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'

const stats = [
  { value: '5+', label: 'years experience' },
  { value: '5', label: 'VPS managed' },
  { value: '~95%', label: 'uptime maintained' },
  { value: '7', label: 'articles written' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel id="about-heading">About</SectionLabel>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Building reliable systems since 2018
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Mohamed El Amine Meghni is a Senior Backend Engineer with 5+ years of experience designing and shipping production-grade systems. Based in Algiers, Algeria, he works remotely with teams worldwide.
                </p>
                <p>
                  He specialises in Laravel API architecture, DevOps infrastructure, and solution design — from first commit to production monitoring. He has managed 5 VPS environments, maintained ~95% uptime, and compressed deployment cycles from hours to minutes.
                </p>
                <p>
                  Beyond engineering, Mohamed has written 7 technical articles and mentored junior engineers, believing that clear documentation and knowledge sharing are as important as clean code.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-surface border border-border rounded-lg p-6">
                  <p className="font-mono text-3xl font-bold text-accent mb-1">{stat.value}</p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
