import { ShoppingBag, Sparkles, Bell, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { ARTIST_NAME } from '../data/discography';

interface MerchItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
}

const UPCOMING_MERCH: MerchItem[] = [
  {
    id: 'merch-1',
    name: '1K Signature Heavyweight Hoodie',
    category: 'Apparel',
    badge: 'Limited Drop 01',
    description: 'Custom cut & sew fleece hoodie with embroidered ONEKEYZ insignia in hot pink & obsidian black.',
  },
  {
    id: 'merch-2',
    name: 'Official Vinyl & CD Collector Pack',
    category: 'Physical Music',
    badge: 'Special Edition',
    description: 'Limited edition pressed vinyl featuring official releases "REAL", "Come", & exclusive instrumentals.',
  },
  {
    id: 'merch-3',
    name: 'ONEKEYZ Tour Cap & Accessories',
    category: 'Accessories',
    badge: 'VIP Collection',
    description: 'Distressed vintage wash dad cap with metallic finish branding and collector keychain bundle.',
  },
];

export default function MerchSection() {
  return (
    <section id="merch" className="py-20 lg:py-32 bg-[#FAF7F2] text-[#111111] relative overflow-hidden border-b border-gray-200 scroll-mt-24">
      
      {/* Subtle Background Typography Watermark */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left pointer-events-none select-none opacity-[0.03] hidden xl:block">
        <span className="font-display font-black text-9xl tracking-widest text-[#111111] uppercase whitespace-nowrap">
          OFFICIAL GOODS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#E6007E]/10 border border-[#E6007E]/30 px-4 py-1.5 rounded-full text-xs font-mono font-bold text-[#E6007E] uppercase tracking-wider mb-1 shadow-xs">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Official Goods & Apparel</span>
          </div>

          <p className="font-script text-3xl sm:text-4xl text-[#E6007E]">
            Exclusive drops
          </p>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#111111] uppercase tracking-tight">
            OFFICIAL MERCH
          </h2>
          <p className="text-gray-600 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Limited-edition streetwear, physical music releases, and tour merchandise from {ARTIST_NAME}.
          </p>
          <div className="w-20 h-1 bg-[#E6007E] mx-auto rounded-full mt-3" />
        </motion.div>

        {/* Coming Soon Drop Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {UPCOMING_MERCH.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-gray-200 hover:border-[#E6007E] transition-all shadow-lg flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="bg-[#E6007E] text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-mono text-gray-500 uppercase">
                    {item.category}
                  </span>
                </div>

                {/* Product Placeholder Preview Frame */}
                <div className="aspect-square bg-[#111111] rounded-2xl p-6 flex flex-col items-center justify-center text-center text-white relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-200">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-[#E6007E]/30 to-transparent pointer-events-none" />
                  <ShoppingBag className="w-12 h-12 text-pink-400 mb-3 group-hover:rotate-6 transition-transform" />
                  <span className="font-display font-bold text-sm tracking-wider uppercase text-white">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono text-pink-300 mt-1 uppercase tracking-widest">
                    Drop 01 Preview
                  </span>
                </div>

                {/* Description */}
                <div>
                  <h3 className="font-display font-bold text-lg text-[#111111] uppercase tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm font-sans mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#E6007E] uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Coming Soon
                </span>
                <a
                  href="#newsletter"
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-gray-800 hover:text-[#E6007E] transition-colors uppercase"
                >
                  <span>Notify Me</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Early VIP Access Callout Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111111] text-white rounded-3xl p-8 sm:p-10 border-2 border-[#E6007E] shadow-2xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-pink-300 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#E6007E]" />
              <span>VIP Pre-Order Guarantee</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-white">
              WANT FIRST ACCESS TO DROP 01?
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-lg font-sans">
              Newsletter subscribers get 24-hour early access codes before public releases. Sign up below to reserve your size.
            </p>
          </div>

          <a
            href="#newsletter"
            className="shrink-0 inline-flex items-center gap-2 bg-[#E6007E] hover:bg-[#C8006E] text-white font-mono font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-lg hover:shadow-pink-500/30 transition-all border border-pink-400/30"
          >
            <Bell className="w-4 h-4" />
            <span>Join VIP Waitlist</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
