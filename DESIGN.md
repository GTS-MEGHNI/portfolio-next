---
name: Meghni
description: A senior backend engineer's portfolio drawn as one 42U rack elevation in a daylit equipment room.
colors:
  chassis: "#dde1e4"
  plate: "#f7f8f8"
  plate-sunk: "#eceef0"
  seam: "#c3c9ce"
  edge: "#737d86"
  rail: "#262b30"
  rail-raised: "#33393f"
  rail-text: "#c5ccd2"
  text: "#14181b"
  muted: "#4f5961"
  silkscreen-white: "#ffffff"
  role-employment: "#1f3fbf"
  role-oss: "#b93d0b"
  role-client: "#8a5b00"
  role-freelance: "#0d6f67"
  role-none: "#4a5259"
  led-on: "#14a44d"
  led-on-glow: "#5ee08f"
  led-off: "#8d969d"
typography:
  display:
    fontFamily: "Barlow Condensed, Barlow, sans-serif"
    fontSize: "clamp(3.25rem, 7vw, 5.75rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Barlow Condensed, Barlow, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
  title:
    fontFamily: "Barlow Condensed, Barlow, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
  silkscreen:
    fontFamily: "Barlow Condensed, Barlow, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.03em"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  reading:
    fontFamily: "Martian Mono, monospace"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.4
    fontFeature: "\"tnum\", \"zero\""
  reading-small:
    fontFamily: "Martian Mono, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: "\"tnum\", \"zero\""
  address:
    fontFamily: "Martian Mono, monospace"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "\"tnum\", \"zero\""
rounded:
  none: "0px"
  hairline: "1px"
  plate: "2px"
  led: "9999px"
spacing:
  unit-gap: "3px"
  ear: "2.5rem"
  ear-narrow: "12px"
  faceplate-x: "3.5rem"
  faceplate-y: "3rem"
  faceplate-x-narrow: "1.25rem"
  faceplate-y-narrow: "2.5rem"
  port-gap: "10px"
  header-gap: "2.5rem"
components:
  button-primary:
    backgroundColor: "{colors.rail}"
    textColor: "{colors.silkscreen-white}"
    typography: "{typography.body}"
    rounded: "{rounded.plate}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.role-employment}"
  button-port:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.plate}"
    padding: "0 16px"
    height: "48px"
  button-port-hover:
    textColor: "{colors.role-employment}"
  button-rail:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.rail}"
    rounded: "{rounded.plate}"
    padding: "10px 16px"
  faceplate:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.text}"
    padding: "48px 56px"
  rack-ear:
    backgroundColor: "{colors.rail}"
    textColor: "{colors.rail-text}"
    typography: "{typography.address}"
    width: "2.5rem"
  elevation-block-employment:
    backgroundColor: "{colors.role-employment}"
    textColor: "{colors.silkscreen-white}"
    rounded: "{rounded.plate}"
    padding: "6px 10px"
  elevation-block-oss:
    backgroundColor: "{colors.role-oss}"
    textColor: "{colors.silkscreen-white}"
    rounded: "{rounded.plate}"
    padding: "6px 10px"
  elevation-block-client:
    backgroundColor: "{colors.role-client}"
    textColor: "{colors.silkscreen-white}"
    rounded: "{rounded.plate}"
    padding: "6px 10px"
  elevation-block-none:
    backgroundColor: "{colors.role-none}"
    textColor: "{colors.silkscreen-white}"
    rounded: "{rounded.plate}"
    padding: "6px 10px"
  led-on:
    backgroundColor: "{colors.led-on}"
    rounded: "{rounded.led}"
    size: "10px"
  led-off:
    backgroundColor: "transparent"
    rounded: "{rounded.led}"
    size: "10px"
  node-plain:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.text}"
    typography: "{typography.silkscreen}"
    rounded: "{rounded.plate}"
    padding: "12px 14px"
  node-core:
    backgroundColor: "{colors.role-employment}"
    textColor: "{colors.silkscreen-white}"
    typography: "{typography.silkscreen}"
    rounded: "{rounded.plate}"
    padding: "12px 14px"
  node-store:
    backgroundColor: "{colors.plate-sunk}"
    textColor: "{colors.text}"
    typography: "{typography.silkscreen}"
    rounded: "{rounded.plate}"
    padding: "12px 14px"
  timeline-track:
    backgroundColor: "{colors.plate-sunk}"
    rounded: "{rounded.plate}"
    height: "20px"
---

# Design System: Meghni

## Overview

**Creative North Star: "The Daylight Rack Elevation"**

The whole page is one 42U server cabinet, standing in a daylit equipment room and read from the top down the way an operator reads it. Each section is a unit bolted between two graphite rails. The rails carry printed U numbers and square cage-nut holes, and every unit has a near-white powder-coat faceplate with a hairline seam where it meets the next one. On desktop a sticky graphite rail holds the elevation drawing: one coloured block per unit, sized to its true U height. That drawing is both the navigation and the page's only field of colour.

