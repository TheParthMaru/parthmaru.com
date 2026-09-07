# parthmaru.com — Agent Instructions

This repository is the source for **parthmaru.com**, Parth Maru's personal portfolio and technical publishing website.

## Read before making significant changes

Use these files as the source of truth:

- `docs/PROJECT.md` — product purpose, MVP scope, audience, and non-goals.
- `docs/DESIGN.md` — visual language and UI principles.
- `docs/HOMEPAGE.md` — agreed homepage structure.
- `docs/CONTENT.md` — projects, writing, notes, and build-log policy.
- `docs/ARCHITECTURE.md` — technical architecture and implementation constraints.
- `docs/DECISIONS.md` — decisions already made and why.
- `docs/IMPLEMENTATION_PLAN.md` — recommended build order.

The approved homepage mockup lives at:

`mockups/homepage-final.png`

Treat that mockup as visual direction. Treat the docs as product law. If the mockup and a document appear to conflict, follow the docs and the decision log.

## Core priorities

When choosing between alternatives, optimize for:

1. Simplicity
2. Originality
3. Technical credibility
4. Ease of publishing
5. Evidence of continuous learning
6. Performance and accessibility

## MVP-first rule

Do not introduce infrastructure or product features without a current requirement.

The MVP does **not** need:

- a separate backend
- a database
- authentication
- an admin dashboard
- a CMS
- server-side search
- pagination
- comments
- a newsletter system
- Redis
- microservices
- unnecessary client-side JavaScript
- a theme switcher
- MDX by default

If a future requirement genuinely needs one of these, propose it first rather than silently adding it.

## Design guardrails

- Do not turn this into a generic flashy developer portfolio.
- Do not add giant hero sections, particles, 3D effects, skill percentages, huge tech-logo walls, excessive gradients, or decorative animation.
- Do not add sections that are not defined in the docs.
- Do not duplicate the name `Parth Maru` in both the navbar and hero.
- Do not add social links to the main navbar; they belong in the footer.
- Do not create a top-level Notes page for the MVP.
- Do not create a top-level Build Log page for the MVP.
- BugTracker is the featured project and should not be repeated immediately as a recent project beside itself.
- Prefer generous whitespace and editorial/list-based layouts over card-heavy dashboards.
- V1 is dark-only. Do not implement a theme switcher.
- The navbar should initially be non-sticky.
- Do not implement decorative vertical slogans or other image-generation artifacts literally.
- GitHub technical notes, if linked, must be a subtle text link, not a homepage card.
- The MVP footer contains only copyright, GitHub, LinkedIn, X, and Email.
- Canonical closing philosophy: “Build. Learn. Document. Improve.”

## Coding behavior

- Make small, reviewable changes.
- Write git commit messages as a single line (conventional commits). No body.
- Implement one section or concern at a time.
- Reuse design tokens and shared primitives instead of inventing local styles.
- Avoid new dependencies unless they materially simplify a real requirement.
- Prefer semantic HTML and accessible interactions.
- Keep the site mostly static.
- Do not rewrite unrelated working code while implementing a feature.
- If the mockup and a document appear to conflict, follow the documentation and the decision log rather than silently redesigning the site.
- Markdown is the default content format. Use MDX only if a specific piece of content genuinely requires embedded interactive/component functionality.
- Set up a minimal Astro content-collection before wiring homepage Projects/Writing sections to content.
- Currently values come from a simple local config/data file. `Currently → Writing` is work in progress; Recent Writing is published articles only.

## Content behavior

Never invent achievements, employers, project claims, metrics, article titles, dates, technologies, social URLs, or biographical facts.

Mockup copy and content are illustrative unless confirmed in the docs or provided by Parth.

Use placeholders only when clearly marked as placeholders.

Only show Build Log / Development Journal links when real entries exist.

Article reading time and thumbnails are not required for V1. Project screenshots are optional and should only use real assets.
