# GEMINI.md

## Project Overview

This is a Vue 3 and TypeScript project, built with Vite. It's a website for "Quiltefryd", a quilting and sewing service. The project uses Tailwind CSS for styling and `vue-router` for routing, with routes being automatically generated from files in the `src/pages` directory by `vite-plugin-pages`. The project also uses `@vueuse/head` for managing the document head and SEO metadata.

## Building and Running

### Development

To run the project in development mode, use the following command:

```bash
npm run dev
```

This will start a development server with hot module replacement.

### Build

To build the project for production, use the following command:

```bash
npm run build
```

This will create a `dist` directory with the optimized and minified assets.

### Preview

To preview the production build locally, use the following command:

```bash
npm run preview
```

## Development Conventions

### Routing

The project uses file-based routing with `vite-plugin-pages`. New pages can be created by adding `.vue` files to the `src/pages` directory. For example, `src/pages/about.vue` will create an `/about` route.

### Styling

The project uses Tailwind CSS for styling. Customizations to the default Tailwind configuration can be found in `tailwind.config.js`. This includes a custom color palette, fonts, and animations.

### Components

Reusable UI components are located in the `src/components` directory. The project has a clear structure for components, with subdirectories for layout, shared components, and components specific to certain pages.

### SEO

The project uses `@vueuse/head` to manage the document head. Global SEO metadata is configured in `src/App.vue`. For page-specific metadata, the `useHead` composable can be used within each page component.
