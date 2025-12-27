'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'buyer',
    phone: '',
    address: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const role = searchParams.get('role');
    if (role === 'farmer' || role === 'buyer') {
      setFormData((prev) => ({ ...prev, role }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
          phone: formData.phone || undefined,
          address: formData.address || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Registration failed');
        setLoading(false);
        return;
      }

      // Redirect to login
      router.push('/auth/login?registered=true');
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
            <span className="material-symbols-outlined text-2xl">person_add</span>
          </div>
          <h1 className="text-3xl font-black text-[#111811] dark:text-white tracking-tight">
            Sign Up
          </h1>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-[#111811] dark:text-[#e2e8e2] text-base font-medium pb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full rounded-lg border border-[#dbe6db] dark:border-[#4a6e4a] bg-white dark:bg-[#121f12] h-14 px-4 text-base text-[#111811] dark:text-white placeholder-[#618961] dark:placeholder-[#4a6e4a] focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[#111811] dark:text-[#e2e8e2] text-base font-medium pb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full rounded-lg border border-[#dbe6db] dark:border-[#4a6e4a] bg-white dark:bg-[#121f12] h-14 px-4 text-base text-[#111811] dark:text-white placeholder-[#618961] dark:placeholder-[#4a6e4a] focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-[#111811] dark:text-[#e2e8e2] text-base font-medium pb-2">
              I am a...
            </label>
            <div className="relative">
              <select
                id="role"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                required
                className="w-full appearance-none rounded-lg border border-[#dbe6db] dark:border-[#4a6e4a] bg-white dark:bg-[#121f12] h-14 px-4 text-base text-[#111811] dark:text-white focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
              >
                <option value="buyer">Buyer / Trader</option>
                <option value="farmer">Coffee Farmer</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#618961]">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-[#111811] dark:text-[#e2e8e2] text-base font-medium pb-2">
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full rounded-lg border border-[#dbe6db] dark:border-[#4a6e4a] bg-white dark:bg-[#121f12] h-14 px-4 text-base text-[#111811] dark:text-white placeholder-[#618961] dark:placeholder-[#4a6e4a] focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
              placeholder="+977 98XXXXXXXX"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-[#111811] dark:text-[#e2e8e2] text-base font-medium pb-2">
              Address (Optional)
            </label>
            <textarea
              id="address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              rows={3}
              className="w-full rounded-lg border border-[#dbe6db] dark:border-[#4a6e4a] bg-white dark:bg-[#121f12] p-4 text-base text-[#111811] dark:text-white placeholder-[#618961] dark:placeholder-[#4a6e4a] focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all resize-y"
              placeholder="Enter your address"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[#111811] dark:text-[#e2e8e2] text-base font-medium pb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              minLength={6}
              className="w-full rounded-lg border border-[#dbe6db] dark:border-[#4a6e4a] bg-white dark:bg-[#121f12] h-14 px-4 text-base text-[#111811] dark:text-white placeholder-[#618961] dark:placeholder-[#4a6e4a] focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-[#111811] dark:text-[#e2e8e2] text-base font-medium pb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
              minLength={6}
              className="w-full rounded-lg border border-[#dbe6db] dark:border-[#4a6e4a] bg-white dark:bg-[#121f12] h-14 px-4 text-base text-[#111811] dark:text-white placeholder-[#618961] dark:placeholder-[#4a6e4a] focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-[#0fd60f] text-[#111811] font-bold text-base h-12 rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p className="mt-4 text-center text-[#618961] dark:text-[#8ba38b]">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-primary hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export const dynamic = 'force-dynamic';

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white dark:bg-[#1a2e1a] p-8 rounded-xl border border-[#dbe6db] dark:border-[#2a3e2a] shadow-sm">
          <p>Loading...</p>
        </div>
      </div>
    }>
      <RegisterForm />
    </Suspense>
  );
}

