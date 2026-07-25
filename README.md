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
scripts/optimize-assets.mjs  # one-off image pipeline
legacy/                # the original static site, kept for reference
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
`next/image` serves AVIF/WebP sized to each device on top of that. Re-run the
pipeline with `node scripts/optimize-assets.mjs` if you add new source images.

## Deploy

Works on any Node host. Easiest is **Vercel**: push to GitHub → import → done
(image optimization works out of the box). Set a custom domain and update
`metadataBase` in `app/layout.tsx` + `BASE` in `app/sitemap.ts`.
