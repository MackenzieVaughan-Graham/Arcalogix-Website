# Arcalogix: scroll-driven services + blended hero video

## For your existing website (preferred)
Extract the **DROP-IN ZIP** into the root of your Arcalogix Next.js project, merging the `app`, `components`, and `public` folders. Replace only matching files. The zip includes:

- `app/page.tsx` — existing homepage, now integrates video, ServicesScrollScene, ScrollEnhancer
- `app/globals.css` — new scene and video CSS appended to existing styles
- `components/ServicesScrollScene.tsx` — NEW scroll-linked fades and four related background assets
- `components/ScrollEnhancer.tsx` — NEW one-time subtle section reveals
- `public/video/arcalogix-spatial-hero.mp4` — user's uploaded animation, compressed for the web
- `public/images/hero-animation-poster.webp` — fallback/poster for muted autoplay
- `public/images/iot-asset-diagram.svg` — illustrated IoT sensor/device connections (not actual readings)

No edits to `app/api`, Supabase, privacy, `SiteHeader`, or `ContactProvider` are needed.

## Run and deploy

```sh
npm install
npm run dev
npm run build
git add app/page.tsx app/globals.css components/ServicesScrollScene.tsx components/ScrollEnhancer.tsx public/video/arcalogix-spatial-hero.mp4 public/images/hero-animation-poster.webp public/images/iot-asset-diagram.svg
git commit -m "Add scroll-fading services and architectural hero video"
git push origin main
```

The first service CTA now reads **Submit a project** and opens:
https://arcalogixdashboard.com/general-submit-project

Other service CTAs continue to open the existing contact dialog. Existing prices and details are preserved.

### Design and accessibility
- Native muted autoplay loop with inline playback. Autoplay may be blocked by device/browser settings; poster provides a fallback.
- Wide viewport: the right-side service story cross-fades as the user scrolls; no forced wheel capture or autoplay.
- Mobile/narrow/short viewport: services are readable stacked cards, not clipped by a fixed panel.
- Reduced-motion preference: static video poster and readable stacked services.
- Illustrative IoT schematic does not imply live instrumented buildings or fabricated sensor data.

### Checks
The files were tested for source syntax, video encoding and archive integrity. Review locally, especially mobile breakpoints. Environment variables remain controlled by Vercel.
