import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, mobile, email, enquiryType, unitType, budget, timeline, message, source, tab } = body;

    // Basic validation
    if (!name || !mobile) {
      return NextResponse.json(
        { error: "Name and mobile number are required." },
        { status: 400 }
      );
    }

    // Log lead data (Can be extended to integrate with Google Sheets API or CRM webhook via env)
    console.log("New Lead Received:", {
      timestamp: new Date().toISOString(),
      name,
      mobile,
      email: email || "N/A",
      enquiryType: enquiryType || "general",
      unitType: unitType || "N/A",
      budget: budget || "N/A",
      timeline: timeline || "N/A",
      message: message || "N/A",
      source: source || "website",
      tab: tab || "Leads"
    });

    // Optional webhook forwarding if configured
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      } catch (sheetError) {
        console.error("Failed to forward lead to webhook:", sheetError);
      }
    }

    return NextResponse.json(
      { success: true, message: "Lead submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lead API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}