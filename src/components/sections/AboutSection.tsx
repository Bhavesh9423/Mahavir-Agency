import React, { useState } from 'react';
import { Building2, Award, ShieldCheck, Check } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'wholesale' | 'retail' | 'institutions'>('wholesale');

  const tabContents = {
    wholesale: {
      title: 'Wholesale B2B Distribution',
      desc: 'Bulk inventory supply for retail shopkeepers, office stationers, and commercial dealers with tier discounts and credit terms.',
      points: [
        'Direct factory wholesale rates',
        'Full stock availability on A4 paper & lever arch files',
        'Customized billing & GST compliance invoices',
        'City-wide express logistics & pallet deliveries'
      ],
      image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop'
    },
    retail: {
      title: 'Retail Store Counter',
      desc: 'Welcoming walk-in store counter for students, parents, and teachers to explore top brand notebooks, pens, and gift novelties.',
      points: [
        'Over 7,000+ ready products in stock',
        'Friendly & knowledgeable stationery staff',
        'Instant single item purchases with zero minimums',
        'Exclusive student geometry & art discounts'
      ],
      image: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=800&auto=format&fit=crop'
    },
    institutions: {
      title: 'Institutional & Corporate Contracts',
      desc: 'Complete annual stationery procurement contracts for colleges, coaching institutes, and corporate offices.',
      points: [
        'Custom notebook & student kit customization',
        'Whiteboard accessories, markers & duster supplies',
        'Printer toner cartridges & office filing solutions',
        'Scheduled term-wise bulk deliveries'
      ],
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop'
    }
  };

  return (
    <section id="about" className="py-24 bg-[#090d16] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-blue-600/20 text-blue-400 border border-blue-500/30">
            About Our Store
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins mt-4">
            Trusted Stationery Partner for <span className="text-gradient-gold">Decades</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            <strong>Mahavir Agency & Novelty</strong> is a trusted stationery store offering high-quality products for colleges, offices, businesses, and individual customers. We provide wholesale and retail services with affordable prices, genuine products, and excellent customer support.
          </p>
        </div>

        {/* Interactive Tabs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Tab Selection Buttons */}
          <div className="lg:col-span-5 space-y-4">
            {[
              { id: 'wholesale', label: 'Wholesale & Bulk Supply', icon: Building2 },
              { id: 'retail', label: 'Retail Store Counter', icon: Award },
              { id: 'institutions', label: 'Institutional & Office Contracts', icon: ShieldCheck }
            ].map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`p-5 rounded-2xl cursor-pointer border transition-all duration-300 flex items-center gap-4 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-slate-900 border-blue-500 shadow-xl shadow-blue-500/10'
                    : 'bg-slate-900/50 border-white/5 hover:border-white/20'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  <tab.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold font-poppins text-base text-white">{tab.label}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Explore our operational highlights</p>
                </div>
              </div>
            ))}
          </div>

          {/* Active Tab Preview Card */}
          <div className="lg:col-span-7">
            <GlassCard glowColor="amber" className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                    OUR CAPABILITY
                  </span>
                  <h3 className="text-2xl font-bold font-poppins text-white mt-1 mb-3">
                    {tabContents[activeTab].title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {tabContents[activeTab].desc}
                  </p>

                  <ul className="space-y-2.5">
                    {tabContents[activeTab].points.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src={tabContents[activeTab].image}
                    alt={tabContents[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
