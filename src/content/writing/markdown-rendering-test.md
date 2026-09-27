---
title: "Markdown Rendering Test"
description: "A temporary article used to test the writing system on parthmaru.com."
date: 2026-09-27
tags:
  - testing
  - markdown
draft: true
---

This is a temporary article for testing the Markdown rendering system on **parthmaru.com**.

The purpose is to check typography, spacing, code blocks, lists, links, tables and other elements before publishing real articles.

## Normal paragraph

A technical article will usually contain several paragraphs of normal text. The reading experience should remain comfortable even when paragraphs become longer. Line length should not stretch across the entire screen, and there should be enough vertical spacing between paragraphs.

This paragraph contains **bold text**, _italic text_, and some `inline code`.

Here is a link to [GitHub](https://github.com/).

## Headings

### This is an H3 heading

This text appears below an H3 heading.

#### This is an H4 heading

H4 headings should remain visually distinct without becoming too prominent.

## Unordered list

- Python
- FastAPI
- PostgreSQL
- AWS
- Linux

## Ordered list

1. Learn the concept
2. Experiment with it
3. Build something
4. Document what I learned
5. Improve it

## Nested list

- Backend Engineering
  - APIs
  - Databases
  - Authentication
- DevOps
  - Linux
  - Nginx
  - systemd
  - CI/CD

## Blockquote

> The goal of this website is to show the work rather than merely claim the skills.

Text after a blockquote should return naturally to the normal article flow.

## Inline code

Python functions can be created using the `def` keyword.

Variables such as `user_id`, `response`, and `database_url` should be clearly distinguishable from surrounding text.

## Python code block

```python
def greet(name: str) -> str:
    return f"Hello, {name}!"


message = greet("Parth")
print(message)
```

## JavaScript code block

```javascript
const projects = ["BugTracker", "Todo API"];

projects.forEach((project) => {
	console.log(project);
});
```

## Bash code block

```bash
sudo systemctl status todo-api
sudo systemctl restart todo-api
sudo journalctl -u todo-api -f
```

## Long code line

The following should scroll horizontally instead of breaking the page layout:

```python
response = await some_extremely_long_function_name(parameter_one="value", parameter_two="another value", parameter_three="something else entirely")
```

## Table

| Technology | Purpose              | Status    |
| ---------- | -------------------- | --------- |
| Python     | Backend development  | Learning  |
| FastAPI    | APIs                 | Building  |
| AWS        | Cloud infrastructure | Exploring |
| Astro      | Portfolio website    | Building  |

## Horizontal rule

Content above the divider.

---

Content below the divider.

## Final section

If everything above renders cleanly, the basic Markdown publishing system is ready for real articles.

The next step would be to delete this test article and publish something worth reading.
