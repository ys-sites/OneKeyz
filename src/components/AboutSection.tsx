import { useState } from 'react';
import { Sparkles, Image as ImageIcon, Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import { ARTIST_NAME } from '../data/discography';

export default function AboutSection() {
  const photo1 = '/image copy.png';
  const photo2 = '/editorial-fashion-shoot.jpg';

  const bioText = `[Artist bio goes here — 2–3 paragraphs]`;

  return (
    <section id="about" className="py-20 lg:py-32 bg-[#FAF7F2] text-[#111111] relative overflow-hidden border-b border-gray-200">
      
      {/* Background Watermark */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 origin-right pointer-events-none select-none opacity-[0.03] hidden xl:block">
        <span className="font-display font-black text-9xl tracking-widest text-[#111111] uppercase whitespace-nowrap">
          {ARTIST_NAME}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Script Accent Line + Bold Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-16 text-left"
        >
          <p className="font-script text-3xl sm:text-4xl text-[#E6007E]">
            Her story
          </p>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#111111] uppercase tracking-tight">
            ABOUT {ARTIST_NAME}
          </h2>
          <div className="w-24 h-1 bg-[#E6007E] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio Copy Block (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            
            <div className="bg-white border-2 border-[#111111] p-6 sm:p-10 rounded-3xl shadow-xl relative">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                <span className="text-xs font-mono font-bold text-[#E6007E] uppercase tracking-wider flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1DB954]" />
                  </span>
                  Official Bio
                </span>
              </div>

              {/* Bio Content */}
              <div className="font-sans text-gray-800 space-y-4 text-base sm:text-lg leading-relaxed">
                {bioText.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-800 font-medium">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Pre-launch Note */}
              <div className="mt-6 p-4 bg-pink-50 border border-[#E6007E]/30 rounded-2xl flex items-start gap-3 text-xs text-[#111111]">
                <Sparkles className="w-4 h-4 text-[#E6007E] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-[#E6007E] uppercase font-mono">Pre-Launch Placeholder:</strong> Official 2–3 paragraph artist bio to replace this text prior to launch.
                </p>
              </div>

            </div>

            {/* Badges / Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="bg-[#111111] text-white p-4 rounded-2xl border-2 border-[#E6007E] text-center space-y-1 shadow-md">
                <p className="font-display font-black text-xl text-[#E6007E]">100%</p>
                <p className="text-[10px] font-mono text-pink-200 uppercase tracking-wider">Independent</p>
              </div>
              <div className="bg-[#111111] text-white p-4 rounded-2xl border-2 border-[#E6007E] text-center space-y-1 shadow-md">
                <p className="font-display font-black text-xl text-[#E6007E]">VOCALS</p>
                <p className="text-[10px] font-mono text-pink-200 uppercase tracking-wider">R&B / Soul</p>
              </div>
              <div className="bg-[#111111] text-white p-4 rounded-2xl border-2 border-[#E6007E] text-center space-y-1 shadow-md">
                <p className="font-display font-black text-xl text-[#E6007E]">SPOTIFY</p>
                <p className="text-[10px] font-mono text-pink-200 uppercase tracking-wider">Verified Artist</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Editorial Photo Frame Layout (Soft-rounded 3xl corners) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 items-center"
          >
            
            {/* Photo Card 1 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#E6007E] rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity blur-xs" />
              <div className="relative aspect-[3/4] bg-[#111111] rounded-3xl overflow-hidden border-2 border-white shadow-xl flex flex-col justify-between p-4 text-white">
                {photo1 ? (
                  <img src={photo1} alt="ONEKEYZ Editorial Portrait 1" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="m-auto text-center space-y-2">
                    <ImageIcon className="w-8 h-8 text-pink-300 mx-auto" />
                    <p className="font-display font-bold text-sm uppercase">PORTRAIT 01</p>
                  </div>
                )}
                
                <div className="relative z-10 mt-auto bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 inline-flex items-center self-start">
                  <span className="text-[10px] font-mono font-bold uppercase text-white tracking-wider">ONEKEYZ</span>
                </div>
              </div>
            </div>

            {/* Photo Card 2 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#E6007E] rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity blur-xs" />
              <div className="relative aspect-[3/4] bg-[#111111] rounded-3xl overflow-hidden border-2 border-white shadow-xl flex flex-col justify-between p-4 text-white">
                {photo2 ? (
                  <img src={photo2} alt="ONEKEYZ Editorial Portrait 2" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="m-auto text-center space-y-2">
                    <Mic className="w-8 h-8 text-[#E6007E] mx-auto" />
                    <p className="font-display font-bold text-sm uppercase">STUDIO & STAGE</p>
                  </div>
                )}

                <div className="relative z-10 mt-auto bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 inline-flex items-center self-start">
                  <span className="text-[10px] font-mono font-bold uppercase text-white tracking-wider">STUDIO & EDITORIAL</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
