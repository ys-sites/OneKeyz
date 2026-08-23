import { Instagram, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { ARTIST_NAME, INSTAGRAM_URL, SPOTIFY_ARTIST_URL } from '../data/discography';
import { SpotifyLogo } from './icons/SpotifyLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t-4 border-[#E6007E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Wordmark & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <a href="#" className="inline-flex items-center gap-2.5 group leading-none">
              <span className="bg-[#E6007E] text-white px-2.5 py-1 rounded-md text-xs font-mono font-bold tracking-widest shadow-md inline-flex items-center justify-center shrink-0 self-center leading-none">
                1K
              </span>
              <span className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white uppercase group-hover:text-[#E6007E] transition-colors leading-none">
                {ARTIST_NAME}
              </span>
            </a>
            <p className="text-sm text-gray-400 font-sans max-w-md leading-relaxed">
              Official music portfolio and artist home base for Montreal-based independent recording artist ONEKEYZ. Stream official releases on Spotify and connect on Instagram.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E6007E] text-white flex items-center justify-center transition-colors shadow-md"
                title="Instagram @one_keyz"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href={SPOTIFY_ARTIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E6007E] text-white flex items-center justify-center transition-colors shadow-md"
                title="Spotify Artist Page"
              >
                <SpotifyLogo className="w-5 h-5" />
              </motion.a>
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
                  className="hover:text-[#E6007E] transition-colors flex items-center gap-2"
                >
                  <SpotifyLogo className="w-4 h-4 text-[#E6007E]" />
                  <span>Spotify Artist Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E6007E] transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-[#E6007E]" />
                  <span>Instagram @one_keyz</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, YS Marketing Solutions Signature & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-mono gap-4">
          <p>© {new Date().getFullYear()} {ARTIST_NAME}. All rights reserved.</p>
          
          {/* YS Marketing Solutions Signature Button */}
          <a
            href="https://www.instagram.com/ys.sites/"
            target="_blank"
            rel="noopener noreferrer"
            className="ys-signature-btn"
            title="YS Marketing Solutions — Web Development & Marketing Agency"
          >
            <img
              src="/YS.png"
              alt="YS Logo"
              className="ys-sig-logo"
            />
            <span className="ys-sig-text">
              Made by <strong className="ys-sig-highlight">YS Marketing Solutions</strong> <span className="ys-sig-divider">|</span> Marketing Agency
            </span>
          </a>

          <div className="flex items-center gap-6">
            <span className="text-pink-300 hidden md:inline">Montreal-Based Recording Artist</span>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white hover:text-[#E6007E] font-bold uppercase transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 text-[#E6007E]" />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
}
