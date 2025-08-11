# Design Document — Marit Aslesen Quilt & Sewing Services (GitHub Pages)

## 0. Scope and Assumptions

* Target: static, responsive, privacy-respecting website in **Norwegian (Bokmål)**.
* Hosting: **GitHub Pages** (no server-side code).
* Primary conversions: inbound **calls**, **emails**, and **form submissions**; optional **self-booking** via third-party embed.
* Business details:

    * Name: **Marit Aslesen**
    * Email: **[marit@quiltefryd.no](mailto:marit@quiltefryd.no)**
    * Phone: **95 19 50 88**
    * Location: **Tønsberg** (exact address shared upon appointment).
* Services (initial): **Longarm-quilting**, **interiørsøm** (gardiner, puter), **enkle bunadsjobber**, **små reparasjoner/omsøm**.
* Prices: pending; design must accommodate **“fra-priser”** and later detailed tables.
* This design doc aligns to an implied PRD (`@docs/prd.md`): goals, audiences, features. If the PRD deviates, update the sections “IA & Navigation”, “UX Flows”, and “Content Matrix” accordingly.

---

## 1. Objectives and Success Criteria

**Business Objectives**

* Preserve trust from former Quiltefryd customers; attract local referrals.
* Provide a low-friction path to inquire/quote/book.
* Communicate expertise (longarm-maskin, bunadserfaring) with clear examples.

**Measurable Success (first 90 days)**

* ≥ 30 qualified inquiries (telefon/e-post/skjema).
* ≥ 2 min median time on site; ≤ 40% bounce (Home).
* ≥ 10 bookings via embed/link (if booking enabled).

---

## 2. Information Architecture & Navigation

**Top-level Nav (sticky)**

1. **Hjem**
2. **Tjenester**
3. **Priser**
4. **Om Marit**
5. **Kontakt** (CTA-stil i header)

**Footer Nav**

* Kontakt (telefon/e-post, klikkbare)
* Åpningstider/tilgjengelighet (tekst)
* Personvern, Informasjonskapsler (enkle sider/anker)
* Eventuelle sosiale medier

**Sitemap**

* `/` Hjem
* `/tjenester/` Tjenester (anker til undersnitt)

    * `#longarm-quilting`
    * `#interiorsom`
    * `#bunad`
    * `#reparasjon-omsom`
    * `#andre-oppdrag`
* `/priser/` Priser (tabell + “be om tilbud”)
* `/om/` Om Marit (historie, kompetanse, utstyr, ev. sitater)
* `/kontakt/` Kontakt (telefon/e-post, **Formspree** skjema, valgfri **Calendly** embed)
* (Valgfritt senere) `/galleri/` Referanser/arbeid

---

## 3. Detailed UX — Page by Page

### 3.1 Hjem

**Goals:** Instant clarity on tjenester, troverdighet, rask kontakt.

**Hero**

* Overskrift: “Quilt- og sømtjenester i Tønsberg”
* Undertekst: 1–2 linjer: “Longarm-quilting, gardiner og puter, tilpasning av bunad m.m.”
* Primær CTA (knapp): **“Kontakt meg”** → `/kontakt/`
* Sekundær CTA (link): **“Se tjenester”** → `/tjenester/`
* Hero-bilde: lys, stoff/håndverk; fokus på varme og kvalitet.

**Snarveiskort (3–4 kort)**

* Longarm-quilting → anker på Tjenester
* Gardiner og puter → anker
* Bunad og festdrakt → anker
* Reparasjon/omsøm → anker

**“Slik jobber jeg” (3 steg)**

* 1. Ta kontakt → 2. Avtale og pris → 3. Levering/utførelse
* Kort og beroligende tekster; lenker til kontakt og priser.

**Tillitselement**

* Tidligere erfaring (Quiltefryd), utstyr (longarm), lokalt nærvær.

**Sticky kontaktstripe (mobil)**

* Fast synlig bunnstripe: “Ring 95 19 50 88” | “Send e-post”

**Empty-state note**

* Inntil ekte bilder er klare, bruk 1–2 illustrative, varme bilder; alt-tekst på norsk.

---

### 3.2 Tjenester

**Intro**: Kort “Jeg hjelper deg med …”.

**Sekjoner (akkordeon eller separate seksjoner)**

1. **Longarm-quilting**

* Hva jeg tilbyr: kant-til-kant-mønster, vatt/bakstykke, lukkekant.
* Hvordan levere (post/oppmøte), estimert leveringstid.
* “Fra-pris” pr m² (placeholder til prisliste foreligger).
* CTA: “Be om tilbud” → kontakt med forhåndsutfylt emne.

2. **Interiørsøm (gardiner/puter)**

