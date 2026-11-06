ARCALOGIX / ABOUT US - REAL PAGE NAVIGATION (NO SMOOTH SCROLL)
==========================================================

This is a Next.js REPLACEMENT package for the Arcalogix MARKETING WEBSITE.
It is NOT for the customer dashboard project or the openArcade project.

CAUSE OF THE PREVIOUS PROBLEM
-----------------------------
The previous header update called window.scrollTo({ behavior: "smooth" })
when About was selected on the About page. The existing global CSS also has
html { scroll-behavior: smooth }. That means the previous fix could itself
animate through the whole page. Next.js soft navigation can also preserve or
restore scroll position across routes, particularly on long sticky pages.

THIS FIX
--------
1. Replaces the About nav entry with a native /about page link (NOT #about,
   not a Next.js soft navigation).
2. If already on /about, clicking About Us jumps to top IMMEDIATELY.
3. The About route resets scroll to 0 when entered and on page-history restore.
4. Keeps the homepage's Platform, Standards and Services section links and
   existing smooth scroll behaviour unchanged.
5. About remains a standalone Next.js route and never becomes a home section.

COPY/REPLACE EXACTLY:
  components/SiteHeader.tsx       <-- REPLACE
  app/about/page.tsx              <-- REPLACE (existing About content preserved)
  app/about/AboutTopReset.tsx     <-- ADD
  app/about/about.module.css      <-- SAME STYLING AS PREVIOUS PACKAGE

For src/-based sites, use src/components and src/app/about instead.

IMPORTANT: DO NOT REPLACE app/page.tsx OR app/globals.css.
They are your homepage and the shared styling. The fix is contained above.

STEPS (VS CODE -> GITHUB -> VERCEL)
---------------------------------
1. Extract this ZIP.
2. Copy the four files into the exact matching folders in your Arcalogix
   marketing website repository; accept replacement prompts.
3. In VS Code, search the site for `#about`, `href="#about"`, and
   `href="/#about"`. Any separate About Us nav link must use `/about`.
   Do not leave a second About Us anchor in another header component.
4. Run `npm run dev` and verify /about directly in the browser.
5. Scroll to the bottom of / and click About Us: /about must open immediately
   at the TOP with no animated trip through the homepage.
6. Scroll to the bottom of /about and click About Us again: it must jump
   immediately back to the top with no smooth animation.
7. Verify Platform, Standards and Services still reach the homepage sections.
8. Commit and push these files to GitHub to trigger your Vercel deployment.

NOTE
----
If you still land on the home page when clicking About Us, you are likely
editing a different SiteHeader than the one rendered by your deployed website,
or a second navigation link still targets #about. Check the href of the clicked
link in your browser's Inspect Element. It must be exactly /about.

Other About-page content, its login links, and the rest of the marketing site
are unchanged by this package.
