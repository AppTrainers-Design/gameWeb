---
name: Jordan Game Companies
description: Jordan's game industry drawn as Amman, a limestone hill under open sky with a street-level directory below.
colors:
  sky: "#2f6be5"
  sign-blue: "#1b4ba8"
  sign-blue-hover: "#2357bf"
  taxi-yellow: "#ffc61a"
  ink: "#16181d"
  ink-muted: "#414a5c"
  ink-faint: "#5b6475"
  stone: "#f7f8fa"
  paper: "#ffffff"
  hairline: "#dde3ec"
  hairline-strong: "#c5cfdd"
  chip-wash: "#edf1f7"
  limestone-shade: "#e8edf5"
  limestone-deep: "#c9d3e4"
  terrace-top: "#dfe5ee"
  terrace-side: "#c6d0de"
  terrace-deep: "#a8b5c9"
  window-dark: "#2a3242"
typography:
  display:
    fontFamily: "Readex Pro, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(42px, 4.7vw, 70px)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.028em"
  lede:
    fontFamily: "Readex Pro, system-ui, sans-serif"
    fontSize: "clamp(16px, 1.25vw, 18px)"
    fontWeight: 400
    lineHeight: 1.55
  listing-name:
    fontFamily: "Readex Pro, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(30px, 3.2vw, 46px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.022em"
  section:
    fontFamily: "Readex Pro, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Readex Pro, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.5
  title:
    fontFamily: "Readex Pro, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Readex Pro, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Readex Pro, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1
  meta:
    fontFamily: "Readex Pro, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.45
  chip:
    fontFamily: "Readex Pro, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1
    fontFeature: "tnum"
rounded:
  plate-inset: "4px"
  plate: "6px"
  field: "8px"
  card: "10px"
  mark: "11px"
  logo-hero: "18px"
  pill: "999px"
spacing:
  hairgap: "4px"
  plate-gap: "10px"
  sm: "16px"
  md: "32px"
  lg: "40px"
  street-end: "88px"
  gutter: "clamp(16px, 4.4vw, 64px)"
components:
  sign-plate:
    backgroundColor: "{colors.sign-blue}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "11px 16px"
  sign-plate-hover:
    backgroundColor: "{colors.sign-blue-hover}"
  tab:
    backgroundColor: "{colors.sign-blue}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "18px 20px"
  tab-active:
    backgroundColor: "{colors.taxi-yellow}"
    textColor: "{colors.ink}"
  cta-pill:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.sign-blue}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  button-visit:
    backgroundColor: "{colors.sign-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "15px 22px"
  button-visit-hover:
    backgroundColor: "{colors.sign-blue-hover}"
  segment:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.field}"
    padding: "12px 10px"
  segment-hover:
    backgroundColor: "{colors.chip-wash}"
  segment-active:
    backgroundColor: "{colors.taxi-yellow}"
    textColor: "{colors.ink}"
  search-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "11px 44px 11px 40px"
  listing-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "14px 28px 14px 16px"
  chip:
    backgroundColor: "{colors.chip-wash}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "5px 9px"
  chip-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink-faint}"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "5px 9px"
  button-quiet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  button-quiet-hover:
    backgroundColor: "{colors.chip-wash}"
  tooltip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.plate}"
    padding: "8px 11px"
---

# Design System: Jordan Game Companies

## Overview

**Creative North Star: "Amman Hillside"**

The industry is drawn as the city. Above, an open field of sky blue holds the title, the figures, and an isometric limestone hill where every studio is a house standing on the terrace of its founding year, its logo on a white rooftop sign and its year on a blue enamel street-name plate. Below, the page drops to street level: a pale stone ground where the directory lives as white cards. The footer returns to the sky, with the city's skyline on the horizon. Sections are stacked blocks of sky and stone; there are no divider rules between them.

Navigation is signage. Every navigational control is a blue enamel street plate with an inset white rule, and the one item that is currently active turns taxi yellow. That is the whole accent vocabulary: blue says "this is a way to go", yellow says "you are here". The type is one family, Readex Pro, and hierarchy comes from size and weight alone.

