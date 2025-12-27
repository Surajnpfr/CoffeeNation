'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', role: '', subject: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex-grow">
      {/* Page Header / Hero */}
      <section className="px-4 md:px-10 lg:px-40 py-12 md:py-16">
        <div className="max-w-[960px] mx-auto">
          <div className="flex flex-col gap-4">
            <h1 className="text-[#111811] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Grow with Us: Share Your Story
            </h1>
            <p className="text-[#618961] dark:text-[#8baeb8] text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              We are building Nepal's largest coffee network. Whether you have
              farming tips, market feedback, or need support, we want to hear
              from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="px-4 md:px-10 lg:px-40 pb-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="bg-white dark:bg-[#1a2e1a] rounded-2xl p-6 md:p-10 shadow-sm border border-[#dbe6db] dark:border-[#2a3e2a]">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#111811] dark:text-white mb-2">
                  Send Information to Us
                </h3>
                <p className="text-[#618961] dark:text-[#8baeb8]">
                  Fill out the form below and our team will connect with you.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-lg">
                  Thank you! Your message has been sent. We'll get back to you
                  within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <label className="flex flex-col flex-1">
                    <span className="text-[#111811] dark:text-[#e2e8e2] text-base font-medium pb-2">
                      Full Name
                    </span>
                    <input
                      className="w-full rounded-lg border border-[#dbe6db] dark:border-[#4a6e4a] bg-white dark:bg-[#121f12] h-14 px-4 text-base text-[#111811] dark:text-white placeholder-[#618961] dark:placeholder-[#4a6e4a] focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                      placeholder="Enter your name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </label>
                  <label className="flex flex-col flex-1">
                    <span className="text-[#111811] dark:text-[#e2e8e2] text-base font-medium pb-2">
                      Email Address
                    </span>
                    <input
                      className="w-full rounded-lg border border-[#dbe6db] dark:border-[#4a6e4a] bg-white dark:bg-[#121f12] h-14 px-4 text-base text-[#111811] dark:text-white placeholder-[#618961] dark:placeholder-[#4a6e4a] focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                      placeholder="name@example.com"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </label>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <label className="flex flex-col flex-1">
                    <span className="text-[#111811] dark:text-[#e2e8e2] text-base font-medium pb-2">
                      I am a...
                    </span>
                    <div className="relative">
                      <select
                        className="w-full appearance-none rounded-lg border border-[#dbe6db] dark:border-[#4a6e4a] bg-white dark:bg-[#121f12] h-14 px-4 text-base text-[#111811] dark:text-white focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                        required
                      >
                        <option value="">Select...</option>
                        <option value="farmer">Coffee Farmer</option>
                        <option value="supplier">Supplier / Distributor</option>
                        <option value="shop">Shop Owner</option>
                        <option value="enthusiast">Coffee Enthusiast</option>
                        <option value="researcher">Researcher</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#618961]">
                        <span className="material-symbols-outlined">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </label>
                  <label className="flex flex-col flex-1">
                    <span className="text-[#111811] dark:text-[#e2e8e2] text-base font-medium pb-2">
                      Subject
                    </span>
                    <input
                      className="w-full rounded-lg border border-[#dbe6db] dark:border-[#4a6e4a] bg-white dark:bg-[#121f12] h-14 px-4 text-base text-[#111811] dark:text-white placeholder-[#618961] dark:placeholder-[#4a6e4a] focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                      placeholder="What is this regarding?"
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                    />
                  </label>
                </div>

                {/* Row 3 */}
                <label className="flex flex-col w-full">
                  <span className="text-[#111811] dark:text-[#e2e8e2] text-base font-medium pb-2">
                    Message / Share Your Tips
                  </span>
                  <textarea
                    className="w-full rounded-lg border border-[#dbe6db] dark:border-[#4a6e4a] bg-white dark:bg-[#121f12] min-h-[160px] p-4 text-base text-[#111811] dark:text-white placeholder-[#618961] dark:placeholder-[#4a6e4a] focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none resize-y transition-all"
                    placeholder="Tell us your story, ask a question, or share farming advice..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </label>

                <div className="flex items-center gap-4 mt-2">
                  <button
                    className="bg-primary hover:bg-[#0fd60f] text-[#111811] font-bold text-base h-12 px-8 rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2 disabled:opacity-50"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Information'}
                    <span className="material-symbols-outlined text-sm font-bold">
                      send
                    </span>
                  </button>
                  <p className="text-xs text-[#618961] dark:text-[#8baeb8]">
                    Typically replies in 24h
                  </p>
                </div>
              </form>
            </div>

            {/* FAQ Mini Section */}
            <div className="mt-12">
              <h4 className="text-xl font-bold text-[#111811] dark:text-white mb-6">
                Frequently Asked Questions
              </h4>
              <div className="flex flex-col gap-4">
                <details className="group bg-white dark:bg-[#1a2e1a] rounded-lg border border-[#dbe6db] dark:border-[#2a3e2a] open:ring-1 open:ring-primary/20">
                  <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-[#111811] dark:text-white">
                    <span>How do I list my coffee nursery?</span>
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-[#618961]">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-[#618961] dark:text-[#8baeb8] text-sm leading-relaxed">
                    Simply select "Supplier" in the form above and provide your
                    nursery details in the message box. Our team will verify
                    your information and list you on the network.
                  </div>
                </details>

                <details className="group bg-white dark:bg-[#1a2e1a] rounded-lg border border-[#dbe6db] dark:border-[#2a3e2a] open:ring-1 open:ring-primary/20">
                  <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-[#111811] dark:text-white">
                    <span>Is there a fee to join the network?</span>
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-[#618961]">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-[#618961] dark:text-[#8baeb8] text-sm leading-relaxed">
                    No, joining the Nepal Coffee Network basic directory is free
                    for all farmers and small businesses.
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* Right Column: Info & Map */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-8">
            {/* Contact Info Card */}
            <div className="bg-primary/5 dark:bg-[#13ec13]/5 rounded-2xl p-8 border border-primary/10 dark:border-primary/5">
              <h3 className="text-xl font-bold text-[#111811] dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white dark:bg-[#1a2e1a] rounded-full p-2.5 text-primary shadow-sm">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#111811] dark:text-white text-sm">
                      Head Office
                    </p>
                    <p className="text-[#618961] dark:text-[#8baeb8] text-sm mt-1">
                      Lazimpat, Kathmandu 44600
                      <br />
                      Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white dark:bg-[#1a2e1a] rounded-full p-2.5 text-primary shadow-sm">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#111811] dark:text-white text-sm">
                      Phone
                    </p>
                    <p className="text-[#618961] dark:text-[#8baeb8] text-sm mt-1">
                      <a
                        className="hover:text-primary transition-colors"
                        href="tel:+97714445555"
                      >
                        +977 1-444-5555
                      </a>
                    </p>
                    <p className="text-[#618961] dark:text-[#8baeb8] text-sm">
                      <a
                        className="hover:text-primary transition-colors"
                        href="tel:+9779800000000"
                      >
                        +977 980-000-0000
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white dark:bg-[#1a2e1a] rounded-full p-2.5 text-primary shadow-sm">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#111811] dark:text-white text-sm">
                      Email
                    </p>
                    <p className="text-[#618961] dark:text-[#8baeb8] text-sm mt-1">
                      <a
                        className="hover:text-primary transition-colors"
                        href="mailto:info@nepalcoffeenetwork.com"
                      >
                        info@nepalcoffeenetwork.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-primary/10 dark:border-primary/5">
                <p className="font-bold text-[#111811] dark:text-white text-sm mb-4">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  <a
                    className="bg-white dark:bg-[#1a2e1a] hover:bg-primary hover:text-[#111811] text-[#618961] dark:text-white rounded-full p-2.5 shadow-sm transition-all duration-300"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-xl">public</span>
                  </a>
                  <a
                    className="bg-white dark:bg-[#1a2e1a] hover:bg-primary hover:text-[#111811] text-[#618961] dark:text-white rounded-full p-2.5 shadow-sm transition-all duration-300"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-xl">
                      thumb_up
                    </span>
                  </a>
                  <a
                    className="bg-white dark:bg-[#1a2e1a] hover:bg-primary hover:text-[#111811] text-[#618961] dark:text-white rounded-full p-2.5 shadow-sm transition-all duration-300"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-xl">
                      photo_camera
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#dbe6db] dark:border-[#2a3e2a] h-64 md:h-80 relative group">
              <Image
                alt="Map location of Kathmandu office near coffee plantations"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZDsPRPc3a01YJg3mCarNE2Tum0D2PiCKOeRI1vQlT5wzuviecgfMG9DDdH42yZ-ZwEaQ5lY0rgx7U09ccLM_-CsTgQliGl8SEo_Q_Di56GW1Nbi5P29gWSel3FicFmKsz6hJ4IJBVYPIr2-C2xbzxo3mTmEKQrY5Q6yrmGZTZWMX9CBfK2YWRl4H0TXsbWzsrAPh7H7eB6SxCPNoxbDlBjU_926NEiwV-OS32CvIejB1uNISsbz6ZsTPkqkFgrjA9glxAH6Aqye8"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-white dark:bg-[#1a2e1a] px-3 py-1.5 rounded-md shadow-md flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  near_me
                </span>
                <span className="text-xs font-bold text-[#111811] dark:text-white">
                  Find us on Google Maps
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#1a2e1a] border-t border-[#f0f4f0] dark:border-[#2a3e2a] py-8">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#618961] dark:text-[#8baeb8] text-sm">
            © 2024 Nepal Coffee Network. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-[#618961] dark:text-[#8baeb8] hover:text-primary text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#618961] dark:text-[#8baeb8] hover:text-primary text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

