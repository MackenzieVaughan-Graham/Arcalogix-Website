ARCALOGIX WEBSITE - SECTION 05 INTERACTIVE LIFECYCLE

INSTALLATION (VS CODE / GITHUB)
1. In your existing Arcalogix website project, extract this ZIP.
2. Copy the app/ and components/ folders into your project, preserving paths.
3. Replace the existing app/page.tsx.
4. Add the two new component files in components/.
5. Run: npm run typecheck
6. Run: npm run dev, and check Section 05 on desktop and mobile.
7. Commit/push to GitHub and deploy in Vercel.

FILES IN THIS UPDATE
- app/page.tsx (only Section 05 replaced with a dedicated component)
- components/ConnectedLifecycle.tsx (interactive stages and all stage copy)
- components/ConnectedLifecycle.module.css (scoped styling for desktop/mobile)

BEHAVIOUR
- All four circles and their stage labels are clickable, usable by keyboard.
- Selecting a stage updates the detail panel below the four circles.
- 01 Evaluate: source drawing and architectural information review.
- 02 Plan: customer People-Place-Policy standards and comparison.
- 03 Deliver: two-business-day/48-hour standard target after confirmation,
  checked by Arcalogix's architectural team; includes hosted 3D SIM.
- 04 Operate: use the hosted SIM as the digital twin foundation for
  occupancy, building services, operational costs, maintenance and assets.
- The description distinguishes current test-fit services from expanding
  IoT/digital-twin integrations requiring active hosting and data sources.

PRESERVED
Existing styling outside Section 05, navigation, favicon, buttons,
About page, contact forms, platform/services, and footer remain unchanged.

VALIDATION
- TypeScript: npm run typecheck PASSED (using supplied package dependencies).
- TSX parsing: PASSED.
- Desktop and 390px mobile viewport static CSS layout checks: no overflow.
- Full Next.js dev/build browser test was unavailable because the uploaded
  node_modules only included Windows native SWC; the test container is Linux
  and cannot download its native SWC package from the package registry.