It is dense in the way equipment is dense. Every unit is named and numbered together, carries one numeric reading, and can be deep-linked by its address. The system works in three strict planes. The **rail plane** (graphite, U numbers, cage nuts) holds structure and addresses. The **faceplate plane** (powder-coat) holds all prose. The **indicator plane** (LEDs) holds state. Nothing decorative sits outside those three planes.

The world rejects the usual portfolio template (a hero over stacked sections with eyebrow labels and card grids) and the near-black neon dashboard. It is a daylight room, not a dark NOC.

**Key Characteristics:**
- A cool light-grey chassis ground with graphite rails and near-white faceplates. Colour appears only in the elevation map and in marks that encode the kind of work.
- Barlow Condensed caps as silkscreen, Barlow for prose, Martian Mono for readings and addresses.
- 2px corners throughout. No drop shadows. Depth comes from inset seams and 3px graphite gaps.
- State is shown by LED shape and a text label, never by colour alone.
- A single authored motion: units rack in top to bottom and the live LED breathes. Reduced motion freezes both.

## Colors

A neutral hardware palette of cool greys and graphite, with four saturated powder-coat hues that exist only to say what kind of work something is.

### Primary
- **Cobalt Employment** (role-employment): marks employment work. It fills History, Watchtower and Infrastructure blocks in the elevation map, their timeline bars, the core node in architecture diagrams, and the kind-of-work label. It is also the system's interaction colour (see the Interaction Borrow Rule).

### Secondary
- **Vermilion Open Source** (role-oss): marks open-source work. It fills the Packages block, the lit strip in each patch-panel socket, and the hover text on a package row.
- **Ochre Client Work** (role-client): marks client work. It fills the Shipped block, contract timeline bars and the client kind chip.

### Tertiary
- **Teal Freelance & Research** (role-freelance): marks freelance and research engagements, in timeline bars, kind chips and the legend.

### Neutral
- **Chassis Grey** (chassis): the page ground and the room the rack stands in. It is also the scrollbar track.
- **Powder-Coat Plate** (plate): every faceplate, port buttons at rest, and the plain diagram node.
- **Sunk Plate** (plate-sunk): recessed surfaces on a faceplate, such as the timeline track, the store node, and row hover.
- **Hairline Seam** (seam): 1px dividers, header rules, the bottom seam of a faceplate, and dashed year gridlines.
- **Machined Edge** (edge): port-button borders, flow arrows, bullet dashes and the resting underline on the contact email.
- **Graphite Rail** (rail): rack ears, the elevation sidebar, the mobile header, the primary button, the asset-tag frame and the patch panel.
- **Raised Rail** (rail-raised): the 3px gap between mounted units and the socket ring.
- **Rail Print** (rail-text): U numbers and legend text on graphite.
- **Ink** (text): headings, readings and strong text on faceplates.
- **Muted Ink** (muted): summaries, body copy, meta lines and table headers.
- **Reference Grey** (role-none): elevation blocks for reference units (Profile, Stack, Contact), which carry no kind of work.
- **Silkscreen White** (silkscreen-white): text on graphite and on coloured blocks, and the top highlight inside each faceplate.

### Indicator
- **Lit LED** (led-on) with **LED Glow** (led-on-glow): a lit indicator. The glow exists only as the halo around a lit LED.
- **Dark LED** (led-off): the 2px ring of an unlit, hollow indicator.

### Named Rules
**The One Law Rule.** A hue means exactly one thing: the kind of work. Employment is cobalt, open source is vermilion, client work is ochre, freelance and research are teal. Hue fills appear only in elevation blocks, timeline bars, legend and kind chips, patch-port strips and a diagram's core node. They never decorate.

**The Lit LED Rule.** Green appears only on a lit LED and its glow. It never marks a link, a success state, text or a border.

**The Neutral Faceplate Rule.** Faceplates stay powder-coat (plate), with sunk plate for recesses. A faceplate is never tinted by its unit's kind of work. The unit's colour lives in the rail map and in small marks on the plate.

**The Interaction Borrow Rule.** Interaction state borrows cobalt, and only as a transient signal: the 2px focus outline (3px offset), text selection, the hover fill on the graphite primary button, the hover border and text on port buttons, and the 2px inset outline on a unit highlighted from the rail. At rest, cobalt outside employment marks is not part of the system.

## Typography

**Display Font:** Barlow Condensed 500/600/700 (falls back to Barlow, then sans-serif)
**Body Font:** Barlow 400/500/600 (falls back to system-ui)
**Label/Mono Font:** Martian Mono 400/500, always set with tabular, slashed-zero numerals

