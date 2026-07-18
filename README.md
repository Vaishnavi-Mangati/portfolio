# Vaishnavi Mangati — Portfolio

A Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion portfolio.

## Design concept: "Night Court"

A basketball court under stadium lights at night — near-black arena background,
warm amber floodlight as the primary accent, and a cool violet undertone for the
curiosity/creative side. The signature element is the **scoreboard-style Journey
timeline** (Q1 → OT instead of generic 01/02/03 numbering).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you deploy — replace these placeholders

1. **Résumé** — drop your real PDF at `public/resume.pdf` (referenced from the
   Hero and Contact "Download résumé" buttons).
2. **Email / GitHub / LinkedIn** — edit `lib/data.ts` → the `social` object at
   the top of the file. Every link in the site pulls from there.
3. **Project links** — in `lib/data.ts`, each entry in `projects` has a `demo`
   field (currently `"#"`). Point it at your live deployment.
4. **Project screenshots** — `components/Projects.tsx` renders a placeholder
   block where a screenshot/GIF should go. Swap it for a `next/image` of your
   actual product once you have one.
5. **Company logos** — `components/Experience.tsx` renders initials in a
   rounded square as a placeholder; swap for real logo images if you have them.

## Project structure

```
app/
  layout.tsx      → fonts, metadata, SEO (OpenGraph/Twitter)
  page.tsx         → assembles all sections
  globals.css      → base styles + Tailwind directives
components/
  Nav.tsx          → sticky glass navbar
  Hero.tsx         → name reveal, court-line SVG, magnetic CTAs
  About.tsx        → storytelling fragments + stat card
  Journey.tsx       → scoreboard timeline (signature element)
  Skills.tsx       → grouped skill cards with animated bars
  Experience.tsx    → work + mentorship timeline
  Projects.tsx      → deep-dive project cards
  Education.tsx     → degree + certifications
  BeyondCode.tsx    → hobbies reframed as engineering traits
  Contact.tsx       → contact links
  Footer.tsx
  CursorGlow.tsx    → desktop-only spotlight cursor effect
  MagneticButton.tsx→ mouse-follow button interaction
  RevealOnScroll.tsx→ shared scroll-reveal wrapper (Framer Motion)
lib/
  data.ts          → single source of truth for all copy/content
```

## Notes

- All content lives in `lib/data.ts` — update your story there instead of
  hunting through components.
- Respects `prefers-reduced-motion`.
- Fully responsive: mobile, tablet, desktop.
