import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default function CoffeeInfoPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="size-16 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl">coffee</span>
          </div>
          <h1 className="text-5xl font-black text-[#111811] dark:text-white tracking-tight">
            Coffee Information
          </h1>
        </div>
        <p className="text-xl text-[#4e5d4e] dark:text-[#a0b0a0] max-w-3xl mx-auto">
          Comprehensive insights into Nepal's coffee industry, market trends, and quality standards
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Market Overview */}
        <div className="bg-white dark:bg-[#1a2e1a] rounded-xl border border-[#dbe6db] dark:border-[#2a3e2a] shadow-sm p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">trending_up</span>
            </div>
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white">Market Overview</h2>
          </div>
          <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
            Nepal's coffee industry has been growing steadily, with increasing demand both domestically and internationally. The country's unique geography and climate create ideal conditions for high-quality Arabica coffee production.
          </p>
          <div className="bg-[#f0f4f0] dark:bg-[#121f12] p-4 rounded-lg">
            <h3 className="font-semibold text-[#111811] dark:text-white mb-2">Key Statistics</h3>
            <ul className="text-sm text-[#4e5d4e] dark:text-[#a0b0a0] space-y-1">
              <li>• Production: Growing annually</li>
              <li>• Export Markets: Expanding globally</li>
              <li>• Quality: High-altitude Arabica</li>
              <li>• Certification: Organic options available</li>
            </ul>
          </div>
        </div>

        {/* Current Prices */}
        <div className="bg-white dark:bg-[#1a2e1a] rounded-xl border border-[#dbe6db] dark:border-[#2a3e2a] shadow-sm p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">attach_money</span>
            </div>
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white">Current Prices</h2>
          </div>
          <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
            Coffee prices vary based on quality, origin, and market conditions. Prices are updated regularly to reflect current market trends.
          </p>
          <div className="bg-[#f0f4f0] dark:bg-[#121f12] p-4 rounded-lg">
            <h3 className="font-semibold text-[#111811] dark:text-white mb-2">Average Prices (per kg)</h3>
            <ul className="text-sm text-[#4e5d4e] dark:text-[#a0b0a0] space-y-1">
              <li>• Parchment Coffee: Rs. 500-600</li>
              <li>• Green Coffee: Rs. 600-800</li>
              <li>• Specialty Grade: Rs. 800-1200</li>
              <li>• Organic Certified: +10-15%</li>
            </ul>
            <p className="text-xs text-[#618961] dark:text-[#8ba38b] mt-3">
              *Prices are indicative and may vary by region and quality
            </p>
          </div>
        </div>

        {/* Market Demand */}
        <div className="bg-white dark:bg-[#1a2e1a] rounded-xl border border-[#dbe6db] dark:border-[#2a3e2a] shadow-sm p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">shopping_cart</span>
            </div>
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white">Market Demand</h2>
          </div>
          <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
            Demand for Nepalese coffee is increasing both domestically and internationally. The specialty coffee market shows particular growth potential.
          </p>
          <div className="bg-[#f0f4f0] dark:bg-[#121f12] p-4 rounded-lg">
            <h3 className="font-semibold text-[#111811] dark:text-white mb-2">Demand Trends</h3>
            <ul className="text-sm text-[#4e5d4e] dark:text-[#a0b0a0] space-y-1">
              <li>• Growing domestic consumption</li>
              <li>• Increasing export opportunities</li>
              <li>• Specialty coffee market expansion</li>
              <li>• Organic and fair trade preferences</li>
            </ul>
          </div>
        </div>

        {/* Quality Standards */}
        <div className="bg-white dark:bg-[#1a2e1a] rounded-xl border border-[#dbe6db] dark:border-[#2a3e2a] shadow-sm p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <h2 className="text-2xl font-bold text-[#111811] dark:text-white">Quality Standards</h2>
          </div>
          <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed mb-4">
            Nepalese coffee is graded based on altitude, processing method, and bean quality. Understanding these standards helps ensure quality transactions.
          </p>
          <div className="bg-[#f0f4f0] dark:bg-[#121f12] p-4 rounded-lg">
            <h3 className="font-semibold text-[#111811] dark:text-white mb-2">Grading System</h3>
            <ul className="text-sm text-[#4e5d4e] dark:text-[#a0b0a0] space-y-1">
              <li>• Grade A: Premium quality, high altitude</li>
              <li>• Grade B: Good quality, standard processing</li>
              <li>• Grade C: Commercial grade</li>
              <li>• Specialty: Cup score 80+ points</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Coffee Growing Regions */}
      <div className="bg-white dark:bg-[#1a2e1a] rounded-xl border border-[#dbe6db] dark:border-[#2a3e2a] shadow-sm p-8 mb-12">
        <h2 className="text-3xl font-bold text-[#111811] dark:text-white mb-6">Coffee Growing Regions in Nepal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f0f4f0] dark:bg-[#121f12] p-6 rounded-lg">
            <h3 className="font-bold text-[#111811] dark:text-white mb-2">Eastern Region</h3>
            <p className="text-sm text-[#4e5d4e] dark:text-[#a0b0a0]">
              Ilam, Panchthar, and Taplejung districts known for high-altitude Arabica production.
            </p>
          </div>
          <div className="bg-[#f0f4f0] dark:bg-[#121f12] p-6 rounded-lg">
            <h3 className="font-bold text-[#111811] dark:text-white mb-2">Central Region</h3>
            <p className="text-sm text-[#4e5d4e] dark:text-[#a0b0a0]">
              Gulmi, Palpa, and Syangja districts with established coffee farming communities.
            </p>
          </div>
          <div className="bg-[#f0f4f0] dark:bg-[#121f12] p-6 rounded-lg">
            <h3 className="font-bold text-[#111811] dark:text-white mb-2">Western Region</h3>
            <p className="text-sm text-[#4e5d4e] dark:text-[#a0b0a0]">
              Kaski, Tanahun, and other districts with growing coffee cultivation.
            </p>
          </div>
        </div>
      </div>

      {/* Processing Methods */}
      <div className="bg-white dark:bg-[#1a2e1a] rounded-xl border border-[#dbe6db] dark:border-[#2a3e2a] shadow-sm p-8 mb-12">
        <h2 className="text-3xl font-bold text-[#111811] dark:text-white mb-6">Processing Methods</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-[#111811] dark:text-white mb-2">Washed Process</h3>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed">
              Coffee cherries are pulped, fermented, and washed to remove the mucilage. This method produces clean, bright flavors and is commonly used in Nepal.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#111811] dark:text-white mb-2">Natural Process</h3>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed">
              Coffee cherries are dried whole, allowing the fruit to impart sweetness and body to the beans. Less common but gaining popularity.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#111811] dark:text-white mb-2">Honey Process</h3>
            <p className="text-[#4e5d4e] dark:text-[#a0b0a0] leading-relaxed">
              A hybrid method where some mucilage is left on the bean during drying, creating a balance between washed and natural processes.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl border border-primary/30 p-8 text-center">
        <h2 className="text-2xl font-bold text-[#111811] dark:text-white mb-4">
          Ready to Buy or Sell Coffee?
        </h2>
        <p className="text-[#4e5d4e] dark:text-[#a0b0a0] mb-6">
          Join our platform to connect with coffee farmers and buyers across Nepal
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/auth/register?role=farmer"
            className="bg-primary hover:bg-[#0fd60f] text-[#111811] font-bold px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
          >
            Register as Farmer
          </Link>
          <Link
            href="/auth/register?role=buyer"
            className="bg-white dark:bg-[#2a402a] border border-[#dbe6db] dark:border-[#405540] text-[#111811] dark:text-white font-bold px-6 py-3 rounded-lg hover:bg-[#f0f4f0] dark:hover:bg-[#354a35] transition-all"
          >
            Register as Buyer
          </Link>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to Home
        </Link>
      </div>
    </div>
  );
}

