# Arcalogix — About Us platform access + contact update

## Replace these files in your existing Arcalogix marketing site

- `app/about/page.tsx`
- `app/about/about.module.css`
- `app/about/AboutContactForm.tsx`

If your project uses `src/app/`, install under `src/app/about/` instead.

Do **not** change the existing `app/page.tsx`, `components/SiteHeader.tsx`, `app/about/AboutTopReset.tsx`, or `app/about/AboutMotion.tsx`. This keeps the existing homepage, working instant navigation, and About animations intact.

## What changed

1. Both openArcade links are exact:
   - Discover openArcade: https://openarcade-nextjs-starter.vercel.app/
   - Explore participation / investment: https://openarcade-nextjs-starter.vercel.app/ownership#top
2. The bottom About section is retitled **Your workspace. Or a conversation.**
3. There are three clear pathways: **Customer dashboard** (Sign in / Create account), **Arcalogix authoring** (Sign in / Request access), and **Start a conversation** (Request a chat or demo).
4. The new button opens the existing contact dialog and prefills **Request a chat or demo**. Users can change topics. The form still posts to `/api/contact`, with no backend modifications or unverified scheduling promises.
5. Existing page sections, footer, and layout are preserved.

## Test locally before GitHub / Vercel

1. Run `npm run dev` and open `/about`.
2. Check the two openArcade links at the end of **Our Big Ambition**.
3. Scroll to the bottom and test the three access paths.
4. Open **Request a chat or demo**; change topics and submit a test message using the deployed `/api/contact` backend.
5. Verify desktop and mobile sizes before committing and pushing.

Note: the authoring **Request access** link remains the existing projects.arcalogix.com URL. If you have a dedicated request-access path, update it in the `destinations` object in `page.tsx`.
