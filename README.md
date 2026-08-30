# Athian Nugraha Muarajuang — Portfolio

**Author:** Athian Nugraha Muarajuang (13523106)  
**Affiliation:** Informatics Engineering (Teknik Informatika), Institut Teknologi Bandung (ITB)  
**Live Deployment:** [https://starath.github.io/portfolio/](https://starath.github.io/portfolio/)

A clean, craft-driven personal portfolio built with **Astro 7**. Designed with editorial typography, authentic engineering case studies, strict accessibility (WCAG 2.1 AA), and zero generic AI design tropes (no neon radial blur blobs, no floating emoji pills, no buzzword fluff).

---

## Design System & Architecture

- **Typography**: Editorial and technical pairing using *Space Grotesk* for display headlines, *IBM Plex Sans* for body copy, and *IBM Plex Mono* / *JetBrains Mono* for technical metadata and code specs.
- **Surfaces & Colors**: Deep obsidian canvas (`#0A0A0C`), structured surface cards (`#111114`), crisp hairline borders (`#23232A`), and a restrained emerald accent (`#10B981`).
- **Content Layer**: Type-safe Content Collections (`src/content.config.ts`) backed by Zod 4 schemas for engineering case studies.
- **Image Pipeline**: Responsive Astro `<Picture>` component generating multi-density AVIF and WebP variants from source rasters.
- **SEO & Structured Data**: Complete OpenGraph, Twitter Cards, canonical URLs, Web App Manifest (`manifest.webmanifest`), SVG favicon, and Schema.org JSON-LD graph (`Person`, `WebSite`, and `ProfilePage`).
- **Accessibility & UX**: Universal `@media (prefers-reduced-motion)` gates, `.skip-link` navigation, focus-visible outlines, scroll-spy section tracking, and one-click email clipboard copy with fallback.
- **CI/CD Pipeline**: GitHub Actions verify-and-deploy workflow (`.github/workflows/deploy.yml`) for automated testing and deployment to GitHub Pages.

---

## Project Structure

```text
src/
├── components/          # Modularized Astro UI components
│   ├── Header.astro          # Clean top navigation with active scroll spy
│   ├── Hero.astro            # Grounded developer profile & quick facts
│   ├── About.astro           # Academic narrative & ITB coursework log
│   ├── Skills.astro          # Technical stack & domain competency matrix
│   ├── Projects.astro        # Structured engineering case feed
│   ├── ProjectCard.astro     # Case study card with problem, solution, and stack
│   └── Footer.astro          # Direct email box & social channels directory
├── content/             # Type-safe Content Layer entries
│   └── projects/             # Markdown files with problems, solutions, and specs
├── data/                # Structured datasets
│   └── skills.json           # Technical skills data
├── layouts/             # Document shell
│   └── BaseLayout.astro      # Fonts preconnect, metadata, JSON-LD, skip link
├── styles/              # Global CSS & Design Tokens
│   └── global.css            # Custom properties, resets, typography, motion gates
└── pages/
    └── index.astro           # Route entrypoint
```

---

## Available Scripts

```bash
# Start local development server
npm run dev

# Run TypeScript and Astro template type check
npm run check

# Build static production bundle to dist/
npm run build

# Preview the built production output locally
npm run preview
```
