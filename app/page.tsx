import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="flex flex-1 justify-center py-5 w-full">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 w-full px-4 md:px-8">
        {/* Hero Section */}
        <div className="@container">
          <div className="flex flex-col gap-8 py-6 md:py-10 @[864px]:flex-row items-center">
            <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[864px]:flex-1">
              <div className="flex flex-col gap-4 text-left">
                <h1 className="text-[#111811] dark:text-white text-4xl font-extrabold leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl">
                  Connecting Nepal's Coffee Ecosystem
                </h1>
                <h2 className="text-[#4e5d4e] dark:text-[#a0b0a0] text-base font-medium leading-normal md:text-lg max-w-2xl">
                  Coffee price, market, farmers, buyers, workers, nurseries & government policies — all in one place.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/auth/register"
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-[#0fd60f] text-[#111811] text-base font-bold leading-normal tracking-[0.015em] transition-colors shadow-sm"
                >
                  <span className="truncate">Join the Platform</span>
                </Link>
                <Link
                  href="/products"
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white dark:bg-[#2a402a] border border-[#dbe6db] dark:border-[#405540] text-[#111811] dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#f0f4f0] dark:hover:bg-[#354a35] transition-colors"
                >
                  <span className="truncate">Explore Coffee Market</span>
                </Link>
              </div>
            </div>
            <div className="w-full @[864px]:w-1/2 mt-6 @[864px]:mt-0">
              <div className="w-full aspect-[4/3] rounded-2xl bg-gray-200 overflow-hidden shadow-lg relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8JLX9K3e0CiHAaaStr5_cYvtwjSBcNtAcq3AP_XauTcAOAo9RhQTeXAU9G529m_qfX6Z0Ri56lIKROT0hZPNCKQ3kR6Iq-0v_XkADXjd73ykyJlIkqIHOXlszoM6JzzMk8fIx9khfwTG9n41_NFk6NrLEDcmbiNLp8PxXUz506aFPbOgIzlU-IbouA6uIGabSy54GLCBCP2zYrAwyNM34MaY90EupYEuKtdkLmJz5Wc-KWeAhfjz9AkpkmNcUBB9K69x8pIOfIw8")',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-white/20">
                  <p className="text-xs font-bold text-green-800 dark:text-primary uppercase tracking-wider mb-1">
                    Market Update
                  </p>
                  <p className="text-sm font-semibold text-black dark:text-white">
                    Avg. Parchment Price:{' '}
                    <span className="text-green-700 dark:text-primary">Rs. 550/kg</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coffee Information Section */}
        <div className="flex flex-col gap-8 py-10 border-t border-[#e5e8e5] dark:border-[#2a402a]">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#111811] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
              Coffee Information
            </h2>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] text-base font-normal">
              Access vital data and resources for the coffee industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/products"
              className="flex flex-col gap-3 group cursor-pointer"
            >
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 relative shadow-sm transition-transform group-hover:-translate-y-1">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqstW5tXL1wCZXZ76kPubn4op1-hciPyzu2YEVTvobJogKAdXMi0Sjr__gSxi7yYogU7BCmVKtB3zpz_wuqUvdbIIelXm9XtzofX0hNDcOXFl0fduLT6Qv_28Jq_FsSMXNqEkAe2HZf79XYJXioqIijQwnLDYIKuh7qSCqWBiHp-j-sE7gp7rSFbtbzF3f14T9wzAcK2GYBR22ekKoUQHFYKRf-Fq-DrLUp6_ok6PEUoEQa-OqYgrEHQaltMa2ejO98jzLvg4MMzU")',
                  }}
                />
              </div>
              <div>
                <h3 className="text-[#111811] dark:text-white text-lg font-bold leading-tight mb-1 group-hover:text-green-700 dark:group-hover:text-primary transition-colors">
                  Market Overview
                </h3>
                <p className="text-[#4e5d4e] dark:text-[#a0b0a0] text-sm leading-normal">
                  Comprehensive insights into the national coffee sector exports.
                </p>
              </div>
            </Link>
            <Link
              href="/products"
              className="flex flex-col gap-3 group cursor-pointer"
            >
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 relative shadow-sm transition-transform group-hover:-translate-y-1">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBa09v8YPOCEm7IQEPIvf1VgjFM9ox8U-jS511MUVyXhodRrbURc2fG4_zQVVXyrrFT3kAjVDy7CBYBvDYEpmuvA--omhzfewhNvxvHtWh_BqI3baiJut9lUNYlSNHHgntfF3bFF61TGO7MJiJiQ7KWhU6KgTMYAOUS1-PT0bOxazkjvlt2P8bXSoeuS3wCzM3w-sbfL0LLEdeggI-WXiB2ySjMJV0DbNqQJTQH-4JnagnINJ9qPraoKYlkR68vfBT8x9hU2N7wpXc")',
                  }}
                />
              </div>
              <div>
                <h3 className="text-[#111811] dark:text-white text-lg font-bold leading-tight mb-1 group-hover:text-green-700 dark:group-hover:text-primary transition-colors">
                  Current Prices
                </h3>
                <p className="text-[#4e5d4e] dark:text-[#a0b0a0] text-sm leading-normal">
                  Daily updated rates for Arabica and other varieties.
                </p>
              </div>
            </Link>
            <Link
              href="/products"
              className="flex flex-col gap-3 group cursor-pointer"
            >
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 relative shadow-sm transition-transform group-hover:-translate-y-1">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuABOG9EroOBa4J1POq2w0mLsGQdX0gBLeehLiTTWdiUd-HNZTdKJGS9_dH0CePhy_T_jV1Uqp0yQAvi7mWXQRF8Q6DWE-Lx8gpFcWB3dipkIbs9jI463y_EDC2EKhy56rd0O9sdcsA0FPr5GQQ80HEjh3Emrm0Vwk753HcjIwMChoZUydTodVvowF9f8BP0Vwiir6IkJmmUmKZr7niiVVe6oF1HxiMffF7KOoOXDZMuvzFkCl4KacDfLx4vrTSpqCoO4Z8Hcds5QXc")',
                  }}
                />
              </div>
              <div>
                <h3 className="text-[#111811] dark:text-white text-lg font-bold leading-tight mb-1 group-hover:text-green-700 dark:group-hover:text-primary transition-colors">
                  Market Demand
                </h3>
                <p className="text-[#4e5d4e] dark:text-[#a0b0a0] text-sm leading-normal">
                  Track export trends and local buyer requirements.
                </p>
              </div>
            </Link>
            <Link
              href="/products"
              className="flex flex-col gap-3 group cursor-pointer"
            >
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 relative shadow-sm transition-transform group-hover:-translate-y-1">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdOWh9xduox30LJac_o1AP3WsUNVAj9d7UYGRB0nFAzr45CAxCJDL9rpp2lEaVke9j2rmuAjlDqjwmMXq4BgN4aLNa9g5JNDIynwgxSfg-YI-TLhCJpdSi-QHmYHYRN3SxJnI5GtcTdkSCt5byNipK-KcDaq2DfVDIH2doGnso1OpFZdtBiZlMOoPWnyNqboQbOfRZhZmp22XmWN8welunHiwwjChOef61NzeV5PPlDgm9v-hIOnvN78VCPXD2yzN2M4C6KkHcEfg")',
                  }}
                />
              </div>
              <div>
                <h3 className="text-[#111811] dark:text-white text-lg font-bold leading-tight mb-1 group-hover:text-green-700 dark:group-hover:text-primary transition-colors">
                  Quality Standards
                </h3>
                <p className="text-[#4e5d4e] dark:text-[#a0b0a0] text-sm leading-normal">
                  Grading guidelines and organic certification info.
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Notice Board Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10 border-t border-[#e5e8e5] dark:border-[#2a402a]">
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-[#111811] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
                Notice Board
              </h2>
              <Link
                href="/admin/notices"
                className="text-sm font-bold text-green-700 dark:text-primary hover:underline"
              >
                View All
              </Link>
            </div>
            <div className="flex flex-col gap-4 bg-[#f0f4f0] dark:bg-[#1a2e1a] p-4 rounded-xl border border-[#dbe6db] dark:border-[#2a402a]">
              <div className="flex flex-col gap-2 bg-white dark:bg-[#233523] p-4 rounded-lg shadow-sm border-l-4 border-primary">
                <div className="flex items-center gap-2 text-xs font-medium text-[#618961] dark:text-[#a0b0a0]">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  <span>Latest</span>
                </div>
                <h4 className="text-sm font-bold text-[#111811] dark:text-white">
                  New Market Opportunities
                </h4>
                <p className="text-xs text-[#4e5d4e] dark:text-[#a0b0a0] line-clamp-2">
                  Check the latest notices from the admin panel for important updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-10 border-t border-[#e5e8e5] dark:border-[#2a402a] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="size-8 flex items-center justify-center rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-green-700">agriculture</span>
              </div>
              <span className="text-sm font-bold text-[#111811] dark:text-white">
                Nepal Coffee Hub
              </span>
            </div>
            <div className="flex gap-6 text-sm text-[#4e5d4e] dark:text-[#a0b0a0]">
              <Link href="/about" className="hover:text-primary">
                About Us
              </Link>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
              <Link href="#" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary">
                Terms of Service
              </Link>
            </div>
            <div className="text-sm text-[#889988] dark:text-[#667766]">
              © 2024 Nepal Coffee Hub. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

