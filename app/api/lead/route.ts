import { NextResponse } from "next/server";
import { sendHotLeadEmail, sendSiteVisitEmail, sendBrochureLeadEmail } from "@/lib/resend";
import { sendLeadToSheet } from "@/lib/sheets";
import { LeadData } from "@/lib/types";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📥 Received payload:", body);
    
    if (!body.mobile) {
      return NextResponse.json({ error: "Mobile number is required", success: false }, { status: 400 });
    }

    const leadData: LeadData = {
      name: body.name || "N/A",
      mobile: body.mobile,
      email: body.email || "N/A",
      enquiryType: body.enquiryType || "general",
      unitType: body.unitType || "N/A",
      budget: body.budget || "N/A",
      timeline: body.timeline || "N/A",
      message: body.message || "N/A",
      source: body.source || "website",
      preferredVisitDate: body.preferredVisitDate || "N/A",
      leadPriority: body.leadPriority || "High Intent"
    };

    // Determine the correct email to send
    let emailPromise;
    if (leadData.source === 'site-visit-form') {
      emailPromise = sendSiteVisitEmail(leadData);
    } else if (leadData.source === 'brochure-download-form') {
      emailPromise = sendBrochureLeadEmail(leadData);
    } else {
      emailPromise = sendHotLeadEmail(leadData);
    }

    // Run both operations simultaneously
    await Promise.allSettled([
      sendLeadToSheet(leadData),
      emailPromise
    ]);

    return NextResponse.json({ message: "Lead processed", success: true }, { status: 200 });
    
  } catch (error) {
    console.error("🔴 Fatal error in lead API route:", error);
    return NextResponse.json({ error: "Internal Server Error", success: false }, { status: 500 });
  }
}