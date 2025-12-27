import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Nepal Coffee Hub - Connecting Coffee Ecosystem',
  description: 'Coffee price, market, farmers, buyers, workers, nurseries & government policies — all in one place.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-display bg-white">
        <Providers>
          <Navbar />
          <main className="min-h-screen bg-white">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

