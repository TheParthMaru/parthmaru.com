# Git

Commit messages for this repository are a single line. No body and no footer.

```text
type(scope): short description
```

`scope` is optional. Use one when the change belongs to a part of the site.

```text
feat(home): add non-sticky navbar
fix(writing): skip empty GitHub links
chore: add Astro/npm gitignore
docs(product): lock MVP clarifications
```

## Types

| Type | Use for |
| --- | --- |
| `feat` | A new page, section, or publishing behaviour |
| `fix` | A bug, broken link, or incorrect public content |
| `docs` | Documentation or agent rules only |
| `chore` | Tooling, gitignore, or dependency updates |
| `refactor` | A restructure that does not change behaviour |
| `style` | Visual or formatting changes only |

## Scopes

Useful scopes are `home`, `projects`, `writing`, `about`, `layout`, and `product`.

## Description

Write the description in the imperative, in lower case, and keep it to one line. Describe the change, not the files touched.

Do not add a second paragraph:

```text
chore: add Astro/npm gitignore

Keep dependencies, build output, and env files out of version control.
```
