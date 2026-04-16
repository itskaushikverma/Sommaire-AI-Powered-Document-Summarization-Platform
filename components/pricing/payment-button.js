'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Script from 'next/script';
import { useAuth } from '@clerk/nextjs';

const PaymentButton = ({ email, razorpayKey }) => {
  const { userId, isLoaded } = useAuth();
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleScriptLoad = () => {
    setIsScriptLoaded(true);
  };

  const handlePayment = async () => {
    if (!isScriptLoaded || !isLoaded || !userId) {
      console.error('Script not loaded or user not authenticated');
      return;
    }

    try {
      setIsProcessing(true);

      const res = await fetch('/api/payment/createSubscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, userId }),
      });

      const resData = await res.json();

      if (!resData.success) {
        throw new Error(resData.error || 'Failed to create subscription');
      }

      const subscription = resData.subscription;

      const options = {
        key: razorpayKey,
        subscription_id: subscription.id,
        name: 'Sommaire AI Pro',
        handler: async function (response) {
          const { razorpay_payment_id, razorpay_subscription_id, razorpay_signature } = response;
          const verifyRes = await fetch('/api/payment/verifySubscription', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_payment_id,
              razorpay_subscription_id,
              razorpay_signature,
              email,
              userId,
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            setIsProcessing(false);
            window.location.href = '/dashboard';
          }
        },
        prefill: {
          email,
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={handleScriptLoad}
        strategy="lazyOnload"
      />
      <button
        className="flex w-full items-center justify-center gap-2 rounded-full border-2 bg-linear-to-r from-rose-800 to-rose-500 py-2 text-white no-underline transition-colors duration-1000 hover:from-rose-500 hover:to-rose-800"
        onClick={handlePayment}
        disabled={!isScriptLoaded || isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Try Now'} {!isProcessing && <ArrowRight size={18} />}
      </button>
    </>
  );
};

export default PaymentButton;
