import { Instagram, Music, ArrowUp } from 'lucide-react';
import { ARTIST_NAME, INSTAGRAM_URL, SPOTIFY_ARTIST_URL } from '../data/discography';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t-4 border-[#E6007E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Wordmark & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <a href="#" className="inline-block group">
              <span className="text-4xl font-display font-black tracking-tight text-white uppercase group-hover:text-[#E6007E] transition-colors">
                {ARTIST_NAME}
              </span>
            </a>
            <p className="text-sm text-gray-400 font-sans max-w-md leading-relaxed">
              Official music portfolio and artist home base for independent recording artist ONEKEYZ. Stream official releases on Spotify and connect on Instagram.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E6007E] text-white flex items-center justify-center transition-colors"
                title="Instagram @one_keyz"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SPOTIFY_ARTIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E6007E] text-white flex items-center justify-center transition-colors"
                title="Spotify Artist Page"
              >
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-mono text-xs font-bold text-[#E6007E] uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2 text-sm font-sans text-gray-300">
              <li>
                <a href="#about" className="hover:text-[#E6007E] transition-colors">
                  About ONEKEYZ
                </a>
              </li>
              <li>
                <a href="#music" className="hover:text-[#E6007E] transition-colors">
                  Music & Discography
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E6007E] transition-colors">
                  Visual Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E6007E] transition-colors">
                  Bookings & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Streaming & Social Channels */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-mono text-xs font-bold text-[#E6007E] uppercase tracking-wider">
              Official Platforms
            </p>
            <ul className="space-y-2 text-sm font-sans text-gray-300">
              <li>
                <a
                  href={SPOTIFY_ARTIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E6007E] transition-colors flex items-center gap-1.5"
                >
                  <Music className="w-4 h-4 text-[#E6007E]" />
                  <span>Spotify Artist Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E6007E] transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-4 h-4 text-[#E6007E]" />
                  <span>Instagram @one_keyz</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-mono gap-4">
          <p>© {new Date().getFullYear()} {ARTIST_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Independent Recording Artist</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white hover:text-[#E6007E] font-bold uppercase transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 text-[#E6007E]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
