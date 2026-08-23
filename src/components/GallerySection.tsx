import { useState } from 'react';
import { X, ZoomIn, Film, Image as ImageIcon, Sparkles, Instagram, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { INSTAGRAM_URL } from '../data/discography';
import { SoundwaveVisualizer } from './SoundwaveVisualizer';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  subtitle: string;
  aspectRatio?: string;
  instagramUrl?: string;
}

const MEDIA_GALLERY: MediaItem[] = [
  {
    id: 'm1',
    type: 'image',
    url: '/image copy.png',
    title: 'Studio Vocal Session',
    subtitle: 'Bedazzled Mic Vocal Recording • 2025',
    aspectRatio: 'aspect-[4/5]',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    id: 'm2',
    type: 'video',
    url: '/video-real-session.mp4',
    title: 'REAL — Home Studio Session',
    subtitle: 'Live Single Recording Video Reel',
    aspectRatio: 'aspect-[4/5]',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    id: 'm3',
    type: 'image',
    url: '/chris-brown-concert.jpg',
    title: 'Concert & Stage Spotlight',
    subtitle: 'Chris Brown Concert Event Spotlight',
    aspectRatio: 'aspect-square',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    id: 'm4',
    type: 'video',
    url: '/video-acapella-zeffir.mp4',
    title: 'Semi-Acapella @ Zeffir Studios',
    subtitle: 'Live Vocal Take with KZ Browznbrushes',
    aspectRatio: 'aspect-[4/5]',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    id: 'm5',
    type: 'image',
    url: '/editorial-fashion-shoot.jpg',
    title: 'Fashion & Editorial Shoot',
    subtitle: 'Official Press & Editorial Photography',
    aspectRatio: 'aspect-[4/5]',
    instagramUrl: INSTAGRAM_URL,
  },
  {
    id: 'm6',
    type: 'video',
    url: '/video-vocal-harmony.mp4',
    title: 'Vocal Harmony & Ad-Libs Reel',
    subtitle: 'DIY Vocal Harmony Breakdown Video',
    aspectRatio: 'aspect-square',
    instagramUrl: INSTAGRAM_URL,
  },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'image' | 'video'>('all');
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);

  const filteredItems = MEDIA_GALLERY.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#E6007E]/10 border border-[#E6007E]/30 px-4 py-1.5 rounded-full text-xs font-mono font-bold text-[#E6007E] uppercase tracking-wider mb-1 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Visual & Video Portfolio</span>
          </div>

          <p className="font-script text-3xl sm:text-4xl text-[#E6007E]">
            Visual moments
          </p>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#111111] uppercase tracking-tight">
            GALLERY
          </h2>
          <p className="text-gray-600 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Official editorial photography and live studio recording video reels from {`ONEKEYZ`}. Watch videos directly on the cards below or view profile posts on Instagram.
          </p>
          <div className="w-20 h-1 bg-[#E6007E] mx-auto rounded-full mt-3" />
        </motion.div>

        {/* Media Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#FAF7F2] p-1.5 rounded-full border border-gray-200 shadow-sm inline-flex gap-1">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#E6007E] text-white shadow-md'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              All Media ({MEDIA_GALLERY.length})
            </button>
            <button
              onClick={() => setActiveFilter('image')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeFilter === 'image'
                  ? 'bg-[#E6007E] text-white shadow-md'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Photos (3)</span>
            </button>
            <button
              onClick={() => setActiveFilter('video')}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeFilter === 'video'
                  ? 'bg-[#E6007E] text-white shadow-md'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Studio Videos (3)</span>
            </button>
          </div>
        </div>

        {/* Responsive Masonry/Grid of Media Containers */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative"
              >
                <div
                  className={`relative w-full ${
                    item.aspectRatio || 'aspect-[4/5]'
                  } rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl border-2 border-gray-100 group-hover:border-[#E6007E] transition-all duration-200 ease-out transform-gpu bg-black flex flex-col justify-between p-4 text-white`}
                >
                  {item.type === 'image' ? (
                    <>
                      <img
                        src={item.url}
                        alt={item.title}
                        onClick={() => setSelectedImage(item)}
                        className="absolute inset-0 w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-200 ease-out transform-gpu"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 pointer-events-none" />

                      {/* Header Badge */}
                      <div className="relative z-10 flex items-center justify-between pointer-events-none">
                        <span className="bg-[#E6007E] text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                          <ImageIcon className="w-3 h-3" />
                          <span>Editorial Photo</span>
                        </span>

                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black/60 hover:bg-[#E6007E] text-white p-2 rounded-full backdrop-blur-md transition-colors shadow-md flex items-center gap-1 text-[10px] font-mono font-bold pointer-events-auto"
                          title="View Post on Instagram @one_keyz"
                        >
                          <Instagram className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Photo Bottom Captions */}
                      <div className="relative z-10 space-y-1 text-left cursor-pointer" onClick={() => setSelectedImage(item)}>
                        <h3 className="font-display font-black text-lg uppercase tracking-wide text-white leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-pink-300 font-mono flex items-center gap-1">
                          <Instagram className="w-3 h-3" />
                          <span>@one_keyz • {item.subtitle}</span>
                        </p>
                      </div>

                      {/* Photo Expand Overlay Button */}
                      <div
                        onClick={() => setSelectedImage(item)}
                        className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20 cursor-pointer"
                      >
                        <span className="bg-white text-black font-mono font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                          <ZoomIn className="w-4 h-4 text-[#E6007E]" />
                          <span>Expand Photo</span>
                        </span>
                      </div>
                    </>
                  ) : (
                    /* Video rendered with Native HTML5 Controls directly in Card - Watch Inline without popup! */
                    <div className="relative w-full h-full flex flex-col justify-between">
                      {/* Video Player Element */}
                      <video
                        src={item.url}
                        controls
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl z-0"
                      />

                      {/* Header Badge Strip Overlaid Top */}
                      <div className="relative z-10 flex items-center justify-between p-1 pointer-events-none">
                        <span className="bg-[#E6007E] text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                          <Film className="w-3 h-3" />
                          <span>Studio Video Reel</span>
                        </span>

                        <div className="flex items-center gap-2 pointer-events-auto">
                          <SoundwaveVisualizer color="bg-[#E6007E]" />
                          <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black/80 hover:bg-[#E6007E] text-white p-2 rounded-full backdrop-blur-md transition-colors shadow-md flex items-center gap-1 text-[10px] font-mono font-bold"
                            title="View Post on Instagram @one_keyz"
                          >
                            <Instagram className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>

                      {/* Video Title Label Bar Overlaid Bottom */}
                      <div className="relative z-10 bg-black/80 backdrop-blur-md p-2.5 rounded-xl border border-white/10 mt-auto text-left pointer-events-none">
                        <h3 className="font-display font-bold text-xs uppercase tracking-wide text-white truncate">
                          {item.title}
                        </h3>
                        <p className="text-[10px] text-pink-300 font-mono flex items-center gap-1">
                          <Instagram className="w-3 h-3" />
                          <span>@one_keyz • Watch Reel Above</span>
                        </p>
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram Profile Feed Banner */}
        <div className="mt-16 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#111111] hover:bg-[#E6007E] text-white font-mono font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-white/10"
          >
            <Instagram className="w-4 h-4 text-pink-400" />
            <span>View Full Feed & Profile Posts @one_keyz</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#111111] rounded-3xl overflow-hidden border-2 border-[#E6007E] shadow-2xl p-6 text-white text-center space-y-4"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/10 hover:bg-[#E6007E] text-white transition-colors"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-video sm:aspect-[16/10] rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-white/10">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-2 text-xs text-gray-300 border-t border-white/10 font-mono gap-3 text-left">
                <div>
                  <h4 className="font-display font-black text-base text-white uppercase">
                    {selectedImage.title}
                  </h4>
                  <p className="text-pink-300 text-xs">{selectedImage.subtitle}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#E6007E] hover:bg-[#C8006E] text-white px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>View Post on Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
