import Image from 'next/image'
import { Download, Github, Linkedin, Mail } from 'lucide-react'
import { Led, Unit } from '@/components/ui/Unit'
import { SITE, SOCIAL } from '@/lib/constants'

interface Reading {
  value: string
  label: string
}

const readings: Reading[] = [
  { value: '5+ yrs', label: 'production backends' },
  { value: '2', label: 'solution architectures led' },
  { value: '5+', label: 'developers mentored' },
  { value: '5', label: 'open-source packages' },
]

const ports = [
  { label: 'Email', href: `mailto:${SITE.email}`, icon: Mail, external: false },
  { label: 'GitHub', href: SOCIAL.github, icon: Github, external: true },
  { label: 'LinkedIn', href: SOCIAL.linkedin, icon: Linkedin, external: true },
]

export function Profile() {
  return (
    <Unit id="profile" labelledBy="profile-heading" className="pt-10 sm:pt-14">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-14">
        <div>
          <h1
            id="profile-heading"
            className="text-[3.25rem] font-bold uppercase leading-[0.88] tracking-[0.005em] sm:text-[4.75rem] xl:text-[5.75rem]"
          >
            Mohamed El Amine Meghni
          </h1>
          <p className="mt-4 font-label text-2xl font-semibold uppercase tracking-[0.03em] text-role-employment sm:text-[1.75rem]">
            Engineering Leader · Backend &amp; Platform
          </p>

          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted">
            Mohamed is CTO at Sadeem Informatique, where he leads architecture,
            development, integration and DevOps. He writes the technical specifications and designs
            the architecture of the company’s projects, owns the Linux servers and the CI/CD
            pipelines that ship to them, reviews the team’s code and mentors its developers.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] font-medium">
            <span className="flex items-center gap-2 text-text">
              <Led state="live" />
              Available for full-time remote roles
            </span>
            <span className="text-muted">Algiers, Algeria · UTC+1</span>
            <span className="text-muted">Arabic · French · English</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <a
              href={SOCIAL.resume}
              className="inline-flex min-h-12 items-center gap-2.5 rounded-[2px] bg-rail px-5 text-base font-semibold text-white transition-colors duration-150 hover:bg-role-employment"
            >
              <Download size={18} aria-hidden="true" />
              Download résumé (PDF)
            </a>
            {ports.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group inline-flex min-h-12 items-center gap-2.5 rounded-[2px] border border-edge bg-plate px-4 text-base font-semibold text-text transition-colors duration-150 hover:border-role-employment hover:text-role-employment"
              >
                <Icon size={17} aria-hidden="true" />
                {label}
                {external && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            ))}
          </div>
        </div>

        <figure className="order-first m-0 w-28 self-start md:order-none md:w-48">
          <Image
            src="/profile.webp"
            alt="Portrait of Mohamed El Amine Meghni"
            width={384}
            height={384}
            priority
            className="aspect-square w-full rounded-[2px] object-cover ring-1 ring-seam"
          />
        </figure>
      </div>

      <dl className="m-0 mt-12 grid grid-cols-2 border-t border-seam sm:grid-cols-4">
        {readings.map((r, i) => (
          <div
            key={r.label}
            className={`flex flex-col-reverse border-b border-seam py-4 pr-4 sm:border-b-0 ${i > 0 ? 'sm:border-l sm:pl-5' : ''} ${i % 2 === 1 ? 'border-l pl-4 sm:pl-5' : ''}`}
          >
            <dt className="mt-1 text-[15px] text-muted">{r.label}</dt>
            <dd className="m-0 font-mono text-lg font-medium text-text tabular sm:text-xl">{r.value}</dd>
          </div>
        ))}
      </dl>
    </Unit>
  )
}
