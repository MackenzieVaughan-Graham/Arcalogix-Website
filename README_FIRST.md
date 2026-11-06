# Arcalogix – Hero Cleanup & Spacing Refinement

Replace ONLY these files in your existing Arcalogix website:

- app/page.tsx
- app/globals.css

CHANGES
- Removes the decorative oversized PORTFOLIO watermark behind the hero title.
- Makes the architectural hero video slightly darker and more defined by adjusting its CSS filter.
- Reduces white wash over the video while retaining the soft fading into the white background.
- Reduces large vertical gaps through the website by approximately 15–20% without changing content or the quick service scroll transitions.

This drop-in does not touch the video asset, service components, sign-in header, pricing, or Supabase enquiry API.

For local verification: npm run dev and npm run build.
Then: git add app/page.tsx app/globals.css && git commit -m "Refine hero video and section spacing" && git push origin main

The full-source ZIP is also available; it includes the latest available video-contrast and header sign-in updates.
