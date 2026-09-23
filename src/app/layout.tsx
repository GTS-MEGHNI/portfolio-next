import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed, Martian_Mono } from 'next/font/google'
import './globals.css'
import { SITE, SOCIAL } from '@/lib/constants'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

const martian = Martian_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-martian',
  display: 'swap',
  // Readings only, never the LCP text: load it without competing with the preloads.
  preload: false,
})

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  jobTitle: 'Head of Engineering',
  worksFor: { '@type': 'Organization', name: 'Sadeem Informatique' },
  description:
    'Engineering leader with 5+ years in backend, platform and DevOps. Head of Engineering at Sadeem Informatique.',
  url: SITE.url,
  email: SITE.email,
  sameAs: [SOCIAL.linkedin, SOCIAL.github],
  knowsAbout: [
    'Laravel',
    'REST API',
    'DevOps',
    'Docker',
    'CI/CD',
    'Solution Architecture',
    'Linux',
    'PostgreSQL',
  ],
  availableLanguage: ['Arabic', 'French', 'English'],
  homeLocation: { '@type': 'Place', name: 'Algiers, Algeria' },
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  keywords: [
    'Head of Engineering',
    'Engineering Leader',
    'Senior Backend Engineer',
    'Laravel',
    'DevOps',
    'Solution Architecture',
    'Remote Backend Engineer',
    'Algeria',
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: 'profile',
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} ${martian.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
