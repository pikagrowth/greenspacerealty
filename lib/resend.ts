import { Resend } from 'resend';
import { LeadData } from './types';

// Ensure this matches the email you used to register on Resend.com!
const TO_EMAIL = process.env.RESEND_TO_EMAIL || 'greenspacerealitee@gmail.com';
const FROM_EMAIL = 'Greenspace Realty <onboarding@resend.dev>';

export async function sendHotLeadEmail(lead: LeadData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { success: false, error: 'Missing Resend API Key' };
  
  const resend = new Resend(apiKey);
  try {
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `🔥 Hot Lead: ${lead.name}`,
      html: `<p><strong>Name:</strong> ${lead.name}</p><p><strong>Mobile:</strong> ${lead.mobile}</p><p><strong>Type:</strong> ${lead.enquiryType}</p>`,
    });
    console.log("✅ Hot Lead Email Sent:", data);
    return { success: true, data };
  } catch (error) {
    console.error("❌ Resend Error:", error);
    return { success: false, error };
  }
}

export async function sendSiteVisitEmail(lead: LeadData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { success: false, error: 'Missing Resend API Key' };
  
  const resend = new Resend(apiKey);
  try {
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `📅 Site Visit Request: ${lead.name}`,
      html: `<p><strong>Name:</strong> ${lead.name}</p><p><strong>Mobile:</strong> ${lead.mobile}</p><p><strong>Project:</strong> ${lead.unitType}</p>`,
    });
    console.log("✅ Site Visit Email Sent:", data);
    return { success: true, data };
  } catch (error) {
    console.error("❌ Resend Error:", error);
    return { success: false, error };
  }
}

export async function sendBrochureLeadEmail(lead: LeadData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { success: false, error: 'Missing Resend API Key' };
  
  const resend = new Resend(apiKey);
  try {
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `📥 Brochure Download: ${lead.name}`,
      html: `<p><strong>Name:</strong> ${lead.name}</p><p><strong>Mobile:</strong> ${lead.mobile}</p><p><strong>Project:</strong> ${lead.unitType}</p>`,
    });
    console.log("✅ Brochure Email Sent:", data);
    return { success: true, data };
  } catch (error) {
    console.error("❌ Resend Error:", error);
    return { success: false, error };
  }
}