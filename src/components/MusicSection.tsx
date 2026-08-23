import { useState } from 'react';
import { ExternalLink, Play, Disc, Music as MusicIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { RELEASES, SPOTIFY_ARTIST_EMBED, SPOTIFY_ARTIST_URL, ARTIST_NAME } from '../data/discography';

export default function MusicSection() {
  const [activeTab, setActiveTab] = useState<'releases' | 'profile'>('releases');

  return (
    <section id="music" className="py-20 lg:py-32 bg-[#FAF7F2] text-[#111111] relative overflow-hidden">
      
      {/* Hot Pink Full-Bleed Accent Divider Banner */}
      <div className="w-full bg-[#E6007E] text-white py-4 px-4 shadow-lg mb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-display font-black text-sm sm:text-base tracking-widest uppercase">
          <span className="flex items-center gap-2.5">
            <Disc className="w-5 h-5 animate-spin-slow" />
            DISCOGRAPHY & OFFICIAL RELEASES
          </span>
          <span className="hidden md:inline font-script font-normal text-2xl text-pink-100 normal-case">
            Listen on Spotify
          </span>
          <a
            href={SPOTIFY_ARTIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#E6007E] hover:bg-pink-50 text-xs font-mono font-bold px-4 py-1.5 rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span>Open Spotify</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-14"
        >
          <p className="font-script text-3xl sm:text-4xl text-[#E6007E]">
            Now streaming
          </p>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#111111] uppercase tracking-tight">
            THE MUSIC
          </h2>
          <p className="text-gray-700 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Official singles and discography from {ARTIST_NAME}. Stream directly via Spotify embedded players.
          </p>
          <div className="w-20 h-1 bg-[#E6007E] mx-auto rounded-full mt-3" />
        </motion.div>

        {/* View Switcher: 3 Release Cards vs Full Profile Embed */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-full border-2 border-gray-200 shadow-sm inline-flex gap-1">
            <button
              onClick={() => setActiveTab('releases')}
              className={`px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                activeTab === 'releases'
                  ? 'bg-[#E6007E] text-white shadow-md'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              Single Releases
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                activeTab === 'profile'
                  ? 'bg-[#E6007E] text-white shadow-md'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              Full Spotify Profile
            </button>
          </div>
        </div>

        {activeTab === 'releases' ? (
          /* 3 Release Cards Grid (Cards with soft-rounded 3xl corners & hot pink accent bars) */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RELEASES.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-white rounded-3xl border-2 border-gray-100 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                {/* Card Header Bar */}
                <div className="bg-[#E6007E] text-white p-5 -mx-6 -mt-6 mb-6 rounded-t-3xl flex items-center justify-between shadow-md">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-pink-200 block">
                      {release.type} • {release.year}
                    </span>
                    <h3 className="text-2xl font-display font-black uppercase tracking-tight">
                      {release.title}
                    </h3>
                  </div>
                  <a
                    href={release.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/20 hover:bg-white hover:text-[#E6007E] text-white transition-colors"
                    title={`Open "${release.title}" on Spotify`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Spotify Embed Player (Lazy Loaded) */}
                <div className="my-2 rounded-2xl overflow-hidden bg-black/5 shadow-inner border border-gray-100">
                  <iframe
                    src={release.embedUrl}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={`Spotify Player — ${release.title}`}
                    className="w-full rounded-2xl"
                  />
                </div>

                {/* Release Microcopy */}
                <p className="text-xs text-gray-600 font-sans leading-relaxed pt-3 pb-4">
                  {release.description}
                </p>

                {/* Card Footer Link */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <span className="font-script text-xl text-[#E6007E]">
                    ONEKEYZ
                  </span>
                  <a
                    href={release.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#E6007E] transition-colors"
                  >
                    <span>Play Track</span>
                    <Play className="w-3.5 h-3.5 fill-current text-[#E6007E]" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Full Artist Profile Embed (Lazy Loaded) */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border-2 border-gray-100 shadow-xl space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E6007E] text-white flex items-center justify-center font-display font-bold text-sm">
                  1K
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-[#111111] uppercase">
                    {ARTIST_NAME} Spotify Profile
                  </h3>
                  <p className="text-xs text-gray-500 font-sans">
                    Complete artist profile and discography
                  </p>
                </div>
              </div>
              <a
                href={SPOTIFY_ARTIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E6007E] text-white text-xs font-mono font-bold uppercase px-5 py-2.5 rounded-full hover:bg-[#C8006E] transition-colors flex items-center gap-1.5 shadow-md"
              >
                <span>Spotify Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-inner border border-gray-200">
              <iframe
                src={SPOTIFY_ARTIST_EMBED}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="ONEKEYZ Artist Profile Spotify Embed"
                className="w-full rounded-2xl"
              />
            </div>
          </motion.div>
        )}

        {/* Footer CTA Button Out to Spotify */}
        <div className="mt-16 text-center">
          <a
            href={SPOTIFY_ARTIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#111111] hover:bg-[#E6007E] text-white font-mono font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <MusicIcon className="w-4 h-4 text-pink-400" />
            <span>Stream ONEKEYZ on Spotify</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
