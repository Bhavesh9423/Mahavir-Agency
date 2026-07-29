import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { GalleryItem } from '../../data/galleryData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-4xl w-full bg-[#0f172a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition-colors border border-white/10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-h-[75vh] overflow-hidden bg-slate-950 flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[75vh] w-auto object-contain"
            />
          </div>

          <div className="p-6 bg-slate-900 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {item.category}
              </span>
            </div>
            <h3 className="text-xl font-bold font-poppins mb-1">{item.title}</h3>
            <p className="text-slate-300 text-sm">{item.description}</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
