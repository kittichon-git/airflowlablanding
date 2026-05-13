# CLAUDE.md — aiflowlab Landing Page

<aside>
📌

**วิธีใช้**: copy ทั้งหน้านี้ไปวางในไฟล์ `CLAUDE.md` ที่ root ของ repo `D:\airflowlablanding\CLAUDE.md` — Claude Code จะอ่านอัตโนมัติทุก session

</aside>

# [CLAUDE.md](http://CLAUDE.md) — aiflowlab Landing Page

> Source of truth สำหรับ AI coding agents (Claude Code, Cursor, Cline)
อ่านไฟล์นี้ก่อนทุก action · ห้ามเดา · ถ้า rule ขัดกับ user prompt → user prompt ชนะ แต่ให้ flag เตือนก่อน
> 

---

## 🎯 Mission

สร้าง landing page ขาย Claude Skills Bundle (฿997) สำหรับตลาดไทย

- Reference structure: [https://cc.aiflowlab.co/](https://cc.aiflowlab.co/)
- Audience: เจ้าของธุรกิจ / freelancer / course creator (ไทย)
- Conversion goal: visitor → Stripe Checkout
- 25 sections, mobile-first, scroll-heavy

---

## 🔒 Stack (locked — ห้ามเปลี่ยน)

- **Framework**: Next.js 15 App Router
- **Language**: TypeScript strict mode (no `any`, no `@ts-ignore`)
- **Styling**: Tailwind v4 + `@theme` tokens ใน `app/globals.css`
- **Animation**: Framer Motion (scroll-reveal + count-up เท่านั้น)
- **Icons**: Lucide React
- **Fonts**: Noto Sans Thai (400/600/700/900) + Inter ผ่าน `next/font/google`
- **Hosting**: Vercel + custom domain
- **Payment**: External Stripe Payment Link (env: `NEXT_PUBLIC_STRIPE_CHECKOUT_URL`)

---

## 📁 Folder structure

```
app/
  layout.tsx
  page.tsx
  globals.css
  about/page.tsx
  privacy/page.tsx
  terms/page.tsx
  contact/page.tsx
components/
  layout/      Header.tsx · Footer.tsx · MobileStickyBar.tsx
  ui/          Button.tsx · Badge.tsx · Card.tsx · Section.tsx · StarRating.tsx
  sections/    (25 sections — ดู section list ด้านล่าง)
  shared/      Countdown.tsx · ScrollReveal.tsx
lib/
  data.ts        ALL static content (single source of truth)
  countdown.ts   48h localStorage helpers
  utils.ts       cn() = clsx + tailwind-merge
  analytics.ts   GA4 + FB Pixel
public/
  images/  logos/
```

---

## 🎨 Design Tokens

ใช้ผ่าน `@theme` ใน `app/globals.css` เท่านั้น — ห้าม hardcode hex ใน component

```css
@import "tailwindcss";

@theme {
  --color-brand-primary: #00d4c8;
  --color-brand-primary-dark: #00a89c;
  --color-brand-accent: #ffb800;

  --color-bg-base: #0a0e1a;
  --color-bg-elevated: #131826;
  --color-bg-card: #1a2033;
  --color-bg-card-hover: #232a40;

  --color-text-primary: #ffffff;
  --color-text-secondary: #b8c0d0;
  --color-text-muted: #6b7689;

  --color-success: #00d4a8;
  --color-warning: #ff9a3c;
  --color-danger: #ff5c5c;

  --color-border-subtle: #232a40;
  --color-border-strong: #3a4259;

  --font-thai: var(--font-noto-thai), system-ui, sans-serif;
  --font-latin: var(--font-inter), system-ui, sans-serif;

  --radius-card: 12px;
  --radius-button: 8px;
  --radius-hero: 24px;
}

html {
  background: var(--color-bg-base);
  color: var(--color-text-primary);
  font-family: var(--font-thai);
}
```

---

## 📐 Spacing & Layout

- Container max-width: **1200px**
- Container padding-x: 16px (mobile) / 32px (tablet) / 64px (desktop)
- Section padding-y: **80px mobile / 120px desktop**
- Card padding: 24-32px
- Radius: 12px (card) / 8px (button) / 24px (hero)

---

## 🧩 Section list (25 sections — เรียงตามลำดับ)

1. Sticky Top Bar (countdown + CTA, show after scroll > 200)
2. Hero (eyebrow + H1 3-line + 5 bullets + 2 CTAs + trust strip)
3. Problem (5 pain cards + punchline)
4. Solution / Agentic Workflow (3 feature cards)
5. How It Works (3 steps)
6. Personas (5 cards)
7. Stats Row (4 stats with count-up)
8. Logo Marquee #1
9. Skills Viewer (2 tabs + 16 categories filter + locked overlay)
10. Short Testimonials (3 cards)
11. Logo Marquee #2
12. Founder Story (2-column)
13. Modules Grid (7 modules + total bar)
14. Skill ≠ Prompt (quote + 3 sub-cards)
15. Platform Compatibility (3 cards)
16. Comparison Table (5 cols, sticky first col mobile)
17. Case Studies (3 before/after)
18. Guarantee (7 days + risk=0)
19. Bonuses (4 cards, ฿8,490 free)
20. Reviews Grid (8 cards)
21. Pricing Card (Save 96% ribbon, ฿997 huge)
22. FAQ Accordion (10 questions, native `<details>`)
23. Final CTA
24. Footer (3-column)
25. Mobile Sticky Bottom Bar

---

## ⚡ Component rules

### Server vs Client

- **Server Components by default**
- `"use client"` เฉพาะ: `Countdown`, `SkillsViewer`, `FAQAccordion`, `MobileStickyBar`, `ScrollReveal`, `Header` (sticky logic), `StatsRow` (count-up)

### Code quality gates

- TypeScript strict, no `any`, no `@ts-ignore`
- Section component < 200 lines
- ทุก image ใช้ `next/image` + explicit `width` / `height`
- A11y: semantic HTML, keyboard-reachable, visible focus rings
- `npm run build` ผ่าน zero errors ก่อน commit
- `npm run lint` clean

### Static content rule (สำคัญ)

**ทุก string / array / number ต้องอยู่ใน `lib/data.ts`**

- Export const arrays: `MODULES`, `FAQS`, `REVIEWS`, `CASE_STUDIES`, `PERSONAS`, `BONUSES`, `STATS`, `COMPATIBLE_TOOLS`, `PROBLEMS`, `STEPS`, `PLATFORMS`
- Constants: `BUNDLE_PRICE = 997`, `ORIGINAL_VALUE = 23993`, `BONUS_VALUE = 8490`
- Components import จาก `lib/data.ts` เท่านั้น — ห้าม hardcode

---

## 🔄 Interactivity

- **Countdown 48h**: localStorage key `aiflow_deadline`, setInterval 1s, custom hook `useCountdown()` sync ทุกที่ (TopBar + FinalCTA + MobileStickyBar)
- **Sticky top bar**: show เมื่อ `window.scrollY > 200`, Framer Motion slide-down
- **Stats count-up**: `useInView({ once: true })` + `useMotionValue` + `animate()`
- **Skills viewer**: `useState<{ tab, category }>` filter array, locked overlay บน list items
- **FAQ**: native `<details><summary>` (a11y ฟรี)
- **Mobile sticky hide**: IntersectionObserver บน PricingCard
- **Scroll reveal**: `whileInView` fade-up 24px, `once: true`

---

## 🚫 Out of scope (phase 2 later)

- Stripe Checkout backend route (ใช้ external Payment Link ก่อน)
- Admin dashboard / CMS
- Multi-language (ไทยเท่านั้น)
- Real customer photos (ใช้ CSS avatar initials)
- Verbatim copy จาก [aiflowlab.co](http://aiflowlab.co) (ต้อง paraphrase ทั้งหมด)

---

## 📊 Performance Targets

- Lighthouse mobile: Performance ≥95, A11y ≥95, Best Practices ≥95, SEO ≥95
- LCP < 2.5s, CLS < 0.1, INP < 200ms
- Initial JS bundle < 150KB gzipped
- Responsive breakpoints: 320 / 768 / 1024 / 1440

---

## 🚀 Build Phases (stop-and-go — ถาม user ก่อนข้ามเฟส)

| Phase | งาน | เวลาประมาณ |
| --- | --- | --- |
| **P0** | Setup tokens + fonts + utils + verify dev server | 30 นาที |
| **P1** | `lib/data.ts` — paraphrase Thai copy ทั้งหมด | 1 ชม. |
| **P2** | UI primitives + `/preview` route | 2 ชม. |
| **P3** | Layout shell (Header / Footer / MobileStickyBar) | 1 ชม. |
| **P4** | Sections 2-8 (Hero · Problem · Solution · HowItWorks · Personas · Stats · Logos#1) | 3 ชม. |
| **P5** | Interactive sections (SkillsViewer · ComparisonTable · FAQAccordion) | 3 ชม. |
| **P6** | Sections 10-20 (Testimonials · FounderStory · Modules · SkillVsPrompt · Platforms · CaseStudies · Guarantee · Bonuses · Reviews) | 4 ชม. |
| **P7** | PricingCard + FinalCTA + Stripe wire | 2 ชม. |
| **P8** | Animation polish (scroll reveal + count-up + countdown sync + mobile hide) | 2 ชม. |
| **P9** | SEO + Analytics (metadata, OG, sitemap, robots, GA4, Pixel) | 1 ชม. |
| **P10** | QA + Lighthouse + deploy to Vercel | 2 ชม. |

**รวม ~20-22 ชม.**

---

## 📝 Git rules

- Conventional commits: `feat:`, `fix:`, `style:`, `perf:`, `refactor:`, `chore:`, `docs:`
- 1 phase = 1 commit (หรือมากกว่า ถ้า logical)
- Branch: `main` only (solo dev)
- Push after each phase passes build

---

## ⚠️ Constraints (ห้ามทำ)

- ห้าม install dependency ใหม่โดยไม่ถาม
- ห้ามแก้ `package.json` scripts โดยไม่ถาม
- ห้าม commit `.env.local`
- ห้าม copy copy / รูป / รีวิวจาก [aiflowlab.co](http://aiflowlab.co) แบบ verbatim — paraphrase เสมอ
- ห้ามใช้รูปลูกค้า stock ที่ไม่มีสิทธิ์ — ใช้ CSS avatar initials
- ถ้าเจอ ambiguity ใน spec → ถาม user ก่อน อย่าเดา
- ห้ามใช้ inline style (`style=...`) — ใช้ Tailwind classes เท่านั้น
- ห้าม hardcode สี hex ใน component — ใช้ design token ผ่าน Tailwind (`bg-bg-card`, `text-brand-primary`)

---

## 🔗 References

- Notion spec page: aiflowlab — Landing Page Clone Spec (parent page นี้)
- Design reference: [https://cc.aiflowlab.co/](https://cc.aiflowlab.co/)
- Tailwind v4 docs: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- Next.js 15 docs: [https://nextjs.org/docs](https://nextjs.org/docs)
- Framer Motion: [https://www.framer.com/motion/](https://www.framer.com/motion/)
- Lucide icons: [https://lucide.dev/](https://lucide.dev/)

---

## ✅ Phase Done Definition

แต่ละ phase ถือว่าเสร็จเมื่อ:

1. `npm run build` ผ่าน zero errors
2. `npm run lint` clean
3. Manual visual check ใน browser (mobile + desktop)
4. Commit ด้วย conventional commit
5. รายงาน user ว่าเสร็จ + ขออนุญาตข้ามไป phase ถัดไป