// lib/sheets.ts
import { LeadData } from "./types";

export async function sendLeadToSheet(lead: LeadData): Promise<boolean> {
  const url = process.env.GOOGLE_SHEET_WEBAPP_URL;
  
  if (!url) {
    console.error("Missing GOOGLE_SHEET_WEBAPP_URL");
    return false;
  }

  try {
    // v2 Update: We force the physical 'tab' to 'Leads' for the Apps Script,
    // and pass the scored priority as 'leadPriority' for the new column.
    const payload = {
      ...lead,
      tab: 'Leads',
      leadPriority: lead.leadPriority || 'Low Intent'
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
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