import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ARTIST_NAME, INSTAGRAM_URL, SPOTIFY_ARTIST_URL } from '../data/discography';
import { SpotifyLogo } from './icons/SpotifyLogo';
import { InstagramLogo } from './icons/InstagramLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Music', href: '#music' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Notice */}
      <div className="bg-[#111111] text-white py-1.5 px-4 text-xs border-b border-[#E6007E]/30 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-sleek text-[11px] tracking-wider">
          <div className="flex items-center gap-4 text-gray-300">
            <a
              href="mailto:onekeyzmusic1@gmail.com"
              className="flex items-center gap-1.5 text-pink-300 font-semibold hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#E6007E]" />
              BOOKINGS & PRESS: <span className="underline decoration-[#E6007E]">onekeyzmusic1@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-gray-300">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E6007E] transition-colors flex items-center gap-1.5 font-medium"
            >
              <InstagramLogo className="w-3.5 h-3.5 text-[#E6007E]" />
              <span>@one_keyz</span>
            </a>
            <a
              href={SPOTIFY_ARTIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E6007E] transition-colors flex items-center gap-1.5 font-medium"
            >
              <SpotifyLogo className="w-3.5 h-3.5 text-[#E6007E]" />
              <span>Spotify</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111111] backdrop-blur-md shadow-2xl border-b border-[#E6007E]/40 py-3 text-white'
            : 'bg-[#111111] backdrop-blur-sm border-b border-[#E6007E]/30 py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Wordmark Logo with Signature Accent */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="font-display font-black text-2xl sm:text-3xl tracking-tight uppercase leading-none select-none group flex items-center gap-2"
            aria-label="ONEKEYZ Home"
          >
            <span>
              <span className="text-white group-hover:text-pink-100 transition-colors">ONE</span>
              <span className="text-[#E6007E]">KEYZ</span>
            </span>
            <span className="font-signature text-xl text-pink-300/80 font-normal lowercase tracking-normal -rotate-6 hidden sm:inline-block">
              official
            </span>
          </motion.a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-sleek font-semibold tracking-[0.2em] text-gray-300 hover:text-[#E6007E] transition-colors uppercase py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E6007E] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA + Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E6007E] text-white flex items-center justify-center transition-colors"
              title="Instagram @one_keyz"
            >
              <InstagramLogo className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href={SPOTIFY_ARTIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E6007E] text-white flex items-center justify-center transition-colors"
              title="Spotify Artist Page"
            >
              <SpotifyLogo className="w-4 h-4" />
            </motion.a>

            {/* Bold Pill-shaped CTA Button with Official Spotify Logo */}
            <motion.a
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.96 }}
              href={SPOTIFY_ARTIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E6007E] hover:bg-[#C8006E] text-white text-xs font-sleek font-bold uppercase tracking-[0.16em] px-6 py-2.5 rounded-full shadow-lg hover:shadow-pink-500/30 transition-all duration-200 border border-pink-400/30 flex items-center gap-2"
            >
              <SpotifyLogo className="w-4 h-4 text-white" />
              <span>Listen Now</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#E6007E] focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#111111] border-b border-[#E6007E]/40 px-4 pt-4 pb-6 shadow-2xl text-white"
            >
              <div className="flex flex-col space-y-4 pt-2 pb-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-display font-bold uppercase tracking-widest text-gray-200 hover:text-[#E6007E] py-2 border-b border-white/10"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="flex flex-col space-y-3 pt-4 border-t border-white/10 text-xs">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#E6007E]"
                >
                  <InstagramLogo className="w-4 h-4 text-[#E6007E]" /> @one_keyz on Instagram
                </a>
                <a
                  href={SPOTIFY_ARTIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#E6007E]"
                >
                  <SpotifyLogo className="w-4 h-4 text-[#E6007E]" /> Spotify Artist Page <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={SPOTIFY_ARTIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#E6007E] text-white text-center text-xs font-sleek font-bold uppercase tracking-[0.16em] py-3 rounded-full mt-2 shadow-md flex items-center justify-center gap-2"
                >
                  <SpotifyLogo className="w-4 h-4" />
                  <span>Listen Now on Spotify</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
