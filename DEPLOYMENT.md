# Deployment Checklist

## Pre-deploy

- [ ] Set env vars in Vercel project settings:
  - `NEXT_PUBLIC_STRIPE_CHECKOUT_URL` — Stripe Checkout or Payment Link URL
  - `NEXT_PUBLIC_GA_ID` — Google Analytics 4 Measurement ID (G-XXXXXXXX)
  - `NEXT_PUBLIC_FB_PIXEL_ID` — Facebook Pixel ID
  - `NEXT_PUBLIC_SITE_URL` — Production URL e.g. `https://aiflowlab.co`
- [ ] Update `metadataBase` URL in `app/layout.tsx` (remove example.com placeholder)
- [ ] Update `sitemap.ts` base URL constant
- [ ] Update `robots.ts` sitemap URL
- [ ] Replace placeholder LINE OA URL in `app/contact/page.tsx`
- [ ] Run `npm run build` locally — zero errors
- [ ] Run `npm run test` — all tests pass

## Deploy

1. Push to `main` → Vercel auto-deploys via GitHub integration
2. Verify preview URL works end-to-end
3. Add custom domain in Vercel → Domains settings
4. DNS:
   - **A record**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`

## Post-deploy

- [ ] Lighthouse mobile audit — target ≥95 across all 4 categories
- [ ] Test Stripe Checkout flow end-to-end (test mode first, then live)
- [ ] Test countdown timer across multiple devices / browsers
- [ ] Submit sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`
- [ ] Verify GA4 firing in production (Realtime report)
- [ ] Verify FB Pixel firing (Events Manager)
- [ ] Test on real iOS Safari + Android Chrome

## Lighthouse Targets

| Category | Target |
|---|---|
| Performance | ≥ 95 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | ≥ 95 |
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |

## Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_STRIPE_CHECKOUT_URL` | Yes | Stripe Checkout link for purchase |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics 4 ID |
| `NEXT_PUBLIC_FB_PIXEL_ID` | Optional | Facebook Pixel ID |
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical site URL (no trailing slash) |
