# Quality Gypsum Services — Website

A modern rebuild of **qualitygypsum.ca** (previously WordPress + Elementor on Hostinger) as a
**Next.js 16 (App Router) + Tailwind CSS v4** site, ready to deploy on **Vercel**.

The rebuild is a design/tech refresh that **preserves every existing URL** so Google rankings carry
over on migration.

## Tech stack

- Next.js 16 (App Router, React 19)
- Tailwind CSS v4
- Self-hosted fonts (Archivo + Inter via `@fontsource`) — no external font fetch
- Fully static/SSG pages + one serverless route (`/api/contact`)

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Project structure

```
app/
  page.tsx                     Home
  about/                       /about/
  services/                    /services/  + [slug] (5 services) + t-bar-calculator/
  projects/                    /projects/  + [slug] (10 projects)
  blog/                        /blog/
  [slug]/                      Root-level blog posts (e.g. /basement-development-in-calgary/)
  work-with-us/                /work-with-us/
  contact-us/                  /contact-us/  (+ ContactForm client component)
  privacy-policy-2/  terms-of-service/
  api/contact/route.ts         Quote-form handler (Resend, with mailto fallback)
  sitemap.ts  robots.ts        Auto-generated /sitemap.xml and /robots.txt
lib/
  site.ts  services.ts  projects.ts  blog.ts    All content lives here
components/                     Header, Footer, Section, Button, icons
```

**All page content lives in `lib/`** — edit `services.ts`, `projects.ts`, `blog.ts`, and `site.ts`
to update copy, add projects, or add blog posts. Adding a blog post there automatically creates its
page, sitemap entry, and links.

## URL preservation (SEO)

- `trailingSlash: true` in `next.config.ts` — every indexed URL keeps resolving with a **200**.
- Non-trailing requests **308** to the trailing form (no lost link equity).
- Old Rank Math sitemaps (`/sitemap_index.xml`, `/post-sitemap.xml`, …) **301** to `/sitemap.xml`.
- Unknown URLs return a proper **404**.
- Every page has a unique `<title>`, meta description, and canonical; blog posts include
  `BlogPosting` JSON-LD.

## Contact form

`/api/contact` sends quote requests by email. Set `RESEND_API_KEY` (see `.env.example`) for seamless
delivery. **Without a key it still works** — the form falls back to a pre-filled `mailto:` so leads
always reach info@qualitygypsum.ca.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **New Project → import the repo**. Framework auto-detects as Next.js — no build
   config needed.
3. (Optional) add `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` under Project → Settings →
   Environment Variables.
4. Deploy. Vercel auto-deploys `main` on every commit; a failed build leaves the previous deploy
   live.

See `MIGRATION.md` for the full DNS cutover runbook.
