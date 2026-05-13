# aiflowlab — Landing Page

Claude Skills Bundle landing page (Thai market). Built with Next.js 15 + Tailwind v4.

## Quick Start

```bash
npm install
cp .env.example .env.local  # fill in values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint check |
| `npm run test` | Vitest unit tests |

## Project Structure

```
app/
  layout.tsx          # Root layout: fonts, metadata, Header/Footer/Analytics
  page.tsx            # Landing page (22 sections S01-S22)
  globals.css         # Tailwind v4 @theme design tokens
  opengraph-image.tsx # Dynamic OG image (edge runtime)
  sitemap.ts          # /sitemap.xml
  robots.ts           # /robots.txt
  about/              # Static page
  privacy/            # PDPA privacy policy
  terms/              # Terms of service
  contact/            # Contact page
  preview/            # Component storybook (dev only)

components/
  layout/             # Header, Footer, MobileStickyBar
  sections/           # 22 landing page sections (Hero to FinalCTA)
  shared/             # ScrollReveal, Countdown
  ui/                 # Button, Badge, Card, Section, StarRating
  analytics/          # GA4 + FB Pixel scripts

lib/
  data.ts             # All static content (single source of truth)
  analytics.ts        # GA4 + FB Pixel event helpers
  countdown.ts        # localStorage-based 48h deadline
  utils.ts            # cn() = clsx + tailwind-merge
```

## Design Tokens (Tailwind v4)

Colors defined as CSS variables in `globals.css`:
- `bg-bg-base` = #0a0e1a (page background)
- `text-brand-primary` = #00d4c8 (teal)
- `text-brand-accent` = #ffb800 (amber)

See [CLAUDE.md](./CLAUDE.md) for full spec.

## Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full deployment checklist.
