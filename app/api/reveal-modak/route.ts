import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, mobile, email, bhk } = await request.json();

    if (!name || !mobile || !email || !bhk) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // 50/50 Probability Logic
    const offers = [
      "₹51,000 Spot Booking Discount on 2 & 3 BHK",
      "Free Gold Coin on Booking"
    ];
    const winningOffer = offers[Math.floor(Math.random() * offers.length)];
    const voucherCode = `BAPPA-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    // Email A: To Customer
    const customerEmail = resend.emails.send({
      from: 'Greenspace Realty <events@greenspacerealty.in>', // Update with your verified domain
      to: email,
      subject: 'Ganpati Bappa Morya! Here is your Golden Modak Gift 🪔',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #fdfbf7; padding: 30px; border-radius: 12px; border: 2px solid #D4AF37;">
          <h1 style="color: #5C1615; text-align: center;">Bappa's Blessings are Here!</h1>
          <p style="font-size: 16px; color: #333;">Dear ${name},</p>
          <p style="font-size: 16px; color: #333;">Thank you for participating in our Golden Modak Reveal for <strong>Shravan Siddhant</strong>.</p>
          <div style="background-color: #5C1615; color: #D4AF37; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <h2 style="margin: 0; font-size: 24px;">You Won: ${winningOffer}</h2>
            <p style="margin-top: 10px; font-size: 18px; color: #fff;">Your Voucher Code: <strong>${voucherCode}</strong></p>
          </div>
          <p style="font-size: 16px; color: #333;">Show this code to our sales team during your site visit to redeem your offer. Valid for a limited time only!</p>
          <br/>
          <p style="font-size: 14px; color: #666;">Warm Regards,<br/>Greenspace Realty Team</p>
        </div>
      `,
    });

    // Email B: To Sales Team
    const salesEmail = resend.emails.send({
      from: 'System <events@greenspacerealty.in>', 
      to: 'sales@greenspacerealty.in', // Update with your sales email
      subject: `🚨 New Ganeshotsav Lead: ${name}`,
      html: `
        <h2>New Lead from Golden Modak Campaign</h2>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Mobile:</strong> ${mobile}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Preference:</strong> ${bhk} BHK</li>
          <li><strong>Won Offer:</strong> ${winningOffer}</li>
          <li><strong>Voucher Code:</strong> ${voucherCode}</li>
        </ul>
      `,
    });

    // Fire emails concurrently
    await Promise.all([customerEmail, salesEmail]);

    // Return the offer to the frontend to trigger the reveal animation
    return NextResponse.json({ success: true, offer: winningOffer });

  } catch (error) {
    console.error('Modak API Error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}