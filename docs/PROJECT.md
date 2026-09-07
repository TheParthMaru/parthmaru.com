# Project Brief — parthmaru.com

## 1. Purpose

`parthmaru.com` is Parth Maru's personal portfolio and technical publishing website.

It should be more than a conventional portfolio. Over time, it should become a curated archive of:

- projects
- technical writing
- engineering decisions
- experiments worth presenting
- learning that has matured enough to explain publicly

The central principle is:

> **Show the work rather than merely claim the skills.**

The site should evolve alongside Parth's career instead of trying to look like a finished encyclopedia on day one.

## 2. What the MVP needs to do

The first useful version must let visitors:

1. Understand who Parth is and what kind of engineering work interests him.
2. See a small number of worthwhile projects.
3. Open detailed project pages.
4. Read technical articles.
5. Learn about Parth's background and current direction.
6. Reach his professional/social profiles from the footer.
7. See what he is currently learning, building, exploring, and writing.

That is enough for V1.

## 3. Initial top-level pages

The primary navigation is intentionally small:

- Home
- Projects
- Writing
- About

Do not create additional top-level sections merely because they might be useful one day.

Possible future sections such as Research, Videos, Reading, Courses, Talks, Notes, or Build Log should be introduced only when there is enough real content to justify them.

## 4. Audience

Primary audiences:

- recruiters
- hiring managers
- software engineers
- potential collaborators
- people discovering Parth through LinkedIn, GitHub, search, or shared articles

The site should be understandable to a recruiter while still feeling technically credible to an engineer.

## 5. Positioning

The website should reflect genuine interests and work rather than position Parth as an expert in everything.

Likely recurring areas include:

- backend engineering
- Python
- APIs
- databases
- FastAPI
- cloud
- AWS
- DevOps
- Linux
- system design
- data
- AI / LLMs
- software-engineering fundamentals

Learning in public is part of the identity of the website.

## 6. MVP non-goals

The initial release is not an online encyclopedia, SaaS product, or publishing platform for multiple users.

Do not build these without a real need:

- separate backend service
- database
- authentication
- admin interface
- full CMS
- server-side article search
- pagination before content volume requires it
- user accounts
- comments
- recommendation engine
- complex analytics dashboard
- newsletter infrastructure
- microservices
- a theme switcher
- extra footer destinations such as Privacy, RSS, or Contact pages

A feature should solve an observed problem, not a hypothetical future problem.

## 7. Growth philosophy

The architecture should be allowed to grow when the content and audience create pressure for it.

Examples:

- A few articles: simple writing index.
- Many articles: tag filters may become useful.
- A large archive: search may become useful.
- Substantial traffic/content operations: APIs, a CMS, database-backed workflows, or server rendering can be reconsidered.

Do not optimize V1 for scale that does not exist yet.

## 8. Definition of a successful V1

V1 is successful when:

- the final homepage design is implemented responsively
- Projects has an index and useful project detail pages
- Writing has an index and Markdown article pages (MDX only if a specific article needs it)
- About is complete
- content can be published with a simple Git commit/push workflow
- the site is fast, accessible, and deployable
- adding a new article does not require redesigning the frontend
- the website already feels intentional even with a modest amount of content
- hosting has been chosen and connected during the deployment phase
