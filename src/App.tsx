import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Preloader } from './components/ui/Preloader';
import { AnimatedCursor } from './components/ui/AnimatedCursor';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingActions } from './components/layout/FloatingActions';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { ServicesSection } from './components/sections/ServicesSection';
import { ClientsSection } from './components/sections/ClientsSection';
import { StatsSection } from './components/sections/StatsSection';
import { ContactSection } from './components/sections/ContactSection';
import { ProductModal } from './components/ui/ProductModal';
import { Toast } from './components/ui/Toast';
import type { Product } from './data/productsData';
import { PRODUCTS_DATA } from './data/productsData';
import { Search, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function AppContent() {
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [globalSearch, setGlobalSearch] = useState('');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Custom Cursor */}
      <AnimatedCursor />

      {/* Main Header Nav */}
      <Header
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenQuote={() => setQuoteModalOpen(true)}
      />

      {/* Main Section Views */}
      <main>
        <HeroSection
          onContactClick={scrollToContact}
        />

        <AboutSection />

        <WhyChooseUs />

        <ServicesSection onQuoteClick={() => setQuoteModalOpen(true)} />

        <ClientsSection />

        <StatsSection />

        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action CTA Widgets */}
      <FloatingActions />

      {/* Product Detail Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onShowToast={showToast}
      />

      {/* Global Search Modal Overlay */}
      <AnimatePresence>
        {searchModalOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative w-full max-w-2xl bg-[#0f172a] border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-white font-bold font-poppins">
                  <Search className="w-5 h-5 text-blue-400" />
                  <span>Search Wholesale & Retail Catalog</span>
                </div>
                <button
                  onClick={() => setSearchModalOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  autoFocus
                  value={globalSearch}
                  onChange={(e) => setGlobalSearch(e.target.value)}
                  placeholder="Type product name, e.g. A4 Paper, Gel Pen, Calculator, File..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>

              <div className="mt-4 max-h-60 overflow-y-auto space-y-2">
                {PRODUCTS_DATA.filter((p) =>
                  p.name.toLowerCase().includes(globalSearch.toLowerCase()) ||
                  p.category.toLowerCase().includes(globalSearch.toLowerCase())
                ).map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      setSelectedProduct(p);
                      setSearchModalOpen(false);
                    }}
                    className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                      <div>
                        <h5 className="text-xs font-bold text-white">{p.name}</h5>
                        <span className="text-[10px] text-amber-400">{p.category}</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-blue-400">{p.priceWholesale}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Quote Request Modal */}
      <AnimatePresence>
        {quoteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md bg-[#0f172a] border border-white/10 rounded-3xl p-6 shadow-2xl text-white"
            >
              <button
                onClick={() => setQuoteModalOpen(false)}
                className="absolute top-4 right-4 p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h3 className="text-xl font-bold font-poppins">Get Wholesale Quote</h3>
              </div>
              <p className="text-xs text-slate-300 mb-6">
                Receive bulk pricing & catalog rate list directly on WhatsApp or Email.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  showToast('Quote request submitted! We will send the wholesale price list shortly.');
                  setQuoteModalOpen(false);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter WhatsApp / Mobile No"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Stationery Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. 50 A4 Paper Reams, 20 Lever Arch Files, 100 Gel Pens"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30"
                >
                  Send Wholesale Quote Request
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Toast Notifications */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
