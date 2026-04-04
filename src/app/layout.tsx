import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SITE, SOCIAL } from '@/lib/constants'
import { SocialSidebar } from '@/components/ui/SocialSidebar'
import { EmailSidebar } from '@/components/ui/EmailSidebar'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  keywords: ['Senior Backend Engineer', 'Laravel', 'DevOps', 'Solution Architecture', 'Remote Backend Engineer', 'Algeria'],
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
  other: {
    'script:ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: SITE.name,
      jobTitle: 'Senior Backend Engineer',
      description: 'Senior Backend Engineer with 5+ years specializing in API design, DevOps, and solution architecture.',
      url: SITE.url,
      email: SITE.email,
      sameAs: [SOCIAL.linkedin, SOCIAL.github],
      knowsAbout: ['Laravel', 'REST API', 'DevOps', 'Docker', 'CI/CD', 'Solution Architecture', 'Linux', 'PostgreSQL'],
      availableLanguage: ['Arabic', 'French', 'English'],
      homeLocation: { '@type': 'Place', name: 'Algiers, Algeria' },
    }),
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: SITE.name,
              jobTitle: 'Senior Backend Engineer',
              description: 'Senior Backend Engineer with 5+ years specializing in API design, DevOps, and solution architecture.',
              url: SITE.url,
              email: SITE.email,
              sameAs: [SOCIAL.linkedin, SOCIAL.github],
              knowsAbout: ['Laravel', 'REST API', 'DevOps', 'Docker', 'CI/CD', 'Solution Architecture', 'Linux', 'PostgreSQL'],
              availableLanguage: ['Arabic', 'French', 'English'],
              homeLocation: { '@type': 'Place', name: 'Algiers, Algeria' },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <SocialSidebar />
        <EmailSidebar />
      </body>
    </html>
  )
}
