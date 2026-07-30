import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag, ArrowRight, ChevronDown, CheckCircle2, Store } from 'lucide-react';
import { HeroStationeryScene } from '../3d/HeroStationeryScene';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const highlights = [
    'Wholesale & Retail',
    'Office Essentials',
    'College Stationery',
    'Corporate Supplies',
    'Art Materials',
    'Printing Accessories'
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#090d16]">
      {/* 3D WebGL Stationery Scene Canvas */}
      <HeroStationeryScene />

      {/* Ambient Lighting Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Live Store Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-white/15 backdrop-blur-md shadow-xl mb-6"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <Store className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-bold text-slate-200 tracking-wide uppercase">
            Mahavir Agency & Novelty • Wholesale & Retail Counter Open
          </span>
        </motion.div>

        {/* Large Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-poppins text-white max-w-5xl mx-auto leading-[1.15]"
        >
          Your One Stop Destination for{' '}
          <span className="text-gradient-primary">Premium Stationery</span>
        </motion.h1>

        {/* Sub Heading Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed"
        >
          "Everything You Need for College, Office & Business"
        </motion.p>

        {/* Highlighted Categories Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto"
        >
          {highlights.map((item, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-slate-200 backdrop-blur-md flex items-center gap-1.5 hover:border-amber-400/50 hover:text-amber-300 transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              {item}
            </span>
          ))}
        </motion.div>

        {/* Hero CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm shadow-xl shadow-blue-600/40 flex items-center justify-center gap-2.5 transition-all hover:scale-105 border border-blue-400/30"
          >
            <ShoppingBag className="w-5 h-5 text-amber-300" />
            Our Services
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-extrabold text-sm border border-white/15 backdrop-blur-md flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            About Store <ArrowRight className="w-4 h-4 text-blue-400" />
          </a>

          <a
            href="#contact"
            onClick={onContactClick}
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-extrabold text-sm border border-amber-500/40 backdrop-blur-md flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            <Sparkles className="w-4 h-4 text-amber-400" /> Contact Store
          </a>
        </motion.div>

        {/* Animated Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="mt-16 inline-flex flex-col items-center gap-2 text-slate-400 text-xs font-semibold"
        >
          <span>SCROLL TO EXPLORE CATALOG</span>
          <ChevronDown className="w-5 h-5 text-amber-400" />
        </motion.div>
      </div>
    </section>
  );
};
