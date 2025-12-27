import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white dark:bg-[#1a2e1a] rounded-xl border border-[#dbe6db] dark:border-[#2a3e2a] shadow-sm p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="size-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">gavel</span>
          </div>
          <h1 className="text-4xl font-black text-[#111811] dark:text-white tracking-tight">
            Terms of Service
          </h1>
        </div>

        <div className="prose prose-green dark:prose-invert max-w-none">
          <p className="text-[#4e5d4e] dark:text-[#a0b0a0] text-sm mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              By accessing and using Coffee Nation ("the Platform"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">2. Description of Service</h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              Coffee Nation is an online marketplace platform that connects coffee farmers with buyers. The platform facilitates:
            </p>
            <ul className="list-disc list-inside text-[#4e5d4e] dark:text-[#a0b0a0] space-y-2 mb-4 ml-4">
              <li>Product listings by farmers</li>
              <li>Order placement and management by buyers</li>
              <li>Communication between farmers and buyers</li>
              <li>Administrative oversight and platform management</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">3. User Accounts</h2>
            <h3 className="text-xl font-semibold text-[#111811] dark:text-white mb-3">3.1 Registration</h3>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              To use certain features of the platform, you must register for an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-[#4e5d4e] dark:text-[#a0b0a0] space-y-2 mb-4 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information as necessary</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#111811] dark:text-white mb-3">3.2 User Roles</h3>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              The platform supports three user roles:
            </p>
            <ul className="list-disc list-inside text-[#4e5d4e] dark:text-[#a0b0a0] space-y-2 mb-4 ml-4">
              <li><strong>Farmers:</strong> Can list products, manage inventory, and view orders</li>
              <li><strong>Buyers:</strong> Can browse products, place orders, and track purchases</li>
              <li><strong>Admins:</strong> Can manage users, products, and platform settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">4. User Conduct</h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-[#4e5d4e] dark:text-[#a0b0a0] space-y-2 mb-4 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Upload false, misleading, or fraudulent information</li>
              <li>Interfere with or disrupt the platform's operation</li>
              <li>Attempt to gain unauthorized access to the platform</li>
              <li>Use the platform for any illegal or unauthorized purpose</li>
              <li>Harass, abuse, or harm other users</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">5. Products and Transactions</h2>
            <h3 className="text-xl font-semibold text-[#111811] dark:text-white mb-3">5.1 Product Listings</h3>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              Farmers are responsible for:
            </p>
            <ul className="list-disc list-inside text-[#4e5d4e] dark:text-[#a0b0a0] space-y-2 mb-4 ml-4">
              <li>Providing accurate product descriptions and pricing</li>
              <li>Maintaining product quality and availability</li>
              <li>Fulfilling orders in a timely manner</li>
              <li>Complying with all applicable laws and regulations</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#111811] dark:text-white mb-3">5.2 Orders and Payments</h3>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              Buyers agree to:
            </p>
            <ul className="list-disc list-inside text-[#4e5d4e] dark:text-[#a0b0a0] space-y-2 mb-4 ml-4">
              <li>Provide accurate shipping and payment information</li>
              <li>Complete payment for confirmed orders</li>
              <li>Accept products as described in listings</li>
              <li>Communicate respectfully with farmers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">6. Intellectual Property</h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              All content on the platform, including text, graphics, logos, images, and software, is the property of Coffee Nation or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">7. Disclaimers and Limitation of Liability</h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              The platform is provided "as is" without warranties of any kind. We do not guarantee:
            </p>
            <ul className="list-disc list-inside text-[#4e5d4e] dark:text-[#a0b0a0] space-y-2 mb-4 ml-4">
              <li>Uninterrupted or error-free operation</li>
              <li>Accuracy of product listings or user information</li>
              <li>Quality of products sold through the platform</li>
              <li>Resolution of disputes between users</li>
            </ul>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              Coffee Nation shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">8. Dispute Resolution</h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              Users are encouraged to resolve disputes directly. Coffee Nation may, but is not obligated to, assist in dispute resolution. Any disputes that cannot be resolved may be subject to binding arbitration or legal proceedings in accordance with applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">9. Termination</h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason we deem necessary. You may also terminate your account at any time by contacting us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">10. Changes to Terms</h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              We reserve the right to modify these Terms of Service at any time. We will notify users of significant changes by posting the updated terms on this page. Your continued use of the platform after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">11. Contact Information</h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-[#f0f4f0] dark:bg-[#1a2e1a] p-4 rounded-lg border border-[#dbe6db] dark:border-[#2a3e2a]">
              <p className="text-[#111811] dark:text-white font-medium mb-2">Coffee Nation</p>
              <p className="text-[#4e5d4e] dark:text-[#a0b0a0] text-sm">
                Email: <Link href="/contact" className="text-primary hover:underline">Contact Us</Link>
              </p>
              <p className="text-[#4e5d4e] dark:text-[#a0b0a0] text-sm">
                Website: <Link href="/" className="text-primary hover:underline">coffeenation.com</Link>
              </p>
            </div>
          </section>

          <div className="mt-8 pt-8 border-t border-[#dbe6db] dark:border-[#2a3e2a]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

