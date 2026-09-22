# Portfolio Technical Spec

## Stack
- **Framework:** Next.js 16 · App Router
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Font:** Geist Sans + Geist Mono (already configured)
- **Animations:** `motion` (Framer Motion v11+)
- **Icons:** `lucide-react`
- **Package manager:** Bun

---

## Constants (`src/lib/constants.ts`)
```ts
export const SITE = {
  url: 'https://mohamedelaminemeghni.com',
  name: 'Mohamed El Amine Meghni',
  title: 'Mohamed El Amine Meghni — Senior Backend Engineer',
  description: 'Senior Backend Engineer with 5+ years of experience in API design, DevOps, and solution architecture. Open to full-time remote roles worldwide.',
  email: 'meghni.mohamed.el.amine@gmail.com',
  phone: '+213 549 136 722',
} as const

export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/mohamed-el-amine-meghni-1684a41a3/',
  github: 'https://github.com/GTS-MEGHNI',
  resume: '/resume.pdf',
} as const
```

Import `SITE` and `SOCIAL` everywhere — metadata, JSON-LD, Navbar, Contact, footer. Never hardcode URLs inline.

---

## OG Image (`src/app/opengraph-image.tsx`)
Uses Next.js built-in `ImageResponse` — no external dependency.

```ts
import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/constants'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    <div style={{
      background: '#0f1117',
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '80px',
      borderLeft: '6px solid #1a5fa8',
    }}>
      <p style={{ color: '#94a3b8', fontSize: 24, margin: '0 0 16px' }}>
        mohamedelaminemeghni.com
      </p>
      <h1 style={{ color: '#e2e8f0', fontSize: 64, fontWeight: 700, margin: '0 0 24px', lineHeight: 1.1 }}>
        {SITE.name}
      </h1>
      <p style={{ color: '#1a5fa8', fontSize: 28, margin: 0 }}>
        Senior Backend Engineer · DevOps · Solution Architecture
      </p>
      <p style={{ color: '#94a3b8', fontSize: 22, marginTop: 32 }}>
        Open to remote worldwide
      </p>
    </div>
  )
}
```

- No custom font needed — system sans is fine for OG images
- Remove the hardcoded `og-image.png` reference from metadata — Next.js auto-registers this file
- Automatically served at `/opengraph-image` and linked in `<head>` by Next.js

---

## Sitemap (`src/app/sitemap.ts`)
```ts
import { SITE } from '@/lib/constants'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

## Robots (`src/app/robots.ts`)
```ts
import { SITE } from '@/lib/constants'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE.url}/sitemap.xml`,
  }
}

---

## 404 Page (`src/app/not-found.tsx`)
```tsx
import Link from 'next/link'
import { SITE } from '@/lib/constants'

export const metadata = { title: `404 — ${SITE.name}` }

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
      <p className="font-mono text-accent text-sm uppercase tracking-widest">404</p>
      <h1 className="text-3xl font-bold text-primary">Page not found</h1>
      <p className="text-muted max-w-sm">This page doesn't exist or was moved.</p>
      <Link href="/" className="text-accent hover:underline text-sm">
        ← Back to portfolio
      </Link>
    </main>
  )
}
```

## Loading (`src/app/loading.tsx`)
```tsx
export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <span className="font-mono text-muted text-sm animate-pulse">Loading...</span>
    </main>
  )
}
```
- No spinner library needed — keep it minimal and on-brand
- `animate-pulse` is Tailwind built-in

---

## Performance

### Fonts
- Three roles, all via `next/font/google` in `layout.tsx` — self-hosted, no flicker:
  - **Archivo** (600/700/800) — display. Wide, signage-like, set tight (`-0.03em`)
  - **IBM Plex Sans** (400/500/600) — body. Built for technical documentation
  - **IBM Plex Mono** (400/500/600) — data, labels, eyebrows, chips
```ts
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'

const archivo = Archivo({ subsets: ['latin'], weight: ['600','700','800'], variable: '--font-archivo', display: 'swap' })
const plexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-plex-sans', display: 'swap' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-plex-mono', display: 'swap' })
```
- Never import fonts via `<link>` or `@import` in CSS — always `next/font`

### Hero (above the fold)
- Hero is a Server Component — no `"use client"`
- The portrait is the only above-the-fold image; `next/image` with `priority`
- Load animation is pure CSS (`.load-1` … `.load-5`), so nothing blocks paint
- `EngagementChart` is computed at build time from `experience.ts` — no client work

### General
- All sections are Server Components except `Projects` (filter state) and `Navbar` (menu + observer)
- Scroll reveals use `IntersectionObserver` + CSS classes — no animation library in the bundle
- No third-party analytics scripts (keep it clean — add later if needed)

---

## Favicons
Next.js 16 auto-detects these files from `src/app/` — no manual `<link>` tags needed in `layout.tsx`.

**Required files:**
```
src/app/
├── icon.png          # 32×32 — browser tab
├── icon.svg          # SVG version — modern browsers prefer this
├── apple-icon.png    # 180×180 — iOS home screen
```

**What to use as the icon:**
Initials-based mark — `M` or `MEA` — on accent background `#1a5fa8`. Simple, recognizable, scales well at small sizes.

