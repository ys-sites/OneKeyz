import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MusicSection from './components/MusicSection';
import GallerySection from './components/GallerySection';
import NewsletterSection from './components/NewsletterSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#111111] flex flex-col font-sans selection:bg-[#E6007E] selection:text-white">
      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <MusicSection />
        <GallerySection />
        <NewsletterSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
