# Greenspace Realty — Decisions Log

## Architecture & Infrastructure
- **Framework:** Next.js 14 App Router with Server Actions (API routes)
- **Styling:** Tailwind CSS (Custom brand theme applied in `tailwind.config.js`)
- **Hosting:** Vercel (Auto-deploy from GitHub main branch)
- **Database/Lead Storage:** Google Sheets bound via Google Apps Script (Web App). Avoids heavy DB infrastructure and GCP service accounts for the client.
- **Transactional Emails:** Resend API. Client uses their own domain to bypass spam filters.
- **WhatsApp Alerts:** CallMeBot API. A lightweight, free HTTP call directly to Krishna's phone without navigating the Meta Business Manager approval maze.

## Lead Scoring & Routing Logic
- **Quick Leads (Micro-popup):** Only collects Name & Mobile. Categorized as `LOW` intent by default since budget/timeline aren't established. Saved to "Quick Leads" sheet tab. No instant alerts.
- **Step Form Leads:** Collects full details (Unit Type, Budget, Timeline). 
  - `HIGH` intent = "Ready to buy" timeline + budget meets threshold criteria. Triggers instant Email & WhatsApp alert to Krishna.
  - `NURTURE` intent = "Just exploring" timeline. Pushed to "Nurture" tab. Harvested daily via Vercel Cron Job for an end-of-day digest email.
  - `LOW` intent = Fails budget threshold. Stored quietly in "Low Intent" tab. No notifications.

## Components & UI
- **Design Language:** Generous whitespace, rounded cards (12-16px), soft shadows. Avoiding sharp corporate edges to reinforce a warm, trustworthy "local builder" persona.
- **Images:** All images optimized and stored in `public/images/`. A custom OpenGraph metadata template is wired into `app/layout.tsx`.
- **Modals:** Quick popup appears intelligently after 8 seconds on the site unless dismissed (persists via `localStorage`).

## Pending Actions (Post-Launch)
- [ ] Receive finalized RERA registration number and update `Footer.tsx`.
- [ ] Receive accurate real estate pricing bands and inject them into `lib/scoring.ts`.
- [ ] Setup Resend Custom Domain records once the `greenspacerealty.in` domain is purchased and propagated.

---

## v2 Redesign & Bug-Fix Update

### Architecture & Infrastructure Decisions
- **Stack / Hosting:** Kept unchanged (Next.js 14, Tailwind, Vercel, same domain).
- **Lead Storage (Critical Change):** Moved from 5 separate tabs to **ONE Google Sheet, ONE tab** called `Leads`. A new `Lead Priority` column is now used alongside conditional formatting colors instead of physical tab routing.
- **Lead Delivery:** Google Apps Script Web App remains the method, but requires redeployment to support the single-tab schema. Resend continues to handle emails (routing alerts to `RESEND_TO_EMAIL`).
- **WhatsApp:** **Disabled, not deleted.** The `lib/whatsapp.ts` file remains but the API call inside `route.ts` is commented out. No API calls to Green API will fire.
- **Images/Video:** Utilized Cloudinary for the new hero video and brochure PDF. To avoid adding SDKs/packages, we strictly use plain Cloudinary URLs via `.env.local` variables. The hero video relies on `<source media="...">` to switch between a full-res desktop version and a smaller `q_auto,w_640` mobile version.
- **Dark Mode:** Implemented a full dark-mode palette at the Tailwind config level, applied site-wide component by component.

### Form & Logic Decisions
- **Forms:** Expanded from 3 to 5 distinct forms. Each posts to the single `/api/lead` route with a unique `source` identifier: `hero-quick-form`, `website-step-form`, `builder-mandate-form`, **NEW** `brochure-download-form`, **NEW** `site-visit-form`.
- **Brochure Gate:** Added a new global modal (`BrochureGateForm.tsx`) requiring Name + Mobile. Successful submission opens the Cloudinary PDF URL.
- **Site Visit Form:** Added a form (`SiteVisitForm.tsx`) requesting preferred visit date, mapped dynamically to the specific project being viewed.
- **Dead Code Cleanup:** Deleted `components/home/Hero.tsx` as it was no longer imported or used.
- **Critical Bug Fix:** Rewrote the lead scoring logic in `/api/lead/route.ts`. The old code incorrectly destructured values. The new flow calls `determineIntentScore` followed by `determineSheetTab`, passing the correct intent string to the single-tab sheet as `leadPriority`.