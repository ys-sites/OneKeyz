import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { ARTIST_NAME } from '../data/discography';

export default function AboutSection() {
  const bioText = `Soulful vocals, raw emotion, and atmospheric sonics from Montreal-based independent recording artist ${ARTIST_NAME}.\n\n[Full 2–3 paragraph artist bio pending from client prior to launch]`;

  return (
    <section id="about" className="py-20 lg:py-32 bg-[#FAF7F2] text-[#111111] relative overflow-hidden border-b border-gray-200 scroll-mt-24">
      
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
          className="space-y-2 mb-16 text-center max-w-2xl mx-auto"
        >
          <p className="font-script text-3xl sm:text-4xl text-[#E6007E]">
            Her story
          </p>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#111111] uppercase tracking-tight">
            ABOUT {ARTIST_NAME}
          </h2>
          <div className="w-24 h-1 bg-[#E6007E] rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          
          {/* Bio Copy Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            
            <div className="bg-white border-2 border-[#111111] p-6 sm:p-12 rounded-3xl shadow-xl relative">
              
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
              <div className="mt-8 p-4 bg-pink-50 border border-[#E6007E]/30 rounded-2xl flex items-start gap-3 text-xs text-[#111111]">
                <Sparkles className="w-4 h-4 text-[#E6007E] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-[#E6007E] uppercase font-mono">Pre-Launch Placeholder:</strong> Official 2–3 paragraph artist bio to replace this text prior to launch.
                </p>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
