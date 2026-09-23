# Product

<!-- impeccable:product-schema 1 -->

> Written unattended on 2026-09-22. The owner said "just go start" and was away, so there was no interview round. Facts come from the repository (`src/data/*`, `src/lib/constants.ts`, `docs/PORTFOLIO_SPEC.md`, `public/resume.*`) and from the owner's answers to the critique questions. Anything marked **(inferred)** still needs the owner to confirm it.

## Platform

web

## Users

- **Primary: technical hiring managers and senior engineers** (staff engineer, engineering lead, CTO of a small or mid-size company) screening a candidate for a full-time remote backend role. They open the page from a job application, a LinkedIn message or a résumé link, usually on desktop between other tasks. Their question is "can this person own our backend and keep production up?" **(inferred)**
- **Secondary: recruiters and talent partners** who skim in about 30 seconds. They look for the role title, years of experience, core stack (Laravel, NestJS, PostgreSQL, Docker, CI/CD), location/timezone and availability, then click the résumé or contact link. **(inferred)**
- **Tertiary: AI answer engines and search crawlers** quoting the page. The existing spec's AEO rules require self-contained factual sentences, third person where they get quoted, and plain-text skill names. (repo: `docs/PORTFOLIO_SPEC.md`)

## Product Purpose

This is the personal site of Mohamed El Amine Meghni, an engineering leader (Head of Engineering at Sadeem Informatique) in Algiers, Algeria. He is looking for full-time remote roles worldwide. Success means a qualified visitor downloads the résumé or emails him, already believing he can design backends *and* run the infrastructure under them.

## Positioning

Presented as a **technical lead**, not an individual developer (owner, 2026-09-22: "presentation should be more technical lead, I'm not developing anything now"). Lead with architecture, infrastructure ownership, code review and mentoring; application code comes second.

He is a backend engineer who ended up owning production. At Sadeem Informatique he runs 11 Linux VPS environments, built the CI/CD pipelines that deploy to them, and built Watchtower, the observability platform (NestJS, ClickHouse) that monitors production exceptions, errors and logs from the company's client solutions. He also maintains the open-source Laravel and NestJS packages for Algeria's national SATIM card payment gateway. Few other candidates can claim both the operator record and the SATIM packages.

## Operating Context

- The visitor compares several candidates in tabs and decides quickly whether to read deeper.
- They should find proof they can check: GitHub repos (the 5 open-source packages have public URLs), the résumé PDF/HTML, LinkedIn.
- The owner's chosen tone (critique answer, 2026-09-22) is **operator console**: the page should look like the dashboard a production-minded engineer would build. It should be dense and data-first, with real metrics, a status board and architecture diagrams.

## Capabilities and Constraints

- Single-page Next.js 16 site (App Router, RSC, Tailwind v4), deployed as a standalone container on the owner's VPS. Conventions are in `CLAUDE.md`: Bun, `next/image`, `next/link`, no `tailwind.config.js`, RSC by default.
- Static assets: `/resume.pdf`, `/resume.html`, `/profile.webp`.
- One `<h1>`, `aria-labelledby` sections, a skip link, WCAG 2.1 AA, and reduced-motion support (repo spec).
- Owner's decision (2026-09-22): **the "95% uptime" figure is dropped.** Lead with deploy time (~2 h to minutes), 11 servers and Watchtower instead.
- Undecided: whether the phone number stays public, and whether the CERIST AI research role stays in the career timeline.

## Brand Commitments

- Name: Mohamed El Amine Meghni. Wordmark: "Meghni". Domain: mohamedelaminemeghni.com.
- Languages: Arabic, French, English. Timezone: UTC+1.
- Tone of the whole site: operator console (owner, 2026-09-22). The previous paper/ink editorial look is being replaced, not polished.

## Evidence on Hand

- `src/data/experience.ts`: 4 engagements with dates, bullets and stacks.
- `src/data/projects.ts`: 23 projects. 5 are open source with public GitHub URLs, 1 is internal (Watchtower) and the rest are client or freelance.
- Verified numbers: 5+ years; 11 Linux VPS environments; deploys cut from ~2 hrs to minutes; 5 OSS packages; 8 engineering articles; 5+ juniors mentored; one freelance platform grew past 1k users; solution architecture led on 2 major projects (multi-tier: app, cache, filesystem, DB; pre-prod and prod isolated).
- Monitoring tools actually used: Beszel, Uptime Kuma. CI: Jenkins, GitHub Actions with Slack alerts.
- **Absent, must not be fabricated:** live metrics from real servers, Watchtower ingest volumes or event counts, uptime or SLO percentages, client names beyond those in the data, testimonials, screenshots of Watchtower. Any illustrative telemetry must be clearly labeled as illustrative.

## Product Principles

1. **Prove, don't claim.** Every number shown has to be real and traceable to the résumé.
2. **Operator first, then builder.** Production ownership is the differentiator; application work backs it up.
3. **Depth over count.** A few systems explained well beat 23 listed at equal weight.
4. **Recruiter-legible in 30 seconds.** Title, years, stack, location/timezone and contact are visible without scrolling or decoding metaphors.
5. **Honest instrumentation.** Anything styled as live data either is live (computed from the data at request time) or is labeled.

## Accessibility & Inclusion

WCAG 2.1 AA: text contrast 4.5:1, non-text/interactive borders 3:1, keyboard-complete, a focus trap on the mobile menu, reduced motion honored, charts with a text or table equivalent.
