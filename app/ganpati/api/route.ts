import { NextResponse } from "next/server";
import { sendHotLeadEmail } from "@/lib/resend";
import { sendLeadToSheet } from "@/lib/sheets";
import { LeadData } from "@/lib/types";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📥 Received Ganpati Event Lead:", body);
    
    // Critical Validation
    if (!body.mobile) {
      console.error("❌ Rejected: Missing mobile number in Ganpati form");
      return NextResponse.json({ error: "Mobile number is strictly required", success: false }, { status: 400 });
    }

    // Unified Enterprise Payload Mapping (Fitted for Ganpati Event)
    const leadData: LeadData = {
      name: body.name || "Not Provided",
      mobile: body.mobile,
      email: body.email || "Not Provided",
      enquiryType: "Ganeshotsav Gamified Offer", 
      unitType: body.configuration || "Not Specified",
      budget: body.budget || "Not Specified",
      timeline: "Immediate",
      preferredVisitDate: "N/A",
      // We inject the prizes directly into the message so your existing email template picks it up perfectly!
      message: `🏆 GAMIFIED PRIZES WON: ${body.wonOffer}`,
      source: "ganpati-event-form",
      leadPriority: "High Intent" 
    };

    // Execute Google Sheets Sync and Email Dispatch Concurrently for Maximum Speed
    const results = await Promise.allSettled([
      sendLeadToSheet(leadData),
      sendHotLeadEmail(leadData) // Using your existing working hot lead template
    ]);

    // Check for silent failures in the background tasks
    const sheetResult = results[0].status === 'fulfilled' ? results[0].value : false;
    const emailResult = results[1].status === 'fulfilled' ? results[1].value : false;

    console.log(`✅ Ganpati Lead Processed | Sheet Sync: ${sheetResult ? 'SUCCESS' : 'FAILED'} | Email Sync: ${emailResult ? 'SUCCESS' : 'FAILED'}`);

    // Return immediate success to the frontend to trigger the Voucher Generation
    return NextResponse.json({ message: "Lead processed successfully", success: true }, { status: 200 });
    
  } catch (error) {
    console.error("🔴 Fatal Server Error in /ganpati/api:", error);
    return NextResponse.json({ error: "Internal Server Error", success: false }, { status: 500 });
  }
}