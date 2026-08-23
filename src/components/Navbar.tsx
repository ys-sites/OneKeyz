import { useState, useEffect } from 'react';
import { Instagram, Music, Menu, X, ExternalLink, Mail, Disc } from 'lucide-react';
import { ARTIST_NAME, INSTAGRAM_URL, SPOTIFY_ARTIST_URL } from '../data/discography';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Discography', href: '#music' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Newsletter', href: '#newsletter' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Info Bar (Inspired by top bar in reference layout) */}
      <div className="bg-[#121212] text-white py-1.5 px-4 text-xs border-b border-[#E6007E]/30 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono">
          <div className="flex items-center gap-4 text-gray-300">
            <span className="flex items-center gap-1.5 text-pink-300 font-bold">
              <Mail className="w-3.5 h-3.5 text-[#E6007E]" />
              BOOKINGS & PRESS: [insert booking email]
            </span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">INDEPENDENT RECORDING ARTIST</span>
          </div>

          <div className="flex items-center gap-4 text-gray-300">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E6007E] transition-colors flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@one_keyz</span>
            </a>
            <a
              href={SPOTIFY_ARTIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E6007E] transition-colors flex items-center gap-1"
            >
              <Music className="w-3.5 h-3.5 text-[#E6007E]" />
              <span>Spotify Artist</span>
            </a>
            <a
              href="#contact"
              className="bg-[#E6007E] hover:bg-[#C8006E] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded transition-colors"
            >
              Booking
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121212]/95 backdrop-blur-md shadow-xl border-b border-[#E6007E]/30 py-3 text-white'
            : 'bg-[#121212]/90 backdrop-blur-sm border-b border-white/10 py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white hover:text-[#E6007E] transition-colors"
          >
            <span className="bg-[#E6007E] text-white px-2.5 py-0.5 rounded-sm text-base font-mono font-bold tracking-widest group-hover:scale-105 transition-transform">
              1K
            </span>
            <span className="uppercase tracking-wider">{ARTIST_NAME}</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold tracking-widest text-gray-300 hover:text-[#E6007E] transition-colors uppercase py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={SPOTIFY_ARTIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E6007E] hover:bg-[#C8006E] text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-sm shadow-md transition-all duration-200 border border-pink-400/30 flex items-center gap-2"
            >
              <Music className="w-3.5 h-3.5 fill-current" />
              <span>Stream Spotify</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="#music"
              className="bg-[#E6007E] text-white text-xs font-bold uppercase px-3 py-1.5 rounded-sm"
            >
              Stream
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#E6007E] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121212] border-b border-[#E6007E]/30 px-4 pt-4 pb-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 text-white">
            <div className="flex flex-col space-y-4 pt-2 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-display font-bold uppercase tracking-widest text-gray-200 hover:text-[#E6007E] py-1.5 border-b border-white/10"
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
                <Instagram className="w-4 h-4 text-[#E6007E]" /> @one_keyz on Instagram
              </a>
              <a
                href={SPOTIFY_ARTIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#E6007E]"
              >
                <Music className="w-4 h-4 text-[#E6007E]" /> Spotify Artist Page <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#E6007E] text-white text-center text-xs font-bold uppercase py-3 rounded-sm mt-2"
              >
                Booking & Press Inquiries
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

