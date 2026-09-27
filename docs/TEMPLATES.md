# Templates

## Project template

```md
---
title: "Project Name"
description: "One concise description of what the project actually does."

status: "complete"
featured: false
draft: true

tags:
  - python
  - fastapi

github: "https://github.com/..."
---

Optional internal Markdown notes can go here.

For the current MVP there is no public project-detail page,
so this body does not need to become a full article yet.

Once satisfied, change draft to false.
```

## Article template

````md
---
title: "Article title"
description: "One or two sentences explaining what the reader will learn."
date: 2026-09-27
tags:
  - python
draft: true
---

Your article starts here.

## Heading

Normal Markdown.

```python
def example():
    return "Code works too"
```

Preview it.

Then:

```yaml
draft: false
```
````
