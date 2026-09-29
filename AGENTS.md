<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project: Ares Energy Solution Limited website

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + lucide-react.

- `npm run dev` — start dev server
- `npm run build` — production build (also runs the TypeScript check)
- `npx tsc --noEmit` — typecheck only
- `npx eslint .` — lint
- No test suite configured yet.

Key structure:
- `lib/constants.ts` — centralised business data, nav, services, accreditation, process steps (single source of truth; do not duplicate business facts elsewhere).
- `lib/images.ts` — curated Unsplash placeholder imagery (desaturated via `grayscale` class for a monochrome, premium look). Replace with commissioned photography when available; `next.config.ts` allows `images.unsplash.com` as a remote pattern.
- `lib/metadata.ts` — `buildMetadata()` helper for consistent per-page SEO metadata/canonicals/Open Graph.
- `components/ui/` — layout primitives (Container, Section, SectionHeading, Button, Breadcrumbs).
- `components/layout/` — Header (with mobile nav), Footer, Logo.
- `components/sections/` — page-level building blocks (Hero, PageHero, ServiceGrid, AudienceSplit, WhyAres, ProcessSteps, ContactCTA, ServiceDetail, ContactDetails, AccreditationBlock, etc).
- `components/forms/quote-form.tsx` — client component using `useActionState` bound to the server action in `app/actions/quote.ts`.
- `app/actions/quote.ts` — quote form server action. No email/CRM provider is wired up yet — enquiries are only logged server-side. Integrate a provider (e.g. Resend) here using an API key from an environment variable before relying on this in production.

Do not fabricate business facts (years of experience, testimonials, stats, team bios, hours) — only use the confirmed details centralised in `lib/constants.ts`.

There are no standalone `/domestic` or `/commercial` routes — that content was consolidated into each `/services/[slug]` page (see the "Domestic & Commercial" split inside `components/sections/service-detail.tsx`) to avoid duplicating the same service breakdown across four pages. The homepage's `AudienceSplit` cards link to `/services` for both audiences.

### Branding assets

Real logo artwork was supplied in `public/branding/` (original "Asset N.png" exports) and copied into `public/logo/` with descriptive names:
- `ares-logo-black.png` / `ares-logo-white.png` — full horizontal lockup (icon + ARES + "Energy Solutions"), for light/dark backgrounds respectively. Used in `components/layout/logo.tsx` (header) and `components/layout/footer.tsx`.
- `ares-mark-black.png` / `ares-mark-white.png` — icon only.
- `ares-lockup-black.png` / `ares-lockup-white.png` — stacked (icon above wordmark) lockup, square-ish; not currently used but available for tight/square placements.

`app/favicon.ico`, `app/icon.png` and `app/apple-icon.png` were generated from `ares-mark-black.png` (tight-cropped, padded to square) via the Next.js App Router metadata file convention — regenerate them the same way if the logo changes.

