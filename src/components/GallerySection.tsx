import { useState } from 'react';
import { Camera, X, Image as ImageIcon, ZoomIn } from 'lucide-react';
import { motion } from 'framer-motion';
import { DEFAULT_GALLERY_ITEMS } from '../data/discography';
import { GalleryItem } from '../types';

export default function GallerySection() {
  const [galleryItems] = useState<GalleryItem[]>([
    { ...DEFAULT_GALLERY_ITEMS[0], customUrl: '/image copy.png', title: 'Studio Vocal Session' },
    { ...DEFAULT_GALLERY_ITEMS[1], customUrl: '/image.png', title: 'Editorial Look 01' },
    ...DEFAULT_GALLERY_ITEMS.slice(2)
  ]);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <p className="font-script text-3xl sm:text-4xl text-[#E6007E]">
            Visual moments
          </p>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#111111] uppercase tracking-tight">
            GALLERY
          </h2>
          <p className="text-gray-600 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Color-consistent photography grid. Real editorial & press photography will be placed here prior to launch.
          </p>
          <div className="w-20 h-1 bg-[#E6007E] mx-auto rounded-full mt-3" />
        </motion.div>

        {/* 3-6 Image Grid with Soft-Rounded Containers */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div
                onClick={() => setSelectedImage(item)}
                className={`relative w-full ${
                  item.aspectRatio || 'aspect-square'
                } rounded-3xl overflow-hidden cursor-pointer shadow-md group-hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 flex flex-col items-center justify-center text-center p-4 text-white bg-gradient-to-br ${item.bgColor}`}
              >
                {item.customUrl ? (
                  <img
                    src={item.customUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  /* Color Block Placeholder */
                  <div className="relative z-10 space-y-2">
                    <Camera className="w-8 h-8 mx-auto text-white/80 group-hover:scale-110 transition-transform" />
                    <p className="font-display font-bold text-sm uppercase tracking-wide">
                      {item.title}
                    </p>
                    <span className="inline-block text-[10px] font-mono bg-black/30 backdrop-blur-xs px-3 py-1 rounded-full text-pink-200 border border-white/10">
                      [Photo Placeholder]
                    </span>
                  </div>
                )}

                {/* Overlaid Hover Action */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                  <span className="bg-[#E6007E] text-white px-4 py-2.5 rounded-full shadow-lg text-xs font-mono font-bold flex items-center gap-1.5 transform group-hover:scale-105 transition-transform">
                    <ZoomIn className="w-4 h-4" /> Expand
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Pre-Launch Notice */}
        <div className="mt-12 text-center text-xs font-mono text-gray-500 bg-[#FAF7F2] py-3.5 px-6 rounded-full max-w-md mx-auto border border-gray-200 shadow-xs">
          <span className="text-[#E6007E] font-bold">Pre-Launch Notice:</span> Real editorial & press photography will be inserted prior to official site launch.
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-[#111111] rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-6 text-white text-center space-y-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-[#E6007E] text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 flex items-center justify-center">
              {selectedImage.customUrl ? (
                <img
                  src={selectedImage.customUrl}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="p-8 text-center space-y-3">
                  <ImageIcon className="w-16 h-16 mx-auto text-pink-300 opacity-80" />
                  <p className="font-display font-black text-2xl uppercase tracking-wider">
                    {selectedImage.title}
                  </p>
                  <p className="text-xs text-pink-200 font-mono">
                    [Photo Placeholder — Photography slot reserved for ONEKEYZ]
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between pt-2 text-xs text-gray-400 border-t border-white/10 font-mono">
              <span className="font-display font-bold text-white text-sm">ONEKEYZ Portfolio</span>
              <span>Click backdrop to close</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
