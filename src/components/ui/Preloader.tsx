import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090d16] text-white select-none overflow-hidden"
      >
        {/* Background Glowing Blurs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-amber-500/15 rounded-full blur-[80px]" />

        {/* Brand Icon & Name */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 z-10"
        >
          <div className="relative w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-amber-500 shadow-2xl p-0.5 glow-blue">
            <div className="w-full h-full bg-[#090d16] rounded-[14px] flex items-center justify-center">
              <span className="text-4xl">✏️</span>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight font-poppins text-gradient-primary">
              MAHAVIR AGENCY
            </h1>
          </div>
        </motion.div>

        {/* Progress Bar & Counter */}
        <div className="w-72 mt-10 z-10">
          <div className="flex justify-between text-xs text-slate-300 font-mono mb-2">
            <span>LOADING</span>
            <span className="text-amber-400 font-bold">{Math.min(progress, 100)}%</span>
          </div>
          <div className="w-full h-3 bg-slate-900 rounded-full border border-white/20 p-0.5 overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-amber-400 rounded-full transition-all duration-150 ease-out shadow-md shadow-blue-500/50"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