* Eksempler: opplegg, liftgardiner, spesialmål, sofaputer/båtputer.
* Materialer: kunde egne stoffer eller hjelp til innkjøp.
* “Fra-pris” for typiske jobber (placeholder).

3. **Bunad (enkle jobber)**

* Inn/ut, opplegg, reparasjoner, hekter/knapper, fôr.
* Diskré håndtering; avtale prøving.
* Pris etter vurdering; typiske prisintervaller (placeholder).

4. **Reparasjon og omsøm**

* Bukseopplegg, glidelåsbytte, innsving av kjole/jakke.
* Pris varierer; gi tilbud først.

5. **Andre oppdrag**

* Åpen invitasjon: “Fortell om behovet ditt”.

**Mikro-UX**

* Listepunkter, lesbare mellomtitler, kontaktlenker ved hver seksjon.
* “Ofte stilte spørsmål” (FAQ) nederst (leveringstid, betaling, materialer).

---

### 3.3 Priser

**Intro**: “Konkurransedyktige priser. Du får tilbud før oppstart.”

**Prisoppsett (tabell/list)**

* Longarm-quilting: **fra** kr *X* / m² (kant-til-kant). Tillegg: lukkekant per løpemeter; vatt/bakstykke pr meter.
* Gardiner: **fra** kr *X* per lengde (opplegg).
* Putetrekk: **fra** kr *X* per stk.
* Bunad: estimat etter vurdering.
* Reparasjon: typiske intervaller.

**Merknader**

* Materialer/tillegg tydelig merket.
* Estimert leveringstid, hastegebyr (om aktuelt).

**Primary CTA**

* “Be om tilbud” → forankret til `/kontakt/` med preutfylte felt.

---

### 3.4 Om Marit

**Narrativ**

* Erfaring fra Quiltefryd, lidenskap for kvalitet, lokalt forankret.
* Utstyrshøydepunkt: longarm-maskin (kapasitet, fordeler).
* Arbeidsprinsipper: nøyaktighet, kommunikasjon, punktlighet.

**Visuelle elementer**

* Portrett eller arbeidsfoto (senere).
* Sitat/uttalelse (legges til når tilgjengelig).

**CTA**

* “Ta kontakt” → `/kontakt/`

---

### 3.5 Kontakt

**Kontaktblokk**

* Telefon (tel:), E-post (mailto:), Tønsberg (adresse ved avtale).
* Tilgjengelighet: “Hverdager kl. 10–18 (etter avtale).”

**Kontaktskjema (Formspree-kompatibelt)**

* Felter: Navn\*, E-post\*, Telefon, Tjeneste (select), Beskrivelse\*, Ønsket tidsrom (fri tekst), Samtykke personvern (checkbox).
* Anti-spam: honeypot, tidsstempel, minimalistisk reCAPTCHA (valgfritt).
* Feil-/suksessmeldinger på norsk; aria-live region for skjermlesere.

**Valgfritt: Booking (Calendly)**

* Inline embed ELLER knapp “Bestill tid” → modal/popup.
* Klart språk om hva som bookes (konsultasjon/innlevering).

**Kart**

* Ikke nødvendig; link “Få veibeskrivelse når avtale er satt”.

---

## 4. Content Design (Norwegian microcopy)

**Primære CTA-tekster**

* “Kontakt meg”
* “Be om tilbud”
* “Bestill tid” (hvis booking)
* “Send forespørsel”

**Feilmeldinger**

* “Vennligst fyll ut navn.”
* “Ugyldig e-postadresse.”
* “Beskriv kort hva du trenger hjelp til.”

**Suksess**

* “Takk! Jeg svarer vanligvis innen 1–2 virkedager.”

**Personverntekst (kort)**

* “Opplysningene brukes kun til å besvare henvendelsen. Data deles ikke med tredjeparter utover valgt skjemaløsning (f.eks. Formspree).”

---

## 5. Visual Design System (Design Tokens)

**Color Tokens**

* `--color-bg`: `#FAF8F5` (lys, varm bakgrunn)
* `--color-surface`: `#FFFFFF`
* `--color-text`: `#1A1A1A`
* `--color-muted`: `#6B6B6B`
* `--color-primary`: `#7B2C2C` (burgunder)
* `--color-primary-contrast`: `#FFFFFF`
* `--color-secondary`: `#2F5D50` (dus grønn)
* `--color-accent`: `#C69C6D` (varm gull)
* `--color-border`: `#E6E1DB`
* States:

    * `--color-success`: `#2E7D32`
    * `--color-warning`: `#B26A00`
    * `--color-error`: `#B00020`

**Typography**

* Body: system stack (personvern/ytelse):
  `font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;`
* Headings (optional serif accent):
  `Georgia, Cambria, "Times New Roman", Times, serif;`
