# Content Model

## 1. Principle

`parthmaru.com` should be the curated public layer of Parth's technical work.

GitHub can remain the detailed/raw engineering layer.

The site should not duplicate content merely to fill sections.

Do not invent article titles, projects, dates, technologies, social URLs, or achievements. Mockup copy is illustrative unless confirmed in the docs or provided by Parth. Use placeholders only when clearly marked as placeholders.

## 2. Writing

Writing is a first-class part of the site.

Articles may cover:

- concepts that recently clicked
- backend engineering
- Python
- APIs
- databases
- deployment
- Linux / systemd
- Nginx
- AWS / cloud
- DevOps
- software-engineering fundamentals
- data / AI topics when appropriate
- lessons from building projects

Article length should be determined by the subject, not a target word count.

A short focused article is better than artificially expanded content.

**Published articles** appear in Writing indexes and in homepage Recent Writing. Work in progress belongs in `Currently → Writing` (local config), not in Recent Writing.

Markdown is the default content format. Use MDX only if a specific piece of content genuinely requires embedded interactive/component functionality.

Article reading time and thumbnails are not required for V1. Do not add those fields to the schema until the UI needs them.

## 3. Notes

For the MVP, **Notes is not a separate site content type**.

Parth already keeps detailed notes in Markdown and GitHub.

Preferred workflow:

```text
Learn something
      ↓
Detailed notes / code in GitHub
      ↓
Identify an idea worth explaining
      ↓
Write a curated article on parthmaru.com
      ↓
Optionally link the article to the underlying notes/repository
```

If a meaningful distinction between Notes and Writing emerges after significant publishing, revisit the decision.

Do not add `/notes` just because the original project brief once considered it.

A subtle homepage text link to GitHub notes is allowed. Do not represent notes as a homepage card or a site content type.

## 4. Projects

Projects should not be gallery cards with only logos and technologies.

A meaningful project page can eventually contain:

- what the project does
- why it exists
- problem/context
- architecture
- important technology choices
- screenshots, only when a real asset exists
- live demo where available
- GitHub repository
- engineering challenges
- lessons learned
- future improvements
- development journal/build-log entries when relevant

Not every small project needs every section.

Project screenshots are optional. Do not use generated or placeholder screenshots as if they were real.

## 5. Featured project

Initial featured project: **BugTracker**.

BugTracker is an issue-tracking platform being rebuilt from the ground up with Python/FastAPI and is expected to demonstrate areas such as:

- backend engineering
- databases
- authentication
- APIs
- cloud deployment
- AWS
- CI/CD
- potentially duplicate-bug detection using similarity techniques

Do not claim a feature as completed until it actually exists.

BugTracker is the Featured Project on the homepage. It must not also appear in Recent / Selected Projects.

## 6. Build logs / development journal

Build logs are useful, but **Build Log is not a top-level navigation section for the MVP**.

Build logs are project-oriented chronological entries.

Example:

```text
BugTracker

Development Journal

01 — Why I'm rebuilding BugTracker
02 — Designing the database
03 — Authentication
04 — Database migrations
05 — API architecture
06 — Duplicate bug detection
07 — Deployment
08 — CI/CD
```

Difference from Writing:

| Writing | Development journal |
| --- | --- |
| Topic-oriented | Project-oriented |
| Designed to explain/teach | Designed to document engineering progress |
| Usually stands alone | Connected to a project timeline |
| Reader can start anywhere | Entries often form a sequence |

For V1, development journal entries should live within the relevant project area.

Only show Build Log / Development Journal links when real entries exist. Do not render empty journal CTAs on the homepage or project pages.

If many projects eventually have substantial journals, a top-level Build Log section can be reconsidered.

## 7. Suggested content structure

Keep content portable and file-based.

A sensible direction:

```text
src/content/
├── writing/
│   ├── article-slug.md
│   └── another-article.md
│
└── projects/
    ├── bugtracker.md
    └── todo-api.md
```

Use `.md` by default. Use `.mdx` only for a specific entry that needs embedded components.

If development journals become substantial:

```text
src/content/
└── build-log/
    └── bugtracker/
        ├── 01-why-rebuild.md
        └── 02-database-design.md
```

Do not create folders simply because this example shows them. Add them when content exists.

## 8. Article frontmatter

Keep the initial schema small. Example fields only — do not treat example titles as real articles to publish:

```yaml
---
title: "How systemd actually works"
description: "Understanding process management beyond memorising commands."
date: 2026-09-07
tags:
  - linux
  - devops
draft: false
---
```

Only add new mandatory fields when the UI needs them. Reading time and thumbnail fields are not required for V1.

## 9. Project frontmatter

Example starting point:

```yaml
---
title: "BugTracker"
description: "An issue-tracking platform being rebuilt from the ground up."
status: "in-progress"
featured: true
tags:
  - python
  - fastapi
github: ""
demo: ""
---
```

Do not force empty links into the rendered UI. Screenshots and GitHub/demo links appear only when real values/assets exist.

## 10. Publishing workflow

Target workflow:

```text
Write Markdown
      ↓
Preview locally
      ↓
git add / commit
      ↓
git push
      ↓
automatic deployment
      ↓
content is live
```

Publishing should require almost no frontend work.

## 11. Editorial tone

Prefer clear explanations, concrete examples, engineering reasoning, changed understanding, trade-offs, mistakes and lessons, and links to code where useful.

Avoid generic AI-generated filler, SEO-stuffed prose, exaggerated claims, and turning every tiny learning note into an article.
