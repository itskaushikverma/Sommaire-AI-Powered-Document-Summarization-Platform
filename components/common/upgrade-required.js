import React from 'react';
import BgGradient from './bg-gradient';
import { ArrowRight, Sparkle } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function UpgradeRequired() {
  return (
    <div className="relative min-h-[50vh]">
      <BgGradient className="from-red-100 via-rose-50 to-orange-200" />
      <div className="container px-8 py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-2 text-rose-500">
            <Sparkle className="h-6 w-6" />
            <span className="text-sm font-medium tracking-wider uppercase">Premium Feature</span>
          </div>

          <h1 className="bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tighter text-transparent">
            Upgrade Required
          </h1>
          <p className="max-w-xl rounded-lg border-2 border-dashed border-rose-200 bg-white/50 p-6 text-lg leading-8 text-gray-600 backdrop-blur-sm">
            You need to Upgrade to the Pro Plan to get more uploads.💗
          </p>
          <Button
            asChild
            className="bg-linear-to-r from-rose-500 to-rose-700 text-white hover:from-rose-600 hover:to-rose-700"
          >
            <Link href="/#pricing" className="flex items-center gap-2">
              View Pricing Plan <ArrowRight className="g-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
