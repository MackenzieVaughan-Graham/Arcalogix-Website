# Arcalogix About page — simplified story and subtle motion

This is an update for the EXISTING Next.js Arcalogix MARKETING website, not the customer dashboard or the openArcade repository.

## Copy in VS Code

Replace/add these files in your existing project:

- `app/about/page.tsx` — REPLACE
- `app/about/about.module.css` — REPLACE
- `app/about/AboutMotion.tsx` — NEW

If your app uses `src/app/`, place these in `src/app/about/` instead.

**Leave these existing files untouched:**
- `components/SiteHeader.tsx`
- `app/about/AboutTopReset.tsx`
- `app/page.tsx` (the scrolling homepage)
- `app/globals.css`

Keeping `SiteHeader.tsx` and `AboutTopReset.tsx` preserves the proven About navigation fix that opens the separate `/about` route at the top without smooth scrolling.

## Test / deploy

1. Run `npm run dev` in VS Code.
2. Test `/about` from the homepage navigation, including when scrolled to the bottom of the homepage.
3. Scroll through `/about` on desktop and mobile. Content should fade up gently when entering view; no scroll lock, snap, or forced navigation.
4. Check all outgoing links.
5. Commit and push the updated project via GitHub to trigger your Vercel deployment.

## Important URLs

Review `destinations` at the top of `app/about/page.tsx` before deploying. The openArcade URL was retained from the prior About page as `https://openarcade.com/` and the ownership URL assumes the `/ownership` route from your Next.js openArcade code. The public `openarcade.com` domain currently appears to show an older marketing site, so confirm the domain points to your new openArcade site before publishing these CTAs.

- `openArcade` — openArcade main website
- `openArcadeOwnership` — exploratory ownership / investment-interest page
- `customerLogin` and `customerSignup` — customer dashboard
- `authoringLogin` and `authoringSignup` — authoring platform

The ownership initiative is presented as exploratory, not an offer of securities. Planned openArcade features are labelled as roadmap.

## What changed

- Reduced repeated content to four clear beats: company connection, existing products, future openArcade, workspace access.
- Removed the dense multi-stage process section, redundant closing section and multiple long product cards.
- Enlarged whitespace and simplified the visual hierarchy.
- Added modest hero and scroll-entry motion, with a `prefers-reduced-motion` fallback.
- Kept footer and links, preserved the homepage and working About navigation.
