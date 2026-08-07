import { NextResponse } from "next/server";
import { sendHotLeadEmail, sendSiteVisitEmail, sendBrochureLeadEmail } from "@/lib/resend";
import { sendLeadToSheet } from "@/lib/sheets";
import { LeadData } from "@/lib/types";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📥 Received Lead Payload:", body);
    
    // Critical Validation
    if (!body.mobile) {
      console.error("❌ Rejected: Missing mobile number");
      return NextResponse.json({ error: "Mobile number is strictly required", success: false }, { status: 400 });
    }

    // Unified Enterprise Payload Mapping
    const leadData: LeadData = {
      name: body.name || "Not Provided",
      mobile: body.mobile,
      email: body.email || "Not Provided",
      enquiryType: body.enquiryType || "General Enquiry",
      unitType: body.unitType || "Not Specified",
      budget: body.budget || "Not Specified",
      timeline: body.timeline || "Not Specified",
      preferredVisitDate: body.preferredVisitDate || "N/A",
      message: body.message || "N/A",
      source: body.source || "direct-api",
      leadPriority: body.leadPriority || "Medium Intent"
    };

    // Intelligent Email Routing Based on Lead Source
    let emailPromise;
    if (leadData.source === 'site-visit-form') {
      emailPromise = sendSiteVisitEmail(leadData);
    } else if (leadData.source === 'brochure-download-form') {
      emailPromise = sendBrochureLeadEmail(leadData);
    } else {
      // Catch-all for Quick Popup, Contact Page, Hero Form, and Builder Form
      emailPromise = sendHotLeadEmail(leadData);
    }

    // Execute Google Sheets Sync and Email Dispatch Concurrently for Maximum Speed
    const results = await Promise.allSettled([
      sendLeadToSheet(leadData),
      emailPromise
    ]);

    // Check for silent failures in the background tasks
    const sheetResult = results[0].status === 'fulfilled' ? results[0].value : false;
    const emailResult = results[1].status === 'fulfilled' ? results[1].value : false;

    console.log(`✅ Lead Processed | Sheet Sync: ${sheetResult ? 'SUCCESS' : 'FAILED'} | Email Sync: ${emailResult ? 'SUCCESS' : 'FAILED'}`);

    // Return immediate success to the frontend
    return NextResponse.json({ message: "Lead processed successfully", success: true }, { status: 200 });
    
  } catch (error) {
    console.error("🔴 Fatal Server Error in /api/lead:", error);
    return NextResponse.json({ error: "Internal Server Error", success: false }, { status: 500 });
  }
}