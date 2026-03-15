import { Navbar } from '@/components/ui/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'

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
      <footer className="border-t border-border py-8 px-6 text-center">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Mohamed El Amine Meghni · Built with Next.js
        </p>
      </footer>
    </>
  )
}