The density is calm and operational: 31 listings across three tabs, readable at a glance, each one click from its own page on the site. That page is a company profile with no hero: the sky is only its top bar and its footer, and everything between them (breadcrumb, framed logo tile, name, facts, and more of the category) stands on stone. The hill is the only illustration, it appears only in the directory, and it is one fixed drawing, approved by the user as it stands; it scales with its container and never reflows into a different composition.

**Key Characteristics:**
- Two grounds: sky (#2f6be5) above and in the footer, stone (#f7f8fa) at street level between them.
- Blue enamel sign plates for every navigational control; taxi yellow only on the active item.
- One typeface (Readex Pro, variable 160–700), with hierarchy carried by size and weight.
- White paper cards with hairline borders and a soft, low, downward shadow.
- An isometric limestone hill, built year by year on entrance, as the signature drawing.

## Colors

A two-ground palette, sky blue over limestone and stone, with sign blue for wayfinding and a single taxi-yellow accent for the active state.

### Primary
- **Amman Sky** (sky): the header and footer field and the `theme-color`. Everything on it is white. Never used as a text or button color on the stone ground.

### Secondary
- **Enamel Sign Blue** (sign-blue): the street-sign plates (top nav, tabs, the hill's year plates), the inked brand color of the "Add your studio" pill text, the filled "Visit website" pill on stone, text links on the stone ground ("Register on 962Games", the information panel's values), the focus ring on stone, and the search caret. Hover lightens it to **Sign Blue, Lit** (sign-blue-hover).

### Tertiary
- **Taxi Yellow** (taxi-yellow): the active tab, the active type-filter segment, and the ring that closes in on a card when the visitor arrives at it from a listing page or a deep link. It never appears on a listing page. Text on it is always ink. It never appears on hover, on decoration, or on anything inactive.

### Neutral
- **Ink** (ink): primary text on stone and paper; the hill tooltip background; the water tanks and sign posts in the hill.
- **Slate Ink** (ink-muted): secondary text in notes, empty states, inactive segments, and chips; the breadcrumb's links and the listing page's profile line.
- **Street Grey** (ink-faint): card meta lines, placeholders, icons, outlined chips, the result count, the breadcrumb's text and chevrons, and the labels and source line of the listing page's information panel.
- **Stone** (stone): the street-level page ground.
- **Paper** (paper): cards, fields, notes, the information panel, the frame around the listing page's logo tile, and the lit face of every limestone house; also all text and sign rules on the sky.
- **Hairline** (hairline): 1px borders on cards, fields, notes, segments, and the divider between a card's logo and its body, and the rules between the information panel's rows.
- **Hairline, Pressed** (hairline-strong): field border on hover and the quiet button's border.
- **Chip Wash** (chip-wash): filled chips and the hover wash on segments, clear buttons, and quiet buttons.

### Hill palette (limestone and terraces)
The hill is lit from the upper left. Houses use paper for the lit top, **Limestone Shade** (limestone-shade) for the front wall, and **Limestone Deep** (limestone-deep) for the side wall. Terraces use **Terrace Top** (terrace-top), **Terrace Side** (terrace-side), and **Terrace Deep** (terrace-deep), with stone-course lines (#b9c4d4 front, #9aa8be side). Windows are **Window Dark** (window-dark); doors sit on the shaded wall in #8795ad. The footer skyline repeats the same isometric city in tints of the sky (#4a76dc to #a4c0f6), so it reads as distance, not as a second drawing.

### Named Rules
**The Taxi Rule.** Taxi yellow marks the one active item in a group and nothing else. If an element is not the current tab, the current segment, or the card you just arrived at, it is not yellow.

**The Two Grounds Rule.** A section is either sky or stone. Sections meet at a straight edge with no divider rule. On the sky, everything is white. On stone, surfaces are paper.

## Typography

**Display Font:** Readex Pro (with system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Readex Pro, same stack
**Label Font:** Readex Pro, same stack

**Character:** A single rounded, geometric grotesque with an open, sign-painter clarity. Readex Pro was drawn for Arabic and Latin, which suits a city whose street signs carry both. It is embedded as a variable font (weights 160–700) in `css/fonts.css`.

### Hierarchy
- **Display** (600, clamp(42px, 4.7vw, 70px), line-height 1, -0.028em): the directory's title only, on the sky, max about 8.6em wide.
- **Listing name** (600, clamp(30px, 3.2vw, 46px), line-height 1.08, -0.022em): the listing page's title, on stone beside the framed logo tile, max 18em wide. Under it, the profile line ("Studio · Founded 2003 · Jordan") is 16px ink-muted with tabular numerals (15px on mobile).
- **Section** (600, 22px, 20px on mobile, 1.25, -0.01em): headings on the stone ground of the listing page ("About", "More studios & publishers"). The About paragraph is 17px/1.65 ink-muted, max 62ch (16px on mobile).
- **Lede** (400, clamp(16px, 1.25vw, 18px), 1.55): the figures paragraph under the title. The figures themselves are 600 with tabular numerals.
- **Headline** (500, 18px): the empty-state title.
- **Title** (600, 16px): note and footer headings. Card names use the same size at 500 and 1.3 line-height. The brand name is 600 at 19px (16px on mobile).
- **Body** (400, 16px, 1.5): running text. Notes use 14px on ink-muted.
- **Label** (500, 15px, line-height 1): tabs (14px on mobile), sign plates (14px, 13px on mobile), the pills (600, 15px). The breadcrumb on stone is 14px/1.4, its current crumb 500 in ink.
- **Meta** (400, 13px, 1.45): card domains and programme lines, truncated to one line (two for programmes). The information panel's labels use the same 13px in ink-faint; its values are 15px/500.
- **Chip** (500, 12px, line-height 1): type and year chips, with tabular numerals.

Weight 300 is the whisper weight. It is used for tab counts, the brand subline, the tooltip's year, and footer links, never for anything the visitor has to act on first.

### Named Rules
**The Size Alone Rule.** Hierarchy is carried by size and weight within one family. Names get no frames, underlines, caps, or colored labels to make them important.

**The Tabular Figures Rule.** Every number that counts or dates (figures, tab counts, years, the result count) uses `font-variant-numeric: tabular-nums`.

## Layout

The page is three stacked blocks: sky (top bar and hero), street (the directory), and sky again (footer). The horizontal gutter is fluid (gutter, clamp(16px, 4.4vw, 64px)) and applies to all three blocks.

- **Top bar:** a three-column grid (brand left, sign nav centred, "Add your studio" pill right). At 720px and below, the signs drop to a centred second row.
- **Hero:** two columns, copy and hill (1fr : 1.08fr), minimum height min(520px, 100svh − 150px). The hill is bottom-aligned so its foot is cropped by the street edge; it caps at 640px wide. At 1000px and below, the hero becomes one column with the hill full-width under the copy.
- **Tabs straddle the edge:** the tab row is pulled up (-27px, -24px on mobile) so the plates sit half on the sky and half on the street. This overlap is the join between the two grounds.
- **Board:** a 232px sticky filter column and a results column (column gap 32px, 40px below the tabs). Cards run three across, two below 1240px, and one below 720px, with 16px gaps (12px on mobile). At 1000px and below, the filters become a wrapping row above the results, and the "Missing from the list?" note moves below them.
- **Listing page:** no hero. The sky is only the top bar (20px bottom padding, 16px on mobile) and the footer; the body is a flex column, so a short page still ends on the footer. The street opens 28px below the sky (20px on mobile) with the breadcrumb, then the profile head 28px below it (20px on mobile): a centre-aligned three-column grid of framed logo tile, name block, and the Visit pill on the right (28px column gap, 16px on mobile). The sheet below is a main column and a 320px sticky side column (56px gap, 48px below the profile): About, then "More <category>" with cards two across; the side holds the information panel and the "Missing from the list?" note. At 1000px and below the Visit pill wraps under the logo and name, and the sheet stacks About, side, More. At 720px the breadcrumb collapses to one back crumb, the Visit pill goes full width, and the cards go to one column.
- **Rhythm:** 10px between plates, 16px between cards and filter blocks, 32px between columns, 40px between the tabs and the board, 88px at the end of the street, and 64px of footer top padding over a 92px skyline strip.

### Named Rules
**The One Drawing Rule.** The hill is a single composition at every width. It only scales. On small screens, the only change is that the year plates grow (up to 2x) and thin out where they would collide. The newest year always keeps its plate. Never re-lay out, crop into a different shape, or swap the hill for a mobile variant.

## Elevation & Depth

Depth comes from the isometric drawing and from soft, downward cast shadows under objects that stand on a ground. Shadows are low and negatively spread so they read as contact shadows, never as glows or hard offsets. On the sky, shadows are tinted navy (rgba(8, 18, 48, …)). On stone, they are tinted ink (rgba(22, 24, 29, …)).

### Shadow Vocabulary
- **Card rest** (`box-shadow: 0 12px 24px -16px rgba(22, 24, 29, .38)`): listing cards, the information panel, the listing page's framed logo tile, and the Visit pill at rest on stone.
- **Card lift** (`box-shadow: 0 20px 32px -18px rgba(22, 24, 29, .45)`): a linked card on hover, together with a 2px rise; the Visit pill on hover, with a 1px rise.
- **Sky cast** (`box-shadow: 0 12px 20px -12px rgba(8, 18, 48, .7)`): tabs, sign plates, the "Add your studio" pill, the mark, and the tooltip, which are objects standing on or over the sky.

### Named Rules
**The Contact Shadow Rule.** Every shadow falls straight down, with its spread negative enough that it stays inside the object's footprint. No zero-blur offsets and no colored glows.

## Shapes

Corners are softly rounded and scale with object size. Sign plates are 6px, with an inner white rule inset 3–4px at 4px radius. Fields, segments, and logo tiles are 8px. Cards and notes are 10px. The mark tile is 11px. The listing page's logo is the one large tile: 116px at a 12px radius with a hairline ring, inside a 6px paper frame with a 1px hairline border at 18px (80px, 10px, 5px and 15px on mobile). Anything that is an action rather than a place is a full pill (999px): the "Add your studio" CTA, the "Visit website" pill, chips, and the quiet button. In cards, logos always sit on the same 76px tile with an 8px radius and a 1px hairline ring, whatever their native shape. The breadcrumb's chevrons are drawn in CSS (two 1.5px borders on a 6px square, rotated), not glyphs. The hill's rooftop signs are white squares with a 3px radius and an ink stroke.

The brand mark is a faceted seven-point star in sky and sign blue on a white rounded square.

## Components

### Sign plates (top nav)
Blue enamel street signs. Sign blue, white 500 label, 6px radius, padding 11px 16px, sky-cast shadow, and a 1.5px inset white rule (rgba(255,255,255,.92)) at 3px. Hover lightens to sign-blue-hover. Active presses down 1px.

### Tabs
The same sign plate, larger (padding 18px 20px, rule inset 4px), with the count in weight 300. The selected tab turns taxi yellow with ink text, and its inset rule turns ink (rgba(22,24,29,.85)). Arrow keys, Home, End, and keys 1–3 switch tabs, and each tab has a hash (#studios, #indies, #universities). On mobile, labels shorten ("Studios", "Indies").

### "Add your studio" pill
A white pill on the sky with sign-blue 600 text, padding 14px 22px, an external-link icon, and a sky-cast shadow. Hover rises 1px and the shadow deepens. In the directory it is present in every view: top bar, the side or after note, the empty state, and the footer. On a listing page it is in the top bar, and the side column's "Missing from the list?" note carries the register link.

### "Visit website" pill
The listing page's one way out to the listing's own site: an action, so a pill; sign blue, because it is a way to go. Sign blue, white 600 15px, padding 15px 22px, a 14px external-link icon, card-rest shadow on stone. Hover lightens to sign-blue-hover, rises 1px, and takes card lift. Full width on mobile. Universities read "View the programme", store-only listings "Open on Google Play"; a listing with no URL has no pill. The not-found page uses the same pill, with a forward arrow, for "Browse the directory".

### Breadcrumb
The first row of the street on a listing page, on stone: 14px ink-faint text with CSS-drawn chevrons at 70% opacity between crumbs ("Jordanian game industry › Studios & publishers › Maysalward"). Links are ink-muted with no underline; on hover they turn sign blue and underline (3px offset). The current crumb is ink at 500. On phones it collapses to one back crumb with a left chevron, naming the category. The category crumb links to `index.html#<tab>/<slug>`, so the card lights on return.

### Type filter (segmented control)
A paper strip with a hairline border and 8px radius, split by hairlines. Inactive segments are ink-muted 14px. Hover washes with chip-wash. The checked segment is taxi yellow with ink 500 text.

### Search field
Paper, hairline border, 8px radius, a leading search icon in ink-faint, and a trailing "/" key hint (12px, stone fill, hairline, 5px radius) that hides once there is text. Hover darkens the border to hairline-strong. Focus replaces the border with a 2px sign-blue outline. The clear button is a 32px, 6px-radius square that washes chip-wash on hover.

### Listing cards
Paper, 1px hairline, 10px radius, card-rest shadow, minimum height 106px. A 96px logo column (hairline divider on its right) holds the 76px logo tile. The body holds the name (500, 16px), a meta line (13px, ink-faint), and chips. Every card, "coming soon" included, opens that listing's page on this site (`listing.html?id=<slug>`). In the directory, cards open it in a new tab (with a visually hidden "opens in a new tab" note), so the visitor's place in the list stays put; on a listing page, cards for other listings open in the same tab. Cards rise 2px to card-lift on hover and reveal a right arrow at the top right that steps 2px forward and turns sign blue. External-link icons are only for links that leave the site. A card reached from a listing page's breadcrumb or "Listed in" link, or from a deep link, gets a 3px taxi-yellow outline that closes in from 16px to 3px offset over .7s.

### Chips
Pills of 12px, weight 500, padding 5px 9px. Type chips are filled chip-wash on ink-muted. Year and "soon" chips are outlined with an inset hairline on ink-faint, and the year chip carries a small house icon.

### Information panel
The listing page's facts, on paper with a hairline border, 10px radius, card-rest shadow, padding 18px 20px 16px, and a 16px/600 "Information" heading. Rows are a definition list (104px label column, 12px gap, 11px vertical padding) split by hairlines: Website, Type, Founded, Location, Listed in; universities show Programme and Programme page instead of Website. Links are sign blue and underlined; long domains break at dots and hyphens. A missing site reads "Coming soon" or "Not listed" at 400 in ink-faint. A "Listing from 962Games" line closes it above a final hairline. It sits in a sticky side column (24px from the top) above the "Missing from the list?" note.

### Notes and empty state
Paper panels with a hairline border and 10px radius. They have a 16px/600 heading, 14px ink-muted text, and a sign-blue underlined link. The empty state adds a quiet pill button ("Clear search") and the register link.

### Tooltip
Ink, white 13px/500 text with the year at 300, 6px radius, padding 8px 11px, and a sky-cast shadow. It appears above a house only while it is hovered or focused, fading in over .12s, and is kept inside the screen edge. Nothing rests on the hill.

### The Hill (signature)
An isometric SVG drawn in `js/shared.js` (unit 31px, 30° projection). There is one terrace per studio, stepping up the street by founding year, with a longer run where years pass without a new studio. Terraces rise from street level (z = 0), so their walls stay short and the hill's foot runs as one clean diagonal against the sky, as in the approved mockup (`.impeccable/mocks/decision/assigned.png`); never sink them below the street. A few empty years lengthen the terrace below them so the walls read as one slab; only an empty decade (2003 to 2013) opens a gap. Stone courses sit on the front risers only. Each terrace carries a limestone house with dark windows, a door on the shaded wall, a black water tank, and a white rooftop sign on a post that holds the studio's logo. Blue street-name plates (sign blue, inset white rule, 500 numerals) mark the first house of each year. Every house opens that studio's page in a new tab, so the visitor's place in the directory stays put. Hover or focus raises it 6px, focus draws a thick white frame around its sign, and arrow keys walk the street. In the directory, houses drop in one by one on entrance (−30px to 0, 640ms, 90ms stagger, ease-out-expo), and each year's plate fades in 260ms after its house. There is no resting label. None of the motion runs under reduced motion. The drawing lives in `js/shared.js` and is drawn only in the directory; listing pages do not carry it.

### Listing page
`listing.html?id=<slug>` renders one listing from `js/data.js` as a company profile. Every sentence and row on it is built from that listing's own fields; nothing is written per company, and rows the source has no data for (games, company size, street address) are left out rather than invented.
- **Sky:** the same top bar, and nothing else; no hero, no hill.
- **Profile head (stone):** the breadcrumb, then the framed logo tile, the name, the profile line ("type · Founded year · Jordan", without a year for indies and universities), and the "Visit website" pill on the right.
- **Sheet (stone):** About appears only on studio pages and carries one sentence on where the studio stands among the directory's studios (which studios share its year, with links, or that it is the oldest, the newest, or the only one founded that year). "More <category>" has an "All N <category>" link and six listing cards two across: for studios, the six nearest in founding year, shown in founding order; for the rest, the next six names in the directory's order. The side column holds the information panel and the "Missing from the list?" note.
- **Unknown slug:** "We couldn't find that listing" on stone under the top bar, with a line naming the slug and a "Browse the directory" pill; no sheet.

### Footer skyline
The footer is sky with a repeating isometric skyline strip (1600 × 92px) in sky tints along its bottom edge. Footer links are white 15px/300 and underline on hover.

## Do's and Don'ts

### Do:
- **Do** make every navigational control a sign-blue plate with its inset white rule, and turn only the active one taxi yellow with ink text. The breadcrumb is the one text wayfinding row: on stone, ink-faint with ink-muted links, CSS-drawn chevrons.
- **Do** keep text on the sky white, including focus rings and selection (rgba(255,255,255,.32)). On stone, focus rings are 2px sign blue with a 3px offset.
- **Do** separate sections by switching ground (sky and stone) at a straight edge, and let the tab row straddle that edge.
- **Do** use hairlines (#dde3ec) inside components: card borders, the logo divider, and segment dividers.
- **Do** put every card logo on the same 76px, 8px-radius tile with a hairline ring. The listing page's 116px framed tile is the only larger one.
- **Do** use the out-expo easing (cubic-bezier(.16, 1, .3, 1)) for movement, keep hovers to 1–6px of rise, and cut all motion under prefers-reduced-motion.
- **Do** keep "Add your studio" reachable in every view, empty results included; on listing pages, in the top bar and the side column's "Missing from the list?" note.
- **Do** build every sentence and fact on a listing page from that listing's data, and omit a row rather than fill it with invented content.
- **Do** scale the hill as one drawing. Only its year plates may grow and thin out on small screens.

### Don't:
- **Don't** use taxi yellow for hover, emphasis, decoration, badges, or anything not currently active.
- **Don't** put divider rules or borders between page sections. The ground change is the divider.
- **Don't** add a second typeface, uppercase letter-spaced labels, or colored frames around names to build hierarchy.
- **Don't** use hard offset or zero-blur shadows, or glows. Shadows are soft, downward, and negatively spread.
- **Don't** redraw, recompose, or replace the hill at any breakpoint. The user approved its shape as it stands.
- **Don't** fill the sky with gradients or textures. It is one flat blue; the only thing on it besides content is the skyline tint strip in the footer.
