import { razorpay } from '@/lib/razorpay';
import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req) {
  try {
    const { email, userId } = await req.json();

    const subscription = await razorpay.subscriptions.create({
      plan_id: process.env.RAZORPAY_PLAN_ID,
      customer_notify: 1,
      total_count: 12,
      notes: {
        email,
        userId,
      },
    });

    return NextResponse.json({ success: true, subscription });
  } catch (error) {
    console.error('Subscription Error:', error);
    return NextResponse.json({ error: 'Failed to create subscription' }, { status: 500 });
  }
}
