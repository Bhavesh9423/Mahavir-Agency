import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/testimonialsData';
import { GlassCard } from '../ui/GlassCard';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#090d16] text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/30">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins mt-4">
            What Our <span className="text-gradient-gold">Partners Say</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Real feedback from institute directors, office procurement heads, artists, and business managers who rely on Mahavir Agency.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard glowColor="amber" className="p-8 sm:p-12 relative overflow-hidden">
                <Quote className="absolute top-6 right-8 w-20 h-20 text-amber-500/10 pointer-events-none" />

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-serif italic mb-8">
                  "{current.comment}"
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-amber-400/60 shadow-md"
                    />
                    <div>
                      <h4 className="text-base font-bold font-poppins text-white flex items-center gap-1.5">
                        {current.name} <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </h4>
                      <p className="text-xs text-slate-400 font-medium">
                        {current.role} • <span className="text-amber-300">{current.organization}</span>
                      </p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-block px-3 py-1 text-xs font-bold rounded-full bg-slate-900 text-blue-400 border border-white/10">
                    {current.clientType}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white border border-white/10 transition-colors shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-amber-400' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white border border-white/10 transition-colors shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
