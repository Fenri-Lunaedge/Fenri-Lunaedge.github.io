# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional portfolio website for Iramam Silva (Fenri-Lunaedge), a Senior BI Analyst. Built with Next.js 14+ using the App Router, this site is statically exported and deployed to GitHub Pages. The design emphasizes a dark mode, terminal-style aesthetic with neon accents and interactive data visualizations.

## Development Commands

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Production build (generates static files in /out directory)
npm run build

# Lint code
npm run lint

# Static export (build + export to /out)
npm run export
```

## Architecture & Code Organization

### Data-Driven Content Model

All portfolio content (personal info, experience, projects, skills, education) is centralized in `src/data/portfolio.ts`. This is the single source of truth for content updates. Components consume this data rather than having content hardcoded.

**Important**: When updating content, edit `src/data/portfolio.ts` - never modify content directly in component files.

### Component Structure

The application follows a section-based architecture:

- `src/app/page.tsx` - Main page that composes all sections
- `src/app/layout.tsx` - Root layout with fonts, metadata, and global configuration
- `src/components/sections/` - Individual page sections (Hero, About, Experience, Projects, Skills, Dashboards, Contact)
- `src/components/dashboards/` - Interactive BI dashboard showcases (Financial, Ecommerce, LuxuryTourism, PeopleAnalytics, SocialMedia)

Sections are lazy-loaded using dynamic imports for performance optimization.

### Static Site Generation

This project uses Next.js static export (`output: 'export'` in next.config.mjs):

- All pages must be pre-rendered at build time
- No server-side features (API routes, ISR, etc.)
- Images use `unoptimized: true` for GitHub Pages compatibility
- Build output goes to `/out` directory

### Styling Architecture

The project uses Tailwind CSS with custom theming:

- **Theme colors** defined in `tailwind.config.ts`:
  - `dark.*` - Background colors (darker, default, lighter)
  - `neon.*` - Accent colors (cyan, blue, purple, pink)
  - `data.*` - Data visualization colors
- **Global styles** and custom animations in `src/styles/globals.css`
- **Dark mode only** - no light theme toggle currently implemented

Custom animations include: fadeIn, fadeUp, glow, scan, float, pulse

### Data Visualization

Two charting libraries are available:

- **Recharts** (preferred) - Used in dashboard components for interactive charts
- **Chart.js** with react-chartjs-2 - Alternative for specific use cases

### 3D Graphics

Three.js infrastructure is set up but not actively used:

- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Helpers and abstractions
- Reserved directory: `src/components/3d/`

## Key Configuration Files

- `next.config.mjs` - Static export configuration, image optimization disabled, React strict mode, SWC minification
- `tailwind.config.ts` - Custom color palette, dark mode config, extended animations
- `tsconfig.json` - Path aliases configured (`@/*` maps to `src/*`)
- `.github/workflows/deploy.yml` - GitHub Actions workflow for automated deployment

## Content Updates

When adding or updating content:

1. Edit `src/data/portfolio.ts` for all text content, experience, projects, skills
2. Add images to `public/images/`
3. Components will automatically reflect the changes

Dashboard data is in `src/data/dashboards.ts`.

## Deployment

The site auto-deploys to GitHub Pages when pushing to the `main` branch via GitHub Actions. The workflow:

1. Runs `npm install`
2. Runs `npm run build` (which creates static files in `/out`)
3. Deploys `/out` directory to gh-pages branch

Manual deployment: run `npm run build` and the `/out` directory contains the deployable static site.

## TypeScript

Type safety is enforced during builds (`ignoreBuildErrors: false`). All components use TypeScript. Type definitions for libraries are installed as dev dependencies.

## Performance Considerations

- Components use lazy loading via `React.lazy()` and `Suspense`
- Framer Motion animations are optimized with `initial`, `animate`, `transition` props
- Console logs are removed in production builds
- SWC minification is enabled
- Images should be optimized before adding to `public/images/`

## Icon Libraries

Two icon libraries are available:

- **Lucide React** - Primary icon library, modern and consistent
- **React Icons** - Additional icons for specific use cases

Use Lucide React by default for consistency.

## Adding New Sections

1. Create component in `src/components/sections/YourSection.tsx`
2. Add corresponding data structure to `src/data/portfolio.ts`
3. Import and render in `src/app/page.tsx` (preferably lazy-loaded)
4. Follow existing section pattern: use Framer Motion for animations, Tailwind for styling
