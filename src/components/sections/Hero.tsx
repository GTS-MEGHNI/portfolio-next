import Image from 'next/image'
import { SITE, SOCIAL } from '@/lib/constants'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden"
    >
      {/* Background: dot grid + radial glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(34,211,238,0.10) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(34,211,238,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-3xl">
        <div className="hero-stagger-1">
          <Image
            src="/profile.webp"
            alt="Mohamed El Amine Meghni"
            width={128}
            height={128}
            priority
            loading="eager"
            className="rounded-full mx-auto mb-6 object-cover ring-2 ring-accent/30 ring-offset-2 ring-offset-bg"
          />
        </div>

        <h1
          id="hero-heading"
          className="hero-stagger-2 text-4xl sm:text-6xl font-bold text-primary leading-tight mb-4"
        >
          {SITE.name}
        </h1>

        <p className="hero-stagger-3 text-lg sm:text-xl text-muted mb-6">
          Senior Backend Engineer · DevOps · Solution Architecture
        </p>

        <p className="hero-stagger-4 text-base sm:text-lg text-primary max-w-xl mx-auto mb-10">
          I build scalable APIs, own production infrastructure, and ship end-to-end.
        </p>

        <div className="hero-stagger-5 flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href={SOCIAL.resume}
            aria-label="Download resume as PDF"
            className="bg-accent hover:bg-accent-hover text-bg font-semibold px-6 py-3 rounded transition-all duration-200 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
          >
            Download Resume
          </a>
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            className="border border-border text-primary hover:border-accent hover:text-accent px-6 py-3 rounded transition-colors duration-200"
          >
            GitHub ↗
          </a>
        </div>

        <div className="hero-stagger-6">
          <span className="inline-block font-mono text-xs text-muted border border-border rounded-full px-4 py-1.5">
            Open to remote worldwide
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce text-muted" aria-hidden="true">
        <ChevronDown size={24} />
      </div>
    </section>
  )
}
