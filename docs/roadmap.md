# Phase 0 — Project Setup (½ day)

**Objective**
Create a clean, reproducible baseline for a static site on GitHub Pages.

**Tasks**

* Create GitHub repo (public or private).
* Enable **GitHub Pages** (main branch, `/root`); add `CNAME` if using custom domain.
* Commit base structure:

  ```
  /assets/css/   main.css
  /assets/js/    main.js
  /assets/img/   (placeholders)
  index.html
  tjenester.html
  priser.html
  om.html
  kontakt.html
  privacy.html
  robots.txt
  sitemap.xml
  CNAME (optional)
  ```
* Add `.editorconfig`, `.gitignore`.
* Add README with build/commit conventions.

**Deliverables**
Repo online, Pages published, base files present.

**Acceptance**
Site renders “Hello” pages over HTTPS at intended domain.

**AI Prompt**

> You are my web scaffolding assistant. Create a GitHub Pages–compatible static site skeleton with the file tree above. Add minimal semantic HTML5 in each page (header/nav/main/footer), Norwegian `lang="nb"`, and a shared navbar linking the five pages. Include a neutral placeholder hero on index.html. Output all files with complete HTML/CSS/JS content blocks and explain where to paste each.

---

# Phase 1 — Design Tokens & Global Layout (½ day)

**Objective**
Implement the visual system (colors, spacing, typography) and responsive layout.

**Tasks**

* Add CSS custom properties (color tokens, spacing, radii).
* Implement container widths, grid utilities, buttons, cards, and typography scale.
* Sticky header; mobile nav (hamburger).
* Footer with contact info.

**Deliverables**
`assets/css/main.css` with tokens & components; responsive header/footer.

**Acceptance**

* Navbar works on mobile & desktop.
* Color contrast ≥ 4.5:1 for body text.

**AI Prompt**

> Implement a CSS design system using tokens: colors, spacing, radii, typography (as per design doc). Build utilities for grid/flex, a primary button, secondary outline button, and card styles. Add a mobile hamburger menu with accessible focus handling. Return the updated `main.css` and necessary HTML updates.

---

# Phase 2 — Page Builds (1 day)

**Objective**
Build all pages with semantic, accessible sections and Norwegian copy.

**Tasks**

* **Hjem**: hero, service cards, “slik jobber jeg”, trust block.
* **Tjenester**: five sections with anchor IDs, FAQs.
* **Priser**: table with “fra-priser” placeholders + notes.
* **Om**: story, equipment, values.
* **Kontakt**: contact block, form placeholder, booking placeholder.
* Add breadcrumbs (where relevant), skip-to-content link.

**Deliverables**
All pages filled with draft copy (Norwegian), ready for content edits.

**Acceptance**
Keyboard navigation covers all interactive elements; headings follow logical order.

**AI Prompt**

> Fill each HTML page with semantic sections and Norwegian microcopy as per the design document. Add landmark roles, heading hierarchy, and a “skip to content” link. Include anchor IDs on Tjenester. Return complete HTML for all pages.

---

# Phase 3 — Assets Integration (½ day)

**Objective**
Integrate the high-res images (Hero, Services, Contact) and prepare responsive variants.

**Tasks**

* Export 3–4 sizes per image (e.g., 3840, 1920, 1280, 768 px width; WebP + fallback JPG).
* Implement `<picture>` with `srcset`, proper `alt`, and lazy-loading for non-hero.
* Ensure CLS-safe aspect ratios via intrinsic size attributes.

**Deliverables**
Optimized images under `assets/img/`, `<picture>` blocks placed.

**Acceptance**
Lighthouse Performance ≥ 90 on desktop/mobile.

**AI Prompt**

> Given the images in `/assets/img/raw/`, generate responsive WebP + JPG versions (3840/1920/1280/768 widths), name them `hero-longarm-{w}.webp` etc. Provide `<picture>` snippets for each placement with descriptive Norwegian `alt`. Include lazy loading and width/height attributes to avoid layout shift.

---

# Phase 4 — Contact Form & Optional Booking (½ day)

**Objective**
Make inquiries easy on a static site.

**Tasks**

* Configure **Formspree** (or similar).
* Build `kontakt.html` form: Navn\*, E-post\*, Telefon, Tjeneste (select), Beskrivelse\*, Ønsket tidsrom, personvern-checkbox.
* Add honeypot field + minimal client validation; success/failure messaging.
* Optional: **Calendly** inline or popup embed.

**Deliverables**
Working contact form (emails to `marit@quiltefryd.no`), optional booking embed.

**Acceptance**

* Form submits and returns confirmation; spam protection works.
* If Calendly used, loads without blocking and is clearly labeled.

**AI Prompt**

> Wire a static contact form using Formspree to `marit@quiltefryd.no`. Add field validation, an invisible honeypot, ARIA live region for status, and a success state. Provide the JS needed for validation and the exact HTML form markup. Optionally embed a Calendly inline widget beneath the form; ensure it’s non-blocking.

---

# Phase 5 — SEO, Metadata, and Schema (½ day)

**Objective**
Ensure findability and rich preview.

**Tasks**

* Per-page `<title>` + meta descriptions (Norwegian).
* OG/Twitter meta with hero image.
* `sitemap.xml`, `robots.txt`.
* LocalBusiness JSON-LD on `index.html`.
* Clickable `tel:` and `mailto:` everywhere.

**Deliverables**
Meta added to all pages; JSON-LD block implemented.

**Acceptance**
Facebook/Twitter link previews render correctly; schema validates in Google Rich Results test.

**AI Prompt**

