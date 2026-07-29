import React from 'react';
import { motion } from 'framer-motion';
import { School, Landmark, Building, Briefcase, GraduationCap, Shield } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export const ClientsSection: React.FC = () => {
  const targetAudiences = [
    {
      title: 'Schools & K-12 Academies',
      desc: 'Answer books, drawing sheets, geometry sets, craft materials, and teacher whiteboard kits.',
      icon: School,
      badge: '100+ Schools Served'
    },
    {
      title: 'Colleges & Universities',
      desc: 'Engineering drawing paper, graph registers, spiral notebooks, calculators, and dissertation binding.',
      icon: Landmark,
      badge: 'Higher Ed Partner'
    },
    {
      title: 'Corporate Offices & IT Hubs',
      desc: 'Lever arch files, A4 copier paper reams, printer ink toners, desk organizers, and sticky notes.',
      icon: Building,
      badge: '300+ Corporate Clients'
    },
    {
      title: 'Commercial Businesses & Shops',
      desc: 'Accounting ledger registers, cash memo books, lamination pouches, staplers, and packaging tapes.',
      icon: Briefcase,
      badge: 'Wholesale B2B'
    },
    {
      title: 'Government Organizations',
      desc: 'Official filing folders, treasury registers, computer stationery, and tender supply fulfillment.',
      icon: Shield,
      badge: 'Govt Supplier'
    },
    {
      title: 'Students & Teachers',
      desc: 'High-GSM notebooks, gel pens, highlighters, exam pads, drawing books, and project supplies.',
      icon: GraduationCap,
      badge: 'Retail Walk-In'
    }
  ];

  return (
    <section id="clients" className="py-24 bg-[#070b13] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-blue-600/20 text-blue-400 border border-blue-500/30">
            Target Audience & Institutional Clients
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins mt-4">
            Serving Diverse <span className="text-gradient-primary">Sectors</span> Across the Region
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            From premier educational institutions to corporate headquarters and government offices, Mahavir Agency provides tailored stationery solutions.
          </p>
        </div>

        {/* Target Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetAudiences.map((aud, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <GlassCard glowColor="blue" className="h-full flex flex-col justify-between p-7 group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
                      <aud.icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 text-[10px] font-bold rounded-full bg-slate-900 text-amber-300 border border-white/10">
                      {aud.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-poppins text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {aud.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {aud.desc}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
