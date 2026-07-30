import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  BadgePercent,
  TrendingDown,
  Store,
  PackageCheck,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Layers,
  Smile
} from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { useLanguage } from '../../context/LanguageContext';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const iconList = [
    Award,
    BadgePercent,
    TrendingDown,
    Store,
    PackageCheck,
    ShieldCheck,
    CheckCircle2,
    Zap,
    Layers,
    Smile
  ];

  const accents = [
    'from-blue-600 to-indigo-600',
    'from-amber-500 to-yellow-600',
    'from-emerald-600 to-teal-600',
    'from-purple-600 to-indigo-600',
    'from-amber-500 to-red-600',
    'from-blue-500 to-cyan-600',
    'from-emerald-500 to-green-600',
    'from-yellow-500 to-amber-600',
    'from-indigo-600 to-purple-600',
    'from-rose-500 to-pink-600'
  ];

  return (
    <section id="why-us" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-blue-600/20 text-blue-400 border border-blue-500/30">
            {t.whyUs.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins mt-4 text-white">
            {t.whyUs.title}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 10 Feature Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {t.whyUs.benefits.map((item, idx) => {
            const IconComponent = iconList[idx] || Award;
            const accentColor = accents[idx % accents.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <GlassCard
                  glowColor="amber"
                  className="h-full flex flex-col justify-between p-6 text-center group"
                >
                  <div className="flex flex-col items-center">
                    {/* Animated Icon Circle */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${accentColor} p-0.5 shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white">
                        <IconComponent className="w-7 h-7 text-amber-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold font-poppins text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