```
Background: #1a5fa8 (square or slightly rounded)
Text: #e2e8f0
Font: Geist Mono, bold
Content: "M" (single letter works best at 32×32)
```

- Generate at [favicon.io](https://favicon.io) or [realfavicongenerator.net](https://realfavicongenerator.net)
- Drop the files into `src/app/` — Next.js handles the rest
- No `favicon.ico` needed for modern browsers but add one in `/public/favicon.ico` as fallback

---

## Deployment (VPS · Docker · Standalone)

### `next.config.ts`
`output: "standalone"` is already set — correct for Docker deployment.

### `Dockerfile`
```dockerfile
FROM oven/bun:1 AS deps
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

FROM oven/bun:1 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
```
- Builder uses Bun (fast installs + build), runner uses Node (standalone output is Node-based)
- Multi-stage keeps the final image lean

### `docker-compose.yml`
```yaml
services:
  portfolio:
    build: .
    container_name: portfolio
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - HOSTNAME=0.0.0.0
```

### Nginx (reverse proxy on VPS)
```nginx
server {
  listen 80;
  server_name mohamedelaminemeghni.com www.mohamedelaminemeghni.com;
  return 301 https://$host$request_uri;
}

server {
  listen 443 ssl;
  server_name mohamedelaminemeghni.com www.mohamedelaminemeghni.com;

  ssl_certificate     /etc/letsencrypt/live/mohamedelaminemeghni.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/mohamedelaminemeghni.com/privkey.pem;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```
- SSL via Certbot (`certbot --nginx -d mohamedelaminemeghni.com`)
- www redirect to non-www (matches `SITE.url`)

### `.dockerignore`
```
node_modules
.next
.git
*.md
.env*
```

### CI/CD (GitHub Actions → VPS)
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to VPS
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_SSH_KEY }}
          script: |
            cd /srv/portfolio
            git pull origin main
            docker compose build --no-cache
            docker compose up -d
```
- Secrets: `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY` — set in GitHub repo settings
- Push to `main` → auto deploys to VPS in minutes
```

---

## Theme
- **Mode:** Light document ground with ink panels bookending the page (hero, contact). No toggle.
- **Paper:** `#eff1ec` — page ground
- **Paper sunk:** `#e6e9e2` — alternating section ground (Stack, Catalogue)
- **Ink:** `#13171a` — hero, contact, navbar
- **Ink raised:** `#1c2226` — chart track
- **Rule:** `#cdd2c9` (on paper) / `#2c3439` (on ink) — hairline dividers, the main structural device
- **Text:** `#1a1f22` (on paper) / `#e8ebe5` (on ink)
- **Muted:** `#5d665f` (on paper) / `#8d968c` (on ink)
- **Signal:** `#0b6b3a` (on paper) / `#23c46e` (on ink) — the single accent

Green is semantic, not decorative: it is the "healthy service" colour of a monitoring board,
and it doubles as a quiet nod to Algiers. `--amber: #a8701a` is reserved for a future warning state.

Define all as CSS variables in `globals.css` and expose them through `@theme inline`.
Surfaces carry no shadows, no gradients, and no border radius — hairlines do the separating.

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — metadata, fonts, JSON-LD
│   ├── page.tsx            # Composes all sections in order
│   └── globals.css         # CSS variables, base styles, load/scroll motion
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx    # "use client" — filter + reveal state
│   │   └── Contact.tsx     # Also carries the page footer
│   └── ui/
│       ├── Navbar.tsx           # Fixed ink rail with section links
│       ├── EngagementChart.tsx  # Signature element — career on one time axis
│       ├── Chip.tsx             # Mono tag for stack entries
│       ├── SectionHead.tsx      # Eyebrow + title + optional note
│       └── AnimatedSection.tsx  # Scroll-triggered reveal wrapper
├── data/
│   ├── experience.ts       # Experience array — includes `start`/`end`/`shortName` for the chart
│   ├── projects.ts         # Projects array
│   └── skills.ts           # Skills grouped by pillar
└── lib/
    ├── constants.ts        # SITE + SOCIAL
    └── utils.ts            # cn() helper (clsx + tailwind-merge)
