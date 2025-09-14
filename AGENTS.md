# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` — File‑based routes via `vite-plugin-pages` (e.g., `src/pages/index.vue` → `/`, `src/pages/kontakt.vue` → `/kontakt`).
- `src/components/` — Reusable UI (subfolders like `layout/`, `home/`, `icons/`).
- `src/assets/` — Bundled assets; prefer lowercase names. Use `public/` for static files served as‑is.
- `src/types/` — Type declarations (e.g., `vue-router.d.ts`).
- `docs/` — Design, PRD, and roadmap docs. `dist/` — Production build output.
- Aliases: `@` → `src` (example: `import AppHeader from '@/components/layout/AppHeader.vue'`).

## Build, Test, and Development Commands
- `npm ci` — Install dependencies (CI‑friendly) or `npm install` locally.
- `npm run dev` — Start Vite dev server.
- `npm run build` — Type‑check (`vue-tsc -b`) and create production build.
- `npm run preview` — Serve the production build locally.
- Type‑check only: `npx vue-tsc --noEmit`.

## Coding Style & Naming Conventions
- Language: Vue 3 SFCs with `<script setup lang="ts">`; TypeScript is `strict` (no `any`, no unused).
- Indentation: 2 spaces. Keep components small and composable.
- Components: PascalCase filenames (e.g., `ServiceCards.vue`). Pages: kebab/flat lowercase (e.g., `kontakt.vue`).
- Prefer Tailwind utility classes; extend shared styles in `src/style.css` and theme in `tailwind.config.js`.

## Testing Guidelines
- Automated tests are not yet configured. For now: verify changes via `npm run dev` and `npm run preview`.
- If adding tests, prefer Vitest + Vue Test Utils; name tests alongside code or in `tests/` with `*.spec.ts`.

## Commit & Pull Request Guidelines
- Conventional Commits are used (e.g., `feat: add ServiceCards grid to home`, `fix: correct header spacing`).
- PRs should include: clear description, linked issues, screenshots/GIFs for UI changes, and notes on behavior/risks.
- Keep PRs focused and incremental; update docs under `docs/` when relevant.

## Security & Configuration Tips
- Vite base path is set for GitHub Pages deployment; do not change unless the repo slug changes.
- Use Vite env vars with `VITE_` prefix and access via `import.meta.env`.
- Avoid committing secrets; prefer `.env.local` (git‑ignored).

