import { NextResponse } from 'next/server';
import { getDbConnection } from '@/lib/db';
import { razorpay } from '@/lib/razorpay';

export async function POST(req) {
  const { user_id, email } = await req.json();
  const sql = await getDbConnection();

  const query = await sql`SELECT subscription_id FROM users WHERE user_id = ${user_id}`;
  const subscriptionId = query?.[0]?.subscription_id;

  if (!subscriptionId || !user_id) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  try {
    const subscription = await razorpay.subscriptions.fetch(subscriptionId);
    const endTimestamp = subscription.current_end * 1000;
    const endDate = new Date(endTimestamp);

    const payments = await razorpay.payments.all({
      subscription_id: subscriptionId,
    });

    const razorpay_payment_id = payments.items?.[0]?.id || null;
    const email = payments.items?.[0].email;

    await razorpay.subscriptions.cancel(subscriptionId);

    await sql`      UPDATE users       SET status = 'active',           subscription_id = NULL,           subscription_end_date = ${endDate.toISOString()},        price_id = 'basic_free'   WHERE user_id = ${user_id}  `;

    await sql`      INSERT INTO payments (amount, status, razorpay_payment_id, subscription_id,user_email, user_id)      VALUES (${200}, 'canceled', ${razorpay_payment_id},${subscriptionId}, ${email}, ${user_id} ); `;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Cancel error:', err);
    return NextResponse.json({ error: 'Failed to cancel subscription' }, { status: 500 });
  }
}
