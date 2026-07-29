import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Eye, Package } from 'lucide-react';
import type { Product } from '../../data/productsData';
import { CATEGORIES, PRODUCTS_DATA } from '../../data/productsData';
import { GlassCard } from '../ui/GlassCard';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  searchQuery,
  onSearchChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((item) => {
      const matchesCat =
        selectedCategory === 'all' || item.mainCategory === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-24 bg-[#070b13] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/30">
            Our Products Catalog
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins mt-4">
            Explore <span className="text-gradient-primary">Wholesale & Retail</span> Stationery
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Over 10,000+ items in stock across 40+ categories: Notebooks, Pens, Calculators, A4 Copier Paper, Files, Art Colors, Staplers, Toners & Novelty Products.
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900/80 p-4 rounded-3xl border border-white/10 backdrop-blur-xl">
          {/* Search Box Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by name (e.g. A4 Paper, Calculator, Gel Pen)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-950/80 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Category Tabs Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/30'
                    : 'bg-slate-950/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard
                  glowColor="blue"
                  className="h-full flex flex-col justify-between p-5 group"
                  onClick={() => onSelectProduct(product)}
                >
                  <div>
                    {/* Image Showcase */}
                    <div className="relative h-48 rounded-xl overflow-hidden bg-slate-900 mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070b13] via-transparent to-transparent opacity-60" />

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {product.isPopular && (
                          <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-amber-500 text-black shadow-md">
                            🔥 Bestseller
                          </span>
                        )}
                        {product.isNew && (
                          <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-blue-600 text-white shadow-md">
                            ✨ New
                          </span>
                        )}
                      </div>

                      <div className="absolute bottom-3 left-3">
                        <span className="px-2.5 py-1 text-[10px] font-bold rounded-lg bg-slate-900/90 text-slate-200 backdrop-blur-md border border-white/10">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Product Name & Desc */}
                    <h3 className="text-lg font-bold font-poppins text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Pricing & Quick Action */}
                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider font-bold text-amber-400">
                        Wholesale Rate
                      </span>
                      <span className="text-base font-black text-white">{product.priceWholesale}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="py-2 px-3.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white font-bold text-xs border border-blue-500/30 flex items-center gap-1.5 transition-all shadow-md"
                    >
                      <Eye className="w-3.5 h-3.5" /> Quick View
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-white/10 max-w-md mx-auto">
            <Package className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white">No products found</h4>
            <p className="text-xs text-slate-400 mt-1">
              Try searching with another keyword or reset category filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                onSearchChange('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
