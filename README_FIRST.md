# Arcalogix: centred hero video + faster service scroll

This update replaces only **two files** in your existing Arcalogix Next.js website:

1. `app/globals.css`
2. `components/ServicesScrollScene.tsx`

The video file itself is unchanged. You do not have to upload or re-compress it again.

## What's fixed

- The 16:9 video is now centred behind the heading area with `object-fit: contain`, not stretched/cropped across the whole page. The background is feathered into the white page, including at mobile widths.
- Service section scrolling is shorter (`168svh` instead of `370svh`). Each service changes in a quick ~0.34s crossfade, rather than gradually fading a tiny amount per wheel step. Natural scrolling is maintained.
- All four prices, background images, CTA destinations, contact form and Supabase integration are preserved.

## Install

Extract into the root of your existing Arcalogix VS Code project, merge `app/` and `components/`, and replace the two files.

```sh
npm run dev
npm run build
git add app/globals.css components/ServicesScrollScene.tsx
git commit -m "Center hero video and speed up service transitions"
git push origin main
```

If the video still looks unchanged, hard-refresh the browser (Ctrl+Shift+R) and verify that Vercel deployed the latest commit.

This release has source syntax and archive verification; the sandbox browser screenshot was unavailable. Please check the final viewport alignment locally.