* Sizes: `--fs-300: 14px`, `--fs-400: 16px`, `--fs-500: 18px`, `--fs-600: 22px`, `--fs-700: 28px`, `--fs-800: 34px`
* Line-height: 1.5 body, 1.25 headings.

**Spacing**

* Scale (4-pt): `4, 8, 12, 16, 24, 32, 48, 64`
* Radii: `--radius-sm: 6px`, `--radius-md: 12px`, `--radius-lg: 20px`
* Shadows (soft): “card” and “nav” elevation; subtle only.

**Components**

* Buttons: primary (burgunder), secondary (outline grønn), text link.
* Cards: surface + shadow + 16px padding + 12px radius.
* Badges/chips: for “Fra-pris”, “Populær”.

**Accessibility**

* Contrast ≥ 4.5:1 for body text; test primary on white and white on primary for CTAs.
* Focus outlines visible; `:focus-visible` styles.
* `lang="nb"` on `<html>`.
* Reduced motion: respect `prefers-reduced-motion`.

---

## 6. Interaction & States

**Navigation**

* Desktop: sticky top bar, hover underline, active indication.
* Mobile: hamburger → slide-down menu; focus trap in menu; ESC/overlay close.

**Forms**

* Inline validation on blur; serverless submit → success state with clear confirmation.
* Error states grouped (ARIA), field level hints.
* Honeypot hidden via CSS (`display:none` or `aria-hidden=true` with off-screen position).

**Buttons**

* Hover: slight elevation or tint.
* Disabled: 60% opacity, no hover effects.

**Media**

* Images responsive (`max-width:100%`); provide 1x/2x sources if possible.
* Alt-tekst alltid.

---

## 7. Technical Approach (Static, GH Pages)

**Stack**

* **Option A (simplest):** Hand-crafted HTML/CSS + minimal JS.
* **Option B:** Jekyll on GH Pages (for layouts/partials, content in Markdown, YAML front matter).

**Recommended structure (works for A & B)**

```
/ (repo root)
  /assets/
    /css/  (one compiled .css)
    /js/   (forms, nav menu, calendly init)
    /img/  (hero, placeholders, later portfolio)
  index.html
  tjenester.html
  priser.html
  om.html
  kontakt.html
  privacy.html (kort)
  cookies.html (kort, hvis nødvendig)
  CNAME (hvis custom domain)
```

**Performance**

* Single CSS file (\~<50KB gz).
* Defer JS; no blocking fonts (system fonts).
* Compress images; lazy-load non-critical.

**Analytics (optional)**

* Plausible/umami (EU-friendly) via single `<script>`; if used, add short cookies notice.
  If no tracking, note “vi bruker ikke informasjonskapsler” (med unntak av tredjeparts booking).

**SEO**

* Per-page `<title>` og meta description (norsk).
* Open Graph: tittel, beskrivelse, bilde.
* LocalBusiness schema (JSON-LD), se §10.

---

## 8. Third-Party Integrations (Static-friendly)

**Email Form — Formspree (recommended)**

* Action: unique endpoint.
* Hidden fields: `_subject`, `_replyto`, `origin`.
* Success redirect → `/kontakt/?takk=1`.

**Booking — Calendly (optional)**

* Inline widget eller popup link.
* Beskriv at booking er for konsultasjon/innlevering; e-postbekreftelser går via Calendly.
* Notér i personvern at tredjepart kan sette cookies.

**No-JS fallback**

* “Mailto” lenke med preutfylt emne/tekst for brukere som ikke vil bruke skjema.

---

## 9. Content Matrix (owner: you; status to fill)

| Page      | Section                     | Content Type | Owner | Status              |
| --------- | --------------------------- | ------------ | ----- | ------------------- |
| Hjem      | Hero (title, subtitle, CTA) | Copy + image | You   | Draft               |
| Hjem      | Service shortcuts           | Copy + icons | You   | Draft               |
| Tjenester | Longarm-quilting            | Copy         | You   | Draft               |
| Tjenester | Interiørsøm                 | Copy         | You   | Draft               |
| Tjenester | Bunad                       | Copy         | You   | Draft               |
| Tjenester | Reparasjon/omsøm            | Copy         | You   | Draft               |
| Priser    | Table + notes               | Copy         | You   | **Wait for prices** |
| Om        | Story, equipment, values    | Copy + image | You   | Draft               |
| Kontakt   | Contact block + form        | Copy + form  | You   | Draft               |
| Legal     | Personvern, Cookies         | Copy         | You   | Draft               |

---

## 10. Example Copy (Norwegian)

**Hjem — Hero**

* Tittel: *Quilt- og sømtjenester i Tønsberg*
* Undertittel: *Longarm-quilting, gardiner og puter, bunadsjustering og små reparasjoner.*
* CTA: *Kontakt meg*

