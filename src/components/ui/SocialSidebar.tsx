import { Github, Linkedin } from 'lucide-react'
import { SOCIAL } from '@/lib/constants'

const links = [
  { icon: Github, href: SOCIAL.github, label: 'GitHub' },
  { icon: Linkedin, href: SOCIAL.linkedin, label: 'LinkedIn' },
]

export function SocialSidebar() {
  return (
    <div
      className="hidden lg:flex fixed bottom-0 left-10 z-40 flex-col items-center gap-5"
      style={{ animation: 'fadeIn 0.5s ease 1.2s both' }}
    >
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-primary transition-all duration-200 hover:-translate-y-[3px]"
        >
          <Icon size={20} strokeWidth={1.5} />
        </a>
      ))}
      <div className="w-px h-20 bg-border" />
    </div>
  )
}
