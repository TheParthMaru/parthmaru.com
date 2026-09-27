---
title: "BugTracker"

description: "A full-stack bug tracking platform built with Spring Boot, React and PostgreSQL, featuring project-scoped issue management, JWT authentication and text-similarity-based duplicate detection."

status: "complete"
featured: true
draft: false

tags:
  - java
  - spring-boot
  - react
  - typescript
  - postgresql

github: "https://github.com/TheParthMaru/bugtracker"
---

BugTracker is a full-stack issue-tracking platform I originally built as part of my MSc work.

The application supports project-scoped bug management, authentication and authorization, team-based workflows, analytics, notifications, gamification, and duplicate-bug detection using text-similarity techniques.

The backend is built with Java and Spring Boot, using PostgreSQL for persistence and JWT-based authentication. The frontend is built with React and TypeScript.

One of the more interesting parts of the project is duplicate detection, where bug reports can be compared using similarity techniques such as cosine similarity, Jaccard similarity, and Levenshtein distance.

The project also gave me practical experience with deployment, containerization, backend architecture, API design, authentication, and maintaining a larger full-stack codebase.
