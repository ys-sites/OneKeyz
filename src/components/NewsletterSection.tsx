import { useState, FormEvent } from 'react';
import { Mail, CheckCircle2, Send, Sparkles, Music } from 'lucide-react';
import { ARTIST_NAME } from '../data/discography';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
    }, 800);
  };

  return (
    <section id="newsletter" className="relative py-20 lg:py-24 bg-[#E6007E] text-white overflow-hidden">
      
      {/* Background Decorative Accent Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-2xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl max-w-4xl mx-auto text-center space-y-6">
          
          {/* Script Accent & Headline */}
          <div className="space-y-2">
            <span className="font-script text-3xl sm:text-4xl text-pink-200 block">
              Stay connected
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-black uppercase tracking-tight text-white">
              JOIN THE INNER CIRCLE
            </h2>
            <p className="text-sm sm:text-lg text-pink-100 max-w-xl mx-auto leading-relaxed font-sans pt-1">
              Be the first to hear new music drops, exclusive behind-the-scenes content, live performances, and private VIP updates from {ARTIST_NAME}.
            </p>
          </div>

          {/* Form / Success State */}
          {subscribed ? (
            <div className="bg-white text-[#121212] p-8 rounded-2xl max-w-md mx-auto shadow-xl space-y-3 animate-in zoom-in-95 duration-300">
              <CheckCircle2 className="w-12 h-12 text-[#E6007E] mx-auto" />
              <h3 className="font-display font-black text-2xl uppercase">
                YOU'RE ON THE LIST!
              </h3>
              <p className="text-xs text-gray-600 font-sans leading-relaxed">
                Thank you for subscribing to {ARTIST_NAME}. Check your inbox soon for exclusive updates.
              </p>
              <button
                onClick={() => setSubscribed(false)}
                className="text-xs font-bold text-[#E6007E] hover:underline pt-2 inline-block"
              >
                Subscribe another email address
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white text-[#121212] rounded-full text-sm font-sans placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-black/20 shadow-inner"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#121212] hover:bg-black text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 shrink-0 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="animate-spin text-sm">↻</span>
                  ) : (
                    <>
                      <span>Join Now</span>
                      <Send className="w-4 h-4 text-pink-400" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-pink-200/90 font-mono pt-1">
                Zero spam. Only genuine music updates directly from {ARTIST_NAME}. Unsubscribe anytime.
              </p>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