```

---

## Components Spec

### `Navbar.tsx`
- Fixed top, ink background, hairline bottom — reads as a document header rail over every section
- Wordmark: green dot + `MEGHNI` in Archivo
- Links (mono, uppercase, tracked): Record · Stack · Engagements · Catalogue · Contact
- Active section highlighted in `signal-lit` via `IntersectionObserver`
- Right side: `Résumé ↓` (links to `/resume.pdf`)
- Mobile: full-screen ink overlay menu

### `EngagementChart.tsx` — signature element
- Server Component. Every engagement plotted on one shared time axis, overlaps included
- Derived entirely from `experience.ts` (`start`, `end`, `shortName`); `end: null` means ongoing
- Ongoing work renders bright, closed work dim — the convention a monitoring board uses
- Bars grow left-to-right on load (`.rail-segment`), staggered; disabled under reduced motion
- Axis: origin label at the first month, then a tick per January

### `AnimatedSection.tsx`
- Wraps sections and list items; `IntersectionObserver` + CSS classes, no animation library
- Bails out entirely under `prefers-reduced-motion`

### `Chip.tsx`
```tsx
// <Chip label="Laravel" />  ·  <Chip label="Laravel" onInk />
// Mono 11px, hairline border, muted text, square corners. One style, no colour coding.
```

### `SectionHead.tsx`
```tsx
// <SectionHead eyebrow="Catalogue" title="23 systems shipped." note="…" id="projects-heading" />
// Hairline top rule, mono uppercase eyebrow in signal, Archivo extrabold title.
```

---

## Sections Spec

The page reads as an operating record: an ink hero, three paper sections of evidence,
and an ink contact panel closing it.

### `Hero.tsx`
- Ink panel. Left-aligned — nothing is centred on this page
- Meta bar: availability (green dot) · Algiers · UTC+1 · languages, with a small square
  grayscale portrait at the right. Hairline underneath
- `<h1>` carries both the name (mono eyebrow) and the claim:
  *"Backend systems, and the infrastructure that keeps them up."* in Archivo extrabold
- One paragraph of context, then `[Download résumé (PDF)]` + `[Read the code on GitHub]`
- Closes with `EngagementChart` — the thesis, in data
- Load sequence: `.load-1` … `.load-5`, then the chart bars

### `About.tsx` — eyebrow "Operating record"
- 2-column: left = narrative in third person (kept for AEO), right = readout table
- Readout rows are label · dotted leader · mono tabular value — a printed record, not stat cards
- Values: 5+ years · 11 servers · 95% uptime · 2 h → min deploys · 5 packages · 8 articles · 5+ mentored

### `Skills.tsx` — eyebrow "Stack"
- Sunk paper ground. Three full-width strata separated by hairlines, read top to bottom:
  Application tier · Infrastructure tier · Design tier
- Each stratum: tier label, pillar name, entry count, then `Chip` list. No cards, no icons

### `Experience.tsx` — eyebrow "Engagements"
- `<ol>` of entries, hairline separated. Left gutter (mono): current marker, period, location, type
- Right column: role, company in signal, bullets marked with a hairline dash, `Chip` stack
- `<strong>` inside bullets renders as full-contrast text — the numbers carry themselves

### `Projects.tsx` — eyebrow "Catalogue"
- Sunk paper ground. Dense list, not a card grid: 23 rows read as a package registry
- Filter row (All / Open Source / Internal tool / Client work / Freelance) with live counts
- Row: title (linked with `↗` when public) + badge + `Chip` stack on the left, description on the right
- First 8 shown; `Show N more` reveals the rest

### `Contact.tsx` — eyebrow "Contact"
- Ink panel mirroring the hero. Heading: *"Open to full-time remote roles, worldwide."*
- Email as a large Archivo link, then mono links: LinkedIn ↗ · GitHub ↗ · Résumé (PDF) ↓ · phone
- Footer lives inside this panel — copyright and colophon, no filler line

---

## SEO & Metadata (`layout.tsx`)
```ts
export const metadata: Metadata = {
  title: 'Mohamed El Amine Meghni — Senior Backend Engineer',
  description: 'Senior Backend Engineer specializing in API design, DevOps, and solution architecture. Open to remote roles worldwide.',
  openGraph: { /* same */ },
}
```

---

## SEO, AEO & Accessibility

### SEO

**Metadata (`layout.tsx`)**
```ts
export const metadata: Metadata = {
  title: 'Mohamed El Amine Meghni — Senior Backend Engineer',
  description: 'Senior Backend Engineer with 5+ years of experience in API design, DevOps, and solution architecture. Open to full-time remote roles worldwide.',
  keywords: ['Senior Backend Engineer', 'Laravel', 'DevOps', 'Solution Architecture', 'Remote Backend Engineer', 'Algeria'],
  authors: [{ name: 'Mohamed El Amine Meghni' }],
  canonical: SITE.url,
  openGraph: {
    type: 'profile',
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    // og-image auto-registered via opengraph-image.tsx
  },
  twitter: {
    card: 'summary_large_image',
    // twitter image auto-registered via opengraph-image.tsx
  },
}
```

**On-page SEO rules**
- One `<h1>` only — the name in Hero
- Section headings use `<h2>`, job titles `<h3>`, bullet context `<p>`
- Proper heading hierarchy throughout — never skip levels
- All images (if any) have descriptive `alt` text
- `<html lang="en">` set in root layout
- Sitemap: `src/app/sitemap.ts` — static, single URL
- Robots: `src/app/robots.ts` — allow all, point to sitemap

---

### AEO (Answer Engine Optimization)
AEO targets AI search (ChatGPT, Perplexity, Google SGE) which pulls structured, factual, scannable content.

**Structured Data — JSON-LD (`layout.tsx` or `<Head>`)**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mohamed El Amine Meghni",
  "jobTitle": "Senior Backend Engineer",
  "description": "Senior Backend Engineer with 5+ years specializing in API design, DevOps, and solution architecture.",
  "url": "https://mohamedelaminemeghni.com",
  "email": "meghni.mohamed.el.amine@gmail.com",
  "sameAs": [
    "https://www.linkedin.com/in/mohamed-el-amine-meghni-1684a41a3/",
    "https://github.com/GTS-MEGHNI"
  ],
  "knowsAbout": ["Laravel", "REST API", "DevOps", "Docker", "CI/CD", "Solution Architecture", "Linux", "PostgreSQL"],
  "availableLanguage": ["Arabic", "French", "English"],
  "homeLocation": { "@type": "Place", "name": "Algiers, Algeria" }
}
```

