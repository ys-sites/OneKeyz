import { useState } from 'react';
import { Play, X, ZoomIn, Film, Image as ImageIcon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SoundwaveVisualizer } from './SoundwaveVisualizer';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  poster?: string;
  title: string;
  subtitle: string;
  aspectRatio?: string;
}

const MEDIA_GALLERY: MediaItem[] = [
  {
    id: 'm1',
    type: 'image',
    url: '/image copy.png',
    title: 'Studio Vocal Session',
    subtitle: 'Bedazzled Mic Vocal Recording • 2025',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 'm2',
    type: 'video',
    url: '/“If you’re ashamed of me then we can’t be ✌🏾”__🆕 music ‼️ 🎵Link in bio 🔥🚀___#real #homestud.mp4',
    poster: '/image copy.png',
    title: 'REAL — Home Studio Session',
    subtitle: 'Live Single Recording Video Reel',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 'm3',
    type: 'image',
    url: '/Thank you for sharing your talent 🔥 @chrisbrownofficial.jpg',
    title: 'Concert & Stage Spotlight',
    subtitle: 'Chris Brown Concert Event Spotlight',
    aspectRatio: 'aspect-square',
  },
  {
    id: 'm4',
    type: 'video',
    url: '/Reminiscing about this semi acapella version recorded at @zeffirstudios with @kzbrowznbrushes __.mp4',
    poster: '/image.png',
    title: 'Semi-Acapella @ Zeffir Studios',
    subtitle: 'Live Vocal Take with KZ Browznbrushes',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 'm5',
    type: 'image',
    url: '/The past is in your head, the future is in your hands.✨__#inspirationalquotes #elevation #levelu.jpg',
    title: 'Fashion & Editorial Shoot',
    subtitle: 'Official Press & Editorial Photography',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 'm6',
    type: 'video',
    url: '/Do you know the difference  🤔____#vocals #vocalharmony #adlibs #adlib #music #diymusician #rnbs.mp4',
    poster: '/image copy.png',
    title: 'Vocal Harmony & Ad-Libs Reel',
    subtitle: 'DIY Vocal Harmony Breakdown Video',
    aspectRatio: 'aspect-square',
  },
  {
    id: 'm7',
    type: 'image',
    url: '/image.png',
    title: 'Editorial Portrait Look',
    subtitle: 'Official Studio Portrait Look',
    aspectRatio: 'aspect-[4/5]',
  },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'image' | 'video'>('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

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
          <p className="text-gray-600 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Official editorial photography, studio recording sessions, and live vocal video reels from ONEKEYZ.
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
              <span>Photos (4)</span>
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div
                  onClick={() => setSelectedMedia(item)}
                  className={`relative w-full ${
                    item.aspectRatio || 'aspect-[4/5]'
                  } rounded-3xl overflow-hidden cursor-pointer shadow-lg group-hover:shadow-2xl border-2 border-gray-100 group-hover:border-[#E6007E] transition-all duration-300 bg-zinc-900 flex flex-col justify-between p-5 text-white`}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-black">
                      <video
                        src={item.url}
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  )}

                  {/* Gradient Overlay for Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 pointer-events-none" />

                  {/* Top Badge: Type Indicator */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="bg-[#E6007E] text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                      {item.type === 'video' ? (
                        <>
                          <Film className="w-3 h-3" />
                          <span>Video Reel</span>
                        </>
                      ) : (
                        <>
                          <ImageIcon className="w-3 h-3" />
                          <span>Editorial Photo</span>
                        </>
                      )}
                    </span>

                    {item.type === 'video' && <SoundwaveVisualizer color="bg-[#E6007E]" />}
                  </div>

                  {/* Video Center Play Button Overlay */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#E6007E]/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-xs transition-transform transform group-hover:scale-110 z-20">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                  )}

                  {/* Bottom Captions */}
                  <div className="relative z-10 space-y-1 text-left">
                    <h3 className="font-display font-black text-lg uppercase tracking-wide text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-pink-300 font-mono">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Overlaid Hover Expand Button */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-30 pointer-events-none">
                    <span className="bg-white text-black font-mono font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                      {item.type === 'video' ? <Play className="w-4 h-4 text-[#E6007E] fill-current" /> : <ZoomIn className="w-4 h-4 text-[#E6007E]" />}
                      <span>{item.type === 'video' ? 'Play Video' : 'Expand Photo'}</span>
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox / Video Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <div
            onClick={() => setSelectedMedia(null)}
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
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/10 hover:bg-[#E6007E] text-white transition-colors"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-video sm:aspect-[16/10] rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-white/10">
                {selectedMedia.type === 'video' ? (
                  <video
                    src={selectedMedia.url}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-2 text-xs text-gray-300 border-t border-white/10 font-mono gap-2 text-left">
                <div>
                  <h4 className="font-display font-black text-base text-white uppercase">
                    {selectedMedia.title}
                  </h4>
                  <p className="text-pink-300 text-xs">{selectedMedia.subtitle}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="bg-[#E6007E] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                    ONEKEYZ Official
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
