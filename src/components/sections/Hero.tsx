import Image from 'next/image'
import { SITE, SOCIAL } from '@/lib/constants'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20"
    >
      <div className="max-w-3xl">
        <Image
          src="/profile.webp"
          alt="Mohamed El Amine Meghni"
          width={120}
          height={120}
          priority
          className="rounded-full mx-auto mb-6 border-2 border-border object-cover"
        />
        <h1
          id="hero-heading"
          className="text-4xl sm:text-6xl font-bold text-primary leading-tight mb-4"
        >
          {SITE.name}
        </h1>
        <p className="text-lg sm:text-xl text-muted mb-6">
          Senior Backend Engineer · DevOps · Solution Architecture
        </p>
        <p className="text-base sm:text-lg text-primary max-w-xl mx-auto mb-10">
          I build scalable APIs, own production infrastructure, and ship end-to-end.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href={SOCIAL.resume}
            aria-label="Download resume as PDF"
            className="bg-accent hover:bg-accent-hover text-bg font-semibold px-6 py-3 rounded transition-colors"
          >
            Download Resume
          </a>
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            className="border border-border text-primary hover:border-accent hover:text-accent px-6 py-3 rounded transition-colors"
          >
            GitHub ↗
          </a>
        </div>
        <span className="inline-block font-mono text-xs text-muted border border-border rounded-full px-4 py-1.5">
          Open to remote worldwide
        </span>
      </div>
      <div className="absolute bottom-8 animate-bounce text-muted" aria-hidden="true">
        <ChevronDown size={24} />
      </div>
    </section>
  )
}
