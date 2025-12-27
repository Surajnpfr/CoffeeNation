'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resetUrl, setResetUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to send reset link');
        setLoading(false);
        return;
      }

      setSuccess(true);
      // In development, show the reset URL
      if (data.resetUrl) {
        setResetUrl(data.resetUrl);
      }
      setLoading(false);
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
            <span className="material-symbols-outlined text-2xl">lock_reset</span>
          </div>
          <h1 className="text-3xl font-black text-[#111811] dark:text-white tracking-tight">
            Forgot Password
          </h1>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {success ? (
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 px-4 py-3 rounded-lg">
              <p className="font-medium">Reset link sent!</p>
              <p className="text-sm mt-1">
                If an account exists with this email, a password reset link has been sent.
              </p>
            </div>

            {resetUrl && (
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 px-4 py-3 rounded-lg">
                <p className="text-sm font-medium mb-2">Development Mode - Reset Link:</p>
                <a 
                  href={resetUrl} 
                  className="text-sm break-all underline hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resetUrl}
                </a>
              </div>
            )}

            <div className="flex gap-3">
              <Link
                href="/auth/login"
                className="flex-1 text-center bg-primary hover:bg-[#0fd60f] text-[#111811] font-bold text-base h-12 rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center"
              >
                Back to Login
              </Link>
            </div>
          </div>
        ) : (
          <>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] mb-6">
              Enter your email address and we'll send you a link to reset your password.
            </p>

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

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-[#0fd60f] text-[#111811] font-bold text-base h-12 rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>

            <p className="mt-4 text-center text-[#618961] dark:text-[#8ba38b]">
              Remember your password?{' '}
              <Link href="/auth/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

