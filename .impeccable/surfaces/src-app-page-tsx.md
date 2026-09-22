---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Surface brief: homepage (`src/app/page.tsx`)

**Scope:** the whole single-page portfolio. Replacement visual world, full redesign.
**Mode:** Persuade. A hiring manager or recruiter decides whether to contact or interview; the primary action is the résumé download, the secondary is email.
**Audience/job:** see PRODUCT.md. They must leave believing "backend engineer who owns production", within 30 seconds.
**Proof:** Watchtower (observability), Sadeem infrastructure (11 VPS, CI/CD, monitoring, multi-tier architecture), 5 open-source SATIM/Laravel packages, engagement history. No uptime percentage.
**Constraints:** RSC by default; WCAG 2.1 AA; AEO third-person factual prose and plain-text skill names; one h1.
**Run conditions:** unattended (the owner said "just go start"), code-led (no image generation on this machine), so no decision page was served; the assigned direction was taken per the unattended rule.
**Alternates held:** midnight transit diagram, competitive on clarity (overlapping engagements read as lines). Not built; adoptable on request.

## Direction contract

THESIS: The page is a rack elevation of one engineer. Every section is a unit mounted at a U position in one continuous rack, read top to bottom the way an operator reads a cabinet. A NetBox-style elevation map is the navigation and the page's color field. This refuses the category default: hero plus stacked sections with eyebrow headlines, card grids, and near-black neon dashboards.

OWN-WORLD: A daylight equipment room. The ground is a cool light-gray chassis, rails are graphite with printed U numbers and square cage-nut holes, and faceplates are near-white powder-coat with hairline seams. Color codes exactly one law, the kind of work: cobalt for employment, vermilion for open source, ochre for client work, teal for research/freelance. It fills the elevation blocks and timeline bars; faceplates stay neutral. State is shown by LED shape and label, never color alone. Labels are silkscreen in Barlow Condensed caps; readings use Martian Mono; body text is Barlow. Every unit is named and numbered in the same breath, carries a numeric reading, and is deep-linkable by address.

STORY: The visitor understands a senior backend engineer who runs production, believes it because of the diagrams, packages and history, and downloads the résumé or emails him.

FIRST VIEWPORT: On desktop a sticky left rail (about 220px) holds the rack elevation: full-height colored unit blocks labeled Profile, History, Watchtower, Infrastructure, Packages, Shipped, Stack, Contact, each with its U range, and the active one lit. The main column holds the first unit: a large Barlow Condensed name (the h1), the role line and one factual sentence. Below them sits an LED status row (available, remote full-time; Algiers UTC+1; AR/FR/EN) and a port row of actions with Résumé PDF primary, then email, GitHub and LinkedIn. A full-color portrait sits as an asset-tag plate at the right. Four real readings follow (5+ yrs, 11 servers, deploys 2 h to minutes, 5 packages), then the engagement timeline begins at the fold.

FORM: Server rack front panel / rack elevation, position 5 of 7 on the grounded list (1 Grafana dashboard, 2 status page, 3 htop TUI, 4 incident postmortem, 5 rack elevation, 6 IC datasheet, 7 SCADA mimic panel). Seed key fa2275f3. Raises: [exposure record] every unit carries a numeric reading. [loteria] named and numbered in the same breath. [multiplane] strict planes: rail, faceplate, indicator; text lives only on faceplates. [gravity rain] color encodes one law only. [teletext] every unit has an address and a deep link.

SIGNATURE INTERACTION: scroll-linked elevation. The unit being read lights its LED and its block in the rail, and hovering or focusing a rail block outlines its unit. Motion grammar: on load, units rack in top to bottom (a short slide into the rails with exponential ease-out from a visible default); the current-engagement LED breathes. Everything else is still, and reduced motion freezes all of it.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
