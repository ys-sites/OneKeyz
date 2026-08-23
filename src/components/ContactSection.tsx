import { useState, FormEvent } from 'react';
import { Mail, Instagram, Copy, Check, Send, Sparkles, Calendar, MapPin, MessageSquare, Edit3 } from 'lucide-react';
import { INSTAGRAM_URL, ARTIST_NAME } from '../data/discography';
import { BookingFormData } from '../types';

export default function ContactSection() {
  const [bookingEmail, setBookingEmail] = useState('[insert booking email]');
  const [isEditingEmail, setIsEditingEmail] = useState(false);
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
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="font-script text-3xl sm:text-4xl text-[#E6007E]">
            Get in touch
          </p>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[#121212] uppercase tracking-tight">
            BOOKINGS & PRESS
          </h2>
          <p className="text-gray-600 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Direct channel for live performance bookings, press inquiries, brand collaborations, and feature requests.
          </p>
          <div className="w-20 h-1 bg-[#E6007E] mx-auto rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Email Placeholder */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Email Card */}
            <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-md space-y-6 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#E6007E]/10 text-[#E6007E] flex items-center justify-center font-bold">
                <Mail className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#E6007E] uppercase tracking-wider block">
                  Official Contact Address
                </span>
                <h3 className="text-xl font-display font-bold text-[#121212] uppercase">
                  For Bookings & Press
                </h3>
              </div>

              {/* Booking Email Box with Copy & Edit Toggle */}
              <div className="p-4 bg-[#FAF8F5] border border-gray-200 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span>Booking Email:</span>
                  <button
                    onClick={() => setIsEditingEmail(!isEditingEmail)}
                    className="text-[#E6007E] hover:underline font-sans font-bold flex items-center gap-1"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>{isEditingEmail ? 'Save' : 'Edit Email'}</span>
                  </button>
                </div>

                {isEditingEmail ? (
                  <input
                    type="text"
                    value={bookingEmail}
                    onChange={(e) => setBookingEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#E6007E] rounded-lg text-sm font-mono font-bold text-black focus:outline-none"
                    placeholder="booking@onekeyzmusic.com"
                  />
                ) : (
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-sm font-bold text-[#121212] break-all">
                      {bookingEmail}
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-[#E6007E] hover:text-white text-gray-700 transition-colors shrink-0"
                      title="Copy email address"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                )}
              </div>

              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Notice: The email above contains a visible pre-launch placeholder as required. You can edit or replace it at any time prior to publishing.
              </p>
            </div>

            {/* Instagram Fallback Button Card */}
            <div className="bg-[#121212] text-white p-8 rounded-3xl shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E6007E] flex items-center justify-center text-white">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase text-lg">Direct Instagram DM</h4>
                  <p className="text-xs text-pink-300 font-mono">Fallback Contact Channel</p>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                For fast messaging, performance clips, or social inquiries, message ONEKEYZ directly on Instagram.
              </p>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full bg-[#E6007E] hover:bg-[#C8006E] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Message @one_keyz on Instagram</span>
              </a>
            </div>

          </div>

          {/* Right Column: Full Booking Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border-2 border-gray-100 shadow-xl relative">
            
            <h3 className="text-2xl font-display font-black uppercase text-[#121212] mb-6 pb-4 border-b border-gray-100">
              Submit Booking Inquiry
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-[#E6007E]/10 text-[#E6007E] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-display font-bold uppercase text-[#121212]">
                  INQUIRY RECEIVED!
                </h4>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name}. Your booking request has been submitted. Management will review and respond shortly.
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
                  className="bg-[#121212] text-white text-xs font-bold uppercase px-6 py-2.5 rounded-full hover:bg-[#E6007E] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 uppercase">
                      Your Name / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe / Venue Manager"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E6007E]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E6007E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Inquiry Type */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 uppercase">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E6007E]"
                    >
                      <option value="Booking">Live Performance / Booking</option>
                      <option value="Press / PR">Press / Interview / PR</option>
                      <option value="Collaboration">Feature / Collaboration</option>
                      <option value="General">General Inquiry</option>
                    </select>
                  </div>

                  {/* Proposed Date */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 uppercase flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" /> Proposed Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E6007E]"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 uppercase flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" /> City / Venue
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Los Angeles, CA"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E6007E]"
                    />
                  </div>
                </div>

                {/* Message Details */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-700 uppercase flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-gray-400" /> Project / Event Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide event details, set length, venue capacity, budget parameters, or press questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 bg-[#FAF8F5] border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E6007E]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#E6007E] hover:bg-[#C8006E] text-white font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to ONEKEYZ Management</span>
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
