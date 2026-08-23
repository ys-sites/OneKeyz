import { useState, ChangeEvent, FormEvent } from 'react';
import { Play, Instagram, Music, Upload, Image as ImageIcon, Sparkles, ArrowRight, Disc, Volume2, X } from 'lucide-react';
import { ARTIST_NAME, INSTAGRAM_URL, SPOTIFY_ARTIST_URL, RELEASES } from '../data/discography';

interface HeroProps {
  heroImageUrl?: string;
  onUpdateHeroImage?: (url: string) => void;
}

export default function Hero({ heroImageUrl, onUpdateHeroImage }: HeroProps) {
  const [showImageUploader, setShowImageUploader] = useState(false);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  const [customPhoto, setCustomPhoto] = useState<string | null>(heroImageUrl || null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setCustomPhoto(result);
        if (onUpdateHeroImage) onUpdateHeroImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      setCustomPhoto(inputUrl.trim());
      if (onUpdateHeroImage) onUpdateHeroImage(inputUrl.trim());
      setShowImageUploader(false);
    }
  };

  const filterTabs = [
    { name: 'DISCOGRAPHY', href: '#music' },
    { name: 'ABOUT JOURNEY', href: '#about' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'NEWSLETTER', href: '#newsletter' },
    { name: 'BOOKING & PRESS', href: '#contact' },
  ];

  return (
    <div className="relative pt-24 sm:pt-28">
      {/* Dark Cinematic Hero Stage matching reference structure */}
      <section className="relative bg-[#121212] text-white pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden border-b-4 border-[#E6007E]">
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#E6007E]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#E6007E_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Category Tag + Headline + Editorial Text (Matching Ramy Adly layout) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Category Pill Badge (Matching [ MUSIC ] badge from screenshot) */}
              <div className="inline-block">
                <span className="bg-[#E6007E] text-white text-[11px] font-mono font-bold tracking-widest px-3 py-1 rounded-xs uppercase shadow-sm">
                  MUSIC & VOCAL ARTISTRY
                </span>
              </div>

              {/* Artist Name Headline */}
              <div className="space-y-3">
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight text-white uppercase leading-[0.95]">
                  {ARTIST_NAME}
                </h1>
                <p className="text-base sm:text-xl font-sans text-gray-300 max-w-2xl leading-relaxed pt-1">
                  Every time you experience the sound of <strong className="text-white font-bold">ONEKEYZ</strong>, you enter an authentic world of soulful vocals, pure emotion, and modern sonic storytelling. Independent recording artist pushing music forward.
                </p>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-white/80 font-mono font-bold text-xs uppercase tracking-widest px-7 py-3.5 rounded-xs transition-all duration-200"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4 text-[#E6007E]" />
                </a>

                <a
                  href={SPOTIFY_ARTIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#E6007E] hover:bg-[#C8006E] text-white font-mono font-bold text-xs uppercase tracking-widest px-7 py-3.5 rounded-xs shadow-lg transition-all duration-200"
                >
                  <Music className="w-4 h-4 fill-current" />
                  <span>STREAM ON SPOTIFY</span>
                </a>
              </div>

            </div>

            {/* Right Column: Floating Stacked Media Preview Card (Matching Ramy Adly floating video frame from reference image) */}
            <div className="lg:col-span-5 relative">
              
              {/* Outer Decorative Outline Border Box */}
              <div className="relative p-2 bg-[#E6007E]/20 border-2 border-[#E6007E] rounded-xl shadow-2xl">
                
                {/* Photo / Media Container */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-[#18181b] via-[#27272a] to-[#E6007E] flex flex-col items-center justify-center text-center p-6 text-white group">
                  
                  {customPhoto ? (
                    <img
                      src={customPhoto}
                      alt="ONEKEYZ Artist Visual"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="relative z-10 space-y-3">
                      <ImageIcon className="w-12 h-12 mx-auto text-pink-300" />
                      <div className="space-y-0.5">
                        <span className="font-script text-2xl text-pink-200 block">
                          Featured Track
                        </span>
                        <h3 className="font-display font-black text-xl uppercase tracking-wider text-white">
                          "REAL" (2025)
                        </h3>
                      </div>
                      <span className="inline-block text-[10px] font-mono bg-black/60 px-3 py-1 rounded-full border border-pink-400/30 text-pink-200">
                        [Hero Editorial Portrait Frame]
                      </span>
                    </div>
                  )}

                  {/* Central Play Overlay Button (Matching play icon on Ramy Adly floating card in reference screenshot) */}
                  <button
                    onClick={() => setIsPlayingPreview(!isPlayingPreview)}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 hover:bg-[#E6007E] text-black hover:text-white flex items-center justify-center shadow-2xl backdrop-blur-md transition-all duration-300 transform hover:scale-110 z-20 group/btn"
                    title="Play Latest Spotify Preview"
                  >
                    <Play className="w-7 h-7 fill-current ml-1 text-[#E6007E] group-hover/btn:text-white transition-colors" />
                  </button>

                  {/* Overlaid Bottom Title Strip */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex items-center justify-between text-left z-20">
                    <div>
                      <p className="font-display font-bold text-sm tracking-wide text-white">ONEKEYZ — "REAL"</p>
                      <p className="text-[11px] text-pink-300 font-mono">Latest Official Single • 2025</p>
                    </div>

                    <button
                      onClick={() => setShowImageUploader(!showImageUploader)}
                      className="bg-[#E6007E] hover:bg-white hover:text-black text-white text-[10px] font-mono font-bold px-3 py-1.5 rounded transition-colors"
                    >
                      {customPhoto ? 'Change Image' : 'Upload Image'}
                    </button>
                  </div>

                </div>

                {/* Inline Image Uploader Drawer */}
                {showImageUploader && (
                  <div className="mt-3 p-4 bg-[#18181b] border border-[#E6007E]/40 rounded-lg space-y-3 text-xs text-white">
                    <div className="flex items-center justify-between font-bold text-pink-300">
                      <span>Preview Real Artist Photo:</span>
                      <button onClick={() => setShowImageUploader(false)} className="text-gray-400 hover:text-white">✕</button>
                    </div>

                    <div>
                      <label className="block text-gray-400 mb-1">Upload Local Image File:</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="w-full text-xs text-gray-400 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:bg-[#E6007E] file:text-white cursor-pointer"
                      />
                    </div>

                    <form onSubmit={handleUrlSubmit} className="pt-2 border-t border-white/10">
                      <label className="block text-gray-400 mb-1">Or Image URL:</label>
                      <div className="flex gap-2">
                        <input
                          type="url"
                          placeholder="https://..."
                          value={inputUrl}
                          onChange={(e) => setInputUrl(e.target.value)}
                          className="flex-1 px-3 py-1 bg-black border border-gray-700 rounded text-xs text-white"
                        />
                        <button type="submit" className="bg-[#E6007E] text-white px-3 py-1 rounded font-bold">
                          Apply
                        </button>
                      </div>
                    </form>
                  </div>
                )}

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Section Sub-Nav Filter Pill Bar (Directly under hero, matching pill navigation row in Ramy Adly screenshot) */}
      <div className="bg-[#121212] py-4 border-b border-[#E6007E]/20 shadow-md overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3 min-w-max">
          {filterTabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              className="px-6 py-2 rounded-full text-xs font-mono font-bold tracking-widest text-gray-300 bg-white/5 hover:bg-[#E6007E] hover:text-white border border-white/10 hover:border-[#E6007E] transition-all duration-200"
            >
              {tab.name}
            </a>
          ))}
        </div>
      </div>

      {/* Audio Modal Preview Overlay */}
      {isPlayingPreview && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#18181b] text-white border-2 border-[#E6007E] rounded-2xl max-w-lg w-full p-6 shadow-2xl relative space-y-4">
            <button
              onClick={() => setIsPlayingPreview(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-[#E6007E] text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <Disc className="w-6 h-6 text-[#E6007E] animate-spin" />
              <div>
                <h4 className="font-display font-black text-lg uppercase">ONEKEYZ — "REAL"</h4>
                <p className="text-xs text-pink-300 font-mono">Stream full track on Spotify player below</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10">
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
          </div>
        </div>
      )}
    </div>
  );
}
