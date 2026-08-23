/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MusicSection from './components/MusicSection';
import GallerySection from './components/GallerySection';
import NewsletterSection from './components/NewsletterSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PreLaunchChecklistModal from './components/PreLaunchChecklistModal';

export default function App() {
  const [customHeroPhoto, setCustomHeroPhoto] = useState<string | undefined>(undefined);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121212] flex flex-col font-sans selection:bg-[#E6007E] selection:text-white">
      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-1">
        <Hero
          heroImageUrl={customHeroPhoto}
          onUpdateHeroImage={(url) => setCustomHeroPhoto(url)}
        />
        <AboutSection />
        <MusicSection />
        <GallerySection />
        <NewsletterSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Helper Pre-Launch Review Panel */}
      <PreLaunchChecklistModal />
    </div>
  );
}

