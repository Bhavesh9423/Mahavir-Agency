import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import type { GalleryItem } from '../../data/galleryData';
import { GALLERY_ITEMS } from '../../data/galleryData';
import { LightboxModal } from '../ui/LightboxModal';

export const GallerySection: React.FC = () => {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[#090d16] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/30">
            Photo Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins mt-4">
            Explore Our <span className="text-gradient-gold">Store & Stock</span> Gallery
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Take a visual tour of Mahavir Agency's wholesale warehouse, retail counters, stock displays, and luxury writing instruments collection.
          </p>
        </div>

        {/* Pinterest Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {GALLERY_ITEMS.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden group cursor-pointer border border-white/10 bg-slate-900 break-inside-avoid shadow-xl"
                onClick={() => setLightboxItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-amber-500 text-black">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold font-poppins text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          item={lightboxItem}
          onClose={() => setLightboxItem(null)}
        />
      </div>
    </section>
  );
};
