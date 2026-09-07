# MVP Implementation Plan

The purpose of this plan is to keep AI-assisted development controlled and reviewable.

Do not ask the coding agent to build the entire website in one pass.

## Phase 0 — Scaffold

Goal: a clean Astro + TypeScript project that runs locally.

Tasks:

- initialize Astro
- confirm `npm run dev`
- add the docs/rules package
- place final visual reference at `mockups/homepage-final.png`
- commit baseline

Stop and review.

## Phase 1 — Foundation

Goal: encode the visual system before building content-heavy sections.

Tasks:

- CSS reset/base
- background/surface/text tokens
- accent tokens
- container widths
- spacing scale
- typography roles
- link/focus behavior
- basic responsive breakpoints
- base page layout
- dark-only visual system (no theme switcher)

Do not build the whole homepage yet. Stop and review in the browser.

Exact fonts and colour values may be tuned against the approved mockup during this review.

## Phase 2 — Navbar + Hero

Goal: reproduce the top of the approved mockup.

Tasks:

- navbar with `PM`
- Home / Projects / Writing / About
- hero eyebrow
- `Parth Maru` heading
- role line
- short intro
- primary project CTA
- latest-writing CTA
- atmospheric hero visual
- mobile behavior

Acceptance:

- no duplicated name in navbar
- navbar is non-sticky
- spacious on desktop
- clean single-column behavior on mobile
- no unnecessary animation
- no decorative vertical slogans or other mockup artifacts

Stop and review.

## Phase 3 — Currently

Goal: implement the four-part status section.

Tasks:

- Learning
- Building
- Exploring
- Writing
- local data/config source so values are easy to edit
- restrained semantic accents
- `Currently → Writing` is work in progress, not a published-article list

Do not build an admin system. Do not invent Current Writing titles. Stop and review.

## Phase 4 — Content collections

Goal: a minimal Astro content-collection setup exists before homepage Projects/Writing sections are wired to content.

Tasks:

- configure Astro content collections
- small project schema
- small writing schema
- Markdown as the default content format
- draft / missing-link handling that does not render empty UI
- add only real entries that exist; clearly mark any temporary placeholders

Do not implement full `/projects` or `/writing` pages yet. Do not use MDX unless a specific entry needs embedded components. Stop and review.

## Phase 5 — Homepage content

Goal: implement the main editorial content region, wired to the collections from Phase 4.

Tasks:

- selected/recent projects from the projects collection, excluding the featured project
- featured BugTracker treatment
- recent writing from published articles only
- optional project screenshot only if a real asset exists
- Build Log / Development Journal link only if real entries exist
- subtle text link to GitHub technical notes (not a card), only if a real URL is provided
- responsive stacking
- avoid duplicate BugTracker listing

Do not invent article titles, projects, dates, or technologies. Article reading time and thumbnails are not required. Stop and review.

## Phase 6 — Closing section + footer

Tasks:

- atmospheric closing panel
- canonical philosophy line: “Build. Learn. Document. Improve.”
- footer with copyright, GitHub, LinkedIn, X, and Email only
- no Privacy, RSS, or Contact footer links

Stop and review the complete homepage.

## Phase 7 — Projects

Tasks:

- `/projects`
- project listing
- `/projects/[slug]`
- reusable project detail layout
- featured/status metadata
- optional GitHub/demo links only when real
- development journal area only where content exists

Stop and review.

## Phase 8 — Writing

Tasks:

- `/writing`
- latest-first article list of published articles
- `/writing/[slug]`
- Markdown typography
- code blocks
- inline code
- headings
- links
- lists
- images
- metadata
- optional tags

Do not implement search, pagination, reading time, or article thumbnails unless a later requirement needs them. Stop and review.

## Phase 9 — About

Tasks:

- concise professional background
- education
- engineering interests
- current direction
- relevant links
- decide whether to include a professional photograph during this phase; do not add one earlier

Keep work and technical identity central. Do not invent biographical facts.

## Phase 10 — Quality pass

Tasks:

- responsive audit
- keyboard/focus audit
- contrast
- metadata
- Open Graph
- sitemap
- robots
- 404
- image optimization
- performance pass
- broken-link check

## Phase 11 — Deployment

Goal: simple publishing workflow.

Choose the static host during this phase. Do not introduce hosting-specific infrastructure earlier.

Target:

```text
write content
→ preview
→ git commit
→ git push
→ automatic deployment
```

Do not replace the existing production site until V1 is ready.

# Cursor workflow

For each phase:

1. Tell Cursor exactly which phase is being implemented.
2. Ask it to read the relevant docs first.
3. Make one coherent change.
4. Run the site.
5. Review visually.
6. Fix discrepancies.
7. Commit.
8. Move to the next phase.

If Cursor starts inventing features, stop and refer it back to `AGENTS.md` and the decision log.
