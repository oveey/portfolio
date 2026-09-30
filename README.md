# Oveey — Portfolio

A fast, modern portfolio for **Oveey**, Product & UI/UX Designer.
Rebuilt from a heavy Bootstrap/jQuery site into a Next.js app.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Motion** (Framer Motion) for animations
- `next/image` for automatic AVIF/WebP optimization

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/
  layout.tsx           # fonts, metadata, <html>
  page.tsx             # landing page
  work/[slug]/page.tsx # data-driven case-study pages
  not-found.tsx        # 404
  sitemap.ts
components/             # Navbar, Hero, Work, About, Skills, Contact, …
lib/data.ts            # ← single source of truth for ALL content
public/images/         # optimized assets (webp)
```

## Editing content

Almost everything (bio, projects, case studies, skills, links) lives in
**`lib/data.ts`**. Change copy or add a project there — no component edits needed.

### ⚠️ Before going live — replace the placeholder email

The contact email is a placeholder: **`hello@oveey.design`**.
Update it in `lib/data.ts` (the `profile.email` field and the `socials` array).
WhatsApp (`+234 708 026 2206`) and the résumé link are already wired to the real values.

## Performance notes

The original images were huge (a single PNG was **20 MB**). They were
downscaled + converted to WebP — the whole `public/` folder is now ~7 MB, and
`next/image` serves AVIF/WebP sized to each device on top of that.

## Deploy — GitHub Pages

Live URL: **https://oveey.github.io/portfolio/**

The site builds to a static export (`output: "export"`) served under the
`/portfolio` base path. A GitHub Actions workflow (`.github/workflows/deploy.yml`)
builds and deploys on every push to `main`.

**One-time setup (repo owner):** GitHub → repo **Settings → Pages → Build and
deployment → Source → “GitHub Actions.”** After that, every push to `main`
auto-deploys.

Local production preview under the sub-path:

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build   # → ./out
npx serve out            # then open /  (or mount under /portfolio to match prod)
```

Moving to a root domain later? Drop `NEXT_PUBLIC_BASE_PATH`, and update
`metadataBase` in `app/layout.tsx` + `BASE` in `app/sitemap.ts`.
