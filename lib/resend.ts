import { Resend } from 'resend';
import { LeadData } from './types';

const resend = new Resend(process.env.RESEND_API_KEY);

// ---------- HOT LEAD — instant alert ----------
export async function sendHotLeadEmail(lead: LeadData) {
  const isBuilder = lead.enquiryType === 'seller-builder';
  const badgeTitle = isBuilder ? '🏗️ New Builder/Mandate Lead' : '🔥 New Hot Lead';
  
  const html = `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF8F3; padding:24px 0; font-family: Arial, sans-serif;">
    <tr>
      <td align="center">
        <table width="480" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #eee;">
          <tr>
            <td style="background:#1F4D3A; padding:20px 24px;">
              <span style="color:#C9A24B; font-size:12px; font-weight:bold; letter-spacing:1px;">GREENSPACE REALTY</span><br/>
              <span style="color:#ffffff; font-size:20px; font-weight:bold;">${badgeTitle}</span>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <p style="margin:0 0 16px; color:#222420; font-size:14px;">
                ${isBuilder ? 'A builder or developer is looking for a sales and marketing partnership.' : 'Someone matching a ready-to-buy profile just submitted an enquiry. Follow up quickly — high-intent leads go cold fast.'}
              </p>
              <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
                <tr><td style="color:#666; font-size:13px; width:110px;">Name</td><td style="color:#222420; font-size:14px; font-weight:bold;">${lead.name}</td></tr>
                <tr style="background:#FAF8F3;"><td style="color:#666; font-size:13px;">Mobile</td><td style="color:#222420; font-size:14px; font-weight:bold;">${lead.mobile}</td></tr>
                <tr><td style="color:#666; font-size:13px;">Email</td><td style="color:#222420; font-size:14px;">${lead.email || '—'}</td></tr>
                <tr style="background:#FAF8F3;"><td style="color:#666; font-size:13px;">Enquiry Type</td><td style="color:#222420; font-size:14px; text-transform: capitalize;">${lead.enquiryType.replace('-', ' ')}</td></tr>
                ${lead.unitType ? `<tr><td style="color:#666; font-size:13px;">Project/Unit</td><td style="color:#222420; font-size:14px;">${lead.unitType}</td></tr>` : ''}
                ${lead.budget ? `<tr style="background:#FAF8F3;"><td style="color:#666; font-size:13px;">Budget</td><td style="color:#222420; font-size:14px;">${lead.budget}</td></tr>` : ''}
                ${lead.timeline ? `<tr><td style="color:#666; font-size:13px;">Timeline</td><td style="color:#222420; font-size:14px;">${lead.timeline}</td></tr>` : ''}
                ${lead.message ? `<tr style="background:#FAF8F3;"><td style="color:#666; font-size:13px;">Message</td><td style="color:#222420; font-size:14px;">${lead.message}</td></tr>` : ''}
                <tr><td style="color:#666; font-size:13px;">Source</td><td style="color:#222420; font-size:14px;">${lead.source}</td></tr>
              </table>
              <a href="https://wa.me/${lead.mobile.replace(/\D/g,'')}"
                 style="display:block; text-align:center; margin-top:20px; background:#3E7B5C; color:#ffffff; text-decoration:none; padding:12px; border-radius:8px; font-size:14px; font-weight:bold;">
                Message on WhatsApp →
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;

  return resend.emails.send({
    from: 'Greenspace Realty <onboarding@resend.dev>', // TODO: Update once domain is verified
    to: process.env.RESEND_TO_EMAIL!,
    subject: `${isBuilder ? '🏗️ Builder Mandate Lead' : '🔥 Hot Lead'}: ${lead.name}`,
    html,
  });
}

// ---------- NURTURE — daily digest (batch these, don't send one-by-one) ----------
export async function sendNurtureDigestEmail(leads: LeadData[]) {
  const rows = leads.map((lead, i) => `
    <tr style="background:${i % 2 === 0 ? '#ffffff' : '#FAF8F3'};">
      <td style="padding:10px; font-size:13px; color:#222420;">${lead.name}</td>
      <td style="padding:10px; font-size:13px; color:#222420;">${lead.mobile}</td>
      <td style="padding:10px; font-size:13px; color:#222420; text-transform: capitalize;">${lead.enquiryType.replace('-', ' ')}</td>
      <td style="padding:10px; font-size:13px; color:#222420;">${lead.timeline || '—'}</td>
    </tr>`).join('');

  const html = `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF8F3; padding:24px 0; font-family: Arial, sans-serif;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #eee;">
          <tr>
            <td style="background:#1F4D3A; padding:20px 24px;">
              <span style="color:#C9A24B; font-size:12px; font-weight:bold; letter-spacing:1px;">GREENSPACE REALTY</span><br/>
              <span style="color:#ffffff; font-size:20px; font-weight:bold;">Today's Nurture Leads (${leads.length})</span>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <p style="margin:0 0 16px; color:#222420; font-size:14px;">
                These are exploring, not ready to buy yet. Worth a soft follow-up call — no urgency, just relationship-building.
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr style="background:#1F4D3A;">
                  <td style="padding:10px; color:#ffffff; font-size:12px; font-weight:bold;">Name</td>
                  <td style="padding:10px; color:#ffffff; font-size:12px; font-weight:bold;">Mobile</td>
                  <td style="padding:10px; color:#ffffff; font-size:12px; font-weight:bold;">Type</td>
                  <td style="padding:10px; color:#ffffff; font-size:12px; font-weight:bold;">Timeline</td>
                </tr>
                ${rows}
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;

  return resend.emails.send({
    from: 'Greenspace Realty <onboarding@resend.dev>', // TODO: Update once domain is verified
    to: process.env.RESEND_TO_EMAIL!,
    subject: `Nurture Digest — ${leads.length} lead${leads.length !== 1 ? 's' : ''} today`,
    html,
  });
}