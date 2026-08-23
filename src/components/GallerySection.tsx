import { useState, ChangeEvent, FormEvent } from 'react';
import { Camera, Upload, Plus, X, Image as ImageIcon, ZoomIn, Check } from 'lucide-react';
import { DEFAULT_GALLERY_ITEMS, ARTIST_NAME } from '../data/discography';
import { GalleryItem } from '../types';

export default function GallerySection() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(DEFAULT_GALLERY_ITEMS);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [inputUrl, setInputUrl] = useState('');

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>, itemId: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setGalleryItems((prev) =>
          prev.map((item) => (item.id === itemId ? { ...item, customUrl: result } : item))
        );
        setEditingId(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e: FormEvent, itemId: string) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      setGalleryItems((prev) =>
        prev.map((item) => (item.id === itemId ? { ...item, customUrl: inputUrl.trim() } : item))
      );
      setInputUrl('');
      setEditingId(null);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="font-script text-3xl sm:text-4xl text-[#E6007E]">
            Visuals & Moments
          </p>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#121212] uppercase tracking-tight">
            GALLERY
          </h2>
          <p className="text-gray-600 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Color-block photography frames. Real press & editorial photography will replace these placeholders prior to launch.
          </p>
          <div className="w-20 h-1 bg-[#E6007E] mx-auto rounded-full mt-3" />
        </div>

        {/* Gallery Grid (3-6 Cropped Color-Consistent Image Row matching Reference) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative group">
              <div
                onClick={() => setSelectedImage(item)}
                className={`relative w-full ${
                  item.aspectRatio || 'aspect-square'
                } rounded-2xl overflow-hidden cursor-pointer shadow-md group-hover:shadow-xl transition-all duration-300 border-2 border-gray-100 flex flex-col items-center justify-center text-center p-4 text-white bg-gradient-to-br ${item.bgColor}`}
              >
                {item.customUrl ? (
                  <img
                    src={item.customUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  /* Plain Color Block Placeholder (Strictly adhering to prompt requirements) */
                  <div className="relative z-10 space-y-2">
                    <Camera className="w-8 h-8 mx-auto text-white/80 group-hover:scale-110 transition-transform" />
                    <p className="font-display font-bold text-sm uppercase tracking-wide">
                      {item.title}
                    </p>
                    <span className="inline-block text-[10px] font-mono bg-black/30 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-pink-200 border border-white/10">
                      [Photo Placeholder]
                    </span>
                  </div>
                )}

                {/* Overlaid Hover Action */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-2">
                  <span className="bg-[#E6007E] text-white p-2.5 rounded-full shadow-md text-xs font-bold flex items-center gap-1">
                    <ZoomIn className="w-4 h-4" /> Expand
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditingId(editingId === item.id ? null : item.id);
                    }}
                    className="bg-white text-black hover:bg-black hover:text-white p-2.5 rounded-full shadow-md text-xs font-bold transition-colors"
                    title="Replace Photo"
                  >
                    <Upload className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Inline Photo Switcher Drawer */}
              {editingId === item.id && (
                <div className="absolute top-2 left-2 right-2 z-30 p-4 bg-white rounded-xl shadow-2xl border-2 border-[#E6007E] space-y-3 text-xs text-gray-800 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between font-bold">
                    <span>Replace Gallery Image:</span>
                    <button onClick={() => setEditingId(null)} className="text-gray-400 hover:text-black">
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div>
                    <label className="block text-gray-500 mb-1 font-semibold">Upload Photo File:</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, item.id)}
                      className="w-full text-xs text-gray-500 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:bg-[#E6007E] file:text-white"
                    />
                  </div>

                  <form onSubmit={(e) => handleUrlSubmit(e, item.id)} className="pt-2 border-t border-gray-100">
                    <label className="block text-gray-500 mb-1 font-semibold">Or Image URL:</label>
                    <div className="flex gap-1">
                      <input
                        type="url"
                        placeholder="https://..."
                        value={inputUrl}
                        onChange={(e) => setInputUrl(e.target.value)}
                        className="flex-1 px-2 py-1 border rounded text-xs"
                      />
                      <button type="submit" className="bg-[#121212] text-white px-3 py-1 rounded font-bold">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Gallery Pre-Launch Notice */}
        <div className="mt-10 text-center text-xs font-mono text-gray-500 bg-[#FAF8F5] py-3 px-6 rounded-full max-w-md mx-auto border border-gray-200">
          <span className="text-[#E6007E] font-bold">Note:</span> Real editorial & press photography will be dropped in before official site launch.
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-[#121212] rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-6 text-white text-center space-y-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-[#E6007E] text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-gradient-to-br from-[#121212] via-[#E6007E] to-[#27272a] flex items-center justify-center">
              {selectedImage.customUrl ? (
                <img
                  src={selectedImage.customUrl}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="p-8 text-center space-y-3">
                  <ImageIcon className="w-16 h-16 mx-auto text-pink-300 opacity-80" />
                  <p className="font-display font-black text-2xl uppercase tracking-wider">
                    {selectedImage.title}
                  </p>
                  <p className="text-xs text-gray-300 font-mono">
                    [Gallery Placeholder — Photography slot reserved for ONEKEYZ]
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between pt-2 text-xs text-gray-400 border-t border-white/10">
              <span className="font-display font-bold text-white text-sm">ONEKEYZ Portfolio</span>
              <span>Click background or ✕ to close</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
