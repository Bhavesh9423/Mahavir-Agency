import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Mahavir Agency! I would like to inquire about stationery supplies.`
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
            Visit Store or <span className="text-gradient-gold">Contact Us</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Have questions about bulk orders, institutional contracts, or retail availability? Visit our store or reach out directly!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Store Details Card */}
          <GlassCard glowColor="blue" className="p-8 space-y-6 h-full flex flex-col justify-between">
            <div className="space-y-6">
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
                  <a href="mailto:mahaviragency3883@gmail.com" className="text-sm font-semibold text-white mt-0.5 hover:text-amber-400 transition-colors block">
                    mahaviragency3883@gmail.com
                  </a>
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
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-6 border-t border-white/10 mt-6">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-5 h-5" /> Instant WhatsApp Inquiry
              </button>
            </div>
          </GlassCard>

          {/* Embedded Google Map Preview Box */}
          <GlassCard glowColor="amber" className="p-8 h-full flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <h3 className="text-2xl font-bold font-poppins text-white flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-amber-400" /> Interactive Store Map
                </h3>
                <a
                  href="https://www.google.com/maps/search/Mahavir+Agency/@17.2836042,74.1777638,17z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
                >
                  Get Directions <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="w-full h-80 rounded-2xl overflow-hidden bg-slate-950 border border-white/10 relative flex items-center justify-center">
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
                  className="absolute px-5 py-3 rounded-2xl bg-slate-900/90 hover:bg-blue-600 text-white text-xs font-bold border border-white/20 shadow-2xl flex items-center gap-2 transition-all hover:scale-105"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
                  Mahavir Agency (Karad) • Click for Map
                </a>
              </div>
            </div>

            <p className="text-xs text-slate-400 text-center leading-relaxed pt-2">
              Located in Shaniwar Peth, Karad. Convenient wholesale and retail counter parking available.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
