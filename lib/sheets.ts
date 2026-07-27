import { LeadData } from "./types";

export async function sendLeadToSheet(lead: LeadData): Promise<boolean> {
  const url = process.env.GOOGLE_SHEET_WEBAPP_URL;
  
  if (!url) {
    console.error("Missing GOOGLE_SHEET_WEBAPP_URL");
    return false;
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // The Apps Script expects JSON payload with a 'tab' property
      body: JSON.stringify(lead),
    });

    const result = await response.json();
    return result.status === 'success';
  } catch (error) {
    console.error("Failed to push lead to Google Sheet:", error);
    return false;
  }
}

export async function getAndClearNurtureLeads(): Promise<LeadData[]> {
  const url = process.env.GOOGLE_SHEET_WEBAPP_URL;
  
  if (!url) {
    console.error("Missing GOOGLE_SHEET_WEBAPP_URL");
    return [];
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Passing a specific action to our Apps Script to pull the digest
      body: JSON.stringify({ action: 'getAndClearNurture' }),
    });

    const result = await response.json();
    if (result.status === 'success' && result.data) {
      return result.data as LeadData[];
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch nurture leads from Google Sheet:", error);
    return [];
  }
}