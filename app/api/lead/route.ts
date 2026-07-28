import { NextResponse } from "next/server";
import { determineIntentScore } from "@/lib/scoring";
import { sendHotLeadEmail } from "@/lib/resend";
import { sendWhatsAppAlert } from "@/lib/whatsapp";
import { LeadData } from "@/lib/types";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const {
      name = "",
      mobile,
      email = "",
      enquiryType = "general",
      unitType = "",
      budget = "",
      timeline = "",
      message = "",
      source = "website",
    } = body;

    // 1. Validate required fields
    if (!mobile) {
      return NextResponse.json(
        { error: "Mobile number is required" },
        { status: 400 }
      );
    }

    const leadData: LeadData = {
      name,
      mobile,
      email,
      enquiryType,
      unitType,
      budget,
      timeline,
      message,
      source,
    };

    // 2. Run scoring logic to determine intent level and target Google Sheet tab
    const scoreResult: any = determineIntentScore(leadData);
    const score = scoreResult?.score ?? scoreResult?.value ?? scoreResult?.intent ?? scoreResult?.level ?? "MEDIUM";
    const tab = scoreResult?.tab ?? "General Leads";

    const sheetPayload = {
      ...leadData,
      tab,
    };

    // 3. Send Lead to Google Sheets via Webhook
    const scriptUrl = process.env.GOOGLE_SHEET_WEBAPP_URL;
    if (scriptUrl) {
      try {
        await fetch(scriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sheetPayload),
        });
        console.log(`🟢 Lead logged to Google Sheet Tab: [${tab}] (Score: ${score})`);
      } catch (sheetError) {
        console.error("🔴 Error logging lead to Google Sheets:", sheetError);
      }
    } else {
      console.warn("⚠️ GOOGLE_SHEET_WEBAPP_URL missing in environment variables.");
    }

    // 4. Instant Real-Time Notifications for Hot Leads & Builder Mandates
    const isHotLead = 
      score === "HIGH" || 
      enquiryType === "seller-builder" || 
      tab === "Hot Leads" || 
      tab === "Builder Leads";

    if (isHotLead) {
      try {
        await Promise.allSettled([
          sendHotLeadEmail(sheetPayload),
          sendWhatsAppAlert(sheetPayload),
        ]);
        console.log("🟢 Real-time Hot Lead notifications (Email + WhatsApp) dispatched successfully.");
      } catch (alertError) {
        console.error("🔴 Error dispatching real-time notifications:", alertError);
      }
    }

    return NextResponse.json(
      { message: "Lead submitted successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("🔴 Fatal error in lead API route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}