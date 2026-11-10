Arcalogix website - About Us authoring sign-in link fix

Based on the attached source package: Arcalogix-Website(1).zip

INSTALL:
1. Extract this ZIP.
2. Replace ONLY app/about/page.tsx in your current Next.js project.
3. Run npm run dev and visit /about.
4. Click the Sign in link under 02 / Professional Access / Arcalogix authoring.
   It should open https://projects.arcalogix.com/ in a new tab.
5. Commit and push to GitHub for your usual Vercel deployment.

Only change:
  authoringLogin:
    from https://projects.arcalogix.com/login
    to   https://projects.arcalogix.com/

All other links (including Request access), copy, styling, and page behavior unchanged.
