import { useState } from 'react';
import { Play, Instagram, Image as ImageIcon, Disc, X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { ARTIST_NAME, INSTAGRAM_URL, SPOTIFY_ARTIST_URL } from '../data/discography';
import { SpotifyLogo } from './icons/SpotifyLogo';
import { SoundwaveVisualizer } from './SoundwaveVisualizer';
import MoltenMetal from './MoltenMetal';

export default function Hero() {
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const heroPhoto = '/image copy.png';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <div className="relative pt-20 sm:pt-24">
      {/* Editorial Split Hero Stage */}
      <section className="relative bg-[#111111] text-white pt-12 pb-16 lg:pt-20 lg:pb-28 overflow-hidden border-b-4 border-[#E6007E]">
        
        {/* React Bits High-Performance MoltenMetal Liquid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <MoltenMetal
            color1="#6E003B"
            color2="#E6007E"
            color3="#FFD1EB"
            speed={0.25}
            scale={3.5}
            detail={3}
            glow={1.6}
            coreSize={0.1}
            swirl={1}
            fold={-0.2}
            blackPoint={0.05}
            brightness={1.3}
            colorMode="molten"
            grain={true}
            grainIntensity={0.04}
            mouseInteraction={true}
            mouseStrength={0.25}
            opacity={0.65}
          />
        </div>

        {/* Ambient Glow Effects Overlay */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-[#E6007E]/30 rounded-full blur-3xl pointer-events-none z-0"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-10 right-0 w-96 h-96 bg-[#E6007E]/25 rounded-full blur-3xl pointer-events-none z-0"
        />
        <div className="absolute inset-0 bg-[radial-gradient(#E6007E_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.06] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Script Accent + Wordmark + Tagline + CTAs */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-6 text-left"
            >
              
              {/* Italic Script Accent Line */}
              <motion.div variants={itemVariants} className="space-y-2">
                <span className="font-script text-3xl sm:text-4xl text-pink-300 block">
                  Montreal-Based Recording Artist
                </span>
                <div className="inline-flex items-center gap-2 bg-[#E6007E] text-white text-[11px] font-mono font-bold tracking-widest px-3.5 py-1.5 rounded-full uppercase shadow-md">
                  <Sparkles className="w-3 h-3 text-pink-200" />
                  <span>Montreal, QC • Vocalist • Songwriter</span>
                  <div className="flex items-center gap-1 pl-1">
                    <span className="w-2 h-2 rounded-full bg-[#1DB954] animate-ping" />
                    <span className="w-2 h-2 rounded-full bg-[#1DB954]" />
                  </div>
                </div>
              </motion.div>

              {/* Artist Name Wordmark Headline with Shimmering Gradient Animation */}
              <motion.div variants={itemVariants} className="space-y-3">
                <h1 className="text-4xl sm:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display font-black tracking-normal uppercase leading-[0.95] drop-shadow-md bg-gradient-to-r from-white via-pink-100 to-[#E6007E] bg-clip-text text-transparent">
                  {ARTIST_NAME}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl font-sans text-gray-200 max-w-xl leading-relaxed pt-1">
                  Soulful vocals, raw emotion, and atmospheric sonics from Montreal-based independent recording artist <strong className="text-white font-bold">{ARTIST_NAME}</strong>.
                </p>
              </motion.div>

              {/* Primary CTA "Stream Now" (Spotify) + Secondary CTA "Follow" */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
                <motion.a
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={SPOTIFY_ARTIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#E6007E] hover:bg-[#C8006E] text-white font-mono font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-2xl shadow-pink-500/30 border border-pink-400/30 transition-all group"
                >
                  <SpotifyLogo className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
                  <span>Stream Now</span>
                  <SoundwaveVisualizer color="bg-white" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-black/40 backdrop-blur-md hover:bg-white/10 text-white border-2 border-white/80 font-mono font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Follow @one_keyz</span>
                </motion.a>
              </motion.div>

            </motion.div>

            {/* Right Column: Editorial Photo Container (Soft-rounded 3xl corners) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
              className="lg:col-span-5 relative"
            >
              
              {/* Outer Glow Wrapper with Hover Motion */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="relative p-3 bg-gradient-to-tr from-[#E6007E] via-pink-600/40 to-black rounded-3xl shadow-2xl"
              >
                
                {/* Photo Container with soft rounded corners */}
                <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 flex flex-col items-center justify-center text-center text-white group shadow-inner border border-white/10">
                  
                  {heroPhoto ? (
                    <img
                      src={heroPhoto}
                      alt="ONEKEYZ Editorial Artist Portrait"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-105 transform-gpu"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="relative z-10 space-y-3 p-6">
                      <ImageIcon className="w-12 h-12 mx-auto text-pink-300" />
                      <div className="space-y-1">
                        <span className="font-script text-2xl text-pink-200 block">
                          Featured Artist
                        </span>
                        <h3 className="font-display font-black text-xl uppercase tracking-wider text-white">
                          {ARTIST_NAME}
                        </h3>
                      </div>
                    </div>
                  )}

                  {/* Play Overlay Button for Spotify Track */}
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlayingPreview(!isPlayingPreview)}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 hover:bg-[#E6007E] text-black hover:text-white flex items-center justify-center shadow-2xl backdrop-blur-md transition-colors z-20 group/btn"
                    title="Play Latest Single 'REAL' Preview"
                  >
                    <Play className="w-7 h-7 fill-current ml-1 text-[#E6007E] group-hover/btn:text-white transition-colors" />
                  </motion.button>

                  {/* Overlaid Bottom Title Strip with FLASHING GREEN LIVE DOT */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/85 to-transparent p-5 flex items-center justify-between text-left z-20">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-display font-bold text-sm tracking-wide text-white">ONEKEYZ — "REAL"</p>
                        {/* Flashing Green Live Dot */}
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1DB954]" />
                        </span>
                      </div>
                      <p className="text-[11px] text-pink-300 font-mono flex items-center gap-2 mt-0.5">
                        <span>Latest Official Single • 2025</span>
                        <SoundwaveVisualizer color="bg-[#1DB954]" />
                      </p>
                    </div>
                  </div>

                </div>

              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Audio Player Modal Overlay */}
      {isPlayingPreview && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#18181b] text-white border-2 border-[#E6007E] rounded-3xl max-w-lg w-full p-6 shadow-2xl relative space-y-4"
          >
            <button
              onClick={() => setIsPlayingPreview(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-[#E6007E] text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <Disc className="w-6 h-6 text-[#E6007E] animate-spin-slow" />
              <div>
                <h4 className="font-display font-black text-lg uppercase flex items-center gap-2">
                  <span>ONEKEYZ — "REAL"</span>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1DB954]" />
                  </span>
                </h4>
                <p className="text-xs text-pink-300 font-mono">2025 Release • Streaming on Spotify</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://open.spotify.com/embed/album/78lu4WSbmRbb7BWck0a5OK"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="ONEKEYZ Real Spotify Preview"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
