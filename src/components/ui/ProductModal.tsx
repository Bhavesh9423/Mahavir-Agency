import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, MessageSquare, Tag, Package } from 'lucide-react';
import type { Product } from '../../data/productsData';
import confetti from 'canvas-confetti';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onShowToast }) => {
  const [orderType, setOrderType] = useState<'retail' | 'wholesale'>('wholesale');

  if (!product) return null;

  const handleWhatsAppOrder = () => {
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
    const text = encodeURIComponent(
      `Hello Mahavir Agency! I would like to place an order/inquiry for:\n\n` +
      `📦 Item: ${product.name}\n` +
      `🏷️ Order Type: ${orderType.toUpperCase()}\n` +
      `💰 Unit Price: ${orderType === 'wholesale' ? product.priceWholesale : product.priceRetail}\n\n` +
      `Please contact me back with delivery details.`
    );
    window.open(`https://wa.me/919423262994?text=${text}`, '_blank');
    onShowToast(`Order details prepared! Opening WhatsApp...`);
  };

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
    onShowToast(`Inquiry sent for ${product.name}! Our representative will call you shortly.`);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-3xl bg-[#0f172a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden text-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image Showcase */}
            <div className="relative h-64 md:h-full bg-slate-900 overflow-hidden group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-600/90 text-white backdrop-blur-md">
                  {product.category}
                </span>
                <span className="flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/90 text-white">
                  <Check className="w-3.5 h-3.5" /> In Stock
                </span>
              </div>
            </div>

            {/* Product Details & Actions */}
            <div className="p-6 md:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
              <div>
                <h2 className="text-2xl font-bold font-poppins text-white mb-2">
                  {product.name}
                </h2>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features List */}
                <div className="mb-6 space-y-2">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">Key Highlights</h4>
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing Selector Tabs */}
                <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-900/90 rounded-2xl border border-white/5 mb-6">
                  <button
                    onClick={() => setOrderType('wholesale')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                      orderType === 'wholesale'
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="uppercase text-[10px] tracking-wider text-blue-200">Wholesale Price</span>
                    <span className="text-base font-extrabold">{product.priceWholesale}</span>
                  </button>
                  <button
                    onClick={() => setOrderType('retail')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                      orderType === 'retail'
                        ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="uppercase text-[10px] tracking-wider text-amber-100">Retail Price</span>
                    <span className="text-base font-extrabold">{product.priceRetail}</span>
                  </button>
                </div>

                {/* Minimum Order Info */}
                {orderType === 'wholesale' && (
                  <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl mb-6">
                    <Package className="w-4 h-4 shrink-0 text-amber-400" />
                    <span>Min Wholesale Order Quantity: <strong>{product.minOrderQuantity}</strong></span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-5 h-5" /> Order via WhatsApp Direct
                </button>
                <form onSubmit={handleQuickInquiry}>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-white/10 flex items-center justify-center gap-2 transition-all"
                  >
                    <Tag className="w-4 h-4 text-blue-400" /> Request Custom Bulk Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
