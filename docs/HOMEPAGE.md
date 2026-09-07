# Homepage Specification

Primary visual reference:

`mockups/homepage-final.png`

This document defines the information architecture behind the mockup.

Documentation is product law. The mockup is visual direction. Mockup copy, article titles, project rows, dates, and decorative text are illustrative unless confirmed here or provided by Parth.

## 1. Page order

```text
Navbar
Hero
Currently
Projects + Featured Project + Recent Writing
Closing visual / philosophy
Footer
```

Do not add extra homepage sections without first checking whether they solve a current content need.

## 2. Navbar

Desktop:

```text
PM                                      Home  Projects  Writing  About
```

`PM` is the brand mark.

Do not display `Parth Maru` in the navbar because the hero displays the full name prominently.

Social links do not belong in the navbar.

The navbar should initially be non-sticky.

## 3. Hero

Suggested structure:

```text
IDEAS / CODE / SYSTEMS / PROGRESS

Parth Maru

Backend Engineer · Python · Cloud · AI

I build backend systems and document what I learn
while building them.

[See my work]      Read latest article →
```

The exact body sentence can be refined later, but the tone should remain simple and factual.

Desktop can pair the text with an atmospheric work/engineering image.

Do not use a giant profile photo.

Do not add a typewriter effect unless it is deliberately revisited later.

## 4. Currently

Purpose: make the portfolio feel alive even while the content library is still small.

Structure:

```text
Currently

Learning
<current topic>

Building
<current project>

Exploring
<current area>

Writing
<current article>
```

These values must come from a simple local data/config file so they can be updated without editing layout components. No database or admin panel.

`Currently → Writing` represents work in progress. It is not a published-article listing.

Initial conceptual values can include:

- Learning — Python internals / backend engineering
- Building — BugTracker
- Exploring — AWS / DevOps
- Writing — the article currently being prepared

Treat those conceptual values as illustrative until confirmed or supplied as real config content. Do not invent Current Writing titles.

## 5. Main content area

Desktop intent:

```text
Recent / Selected Projects | Featured Project | Recent Writing
```

This may be implemented as an editorial multi-column grid if it matches the mockup and remains readable.

### Selected / Recent Projects

Show a small number of projects other than the currently featured project.

**BugTracker must not appear here.** It is the Featured Project only.

Potential real projects worth considering, if confirmed:

- FastAPI Todo API deployment
- Student Performance Monitoring System
- Traffic Sign Detection and Recognition research/project

Do not invent project claims, dates, or technologies. Mockup project rows are illustrative until confirmed. Wire this list from the projects content collection, excluding the featured project.

### Featured Project

Initial feature: **BugTracker**.

This should have more visual weight than the surrounding project list.

Potential information:

- name
- one concise description
- status
- a small number of relevant technologies
- project page link
- GitHub link if public
- optional visual/screenshot, only if a real asset exists
- Build Log / Development Journal link only if real journal entries exist

Avoid turning it into a giant marketing card. Do not render empty GitHub, demo, or journal links.

### Recent Writing

Show the latest small set of **published** articles from the writing content collection.

This is distinct from `Currently → Writing`, which is in-progress work from local config.

Each row/item can contain:

- date
- title
- optional category/tag
- short description only if it helps

The homepage does not need to show full excerpts.

Article reading time and thumbnails are not required for V1. Do not invent article titles or dates. Mockup writing rows are illustrative until real articles exist.

## 6. Notes

There is **no dedicated Notes section on the MVP homepage**.

Reason: Parth already uses Markdown and GitHub heavily for detailed learning notes. Creating a separate portfolio Notes content type would duplicate his existing workflow.

Preferred distinction:

```text
GitHub
→ detailed learning notes
→ code
→ experiments
→ raw/reference material

parthmaru.com
→ curated writing
→ project documentation
→ engineering decisions
→ work worth presenting publicly
```

A subtle **text** link such as `Technical notes on GitHub →` may appear near Writing or in an appropriate secondary location.

Do not implement this as a homepage card. Do not give this link the same prominence as Projects or Writing. Use a real GitHub URL only when it is provided; do not invent one.

## 7. Closing visual / philosophy

Near the end of the page, use a wide atmospheric visual/panel with the canonical philosophy line:

> Build. Learn. Document. Improve.

Do not use the mockup quote, vertical slogans, or other generated copy instead of this line.

Keep the visual tasteful and secondary to the work. Do not implement decorative vertical slogans or other image-generation artifacts literally.

## 8. Footer

The MVP footer contains only:

```text
© Parth Maru                         GitHub  LinkedIn  X  Email
```

Do not add Privacy, RSS, Contact, or other footer links in V1.

Keep footer links accessible and simple. Do not invent social URLs; use them only when provided.

## 9. Homepage content rules

- Do not show fake article counts.
- Do not fabricate dates, article titles, projects, technologies, social URLs, or achievements.
- Do not add empty categories to make the site appear larger.
- Do not repeat BugTracker in Recent Projects; it is Featured only.
- Do not implement decorative vertical slogans or other mockup artifacts literally.
- When content is sparse, embrace whitespace.
- Prefer three real items over eight placeholders.
- Clearly mark any temporary placeholders as placeholders.
- The homepage should improve naturally as more content is published.