> Add SEO metadata to each page (unique titles and meta descriptions in Norwegian), Open Graph/Twitter tags on index, and a LocalBusiness JSON-LD block with name, phone, email, locality “Tønsberg”, and URL. Generate a minimal `sitemap.xml` and `robots.txt`. Return the HTML head snippets and the two files.

---

# Phase 6 — Accessibility & UX Polish (½ day)

**Objective**
Meet baseline WCAG AA practices.

**Tasks**

* Keyboard test: menu, form, modal.
* Focus styles, `:focus-visible`.
* `prefers-reduced-motion` handling.
* Form labels, error summaries with anchors.
* Color contrast verification.

**Deliverables**
Updated CSS/JS and any ARIA attributes.

**Acceptance**
NVDA/VoiceOver spot checks pass; all interactive elements focusable and labeled.

**AI Prompt**

> Audit pages for a11y: ensure focus order, visible focus styles, reduced-motion handling, ARIA for form error summaries (`aria-live="polite"`), and color contrast ≥ 4.5:1. Provide a diff of CSS/HTML changes.

---

# Phase 7 — Content Finalization (½ day)

**Objective**
Replace placeholders with the real price list and any final copy.

**Tasks**

* Insert final prices on `priser.html` (tables with notes).
* Update service descriptions if needed.
* Add temporary “Kontakt for pris” where unknown.
* Proofread (Bokmål).

**Deliverables**
Final copy in all sections.

**Acceptance**
No “lorem ipsum” left; all links and anchors valid.

**AI Prompt**

> Replace all placeholder texts with the provided Norwegian copy and the finalized price table. Ensure consistent tone and terminology (Bokmål). Return only the updated HTML fragments that changed.

---

# Phase 8 — QA & Performance (½ day)

**Objective**
Ship with confidence.

**Tasks**

* Cross-browser/device checks (Chrome, Safari, Firefox, iOS/Android).
* Lighthouse (mobile/desktop).
* Validate HTML/CSS.
* Broken link check.
* Fallbacks without JS.

**Deliverables**
QA report with screenshots and scores; fixes committed.

**Acceptance**

* Lighthouse: Perf/Best/SEO/Accessibility ≥ 90.
* No console errors; no broken internal links.

**AI Prompt**

> Run a headless Lighthouse audit on each page (mobile & desktop). Report scores and top issues, then propose code fixes. Also run an HTML/CSS validator and list errors. Provide corrected code snippets.

---

# Phase 9 — Launch & DNS (¼ day)

**Objective**
Go live on the final domain.

**Tasks**

* Add `CNAME` with `quiltefryd.no` (or chosen domain).
* Configure DNS: `A` for apex (GitHub Pages IPs) + `CNAME` for `www`.
* Verify HTTPS and canonical redirects.
* Final smoke test.

**Deliverables**
Live site at custom domain with HTTPS.

**Acceptance**

* `https://quiltefryd.no` loads; `http` → `https`.
* `www` → apex (or vice versa) canonicalized.

**AI Prompt**

> Provide the exact DNS records for GitHub Pages (A records for apex, CNAME for www) and confirm how to add `CNAME` file. Outline a test plan to verify HTTPS, redirects, and canonical URLs post-DNS cutover.

---

# Phase 10 — Post-Launch (ongoing)

**Objective**
Stability, updates, and performance hygiene.

**Tasks**

* Optional privacy-friendly analytics (Plausible/Umami).
* Set up GitHub Issues for incoming tasks (gallery, testimonials).
* Image additions: compress and update `srcset`.
* Quarterly a11y/perf review.

**Deliverables**
Issue backlog and a simple maintenance checklist.

**Acceptance**
No regressions; changes flow via PRs with review.

**AI Prompt**

> Create a maintenance checklist (monthly/quarterly) for a static site on GitHub Pages covering content updates, image optimization, broken link checks, Lighthouse audits, and a11y reviews. Output as a Markdown file `MAINTENANCE.md`.

---

## Parallel Workstreams (optional)

* **Gallery build**: lightbox grid for future work photos.
* **Social embeds**: link to FB/IG; avoid heavy iframes unless needed.
* **Translations**: prepare structure for future English page versions.

**AI Prompt (Gallery)**

> Build a responsive gallery grid with a lightweight vanilla JS lightbox (no dependencies), keyboard accessible, images from `/assets/img/gallery/*`. Provide HTML/CSS/JS and explain how to add new items.

---

## Branching & Review

* Branch per phase: `feat/phase-1-tokens`, `feat/phase-2-pages`, …
* PR template checklist (a11y, perf, links, copy).
* Require 1 review (you or AI).
* Tag releases: `v1.0-launch`.

**AI Prompt (PR checklist)**

> Generate a GitHub PR template (Markdown) with checkboxes for: a11y basics, responsive checks, Lighthouse ≥ 90, broken links, Norwegian copy proofread, SEO meta present, JSON-LD validated. Save as `.github/pull_request_template.md`.

---

## Risk Register & Mitigations

* **Pending price list** → Show “fra-priser” + clear “kontakt for tilbud”.
* **Third-party form/booking downtime** → Always show `tel:` and `mailto:` as primary fallbacks.
* **Performance regressions** → Enforce image budgets and Lighthouse gate.
* **Accessibility gaps** → Schedule a quick manual pass before each release.

---

## Acceptance Criteria (Go Live)

* All pages complete in Norwegian; real contact details present.
* Contact form sends mail to `marit@quiltefryd.no` and confirms success.
* Optional booking present or deliberately omitted.
* Images optimized with responsive `srcset`; no layout shifts.
* SEO metadata + JSON-LD valid; sitemap + robots live.
* Accessibility & Lighthouse targets met.

---

If you want, I can generate **ready-to-paste code** for Phases 1–3 (layout, tokens, pages) or prepare **responsive image variants** and `<picture>` snippets for your four images immediately.
