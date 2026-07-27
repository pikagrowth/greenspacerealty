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