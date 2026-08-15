import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface Metric {
  key: string
  value: string
  label: string
  /** Fill ratio (0–100) for the gauge bar — visual weight, not a literal percentage. */
  bar: number
}

const stats: Metric[] = [
  { key: 'years_experience', value: '5+', label: 'years experience', bar: 85 },
  { key: 'vps_managed', value: '11', label: 'VPS managed', bar: 70 },
  { key: 'uptime_pct', value: '~95%', label: 'uptime maintained', bar: 95 },
  { key: 'articles_written', value: '8', label: 'articles written', bar: 55 },
  { key: 'oss_packages', value: '5', label: 'open source packages maintained', bar: 65 },
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
                  He specialises in Laravel API architecture, DevOps infrastructure, and solution design — from first commit to production monitoring. He has managed 11 VPS environments, maintained ~95% uptime, and compressed deployment cycles from hours to minutes.
                </p>
                <p>
                  He also maintains 5 open source packages for the Laravel, NestJS, and JavaScript ecosystems — covering Algerian SATIM card payments, CAPTCHA protection, and API boilerplate.
                </p>
                <p>
                  Beyond engineering, Mohamed has written 8 technical articles and mentored junior engineers, believing that clear documentation and knowledge sharing are as important as clean code.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <AnimatedSection
                  key={stat.key}
                  delay={i * 100}
                  className={i === stats.length - 1 && stats.length % 2 === 1 ? 'col-span-2' : undefined}
                >
                  <div className="bg-surface border border-border rounded-lg p-5 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs text-muted tracking-wide">{stat.key}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/60" aria-hidden="true" />
                    </div>
                    <p className="font-mono text-3xl font-bold text-accent leading-none mb-1">{stat.value}</p>
                    <p className="text-xs text-muted mb-4">{stat.label}</p>
                    <div className="mt-auto h-1 w-full rounded-full bg-border/60 overflow-hidden" aria-hidden="true">
                      <span className="block h-full rounded-full bg-accent/70" style={{ width: `${stat.bar}%` }} />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
