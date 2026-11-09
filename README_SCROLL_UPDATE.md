ARCALOGIX WEBSITE - SECTIONS 03 + 04 SCROLL-DRIVEN UPDATE
Date: 2026-11-09

What changed:
- Section 03 / The Connected Workflow now has a natural-scroll desktop presentation.
  The introductory title fades into stages 01/04 - 04/04 as the visitor scrolls.
  Each stage keeps its original audience, description and role.
- Section 04 / Applications + Services is restored to the earlier split presentation:
  static heading on the left, service panels fading on the right.
- The four services, commercial rates, inclusions and contact actions are unchanged.
  The first test fit includes 12 months of SIM hosting. Connected operations
  require active SIM hosting.
- Both sections use thin rules, neutral backgrounds, Arcalogix red highlights,
  typographic hierarchy and restrained transitions consistent with the site.
- On phones, tablets, short-height screens and reduced-motion devices the sections
  become normal stacked content. No scroll snapping, wheel interception or scroll lock.

UPDATED FILES ONLY:
  components/ConnectedEcosystem.tsx
  components/ConnectedEcosystem.module.css
  components/ServicesOverview.tsx
  components/ServicesOverview.module.css

INSTALLATION:
1. In your existing Arcalogix Next.js site, replace the four matching files.
2. Keep every other file exactly as-is.
3. Run: npm run dev
4. Review Section 03 and 04 on desktop. Scroll naturally and confirm stage fades.
5. Check mobile and keyboard use; confirm the Submit and Contact actions work.
6. Commit, push through GitHub and let Vercel deploy.

VERIFICATION:
- TypeScript check using project dependencies: PASS.
- CSS parsing: PASS.
- Static desktop layout checks at 1440x900: no horizontal overflow or panel clipping.
- Static mobile layout checks at 390x844: no horizontal overflow.
- Complete production Next.js build not possible here because Linux SWC package is
  not available locally and external package registry download is blocked.
- Full deployed-site browser testing still needs to be done after deployment.

No environment variables, contact API routes, About page, header, logo, or
openArcade links are changed by this package.
