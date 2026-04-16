import React from 'react';
import { Skeleton } from '../ui/skeleton';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';

export default function LoadingSkeleton() {
  return (
    <Card className="from-background via-background/95 relative mx-auto h-[700px] w-full overflow-hidden rounded-3xl border border-rose-500/10 bg-linear-to-br to-rose-500/5 px-2 shadow-2xl backdrop-blur-lg sm:w-[500px]">
      <div className="bg-background/80 absolute top-0 right-0 left-0 z-20 border-b border-rose-500/10 pt-4 pb-2 backdrop-blur-xs">
        <div className="flex gap-1.5 px-4">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="h-1.5 flex-1 overflow-hidden rounded-full bg-rose-500/10">
              <div
                className={cn(
                  'h-full animate-pulse bg-linear-to-r from-gray-500 to-rose-600',
                  index === 0 ? 'w-full' : 'w-0',
                )}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="scrollbar-hide h-full overflow-y-auto pt-16 pb-20">
        <div className="px-6">
          <div className="bg-background/80 sticky top-0 z-10 mb-6 flex flex-col gap-2 pt-2 pb-4 backdrop-blur-xs">
            <Skeleton className="mx-auto h-12 w-3/4 bg-rose-500/10" />
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div
                key={`number-${index}`}
                className="group relative rounded-2xl border border-gray-500/10 bg-linear-to-br from-gray-500/[0.08] to-gray-600/[0.03] p-4"
              >
                <div className="relative flex items-center gap-4">
                  <div className="flex items-center">
                    <Skeleton className="h-8 w-8 rounded-full bg-rose-500/10" />
                  </div>
                  <div className="flex-1">
                    <Skeleton className="h-6 w-full bg-rose-500/10" />
                  </div>
                </div>
              </div>
            ))}

            {[1, 2].map((_, index) => (
              <div
                key={`emoji-${index}`}
                className="group relative rounded-2xl border border-gray-500/10 bg-linear-to-br from-gray-200/[0.08] to-gray-400/[0.03] p-4"
              >
                <div className="relative flex items-start gap-3">
                  <Skeleton className="h-6 w-6 shrink-0 rounded-full bg-rose-500/10" />
                  <div className="flex-1">
                    <Skeleton className="h-6 w-full bg-rose-500/10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-background/80 absolute right-0 bottom-0 left-0 border-t border-rose-500/10 p-4 backdrop-blur-xs">
        <div className="flex items-center justify-between">
          <Skeleton className="h-12 w-12 rounded-full bg-linear-to-br from-rose-500/50 to-rose-600/50" />
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <Skeleton key={index} className="h-2 w-2 rounded-full bg-rose-500/20" />
            ))}
          </div>

          <Skeleton className="h-12 w-12 rounded-full bg-linear-to-br from-rose-500/50 to-rose-600/50" />
        </div>
      </div>
    </Card>
  );
}
