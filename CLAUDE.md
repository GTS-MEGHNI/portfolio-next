# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Commands

```bash
bun dev        # Start development server (http://localhost:3000)
bun build      # Production build
bun start      # Start production server
bun lint       # Run ESLint
bun typecheck  # Run tsc --noEmit
```

No test suite is configured.

## Architecture

Next.js 16 portfolio website using App Router, React 19, TypeScript (strict), and Tailwind CSS v4.

```
src/
├── app/
│   ├── layout.tsx        # Root layout — Geist font, global metadata
│   ├── page.tsx          # Home page — portfolio content
│   ├── globals.css       # Tailwind v4 entry; CSS variables for light/dark theme
│   └── [...slug]/        # Any additional routes
├── components/           # Shared UI components (no "use client" unless needed)
└── lib/                  # Utilities, constants, helpers
public/
├── resume.html           # Served statically
└── resume.pdf            # Served statically
```

## Key Conventions

### React & Components
- Prefer **React Server Components** (RSC) by default — only add `"use client"` when using hooks, browser APIs, or event handlers
- Co-locate a component's types, helpers, and styles in the same file unless they're shared
- Use named exports for components; default exports only for page/layout files (Next.js requirement)

### TypeScript
- Strict mode is on — no `any`, no `@ts-ignore` without a comment explaining why
- Prefer `interface` for object shapes; `type` for unions, intersections, and primitives
- Always type async function return values explicitly (e.g., `Promise<Post[]>`)

### Styling
- Tailwind v4 — uses `@import "tailwindcss"` in `globals.css`, **not** `tailwind.config.js`
- Do not use the old `tailwind.config.js` API or `@apply` for component styles
- CSS variables for theming are defined in `globals.css` — extend there, not inline
- Responsive: mobile-first (`sm:`, `md:`, `lg:`)

### Data Fetching
- Fetch in Server Components where possible; avoid redundant client-side fetching
- Use `fetch` with Next.js caching options (`cache`, `next.revalidate`) rather than third-party libraries
- Mark routes as `dynamic` explicitly if they must be dynamic; default to static

### File & Naming Conventions
- Files: `kebab-case` (e.g., `hero-section.tsx`)
- Components: `PascalCase`
- Hooks: `camelCase` prefixed with `use` (e.g., `useScrollPosition.ts`)
- Utilities: `camelCase`

## Key Configuration

| File | Purpose |
|---|---|
| `next.config.ts` | Enables React Compiler (`babel-plugin-react-compiler`); `output: "standalone"` for containers |
| `tsconfig.json` | Strict mode; `@/*` → `./src/*` |
| `eslint.config.mjs` | ESLint v9 flat config; extends `next/core-web-vitals` + TypeScript rules |
| `postcss.config.mjs` | Uses `@tailwindcss/postcss` plugin |

## Common Pitfalls

- **Do not** run `npm install` — this project uses Bun (`bun add <pkg>`)
- **Do not** create `tailwind.config.js` — Tailwind v4 is configured via CSS
- **Do not** wrap everything in `"use client"` — keep the RSC boundary as deep as possible
- **Do not** use `<img>` — always use Next.js `<Image>` from `next/image`
- **Do not** use `<a>` for internal links — always use Next.js `<Link>` from `next/link`
- Route handlers go in `src/app/api/[route]/route.ts`, not `pages/api/`

## Spec
Full technical spec in `docs/PORTFOLIO_SPEC.md`. Read it before making any changes.

## Owner

Mohamed El Amine Meghni — Senior Backend Engineer  
Resume: `/resume.pdf` | `/resume.html`