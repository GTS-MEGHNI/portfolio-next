import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { StackTag } from '@/components/ui/StackTag'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection>
          <SectionLabel id="experience-heading">Experience</SectionLabel>
          <h2 className="text-3xl font-bold text-primary mb-12">Work history</h2>
          <div className="relative border-l border-border pl-8 space-y-12">
            {experience.map((job, index) => (
              <div key={`${job.company}-${index}`} className="relative">
                <span
                  className={`absolute -left-[38.5px] top-1.5 w-3 h-3 rounded-full ${index === 0 ? 'bg-accent shadow-[0_0_8px_rgba(34,211,238,0.6)]' : 'border-2 border-accent bg-bg'}`}
                  aria-hidden="true"
                />
                <div className={index === 0 ? 'p-6 bg-surface border border-border hover:border-accent/60 rounded-lg -ml-2 transition-colors duration-200' : 'hover:border-accent/60 transition-colors duration-200'}>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-primary text-lg">{job.role}</h3>
                    {job.type && (
                      <span className="font-mono text-xs text-muted border border-border rounded px-2 py-0.5">
                        {job.type}
                      </span>
                    )}
                  </div>
                  <p className="text-accent font-medium mb-1">{job.company}</p>
                  <p className="font-mono text-xs text-muted mb-4">
                    {job.period} · {job.location}
                  </p>
                  <ul className="space-y-2 mb-4 list-none p-0 m-0">
                    {job.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="relative pl-4 text-muted text-sm leading-relaxed before:content-['—'] before:absolute before:left-0 before:top-0 before:text-border"
                        dangerouslySetInnerHTML={{ __html: bullet }}
                      />
                    ))}
                  </ul>
                  <ul aria-label="Tech stack" className="flex flex-wrap gap-2 list-none p-0 m-0">
                    {job.stack.map((tech) => (
                      <li key={tech}>
                        <StackTag label={tech} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
