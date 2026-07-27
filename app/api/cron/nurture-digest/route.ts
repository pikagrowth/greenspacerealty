import { NextResponse } from 'next/server';
import { getAndClearNurtureLeads } from '@/lib/sheets';
import { sendNurtureDigestEmail } from '@/lib/resend';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    // Vercel Cron jobs send an authorization header. Verify it if CRON_SECRET is set.
    const authHeader = request.headers.get('authorization');
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const leads = await getAndClearNurtureLeads();

    if (!leads || leads.length === 0) {
      return NextResponse.json({ status: 'success', message: 'No nurture leads to process today.' });
    }

    // Send the batched email
    await sendNurtureDigestEmail(leads);

    return NextResponse.json({ 
      status: 'success', 
      message: `Successfully processed ${leads.length} nurture leads.` 
    });

  } catch (error) {
    console.error('Failed to run nurture digest cron:', error);
    return NextResponse.json({ status: 'error', message: 'Cron job failed.' }, { status: 500 });
  }
}