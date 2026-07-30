import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="pt-12 pb-12 border-t border-white/10 relative overflow-hidden">
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
            {t.footer.desc}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">Mahavir Agency & Novelty</strong>. {t.footer.rights}
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-amber-400 cursor-pointer">{t.footer.privacy}</span>
            <span className="hover:text-amber-400 cursor-pointer">{t.footer.terms}</span>
            <span className="hover:text-amber-400 cursor-pointer">{t.footer.gst}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
