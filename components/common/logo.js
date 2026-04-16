'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { MotionDiv } from '@/components/common/motion-wrapper';

export function Logo({ size = 'default', className, href = '/' }) {
  const sizeClasses = {
    small: 'h-6',
    default: 'h-13',
    large: 'h-16',
  };

  const textSizeClasses = {
    small: 'text-sm',
    default: 'text-xl',
    large: 'text-3xl',
  };

  const logoContent = (
    <div className={cn('flex items-center gap-2', className)}>
      <MotionDiv
        whileHover={{ scale: 1.05, rotate: [0, -2, 0, 2, 0] }}
        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        className={cn('relative', sizeClasses[size])}
      >
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn('h-full w-auto')}
        >
          <circle cx="60" cy="60" r="50" className="fill-white dark:fill-gray-800" />

          <circle
            cx="60"
            cy="60"
            r="48"
            className="stroke-rose-500 dark:stroke-rose-400"
            strokeWidth="2"
            strokeDasharray="4 2"
          />

          <g>
            <rect
              x="30"
              y="40"
              width="50"
              height="60"
              rx="3"
              className="fill-gray-100 stroke-gray-300 dark:fill-gray-700 dark:stroke-gray-600"
              strokeWidth="1.5"
              transform="rotate(-5 30 40)"
            />

            <rect
              x="35"
              y="35"
              width="50"
              height="60"
              rx="3"
              className="fill-gray-50 stroke-gray-300 dark:fill-gray-700 dark:stroke-gray-600"
              strokeWidth="1.5"
              transform="rotate(-2 35 35)"
            />

            <rect
              x="40"
              y="30"
              width="50"
              height="60"
              rx="3"
              className="fill-white stroke-rose-500 dark:fill-gray-600 dark:stroke-rose-400"
              strokeWidth="2"
            />

            <line
              x1="50"
              y1="45"
              x2="80"
              y2="45"
              className="stroke-rose-400 dark:stroke-rose-300"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="50"
              y1="55"
              x2="80"
              y2="55"
              className="stroke-rose-400 dark:stroke-rose-300"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="50"
              y1="65"
              x2="70"
              y2="65"
              className="stroke-rose-400 dark:stroke-rose-300"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          <g className="translate-x-[5px] translate-y-[5px]">
            <circle
              cx="75"
              cy="75"
              r="18"
              className="fill-rose-100 stroke-rose-500 dark:fill-rose-900/70 dark:stroke-rose-400"
              strokeWidth="2"
            />

            <path
              d="M65,75 C65,70 70,65 75,65 C80,65 85,70 85,75 C85,80 80,85 75,85 C70,85 65,80 65,75Z"
              className="fill-none stroke-rose-500 dark:stroke-rose-400"
              strokeWidth="1.5"
            />
            <path
              d="M75,65 L75,85 M68,70 L82,80 M82,70 L68,80"
              className="stroke-rose-500 dark:stroke-rose-400"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <circle
              cx="75"
              cy="75"
              r="22"
              className="stroke-rose-500/30 dark:stroke-rose-400/30"
              strokeWidth="1.5"
            />
            <circle
              cx="75"
              cy="75"
              r="26"
              className="stroke-rose-500/20 dark:stroke-rose-400/20"
              strokeWidth="1"
            />
          </g>

          <path
            d="M90,30 L93,33 L90,36 L87,33 L90,30Z"
            className="fill-rose-500 dark:fill-rose-400"
          />
          <path
            d="M40,85 L42,87 L40,89 L38,87 L40,85Z"
            className="fill-rose-500 dark:fill-rose-400"
          />
          <path
            d="M60,20 L62,22 L60,24 L58,22 L60,20Z"
            className="fill-rose-500 dark:fill-rose-400"
          />
        </svg>
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 1 }}
        whileHover={{ scale: 1.03 }}
        className={cn('font-bold', textSizeClasses[size])}
      >
        <span className="bg-linear-to-r from-rose-600 via-rose-500 to-rose-400 bg-clip-text text-transparent dark:from-rose-400 dark:via-rose-500 dark:to-rose-300">
          Sommaire
        </span>
        <span className="ml-1 text-xs font-normal text-gray-500 dark:text-gray-400">AI</span>
      </MotionDiv>
    </div>
  );

  if (href) {
    return <Link href={href}>{logoContent}</Link>;
  }

  return logoContent;
}
