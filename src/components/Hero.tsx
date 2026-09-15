import { Instagram, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { ARTIST_NAME, INSTAGRAM_URL } from '../data/discography';
import MoltenMetal from './MoltenMetal';

export default function Hero() {
  const heroPhoto = null;

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
            
            {/* Left Column: Wordmark + Follow CTA */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-6 text-left"
            >
              
              {/* Artist Name Wordmark Headline with Shimmering Gradient Animation */}
              <motion.div variants={itemVariants} className="space-y-3">
                <h1 className="text-4xl sm:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display font-black tracking-normal uppercase leading-[0.95] drop-shadow-md">
                  <span className="text-white">ONE</span>
                  <span className="text-[#E6007E]">KEYZ</span>
                </h1>
              </motion.div>

              {/* CTA: Follow on Instagram */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
                <motion.a
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-black/40 backdrop-blur-md hover:bg-[#E6007E] text-white border-2 border-white/80 hover:border-[#E6007E] font-mono font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-xl"
                >
                  <Instagram className="w-4 h-4 text-pink-300" />
                  <span>Follow @one_keyz</span>
                </motion.a>
              </motion.div>

            </motion.div>

            {/* Right Column: Editorial Artist Showcase Container (Soft-rounded 3xl corners) */}
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
                
                {/* Photo Showcase Container */}
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

                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
