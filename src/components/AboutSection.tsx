import { motion } from 'framer-motion';
import { Sparkles, Disc3, Quote, ArrowRight, Instagram, Mic2, Compass, Radio } from 'lucide-react';
import { ARTIST_NAME, INSTAGRAM_URL } from '../data/discography';
import { SoundwaveVisualizer } from './SoundwaveVisualizer';

export default function AboutSection() {
  const coreBioIntro = `Soulful vocals, raw emotion, and atmospheric sonics from Montreal-based independent recording artist ${ARTIST_NAME}.`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section id="about" className="py-24 lg:py-36 bg-[#0E0E10] text-white relative overflow-hidden border-b border-white/10 scroll-mt-24">
      
      {/* Background Architectural Grid & Ambient Halos */}
      <div className="absolute inset-0 bg-[radial-gradient(#E6007E_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.04] pointer-events-none" />
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-[#E6007E]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 -right-36 w-96 h-96 bg-[#E6007E]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Massive Background Typographic Watermark (Drake OVO / Luxury Noir Aesthetic) */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 origin-right pointer-events-none select-none opacity-[0.018] hidden 2xl:block">
        <span className="font-display font-black text-[12rem] tracking-widest text-white uppercase whitespace-nowrap">
          MONTRÉAL
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#E6007E]/10 border border-[#E6007E]/30 px-4 py-1.5 rounded-full text-xs font-mono font-bold text-[#E6007E] uppercase tracking-wider mb-1 shadow-xs">
            <Mic2 className="w-3.5 h-3.5 text-[#E6007E]" />
            <span>Artist Biography • R&B / Soul</span>
          </div>

          <p className="font-script text-3xl sm:text-4xl text-[#E6007E]">
            The music & the voice
          </p>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-white uppercase tracking-tight">
            ABOUT <span className="text-[#E6007E]">ONEKEYZ</span>
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Singer, songwriter, and independent recording artist from Montréal, Canada.
          </p>
          <div className="w-20 h-1 bg-[#E6007E] mx-auto rounded-full mt-3" />
        </motion.div>

        {/* Asymmetrical Haute Couture Layout: Studio Portrait Card vs. Narrative Liner Notes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: High-Fashion Studio Portrait Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Framed Editorial Card with 1px fine-border trick and corner crosshairs */}
            <div className="relative p-3 bg-gradient-to-b from-white/10 via-white/5 to-black/80 rounded-3xl border border-white/15 shadow-2xl group">
              
              {/* Corner Crosshair Accents (+) — Haute Horlogerie / OVO Streetwear Signature */}
              <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-pink-400/80 pointer-events-none select-none">+</span>
              <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-pink-400/80 pointer-events-none select-none">+</span>
              <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-pink-400/80 pointer-events-none select-none">+</span>
              <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-pink-400/80 pointer-events-none select-none">+</span>

              {/* Photo Frame */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-black shadow-inner border border-white/10">
                <img
                  src="/editorial-fashion-shoot.jpg"
                  alt="ONEKEYZ Editorial Studio Portrait"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20 pointer-events-none" />

                {/* Top Overlay Badge: Live Studio Session Status */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none z-10">
                  <div className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6007E] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6007E]" />
                    </span>
                    <span className="font-mono text-[10px] font-bold tracking-widest text-pink-200 uppercase">
                      STUDIO LOG • 03:42 AM
                    </span>
                  </div>

                  <span className="bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-mono text-gray-300 uppercase">
                    514 QC
                  </span>
                </div>

                {/* Bottom Overlay Strip: Live Audio EQ & Master Track Tag */}
                <div className="absolute bottom-4 inset-x-4 p-3.5 bg-black/80 backdrop-blur-md rounded-xl border border-white/15 z-10 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="font-display font-bold text-xs uppercase tracking-wider text-white">
                      VOCAL SESSION TAPE
                    </p>
                    <p className="font-mono text-[10px] text-pink-300 flex items-center gap-1.5">
                      <span>24-BIT / 96KHZ ANALOG MASTER</span>
                    </p>
                  </div>
                  <SoundwaveVisualizer color="bg-[#E6007E]" />
                </div>
              </div>

            </div>

            {/* Musical Profile Spec Card */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <span className="font-mono text-[11px] font-bold text-pink-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Mic2 className="w-3.5 h-3.5 text-[#E6007E]" />
                  <span>Musical Profile</span>
                </span>
                <span className="font-mono text-[10px] text-gray-400 uppercase">
                  OVERVIEW
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <span className="text-gray-500 block text-[10px]">GENRE</span>
                  <span className="text-white font-bold">R&B / SOUL</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[10px]">VOCALS</span>
                  <span className="text-pink-300 font-bold">LEAD & HARMONIES</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[10px]">ORIGIN</span>
                  <span className="text-white font-bold">MONTRÉAL, QC</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[10px]">SONGWRITING</span>
                  <span className="text-[#E6007E] font-bold">100% ORIGINAL</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Editorial Narrative & Liner Notes (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            
            {/* Straightforward Musical Bio Copy */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg sm:text-2xl font-sans text-gray-100 font-medium leading-relaxed">
                {coreBioIntro}
              </p>
              
              <p className="text-sm sm:text-base font-sans text-gray-300 leading-relaxed">
                {ARTIST_NAME} creates contemporary R&B defined by smooth melodic vocal delivery, layered harmonies, and atmospheric production. Her sound blends soulful toplines with deep basslines, ambient synthesizers, and slow-tempo R&B grooves—capturing honest themes of love, vulnerability, and self-worth.
              </p>

              <p className="text-sm sm:text-base font-sans text-gray-300 leading-relaxed">
                With official releases including "Real" (2025), "Come" (2021), and "Poison" (2018), she writes and directs her own material as a fully independent artist. From writing the initial hook and vocal arrangements to the final master, her music focuses on pure vocal tone and real musicality.
              </p>
            </motion.div>

            {/* Song-Driven Signature Lyric & Direct Music Push Card */}
            <motion.div
              variants={itemVariants}
              className="relative p-6 sm:p-7 rounded-2xl bg-white/[0.04] border-l-4 border-[#E6007E] border-y border-r border-white/10 backdrop-blur-md shadow-xl space-y-3 group hover:border-[#E6007E]/60 transition-all"
            >
              <div className="flex items-center justify-between">
                <Quote className="w-8 h-8 text-[#E6007E]/50" />
                <span className="inline-flex items-center gap-1.5 bg-[#E6007E]/10 border border-[#E6007E]/30 text-pink-300 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  <Disc3 className="w-3 h-3 text-[#E6007E] animate-spin-slow" />
                  Featured Lyric • "REAL" (2025)
                </span>
              </div>
              <blockquote className="font-script italic text-xl sm:text-2xl text-white font-normal leading-snug">
                "Don’t give me the version you sell to the world. Strip it all back and give me something REAL."
              </blockquote>
              <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="text-pink-300 font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <span>— ONEKEYZ</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">Official Single "REAL"</span>
                </span>
                <a
                  href="#music"
                  className="text-pink-300 hover:text-white transition-colors underline decoration-[#E6007E] font-bold flex items-center gap-1"
                >
                  <span>Stream on Spotify</span>
                  <ArrowRight className="w-3 h-3 text-[#E6007E]" />
                </a>
              </div>
            </motion.div>

            {/* Three Musical Overview Tiles */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#E6007E]/50 transition-colors space-y-1">
                <span className="text-2xl font-display font-black text-white block">
                  R&B / SOUL
                </span>
                <span className="text-xs font-mono font-bold uppercase text-pink-300 tracking-wider block">
                  GENRE & STYLE
                </span>
                <p className="text-[11px] text-gray-400 font-sans leading-tight">
                  Atmospheric R&B melodies with rich vocal harmonies.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#E6007E]/50 transition-colors space-y-1">
                <span className="text-2xl font-display font-black text-white block">
                  3 SINGLES
                </span>
                <span className="text-xs font-mono font-bold uppercase text-pink-300 tracking-wider block">
                  DISCOGRAPHY
                </span>
                <p className="text-[11px] text-gray-400 font-sans leading-tight">
                  Official catalog: "Real", "Come", and "Poison".
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#E6007E]/50 transition-colors space-y-1">
                <span className="text-2xl font-display font-black text-white block">
                  100% INDIE
                </span>
                <span className="text-xs font-mono font-bold uppercase text-pink-300 tracking-wider block">
                  INDEPENDENT ARTIST
                </span>
                <p className="text-[11px] text-gray-400 font-sans leading-tight">
                  Original songwriting, vocal arrangements, and releases.
                </p>
              </div>
            </motion.div>

            {/* Navigation & Connect Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#music"
                className="inline-flex items-center gap-2.5 bg-[#E6007E] hover:bg-[#C8006E] text-white font-mono font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-xl shadow-pink-500/20 border border-pink-400/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Listen to Music</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-full border border-white/15 transition-all"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Follow on Instagram</span>
              </a>
            </motion.div>

            {/* Pre-launch Status Chip */}
            <motion.div variants={itemVariants} className="pt-2">
              <div className="p-3 rounded-xl bg-pink-950/30 border border-[#E6007E]/30 flex items-center gap-2.5 text-xs text-pink-200">
                <Sparkles className="w-4 h-4 text-[#E6007E] shrink-0" />
                <span className="font-mono text-[11px]">
                  <strong>Pre-Launch Dossier:</strong> Official extended artist biography in final review before public release.
                </span>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
