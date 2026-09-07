# MVP Architecture

## 1. Architecture goal

Build the smallest architecture that satisfies the current product.

V1 is a static-first portfolio and technical publishing site.

The architecture should make publishing easy and leave room for future evolution without implementing future complexity today.

## 2. Chosen direction

Initial stack:

- Astro
- TypeScript
- Markdown by default; MDX only if a specific piece of content genuinely requires embedded interactive/component functionality
- Astro content collections
- normal CSS using shared custom properties/design tokens
- npm
- Git
- static deployment (host chosen during the deployment phase)

Prefer Astro components and static HTML.

Do not add React/Vue/Svelte solely out of familiarity. Add an interactive island only when a feature genuinely needs client-side behavior.

## 3. Why Astro

The current product is primarily content:

- homepage
- project pages
- writing
- about page

Most pages do not need a server, database, or client-side application runtime.

Astro is a good fit because the site can remain mostly static while still allowing interactive components or server functionality later if a real requirement appears.

The website is not intended to demonstrate complexity for its own sake.

## 4. No separate backend for V1

A frontend + FastAPI + PostgreSQL architecture is deliberately deferred.

Current content does not require persistent application state, user accounts, authenticated writes, dynamic API-driven pages, server-side search, or database-backed publishing.

If future requirements create those needs, a backend can be added behind an API without redesigning the entire visual site.

Potential future architecture:

```text
parthmaru.com (Astro)
        |
        | HTTPS
        v
api.parthmaru.com (FastAPI)
        |
        v
PostgreSQL / search / other services
```

This is a future option, not part of the MVP.

## 5. Suggested source structure

Use this as a direction rather than creating every directory immediately:

```text
parthmaru.com/
├── .cursor/
│   └── rules/
├── docs/
├── mockups/
│   └── homepage-final.png
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── projects/
│   │   └── writing/
│   ├── content/
│   │   ├── projects/
│   │   └── writing/
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects/
│   │   └── writing/
│   ├── styles/
│   └── data/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Only create structure that is being used.

## 6. Component strategy

Use components for meaningful reusable sections, not every wrapper.

Good candidates:

- Navbar
- Footer
- Hero
- Currently
- ProjectList / ProjectItem
- FeaturedProject
- RecentWriting
- ArticleCard/Row where reused
- shared layout

Avoid dozens of single-use one-line components, deep prop chains, and premature abstraction.

## 7. Data boundary

Do not tightly couple display components to how content is loaded.

Prefer a simple boundary:

```text
UI component
    ↓
page / content query
    ↓
Astro content collection  (projects, writing)
    or local config file  (Currently)
```

A minimal Astro content-collection setup must exist before the homepage Projects and Writing sections are wired to content. Do not hardcode those sections and retrofit collections later.

Currently values come from a simple local config/data file, not from a content collection or CMS.

If the source later becomes an API, the display component should not require a full redesign.

Do not build a repository/service architecture just to simulate enterprise code.

## 8. Styling strategy

Use:

- a global stylesheet for reset, tokens, typography, layout primitives
- component-scoped styles where they improve locality
- CSS custom properties for shared design tokens

Avoid introducing a large styling framework unless it clearly improves the project.

## 9. JavaScript policy

Ship as little browser JavaScript as practical.

Static content, links, layout, and articles do not require hydration.

Use client-side JavaScript only for real interactions such as mobile navigation, or future search/filter controls if those become necessary.

V1 is dark-only. Do not implement a theme switcher.

Avoid animation libraries for simple CSS transitions.

## 10. Image policy

- optimize images
- use modern formats when appropriate
- preserve sensible aspect ratios
- avoid huge uncompressed hero images
- use meaningful alt text for informative imagery
- use empty alt text for decorative imagery
- project screenshots are optional and should only use real assets
- article thumbnails are not required for V1

The atmospheric visual style should not come at the cost of performance.

## 11. SEO baseline

V1 should include meaningful page titles, meta descriptions, canonical URLs where appropriate, Open Graph basics, sitemap, robots configuration, and semantic article markup.

RSS is a sensible addition once Writing is operational, but should not block the first homepage implementation and is not part of the MVP footer.

The static host will be decided during the deployment phase.

## 12. Quality constraints

Before calling a page complete:

- responsive from mobile to wide desktop
- keyboard usable
- no obvious layout shifts
- no horizontal overflow
- no broken internal links
- semantic headings
- no fabricated content
- no unnecessary dependencies
- no theme switcher
