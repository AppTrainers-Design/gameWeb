---
version: 1
slug: "listing-html"
primary_target: "listing.html"
related_targets: ["index.html"]
---

## Scope

`listing.html?id=<slug>` is one listing's own page. Every studio, publisher, indie developer, and university card in the directory opens here, and so does every house on the hill. Visitor mode: **Operate**. The visitor confirms who the listing is, then leaves for its website or moves on to a neighbour.

## Audience, job, content

- Audience: the same as the directory's.
- Job: identify the listing and see its type, founding year, or programme. Then open its website, or browse listings near it.
- Content: only the listing's own fields in `js/data.js`, plus sentences built from them. There are no descriptions, social links, or invented facts; the user chose "source facts only" on 2026-09-27.
- Constraints: static HTML/CSS/JS, English only. All 31 listings have a page. In the directory, cards and hill houses open it in a new tab (the user's answer, 2026-09-27). On the page, links to other listings stay in that tab. The breadcrumb's category link returns to the lit card in the directory. The reference's About, Games, company-size and address fields have no source data: About is built from the listing's own facts, and Games, company size and street address are left out.

## Direction contract

THESIS: A company profile in the gamecompanies.com pattern (the user's reference, 2026-09-27), built in Amman Hillside. There is no hero: the user asked for it to be removed from internal pages on 2026-09-27. The page refuses any sections its data cannot fill.

OWN-WORLD: Inherited Amman Hillside: the sky is only the top bar and the footer, with stone and paper panels between them. Sign blue for ways to go; Readex Pro; no taxi yellow on this page.

STORY: The visitor opens a listing from the directory in a new tab, reads who it is and its facts, then opens its website or moves to a neighbour in the same tab.

FIRST VIEWPORT: The sky top bar. On stone below it: the breadcrumb, then the 116px logo in its paper frame, the name at up to 46px with its "type · Founded year · Jordan" line, and the sign-blue "Visit website" pill at the right. Below: About (studios only) and "More …" on the left, the "Information" panel on the right.

FORM: An extension inside the established world (seed e28f5c87). The structure follows the user's reference: breadcrumb, logo, name, About, and a right information column. No signature motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- None of this page's own. The directory brief's open question about the registration form still applies.
