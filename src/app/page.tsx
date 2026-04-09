import dynamic from 'next/dynamic'
import { Github, Linkedin } from 'lucide-react'
import { Navbar } from '@/components/ui/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'
import { SOCIAL } from '@/lib/constants'

const Projects = dynamic(() =>
  import('@/components/sections/Projects').then(m => ({ default: m.Projects }))
)

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-bg focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 px-6">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Mohamed El Amine Meghni
          </p>
          <p className="font-mono text-xs text-muted">
            Designed &amp; built with care
          </p>
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              <Github size={16} strokeWidth={1.5} />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              <Linkedin size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
