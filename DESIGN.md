---
name: 12 Planilhas Bumbum 30+
description: The delivered worksheet's editorial paper system, scrolled — sage to wine across a single long-form sales page.
colors:
  paper: "#FAF6F0"
  paper-alt: "#F0E9DF"
  ink: "#17140F"
  ink-soft: "#5C544A"
  ink-mute: "#8E8477"
  line: "#DDD3C7"
  line-strong: "#BFB2A2"
  accent: "#C2553F"
  action: "#B84A34"
  action-deep: "#9E3B28"
  fase-1: "#7D8F6E"
  fase-2: "#C08A4E"
  fase-3: "#C2553F"
  fase-4: "#8C4A5C"
  fase-1-soft: "#E4E9DE"
  fase-2-soft: "#F3E5D2"
  fase-3-soft: "#F3DCD5"
  fase-4-soft: "#EEDCE1"
  ink-line: "#3A342C"
  ink-raise: "#241F19"
  ink-edge: "#4A4239"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.35rem, 3.9vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'SOFT' 18, 'WONK' 1"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 4.4vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.022em"
    fontVariation: "'SOFT' 12, 'WONK' 0"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.6rem, 2.9vw, 2.3rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.022em"
    fontVariation: "'SOFT' 12, 'WONK' 0"
  quote:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.25rem, 2.3vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.34
    letterSpacing: "normal"
    fontVariation: "'SOFT' 30, 'WONK' 1"
  body:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  lede:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.7vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.16em"
  price:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3rem, 6vw, 4.6rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
    fontFeature: "tabular-nums lining-nums"
rounded:
  none: "0px"
spacing:
  gutter: "1.25rem"
  gutter-lg: "2.5rem"
  band: "clamp(4.5rem, 11vw, 9.5rem)"
  band-tight: "clamp(3rem, 7vw, 5.5rem)"
  block: "clamp(2rem, 4vw, 3rem)"
  rail: "96px"
  hairline: "1px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "1rem 2.1rem"
    height: "56px"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.action-deep}"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1rem 2.1rem"
    height: "56px"
    typography: "{typography.body}"
  button-ghost-hover:
    backgroundColor: "{colors.paper-alt}"
    textColor: "{colors.ink}"
  plan:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.5rem, 3vw, 2.25rem)"
  plan-lead:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.5rem, 3vw, 2.25rem)"
  plan-flag:
    backgroundColor: "{colors.action}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.45rem 0.95rem"
  slot:
    backgroundColor: "{colors.paper-alt}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.none}"
    padding: "clamp(1.25rem, 3vw, 2rem)"
  dock:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.7rem clamp(1.25rem, 4vw, 2.5rem)"
  rail:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.none}"
    width: "96px"
---

# Design System: 12 Planilhas Bumbum 30+

## Overview

**Creative North Star: "The Worksheet, Unbound"**

This system is inherited, not invented. Its palette, its display face and its four phase colours come from the delivered PDF product (`producao/design-system.md` in the `12 PLANILHAS BUMBUM 30+` project), and the page exists to look like the thing it sells. That is a price argument before it is a taste: the buyer sees the artefact before she owns it. The landing page took the worksheet's paper, ink, hairline rules and phase ramp and unrolled them down a single scroll, so that descending the page is walking the 12-week programme.

The character is warm-paper editorial at working temperature, not at gallery temperature. Cream ground (`#FAF6F0`), near-black ink, one accent at a time, generous air. Nothing is rounded, nothing floats, nothing glows. A 1px rule is the only separator in the system — there are no cards with shadows, no pills, no badges, no decorative gradient. Where a surface needs to separate itself, it changes ground colour or grows a hairline; it never lifts.

The one authored move on top of the inheritance is temperature. The four phase colours are not accents applied to details — they are the ground of the page itself, so the surface warms sage → ochre → terracotta → wine as the visitor descends. Motion carries one idea consistently: photography arrives as a `clip-path` wipe with a slow parallax inside the plate. Confirmed rejections, both from the product and from the build: the standard info-product sales page (pills, badges, countdowns, emoji-as-icon, equal-weight stacked boxes), and decorative depth of any kind on page surfaces.

