# Visual Design Specification

## 1. Approved direction

The approved design direction is a **dark, spacious, editorial engineering portfolio**.

The visual mood should feel:

- calm
- thoughtful
- technical
- atmospheric
- mature
- minimal
- slightly cinematic
- premium without looking like a marketing landing page

The site should feel closer to a personal engineering publication/notebook than a typical developer portfolio template.

Primary visual reference:

`mockups/homepage-final.png`

Documentation is product law. Use the mockup as visual direction, not as permission to reproduce image-generation artifacts or unconfirmed copy literally.

Do not implement decorative vertical slogans, mockup quotes that contradict the docs, or other generated chrome as real UI.

## 2. What to avoid

Avoid common portfolio clichés:

- giant profile photographs
- `Hi 👋 I'm Parth`
- enormous full-screen hero sections
- excessive gradients
- particle backgrounds
- 3D globes
- neon cyberpunk styling
- animated skill bars
- percentage-based skills
- huge technology-logo grids
- unnecessary carousels
- excessive cards
- motion for the sake of motion
- typewriter animation as a default identity treatment
- decorative vertical slogans copied from the mockup
- a theme switcher
- homepage cards for GitHub technical notes

Animation should be subtle and functional. The design must still feel complete with animation disabled.

V1 is dark-only.

## 3. Layout

The layout should feel wide and breathable.

General principles:

- centered content container
- generous horizontal gutters
- generous vertical spacing between major sections
- thin dividers instead of heavy boxes where possible
- editorial grids rather than dashboard grids
- cards only when they improve grouping
- clear hierarchy through typography and spacing

Suggested initial maximum content width: `1180px–1280px`.

This is a starting range, not an immutable number. Tune against the approved mockup.

## 4. Navbar

Desktop structure:

```text
PM                                      Home  Projects  Writing  About
```

Rules:

- `PM` is the compact personal mark.
- Do not put `Parth Maru` beside `PM`.
- The full name belongs prominently in the hero.
- No social icons in the navbar.
- Navbar should not dominate the page.
- Keep it visually quiet.
- The navbar should initially be non-sticky. Revisit stickiness later only if it improves the experience without adding visual noise.

Mobile:

- preserve the `PM` mark
- use a compact accessible menu if links no longer fit
- avoid a visually oversized mobile header

## 5. Hero

The hero owns the primary identity.

Required hierarchy:

```text
IDEAS / CODE / SYSTEMS / PROGRESS

Parth Maru

Backend Engineer · Python · Cloud · AI

Short introduction

Primary CTA       Secondary article CTA
```

The full name should appear once as the dominant hero heading.

Do not use a typewriter animation by default.

The hero may use an atmospheric workspace/engineering visual on larger screens. It should support the mood without becoming the subject of the website.

No large portrait is required on the homepage.

## 6. Currently section

This is a distinguishing part of the homepage.

Currently values come from a simple local config/data file, not from layout components or a CMS.

Four concepts:

- Learning
- Building
- Exploring
- Writing (`Currently → Writing` is work in progress, not a published-article list)

Use restrained accent colours to create scanning anchors.

Suggested semantic accent mapping:

- Learning → green
- Building → blue
- Exploring → purple
- Writing → warm orange

Do not turn these into loud dashboard cards.

## 7. Main content area

The homepage should prioritize:

- Selected / Recent Projects
- Featured Project
- Recent Writing

BugTracker is the initial featured project.

The featured project can receive stronger visual treatment than the surrounding lists.

Do not duplicate BugTracker immediately in the selected/recent project list.

Prefer concise project summaries and metadata over large stacks of technology badges.

Article reading time and thumbnails are not required for V1. Project screenshots are optional and should only use real assets.

GitHub technical notes, if linked, must be a subtle text link — not a homepage card.

## 8. Closing visual / philosophy section

The homepage may finish with a wide atmospheric image or visual panel and this canonical philosophy line:

> Build. Learn. Document. Improve.

This is allowed to be more cinematic than the rest of the site, but still restrained.

The image must not reduce readability or page performance significantly.

Do not implement decorative vertical slogans from the mockup.

## 9. Footer

The MVP footer contains only:

- copyright / name
- GitHub
- LinkedIn
- X
- Email

Social links belong here rather than in the main navigation.

Do not add Privacy, RSS, Contact, or other footer links in V1.

The footer should be simple and understated.

## 10. Colour system

The exact palette should be tuned during implementation against the approved mockup.

Suggested starting tokens:

```css
:root {
  --bg: #0b1018;
  --surface: #111925;
  --surface-raised: #172131;
  --text: #f1eee7;
  --text-muted: #9da9b7;
  --border: rgba(255, 255, 255, 0.08);
  --accent-blue: #6f8cff;
  --accent-green: #74b98a;
  --accent-purple: #9a82d2;
  --accent-orange: #d69b63;
}
```

These are **starting values**, not final brand colours. Exact fonts and colour values may be tuned during browser implementation to match the approved mockup.

Avoid highly saturated neon colours.

V1 is dark-only. Do not implement a light theme or theme switcher.

## 11. Typography

The homepage and global UI use a **single technical typeface**.

Initial family: **Fira Code** (self-hosted variable font via Fontsource).

The site must ship the font files with the build so visitors see Fira Code even if it is not installed on their machine. Do not rely on a locally installed copy.

Do not mix a decorative serif or a separate sans family into the UI. Hierarchy comes from size, weight, line height, letter spacing, case, and colour — not from switching typefaces.

Weight guidance:

- 400 for body, navigation, labels, and most UI text
- 500 for selected emphasis (mark, primary buttons, section headings)
- 600 only for the dominant hero name

Long-form article typography may be reconsidered later. Do not introduce a second family for articles until that work is specified.

Font loading should stay small. Do not add extra families simply to appear distinctive.

## 12. Borders, shadows, and surfaces

- Prefer subtle borders.
- Avoid heavy drop shadows.
- Keep elevation differences restrained.
- Sections should often be separated by spacing or a thin divider rather than a card.
- Rounded corners can be used, but should not make the entire site look like a collection of SaaS cards.

## 13. Responsive behaviour

Desktop composition should gracefully collapse rather than merely shrink.

Expected behavior:

- hero becomes single-column on smaller screens
- Currently becomes 2x2 and eventually stacked if necessary
- multi-column project/writing section becomes stacked
- text measure stays comfortable
- headings scale down without becoming tiny
- images keep appropriate aspect ratios
- navigation remains accessible
- no horizontal overflow

Mobile design is not an afterthought. The same visual identity should survive at narrow widths.

## 14. Accessibility

- semantic landmarks
- visible keyboard focus
- sufficient text/background contrast
- meaningful alt text for informative imagery
- empty alt text for purely decorative imagery
- no interaction that only works on hover
- respect reduced-motion preferences
- reasonable heading hierarchy
- touch-friendly targets

Aesthetic subtlety must not reduce usability.
