import { useState, ChangeEvent } from 'react';
import { Edit3, Check, Sparkles, Heart, Mic, Award, Upload, Image as ImageIcon } from 'lucide-react';
import { ARTIST_NAME } from '../data/discography';

export default function AboutSection() {
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [photo1, setPhoto1] = useState<string | null>(null);
  const [photo2, setPhoto2] = useState<string | null>(null);

  const [bioText, setBioText] = useState(
    `[Artist bio goes here — 2–3 paragraphs]

ONEKEYZ is an independent recording artist and vocalist creating resonant music that bridges soulful vocal delivery with modern atmospheric production. 

Her signature sound blends velvety vocal tones with honest, reflective songwriting that resonates deeply with listeners across Spotify, Instagram, and live stages worldwide.`
  );

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>, photoIndex: 1 | 2) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (photoIndex === 1) setPhoto1(reader.result as string);
        else setPhoto2(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden border-b border-gray-200">
      
      {/* Giant Vertical Background Watermark Text (Matching right-side vertical text in Ramy Adly screenshot) */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 rotate-90 origin-right pointer-events-none select-none opacity-5 hidden xl:block">
        <span className="font-display font-black text-9xl tracking-widest text-[#121212] uppercase whitespace-nowrap">
          {ARTIST_NAME} MUSICIAN
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Category Eyebrow & Headline (Matching "THE JOURNEY OF..." layout from reference screenshot) */}
        <div className="space-y-3 mb-12 text-left">
          <div className="inline-block">
            <span className="bg-[#E6007E] text-white text-[11px] font-mono font-bold tracking-widest px-3 py-1 uppercase rounded-xs">
              ABOUT {ARTIST_NAME}
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#121212] uppercase tracking-tight">
            THE JOURNEY OF {ARTIST_NAME}
          </h2>
          <div className="w-24 h-1 bg-[#E6007E]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bio & Story (7 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white border-2 border-[#121212] p-6 sm:p-8 rounded-lg shadow-xl relative">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-6">
                <span className="text-xs font-mono font-bold text-[#E6007E] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E6007E]" />
                  ARTIST BIOGRAPHY
                </span>
                <button
                  onClick={() => setIsEditingBio(!isEditingBio)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#121212] hover:text-[#E6007E] bg-[#FAF8F5] border border-gray-300 px-3 py-1 rounded transition-colors"
                >
                  {isEditingBio ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Edit3 className="w-3.5 h-3.5" />}
                  <span>{isEditingBio ? 'Save Bio' : 'Edit Bio Text'}</span>
                </button>
              </div>

              {/* Bio Content */}
              {isEditingBio ? (
                <div className="space-y-3">
                  <textarea
                    rows={8}
                    value={bioText}
                    onChange={(e) => setBioText(e.target.value)}
                    className="w-full p-4 bg-gray-50 border border-[#E6007E] rounded font-sans text-sm text-[#121212] focus:outline-none"
                  />
                  <p className="text-[11px] text-gray-500 font-mono">
                    Changes take effect immediately in session preview.
                  </p>
                </div>
              ) : (
                <div className="font-sans text-gray-800 space-y-4 text-base sm:text-lg leading-relaxed">
                  {bioText.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {/* Pre-launch Note */}
              <div className="mt-6 p-3.5 bg-pink-50 border border-[#E6007E]/30 rounded flex items-start gap-3 text-xs text-[#121212]">
                <Sparkles className="w-4 h-4 text-[#E6007E] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-[#E6007E] uppercase font-mono">Pre-Launch Placeholder:</strong> Click "Edit Bio Text" to swap in official biography copy.
                </p>
              </div>

            </div>

            {/* Quick Stats Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#121212] text-white p-4 rounded border border-gray-800 space-y-1">
                <p className="font-display font-black text-2xl text-[#E6007E]">100%</p>
                <p className="text-[11px] font-mono text-gray-400 uppercase">INDEPENDENT</p>
              </div>
              <div className="bg-[#121212] text-white p-4 rounded border border-gray-800 space-y-1">
                <p className="font-display font-black text-2xl text-[#E6007E]">R&B / SOUL</p>
                <p className="text-[11px] font-mono text-gray-400 uppercase">GENRE</p>
              </div>
              <div className="bg-[#121212] text-white p-4 rounded border border-gray-800 space-y-1 col-span-2 sm:col-span-1">
                <p className="font-display font-black text-2xl text-[#E6007E]">SPOTIFY</p>
                <p className="text-[11px] font-mono text-gray-400 uppercase">VERIFIED ARTIST</p>
              </div>
            </div>

          </div>

          {/* Right Column: Dual Side-by-Side Vertical Photo Cards (Matching Ramy Adly 2-photo layout in reference screenshot!) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 relative">
            
            {/* Photo Card 1 */}
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-[#E6007E] rounded transform -rotate-1 opacity-80 group-hover:rotate-0 transition-transform" />
              <div className="relative aspect-[3/4] bg-[#121212] rounded overflow-hidden border-2 border-white shadow-xl flex flex-col justify-between p-4 text-white">
                {photo1 ? (
                  <img src={photo1} alt="ONEKEYZ Portrait 1" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <div className="m-auto text-center space-y-2">
                    <ImageIcon className="w-8 h-8 text-pink-300 mx-auto" />
                    <p className="font-display font-bold text-sm uppercase">STAGECRAFT</p>
                    <p className="text-[10px] font-mono text-pink-200">[Portrait 1 Placeholder]</p>
                  </div>
                )}
                
                <div className="relative z-10 mt-auto bg-black/70 backdrop-blur-sm p-2 rounded border border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-white">ONEKEYZ</span>
                  <label className="cursor-pointer bg-[#E6007E] text-white text-[9px] font-mono font-bold px-2 py-1 rounded hover:bg-white hover:text-black transition-colors">
                    Upload
                    <input type="file" accept="image/*" onChange={(e) => handlePhotoUpload(e, 1)} className="hidden" />
                  </label>
                </div>
              </div>
            </div>

            {/* Photo Card 2 */}
            <div className="relative group pt-6 sm:pt-8">
              <div className="absolute -inset-1.5 bg-[#121212] rounded transform rotate-1 opacity-80 group-hover:rotate-0 transition-transform" />
              <div className="relative aspect-[3/4] bg-gradient-to-br from-[#121212] to-[#27272a] rounded overflow-hidden border-2 border-[#E6007E] shadow-xl flex flex-col justify-between p-4 text-white">
                {photo2 ? (
                  <img src={photo2} alt="ONEKEYZ Portrait 2" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <div className="m-auto text-center space-y-2">
                    <Mic className="w-8 h-8 text-[#E6007E] mx-auto" />
                    <p className="font-display font-bold text-sm uppercase">STUDIO SESSION</p>
                    <p className="text-[10px] font-mono text-pink-200">[Portrait 2 Placeholder]</p>
                  </div>
                )}

                <div className="relative z-10 mt-auto bg-black/70 backdrop-blur-sm p-2 rounded border border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-white">STUDIO</span>
                  <label className="cursor-pointer bg-[#E6007E] text-white text-[9px] font-mono font-bold px-2 py-1 rounded hover:bg-white hover:text-black transition-colors">
                    Upload
                    <input type="file" accept="image/*" onChange={(e) => handlePhotoUpload(e, 2)} className="hidden" />
                  </label>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

