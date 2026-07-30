import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Building2, Layers } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: '4000+',
      label: 'Happy Customers',
      desc: 'Retail & wholesale shoppers',
      icon: Users,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      value: '50+',
      label: 'Colleges & Academies',
      desc: 'Higher education supply',
      icon: GraduationCap,
      color: 'from-amber-500 to-yellow-600'
    },
    {
      value: '100+',
      label: 'Office Clients',
      desc: 'Corporate & B2B accounts',
      icon: Building2,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      value: '7000+',
      label: 'Products Available',
      desc: 'Ready stock catalog items',
      icon: Layers,
      color: 'from-violet-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#070b13] via-[#0b1120] to-[#070b13] text-white relative overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <GlassCard glowColor="blue" className="p-8 text-center group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${st.color} p-0.5 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <div className="w-full h-full bg-[#090d16] rounded-[14px] flex items-center justify-center text-white">
                    <st.icon className="w-7 h-7 text-amber-400" />
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
          ))}
        </div>
      </div>
    </section>
  );
};
