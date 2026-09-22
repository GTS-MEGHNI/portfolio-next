import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { shipped, type Project } from '@/data/projects'
import { ROLE_BG, type Role } from '@/data/sections'
import { Unit, UnitHeader } from '@/components/ui/Unit'

function projectRole(p: Project): Role {
  return p.badge === 'Freelance' ? 'freelance' : 'client'
}

/** "Name — Subtitle" titles split so the inventory reads name-first. */
function splitTitle(title: string): { name: string; kind?: string } {
  const [name, kind] = title.split(' — ')
  return { name, kind }
}

export function Shipped() {
  return (
    <Unit id="projects" labelledBy="projects-heading">
      <UnitHeader
        id="projects"
        headingId="projects-heading"
        title="Projects"
        summary="Client and freelance systems: APIs, backoffices and the deployments under them. Open a row for what each one does."
      />

      <div
        aria-hidden="true"
        className="hidden grid-cols-[3rem_minmax(0,1.3fr)_9rem_minmax(0,1fr)_1.5rem] gap-4 border-b border-edge pb-2 font-label text-[14px] font-semibold uppercase tracking-[0.05em] text-muted md:grid"
      >
        <span>Asset</span>
        <span>System</span>
        <span>Kind</span>
        <span>Stack</span>
      </div>

      <ol className="m-0 list-none p-0">
        {shipped.map((project, i) => {
          const role = projectRole(project)
          const { name, kind } = splitTitle(project.title)

          return (
            <li key={project.title} className="border-b border-seam">
              <details className="group">
                <summary className="grid cursor-pointer list-none grid-cols-[2.5rem_minmax(0,1fr)_1.5rem] items-baseline gap-x-4 gap-y-1 py-3.5 transition-colors duration-150 hover:bg-plate-sunk md:grid-cols-[3rem_minmax(0,1.3fr)_9rem_minmax(0,1fr)_1.5rem] [&::-webkit-details-marker]:hidden">
                  <span className="col-start-1 row-start-1 font-mono text-xs text-muted tabular">
                    A{String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="col-start-2 row-start-1 min-w-0">
                    <span className="block font-semibold leading-snug text-text">{name}</span>
                    {kind && <span className="block text-[15px] leading-snug text-muted">{kind}</span>}
                  </span>
                  <span className="col-start-2 row-start-2 flex items-center gap-2 text-[14px] text-muted md:col-start-3 md:row-start-1">
                    <span aria-hidden="true" className={cn('h-2.5 w-2.5 shrink-0 rounded-[1px]', ROLE_BG[role])} />
                    {project.badge}
                  </span>
                  <span className="hidden text-[15px] leading-snug text-muted md:col-start-4 md:row-start-1 md:block">
                    {project.stack.join(' · ')}
                  </span>
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className="col-start-3 row-start-1 self-center text-edge transition-transform duration-200 group-open:rotate-180 md:col-start-5"
                  />
                </summary>
                <div className="grid gap-2 pb-5 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-4">
                  <span aria-hidden="true" />
                  <div>
                    <p className="max-w-[70ch] leading-relaxed text-muted">{project.description}</p>
                    <p className="mt-2 text-[15px] text-muted md:hidden">{project.stack.join(' · ')}</p>
                  </div>
                </div>
              </details>
            </li>
          )
        })}
      </ol>
    </Unit>
  )
}