**Tjenester — Longarm-quilting (utdrag)**

> Jeg quilter teppene dine på longarm-maskin med pene, jevne sømmer.
> Kant-til-kant-mønster i flere varianter. Jeg kan montere vatt og bakstykke, og sy på lukkekant om ønskelig. Levering etter avtale eller per post.

**Priser — Intro**

> Konkurransedyktige priser og tydelige avtaler. Du får alltid et tilbud før jeg starter.

**Kontakt — Intro**

> Har du et prosjekt på gang? Send meg en melding eller ring – så finner vi en god løsning.

*(Når prislisten er klar, erstatt “fra-” placeholders med konkrete tall.)*

---

## 11. Accessibility & Compliance Checklist

* `lang="nb"`; correct titles and landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`).
* Keyboard navigation: menu toggle/focus trap, skip-to-content link.
* Labels tied to inputs; error summary with links; `aria-live="polite"` for form status.
* Color contrast tested for all text/UI states.
* Motion minimized; respect `prefers-reduced-motion`.
* Privacy note: purpose of data, storage, contact method; link to privacy page.
* Cookie note **only if** using analytics/Calendly cookies (otherwise, state “ingen informasjonskapsler i bruk” eller “kun nødvendige fra tredjepart ved booking”).

---

## 12. Schema.org (LocalBusiness/ProfessionalService — sample JSON-LD)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Quiltefryd – Quilt og Søm ved Marit Aslesen",
  "image": "https://<domain>/assets/img/og-hero.jpg",
  "email": "marit@quiltefryd.no",
  "telephone": "+47 95195088",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tønsberg",
    "addressCountry": "NO"
  },
  "areaServed": "NO",
  "url": "https://<domain>/",
  "description": "Longarm-quilting, interiørsøm (gardiner, puter) og enkle bunadsjobber. Erfaren quilter, tidligere driver av Quiltefryd.",
  "priceRange": "NOK"
}
</script>
```

---

## 13. QA Plan (Pre-launch)

* **Content:** typos, consistent terminology (Bokmål), contact data correct.
* **Forms:** validate, submit to Formspree test inbox; confirm receipt.
* **Booking:** load and book a test slot; mobile test.
* **Responsive:** 360px, 768px, 1024px, 1440px breakpoints.
* **Accessibility:** keyboard through all interactive elements; screen reader spot-check (NVDA/VoiceOver).
* **Performance:** Lighthouse ≥ 90 on Performance/Best Practices/SEO/Accessibility.
* **SEO:** unique `<title>`/meta description per page; OG tags; JSON-LD present on Home.
* **Legal:** privacy page reflects actual tools (Formspree/Calendly/analytics).

---

## 14. Delivery Plan (Fast Track, 2–3 days)

**Day 1**

* Repo scaffolding, tokens, base layout, header/footer.
* Home + Tjenester pages; placeholder images; basic styles.

**Day 2**

* Kontakt (Formspree wired), optional Calendly; Priser (with placeholders); Om.
* SEO/OG tags; JSON-LD; accessibility pass; mobile QA.

**Day 3**

* Image optimization; copy polish; add privacy/cookies pages.
* Lighthouse tuning; final QA; DNS/CNAME setup (if custom domain).

---

## 15. Acceptance Criteria (Go/No-Go)

* Content matches IA; Norwegian copy present for all sections.
* Contact options: tel/mail clickable; form submits and confirms.
* Optional booking working (or clearly disabled and hidden).
* Pages render correctly on mobile/desktop; no layout overflow.
* Accessibility basics met (see §11).
* Pagespeed: images optimized; no blocking fonts.
* SEO: meta/OG present; JSON-LD valid.
* Footer shows updated year; business name and contact.

---

## 16. Risks & Mitigations

* **Pending prices** → Use “fra-pris” + “ta kontakt”; update post-launch.
* **Third-party downtime (Formspree/Calendly)** → Provide mailto and phone as permanent fallbacks.
* **Image licensing** → Use placeholders you own; replace with Marit’s work ASAP.
* **Privacy** → Keep stack minimal; avoid invasive analytics; disclose third-party embeds.

---

## 17. Handoff Notes (to junior engineer / AI agent)

* Use this doc as source of truth for IA, copy blocks, tokens, and components.
* Keep CSS in a single file; prefer utility classes or small BEM blocks.
* Anchor IDs on Tjenester sections must match nav links.
* Ensure tel/mail links, form action, and success states are wired before launch.
* Keep all strings in Norwegian; wrap any future English alt text.

---

If you want, I can now:

* Produce **ready-to-paste HTML/CSS** skeletons for each page (with Norwegian copy), **or**
* Generate a **Jekyll** version with layouts/partials and front matter to ease updates.
