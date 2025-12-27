'use client';

import { useState, Suspense } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid email or password');
        setLoading(false);
        return;
      }

      // Redirect based on role or callback URL
      const callbackUrl = searchParams.get('callbackUrl') || '/';
      router.push(callbackUrl);
      router.refresh();
    } catch (err) {
      setError('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white dark:bg-[#1a2e1a] p-8 rounded-xl border border-[#dbe6db] dark:border-[#2a3e2a] shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="size-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">coffee</span>
          </div>
          <h1 className="text-3xl font-black text-[#111811] dark:text-white tracking-tight">
            Login
          </h1>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-[#111811] dark:text-[#e2e8e2] text-base font-medium pb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-[#dbe6db] dark:border-[#4a6e4a] bg-white dark:bg-[#121f12] h-14 px-4 text-base text-[#111811] dark:text-white placeholder-[#618961] dark:placeholder-[#4a6e4a] focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <div className="flex items-center justify-between pb-2">
              <label htmlFor="password" className="block text-[#111811] dark:text-[#e2e8e2] text-base font-medium">
                Password
              </label>
              <Link 
                href="/auth/forgot-password" 
                className="text-sm text-primary hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-[#dbe6db] dark:border-[#4a6e4a] bg-white dark:bg-[#121f12] h-14 px-4 text-base text-[#111811] dark:text-white placeholder-[#618961] dark:placeholder-[#4a6e4a] focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-[#0fd60f] text-[#111811] font-bold text-base h-12 rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>

        <p className="mt-4 text-center text-[#618961] dark:text-[#8ba38b]">
          Don't have an account?{' '}
          <Link href="/auth/register" className="text-primary hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export const dynamic = 'force-dynamic';

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white dark:bg-[#1a2e1a] p-8 rounded-xl border border-[#dbe6db] dark:border-[#2a3e2a] shadow-sm">
          <p>Loading...</p>
        </div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}

