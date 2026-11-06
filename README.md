# Arcalogix logo -> homepage top (VS Code / GitHub)

## Install

Extract this ZIP into your EXISTING Arcalogix marketing Next.js project.
Replace exactly:

  components/SiteHeader.tsx

If your project uses a src directory, use src/components/SiteHeader.tsx.

Do not change app/page.tsx, app/about/page.tsx, app/globals.css,
or components/SiteHeader.module.css.

## Behaviour

- From About Us or any other route, selecting the top-left Arcalogix logo performs ordinary browser navigation to `/`, avoiding Next.js scroll-state restoration.
- When already on the homepage, selecting the logo jumps instantly to top (no smooth scrolling).
- About Us remains a separate `/about` page with its existing top reset.
- Desktop button order remains Submit a new project, then Sign In.
- Existing platform, standards and services navigation remains unchanged.

## Deploy

Run `npm run dev`; test the logo both from a scrolled homepage and from `/about`.
Then commit and push the changed component through GitHub for Vercel deployment.
