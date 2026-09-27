---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

## Scope

`index.html` is the whole site: "The Jordanian Game Industry" directory page. Visitor mode: **Operate**. The visitor scans the listings, filters them, and opens a listing's page on the site (`listing.html`, which has its own brief).

## Audience, job, content

- Audience: people exploring Jordan's game industry (inferred).
- Job: find Jordanian studios, publishers, indie developers, and university programmes, then open their pages.
- Content: 12 studios and publishers, 14 indie developers, and 5 universities, plus the three headline figures. Every card, the two "coming soon" indies included, opens its listing page (user request, 2026-09-27).
- Constraints: English only; static HTML/CSS/JS; no invented jobs, events, or cities; no GameCompanies branding. The layout idea (title and figures, tabs, filters, card grid) comes from gamecompanies.com. The user asked for a better design with the same idea.

## Direction contract

THESIS: Jordan's game industry as Amman: each studio a limestone house at its founding year; the directory is the city at street level.

OWN-WORLD: Sky #2F6BE5; limestone whites, cool shadow blues; ink #16181D; blue street-sign plates for navigation; taxi yellow #FFC61A marks only the active item; Readex Pro.

STORY: The visitor reads the industry's size, sees two decades on the hill, browses 31 listings in three tabs, and opens a site.

FIRST VIEWPORT: Sky field with the mark, sign nav, and "Add your studio" pill. Title and figures on the left; the isometric 2003–2024 hill with rooftop logo signs on the right; tabs straddle the sky edge.

FORM: Amman Hillside, candidate 3 of 7, seed e28f5c87. Signature: the hill builds by year; houses open their studio pages.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Raises carried from the round

- Industrial quote grammar: one accent, one meaning. Taxi yellow marks the active item and nothing else.
- Cloud quarry: sections stack like cut blocks separated by open sky, not divider rules.
- Festival lineup: type carries the hierarchy by size alone, with no decorative frames around names.
- Teletext: every tab and listing is addressable (hash links), and keys 1 to 3 switch the tabs.
- HyperCard: "Add your studio" is present in every view, empty results included.

## Critique reference

`.impeccable/mocks/decision/assigned.png` is the code-led decision comp (the HTML mockup of the first viewport).

## Unresolved

- The "Add your studio" links and every source credit were removed on 2026-09-27 at the user's request. The site now has no registration route; add one if studios should be able to apply.
