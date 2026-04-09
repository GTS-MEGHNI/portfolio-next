"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Menu } from 'lucide-react'
import { SOCIAL } from '@/lib/constants'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" aria-label="Home" className="hover:opacity-80 transition-opacity" onClick={closeMenu}>
            <Image src="/logo.svg" alt="MAM logo" width={32} height={32} priority />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted hover:text-accent transition-colors duration-200 relative after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={SOCIAL.resume}
              aria-label="Download resume as PDF"
              className="text-sm font-mono border border-accent text-accent hover:bg-accent hover:text-bg px-4 py-1.5 rounded transition-all duration-200"
            >
              Resume ↓
            </a>
            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center text-muted hover:text-primary transition-colors p-1"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-md flex flex-col md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <Link href="/" aria-label="Home" className="hover:opacity-80 transition-opacity" onClick={closeMenu}>
              <Image src="/logo.svg" alt="MAM logo" width={32} height={32} />
            </Link>
            <button
              className="text-muted hover:text-primary transition-colors p-1"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-2xl font-semibold text-primary hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SOCIAL.resume}
              onClick={closeMenu}
              aria-label="Download resume as PDF"
              className="mt-4 font-mono border border-accent text-accent hover:bg-accent hover:text-bg px-6 py-2 rounded transition-all duration-200"
            >
              Resume ↓
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
