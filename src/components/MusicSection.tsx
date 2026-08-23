import { useState } from 'react';
import { ExternalLink, Play, Disc, Music as MusicIcon, Radio } from 'lucide-react';
import { motion } from 'framer-motion';
import { RELEASES, SPOTIFY_ARTIST_EMBED, SPOTIFY_ARTIST_URL, ARTIST_NAME } from '../data/discography';

export default function MusicSection() {
  const [activeTab, setActiveTab] = useState<'releases' | 'profile'>('releases');

  return (
    <section id="music" className="py-20 lg:py-32 bg-[#FAF7F2] text-[#111111] relative overflow-hidden">
      
      {/* Hot Pink Full-Bleed Accent Divider Banner */}
      <div className="w-full bg-[#E6007E] text-white py-4 px-4 shadow-xl mb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-display font-black text-sm sm:text-base tracking-widest uppercase">
          <span className="flex items-center gap-2.5">
            <Disc className="w-5 h-5 animate-spin-slow text-white" />
            DISCOGRAPHY & OFFICIAL RELEASES
          </span>
          <span className="hidden md:inline font-script font-normal text-2xl text-pink-100 normal-case">
            Listen on Spotify
          </span>
          <a
            href={SPOTIFY_ARTIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1DB954] hover:bg-[#1ed760] text-black text-xs font-mono font-bold px-5 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-md transform hover:scale-105"
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
          <div className="inline-flex items-center gap-2 bg-[#1DB954]/15 border border-[#1DB954]/40 px-4 py-1.5 rounded-full text-xs font-mono font-bold text-[#1DB954] uppercase tracking-wider mb-1 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse" />
            <span>Official Spotify Catalog</span>
          </div>

          <p className="font-script text-3xl sm:text-4xl text-[#E6007E]">
            Now streaming
          </p>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#111111] uppercase tracking-tight">
            THE MUSIC
          </h2>
          <p className="text-gray-800 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Official releases from {ARTIST_NAME}. Stream live below on Spotify.
          </p>
          <div className="w-20 h-1 bg-[#E6007E] mx-auto rounded-full mt-3" />
        </motion.div>

        {/* View Switcher: Single Releases vs Full Spotify Profile */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-full border-2 border-gray-200 shadow-md inline-flex gap-1">
            <button
              onClick={() => setActiveTab('releases')}
              className={`px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                activeTab === 'releases'
                  ? 'bg-[#E6007E] text-white shadow-md'
                  : 'text-gray-800 hover:text-black'
              }`}
            >
              Single Releases
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                activeTab === 'profile'
                  ? 'bg-[#1DB954] text-black shadow-md'
                  : 'text-gray-800 hover:text-black'
              }`}
            >
              Full Spotify Profile
            </button>
          </div>
        </div>

        {activeTab === 'releases' ? (
          /* 3 Release Cards Grid - Styled with High Contrast Pink & Spotify Green Accents */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RELEASES.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-[#111111] text-white rounded-3xl border-2 border-[#E6007E]/40 hover:border-[#1DB954] p-6 shadow-2xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 hover:shadow-pink-500/10"
              >
                {/* Hot Pink Card Header */}
                <div className="bg-gradient-to-r from-[#E6007E] to-[#C8006E] text-white p-5 -mx-6 -mt-6 mb-6 rounded-t-3xl flex items-center justify-between shadow-lg">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-pink-100 flex items-center gap-1.5">
                      <Radio className="w-3 h-3 text-[#1DB954]" />
                      {release.type} • {release.year}
                    </span>
                    <h3 className="text-2xl font-display font-black uppercase tracking-tight text-white">
                      {release.title}
                    </h3>
                  </div>
                  <a
                    href={release.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-black transition-transform transform hover:scale-110 shadow-md"
                    title={`Stream "${release.title}" on Spotify`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Spotify Embed Player Container with Glowing Accent Border */}
                <div className="my-2 rounded-2xl overflow-hidden bg-[#181818] p-1 shadow-inner border border-[#1DB954]/40 group-hover:border-[#1DB954] transition-colors">
                  <iframe
                    src={release.embedUrl}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={`Spotify Player — ${release.title}`}
                    className="w-full rounded-xl"
                  />
                </div>

                {/* Release Microcopy */}
                <p className="text-xs text-gray-300 font-sans leading-relaxed pt-3 pb-4">
                  {release.description}
                </p>

                {/* Card Footer Link */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between mt-auto">
                  <span className="font-script text-xl text-[#E6007E]">
                    ONEKEYZ
                  </span>
                  <a
                    href={release.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1DB954] hover:text-[#1ed760] transition-colors bg-[#1DB954]/10 hover:bg-[#1DB954]/20 px-3.5 py-1.5 rounded-full border border-[#1DB954]/30"
                  >
                    <span>Play Track</span>
                    <Play className="w-3.5 h-3.5 fill-current text-[#1DB954]" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Full Artist Profile Embed */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto bg-[#111111] text-white p-6 sm:p-8 rounded-3xl border-2 border-[#1DB954] shadow-2xl space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1DB954] text-black flex items-center justify-center font-display font-bold text-sm shadow-md">
                  1K
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-white uppercase">
                    {ARTIST_NAME} Spotify Profile
                  </h3>
                  <p className="text-xs text-[#1DB954] font-mono">
                    Official Artist Page & Full Discography
                  </p>
                </div>
              </div>
              <a
                href={SPOTIFY_ARTIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1DB954] text-black hover:bg-[#1ed760] text-xs font-mono font-bold uppercase px-5 py-2.5 rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-md transform hover:scale-105"
              >
                <span>Follow Spotify</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-inner border border-[#1DB954]/40 bg-[#181818] p-1">
              <iframe
                src={SPOTIFY_ARTIST_EMBED}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="ONEKEYZ Artist Profile Spotify Embed"
                className="w-full rounded-xl"
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
            className="inline-flex items-center gap-3 bg-[#1DB954] hover:bg-[#1ed760] text-black font-mono font-bold text-xs uppercase tracking-widest px-9 py-4 rounded-full shadow-2xl shadow-[#1DB954]/25 transition-all duration-300 transform hover:-translate-y-1 border border-green-300/40"
          >
            <MusicIcon className="w-4 h-4 fill-current text-black" />
            <span>Stream ONEKEYZ Live on Spotify</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
