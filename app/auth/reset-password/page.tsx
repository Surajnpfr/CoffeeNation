'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const tokenParam = searchParams.get('token');
    if (tokenParam) {
      setToken(tokenParam);
    } else {
      setError('Invalid reset link. Please request a new password reset.');
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (!token) {
      setError('Invalid reset token');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to reset password');
        setLoading(false);
        return;
      }

      setSuccess(true);
      setLoading(false);

      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push('/auth/login?reset=success');
      }, 2000);
    } catch (err) {
      setError('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  if (!token && !error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white dark:bg-[#1a2e1a] p-8 rounded-xl border border-[#dbe6db] dark:border-[#2a3e2a] shadow-sm">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white dark:bg-[#1a2e1a] p-8 rounded-xl border border-[#dbe6db] dark:border-[#2a3e2a] shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="size-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">lock_reset</span>
          </div>
          <h1 className="text-3xl font-black text-[#111811] dark:text-white tracking-tight">
            Reset Password
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
              <p className="font-medium">Password reset successfully!</p>
              <p className="text-sm mt-1">Redirecting to login page...</p>
            </div>
          </div>
        ) : (
          <>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] mb-6">
              Enter your new password below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-[#111811] dark:text-[#e2e8e2] text-base font-medium pb-2">
                  New Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full rounded-lg border border-[#dbe6db] dark:border-[#4a6e4a] bg-white dark:bg-[#121f12] h-14 px-4 text-base text-[#111811] dark:text-white placeholder-[#618961] dark:placeholder-[#4a6e4a] focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                  placeholder="Enter new password (min 6 characters)"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-[#111811] dark:text-[#e2e8e2] text-base font-medium pb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full rounded-lg border border-[#dbe6db] dark:border-[#4a6e4a] bg-white dark:bg-[#121f12] h-14 px-4 text-base text-[#111811] dark:text-white placeholder-[#618961] dark:placeholder-[#4a6e4a] focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                  placeholder="Confirm new password"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-[#0fd60f] text-[#111811] font-bold text-base h-12 rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 disabled:opacity-50"
              >
                {loading ? 'Resetting...' : 'Reset Password'}
              </button>
            </form>

            <p className="mt-4 text-center text-[#618961] dark:text-[#8ba38b]">
              <Link href="/auth/login" className="text-primary hover:underline font-medium">
                Back to Login
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export const dynamic = 'force-dynamic';

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white dark:bg-[#1a2e1a] p-8 rounded-xl border border-[#dbe6db] dark:border-[#2a3e2a] shadow-sm">
          <p>Loading...</p>
        </div>
      </div>
    }>
      <ResetPasswordForm />
    </Suspense>
  );
}

