import { NextResponse } from 'next/server';
import { getDbConnection } from '@/lib/db';
import { razorpay } from '@/lib/razorpay';

export async function POST(req) {
  try {
    const { user_id } = await req.json();

    if (!user_id) {
      return NextResponse.json({ error: 'Missing user_id' }, { status: 400 });
    }

    const sql = await getDbConnection();
    const result = await sql`SELECT subscription_id FROM users WHERE user_id = ${user_id}`;
    const subscriptionId = result?.[0]?.subscription_id;

    if (!subscriptionId) {
      return NextResponse.json({ error: 'No subscription found for user' }, { status: 404 });
    }

    const subscription = await razorpay.subscriptions.fetch(subscriptionId);
    const nextBillingDate = new Date(subscription.current_end * 1000); // Unix to JS Date

    return NextResponse.json({
      success: true,
      next_billing_date: nextBillingDate.toISOString(),
      status: subscription.status,
    });
  } catch (error) {
    console.error('Error fetching billing date:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
