import React from 'react';
import { MotionDiv } from '../common/motion-wrapper';
import { listVariants } from '@/utils/constants';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckIcon } from 'lucide-react';
import PaymentButton from './payment-button';
import { currentUser } from '@clerk/nextjs/server';
import { getPriceId } from '@/lib/user';
import { Button } from '../ui/button';
import Link from 'next/link';

export default async function PricingCardPro({ name, description, items, id, price }) {
  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress;

  let priceId = await getPriceId(user?.id);

  return (
    <MotionDiv
      viewport={{ once: true }}
      variants={listVariants}
      whileHover={{ scale: 1.02 }}
      className="relative w-full max-w-lg duration-300 hover:scale-105 hover:transition-all"
    >
      <div
        className={cn(
          'relative z-10 flex h-full flex-col gap-4 rounded-2xl border-[1px] border-gray-500/20 p-8 lg:gap-8',
          id === 'pro' && 'gap-5 border-2 border-rose-500',
        )}
      >
        <MotionDiv
          viewport={{ once: true }}
          variants={listVariants}
          className="flex items-center justify-between gap-4"
        >
          <div>
            <p className="text-lg font-bold capitalize lg:text-xl">{name}</p>
            <p className="text-base-content/80 mt-2">{description}</p>
          </div>
        </MotionDiv>

        <MotionDiv viewport={{ once: true }} variants={listVariants} className="flex gap-2">
          <p className="text-5xl font-extrabold tracking-tight">₹ {price}</p>
          <div className="mb-[5px] flex flex-col justify-end">
            <p className="text-xs">/month</p>
          </div>
        </MotionDiv>

        <MotionDiv
          viewport={{ once: true }}
          variants={listVariants}
          className="flex-1 space-y-2.5 text-base leading-relaxed"
        >
          {items.map((item, idx) => (
            <li className="flex items-center gap-2" key={idx}>
              <CheckIcon size={18} />
              <span>{item}</span>
            </li>
          ))}
        </MotionDiv>

        <MotionDiv
          viewport={{ once: true }}
          variants={listVariants}
          className="flex w-full justify-center space-y-2 no-underline"
        >
          {priceId === 'basic_free' ? (
            <PaymentButton email={email} razorpayKey={process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID} />
          ) : (
            <Link className="w-full no-underline" href="/upload">
              <Button
                variant="link"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-rose-800 to-rose-500 py-2 text-white no-underline transition-colors duration-1000 hover:from-rose-500 hover:to-rose-800"
              >
                Try Now <ArrowRight size={18} />
              </Button>
            </Link>
          )}
        </MotionDiv>
      </div>
    </MotionDiv>
  );
}
