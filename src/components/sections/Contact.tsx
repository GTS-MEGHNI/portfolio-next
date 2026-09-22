import { ArrowUpRight, Download, Mail, Phone } from 'lucide-react'
import { SITE, SOCIAL } from '@/lib/constants'
import { Led, Unit, UnitHeader } from '@/components/ui/Unit'

const links = [
  { label: 'LinkedIn', href: SOCIAL.linkedin, icon: ArrowUpRight, external: true },
  { label: 'GitHub', href: SOCIAL.github, icon: ArrowUpRight, external: true },
  { label: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}`, icon: Phone, external: false },
]

export function Contact() {
  return (
    <Unit id="contact" labelledBy="contact-heading">
      <UnitHeader
        id="contact"
        headingId="contact-heading"
        title="Contact"
        summary="Tell Mohamed what you are building and what keeps breaking. He replies within a day, in English, French or Arabic."
      />

      <p className="flex items-center gap-2 text-[15px] font-medium text-text">
        <Led state="live" />
        Available for full-time remote roles, worldwide
      </p>

      <a
        href={`mailto:${SITE.email}`}
        className="mt-5 inline-flex max-w-full items-center gap-3 text-lg font-semibold text-text underline decoration-edge decoration-2 underline-offset-[7px] transition-colors duration-150 hover:text-role-employment hover:decoration-role-employment sm:text-3xl"
      >
        <Mail size={26} aria-hidden="true" className="hidden shrink-0 sm:block" />
        <span>
          {SITE.email.split('@')[0]}@<wbr />
          {SITE.email.split('@')[1]}
        </span>
      </a>

      <ul className="m-0 mt-9 flex list-none flex-wrap gap-2.5 p-0">
        <li>
          <a
            href={SOCIAL.resume}
            className="inline-flex min-h-12 items-center gap-2.5 rounded-[2px] bg-rail px-5 font-semibold text-white transition-colors duration-150 hover:bg-role-employment"
          >
            <Download size={18} aria-hidden="true" />
            Download résumé (PDF)
          </a>
        </li>
        {links.map(({ label, href, icon: Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex min-h-12 items-center gap-2 rounded-[2px] border border-edge px-4 font-semibold text-text transition-colors duration-150 hover:border-role-employment hover:text-role-employment"
            >
              <Icon size={17} aria-hidden="true" />
              {label}
              {external && <span className="sr-only">(opens in a new tab)</span>}
            </a>
          </li>
        ))}
      </ul>

      <footer className="mt-14 border-t border-seam pt-5 text-[14px] text-muted">
        <p>© {new Date().getFullYear()} Mohamed El Amine Meghni · Algiers, Algeria</p>
      </footer>
    </Unit>
  )
}
