'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children, className }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
  return (
    <Link
      href={href}
      className={cn(
        'text-sm text-gray-600 transition-colors duration-200 hover:text-rose-500',
        className,
        isActive && 'text-rose-500',
      )}
    >
      {children}
    </Link>
  );
}
