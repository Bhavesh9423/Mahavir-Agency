import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, PhoneCall, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setShowBackToTop(currentScroll > 400);
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Mahavir Agency! I have a stationery inquiry regarding wholesale/retail products.");
    window.open(`https://wa.me/919423262994?text=${text}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919423262994', '_self');
  };

  return (
    <>
      {/* Scroll Progress Bar at top of viewport */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-amber-400 shadow-md shadow-blue-500/50 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Action Buttons Container */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        {/* Floating WhatsApp Chat */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsApp}
          className="relative group w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 border border-white/20 transition-all"
          title="Chat on WhatsApp"
        >
          {/* Online Pulse Status Dot */}
          <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-green-300 rounded-full border-2 border-[#090d16] animate-ping" />
          <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-green-300 rounded-full border-2 border-[#090d16]" />
          <MessageSquare className="w-6 h-6" />
          
          {/* Hover Tooltip */}
          <span className="absolute left-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none shadow-xl">
            WhatsApp Online
          </span>
        </motion.button>

        {/* Floating Phone Call */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCall}
          className="relative group w-13 h-13 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl shadow-blue-600/40 border border-white/20 transition-all"
          title="Call Store Directly"
        >
          <PhoneCall className="w-5 h-5" />
          <span className="absolute left-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none shadow-xl">
            Call +91 9423262994
          </span>
        </motion.button>
      </div>

      {/* Back To Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white border border-white/15 backdrop-blur-md flex items-center justify-center shadow-2xl transition-colors"
            title="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-amber-400" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
