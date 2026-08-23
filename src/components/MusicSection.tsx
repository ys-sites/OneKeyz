import { useState } from 'react';
import { ExternalLink, Play, Disc, Radio } from 'lucide-react';
import { motion } from 'framer-motion';
import { RELEASES, SPOTIFY_ARTIST_EMBED, SPOTIFY_ARTIST_URL, ARTIST_NAME } from '../data/discography';
import { SpotifyLogo } from './icons/SpotifyLogo';
import { SoundwaveVisualizer } from './SoundwaveVisualizer';

export default function MusicSection() {
  const [activeTab, setActiveTab] = useState<'releases' | 'profile'>('releases');

  // Custom rich color accents for each release matching Poison's crimson vibe
  const releaseThemes: Record<string, {
    border: string;
    glow: string;
    bgTint: string;
    badgeBg: string;
    badgeText: string;
  }> = {
    real: {
      border: 'border-[#E6007E]',
      glow: 'shadow-pink-600/30 hover:shadow-pink-500/50',
      bgTint: 'bg-gradient-to-b from-[#6E003B]/60 via-[#18181b] to-[#111111]',
      badgeBg: 'bg-gradient-to-r from-[#E6007E] to-[#C8006E]',
      badgeText: 'text-white',
    },
    come: {
      border: 'border-[#D8006C]',
      glow: 'shadow-pink-700/30 hover:shadow-pink-600/50',
      bgTint: 'bg-gradient-to-b from-[#7D003F]/60 via-[#18181b] to-[#111111]',
      badgeBg: 'bg-gradient-to-r from-[#D8006C] to-[#A0004F]',
      badgeText: 'text-white',
    },
    poison: {
      border: 'border-[#B50E26]',
      glow: 'shadow-red-900/40 hover:shadow-red-600/50',
      bgTint: 'bg-gradient-to-b from-[#7A0717]/70 via-[#18181b] to-[#111111]',
      badgeBg: 'bg-gradient-to-r from-[#900C1E] to-[#6E0715]',
      badgeText: 'text-white',
    },
  };

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
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href={SPOTIFY_ARTIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#E6007E] hover:bg-pink-50 text-xs font-mono font-bold px-5 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-md"
          >
            <SpotifyLogo className="w-3.5 h-3.5" />
            <span>Open Spotify</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
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
          {/* Badge with Flashing Green Live Dot */}
          <div className="inline-flex items-center gap-2.5 bg-[#E6007E]/10 border border-[#E6007E]/30 px-4 py-1.5 rounded-full text-xs font-mono font-bold text-[#E6007E] uppercase tracking-wider mb-1 shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1DB954]" />
            </span>
            <span>Official Spotify Catalog</span>
            <SoundwaveVisualizer color="bg-[#E6007E]" />
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
                  ? 'bg-[#111111] text-white shadow-md'
                  : 'text-gray-800 hover:text-black'
              }`}
            >
              Full Spotify Profile
            </button>
          </div>
        </div>

        {activeTab === 'releases' ? (
          /* 3 Release Cards Grid - Styled with Crimson & Hot Pink Theme Shades and Framer Motion 3D Hover */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RELEASES.map((release, index) => {
              const theme = releaseThemes[release.id] || releaseThemes.real;
              return (
                <motion.div
                  key={release.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className={`group bg-[#111111] text-white rounded-3xl border-2 ${theme.border} p-6 shadow-2xl ${theme.glow} transition-all duration-200 ease-out transform-gpu relative flex flex-col justify-between overflow-hidden`}
                >
                  {/* Card Header Bar */}
                  <div className={`${theme.badgeBg} ${theme.badgeText} p-5 -mx-6 -mt-6 mb-6 rounded-t-3xl flex items-center justify-between shadow-lg`}>
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/90 flex items-center gap-1.5">
                        <Radio className="w-3 h-3 text-pink-200" />
                        {release.type} • {release.year}
                      </span>
                      <h3 className="text-2xl font-display font-black uppercase tracking-tight text-white flex items-center gap-2">
                        <span>{release.title}</span>
                        <SoundwaveVisualizer color="bg-white" />
                      </h3>
                    </div>
                    <a
                      href={release.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white/20 hover:bg-white hover:text-[#E6007E] text-white transition-all transform hover:scale-110 shadow-md"
                      title={`Stream "${release.title}" on Spotify`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Spotify Embed Player Container with Rich Crimson/Pink Tinted Background */}
                  <div className={`my-2 rounded-2xl overflow-hidden ${theme.bgTint} p-2 shadow-inner border border-white/15 group-hover:border-white/40 transition-colors`}>
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
                    <motion.a
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      href={release.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#E6007E] hover:text-white transition-colors bg-[#E6007E]/10 hover:bg-[#E6007E] px-3.5 py-1.5 rounded-full border border-[#E6007E]/40"
                    >
                      <span>Play Track</span>
                      <Play className="w-3.5 h-3.5 fill-current text-[#E6007E] group-hover:text-white" />
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* Full Artist Profile Embed */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto bg-[#111111] text-white p-6 sm:p-8 rounded-3xl border-2 border-[#E6007E] shadow-2xl space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E6007E] text-white flex items-center justify-center font-display font-bold text-sm shadow-md">
                  1K
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-white uppercase flex items-center gap-2">
                    <span>{ARTIST_NAME} Spotify Profile</span>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1DB954]" />
                    </span>
                  </h3>
                  <p className="text-xs text-pink-300 font-mono">
                    Official Artist Page & Full Discography
                  </p>
                </div>
              </div>
              <motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                href={SPOTIFY_ARTIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E6007E] text-white hover:bg-[#C8006E] text-xs font-mono font-bold uppercase px-5 py-2.5 rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-md"
              >
                <SpotifyLogo className="w-3.5 h-3.5" />
                <span>Follow Spotify</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-inner border border-[#E6007E]/40 bg-gradient-to-b from-[#6E003B]/40 to-[#111111] p-2">
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
          <motion.a
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href={SPOTIFY_ARTIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#E6007E] hover:bg-[#C8006E] text-white font-mono font-bold text-xs uppercase tracking-widest px-9 py-4 rounded-full shadow-2xl shadow-pink-500/30 transition-all duration-300 border border-pink-400/30"
          >
            <SpotifyLogo className="w-4 h-4 text-white" />
            <span>Stream ONEKEYZ Live on Spotify</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
