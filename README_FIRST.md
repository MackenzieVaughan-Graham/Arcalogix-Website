# Arcalogix - Add Sign in to Header

Copy both files in `components/` into the same folder in your Arcalogix Next.js project:
- `components/SiteHeader.tsx` (replace existing)
- `components/SiteHeader.module.css` (new file)

Desktop/tablet: an outlined `Sign in` button appears immediately to the right of the red `Submit a new project` button.
Phone widths: both actions remain accessible inside the existing hamburger menu.

Links:
- Submit a new project: https://arcalogixdashboard.com/general-submit-project
- Sign in: https://arcalogixdashboard.com/login

This is a header-only update. It does not replace `app/globals.css`, the recently enhanced video, the services animation, pricing, or Supabase integration.

Preview: `npm run dev`
Deploy: `git add components/SiteHeader.tsx components/SiteHeader.module.css && git commit -m "Add dashboard sign-in link to header" && git push origin main`
