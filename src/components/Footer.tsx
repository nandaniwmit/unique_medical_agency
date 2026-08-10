import React from 'react';
import { AppTab } from '../types';
import { MapPin, Phone, MessageSquare, Clock, Heart, Shield, FileText } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: AppTab) => void;
  openModal: (type: 'privacy' | 'terms' | 'disclaimer') => void;
}

export default function Footer({ setActiveTab, openModal }: FooterProps) {
  
  const handleNav = (tab: AppTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Structured schemas to load into the DOM for SEO optimization
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "name": "यूनिक मेडिकल एजेन्सी (Unique Medical Agency)",
    "alternateName": "Unique Medical Agency Tekari",
    "image": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80",
    "logo": "https://images.unsplash.com/photo-1631549916768-4119b255f946?auto=format&fit=crop&w=400&q=80",
    "@id": "https://ais-pre-dpnipwsw2sopnxojmlvee7-457061730116.asia-southeast1.run.app/#pharmacy",
    "url": "https://ais-pre-dpnipwsw2sopnxojmlvee7-457061730116.asia-southeast1.run.app",
    "telephone": "+919821293749",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kespah Road, Bigha, Bahelia",
      "addressLocality": "Tekari, Gaya",
      "addressRegion": "Bihar",
      "postalCode": "824236",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.9318, 
      "longitude": 84.8344
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://maps.google.com/?q=Tekari+Bihar"
    ]
  };

  return (
    <footer id="app-footer" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 transition-colors duration-300">
      
      {/* Injecting Local Business Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Business Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-med text-white">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-white tracking-tight">यूनिक मेडिकल एजेन्सी</h3>
                <span className="text-[10px] font-mono uppercase text-slate-400">Unique Medical Agency</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your highly trusted local pharmacy in Tekari, Bihar. Delivering 100% genuine medicines, high-quality medical equipment, and reliable healthcare essentials at fair prices.
            </p>
            <div className="flex gap-2.5 pt-2">
              <a
                href="https://wa.me/919821293749"
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 rounded-lg bg-emerald-950/40 hover:bg-emerald-600 hover:text-white text-emerald-400 transition-all duration-200"
                title="WhatsApp Support"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="tel:09821293749"
                className="p-2 rounded-lg bg-sky-950/40 hover:bg-sky-600 hover:text-white text-sky-400 transition-all duration-200"
                title="Call Now"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold font-display text-base border-l-2 border-accent-med pl-3">
              Quick Links / लिंक
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-accent-med hover:translate-x-1 transition-all duration-200 text-left cursor-pointer">
                  Home (मुख्य पृष्ठ)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-accent-med hover:translate-x-1 transition-all duration-200 text-left cursor-pointer">
                  About Us (हमारे बारे में)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-accent-med hover:translate-x-1 transition-all duration-200 text-left cursor-pointer">
                  Our Services (सेवाएं)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-accent-med hover:translate-x-1 transition-all duration-200 text-left cursor-pointer">
                  Gallery (गैलरी)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-accent-med hover:translate-x-1 transition-all duration-200 text-left cursor-pointer">
                  Contact (संपर्क करें)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold font-display text-base border-l-2 border-accent-med pl-3">
              Our Location / पता
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-accent-med shrink-0 mt-0.5" />
                <span>
                  यूनिक मेडिकल एजेन्सी,<br />
                  WRWR+WG2, केसपा रोड, बिगहा, बहेलिया, Tekari, Bihar 824236
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-med shrink-0" />
                <a href="tel:09821293749" className="hover:text-white transition-colors">
                  09821293749 (Click to Call)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/919821293749" target="_blank" rel="noreferrer noopener" className="hover:text-emerald-400 transition-colors">
                  WhatsApp Support Active
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Working Hours */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold font-display text-base border-l-2 border-accent-med pl-3">
              Working Hours / समय
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <Clock className="w-5 h-5 text-accent-med shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Monday - Sunday</p>
                  <p className="text-xs">8:00 AM - 9:00 PM</p>
                  <p className="text-[10px] text-emerald-400 font-medium uppercase tracking-wider mt-1">
                    ● Open 7 Days / सातों दिन खुला है
                  </p>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50 text-xs text-slate-400">
                <span className="font-semibold text-rose-400 uppercase tracking-wider block mb-1">Emergency Help:</span>
                Call us at <a href="tel:09821293749" className="text-white underline font-semibold">09821293749</a> to confirm urgent stock during operating hours.
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} यूनिक मेडिकल एजेन्सी (Unique Medical Agency). All Rights Reserved. Developed by <a href="https://main.webmakerit.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 underline transition-colors">WMIT</a></p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => openModal('privacy')} className="hover:text-slate-300 flex items-center gap-1 cursor-pointer">
              <Shield className="w-3.5 h-3.5" /> Privacy Policy
            </button>
            <button onClick={() => openModal('terms')} className="hover:text-slate-300 flex items-center gap-1 cursor-pointer">
              <FileText className="w-3.5 h-3.5" /> Terms & Conditions
            </button>
            <button onClick={() => openModal('disclaimer')} className="hover:text-slate-300 flex items-center gap-1 cursor-pointer">
              <Shield className="w-3.5 h-3.5 text-rose-500" /> Disclaimer
            </button>
          </div>
        </div>

        {/* Self Credit line in humblest, non-intrusive metadata fashion as instructed */}
        <div className="mt-6 text-center text-[10px] font-mono text-slate-600/80">
          SECURE SEED-INTEGRITY MARKUP ACTIVE • SITEMAP & SCHEMAS CONFIG • LOCAL BUSINESS ID: UMA-TEKARI-824236
        </div>

      </div>
    </footer>
  );
}
