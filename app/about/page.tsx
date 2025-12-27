import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section with Founders */}
      <div className="w-full bg-white dark:bg-[#152915] pb-16 pt-12 md:pt-20 border-b border-[#f0f4f0] dark:border-[#2a422a]">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="max-w-[1024px] w-full flex flex-col items-center gap-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center w-full">
              <div className="relative group">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                  <Image
                    alt="Founder 1"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnuY43gW5ShWNxit6B3OV7HM-4lepwpe6-1-010JHWx5RqFtMPypLIF7Q22wplJZSWQIrG7MeL0CkbDXOH5gM1gYg09j8oTCeInefbmH12CHlxrXOa5USwX6RV7X3MNXA4_Y8P_nCYwPNkbJ10hbbKkk65OglvvK-cUOKUwGgxNpjGGOPdn4JaElPY08lWWzjnSfoh5zRymS2EvXFINgfRzVryzy6QFzKTH4JL_1RHcFrta3MP8d8dqYnSVIfo2RyTpKrudqrcXwU"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="relative group">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                  <Image
                    alt="Founder 2"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz33GxQ3oxsX5DgV7IqJWU1qOQIWe9kbOzuihJtHx07u4MRVShxn-NSmxTqyHe6FKb889VY0wH6br0RAPWCcKTmtywFMQlDVE3JyqAaDXz99_d8znoRQ8gXnsvU43YCqxZ9MSKzwvzK9NK1KL8731ZLRPEYJf_tDmVuR1Uv87F-AH9t71i6mKvEUy8O0boZGjcnCwN0UF2XdbgvU5yCBVjGv3zvmc5gekj6FLZNwCiirU1pSp-ga6Bwt-oT1XrY6X2w42_EyoX920"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-[800px] text-center flex flex-col gap-6">
              <h1 className="text-3xl md:text-5xl font-black text-[#111811] dark:text-white tracking-tight leading-tight">
                Welcome to <span className="text-primary">Nepal Coffee Hub</span>
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify md:text-center">
                A dedicated platform created by two passionate individuals with
                a vision to support Nepal's agricultural community. Our mission
                is to connect farmers, buyers, workers, coffee shops, and
                nurseries, creating a central hub where everyone involved in the
                coffee sector can interact, share information, and grow
                together. Nepal is an agriculture-based country, and we believe
                that empowering farmers with the right resources and connections
                can make a real difference. This website is our small step toward
                helping farmers thrive, improving access to buyers and skilled
                workers, and promoting the coffee industry across the nation.
                Though we are not yet a registered organization, our commitment is
                strong: we want to make it easier for farmers and all stakeholders
                to collaborate, learn, and succeed in the coffee sector. Join us
                in building a stronger coffee community in Nepal!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-background-light dark:bg-[#1a2e1a] border-b border-[#f0f4f0] dark:border-[#2a422a]">
        <div className="px-4 md:px-10 lg:px-40 py-10 flex justify-center">
          <div className="w-full max-w-[1024px] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            <div className="flex flex-col items-center text-center gap-1">
              <span className="text-4xl font-black text-[#111811] dark:text-white tracking-tight">
                500+
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Farmers Connected
              </span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <span className="text-4xl font-black text-[#111811] dark:text-white tracking-tight">
                50
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Districts Covered
              </span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <span className="text-4xl font-black text-[#111811] dark:text-white tracking-tight">
                30+
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Active Nurseries
              </span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <span className="text-4xl font-black text-[#111811] dark:text-white tracking-tight">
                10k+
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Successful Trades
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="w-full py-16 md:py-24 px-4 md:px-10 lg:px-40 flex justify-center bg-white dark:bg-background-dark">
        <div className="max-w-[1024px] w-full flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center max-w-[720px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#111811] dark:text-white tracking-tight">
              Our Core Purpose
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Driving sustainable growth for Nepal's coffee industry by
              modernizing the traditional value chain.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group flex flex-col gap-5 p-8 rounded-xl bg-background-light dark:bg-[#1a2e1a] border border-[#dbe6db] dark:border-[#2a422a] shadow-sm hover:shadow-md transition-all">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#111811] transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  ads_click
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-[#111811] dark:text-white">
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To empower every stakeholder in the coffee value chain—from
                  remote farmers to city cafes—through digital connectivity,
                  transparent pricing, and fair trade practices.
                </p>
              </div>
            </div>
            <div className="group flex flex-col gap-5 p-8 rounded-xl bg-background-light dark:bg-[#1a2e1a] border border-[#dbe6db] dark:border-[#2a422a] shadow-sm hover:shadow-md transition-all">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#111811] transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  visibility
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-[#111811] dark:text-white">
                  Our Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  A thriving, self-sustaining national coffee economy where Nepal
                  is recognized globally not just for its mountains, but for its
                  premium, high-altitude specialty coffee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Chain Section */}
      <div className="w-full py-16 px-4 md:px-10 lg:px-40 flex justify-center bg-background-light dark:bg-[#152915]">
        <div className="max-w-[1024px] w-full flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              Value Chain
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#111811] dark:text-white tracking-tight max-w-[600px]">
              Connecting the Dots
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-[700px]">
              We provide specialized tools for every role in the coffee journey,
              creating a cohesive ecosystem where everyone wins.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col p-6 rounded-lg bg-white dark:bg-[#1a2e1a] border border-transparent hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">
                agriculture
              </span>
              <h3 className="text-lg font-bold text-[#111811] dark:text-white mb-2">
                Farmers
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Gaining direct market access, fair pricing insights, and
                agronomy support for their harvest.
              </p>
            </div>
            <div className="flex flex-col p-6 rounded-lg bg-white dark:bg-[#1a2e1a] border border-transparent hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">
                local_shipping
              </span>
              <h3 className="text-lg font-bold text-[#111811] dark:text-white mb-2">
                Suppliers
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Efficiently distributing fertilizers, machinery, and essential
                tools to remote farming districts.
              </p>
            </div>
            <div className="flex flex-col p-6 rounded-lg bg-white dark:bg-[#1a2e1a] border border-transparent hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">
                groups
              </span>
              <h3 className="text-lg font-bold text-[#111811] dark:text-white mb-2">
                Workers
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Finding reliable, fair employment opportunities during planting
                and harvest seasons.
              </p>
            </div>
            <div className="flex flex-col p-6 rounded-lg bg-white dark:bg-[#1a2e1a] border border-transparent hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">
                storefront
              </span>
              <h3 className="text-lg font-bold text-[#111811] dark:text-white mb-2">
                Coffee Shops
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sourcing authentic, high-quality local beans directly from the
                source with full traceability.
              </p>
            </div>
            <div className="flex flex-col p-6 rounded-lg bg-white dark:bg-[#1a2e1a] border border-transparent hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">
                potted_plant
              </span>
              <h3 className="text-lg font-bold text-[#111811] dark:text-white mb-2">
                Nurseries
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Producing and distributing high-quality coffee saplings to ensure
                the future quality of yields.
              </p>
            </div>
            <div className="flex flex-col p-6 rounded-lg bg-primary/10 border border-primary/20 items-start justify-center">
              <h3 className="text-lg font-bold text-[#111811] dark:text-white mb-2">
                Join the Ecosystem
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Are you part of the value chain?
              </p>
              <Link
                href="/auth/register"
                className="text-sm font-bold text-primary hover:text-green-600 flex items-center gap-1"
              >
                Register Now{' '}
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="w-full py-16 md:py-24 px-4 md:px-10 lg:px-40 flex justify-center bg-white dark:bg-background-dark">
        <div className="max-w-[1024px] w-full flex flex-col gap-10">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-black text-[#111811] dark:text-white">
                Meet the Stewards
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-base max-w-md">
                Our team combines agricultural expertise with technological
                innovation.
              </p>
            </div>
            <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
              View Full Team{' '}
              <span className="material-symbols-outlined text-lg">
                arrow_right_alt
              </span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col gap-4 group">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-200 relative">
                <Image
                  alt="portrait of nepalese man in suit smiling outdoors"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpDMOyUPm2THqSwl9Oy-zP_2QiGNlDCKxE1UdPb3RXdTLun71GGYBtaIGXLJ3N7-WdeFkc7IHf3NyaamwiZRUL2mzWjKbYIj_e6e52yvsvp24wWUIPyCBSPKyq2gapxhUv4Z2P3nu_viy1uz6H5isnIeF0PdmFo2qfGGekatHoxQ4xeElTQuxW_pmZV_eUPcua1huFEHje9iPN9VpigwgOAEzy1Nxyh0LUOWR7j6pHmoQ4KKH0q4PjV9v3xfQJUN_pAoKGVOt4fKE"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#111811] dark:text-white">
                  Aarav Sharma
                </h3>
                <p className="text-sm text-primary font-medium">
                  Executive Director
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 group">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-200 relative">
                <Image
                  alt="portrait of nepalese woman in traditional attire smiling in a field"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeROjHiAgY843HiTC2d-Z72bmc_NouCJ4BGFAr7d4o5qCtSkKCAlayeBXbIwW5dA29WEW3nyRma1dArqEAAVdjVm10A7W0ccDVk2Iu50Uh9aMzOV3BrHDPxnBnCvdpNm4rgsxesWmH8m-HzKDWfzTynswbRZVj80dVKKERvuzOQ2XykLldpyJgdKFhqTVwhUURBAor8GUCWKfSUExpihhRrB0i3aOlnGQkirBUILtbHPk-sSLObD_FbMCRMbGGYfNKoSZYSJMW8us"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#111811] dark:text-white">
                  Sita Gurung
                </h3>
                <p className="text-sm text-primary font-medium">
                  Head of Agronomy
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 group">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-200 relative">
                <Image
                  alt="portrait of young man with glasses working on tablet"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDms4z5eGGIBJrYKQB16bfoMHRGXwewVp4Yk-uYqmNYMtGUiypjEP4S3fAZDHn50IAQPitiBScbaqHOuIEo5OrMM3ArH1TNmtgvpJzFIYY1SYEeP4qqFt13lqFJ4ElG9GBBgH3zU1vUpYCsmWHxE1OQsc8DXx2AGGDVsZX1cueXRCiKKh1CceacSTUS7A87YjqYL_IP6pr97O-8_lxmMqaDTxjmp8OTrqXH9c_vmjtWrCAU4RtZxeuOtn-MPbJTDTo65gP5OHOeBdU"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#111811] dark:text-white">
                  Bikash Thapa
                </h3>
                <p className="text-sm text-primary font-medium">
                  Lead Technologist
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 group">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-200 relative">
                <Image
                  alt="portrait of senior woman smiling"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp8zjnP-ZFlAKVlR18W1FhaICGj7ot0ZFNQsJiSCbr1_Z8LvX4SX0IVgXLY3vFiTtNKyUcU3uIKE9zM1oQson29kvjk1eaL2NPzRaIMEA7i21pPEISpwDDVHA-rHznrnm7Ru76GQn2rZRs9jS2uf9KuTJRuxJYiMh8pSmGvjnqdSEgfHflGZnIuZ5dIJhaO_whBL0EeB8YOjJvG_zp7lTerKeNUkbVSrXApqOZH-ztoqMbFbCJQkj_lW63RVlgHSYdbnWdYLyytSo"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#111811] dark:text-white">
                  Priya Karki
                </h3>
                <p className="text-sm text-primary font-medium">
                  Community Outreach
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA Section */}
      <footer className="w-full bg-[#102210] text-white py-16 px-4 md:px-10 lg:px-40 flex justify-center">
        <div className="max-w-[1024px] w-full flex flex-col items-center text-center gap-10">
          <div className="flex flex-col items-center gap-2 opacity-80">
            <span className="material-symbols-outlined text-4xl mb-2">
              verified_user
            </span>
            <p className="text-sm tracking-widest uppercase font-bold text-primary">
              Trusted Partners
            </p>
            <p className="text-lg font-medium">
              Recognized by the National Tea and Coffee Development Board
            </p>
          </div>
          <div className="w-full h-px bg-white/10 my-4"></div>
          <div className="flex flex-col gap-6 max-w-[600px]">
            <h2 className="text-3xl md:text-4xl font-black">
              Ready to grow with us?
            </h2>
            <p className="text-gray-400">
              Join the thousands of farmers and businesses building the future
              of Nepalese coffee today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <Link
                href="/auth/register"
                className="h-12 px-8 bg-primary hover:bg-[#0fd60f] text-[#111811] text-base font-bold rounded shadow-lg shadow-primary/20 transition-all w-full sm:w-auto flex items-center justify-center"
              >
                Join Network
              </Link>
              <Link
                href="/contact"
                className="h-12 px-8 bg-transparent hover:bg-white/5 border border-white/20 text-white text-base font-bold rounded transition-all w-full sm:w-auto flex items-center justify-center"
              >
                Contact Support
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full pt-10 mt-6 border-t border-white/10 text-xs text-gray-500">
            <p>© 2024 Nepal Coffee Collective. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

