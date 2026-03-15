import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SITE, SOCIAL } from '@/lib/constants'
import { Mail, Linkedin, Github } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 px-6">
      <div className="mx-auto max-w-xl text-center">
        <AnimatedSection>
          <SectionLabel id="contact-heading">Contact</SectionLabel>
          <h2 className="text-3xl font-bold text-primary mb-4">Let&apos;s work together</h2>
          <p className="text-muted mb-12">Available for full-time remote roles worldwide</p>
          <div className="flex items-center justify-center gap-8">
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Send email (opens mail client)"
              className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
            >
              <Mail size={24} aria-hidden="true" />
              <span className="font-mono text-xs">Email</span>
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
              className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
            >
              <Linkedin size={24} aria-hidden="true" />
              <span className="font-mono text-xs">LinkedIn</span>
            </a>
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
              className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
            >
              <Github size={24} aria-hidden="true" />
              <span className="font-mono text-xs">GitHub</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
