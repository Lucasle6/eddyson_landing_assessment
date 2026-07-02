# eddyson — Partner Landing Page

Web Developer assessment (Stage 2). A pixel-perfect implementation of the eddyson
Partner Landing Page from the provided Figma, content-managed with **Prismic** and
rendered with **Next.js** (App Router).

- **Part A — Core task:** the full landing page built pixel-perfect from the Figma,
  including the footer.
- **Part B — Responsive bonus:** the page adapts across mobile, tablet and desktop.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, React 19) |
| CMS | Prismic (Slice Machine) |
| Styling | Tailwind CSS v4 (`@theme` design tokens) |
| Fonts | Quando, DM Sans, DM Mono via `next/font` (self-hosted) |
| Language | TypeScript |

> **Why Next.js and not Angular?** The brief allows either ("*You are welcome to
> build this assessment in either Angular or Next.js*"). I chose Next.js because it
> is Prismic's primary supported framework and the role explicitly involves
> migrating eddyson's site from Angular to Next.js, so it reflects the direction of
> the work.

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The page is a Prismic **Single Type** (`partner_page`) and fetches its content at
request time, so it renders against the live Prismic content. No environment
variables are required to run it — the repository name is read from
`slicemachine.config.json`.

Other scripts:

```bash
npm run build        # production build
npm start            # serve the production build
npm run lint         # ESLint
npm run slicemachine # open Slice Machine (http://localhost:9999)
```

## Content model (Prismic)

The page is composed of five reusable **slices** rendered through a `SliceZone`:

| Slice | Section | Notable fields |
|---|---|---|
| `Hero` | Hero | title, topline, copy, cta_primary/secondary, UI images |
| `PartnerProgram` | 3-phase program | topline, headline, copy, `cards` group (Connect / Qualify / Launch) |
| `EdiExpertise` | Expertise + benefits | headline, copy, quote, `cards` group (6 benefit cards) |
| `ContactForm` | Contact | headline, copy, cta_label |
| `Footer` | Footer | logo, address, contact numbers, links, social links |

All editorial copy is driven by Prismic and matches the brief verbatim.

## Project structure

```
app/
  layout.tsx        Root layout: fonts + global metadata
  page.tsx          SiteHeader + SliceZone
  globals.css       Tailwind v4 + design tokens (@theme)
src/
  components/
    SiteHeader.tsx  Announcement bar + logo (global chrome, static)
  slices/           One folder per Prismic slice
customtypes/        Prismic Single Type definition
prismicio.ts        Prismic client
public/Images/      Section assets (hero, partner-program, edi-expertise, footer)
design/             Figma reference (specs + exported assets)
```

## Decisions worth explaining

- **Design tokens.** Brand colors (`#FF8831`, ink greys, `#F8F8F8` canvas) and the
  three type families are declared once in `globals.css` via Tailwind v4 `@theme`,
  then used as utilities (`bg-brand`, `text-ink`, `font-serif`, …).
- **Desktop-exact, mobile-first.** The Figma is a fixed 1495px desktop design. Each
  slice reproduces it precisely at the `xl` breakpoint and degrades gracefully to a
  single-column mobile layout, with tablet handled in between (Part B).
- **The contact form is functional logic, not Prismic content.** The nine fields
  (name, company, email, phone, partner type, industries, system focus, questions,
  privacy) are implemented in code, matching the brief's copy exactly. Prismic only
  owns the surrounding editorial text and the submit label. Submission is not wired
  to a backend yet — the handler simply prevents the default submit (see TODO).
- **Composite decorative assets.** Some Figma elements are intricate rendered
  artwork rather than clean geometry — the hero UI cluster, the client-logo strip,
  the PartnerProgram background curves and the ContactForm grid — so they are used
  as exported images for exact fidelity.
- **Logo color variants.** The source eddyson SVG is all-white, so light/dark
  header/footer variants live in `public/` (orange mark + grey vs white wordmark).

## Notes / known deltas

- The hero headline wraps as *"Your partner in / the EDI jungle"* rather than the
  Figma's *"Your partner / in the EDI jungle"* — with the shipped Quando web font the
  phrase *"in the EDI jungle"* is exactly as wide as its box, so no single width
  reproduces the Figma break. Purely a wrapping nuance.
- The contact form has no backend; wiring the submission to a route handler / CRM is
  the natural next step.
