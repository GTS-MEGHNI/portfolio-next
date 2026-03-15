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
- Geist Sans + Geist Mono loaded via `next/font/google` in `layout.tsx` — zero font flicker, self-hosted automatically by Next.js
- Assign as CSS variables so Tailwind can reference them:
```ts
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

// Apply to <html>:
// className={`${geistSans.variable} ${geistMono.variable}`}
```
- Never import fonts via `<link>` or `@import` in CSS — always `next/font`

### Hero (above the fold)
- Hero section is a Server Component — no `"use client"` — renders instantly
- No images in Hero — pure text + CSS, nothing to preload
- Framer Motion for Hero: use `animate` (not `whileInView`) since it's immediately visible — `whileInView` is for below-the-fold sections only
- Avoid layout shift: set explicit `min-h-screen` on Hero, never depend on content height

### General
- All sections are Server Components except those using Framer Motion hooks (`useReducedMotion`) — wrap only the animated wrapper `AnimatedSection` in `"use client"`, keep section content itself as RSC
- No third-party analytics scripts (keep it clean — add later if needed)
- `next/image` not needed if no images — don't import it unnecessarily

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
- **Mode:** Dark only (no toggle)
- **Background:** `#0f1117`
- **Surface:** `#1a1d27`
- **Border:** `#2a2d3a`
- **Accent:** `#1a5fa8`
- **Accent hover:** `#1e6fc0`
- **Text primary:** `#e2e8f0`
- **Text muted:** `#94a3b8`
- **Font mono:** Geist Mono — used for stack tags, section labels, metrics

Define all as CSS variables in `globals.css`.

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — metadata, fonts
│   ├── page.tsx            # Composes all sections in order
│   └── globals.css         # CSS variables, base styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Navbar.tsx      # Fixed top nav with section links
│       ├── StackTag.tsx    # Reusable pill component for tech tags
│       ├── SectionLabel.tsx # Monospace uppercase section titles
│       └── AnimatedSection.tsx # Scroll-triggered fade-in wrapper
├── data/
│   ├── experience.ts       # Experience data array
│   ├── projects.ts         # Projects data array
│   └── skills.ts           # Skills grouped by pillar
└── lib/
└── utils.ts            # cn() helper (clsx + tailwind-merge)
```

---

## Data Layer (`src/data/`)

### `skills.ts`
```ts
export type SkillPillar = {
  name: string
  icon: string         // lucide icon name
  skills: string[]
}
export const skills: SkillPillar[] = [ /* 3 pillars */ ]
```

### `experience.ts`
```ts
export type Job = {
  company: string
  role: string
  type?: 'Contract' | 'Freelance' | 'Research'
  period: string
  location: string
  bullets: string[]     // supports <strong> via dangerouslySetInnerHTML or mdx-lite
  stack: string[]
}
export const experience: Job[] = [ /* 4 jobs */ ]
```

### `projects.ts`
```ts
export type Project = {
  title: string
  description: string
  metric?: string       // e.g. "~95% uptime · 5 VPS environments"
  stack: string[]
  badge?: 'Client work' | 'Research' | 'Freelance'
}
export const projects: Project[] = [ /* 6 projects */ ]
```

---

## Components Spec

### `Navbar.tsx`
- Fixed top, `backdrop-blur`, border-bottom on scroll
- Links: About · Skills · Experience · Projects · Contact
- Right side: [Resume ↓] button (links to `/resume.pdf`)
- Smooth scroll via `scroll-behavior: smooth` on `<html>`
- Hides/shows on scroll direction (optional, implement last)

### `AnimatedSection.tsx`
- Wraps each section
- Uses Framer Motion `whileInView` — fade up on enter
- `viewport={{ once: true, margin: "-80px" }}`

### `StackTag.tsx`
```tsx
// <StackTag label="Laravel" />
// Small pill: Geist Mono, surface bg, border, muted text
```

### `SectionLabel.tsx`
```tsx
// <SectionLabel>Experience</SectionLabel>
// Monospace, uppercase, letter-spaced, accent color, small
```

---

## Sections Spec

### `Hero.tsx`
- Full viewport height (`min-h-screen`), centered content
- Line 1: Name — large, bold, Geist Sans
- Line 2: `Senior Backend Engineer · DevOps · Solution Architecture` — muted
- Line 3: One-liner — *"I build scalable APIs, own production infrastructure, and ship end-to-end."*
- CTAs: [Download Resume] (primary button → `/resume.pdf`) + [GitHub ↗] (ghost button)
- Bottom: subtle "Open to remote worldwide" badge
- Scroll-down chevron indicator at bottom center

### `About.tsx`
- 2-column on desktop: left = text, right = quick-stats cards
- Text: narrative paragraph (less formal than resume)
- Stats cards (4): `5+ years` · `5 VPS managed` · `~95% uptime` · `7 articles written`
- Each stat: large mono number + small label

### `Skills.tsx`
- 3 cards side by side (stack on mobile): Backend · DevOps & Infra · Architecture
- Each card: icon (lucide) + pillar name + skill list
- No progress bars — just clean lists with StackTag pills

### `Experience.tsx`
- Vertical timeline layout (left border line, dot per entry)
- Each entry: role + company + period + location + bullets + StackTags
- Sadeem entry is visually larger (current role)
- `type` badge (Contract / Freelance / Research) shown inline with role

### `Projects.tsx`
- CSS Grid: 3 cols desktop, 2 tablet, 1 mobile
- Each card: title + description + metric (if any, highlighted in accent) + stack tags + badge
- Subtle `border` + `hover:border-accent` transition on cards
- No links — "Client work / Research" badge explains absence

### `Contact.tsx`
- Centered, minimal
- Heading: "Let's work together"
- Sub: "Available for full-time remote roles worldwide"
- 3 icon links: Email · LinkedIn · GitHub
- No form (keep it simple)

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