**AEO content rules**
- Each section must contain self-contained, factual sentences — AI engines pull paragraphs verbatim
- About section: write in third person *("Mohamed is a Senior Backend Engineer...")*  so it reads correctly when cited by an AI
- Use explicit numbers everywhere: "5+ years", "5 VPS", "~95% uptime", "2hrs → minutes", "1k+ users", "7 articles"
- Avoid vague language ("worked on various projects") — be specific and attributable
- Project cards: each description must answer *who built it, what it does, what the outcome was* in 2 sentences max
- Skills section: plain text lists (not just visual pills) so crawlers index the actual skill names

---

### Accessibility (WCAG 2.1 AA)

**Semantic HTML**
- Use `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>` — no div soup
- Every `<section>` has an `aria-labelledby` pointing to its `<h2>`
- Navbar `<nav>` has `aria-label="Main navigation"`
- Current section link in navbar gets `aria-current="true"`

**Keyboard & Focus**
- All interactive elements reachable and operable via keyboard
- Visible focus ring on all focusable elements — never `outline: none` without a custom replacement
- Skip-to-content link as the very first focusable element:
  ```tsx
  <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 ...">
    Skip to main content
  </a>
  ```
- Navbar mobile menu (if any) traps focus when open

**Color & Contrast**
- All text must meet AA contrast ratio: 4.5:1 for normal text, 3:1 for large text
- Verify `#94a3b8` (muted text) on `#0f1117` (bg) — adjust if below 4.5:1
- Never convey information by color alone (e.g. stack tags need text, not just color)
- Accent `#1a5fa8` on dark bg — verify contrast for any text using it

**Motion**
- Wrap all Framer Motion animations with `prefers-reduced-motion`:
  ```tsx
  const prefersReduced = useReducedMotion() // Framer Motion hook
  const variants = prefersReduced ? {} : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }
  ```

**Miscellaneous**
- Resume download link: `aria-label="Download resume as PDF"`
- External links (GitHub, LinkedIn): `target="_blank"` + `rel="noopener noreferrer"` + `aria-label="... (opens in new tab)"`
- StackTag pills: purely decorative, wrap lists in a `<ul>` with `aria-label="Tech stack"`
- Test with: axe DevTools, Lighthouse accessibility audit, keyboard-only navigation

---

## Build Order for Claude Code CLI
1. `globals.css` — CSS variables + base
2. `data/` — all three data files
3. `lib/utils.ts` — cn() helper
4. `ui/` components — StackTag, SectionLabel, AnimatedSection
5. `Navbar.tsx`
6. Sections in order: Hero → About → Skills → Experience → Projects → Contact
7. `page.tsx` — compose all sections
8. `layout.tsx` — metadata + fonts