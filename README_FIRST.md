# Arcalogix — Enterprise Spatial Intelligence Website

A **new, separate** Next.js website inspired by the existing openArcade visual language.

## 1. Run locally

Use Node.js 22+. Extract the ZIP into a NEW folder (not inside the openArcade repository).

```bash
npm install
npm run dev
```

Visit http://localhost:3000. `Ctrl+C` stops the development server.

## 2. Create a new GitHub repo / Vercel project

- Create a new repository e.g. `arcalogix-enterprise-website`.
- Push the files. Connect the repository to a **new** Vercel project.
- **Do not assign `arcalogix.com` to the new project until you're ready to replace the existing site.** Use the automatic `*.vercel.app` preview domain while reviewing.
- Do not overwrite or reuse the openArcade production deployment, repository, database or environment variables.

## 3. Configure the contact form and lead tracker

1. Open the EXISTING Supabase project already used by OpenArcade. You do NOT need another account or project.
2. Open Supabase SQL Editor and run `supabase/schema.sql`. This only creates `public.enterprise_inquiries`; it does not modify `public.architect_signups`.
3. Add the SAME project `SUPABASE_URL` and `SUPABASE_SECRET_KEY` as Vercel environment variables **for the new Arcalogix website**. Do not copy environment variables into the repository.
4. Do not use a `NEXT_PUBLIC_` prefix for the secret key. Do not commit `.env.local`.
5. Redeploy and send a test enquiry. Confirm a new row in `public.enterprise_inquiries`; verify `public.architect_signups` was not changed.
6. You can manage the `status` field (`new`, `contacted`, `qualified`, `proposal`, `closed`) in the Table Editor.

**Security note:** This shares one database and a privileged server-side credential between two sites. Data is stored in different tables, but it is not security-isolated at the project/secret level. Plan a dedicated project/key when the business requires stricter isolation.

**Optional:** Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` for Cloudflare Turnstile. Configure both together and test in preview. Restrict key domains appropriately.

Without environment variables the website can be browsed, but contact-form submission intentionally returns a configuration error. This prevents silently losing leads.

## 4. Design and content

The design uses the same visual principles as openArcade: system font stack, large headings, white and pale gray surfaces, Arcalogix red, generous white space, animated product journey, and sticky navigation. The new site targets enterprise occupiers first while retaining dedicated routes of entry for landlords and individual tenants.

The sample images are user-supplied Arcalogix project / presentation assets, optimized to WebP. The onsite data graphics are **illustrative**, not verified customer dashboards. Drawing-related visuals are concept / prototype visuals and may need replacement with approved client work before launch.

### Site architecture

- Hero — one portfolio, one strategy
- Spatial platform journey — floor plan → spatial model → standardized test fit → intelligence
- People / Place / Policy enterprise standards
- Services — test fits, design and permitting, portfolio intelligence, digital twins and IoT
- Global service & professional coordination
- Audience-specific views — enterprise occupier, landlord / owner, tenant / occupier
- Connected lifecycle + enquiry form

### Where to make changes

- `app/page.tsx`: messaging, service content, CTAs, section order
- `app/globals.css`: visual system and responsive styling
- `components/PlatformJourney.tsx`: scroll steps and image selection
- `components/AudienceSelector.tsx`: audience positioning
- `components/ContactProvider.tsx`: form fields, interaction and success state
- `app/api/contact/route.ts`: protected contact API
- `supabase/schema.sql`: lead tracking table
- `public/images`: image assets

## 5. Prior to public launch

- Confirm service availability / jurisdiction-specific language and image usage rights.
- Replace starter privacy notice with legally reviewed company policy.
- Test form submission, spam controls, mobile navigation, screen reader accessibility and SEO metadata.
- Test `npm run build` after installing dependencies.
- Keep `arcalogix.com` on the existing site until the new Vercel preview is approved.
