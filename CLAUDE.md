# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking (used in build process)
npx vue-tsc -b
```

## Architecture Overview

This is a Vue 3 + TypeScript + Vite single-page application for Quiltefryd, a quilt and sewing service business in Tønsberg, Norway.

### Key Technologies
- **Vue 3** with Composition API and `<script setup>` syntax
- **TypeScript** with strict type checking enabled
- **Vite** as build tool and development server
- **Vue Router 4** with file-based routing via `vite-plugin-pages`
- **Tailwind CSS** for styling with custom color palette and animations
- **@vueuse/head** for SEO and meta management

### Project Structure

```
src/
├── components/
│   ├── home/           # Homepage-specific components (Hero, ServiceCards, ProcessSteps, TrustSection)
│   ├── layout/         # Layout components (AppHeader, AppNavigation, AppFooter)
│   ├── shared/         # Reusable components (QuiltPattern, ContactForm)
│   └── icons/          # Icon components (SewingIcons, ProcessIcons)
├── pages/              # File-based routing pages (index.vue, om.vue, priser.vue, etc.)
└── types/              # TypeScript type definitions
```

### File-Based Routing
- Uses `vite-plugin-pages` to automatically generate routes from `src/pages/` directory
- Pages are in Norwegian: `index.vue`, `om.vue`, `priser.vue`, `tjenester.vue`, `kontakt.vue`, `personvern.vue`, `cookies.vue`
- Routes are imported as `~pages` in `main.ts`

### Styling System
- **Custom Color Palette**: Quilt-themed colors defined in `tailwind.config.js` (quilt-burgundy, quilt-forest, quilt-sage, quilt-beige, etc.)
- **Custom Animations**: Fade-in, slide transitions, float, pulse-soft animations
- **Typography**: Georgia serif for headings, system sans-serif for body text
- **Background Textures**: Fabric texture image support

### SEO & Meta Management
- Global SEO setup in `App.vue` with Norwegian language settings
- Structured data (JSON-LD) for LocalBusiness schema
- Page-specific meta tags using `useHead()` from @vueuse/head
- Optimized for Norwegian quilting/sewing service business

### Build Configuration
- **Production Base Path**: `/quiltefryd-quilt-and-sewing-service/` for GitHub Pages deployment
- **TypeScript Config**: Strict mode with unused variable detection
- **Path Alias**: `@` points to `src/` directory
- **GitHub Actions**: Automated deployment to GitHub Pages on main branch pushes

### Component Patterns
- All components use Vue 3 Composition API with `<script setup lang="ts">`
- SEO-conscious components use `useHead()` for meta management
- Business-focused content with Norwegian language throughout