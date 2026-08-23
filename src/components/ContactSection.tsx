import { useState, FormEvent } from 'react';
import { Mail, Instagram, Copy, Check, Send, Calendar, MapPin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { INSTAGRAM_URL } from '../data/discography';
import { BookingFormData } from '../types';

export default function ContactSection() {
  const bookingEmail = '[insert booking email]';
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    inquiryType: 'Booking',
    eventDate: '',
    location: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(bookingEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#FAF7F2] text-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <p className="font-script text-3xl sm:text-4xl text-[#E6007E]">
            For bookings & press
          </p>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#111111] uppercase tracking-tight">
            CONTACT ONEKEYZ
          </h2>
          <p className="text-gray-700 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Direct management channel for live performance bookings, press inquiries, and creative collaborations.
          </p>
          <div className="w-20 h-1 bg-[#E6007E] mx-auto rounded-full mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Email Card & Instagram Fallback (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            
            {/* Booking Email Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border-2 border-gray-100 shadow-xl space-y-6 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#E6007E]/10 text-[#E6007E] flex items-center justify-center font-bold">
                <Mail className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#E6007E] uppercase tracking-wider block">
                  Official Inquiries
                </span>
                <h3 className="text-2xl font-display font-bold text-[#111111] uppercase">
                  Bookings & Press Email
                </h3>
              </div>

              {/* Booking Email Box */}
              <div className="p-4 bg-[#FAF7F2] border border-gray-200 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span>Booking Email:</span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm sm:text-base font-bold text-[#111111] break-all">
                    {bookingEmail}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-white border border-gray-200 hover:bg-[#E6007E] hover:text-white text-gray-700 transition-colors shrink-0 shadow-xs"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#E6007E]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Note: Email address above includes a clear placeholder prior to final site launch.
              </p>
            </div>

            {/* Instagram Fallback Card */}
            <div className="bg-[#111111] text-white p-8 sm:p-10 rounded-3xl shadow-2xl space-y-6 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#E6007E] flex items-center justify-center text-white shadow-md">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase text-lg">Direct Instagram DM</h4>
                  <p className="text-xs text-pink-300 font-mono">Fallback Channel</p>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                For direct messaging, quick inquiries, or performance clips, reach ONEKEYZ on Instagram.
              </p>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full bg-[#E6007E] hover:bg-[#C8006E] text-white font-mono font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full shadow-lg transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Message @one_keyz on Instagram</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Interactive Booking Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border-2 border-gray-100 shadow-xl relative"
          >
            
            <h3 className="text-2xl font-display font-black uppercase text-[#111111] mb-6 pb-4 border-b border-gray-100">
              Submit Inquiry
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-[#E6007E]/10 text-[#E6007E] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-display font-bold uppercase text-[#111111]">
                  INQUIRY SENT!
                </h4>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name}. Your message has been routed to ONEKEYZ management. We will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      inquiryType: 'Booking',
                      eventDate: '',
                      location: '',
                      message: ''
                    });
                  }}
                  className="bg-[#111111] text-white text-xs font-mono font-bold uppercase px-6 py-3 rounded-full hover:bg-[#E6007E] transition-colors shadow-md"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold text-gray-800 uppercase">
                      Name / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      aria-required="true"
                      placeholder="e.g. Jane Doe / Venue Manager"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-[#E6007E] focus:ring-2 focus:ring-[#E6007E]/20 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold text-gray-800 uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      aria-required="true"
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-[#E6007E] focus:ring-2 focus:ring-[#E6007E]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Inquiry Type */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold text-gray-800 uppercase">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-[#E6007E]"
                    >
                      <option value="Booking">Live Performance / Booking</option>
                      <option value="Press / PR">Press / Interview / PR</option>
                      <option value="Collaboration">Feature / Collaboration</option>
                      <option value="General">General Inquiry</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold text-gray-800 uppercase flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" /> Proposed Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-[#E6007E]"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold text-gray-800 uppercase flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" /> City / Venue
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Los Angeles, CA"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-[#E6007E]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono font-bold text-gray-800 uppercase flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-gray-400" /> Project / Event Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details regarding venue capacity, set length, budget parameters, or press questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 bg-[#FAF7F2] border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-[#E6007E]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#E6007E] hover:bg-[#C8006E] text-white font-mono font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to ONEKEYZ Management</span>
                </button>

              </form>
            )}

          </motion.div>

        </div>
      </div>
    </section>
  );
}
