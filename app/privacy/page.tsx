import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white dark:bg-[#1a2e1a] rounded-xl border border-[#dbe6db] dark:border-[#2a3e2a] shadow-sm p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="size-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">privacy_tip</span>
          </div>
          <h1 className="text-4xl font-black text-[#111811] dark:text-white tracking-tight">
            Privacy Policy
          </h1>
        </div>

        <div className="prose prose-green dark:prose-invert max-w-none">
          <p className="text-[#4e5d4e] dark:text-[#a0b0a0] text-sm mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">1. Introduction</h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              Welcome to Coffee Nation ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-[#111811] dark:text-white mb-3">2.1 Personal Information</h3>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-[#4e5d4e] dark:text-[#a0b0a0] space-y-2 mb-4 ml-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Account credentials (password, stored securely)</li>
              <li>Profile information (role: farmer, buyer, or admin)</li>
              <li>Address and location information</li>
              <li>Payment and transaction information</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#111811] dark:text-white mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              When you use our platform, we automatically collect certain information, including:
            </p>
            <ul className="list-disc list-inside text-[#4e5d4e] dark:text-[#a0b0a0] space-y-2 mb-4 ml-4">
              <li>Device information and browser type</li>
              <li>IP address and location data</li>
              <li>Usage patterns and preferences</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-[#4e5d4e] dark:text-[#a0b0a0] space-y-2 mb-4 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and manage orders</li>
              <li>Authenticate users and manage accounts</li>
              <li>Send important notifications and updates</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-[#4e5d4e] dark:text-[#a0b0a0] space-y-2 mb-4 ml-4">
              <li><strong>With other users:</strong> Your name and contact information may be visible to other users when you engage in transactions</li>
              <li><strong>Service providers:</strong> We may share information with third-party service providers who assist us in operating our platform</li>
              <li><strong>Legal requirements:</strong> We may disclose information if required by law or to protect our rights</li>
              <li><strong>Business transfers:</strong> Information may be transferred in connection with a merger or sale of assets</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">5. Data Security</h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">6. Your Rights and Choices</h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-[#4e5d4e] dark:text-[#a0b0a0] space-y-2 mb-4 ml-4">
              <li>Access and update your personal information</li>
              <li>Delete your account and associated data</li>
              <li>Opt-out of certain communications</li>
              <li>Request a copy of your data</li>
              <li>Object to processing of your information</li>
            </ul>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              To exercise these rights, please contact us through our <Link href="/contact" className="text-primary hover:underline">contact page</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and personalize content. You can control cookies through your browser settings, but disabling cookies may limit certain features of our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">8. Children's Privacy</h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              Our platform is not intended for children under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">10. Contact Us</h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
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