**Key Characteristics:**
- Warm cream paper, near-black ink, one accent at a time
- Straight corners everywhere — zero border-radius in the system
- 1px rules as the only separator; grounds change, surfaces never lift
- Four phase colours as full-page fields, warming down the scroll
- Fraunces variable display (SOFT/WONK axes used) over Libre Franklin body
- Uppercase labels at wide tracking (0.16em) as the only small-type voice
- Browser chrome themed from the palette: selection, caret, focus ring, scrollbar
- One authored motion idea: masked wipe plus interior parallax

## Colors

A warm-neutral paper system with a single action red and a four-step temperature ramp that belongs to the page ground, never to the type.

### Primary
- **Action Terracotta** (`action`): the only fill for CTAs, the hero's italic phrase, the tier flag, the lead-plan border, and any accent-coloured text at body size. It is a build-introduced variant of the brand tone, cut darker specifically so it clears 4.80:1 on cream.
- **Action Deep** (`action-deep`): hover and active state for every primary button, and the hover colour for links and FAQ summaries on tinted grounds.
- **Brand Terracotta** (`accent`): the tone inherited from the product. It reaches only 4.18:1 on cream, so in this build it survives as large display colour and as phase 3 — not as an action colour.

### Secondary — the phase ramp
- **Sage** (`fase-1`) / **Ochre** (`fase-2`) / **Terracotta** (`fase-3`) / **Wine** (`fase-4`): the four programme phases — Fundação, Estímulo, Intensificação, Progressão. They appear as the 8px hero stripe, the rail bars, the mobile progress bar, the `.phase-bar` thermometers, quote borders, step borders, and hero bullet squares.
- **Sage / Ochre / Terracotta / Wine Soft** (`fase-1-soft` … `fase-4-soft`): the tinted page grounds. Every `.band.on-alt` and the guarantee band take the soft tone of their section's phase, which is what produces the page-long warming.

### Neutral
- **Warm Paper** (`paper`): the page ground and the ground of every raised-but-flat surface (rail, dock, mobile bar, plan cards, plate captions).
- **Paper Alt** (`paper-alt`): the second ground — plate backing before the image loads, ghost-button hover, placeholder slots, scrollbar track.
- **Ink** (`ink`): body text and the dark band ground.
- **Ink Soft** (`ink-soft`): secondary prose, labels, table headers, assurance rows, footer meta.
- **Ink Mute** (`ink-mute`): legal text, the "no" column icons, scrollbar thumb hover.
- **Line** (`line`) / **Line Strong** (`line-strong`): the hairline vocabulary — `line` for ordinary separation, `line-strong` for a separation that opens a section.
- **Ink Line / Ink Raise / Ink Edge** (`ink-line`, `ink-raise`, `ink-edge`): the dark-band equivalents of the hairline, the alt ground, and the ghost border.

### Named Rules

**The Phase-Never-Speaks Rule.** Phase colour lives only in grounds, 1px rules and bars. It never carries text. As text on cream the four tones measure 3.24 / 2.79 / 4.18 / 6.00 to 1 — three of four fail AA. The single sanctioned exception is `.sheet-week` ("Semana 1" inside the hero mockup): large display type at ≥3:1, reproducing the real product page.