**Character:** Condensed industrial caps read like silkscreen printed on sheet metal. Plain Barlow is the operator's manual beside it. Martian Mono is the stamped reading on the gauge.

### Hierarchy
- **Display** (700, 3.25rem, then 4.75rem at sm and 5.75rem at xl, line-height 0.88, uppercase): the engineer's name, as the h1 on the top unit only.
- **Headline** (700, 2rem, then 2.75rem at sm, line-height 1, uppercase, 0.01em): unit names, always preceded by the unit's LED.
- **Title** (700, 1.75rem for engagement roles and 1.375rem for sub-diagrams, line-height 1, uppercase): headings inside a unit.
- **Role line** (Barlow Condensed 600, 1.5rem to 1.75rem, uppercase, 0.03em): the job title directly below the h1.
- **Silkscreen** (Barlow Condensed 600, 17px, uppercase, 0.03em; 15px in rail blocks and the wordmark plate; 14px at 0.05em for table column heads): diagram node titles, definition terms and environment names.
- **Body** (Barlow 400, 1.0625rem, line-height 1.6, wraps with `pretty`): prose, kept to 60–70ch. The Profile lead runs at 1.125rem.
- **Body small** (Barlow 400/500, 14–15px): meta lines, captions, stack lists joined with " · ".
- **Reading** (Martian Mono 500, 1.125rem to 1.25rem in Profile, 15px in reading lists): headline numbers.
- **Reading small / Address** (Martian Mono 400, 12–13px for dates and IDs; 10–11px for U numbers, port numbers and year ticks).

### Named Rules
**The Reading Rule.** Martian Mono is reserved for U numbers, dates, counts, IDs (A01, P01, HTTP 404) and package names, and it always carries `tabular-nums slashed-zero`. Prose, labels and names of things are never set in mono.

**The Silkscreen Rule.** Headings and labels are Barlow Condensed in caps. Headings use `text-wrap: balance`.

**The No Eyebrow Rule.** Nothing sits above a heading except its LED. Context goes below the heading as a role line or summary, or to the right as the unit's reading.

## Layout

The page is a vertical stack of units inside one cabinet, capped at 76rem and centred. Units are separated by 3px gaps of raised graphite, so the rack's frame shows between faceplates. Each unit is a three-column grid: ear, faceplate, ear. The ears are 2.5rem wide from sm up and carry the unit's top and bottom U numbers. Below sm they narrow to 12px and the U numbers are hidden. Unit heights come from `src/data/rack.ts`, top down: Profile 6U, History 8U, Watchtower 6U, Infrastructure 6U, Packages 4U, Shipped 7U, Stack 2U, Contact 3U. They total 42U. Numbering starts from the bottom, so the top unit is U42.

Faceplate padding steps up with width: 1.25rem × 2.5rem on mobile, 2.5rem × 3rem at sm, and 3.5rem horizontally at lg. The unit header ends in a seam rule, followed by 2.5rem of space. Readings and inventories are rows ruled by seam lines, not cards.

From lg (1024px) up, a 16rem sticky graphite sidebar holds the elevation map at true scale: blocks flex in proportion to their U height and are separated by 3px gaps. The main column gets 1.5rem of padding. Below lg, a sticky graphite header holds the wordmark, a Résumé button and a Map button that opens the elevation as a native modal dialog from the right edge (at most 22rem wide). Scroll padding is 4.5rem on mobile and 1.5rem on desktop. Breakpoints are 640, 768, 1024 and 1280px.

**The One Cabinet Rule.** Every section is a Unit: two ears, one faceplate, a U range, an address (`#id`) and a reading. A new section gets a row in the rack registry, and the heights must still total 42U.

## Elevation & Depth

The system is flat powder-coat with no drop shadows. Depth is built from two inset hairlines on each faceplate (white above, seam below), from the 3px graphite gaps between units, and from graphite ears framing the plates. The only light in the room comes from a lit LED.

### Shadow Vocabulary
- **Faceplate seam** (`box-shadow: inset 0 1px 0 #fff, inset 0 -1px 0 var(--seam)`): on every faceplate at rest.
- **Highlighted faceplate** (`box-shadow: inset 0 0 0 2px var(--role-employment), inset 0 1px 0 #fff`): the unit whose rail block is hovered or focused.
- **Lit LED** (`box-shadow: 0 0 0 2px color-mix(in srgb, var(--led-on) 25%, transparent), 0 0 8px var(--led-on-glow)`): the LED of the unit being read.

### Named Rules
**The Only Glow Rule.** An LED is the only thing that emits light. Surfaces never get ambient or offset shadows.

**The Rack-In Rule.** Motion is authored once. On load, units slide 18px into the rails (0.6s, `cubic-bezier(0.16, 1, 0.3, 1)`, staggered 70ms top to bottom). Rail blocks scale in from 0.2 and timeline bars scale in from 0. All three animate transform only, from a visible default, so nothing is hidden before it moves. The live LED breathes its glow on a 2.8s cycle. Everything else stays still apart from 150–300ms colour transitions on hover. `prefers-reduced-motion` switches off all four animations and smooth scrolling.

