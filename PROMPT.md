# Prompt for Coding Agent: Build a Static "AI Newsroom" Site on GitHub Pages

You are implementing a **static newsroom-style website** for aggregating generative AI updates.

## Project context

A backend cron job already exists and periodically gathers updates from multiple sources, then writes them into **Markdown files**.

Your job is to build the **frontend static site and build pipeline** that turns those Markdown files into a browsable, searchable newsroom site.

This is **not** a general CMS and **not** a server-rendered dynamic app. It should be a **static site** suitable for deployment on **GitHub Pages**.

---

## Primary goals

Build a site that:

1. Presents the latest available day of aggregated updates on the landing page
2. Organizes content into categories
3. Provides archive navigation by date
4. Orders content in reverse chronological order
5. Supports client-side search without requiring a backend
6. Works well as a low-maintenance static site

---

## Recommended stack

Use this stack unless there is a very strong reason not to:

- **Astro** for the static site
- **Markdown content files** as the source of truth
- **Pagefind** for search
- **GitHub Actions** for build/deploy
- **GitHub Pages** for hosting

Do **not** introduce a custom backend, database server, or server-side runtime.

Do **not** use client-side SQLite for the first version.

---

## High-level architecture

Implement this flow:

`markdown content -> Astro content collections/build-time transforms -> static pages -> Pagefind search index -> deploy to GitHub Pages`

The site should be generated entirely at build time.

---

## Content assumptions

Assume the cron job produces many Markdown files, one per news/update item.

Each Markdown file should be treated as a single content item.

Support frontmatter fields like these:

- `title`
- `date`
- `category`
- `source`
- `tags`
- `summary`
- `url`
- `importance`
- `entities`

If some fields are missing, handle gracefully.

### Content requirements

- Parse all Markdown items into a structured content collection
- Normalize dates
- Sort items reverse chronologically
- Generate pages from the content automatically
- Fail clearly on invalid dates or malformed required metadata
- Avoid silent data loss

---

## Information architecture

Implement the following page types.

### 1. Landing page (`/`)
The homepage should show the **latest available day**, not necessarily the current calendar day.

It should include:

- site title / branding
- a clear label showing the latest available date
- a unified feed of all items from that date
- reverse chronological ordering
- category labels/pills on each item
- summary text for each item
- links through to the original source
- navigation to categories and archive pages
- search entry point

### 2. Category pages (`/category/[slug]/`)
Each category page should show items for that category in reverse chronological order.

Examples:
- `/category/models/`
- `/category/video/`
- `/category/tooling/`
- `/category/research/`

### 3. Daily archive pages (`/archive/yyyy/mm/dd/`)
Generate one page per day that has content.

Each daily archive page should show all items for that day in reverse chronological order.

### 4. Optional monthly archive pages (`/archive/yyyy/mm/`)
If straightforward, add monthly archive pages that list days with counts and links.

### 5. Optional source pages (`/source/[slug]/`)
If easy to support from the metadata, generate source archive pages too.

### 6. Search page (`/search/`)
Provide a dedicated search page powered by Pagefind.

---

## UX requirements

The UX should feel like a lightweight newsroom rather than a blog.

### Landing page behavior
The landing page should act like a "today’s newsroom" view, except using the latest available dataset date.

Recommended structure:

1. Header
   - site name
   - search input or search link
   - main nav

2. Latest-day summary strip
   - latest available date
   - number of items
   - number of sources represented

3. Main feed
   - all items for the latest day
   - reverse chronological order
   - each item displayed as a card or compact feed row

4. Sidebar or secondary nav
   - categories
   - archive links
   - optionally sources/tags

### Navigation requirements
The nav should prioritize:

1. categories
2. archive access
3. search

Do not make the primary navigation source-based.

### Feed item requirements
Each feed item should show:

- title
- date/time if available
- category
- source
- summary
- external link
- tags if present

Optionally show importance visually, but keep it restrained.

---

## Search requirements

Use **Pagefind**.

### Search goals
- client-side search only
- no backend search service
- fast enough for a small dataset
- index generated during static build
- searchable by title, summary, body, tags, category, and source where possible

### Search UX
Implement either:

- a dedicated `/search/` page, or
- a reusable search UI component used on that page

At minimum, the search UI should:

