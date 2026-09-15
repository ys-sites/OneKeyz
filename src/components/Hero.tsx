import { Instagram, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { ARTIST_NAME, INSTAGRAM_URL, SPOTIFY_ARTIST_URL } from '../data/discography';
import { SpotifyLogo } from './icons/SpotifyLogo';
import { SoundwaveVisualizer } from './SoundwaveVisualizer';
import MoltenMetal from './MoltenMetal';

export default function Hero() {
  const heroPhoto = '/image copy.png';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <div className="relative pt-20 sm:pt-24">
      {/* Editorial Split Hero Stage */}
      <section className="relative bg-[#111111] text-white pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b-4 border-[#E6007E]">
        
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
            
            {/* Left Column: Wordmark + Follow CTA + Acoustic Meta Ribbon */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-6 text-left"
            >
              
              {/* Category Eyebrow Pill */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md text-[11px] font-mono tracking-widest text-pink-300 uppercase shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6007E] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6007E]" />
                  </span>
                  <span>Official Artist Portfolio</span>
                </div>
              </motion.div>

              {/* Artist Name Wordmark Headline & Genre Accent Line */}
              <motion.div variants={itemVariants} className="space-y-2">
                <h1 className="text-5xl sm:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display font-black tracking-normal uppercase leading-[0.9] drop-shadow-2xl">
                  <span className="text-white">ONE</span>
                  <span className="text-[#E6007E]">KEYZ</span>
                </h1>
                <p className="font-script text-2xl sm:text-3xl lg:text-4xl text-pink-200/90 font-normal pt-1">
                  Contemporary R&B • Soul
                </p>
              </motion.div>

              {/* Action Buttons: Listen on Spotify + Follow on Instagram */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-1">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href={SPOTIFY_ARTIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#E6007E] hover:bg-[#C8006E] text-white border-2 border-[#E6007E] font-mono font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-2xl shadow-pink-500/30 transition-all group"
                >
                  <SpotifyLogo className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  <span>Listen on Spotify</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-black/40 backdrop-blur-md hover:bg-white/10 text-white border-2 border-white/70 hover:border-[#E6007E] font-mono font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-xl"
                >
                  <Instagram className="w-4 h-4 text-pink-300" />
                  <span>Follow @one_keyz</span>
                </motion.a>
              </motion.div>

              {/* Drake/OVO Studio Session Acoustic Ribbon */}
              <motion.div
                variants={itemVariants}
                className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] font-mono text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E6007E]" />
                  <span className="text-gray-500 uppercase">Session:</span>
                  <span className="text-white font-medium">LIVE MASTER</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  <span className="text-gray-500 uppercase">Catalog:</span>
                  <span className="text-white font-medium">3 RELEASES</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954]" />
                  <span className="text-gray-500 uppercase">Latest:</span>
                  <a href="#music" className="text-[#E6007E] hover:text-white transition-colors font-bold underline decoration-[#E6007E]/50">
                    "REAL" (2025)
                  </a>
                </div>
              </motion.div>

            </motion.div>

            {/* Right Column: Editorial Artist Showcase Container */}
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
                className="relative p-3 bg-gradient-to-tr from-[#E6007E] via-pink-600/40 to-black rounded-3xl shadow-2xl group"
              >
                {/* Corner Crosshair Accents (+) — Haute Horlogerie / OVO Streetwear Signature */}
                <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-pink-400/80 pointer-events-none select-none">+</span>
                <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-pink-400/80 pointer-events-none select-none">+</span>
                <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-pink-400/80 pointer-events-none select-none">+</span>
                <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-pink-400/80 pointer-events-none select-none">+</span>

                {/* Photo Showcase Container */}
                <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 flex flex-col items-center justify-center text-center text-white group shadow-inner border border-white/10">
                  
                  {heroPhoto ? (
                    <>
                      <img
                        src={heroPhoto}
                        alt="ONEKEYZ Editorial Artist Portrait"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu"
                        referrerPolicy="no-referrer"
                      />

                      {/* Subtle Dark Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30 pointer-events-none" />

                      {/* Top Overlay Badge: Live Studio Session Status */}
                      <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none z-10">
                        <div className="bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 flex items-center gap-2">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6007E] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6007E]" />
                          </span>
                          <span className="font-mono text-[10px] font-bold tracking-widest text-pink-200 uppercase">
                            STUDIO SESSION REEL
                          </span>
                        </div>

                        <span className="bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-mono text-gray-300 uppercase">
                          ONEKEYZ
                        </span>
                      </div>

                      {/* Bottom Overlay Strip: Live Audio EQ & Master Track Tag */}
                      <div className="absolute bottom-4 inset-x-4 p-3.5 bg-black/80 backdrop-blur-md rounded-xl border border-white/15 z-10 flex items-center justify-between shadow-2xl">
                        <div className="space-y-0.5 text-left">
                          <p className="font-display font-bold text-xs uppercase tracking-wider text-white">
                            VOCAL SESSION TAPE
                          </p>
                          <p className="font-mono text-[10px] text-pink-300 flex items-center gap-1.5">
                            <span>ORIGINAL R&B / SOUL ARRANGEMENT</span>
                          </p>
                        </div>
                        <SoundwaveVisualizer color="bg-[#E6007E]" />
                      </div>
                    </>
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

                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}

