# MZ5 Roofing & Exteriors

Next.js (App Router) + TypeScript + Tailwind CSS v4 site for MZ5 Roofing & Exteriors, Wiggins, CO. Built for Vercel.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Before launch

1. **Photos.** Every image is a labeled slot. Add files to `public/images/` and set `src`, `width`/`height`, and specific `alt` text in `src/lib/site.ts` (`photos`, `projectPhotos`). Slots without `src` show a placeholder.
2. **Logo.** `src/components/Logo.tsx` is a placeholder wordmark. Replace it with the official file, and update the brand hex values in `src/app/globals.css` (`--color-navy-*`, `--color-red`).
3. **Environment variables** (see `.env.example`), set in Vercel:
   - `NEXT_PUBLIC_SITE_URL`: the real domain (canonicals, sitemap, Open Graph, JSON-LD).
   - `RESEND_API_KEY`, `LEAD_FROM_EMAIL`, `LEAD_TO_EMAIL`: lead-form delivery via Resend. Until set, the form tells visitors to call instead of silently dropping the lead.
4. **Reviews.** The three reviews are the customer quotes supplied by the owner. Confirm permission and the source platform before publishing.
5. **License number.** Not published anywhere on the site. Add it to the footer only if the owner supplies it.
6. Add a social-share image (`src/app/opengraph-image.png`) once brand assets exist.

## Structure

- `src/lib/site.ts`: business info, nav, services, reviews, photo manifest (single source of truth for content)
- `src/components/`: header, footer, mobile call/inspection bar, photo slot, form, page sections
- `src/app/api/inspection/route.ts`: validated lead endpoint (honeypot, server-side checks)
- `src/app/sitemap.ts`, `robots.ts`, `components/JsonLd.tsx` (RoofingContractor schema)