- allow typing a query
- return matching items
- show title, snippet, category, and date
- link to the relevant page/item

---

## Design requirements

Keep the design clean, readable, and practical.

### Style direction
- minimal newsroom feel
- good typography
- dense enough to scan many updates quickly
- visually clear date and category structure
- mobile-friendly
- fast-loading

### Avoid
- flashy landing-page hero animations
- overly blog-like layouts
- card designs so large that the feed becomes slow to scan
- unnecessary JS frameworks beyond what Astro already needs

---

## Routing and URL conventions

Use clean, stable URLs.

Suggested routes:

- `/`
- `/search/`
- `/category/[slug]/`
- `/archive/[year]/[month]/[day]/`
- optionally `/archive/[year]/[month]/`
- optionally `/source/[slug]/`

Use slugified category/source names.

---

## Data and sorting rules

### Sort order
Default ordering should be:

1. `date desc`
2. `importance desc` if present
3. stable fallback such as title or source

### Latest available day
Determine the latest day based on the content dataset, not the clock.

### Counts
Where useful, compute:
- items per day
- items per category
- items per source

These can be used in nav/sidebar/archive UI.

---

## Implementation constraints

### Must do
- static generation only
- deployable to GitHub Pages
- content-driven architecture
- no backend runtime required
- Pagefind integrated into build/deploy flow

### Must not do
- no server APIs
- no server database
- no authentication
- no admin UI
- no dependence on edge/server functions
- no client-side SQLite for v1

---

## Build and deployment requirements

Set up the project so it can be deployed through GitHub Actions to GitHub Pages.

### Build should:
1. install dependencies
2. build Astro site
3. run Pagefind indexing
4. output static artifacts
5. publish to GitHub Pages

### Output requirements
- production-ready static output
- no broken relative paths on GitHub Pages
- support repo-based Pages deployment if needed
- document any base path configuration clearly

---

## File and project structure

Choose a clean Astro project structure.

Suggested shape:

- `src/pages/`
- `src/layouts/`
- `src/components/`
- `src/content/` or configured content source directory
- `src/lib/` for parsing/grouping utilities
- `public/`
- `.github/workflows/`

If the Markdown content already lives elsewhere in the repo, wire Astro to consume it cleanly.

---

## Deliverables

Produce:

1. A working Astro static site project
2. Content parsing for Markdown news items
3. Homepage showing the latest available day
4. Category archive pages
5. Daily archive pages
6. Search page using Pagefind
7. GitHub Actions workflow for Pages deployment
8. A concise README explaining:
   - project purpose
   - how content is structured
   - how to run locally
   - how to build
   - how deployment works

---

## Non-goals for v1

Do not build these unless they are trivial and do not complicate the architecture:

- client-side SQLite search/querying
- advanced faceted analytics UI
- user accounts
- saved searches
- comments
- personalization
- editor/admin dashboard
- live ingestion system
- RSS ingestion logic

The ingestion already exists outside this project.

---

## Suggested implementation sequence

1. Set up Astro project
2. Define content schema and loader for Markdown items
3. Build data utilities for:
   - sorting
   - grouping by day
   - grouping by category
   - slug generation
4. Build homepage for latest available day
5. Build category pages
6. Build daily archive pages
7. Add shared layout/navigation
8. Integrate Pagefind search
9. Add GitHub Actions deployment
10. Write README

---

## Acceptance criteria

The implementation is complete when:

- the site builds statically with no backend
- the homepage shows all items for the latest available day
- category pages work
- daily archive pages work
- items are reverse chronological
- search works client-side
- deployment to GitHub Pages is configured
- the project is readable and maintainable
- the README explains how to use and deploy it

---

## Quality bar

Prefer simple, robust, maintainable decisions over clever ones.

Optimize for:
- low operational overhead
- clear information architecture
- easy future extension
- fast static builds
- good reading/scanning UX

When making tradeoffs, choose the option that best preserves the core model:

**static, content-driven, newsroom-style, fast to browse, easy to deploy**

---

## Important notes for implementation

- Build around the assumption that content volume is modest
- Treat Markdown as the canonical source of truth
- Keep the frontend flexible enough to support future metadata expansion
- Structure the code so a future phase could add richer filters or a more advanced client-side data layer without rewriting the site

If something is ambiguous, choose the simplest static-first approach and document the decision.
