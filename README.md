# Generative AI Newsroom

Static newsroom site for aggregated generative AI updates. Markdown files are the source of truth and Astro generates all pages at build time.

[https://sintspiden.github.io/generative-ai-newsroom/](https://sintspiden.github.io/generative-ai-newsroom/)

## Features

- Landing page shows the **latest available day** in the dataset
- Reverse-chronological feed with category/source/summary/tags
- Category pages: `/category/[slug]/`
- Daily archives: `/archive/yyyy/mm/dd/`
- Monthly archives: `/archive/yyyy/mm/`
- Optional source pages: `/source/[slug]/`
- Item pages for each update: `/item/[slug]/`
- Client-side full-text search at `/search/` with Pagefind
- GitHub Pages deployment workflow via GitHub Actions

## Content structure

Put Markdown files in `src/content/news/`:

```md
---
title: "..."
date: "2026-03-07T13:05:00Z"
category: "Models"
source: "..."
tags: ["..."]
summary: "..."
url: "https://..."
importance: 2
entities: ["..."]
---
Body text
```

Required fields: `title`, `date`, `category`.

- Date must be parseable; invalid dates fail the build clearly.
- Optional fields are handled gracefully.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build:search
```

This runs:
1. Astro static build (`dist/`)
2. Pagefind index generation into `dist/pagefind/`

## Deploy to GitHub Pages

Workflow: `.github/workflows/deploy.yml`

- Trigger: push to `main` (or manual dispatch)
- Installs deps
- Builds static site and Pagefind index
- Uploads `dist/` artifact
- Deploys to GitHub Pages

### Base path / site URL

`astro.config.mjs` supports environment overrides:

- `SITE_URL` (e.g. `https://<user>.github.io`)
- `BASE_PATH` (e.g. `/generative-ai-newsroom` for project pages)

In GitHub Actions these are set automatically for repo-based Pages deploys.
