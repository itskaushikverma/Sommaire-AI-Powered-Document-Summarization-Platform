import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import { MotionDiv, MotionH2, MotionSection, MotionH1, MotionSpan } from '../common/motion-wrapper';
import { containerVariants, itemVariants } from '@/utils/constants';

const buttonVariants = {
  scale: 1.05,
  tranition: {
    type: 'spring',
    damping: 10,
    striffness: 300,
    duration: 0.8,
  },
};

export default function HeroSection() {
  return (
    <MotionSection
      viewport={{ once: true }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="animate-in relative z-0 mx-auto flex max-w-7xl flex-col items-center justify-center py-16 transition-all sm:py-20 lg:px-12 lg:pb-28"
    >
      <MotionDiv
        viewport={{ once: true }}
        variants={itemVariants}
        className="animate-gradient-x group relative cursor-default overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 p-[1px]"
      >
        <Badge
          variant={'secondary'}
          className="relative rounded-full bg-white px-6 py-2 text-base font-medium transition-colors duration-200 group-hover:bg-gray-50"
        >
          <Sparkles className="mr-2 h-12 w-12 animate-pulse text-rose-600" />
          <p className="text-base text-rose-600">Powered by AI</p>
        </Badge>
      </MotionDiv>
      <MotionH1
        viewport={{ once: true }}
        variants={itemVariants}
        className="py-6 text-center font-bold"
      >
        Transform PDFs into{' '}
        <span className="relative inline-block">
          <MotionSpan
            viewport={{ once: true }}
            whileHover={buttonVariants}
            className="relative z-10 px-2"
          >
            concise
          </MotionSpan>{' '}
          <span
            className="animate-rotate absolute inset-0 rounded-lg bg-rose-200/50"
            aria-hidden="true"
          ></span>
        </span>{' '}
        summaries
      </MotionH1>
      <MotionH2
        viewport={{ once: true }}
        className="px-4 text-center text-lg text-gray-600 sm:text-xl lg:max-w-4xl lg:px-0 lg:text-2xl"
      >
        Get a beautiful summary reel of the document in seconds.
      </MotionH2>
      <MotionDiv viewport={{ once: true }} variants={itemVariants} whileHover={buttonVariants}>
        <Button
          variant={'link'}
          className="mt-6 rounded-full bg-linear-to-r from-slate-900 to-rose-500 px-8 py-6 text-base font-bold text-white shadow-lg transition-colors duration-1000 hover:bg-linear-to-r hover:from-rose-500 hover:to-slate-900 hover:no-underline sm:px-10 sm:py-7 sm:text-lg lg:mt-16 lg:px-12 lg:py-8 lg:text-xl"
        >
          <Link href="/#pricing" className="flex items-center gap-2">
            <span>Try Sommaire</span>
            <ArrowRight className="animate-pulse" />
          </Link>
        </Button>
      </MotionDiv>
    </MotionSection>
  );
}
