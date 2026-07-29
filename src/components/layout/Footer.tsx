import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FooterProps {
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowToast }) => {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    confetti({ particleCount: 50, spread: 50 });
    onShowToast(`Thank you! ${email} has been subscribed for wholesale catalog updates.`);
    setEmail('');
  };

  return (
    <footer className="bg-[#060911] text-slate-300 pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
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
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Your premier wholesale and retail stationery destination. Trusted provider of high-quality school supplies, office essentials, college notebooks, printing paper, and novelty gift products.
            </p>

            {/* Social Icons SVGs */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold font-poppins text-sm uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {['About Us', 'Products Catalog', 'Wholesale Supply', 'Retail Store', 'Photo Gallery', 'Clients & Testimonials', 'Contact Us'].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3 text-amber-400" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-white font-bold font-poppins text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Top Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {['School Stationery', 'Office Files & Folders', 'Printer A4 Paper', 'Pens & Writing Sets', 'Scientific Calculators', 'Art & Craft Materials', 'Novelty Gift Products'].map((cat, idx) => (
                <li key={idx}>
                  <a href="#products" className="hover:text-amber-400 transition-colors">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Direct Contact */}
          <div>
            <h4 className="text-white font-bold font-poppins text-sm uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-3">
              Catalog Updates
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Subscribe to get monthly wholesale rate lists & new arrivals!
            </p>
            <form onSubmit={handleNewsletter} className="space-y-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all"
              >
                Subscribe Catalog
              </button>
            </form>
          </div>
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
