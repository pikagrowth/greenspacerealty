// app/api/lead/route.ts
import { NextResponse } from "next/server";
import { determineIntentScore, determineSheetTab } from "@/lib/scoring";
import { sendHotLeadEmail, sendSiteVisitEmail, sendBrochureLeadEmail } from "@/lib/resend";
// import { sendWhatsAppAlert } from "@/lib/whatsapp"; // DISABLED: re-enable when ready
import { sendLeadToSheet } from "@/lib/sheets";
import { LeadData } from "@/lib/types";

// Helper function to format lead payload into a clean WhatsApp text message
function formatWhatsAppMessage(payload: Record<string, any>): string {
  return [
    `🔥 *NEW HOT LEAD RECEIVED* 🔥`,
    `--------------------------------`,
    `👤 *Name:* ${payload.name || "N/A"}`,
    `📞 *Mobile:* ${payload.mobile || "N/A"}`,
    `📧 *Email:* ${payload.email || "N/A"}`,
    `🏷️ *Enquiry Type:* ${payload.enquiryType || "N/A"}`,
    `🏢 *Unit Type:* ${payload.unitType || "N/A"}`,
    `💰 *Budget:* ${payload.budget || "N/A"}`,
    `⏳ *Timeline:* ${payload.timeline || "N/A"}`,
    `📍 *Source:* ${payload.source || "N/A"}`,
    `📁 *Priority:* ${payload.leadPriority || "N/A"}`,
    `📅 *Pref. Date:* ${payload.preferredVisitDate || "N/A"}`,
    `💬 *Message:* ${payload.message || "N/A"}`,
  ].join("\n");
}

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
      preferredVisitDate = "",
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
      preferredVisitDate,
    };

    // 2. Run scoring logic correctly (Fixing the previous destructuring bug)
    const score = determineIntentScore(leadData);
    const tab = determineSheetTab(leadData, score);

    // 3. Set the lead priority (formerly sheet tab) for the single-tab Google Sheet
    leadData.leadPriority = tab;

    // 4. Send Lead to Google Sheets via the helper in sheets.ts
    const sheetSuccess = await sendLeadToSheet(leadData);
    if (sheetSuccess) {
      console.log(`🟢 Lead logged to Google Sheet (Priority: ${tab}, Score: ${score})`);
    } else {
      console.error("🔴 Error logging lead to Google Sheets");
    }

    // 5. Instant Real-Time Notifications based on source & intent score
    if (source === 'site-visit-form') {
      await sendSiteVisitEmail(leadData);
      console.log("🟢 Site Visit email dispatched successfully.");
    } else if (source === 'brochure-download-form') {
      await sendBrochureLeadEmail(leadData);
      console.log("🟢 Brochure Download email dispatched successfully.");
    } else if (score === 'HIGH' || enquiryType === 'seller-builder') {
      // const whatsAppMessage = formatWhatsAppMessage(leadData);

      await Promise.allSettled([
        sendHotLeadEmail(leadData),
        // sendWhatsAppAlert(whatsAppMessage), // DISABLED: re-enable when ready
      ]);
      console.log("🟢 Real-time Hot Lead notifications (Email) dispatched successfully.");
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