import { FileText } from 'lucide-react';
import NavLink from './nav-link';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import PlanBadge from './plan-badge';
import { Logo } from './logo';

export default function Header() {
  return (
    <nav className="container mx-auto flex items-center justify-between px-8 py-4">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex shrink-0 items-center gap-1 lg:gap-2">
          <Logo href={null} />
        </NavLink>
      </div>

      <div className="flex gap-4 text-base lg:items-center lg:justify-center lg:gap-12 lg:text-lg">
        <SignedIn>
          <NavLink href="/dashboard">Your Summaries</NavLink>
        </SignedIn>
      </div>

      <div className="flex lg:flex-1 lg:justify-end">
        <SignedIn>
          <div className="flex items-center gap-2 text-base lg:text-lg">
            <NavLink href="/upload">Upload a PDF</NavLink>
            <PlanBadge />
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </SignedIn>

        <SignedOut>
          <NavLink className="text-base" href="/sign-in">
            Sign In
          </NavLink>
        </SignedOut>
      </div>
    </nav>
  );
}
