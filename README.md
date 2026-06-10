# Jessie Kuo Portfolio Website

This is Jessie Kuo's personal portfolio website for product design, UX, and product strategy roles. The site is currently focused on getting the layout and content structure in place quickly, with a clean editorial presentation that can later be refined into stronger case-study storytelling.

The portfolio should emphasize product thinking, user-centered design, cross-functional collaboration, business impact, and clear case-study narratives. Future agents should treat this as a professional portfolio project, not a generic Next.js starter.

## Tech Stack

- Next.js `16.2.3`
- React `19.2.4`
- TypeScript
- Tailwind CSS `4` via `@tailwindcss/postcss`
- ESLint `9` with `eslint-config-next`
- App Router under `src/app`
- Static image assets in `public/`

Important: this project uses a newer Next.js version with potentially breaking API changes. Before changing Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/` as requested in `AGENTS.md`.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local site:

```text
http://localhost:3000
```

## Build

Create a production build:

```bash
npm run build
```

Run the production server after building:

```bash
npm run start
```

Run linting:

```bash
npm run lint
```

## Folder Structure

```text
.
├── public/
│   └── behance/                 # Imported Behance project image galleries
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styling and responsive layout rules
│   │   ├── layout.tsx           # Root metadata, fonts, and document shell
│   │   ├── page.tsx             # Portfolio homepage
│   │   └── work/[slug]/page.tsx # Dynamic case-study/gallery pages
│   └── content/
│       ├── behance-projects.ts  # Imported Behance project data and image paths
│       └── portfolio.ts         # Narrative portfolio profile and case-study structure
├── package.json
├── next.config.ts
└── tsconfig.json
```

## Current Project Status

The site is in an early layout and content-structure phase. The homepage currently renders Jessie profile content, portfolio principles, and a selected-work grid powered by imported Behance projects.

Dynamic work pages are generated from `src/content/behance-projects.ts` and display imported cover images plus full image galleries from `public/behance/`. The richer narrative case-study model in `src/content/portfolio.ts` exists, but the current work pages are still primarily gallery-based.

The immediate goal is to make the portfolio readable, navigable, and structurally useful before polishing every visual detail or rewriting every case study.

## Design Direction

The visual direction should feel clean, professional, editorial, and slightly premium. Prioritize generous spacing, strong typography, readable case-study flow, and restrained interaction details.

The current styling uses a warm editorial palette, serif display typography, simple grids, subtle motion, and image-led project cards. Future visual updates should improve clarity and polish while preserving this professional portfolio tone.

## Content And Case-Study Structure

Core profile content lives in `src/content/portfolio.ts`:

- `designerProfile`: name, title, tagline, location, email, and intro copy
- `portfolioPrinciples`: short principles for Jessie's design approach
- `caseStudies`: narrative case-study data with problem, constraints, approach, outcome, and reflection

Imported Behance content lives in `src/content/behance-projects.ts`:

- `slug`: URL segment for the dynamic work route
- `title`: project title
- `url`: original Behance link
- `coverImage`: cover asset path
- `images`: full gallery image paths
- `moduleCount`: number of imported gallery images

When improving case studies, preserve the existing structure unless Jessie asks for a larger content rewrite. Strong case studies should make the problem, role, constraints, design decisions, collaboration, outcome, and reflection easy to scan.

## Important Rules For Future Edits

- Do not rewrite all content unless explicitly requested.
- Do not redesign the whole website unless explicitly requested.
- Prioritize layout clarity, content readability, and case-study flow.
- Keep the tone professional, natural, and specific to Jessie.
- Preserve existing case-study structure and image assets.
- Avoid adding unnecessary libraries or broad new abstractions.
- Keep edits scoped to the requested change.
- Prefer improving the existing design system in `globals.css` before introducing new styling patterns.
- Treat `public/behance/` assets as source portfolio material; do not delete or rename them without confirming affected routes.
- If editing routes, metadata, image handling, or App Router conventions, check the local Next.js docs in `node_modules/next/dist/docs/` first.
