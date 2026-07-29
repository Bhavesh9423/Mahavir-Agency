import React from 'react';
import { motion } from 'framer-motion';
import {
  Boxes,
  ShoppingBag,
  Truck,
  GraduationCap,
  BookOpen,
  Building2,
  Gift,
  Zap,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';
import { GlassCard } from '../ui/GlassCard';

interface ServicesSectionProps {
  onQuoteClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onQuoteClick }) => {
  const iconMap: Record<string, any> = {
    Boxes,
    ShoppingBag,
    Truck,
    GraduationCap,
    BookOpen,
    Building2,
    Gift,
    Zap
  };

  return (
    <section id="services" className="py-24 bg-[#070b13] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-blue-600/20 text-blue-400 border border-blue-500/30">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins mt-4">
            Comprehensive <span className="text-gradient-primary">Stationery Services</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Tailored supply chain solutions for Wholesale dealers, Retail customers, Schools, Colleges, Corporate Offices, and Custom Orders.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((srv, idx) => {
            const IconComponent = iconMap[srv.iconName] || Boxes;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <GlassCard glowColor="blue" className="h-full flex flex-col justify-between p-6 group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-slate-900 text-amber-400 border border-white/10">
                        {srv.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-poppins text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <button
                    onClick={onQuoteClick}
                    className="mt-6 text-xs font-bold text-blue-400 group-hover:text-white flex items-center gap-1 transition-colors"
                  >
                    Inquire Service <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
