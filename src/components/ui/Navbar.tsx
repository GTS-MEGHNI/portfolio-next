import Image from 'next/image'
import Link from 'next/link'
import { SOCIAL } from '@/lib/constants'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Home" className="hover:opacity-80 transition-opacity">
          <Image src="/logo.svg" alt="MAM logo" width={32} height={32} priority />
        </Link>
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={SOCIAL.resume}
          aria-label="Download resume as PDF"
          className="text-sm font-mono border border-accent text-accent hover:bg-accent hover:text-bg px-4 py-1.5 rounded transition-colors"
        >
          Resume ↓
        </a>
      </nav>
    </header>
  )
}