## Shapes

Hardware corners: 2px on plates, buttons, elevation blocks, nodes, the patch panel and timeline bars. 1px on inset parts (the portrait inside its asset tag, tier rows, socket strips, legend chips). Faceplates and ears are square. LEDs are the only circles. A filled LED is on and a hollow 2px ring is off, so the shape carries the state. Ears carry square cage-nut holes, 6px squares repeated every 16px. Closed engagements use a 135° white hatch over the role fill, so ended versus ongoing never depends on colour alone.

## Components

### Buttons
Buttons are ports on a panel: squared, flat and at least 48px tall.
- **Shape:** near-square corners (2px), minimum height 48px (44px in the mobile header).
- **Primary:** a graphite fill with white Barlow 600 text, 20px horizontal padding and an 18px leading icon. It is the résumé download.
- **Port (secondary):** plate fill with a 1px machined-edge border, ink text and 16px padding, used for Email, GitHub and LinkedIn.
- **Rail button:** a plate fill with graphite text on the graphite sidebar and mobile header.
- **Hover / Focus:** 150ms colour transitions following the Interaction Borrow Rule. Focus is a 2px outline with a 3px offset.

### Chips
- **Kind chip:** a 10px square with 1px corners in the role colour, followed by the kind in muted body-small text. It is used in the legend and the Shipped inventory.

### Navigation (Elevation Map)
- **Style:** an ordered list of blocks on graphite, one per unit, coloured by kind of work and carrying white text. Each block shows a silkscreen name, the top U number in 10px mono and, at 4U or taller, the unit's reading.
- **States:** the active block gets a 2px white outline with a 2px offset and a lit LED. Other blocks show a hollow white ring. Hover brightens a block to 125%. Hovering or focusing a block outlines its unit on the page.
- **Mobile:** the same list, unscaled with 48px minimum rows, inside a right-edge modal dialog. The map is followed by the colour legend.

### Unit (signature)
The Unit is the page's one container: ear, faceplate, ear. Its header shows the LED, the uppercase headline, and an optional muted summary up to 42rem wide. On the right sit the kind-of-work label and the reading. A seam rule closes the header. The LED lights when the unit crosses the middle of the viewport.

### LED
A 10px circle. When on it is a green fill; when off it is a transparent disc with a 2px ring in led-off. The live variant breathes. It is always paired with a text label ("Running", "Ended", "Available…").

### Architecture Diagram
Boxes joined by 18px flow arrows in edge grey. The arrows point right from md up and down when the diagram stacks. Plain nodes are plate with an edge border. The core node is filled with its kind-of-work colour. Store nodes use sunk plate. Titles are silkscreen and details are 14px muted text.

### Engagement Timeline
One shared time axis. Each engagement is a 20px sunk-plate track holding a role-coloured bar. Ongoing work is solid and closed work is hatched at 80% opacity. Dashed seam gridlines mark each year, with 11px mono year ticks below (every other year on narrow screens). A screen-reader table carries the same data.

### Patch Panel
A graphite strip of numbered sockets. Each socket is a dark well with a 1px raised-rail ring and a vermilion strip, with the package name in 10px mono above and the port number (P01) below. A ruled legend of rows follows, and each row links to its package.

### Asset Tag
The portrait sits on a graphite plate with 6px padding and a caption that reads like a label: a silkscreen name on the left and its U address in mono on the right.

## Do's and Don'ts

### Do:
- **Do** mount every new section as a Unit with a registry entry, a U range, an address and a reading, keeping the cabinet at 42U.
- **Do** colour a thing only by its kind of work, using the four role tokens and role-none for reference units.
- **Do** pair every state colour with a shape or a word: filled or hollow LEDs, solid or hatched bars, a label beside the LED.
- **Do** set every number, date, U address, ID and package name in Martian Mono with tabular, slashed-zero numerals.
- **Do** separate units with the 3px raised-graphite gap and finish faceplates with the inset seam.
- **Do** keep motion transform-only (plus the LED's glow), and disable it under reduced motion.

### Don't:
- **Don't** tint a faceplate or its prose with a unit's role colour.
- **Don't** use green for anything but a lit LED.
- **Don't** put an eyebrow, kicker or label above a heading; only the unit's LED may precede it.
- **Don't** set prose, labels or tool names in mono.
- **Don't** add drop shadows, offset shadows or ambient glows; depth is inset seams and graphite gaps.
- **Don't** round corners past 2px or use circles for anything but LEDs.
- **Don't** animate opacity or layout to reveal content, and don't add motion beyond rack-in, block-in, bar-in and the breathing LED.
