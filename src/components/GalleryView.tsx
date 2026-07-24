import React, { useState } from 'react';
import { GALLERY_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'store', label: 'Store Interior' },
    { id: 'medicines', label: 'Medicines & Shelves' },
    { id: 'equipment', label: 'Medical Devices' },
    { id: 'customers', label: 'Customer Assistance' }
  ];

  const filteredImages = GALLERY_DATA.filter(img => {
    return activeCategory === 'all' || img.category === activeCategory;
  });

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950/40 text-slate-800 dark:text-slate-100 min-h-screen transition-colors duration-300">
      
      {/* Title Header */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80" 
            alt="Gallery Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-2">
          <span className="text-xs font-bold text-accent-med uppercase tracking-wider font-mono">Our Physical Workspace</span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight leading-tight">
            Store Photo Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-400 font-light max-w-xl mx-auto">
            A visual overview of our clean, sterile shelves, genuine certified inventories, and friendly customer assistance area on Kespah Road.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-accent-med text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, idx) => (
              <motion.div
                layout
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-250/50 dark:border-slate-800 shadow-2xs aspect-4/3 cursor-pointer"
                onClick={() => setLightboxIndex(idx)}
              >
                {/* Image */}
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>

                {/* Info Bar */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent text-white">
                  <h4 className="font-bold text-sm leading-tight">{image.title}</h4>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 mt-1">
                    Category: {image.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </section>

      {/* Lightbox Popup Dialog */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 flex flex-col items-center justify-center p-4 sm:p-8 backdrop-blur-xs select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <div className="relative max-w-4xl max-h-[80vh] flex items-center justify-center">
              
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:-left-16 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Main image */}
              <motion.img
                key={filteredImages[lightboxIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                src={filteredImages[lightboxIndex].url}
                alt={filteredImages[lightboxIndex].alt}
                className="max-w-full max-h-[70vh] rounded-xl object-contain border border-white/10"
                referrerPolicy="no-referrer"
              />

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:-right-16 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

            </div>

            {/* Info Footer */}
            <div className="mt-4 text-center text-white space-y-1">
              <h3 className="font-bold text-lg">{filteredImages[lightboxIndex].title}</h3>
              <p className="text-xs text-slate-400">{filteredImages[lightboxIndex].alt}</p>
              <span className="inline-block mt-1 font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-sm">
                IMAGE {lightboxIndex + 1} OF {filteredImages.length}
              </span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
