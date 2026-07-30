import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060911] text-slate-300 pt-12 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 pb-8 border-b border-white/10">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-amber-500 flex items-center justify-center text-xl shadow-lg">
              ✏️
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight font-poppins text-white">
                MAHAVIR AGENCY
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
                & Novelty
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-400 max-w-xl text-center md:text-right leading-relaxed">
            Your premier wholesale and retail stationery destination in Karad. Trusted provider of high-quality office essentials, college notebooks, printing paper, and novelty gift products.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300">Mahavir Agency & Novelty</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Supply</span>
            <span className="hover:text-slate-300 cursor-pointer">GST Invoice Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
