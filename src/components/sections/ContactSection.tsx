import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    clientType: 'Wholesale Buyer',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    onShowToast(`Thank you ${formData.name}! Your inquiry has been submitted. We will contact you at ${formData.phone}.`);
    setFormData({
      name: '',
      phone: '',
      email: '',
      clientType: 'Wholesale Buyer',
      message: ''
    });
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Mahavir Agency! I have an urgent stationery inquiry.\n` +
      `Name: ${formData.name || 'Customer'}\n` +
      `Type: ${formData.clientType}\n` +
      `Message: ${formData.message || 'I would like to inquire about stationery supplies.'}`
    );
    window.open(`https://wa.me/919423262994?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#070b13] text-white relative overflow-hidden">
      {/* Background Lighting Blurs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/30">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins mt-4">
            Visit Store or Request <span className="text-gradient-gold">Wholesale Quote</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Have questions about bulk orders, school term supplies, or custom printing? Drop us a message or visit our wholesale showroom!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Information & Store Details */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard glowColor="blue" className="p-8 space-y-6">
              <h3 className="text-2xl font-bold font-poppins text-white border-b border-white/10 pb-4">
                Store Details
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400">Store Address</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">Mahavir Agency & Novelty</p>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    246, Shaniwar Peth, Front of Shivraj Dhaba Parcel, Karad. Maharashtra 415110
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400">Phone & Orders</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">+91 9423262994</p>
                  <p className="text-xs text-slate-300 mt-0.5">+91 9822510022 (Wholesale Counter)</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400">Email Address</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">sales@mahaviragency.com</p>
                  <p className="text-xs text-slate-300">info@mahaviragency.com</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400">Business Hours</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">Monday - Sunday: 10:00 AM - 8:30 PM</p>
                  <p className="text-xs font-bold text-amber-400 mt-0.5">Tuesday: Closed</p>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-5 h-5" /> Instant WhatsApp Inquiry
                </button>
              </div>
            </GlassCard>

            {/* Embedded Google Map Preview Box */}
            <div className="rounded-3xl border border-white/10 overflow-hidden bg-slate-900 shadow-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-400" /> Interactive Store Map
                </span>
                <a
                  href="https://www.google.com/maps/search/Mahavir+Agency/@17.2836042,74.1777638,17z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-bold text-amber-400 hover:underline flex items-center gap-1"
                >
                  Get Directions <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-44 rounded-2xl overflow-hidden bg-slate-950 border border-white/5 relative flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
                  alt="Store Location Map Preview"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <a
                  href="https://www.google.com/maps/search/Mahavir+Agency/@17.2836042,74.1777638,17z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-blue-600 text-white text-xs font-bold border border-white/20 shadow-2xl flex items-center gap-2 transition-all"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
                  Mahavir Agency (Karad) • Click for Map
                </a>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <GlassCard glowColor="amber" className="p-8 md:p-10">
              <h3 className="text-2xl font-bold font-poppins text-white mb-2">
                Send Bulk Inquiry / Message
              </h3>
              <p className="text-xs text-slate-300 mb-8 leading-relaxed">
                Fill out the form below to receive customized wholesale pricing or retail product availability.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 9423262994"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rajesh@school.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Customer Type
                    </label>
                    <select
                      value={formData.clientType}
                      onChange={(e) => setFormData({ ...formData, clientType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Wholesale Buyer">Wholesale Buyer / Dealer</option>
                      <option value="School Procurement">School / Academy Principal</option>
                      <option value="Corporate Office">Corporate Office Manager</option>
                      <option value="College Student">College Student / Individual</option>
                      <option value="Retail Customer">Retail Walk-In Customer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Inquiry Message / Product Quantities *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention the products, quantities (e.g. 50 A4 Paper Reams, 100 Gel Pen Boxes), or general inquiries..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5" /> Submit Wholesale Inquiry
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
