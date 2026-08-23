import { useState } from 'react';
import { Music, ExternalLink, Play, Disc, Sparkles } from 'lucide-react';
import { RELEASES, SPOTIFY_ARTIST_EMBED, SPOTIFY_ARTIST_URL, ARTIST_NAME } from '../data/discography';

export default function MusicSection() {
  const [activeTab, setActiveTab] = useState<'releases' | 'profile'>('releases');

  return (
    <section id="music" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Top Bold Hot Pink Full-Width Accent Divider Banner (as seen in template reference) */}
      <div className="w-full bg-[#E6007E] text-white py-4 px-4 shadow-md mb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-display font-extrabold text-sm sm:text-base tracking-widest uppercase">
          <span className="flex items-center gap-2">
            <Disc className="w-5 h-5 animate-spin-slow" />
            DISCOGRAPHY & OFFICIAL RELEASES
          </span>
          <span className="hidden md:inline text-pink-200 font-script font-normal text-2xl normal-case">
            Listen on Spotify
          </span>
          <a
            href={SPOTIFY_ARTIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#E6007E] hover:bg-pink-100 text-xs font-bold px-4 py-1.5 rounded-full transition-colors flex items-center gap-1"
          >
            Open Spotify App <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <p className="font-script text-3xl sm:text-4xl text-[#E6007E]">
            Now streaming
          </p>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#121212] uppercase tracking-tight">
            THE MUSIC
          </h2>
          <p className="text-gray-600 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Official singles and catalog from {ARTIST_NAME}. Embedded players stream directly from Spotify.
          </p>
          <div className="w-20 h-1 bg-[#E6007E] mx-auto rounded-full mt-3" />
        </div>

        {/* View Mode Toggle: Single Releases vs Full Artist Profile Player */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-full border border-gray-200 shadow-sm inline-flex gap-1">
            <button
              onClick={() => setActiveTab('releases')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'releases'
                  ? 'bg-[#E6007E] text-white shadow-sm'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Latest Releases
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'profile'
                  ? 'bg-[#E6007E] text-white shadow-sm'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Full Artist Profile Player
            </button>
          </div>
        </div>

        {activeTab === 'releases' ? (
          /* 3 Release Cards Grid (styled like the reference's service cards with hot pink accents & soft rounded containers) */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RELEASES.map((release) => (
              <div
                key={release.id}
                className="group bg-white rounded-3xl border-2 border-gray-100 p-6 shadow-md hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                {/* Hot Pink Header Bar */}
                <div className="bg-[#E6007E] text-white p-4 -mx-6 -mt-6 mb-6 rounded-t-2xl flex items-center justify-between">
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
                    title={`Open ${release.title} on Spotify`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Spotify Embedded Player Frame */}
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

                {/* Release Description */}
                <p className="text-xs text-gray-600 font-sans leading-relaxed pt-3 pb-4">
                  {release.description}
                </p>

                {/* Card Action Link */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <span className="font-script text-lg text-[#E6007E]">
                    ONEKEYZ
                  </span>
                  <a
                    href={release.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#121212] group-hover:text-[#E6007E] transition-colors"
                  >
                    <span>Play Track</span>
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Full Artist Profile Embed */
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border-2 border-gray-100 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E6007E] text-white flex items-center justify-center font-display font-bold">
                  1K
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-[#121212] uppercase">
                    {ARTIST_NAME} Spotify Profile
                  </h3>
                  <p className="text-xs text-gray-500 font-sans">
                    Complete discography, top tracks, and playlists
                  </p>
                </div>
              </div>
              <a
                href={SPOTIFY_ARTIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E6007E] text-white text-xs font-bold uppercase px-4 py-2 rounded-full hover:bg-[#C8006E] transition-colors flex items-center gap-1.5"
              >
                <span>Spotify</span> <ExternalLink className="w-3 h-3" />
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
          </div>
        )}

        {/* Footer Link Out to Spotify */}
        <div className="mt-14 text-center">
          <a
            href={SPOTIFY_ARTIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#121212] hover:bg-[#E6007E] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <Music className="w-4 h-4 text-pink-400" />
            <span>Follow ONEKEYZ on Spotify for New Music Notifications</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
