'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#1a2e1a]/90 backdrop-blur-md border-b border-[#f0f4f0] dark:border-[#2a3e2a]">
      <div className="px-4 md:px-10 py-3 flex items-center justify-between mx-auto max-w-[1440px]">
        <Link href="/" className="flex items-center gap-4 text-[#111811] dark:text-white">
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined text-3xl">local_cafe</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
            Nepal Coffee Hub
          </h2>
        </Link>

        <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-9">
            <Link
              href="/"
              className="text-[#111811] dark:text-[#e2e8e2] text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-[#111811] dark:text-[#e2e8e2] text-sm font-medium hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-[#111811] dark:text-[#e2e8e2] text-sm font-medium hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-[#111811] dark:text-[#e2e8e2] text-sm font-medium hover:text-primary transition-colors"
            >
              Contact Us
            </Link>

            {status === 'loading' ? (
              <span className="text-sm">Loading...</span>
            ) : session ? (
              <>
                {session.user.role === 'admin' && (
                  <Link
                    href="/admin"
                    className="text-[#111811] dark:text-[#e2e8e2] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Admin
                  </Link>
                )}
                {(session.user.role === 'farmer' || session.user.role === 'buyer') && (
                  <Link
                    href={session.user.role === 'farmer' ? '/farmer' : '/buyer'}
                    className="text-[#111811] dark:text-[#e2e8e2] text-sm font-medium hover:text-primary transition-colors"
                  >
                    Dashboard
                  </Link>
                )}
                <span className="text-[#618961] dark:text-[#8ba38b] text-sm">
                  {session.user.name}
                </span>
                <button
                  onClick={handleSignOut}
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-[#0fd60f] transition-colors text-[#111811] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Sign Out</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="text-[#111811] dark:text-[#e2e8e2] text-sm font-medium hover:text-primary transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/register"
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-[#0fd60f] transition-colors text-[#111811] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Join Network</span>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden text-[#111811] dark:text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}

