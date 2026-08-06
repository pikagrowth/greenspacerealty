import { LeadData } from "./types";

export async function sendLeadToSheet(lead: LeadData): Promise<boolean> {
  const url = process.env.GOOGLE_SHEET_WEBAPP_URL;
  if (!url) {
    console.error("❌ Missing GOOGLE_SHEET_WEBAPP_URL");
    return false;
  }

  try {
    const payload = {
      ...lead,
      leadPriority: lead.leadPriority || 'Low Intent'
    };

    console.log("🔄 Contacting Google Sheets API...");

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await response.text();

    try {
      const result = JSON.parse(text);
      if (result.status === 'success' || result.result === 'success') {
        console.log("✅ Google Sheets Updated Successfully!");
        return true;
      } else {
        console.error("❌ Apps Script Error:", result);
        return false;
      }
    } catch (parseError) {
      console.error("❌ Sheets returned HTML instead of JSON. Ensure Web App access is set to 'Anyone'. Response snippet:", text.substring(0, 100));
      return false;
    }
  } catch (error) {
    console.error("❌ Network error connecting to Sheets:", error);
    return false;
  }
}