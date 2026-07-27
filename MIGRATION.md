# Quality Gypsum — WordPress → Vercel Migration Runbook

Same sequence as the SubTrade migration, adapted to what qualitygypsum.ca actually runs on.

## Current setup (confirmed)

| Item        | Value |
| ----------- | ----- |
| Site        | WordPress + Elementor (JetThemeCore), Rank Math SEO |
| Host        | Hostinger |
| DNS         | Hostinger (nameservers `ns1.dns-parking.com` / `ns2.dns-parking.com`) |
| Apex `@`    | `A` → `195.35.34.32` (Hostinger) |
| `www`       | `CNAME` → `www.qualitygypsum.ca.cdn.hstgr.net` (Hostinger CDN) |
| Email       | **Google Workspace** (Google MX records) — must be preserved |
| Portal/login| **None** — no logged-in users to protect (simpler than SubTrade) |

Because there's no portal or app on the domain, the only thing the cutover must protect is
**email** (the Google MX/DKIM/SPF records). Everything else is a straight web swap.

## Order of operations

### 1. Ship the code (done first, no DNS change)
- Push this repo to GitHub (e.g. `github.com/fabian9511/qualitygypsum-site`).
- Import into Vercel; it auto-detects Next.js. Confirm a successful production build.
- You now have a working `*.vercel.app` preview to review before touching DNS.

### 2. URLs already match
- `trailingSlash: true` means every page Google has indexed keeps resolving with a **200**, not a
  redirect. This is already built in — nothing to do.

### 3. Redirects for anything renamed/dropped
- The old Rank Math sitemaps already 301 to `/sitemap.xml` (in `next.config.ts`).
- Before cutover, pull the **full old WordPress sitemap** and diff it against this site's routes
  (all routes are listed in `/sitemap.xml`). Because we preserved every slug, the diff should be
  ~empty — add any stragglers as `redirects()` entries in `next.config.ts`, commit, redeploy.

### 4. Add domains in Vercel (before DNS)
- In the Vercel project, add both `qualitygypsum.ca` and `www.qualitygypsum.ca` so Vercel is ready
  to catch traffic. Vercel will show the exact target records to set.
- Set `www` → **308 redirect to the apex** (or apex → www — pick one canonical; the current site is
  reachable at both, and search currently indexes the apex, so apex-canonical is the safer default).

### 5. Cut over DNS at Hostinger — email untouched
In Hostinger's DNS zone editor for qualitygypsum.ca:
- **Replace** the apex `A @ 195.35.34.32` with Vercel's `A` record (Vercel shows it, typically
  `76.76.21.21`).
- **Replace** the `www` CNAME (`...cdn.hstgr.net`) with Vercel's `cname.vercel-dns.com`.
- **Do NOT touch** any `MX`, `TXT` (SPF), `DKIM`, or Google site-verification records — email keeps
  working through Google Workspace.
- Leave the Hostinger nameservers as they are (you're editing records, not moving DNS).
- SSL is issued automatically by Vercel once the records resolve.

### 6. Optional: add `.ca`/alt domains
- If you own other variants (e.g. a `.com`), add them in Vercel as **308 redirects** to the primary
  domain, exactly as SubTrade's `.ca → .com`.

### 7. Search Console
- Resubmit the new sitemap: `https://www.qualitygypsum.ca/sitemap.xml`.
- Remove the old Rank Math `sitemap_index.xml` entry.
- Use "URL Inspection" on a few key pages (home, `/services/drywall/`, a ranking blog post) to
  confirm they're fetched as **200**.

### 8. Decommission WordPress (after verification)
- Keep the Hostinger WordPress instance up for a week or two as a rollback, then retire it.
  Rollback = point the two DNS records back to Hostinger; nothing else changed.

## Post-launch (content & SEO, same as SubTrade)
- Paste your original blog copy back over the rewritten drafts if you prefer the exact wording
  (each post is one entry in `lib/blog.ts`).
- Add real project photos, feature pages, an `llms.txt`, and any additional calculators as
  follow-on commits — each auto-deploys.
