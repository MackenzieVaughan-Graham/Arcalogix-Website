# Arcalogix About Us — contact form connection (Next.js + Resend)

This update makes **Request a chat or demo** deliver an email through Resend, using a dedicated backend route. It does **not** change the homepage's existing `/api/contact` endpoint or modify the Arcalogix header, scroll behaviour, or page design.

## Install in your existing Arcalogix marketing site

1. Open the Arcalogix **marketing website** project in VS Code (not the dashboard repository).
2. Replace `app/about/AboutContactForm.tsx` with the copy in this ZIP.
3. Add `app/api/about-contact/route.ts` from this ZIP. If your code uses `src/app/`, use `src/app/api/about-contact/route.ts` and `src/app/about/AboutContactForm.tsx` instead.
4. Do not replace any other files. **Do not rename** `app/api/about-contact/route.ts` to `app/api/contact/route.ts`.

## Set up Resend

1. In [Resend](https://resend.com/domains), confirm the sending domain you want to use is **Verified**. The sender you choose must use that verified domain.
2. In [Resend API Keys](https://resend.com/api-keys), create or use a sending-capable API key.
3. In **Vercel → Project → Settings → Environment Variables**, add the following variables to the **Arcalogix marketing website** project (not the dashboard project):

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | Your secret Resend API key (do not put it in source code). |
| `ABOUT_CONTACT_TO_EMAIL` | The Arcalogix team mailbox to receive submissions (e.g., `sales@arcalogix.com`). |
| `ABOUT_CONTACT_FROM_EMAIL` | A verified sender, e.g., `Arcalogix <website@notifications.arcalogix.com>` **only if that domain is verified**. |

Apply the variables to **Production**. Also apply to **Preview** if you test a preview deployment. Redeploy the latest commit after changing variables.

4. For local testing, add the three variables to `.env.local` in the **root** of the marketing website project. Do not commit `.env.local` or any API key to GitHub. Restart `npm run dev` after saving.

Example `.env.local` (replace all example values):

```env
RESEND_API_KEY=re_your_private_key_here
ABOUT_CONTACT_TO_EMAIL=sales@arcalogix.com
ABOUT_CONTACT_FROM_EMAIL="Arcalogix <website@YOUR-VERIFIED-DOMAIN>"
```

## Verify the connection

1. Run `npm run dev` and visit `http://localhost:3000/about`.
2. Click **Request a chat or demo**; complete the fields, check consent, and click **Send inquiry**.
3. Browser developer tools → **Network** → select the POST to `/api/about-contact`:
   - `200` = Resend accepted the email request. Check the recipient inbox **and Resend Logs**.
   - `400` = form validation error; inspect the JSON response.
   - `404` = the API route is missing / in the wrong folder, or the new deployment is not live.
   - `503` = a required Vercel environment variable is missing.
   - `502` = Resend rejected the request or was unreachable; check **Vercel → Logs** for `[about-contact]` and check Resend logs. Common causes: an invalid API key or unverified sender domain.
4. Push the changes to GitHub, allow Vercel to deploy, and repeat the test using the real `/about` page.

### Important

- Email is sent **from** your verified domain and uses the visitor email as **Reply-To**. This lets your team reply directly to the inquiry without spoofing the visitor's email address.
- The route includes basic input validation, HTML escaping and a hidden anti-spam field. For sustained public use, consider a CAPTCHA or server-side rate limiting to reduce automated abuse.
- This approach **emails the submission** but does not store it in your Supabase CRM or dashboard. If you also want to record inquiries there, that should be added as a separate, tested integration.
