Arcalogix / The Common Foundation — Background-Integrated Model Update

This update removes the dark "One consistent foundation" box entirely and lets the
3D architectural model visually merge into the white website background.

Files to copy into your existing Next.js website (preserve matching paths):
  components/PortfolioValue.tsx
  components/PortfolioValue.module.css
  public/images/common-foundation-model.png  (NEW ASSET)

The People, Place and Policy cards continue to float around the model on desktop.
They appear below the model on tablet and mobile to stay readable.

The page content outside this section, header, forms, applications and services
are untouched. No new packages/dependencies are required.

Installation: unzip into your local project, replacing matching files, then run
`npm run dev` and inspect Section 01. Commit and push to deploy in Vercel.
