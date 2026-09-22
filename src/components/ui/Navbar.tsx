"use client"

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Download, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SOCIAL } from '@/lib/constants'
import { sections } from '@/data/sections'

const navLinks = sections.filter((s) => s.id !== 'profile')

/** Tracks which section is being read; lights its link and its header LED. */
function useActiveSection(): string {
  const [active, setActive] = useState<string>('profile')

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) el.dataset.active = s.id === active ? 'true' : 'false'
    })
  }, [active])

  return active
}

function Wordmark() {
  return (
    <Link
      href="/"
      prefetch={false}
      className="font-label text-xl font-bold uppercase leading-none tracking-[0.04em] text-white"
    >
      Meghni
    </Link>
  )
}

export function Navbar() {
  const active = useActiveSection()
  const dialogRef = useRef<HTMLDialogElement>(null)

  const openMenu = () => dialogRef.current?.showModal()
  const closeMenu = () => dialogRef.current?.close()

  return (
    <>
      <header className="on-rail sticky top-0 z-40 bg-rail">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8"
        >
          <Wordmark />

          <ul className="m-0 hidden list-none items-center gap-1 p-0 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'block rounded-[2px] px-3 py-2 text-[15px] font-medium transition-colors duration-150',
                      isActive ? 'bg-rail-raised text-white' : 'text-rail-text hover:text-white'
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={SOCIAL.resume}
              className="inline-flex min-h-11 items-center gap-2 rounded-[2px] bg-plate px-4 text-[15px] font-semibold text-rail transition-colors duration-150 hover:bg-white"
            >
              <Download size={16} aria-hidden="true" />
              Résumé
            </a>
            <button
              type="button"
              onClick={openMenu}
              aria-haspopup="dialog"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[2px] border border-rail-text/60 text-white lg:hidden"
            >
              <Menu size={18} aria-hidden="true" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </nav>
      </header>

      <dialog
        ref={dialogRef}
        aria-label="Menu"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMenu()
        }}
        className="on-rail m-0 ml-auto h-dvh max-h-none w-[min(20rem,100vw)] max-w-none bg-rail p-0 text-white backdrop:bg-rail/60 lg:hidden"
      >
        <div className="flex h-full flex-col px-5 py-3">
          <div className="flex h-10 items-center justify-between">
            <Wordmark />
            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[2px] text-rail-text hover:text-white"
            >
              <X size={20} aria-hidden="true" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav aria-label="Main navigation" className="mt-6">
            <ul className="m-0 list-none p-0">
              {navLinks.map((link) => (
                <li key={link.id} className="border-b border-rail-raised">
                  <a
                    href={`#${link.id}`}
                    onClick={closeMenu}
                    aria-current={active === link.id ? 'location' : undefined}
                    className={cn(
                      'block py-3.5 font-label text-2xl font-semibold uppercase tracking-[0.03em]',
                      active === link.id ? 'text-white' : 'text-rail-text hover:text-white'
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </dialog>
    </>
  )
}
