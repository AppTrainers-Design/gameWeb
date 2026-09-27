# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, chosen by the user. There is no build step, and `index.html` opens directly in a browser. The listings live in one data file so they can be swapped for a backend later.

## Users

People exploring Jordan's game industry: anyone looking for a Jordanian game studio, publisher, indie developer, or a university that teaches game development. (Inferred from the brief, which only asked for "Jordanian companies". The user has not confirmed a narrower audience.)

## Product Purpose

Jordan Game Companies is a directory of Jordan's game industry. Its layout follows gamecompanies.com's industry pages (reference: `/industries/european-game-industry`), limited to Jordan. Success means a visitor can scan every listing, switch between categories, open any listing's own page on the site in one click, and reach the listing's website from there.

## Positioning

A Jordan-only scope. Studios, publishers, indie developers, and game-development programmes are all on one page.

## Capabilities and Constraints

- Two pages, in English only: the directory (`index.html`) and one listing page (`listing.html?id=<slug>`) that every listing opens. The slug is the listing's logo name in `js/data.js`.
- On 2026-09-27 the user asked that listings open a page inside the site instead of the company's website. Cards and hill houses now open the listing page. The website link lives on that page.
- The page has working tabs for Studios & Publishers, Indie Developers, and Universities. The reference's Cities, Events, and Jobs views are left out because the source data has none of them.
- All listings live in `js/data.js`.
- GameCompanies.com's name, logo, artwork, and advertising slots are not reused.

## Brand Commitments

- Name: "Jordan Game Companies" (user's choice).
- The page idea comes from gamecompanies.com's industry pages: a title with headline figures, tabs, filters, and a grid of listing cards. On 2026-09-27 the user asked for "a better design than the original, with the same idea", so the original's look is not binding. They chose the "Amman Hillside" visual world in the direction round; DESIGN.md records it.

## Evidence on Hand

- The listings were captured on 2026-09-27 from a public directory the user supplied. On 2026-09-27 the user asked that every link and credit back to that source be removed, so the site names no source. There are:
  - 12 studios and publishers, each with a founding year and a type;
  - 14 indie developers, two of them marked "coming soon";
  - 5 universities, each with a programme name.
- Headline figures: 15+ gaming companies, 250+ indie developers, and 300+ published games. The source marked each figure with an asterisk but published no footnote.
- Logos are cropped into 240px tiles in `assets/logos/` and belong to their companies.
- The source has no cities, events, jobs, company descriptions, or game catalogue. None of these may be invented.
- Known source discrepancy: one indie studio was listed as "Rice Dice", but its logo and URL (risedice.github.io) say "Rise Dice". The page uses "Rise Dice".

## Product Principles

1. Every listing and figure traces back to the source. Companies, jobs, events, and claims are never invented.
2. The page stays faithful to the reference layout but keeps its own name and mark.
3. Each listing is one click from its own page on the site, and its website is one click from that page.
4. The data is kept separate from the page, so real updates never touch markup.
