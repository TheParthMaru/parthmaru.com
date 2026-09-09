# Decision Log

This file records important product/design/architecture decisions so future AI sessions do not repeatedly reopen settled questions without a reason.

## D001 — MVP before platform complexity

**Status:** Accepted  
**Date:** 2026-09-07

Build a working portfolio/publishing MVP before considering servers, APIs, search, pagination, databases, or other platform infrastructure.

Reason: there is not yet enough published content or audience pressure to justify building infrastructure for hypothetical scale.

## D002 — Astro for V1

**Status:** Accepted  
**Date:** 2026-09-07

Use Astro + TypeScript + Markdown for the initial site. Use MDX only if a specific piece of content genuinely requires embedded interactive/component functionality.

Reason: the current product is primarily a static portfolio and technical publication. Astro matches the current workload while leaving room to add dynamic functionality or an external backend later. Plain Markdown is enough for V1 articles and project pages.

## D003 — Navbar instead of sidebar

**Status:** Accepted

The earlier sidebar concept made the main content feel cramped. Use a horizontal navbar to preserve a spacious editorial layout.

## D004 — `PM` mark in navbar; full name in hero

**Status:** Accepted

Navbar:

```text
PM     Home  Projects  Writing  About
```

Do not repeat `Parth Maru` beside `PM`. The hero contains the prominent full name. A typewriter animation is not required.

The navbar should initially be non-sticky. Revisit stickiness later only if it clearly improves navigation without adding visual noise.

## D005 — Social links in footer

**Status:** Accepted

The MVP footer contains only copyright, GitHub, LinkedIn, X, and Email.

Do not add Privacy, RSS, Contact, or other footer links in V1. Social links belong here rather than the primary navbar. RSS may be reconsidered once Writing is operational; it is not part of the MVP footer.

## D006 — No top-level Notes section for MVP

**Status:** Accepted

Parth already maintains extensive Markdown notes on GitHub. The website should contain curated writing rather than duplicating raw notes.

A subtle text link to technical notes on GitHub is allowed near Writing or another secondary location. Do not represent this as a homepage card.

## D007 — Writing is mandatory

**Status:** Accepted

Technical writing is a core purpose of the site and receives a first-class top-level section.

## D008 — Projects are mandatory

**Status:** Accepted

The homepage and top-level navigation must showcase meaningful engineering projects. Projects should have useful detail pages, not only gallery cards.

## D009 — BugTracker is the initial featured project

**Status:** Accepted

BugTracker is the Featured Project. It must not also appear in Recent / Selected Projects.

## D010 — Build logs live with projects initially

**Status:** Accepted

Do not create a top-level Build Log navigation item for the MVP. Use a Development Journal / Build Log within significant project pages such as BugTracker.

Only show Build Log / Development Journal links when real entries exist. Do not render empty journal CTAs.

## D011 — Work-first homepage

**Status:** Accepted

No large profile photo on the homepage. Whether to use a professional photograph on About will be decided when that page is built.

## D012 — Approved visual direction

**Status:** Accepted

Documentation is product law. `mockups/homepage-final.png` is visual direction, not a license to copy image-generation artifacts or unconfirmed copy.

Use the latest approved dark editorial mockup as the primary visual direction.

Characteristics:

- deep charcoal/navy background
- spacious layout
- Fira Code as the global UI typeface (self-hosted)
- hierarchy via size, weight, spacing, case, and colour — not mixed families
- muted blue/green/purple/orange accents
- thin dividers
- atmospheric imagery
- restrained cards
- calm, technical mood

Reference: `mockups/homepage-final.png`

Exact fonts and colour values may be tuned during browser implementation to match the approved mockup.

## D013 — Canonical closing philosophy

**Status:** Accepted  
**Date:** 2026-09-07

The homepage closing line is:

> Build. Learn. Document. Improve.

Do not substitute the mockup quote, vertical slogans, or other generated copy.

## D014 — Mockup copy is illustrative

**Status:** Accepted  
**Date:** 2026-09-07

Copy, article titles, project rows, dates, technologies, and decorative text in the mockup are illustrative unless they are confirmed in the docs or provided by Parth.

Do not invent article titles, projects, dates, technologies, social URLs, or achievements. Do not implement decorative vertical slogans or other image-generation artifacts literally. Use placeholders only when clearly marked as placeholders.

## D015 — Currently is local config; Writing slot is in progress

**Status:** Accepted  
**Date:** 2026-09-07

Currently values come from a simple local config/data file. No database or admin panel.

`Currently → Writing` represents work in progress. `Recent Writing` contains published articles only.

## D016 — Dark-only V1

**Status:** Accepted  
**Date:** 2026-09-07

V1 is dark-only. Do not implement a theme switcher.

## D017 — No required article thumbnails or reading time in V1

**Status:** Accepted  
**Date:** 2026-09-07

Homepage and writing lists do not require article thumbnails or reading time for V1.

Project screenshots are optional and may be shown only when a real asset exists.

## D018 — Content collections before homepage content wiring

**Status:** Accepted  
**Date:** 2026-09-07

A minimal Astro content-collection setup (project and writing schemas) must exist before the homepage Projects and Writing sections are wired to content.

Currently remains a separate local config file, not a content collection.

## D019 — Hosting decided at deployment

**Status:** Accepted  
**Date:** 2026-09-07

The static host will be chosen during the deployment phase. Do not introduce hosting-specific infrastructure earlier.

## D020 — Fira Code as the UI typeface

**Status:** Accepted  
**Date:** 2026-09-07

The homepage and global UI use self-hosted Fira Code as the single primary font, including navbar, hero name, role, body, buttons, labels, section headings, and metadata.

Ship the font with the site (Fontsource). Do not depend on Fira Code being installed on the visitor’s computer.

Do not use a decorative serif for `Parth Maru` or `PM`. Keep the name visually dominant through size and weight (600), not a second typeface. Do not make all text bold.

Long-form article typography may be reconsidered later.
