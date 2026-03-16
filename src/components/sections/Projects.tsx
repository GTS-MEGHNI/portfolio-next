'use client'

import { useState } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { StackTag } from '@/components/ui/StackTag'
import { projects } from '@/data/projects'

const PAGE_SIZE = 6

const badgeColors: Record<string, string> = {
  'Client work': 'text-accent border-accent/40',
  'Research': 'text-muted border-border',
  'Freelance': 'text-primary border-border',
}

export function Projects() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const visibleProjects = projects.slice(0, visibleCount)
  const hasMore = visibleCount < projects.length
  const remaining = projects.length - visibleCount

  return (
      <section id="projects" aria-labelledby="projects-heading" className="py-24 px-6 bg-surface/30">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <SectionLabel id="projects-heading">Projects</SectionLabel>
            <h2 className="text-3xl font-bold text-primary mb-12">Selected work</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project) => (
                  <div
                      key={project.title}
                      className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-colors flex flex-col"
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-semibold text-primary leading-snug">{project.title}</h3>
                      {project.badge && (
                          <span className={`shrink-0 font-mono text-xs border rounded px-2 py-0.5 ${badgeColors[project.badge] ?? 'text-muted border-border'}`}>
                      {project.badge}
                    </span>
                      )}
                    </div>
                    <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{project.description}</p>
                    {project.metric && (
                        <p className="font-mono text-xs text-accent mb-4">{project.metric}</p>
                    )}
                    <ul aria-label="Tech stack" className="flex flex-wrap gap-2 list-none p-0 m-0">
                      {project.stack.map((tech) => (
                          <li key={tech}>
                            <StackTag label={tech} />
                          </li>
                      ))}
                    </ul>
                  </div>
              ))}
            </div>

            {hasMore && (
                <div className="flex flex-col items-center gap-2 mt-12">
                  <button
                      onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                      className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-primary hover:border-accent hover:text-accent transition-colors"
                  >
                    Load more
                  </button>
                  <p className="text-xs text-muted font-mono">
                    {visibleCount} of {projects.length} — {remaining} remaining
                  </p>
                </div>
            )}
          </AnimatedSection>
        </div>
      </section>
  )
}