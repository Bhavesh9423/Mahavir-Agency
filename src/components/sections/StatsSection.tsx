import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Building2, Layers } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { useLanguage } from '../../context/LanguageContext';

export const StatsSection: React.FC = () => {
  const { t } = useLanguage();

  const iconList = [Users, GraduationCap, Building2, Layers];
  const colors = [
    'from-blue-500 to-indigo-600',
    'from-amber-500 to-yellow-600',
    'from-emerald-500 to-teal-600',
    'from-violet-500 to-purple-600'
  ];

  return (
    <section className="py-20 text-white relative overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.map((st, idx) => {
            const IconComponent = iconList[idx] || Users;
            const colorClass = colors[idx % colors.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <GlassCard glowColor="blue" className="p-8 text-center group">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${colorClass} p-0.5 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white">
                      <IconComponent className="w-7 h-7 text-amber-400" />
                    </div>
                  </div>

                  <div className="text-4xl sm:text-5xl font-black font-poppins text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {st.value}
                  </div>

                  <div className="text-base font-bold font-poppins text-slate-200 mt-2">
                    {st.label}
                  </div>

                  <div className="text-xs text-slate-400 mt-1">
                    {st.desc}
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
