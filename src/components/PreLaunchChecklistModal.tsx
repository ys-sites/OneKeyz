import { useState } from 'react';
import { Check, Sparkles, X, Info, ExternalLink, ListChecks } from 'lucide-react';
import { ARTIST_NAME } from '../data/discography';

export default function PreLaunchChecklistModal() {
  const [isOpen, setIsOpen] = useState(false);

  const checklistItems = [
    {
      title: 'Real Artist Bio Copy',
      status: 'Placeholder active',
      done: false,
      note: 'Replace [Artist bio goes here] in the About section prior to launch.'
    },
    {
      title: 'Real Editorial Photography',
      status: 'Color-block placeholders active',
      done: false,
      note: 'Drop high-res fashion/press photos into Hero & Gallery frames.'
    },
    {
      title: 'Official Booking Contact Email',
      status: 'Placeholder active',
      done: false,
      note: 'Update [insert booking email] in the Contact section.'
    },
    {
      title: 'Spotify Discography Embeds',
      status: 'Configured & live',
      done: true,
      note: 'Streams "Real" (2025), "Come" (2021), "Poison" (2018).'
    },
    {
      title: 'Instagram Connection',
      status: 'Configured & live',
      done: true,
      note: 'Linked directly to @one_keyz on Instagram.'
    },
    {
      title: 'ONEKEYZ Wordmark & Layout',
      status: 'Configured',
      done: true,
      note: 'All-caps ONEKEYZ wordmark with hot pink color-block theme.'
    }
  ];

  return (
    <>
      {/* Floating Bottom Left Badge */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-40 bg-[#121212] hover:bg-[#E6007E] text-white border-2 border-[#E6007E] shadow-2xl px-4 py-2.5 rounded-full text-xs font-mono font-bold flex items-center gap-2 transition-all duration-200 transform hover:scale-105"
      >
        <Sparkles className="w-4 h-4 text-pink-300 animate-pulse" />
        <span>Pre-Launch Checklist</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border-2 border-[#E6007E] shadow-2xl space-y-6 relative text-[#121212]">
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-black p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-[#E6007E] uppercase tracking-wider block">
                Pre-Launch Review Panel
              </span>
              <h3 className="font-display font-black text-2xl uppercase tracking-tight">
                {ARTIST_NAME} SITE CHECKLIST
              </h3>
              <p className="text-xs text-gray-600 font-sans">
                Review launch readiness status below. Unchecked items remain as visible placeholders in the build.
              </p>
            </div>

            <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
              {checklistItems.map((item, index) => (
                <div
                  key={index}
                  className={`p-3.5 rounded-2xl border text-xs flex items-start gap-3 ${
                    item.done
                      ? 'bg-green-50/60 border-green-200 text-green-900'
                      : 'bg-pink-50/60 border-[#E6007E]/30 text-gray-900'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-xs font-bold mt-0.5 ${
                      item.done ? 'bg-green-600 text-white' : 'bg-[#E6007E] text-white'
                    }`}
                  >
                    {item.done ? <Check className="w-3.5 h-3.5" /> : '!'}
                  </div>

                  <div className="flex-1 space-y-0.5">
                    <div className="flex items-center justify-between font-bold">
                      <span>{item.title}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-gray-200">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-600 font-sans">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-500 font-mono text-[11px]">
                Ready for staging & testing
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-[#121212] text-white font-bold px-5 py-2 rounded-full hover:bg-[#E6007E] transition-colors uppercase text-[11px]"
              >
                Close Panel
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
