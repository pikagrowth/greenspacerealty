# Environment & Integrations Setup Guide

This document outlines the final steps to wire up the third-party integrations for Greenspace Realty v2 (Google Sheets, Resend, and Cloudinary). 

## 1. Google Sheets & Apps Script Setup (v2 Single-Tab Architecture)

1. Create a new Google Sheet named **"Greenspace Realty — Leads"**.
2. Create **exactly ONE tab** named: `Leads` (case-sensitive).
3. Set row 1 as the header:
   `Timestamp | Name | Mobile | Email | Unit Type | Budget | Timeline | Source | Lead Priority`
4. Apply Conditional Formatting to the `Lead Priority` column (e.g., Red for Hot, Yellow for Nurture, Gray for Low).
5. Click **Extensions → Apps Script**. Delete any placeholder code and paste the provided script (reference the `GREENSPACE_GOOGLE_SHEET_TEMPLATE.md` for the exact code).
6. Click **Deploy → New deployment**.
7. Select type: **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
8. Click **Deploy**, authorize permissions, and copy the **Web App URL**.
9. Paste this URL into Vercel as `GOOGLE_SHEET_WEBAPP_URL`.

## 2. WhatsApp Alerts (Currently Disabled)

*Note: WhatsApp integration has been paused for v2. The setup instructions remain here for future reference when we re-enable Green API.*

1. When re-enabled, set the following in Vercel:
   - `WHATSAPP_PHONE` = Krishna's WhatsApp number (e.g., `919022745227` — include country code, no plus symbol).
   - `GREENAPI_ID_INSTANCE` = Your Green API instance ID.
   - `GREENAPI_API_TOKEN` = Your Green API token.

## 3. Resend (Emails)

1. Navigate to your Resend dashboard.
2. For testing/sandbox mode, you can use `onboarding@resend.dev` as the sender, which only sends to your verified Resend account email.
3. Create an API Key in Resend and paste it into Vercel as `RESEND_API_KEY`.
4. Add `RESEND_TO_EMAIL` in Vercel (This is Krishna's inbox for production alerts).
5. Later, verify the `greenspacerealty.in` domain in Resend (requires adding DNS TXT/MX records to your domain registrar) to send emails from a professional address.

## 4. Cloudinary (Video & PDF Assets)

1. Create a free Cloudinary account.
2. Upload the 30-second hero video and the project brochure PDF via the dashboard.
3. For the mobile video, generate a transformation URL (e.g., adding `q_auto,w_640` to the URL).
4. Add the plain delivery URLs to Vercel:
   - `NEXT_PUBLIC_HERO_VIDEO_DESKTOP_URL`
   - `NEXT_PUBLIC_HERO_VIDEO_MOBILE_URL`
   - `NEXT_PUBLIC_BROCHURE_PDF_URL`

## 5. Vercel Cron Secret

To secure the cron job endpoint from unauthorized triggers, generate a random string and add it to Vercel Environment Variables as `CRON_SECRET`. Vercel automatically passes this in the `Authorization` header when it runs your scheduled tasks.