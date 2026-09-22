---
target: homepage
total_score: 15
max_score: 28
na_heuristics: 7,9,10
p0_count: 1
p1_count: 2
target_identity: "file:/home/sadeem/projects/portfolio-next/src/app/page.tsx"
target_fingerprint: "sha256:59d3d888fe753c9b079363b59843b4db85de35032a9c2151e9b4539d08cd30b8"
target_path: /home/sadeem/projects/portfolio-next/src/app/page.tsx
timestamp: 2026-09-22T20-35-31Z
slug: src-app-page-tsx
---
Degraded run: browser unavailable (Claude in Chrome extension not connected); source-only review. Dual-agent (A design review, B detector).

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | new Date() frozen at build on static route (EngagementChart.tsx:23, Contact.tsx:65) |
| 2 | Match System / Real World | 2 | Metaphor nav labels Record/Catalogue; "2 h -> min" readout |
| 3 | User Control and Freedom | 2 | Mobile menu lacks Esc/focus trap/return; Show more not collapsible |
| 4 | Consistency and Standards | 2 | Third- vs first-person voice; wordmark label-in-name mismatch |
| 5 | Error Prevention | 3 | Low-risk surface |
| 6 | Recognition Rather Than Recall | 2 | Same facts repeated 4x; Watchtower listed twice |
| 7 | Flexibility and Efficiency | n/a | Portfolio |
| 8 | Aesthetic and Minimalist Design | 1 | 31 skill chips, 20 chips on one job, 7 stats, 23 equal-weight projects, duplicate descriptions |
| 9 | Error Recovery | n/a | No error flows |
| 10 | Help and Documentation | n/a | Portfolio |
| Total | | 15/28 | Acceptable (54%) |

## Design Specificity Verdict
About 60% template. The paper/ink "operating record" concept is good, but the execution follows the editorial-dev-portfolio formula: the same eyebrow + period-headline on every section (SectionHead.tsx:13-18), 11px mono caps everywhere (~20 uses), a green live dot used 4x, a formula hero, a 7-stat ledger, chip walls, three font families (Archivo + Plex Sans + Plex Mono), a colophon footer, and LLM-cadence copy. Detector: 0 findings across 18 files. The slop is structural, not mechanical.

## Priority Issues
- [P0] "95% uptime" undermines the SRE pitch (About.tsx:13, experience.ts:28). Remove it or give a real SLO; lead with MTTR, deploy frequency or ingest volume. (/impeccable clarify)
- [P1] Every section uses the identical eyebrow + headline template. Kill the eyebrows and give each section its own form; keep mono for data only. (/impeccable shape)
- [P1] Observability identity claimed but not shown. Write 2-3 flagship case studies with architecture diagrams and metrics; collapse the CRUD projects into an "also shipped" list. (/impeccable shape)
- [P2] Chip overload; Skills comes before Experience (page.tsx:26-27). Cut or prose-ify Skills; cap chips at about 6 per job; reorder. (/impeccable distill)
- [P2] A11y: mobile menu focus management; interactive borders at 1.35-1.42:1; chart periods only in title=; ~16px tap targets. (/impeccable harden, /impeccable adapt)

## Persona Red Flags
- Jordan: metaphor nav; green 95%; no Laravel above the fold; "23 systems" mostly dashboards.
- Riley: Show more irreversible; hydration flash from AnimatedSection; stacked delays; stale dates.
- Casey: hero status truncated; chart bars squeezed to ~230px; CTAs below the first screen; tiny tap targets.

## Minor Observations
Unused --amber and Project.metric; break-all on email; public phone number; menu icon never toggles; CERIST AI role dilutes positioning.

## Questions to Consider
- Why doesn't the page look like the dashboard you'd build?
- Which 3 projects would you walk a staff engineer through?
- What would a recruiter lose if the eyebrows, chips and Skills section vanished?