**The Two Terracottas Rule.** `accent` (#C2553F) is the brand tone and is for large display only. `action` (#B84A34) is the CTA and body-size accent, because the brand tone stops at 4.18:1 on cream and fails AA while the action tone reaches 4.80:1. If new accent text is smaller than display, it takes `action`. They are not interchangeable and must not be merged.

**The Heat-Is-A-Field Rule.** Phase colour is the ground of whole sections, not a detail on them: `.band.on-alt` takes `var(--phase-soft)` and `.band.on-dark` takes `color-mix(in oklab, var(--color-ink) 92%, var(--phase))`. A new section declares `data-phase` and inherits its temperature; it never hand-picks a tint.

## Typography

**Display Font:** Fraunces (with Georgia, serif) — variable, with the `SOFT` and `WONK` axes actually driven: `SOFT 12` for ordinary headings, `SOFT 18 / WONK 1` for the hero, `SOFT 30 / WONK 1` for italic quotes, `SOFT 40 / WONK 1` for the hero's italic phrase.
**Body Font:** Libre Franklin (with system-ui, sans-serif).

**Character:** A high-contrast, slightly eccentric didone-ish serif carrying every number and every heading, against a plain grotesque that never tries to be interesting. Fraunces is the product's face; it is the reason page and PDF read as one object. Note the divergence from the inherited spec: the PDF pairs Fraunces with Inter, this build pairs it with Libre Franklin.

### Hierarchy
- **Display** (600, `clamp(2.35rem, 3.9vw, 3.5rem)`, 1.02): the hero headline only, set in masked lines. On viewports under 1000px it re-clamps to `clamp(1.95rem, 7.4vw, 2.6rem)`.
- **Headline** (600, `clamp(2rem, 4.4vw, 3.4rem)`, 1.04): the opening `h2` of every section.
- **Title** (600, `clamp(1.6rem, 2.9vw, 2.3rem)`, 1.04): subordinate display lines inside a section, e.g. the standstill question.
- **Quote** (400 italic, `clamp(1.25rem, 2.3vw, 1.75rem)`, 1.34): editorial pull quotes with a 2px phase-coloured left bar, capped at 44ch. Inherited from the product's `C-Quote`.
- **Body** (400, 1.0625rem → 1.125rem at 768px, 1.6): all prose. Prose blocks cap at 68ch, ledes at 62ch, FAQ answers at 66ch.
- **Lede** (400, `clamp(1.1rem, 1.7vw, 1.3rem)`, 1.55, ink-soft): the paragraph directly under a headline.
- **Label** (600, 0.78rem, 0.16em, uppercase, ink-soft): section eyebrow-free metadata — plan names, figure captions, rail names, slot descriptions.
- **Price** (600, `clamp(3rem, 6vw, 4.6rem)`, 1, tabular): the R$27 / R$47 figures, with the currency mark dropped to 1.4rem in body font and raised by `vertical-align: 1em`.

### Named Rules

**The Numerals-Are-Tabular Rule.** Every figure the reader may compare — prices, week counters, the anchor table, worksheet parameters — carries `font-variant-numeric: tabular-nums lining-nums` via `.num`. Numbers in this system line up in columns even when they are prose.

**The No-Kicker Rule.** Sections open on the headline. Position in the programme is read from the phase rail and the section's own ground, never from a small coloured word above the title. The `.label` class exists for metadata attached to an object (a plan, a photo, a rail entry), not for announcing a section.

**The Variable-Axis Rule.** Fraunces is used as a variable face, not as a static weight. Heading emphasis comes from `SOFT` and `WONK`, and weight stays at 600; `font-synthesis-weight: none` is set globally so nothing fakes a weight the file does not have.

## Layout

A single 1220px measure, centred, with gutters of 1.25rem that open to 2.5rem at 1024px. `.wrap-narrow` tightens the measure to 760px where prose runs alone. Above 1024px the whole page is inset from the left by a 96px rail (`--rail-w`, applied as padding on `.shell`), so the rail never overlaps content.

The page is a stack of **bands**. A band owns only vertical rhythm — `clamp(4.5rem, 11vw, 9.5rem)` block padding, `clamp(3rem, 7vw, 5.5rem)` for `.band-tight` — and delegates horizontal padding to the `.wrap` inside it. Consecutive bands on the same ground grow a 1px top rule; bands that change ground do not, because the ground change is already the separation.

Internal rhythm uses a small set of clamps rather than a numeric scale: `clamp(2rem, 4vw, 3rem)` for a block gap, `clamp(1.5rem, 3vw, 2rem)` for grid gutters, `clamp(0.9rem, 1.8vw, 1.3rem)` between a heading and its lede. Grids are asymmetric by default — 1.02/1 for the hero, 0.85/1.15 for the plans, 1.1/0.9 for the anchor, 1/0.78/0.72 for the fit columns — never a bare equal split.

Breakpoints are per-component rather than global; the ones the build actually uses are 560, 620, 640, 720, 760, 820, 880, 900, 999/1000 and 1024px. 1024px is the only structural one: below it the fixed left rail is replaced by a fixed top bar (`.rail-m`) with a 3px phase progress line, and the hero gains 4.25rem of top padding to clear it.

**The Ground-Change-Is-The-Rule Rule.** Sections separate by changing ground (paper → phase-soft → ink) or by a single hairline. They never separate by adding a box.

**The Cascade-Order Rule.** `src/sections.css` is `@import`ed at the top of `src/app.css`, so its rules land *earlier* inside the same `@layer components` and lose to app.css's own `.on-alt` / `.on-dark`. The phase-field overrides therefore carry deliberate extra specificity — `.band.on-alt`, `.band.on-dark`, `.site-foot.on-alt` — and must keep it. An override written as bare `.on-alt` in sections.css will silently do nothing.

## Elevation & Depth

This system is flat. Page surfaces have no elevation at all: no `box-shadow` on any band, card, plan, dock, rail, table or button. Depth is expressed entirely by tonal layering — cream paper, warm paper-alt, phase-soft tint, ink — and by hairlines. Fixed chrome (rail, mobile bar, dock) sits above the page on `z-index` alone, separated by a single 1px border on the edge that faces the content, never by a shadow.

The two shadows in the build are not elevation tokens and are not available to page surfaces: they are cast by the *depicted objects* in the hero mockup — a drawn notebook and a drawn phone. An illustrated physical device casting a physical shadow is the illustration working, not the UI lifting. The same applies to the single linear-gradient in the build, which is the bevel on the drawn notebook base.

### Shadow Vocabulary
- **Notebook cast** (`box-shadow: 0 26px 54px -22px rgba(23,20,15,.42)`): the drawn laptop screen in the hero mockup. Illustration only.
- **Phone cast** (`box-shadow: 0 20px 38px -14px rgba(23,20,15,.5)`): the drawn phone overlapping the laptop, which also sits at `translateZ(58px)` inside a 1600px perspective so the tilt separates the two planes.

**The Flat-Page Rule.** No page surface casts a shadow. If a new element needs to read as raised, change its ground or give it a hairline. Shadows exist in this build only inside a drawing of a physical object.

## Shapes

Zero radius, everywhere, on purpose: `border-radius: 0` is asserted explicitly on buttons and on the focus ring so no UA or utility default can round them. Every rectangle in the system — plan, plate, slot, dock, flag, bar, icon box — is a true rectangle.

Borders are hairlines. 1px is the system's stroke; 2px marks a lead plan, a quote bar, and the anchor table's total row; 3px is the phase-coloured top border on the "how it works" steps; the hero phase stripe is 8px and the worksheet stripe 9px, both full-bleed bars rather than borders. Placeholder slots take a 1px *dashed* `line-strong` border — the honest-placeholder shape, and the only dashed stroke in the system.

Hairline grids are built by gap, not by border: `.comments` and `.says` are grids with `gap: 1px` over a `line` background, so the separators are the grid itself. Photography is clipped to hard aspect ratios rather than masked to shapes — 16/9 for wide plates, 4/5 for portraits, 3/4 for the standstill, 9/16 for the phone.

**The Straight-Corner Rule.** Nothing in this system is rounded. Not buttons, not inputs, not images, not the focus ring, not the dock. A radius anywhere is a defect.

## Components

Character across the set: printed, not rendered. Everything looks like it was set on paper and could be photocopied.

### Buttons
- **Shape:** true rectangle (`border-radius: 0`), 1px transparent border so ghost and primary share a box, minimum height 56px, padding `1rem 2.1rem`.
- **Primary:** action-terracotta fill, paper text. Hover swaps to action-deep and lifts 2px (`translateY(-2px)`); active returns to 0. Transitions run 0.28s on `--ease-out-expo` (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Ghost:** transparent with a `line-strong` hairline and ink text; hover darkens the border to ink and fills with paper-alt. On dark bands the border is `ink-edge` and hover fills `ink-raise`.
- **Focus:** the global ring — 2px solid action, 3px offset, square. No component overrides it.
- **Reduced motion:** transition and transform are removed; colour change alone carries the state.

### Cards / Containers
There are no cards in the decorative sense. The two boxed surfaces are the plan and the tier: paper ground, 1px `line-strong` border, `clamp(1.5rem, 3vw, 2.25rem)` padding, square corners, no shadow. The lead variant swaps to a 2px action border and carries a flag flush into its top-right corner — a square action-filled tab at 0.74rem, no radius, no offset. Everything else the page calls a "block" is a bordered region of the page: hairline top, content, hairline bottom.

### Placeholder Slot
The honest placeholder. Paper-alt ground, 1px dashed `line-strong`, ink-soft text, sized to the real content it awaits (comment cells at 132px min-height, testimonial cells at 190px, author photo at 4/5). It is a shipped component, not scaffolding: missing proof is shown as missing.

### Tables
Inherited hairline-table grammar, no zebra and no cell fills: label left in 400 ink-soft, value right in 600 tabular, a 1px `line` rule under every row. On dark bands the rule becomes `ink-line` and the total row lifts onto a 2px `fase-4-soft` top border at 1.2rem/700.

### Icons
An authored 12-symbol inline SVG sprite in the document head (`#i-sheet`, `#i-play`, `#i-ruler`, `#i-house`, `#i-spark`, `#i-basket`, `#i-check`, `#i-cross`, `#i-shield`, `#i-lock`, `#i-mail`, `#i-quote`), all on a 24×24 box at a single 1.5 stroke weight, `fill: none`, round caps and joins, `stroke: currentColor`. Rendered at 18–22px. Icons inherit their colour from context: `fase-1` for affirmative marks, `ink-mute` for negative ones, `line-strong` for decorative quote marks, `--phase` for tier bullets. The sprite exists because the source copy's emoji (📋🎥📐🏠⚡🎁) are not icons and are banned from the page.

### Navigation — the Phase Rail
The page's only navigation is orientation, not links. Above 1024px a fixed 96px rail on the left edge, paper ground with a single `line` right border, holding the wordmark, four phase markers (a 9×46px bar plus a vertically-set uppercase name and its week range), and the current week as a large Fraunces numeral over `/12`. Inactive phases sit at 0.32 opacity and fade to 1 over 0.5s when live; the live bar takes its phase colour. Below 1024px this becomes `.rail-m`: a fixed top bar with a 3px phase-coloured progress line scaled by `--prog`, the phase name, and the week counter — the mobile-native form of the same information, not a shrunken rail.

### Purchase Dock
A fixed bottom bar, paper ground, 1px `line-strong` top border, safe-area padded. It carries the plan label, the price in Fraunces at 1.6rem, and a primary button. It is hidden by default (`translateY(102%)`) and rises only after the first price section has been fully passed, and hides again while the final price section is on screen because that section already has its own buttons. Under 560px the label is dropped and the button takes the full remaining width. When hidden it is also `inert` and `aria-hidden` — it is never a focus trap offscreen.

### Photographic Plate
Every image is a `.plate`: an overflow-hidden rectangle on a paper-alt ground with the image at `object-fit: cover`. Plates marked `data-mask` animate: the plate wipes open via `clip-path: inset(0% 0% 100% 0%)` → `inset(0)` over 1.25s on expo-out at 86% viewport, while the image inside runs a scrubbed parallax from `yPercent: -5` to `+5`.

**The Cover-The-Travel Rule.** A parallaxed plate image is set at `scale: 1.16` against a ±5% travel. The scale must always exceed the total travel, or the plate's own ground shows at the edges at the ends of the scrub. That was a real shipped bug; the 1.16 is the fix, not a taste.

### Signature Component — the Worksheet Mockup
The hero's argument: the product, drawn in live HTML, not screenshotted. A notebook (dark `#221D17` bezel, 12px padding, drawn base with a bevel and a hinge mark) displays an actual reproduction of the product's Semana 1 page — 9px sage stripe, uppercase phase/pillar meta, "Semana 1" in large sage Fraunces, a 16/9 photo plate, an uppercase goal label, and a four-row parameter table. A phone overlaps the lower left at `translateZ(58px)` inside a 1600px perspective, showing an execution video still with a square play badge and a caption. On fine pointers the whole assembly tilts ±7° / ±9° toward the cursor on a 0.7s power3-out follow, and drifts from +4° to −4° as the hero scrolls away. Under 620px the worksheet's second meta label is hidden because it does not fit and was being clipped.

### Motion
One authored idea, applied consistently: **things arrive by being uncovered**. Hero headline lines rise from `yPercent: 108` inside `overflow: hidden` masks at a 0.085s stagger; plates wipe open by clip-path; content blocks fade up 18–20px; phase bars grow from `scaleX: 0`; the anchor total counts to R$494. Easing is `expo.out` in JS and `cubic-bezier(0.16, 1, 0.3, 1)` in CSS — one curve for the whole system.

**The Function-Survives-Motion Rule.** `prefers-reduced-motion` takes a full static fallback, not a disabled page. All reveals are set to their final state, and a scroll listener still drives the rail's phase and week, the mobile progress bar, and the dock's appear/hide logic. Orientation and action are function, not decoration; only the animation is optional. The same holds without JS at all — the page ships readable and complete.

## Do's and Don'ts

### Do:
- **Do** give every new section a `data-phase` attribute and let it inherit its ground, rule and bar colour from `--phase` / `--phase-soft`.
- **Do** use `action` (#B84A34) for CTA fills and for any accent text at body size; reserve `accent` (#C2553F) for large display.
- **Do** separate with a 1px `line` rule, or by changing the ground — those are the only two separators in the system.
- **Do** keep every corner square, including on images, badges, flags and the focus ring.
- **Do** set labels in uppercase Libre Franklin 600 at 0.78rem / 0.16em tracking, attached to an object.
- **Do** add `.num` to any figure a reader might compare.
- **Do** draw new icons into the inline sprite at 24×24 on a 1.5 stroke, `fill: none`, `stroke: currentColor`.
- **Do** write phase-field overrides with the compound selector (`.band.on-alt`, not `.on-alt`) — sections.css loses the cascade to app.css otherwise.
- **Do** keep a parallaxed image's scale larger than its total travel (currently 1.16 against ±5%).
- **Do** ship missing proof as a marked, correctly-sized placeholder slot.

### Don't:
- **Don't** set text in a phase colour. The one exception is the large sage "Semana 1" inside the hero mockup, which reproduces the real product page.
- **Don't** merge the two terracottas or use `accent` on a button.
- **Don't** put a shadow on a page surface. The two shadows in the build belong to drawn physical objects in the hero mockup and do not extend to UI.
- **Don't** round anything.
- **Don't** add a decorative gradient. The one gradient in the build is the bevel of the drawn notebook base.
- **Don't** use emoji as icons — the sprite exists precisely to replace the copy's 📋🎥📐🏠⚡🎁.
- **Don't** introduce pills, badges, countdowns, or equal-weight stacked boxes; the page refuses the default info-product grammar.
- **Don't** let the dock appear before the first price section has been passed, or leave it focusable while hidden.
- **Don't** hide orientation or action behind `prefers-reduced-motion`; reduce movement, never function.
- **Don't** put a kicker or eyebrow above a section headline.
