import crypto from 'crypto';
import { NextResponse } from 'next/server';
import { getDbConnection } from '@/lib/db';

export async function POST(req) {
  try {
    const body = await req.json();

    const { razorpay_payment_id, razorpay_subscription_id, razorpay_signature, email, userId } =
      body;

    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_payment_id}|${razorpay_subscription_id}`)
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const sql = await getDbConnection();

    await sql`
      INSERT INTO payments (amount, status, razorpay_payment_id, subscription_id,user_email, user_id)
      VALUES (${200}, 'success', ${razorpay_payment_id},${razorpay_subscription_id}, ${email}, ${userId} );
    `;

    await sql`
      UPDATE users 
      SET status = 'subscribed', price_id = 'pro_monthly', subscription_id = ${razorpay_subscription_id}
      WHERE email = ${email} AND user_id = ${userId};
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Verify Subscription Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
