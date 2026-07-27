# Environment & Integrations Setup Guide

This document outlines the final steps Krishna (or the developer on his behalf) needs to take to wire up the third-party integrations (Google Sheets, CallMeBot, and Resend).

## 1. Google Sheets & Apps Script Setup

1. Create a new Google Sheet named **"Greenspace Realty — Leads"**.
2. Create exactly 5 tabs (named exactly as follows, case-sensitive):
   - `Hot Leads`
   - `Quick Leads`
   - `Nurture`
   - `Low Intent`
   - `Archive`
3. In all 5 tabs, set row 1 as the header:
   `Timestamp | Name | Mobile | Email | Unit Type | Budget | Timeline | Source`
4. Click **Extensions → Apps Script**. Delete any placeholder code and paste this complete script:

\`\`\`javascript
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Special Action: Fetch Nurture leads for the cron digest and move them to Archive
  if (data.action === 'getAndClearNurture') {
    const sheet = ss.getSheetByName("Nurture");
    if (!sheet) return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Nurture tab not found" })).setMimeType(ContentService.MimeType.JSON);
    
    const lastRow = sheet.getLastRow();
    if (lastRow <= 1) return ContentService.createTextOutput(JSON.stringify({ status: "success", data: [] })).setMimeType(ContentService.MimeType.JSON);
    
    // Grab the data (skipping the header)
    const range = sheet.getRange(2, 1, lastRow - 1, 8);
    const values = range.getValues();
    
    const leads = values.map(row => ({
      name: row[1],
      mobile: row[2],
      email: row[3],
      unitType: row[4],
      budget: row[5],
      timeline: row[6],
      source: row[7]
    }));
    
    // Move records to the Archive tab
    const archiveSheet = ss.getSheetByName("Archive");
    if (archiveSheet) {
      const archiveRange = archiveSheet.getRange(archiveSheet.getLastRow() + 1, 1, values.length, 8);
      archiveRange.setValues(values);
    }
    
    // Clear Nurture tab (leaves headers intact)
    range.clearContent();
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success", data: leads })).setMimeType(ContentService.MimeType.JSON);
  }

  // Default Action: Append a new lead
  const sheet = ss.getSheetByName(data.tab);
  if (!sheet) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: "Tab not found: " + data.tab })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.mobile || "",
    data.email || "",
    data.unitType || "",
    data.budget || "",
    data.timeline || "",
    data.source || ""
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ status: "success" })
  ).setMimeType(ContentService.MimeType.JSON);
}
\`\`\`

5. Click **Deploy → New deployment**.
6. Select type: **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy**, authorize permissions, and copy the **Web App URL**.
8. Paste this URL into Vercel as `GOOGLE_SHEET_WEBAPP_URL`.

## 2. CallMeBot (WhatsApp Alerts)

1. Save **+34 644 59 71 45** as a contact on Krishna's phone.
2. Send this exact WhatsApp message to that number: `I allow callmebot to send me messages`
3. Within minutes, the bot will reply with a personal API key.
4. Set the following in Vercel:
   - `CALLMEBOT_PHONE` = Krishna's WhatsApp number (e.g., `919209278867` — no plus symbol).
   - `CALLMEBOT_API_KEY` = The key provided by the bot.

## 3. Resend (Emails)

1. Add domain to Resend dashboard.
2. Add DNS TXT/MX records to Cloudflare or Domain Registrar.
3. Wait for Verification.
4. Create an API Key in Resend and paste it into Vercel as `RESEND_API_KEY`.
5. Add `RESEND_TO_EMAIL` in Vercel (Krishna's receiving email).
6. Update `lib/resend.ts` `from` field from `onboarding@resend.dev` to the newly verified domain email (e.g., `leads@greenspacerealty.in`).

## 4. Vercel Cron Secret

To secure the cron job endpoint from unauthorized triggers, generate a random string and add it to Vercel Environment Variables as `CRON_SECRET`. Vercel automatically passes this in the `Authorization` header when it runs your scheduled tasks.