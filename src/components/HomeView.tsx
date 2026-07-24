import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, Phone, MessageSquare, MapPin, Check, Star, HelpCircle, 
  ChevronDown, ChevronUp, Calendar, ArrowRight, Gift, Percent,
  Sparkles, ShieldCheck, Clock, Users, BadgeAlert
} from 'lucide-react';
import { AppTab, MedicineItem, HealthTip } from '../types';
import { 
  SERVICES_DATA, CATEGORIES_DATA, MEDICINES_DATA, 
  TESTIMONIALS_DATA, FAQ_DATA, BLOG_PREVIEW_DATA, OFFERS_DATA 
} from '../data';

interface HomeViewProps {
  setActiveTab: (tab: AppTab) => void;
  setPrefilledMedicine: (name: string) => void;
}

export default function HomeView({ setActiveTab, setPrefilledMedicine }: HomeViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [healthTips, setHealthTips] = useState<HealthTip[]>([]);
  const [tipLoading, setTipLoading] = useState(true);

  // Fetch health tips from our server API
  useEffect(() => {
    async function fetchTips() {
      try {
        const res = await fetch('/api/health-tips');
        if (res.ok) {
          const data = await res.json();
          setHealthTips(data.tips || []);
        }
      } catch (err) {
        console.error("Failed to load health tips:", err);
      } finally {
        setTipLoading(false);
      }
    }
    fetchTips();
  }, []);

  // Filter medicines based on search and category
  const filteredMedicines = MEDICINES_DATA.filter(med => {
    const matchesSearch = med.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (med.hindiName && med.hindiName.includes(searchQuery)) ||
                          med.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (med.hindiPurpose && med.hindiPurpose.includes(searchQuery));
    const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleInquireAvailability = (medName: string) => {
    setPrefilledMedicine(medName);
    setActiveTab('whatsapp');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950/40 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/pharmacy_hero_banner_1784539167310.jpg" 
            alt="Unique Medical Agency Interior" 
            className="w-full h-full object-cover object-center opacity-35 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl space-y-6">
            
            {/* Promo Tag */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>100% Genuine & Trusted Local Pharmacy</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight">
                यूनिक मेडिकल <span className="text-accent-med">एजेन्सी</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-light text-slate-200">
                Your Trusted Pharmacy in Tekari
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-light"
            >
              Providing genuine medicines, premium healthcare products, surgical supplies, infant baby care, daily personal care, and essential medical equipment at the most affordable prices.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-3"
            >
              <a
                href="tel:09821293749"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent-med hover:bg-emerald-700 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-xl transition-all duration-300 text-sm sm:text-base cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: 09821293749</span>
              </a>

              <button
                onClick={() => setActiveTab('whatsapp')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 font-semibold transition-all duration-300 text-sm sm:text-base cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Order (पर्चा भेजें)</span>
              </button>

              <a
                href="https://maps.google.com/?q=Tekari+Bihar"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-900 text-slate-300 border border-slate-800 hover:text-white font-medium transition-all duration-300 text-sm cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>Get Directions</span>
              </a>
            </motion.div>

            {/* Emergency Ribbon Inside Hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-6 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-400 font-mono"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
              </span>
              <span>EMERGENCY DIRECT LINE: <a href="tel:09821293749" className="text-rose-400 font-bold hover:underline">09821293749</a> (8:00 AM - 9:00 PM)</span>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. REAL-TIME MEDICINE SEARCH BOX & GENERAL DIRECTORY */}
      <section className="py-12 -mt-10 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200/60 dark:border-slate-800/80 p-6 sm:p-8">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-accent-med uppercase tracking-wider font-mono">Live Medicine Directory</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
                Search & Check Medicine Availability
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Type the name of any tablet, capsule, syrup, or device to check price, purpose, and instant availability.
              </p>
            </div>

            {/* Live Counter */}
            <div className="bg-slate-100 dark:bg-slate-800/80 rounded-2xl px-4 py-3 border border-slate-200/50 dark:border-slate-700/50 flex items-center gap-3 shrink-0">
              <Clock className="w-5 h-5 text-accent-med" />
              <div>
                <p className="text-[10px] uppercase font-mono text-slate-500 dark:text-slate-400 leading-none">In-Store Stock</p>
                <p className="text-sm font-bold text-slate-800 dark:text-white mt-1">2,500+ Genuine Products</p>
              </div>
            </div>
          </div>

          {/* Search Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search paracetamol, Becosules, syrup, BP machine... (English या हिंदी में नाम लिखें)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-accent-med transition-all duration-200 text-sm font-medium"
              />
            </div>
            
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-accent-med transition-all duration-200 text-sm font-semibold cursor-pointer"
            >
              <option value="All">All Categories / सभी श्रेणियां</option>
              {CATEGORIES_DATA.map(c => (
                <option key={c.id} value={c.tag}>{c.name} ({c.hindiName})</option>
              ))}
            </select>
          </div>

          {/* Category Filter Pills (Quick filter) */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-100 dark:border-slate-800/80 pb-6">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                selectedCategory === 'All' 
                  ? 'bg-accent-med text-white shadow-sm' 
                  : 'bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 text-slate-600 dark:text-slate-300'
              }`}
            >
              All / सब
            </button>
            {CATEGORIES_DATA.map(c => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  selectedCategory === c.tag 
                    ? 'bg-accent-med text-white shadow-sm' 
                    : 'bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 text-slate-600 dark:text-slate-300'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Search Result Listing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredMedicines.slice(0, 6).map((med) => (
                <motion.div
                  layout
                  key={med.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-slate-50 dark:bg-slate-950/20 rounded-2xl p-5 border border-slate-100 dark:border-slate-900 hover:border-emerald-500/30 dark:hover:border-emerald-500/20 hover:shadow-lg dark:hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-base text-slate-950 dark:text-white group-hover:text-accent-med transition-colors duration-200 leading-tight">
                          {med.name}
                        </h3>
                        {med.hindiName && (
                          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                            {med.hindiName}
                          </p>
                        )}
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 uppercase font-mono tracking-wider">
                        {med.type}
                      </span>
                    </div>

                    <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-2.5">
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <strong className="text-slate-400 font-medium">Use:</strong> {med.purpose}
                      </p>
                      {med.hindiPurpose && (
                        <p className="text-[11px] text-slate-400 dark:text-slate-500 italic mt-0.5 font-medium">
                          काम: {med.hindiPurpose}
                        </p>
                      )}
                      {med.dosage && (
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono mt-1.5">
                          Dosage: {med.dosage}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Retail Price</p>
                      <p className="text-sm font-extrabold text-accent-med">{med.price}</p>
                    </div>

                    <button
                      onClick={() => handleInquireAvailability(med.name)}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-accent-med text-accent-med hover:text-white text-xs font-bold transition-all duration-200 cursor-pointer"
                    >
                      <span>Inquire Order</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredMedicines.length === 0 && (
              <div className="col-span-full py-12 text-center space-y-3">
                <div className="inline-flex p-4 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-400 dark:text-slate-600">
                  <BadgeAlert className="w-10 h-10" />
                </div>
                <h4 className="text-base font-bold text-slate-700 dark:text-slate-300">"तो चलिए, हमसे पूछिए!" Medicine Not Found in Instant Search</h4>
                <p className="text-xs text-slate-500 dark:text-slate-500 max-w-md mx-auto leading-relaxed">
                  We stock thousands of medicines in Tekari store which may not be indexed here. Simply send us your prescription or requirements directly on WhatsApp to get instant confirmation!
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setActiveTab('whatsapp')}
                    className="px-5 py-2.5 rounded-xl bg-accent-med hover:bg-emerald-700 text-white font-semibold text-xs transition-all duration-200 shadow-md cursor-pointer"
                  >
                    Send WhatsApp Inquiry Form
                  </button>
                </div>
              </div>
            )}
          </div>

          {filteredMedicines.length > 0 && (
            <div className="mt-8 text-center bg-slate-50 dark:bg-slate-950/20 p-4 rounded-2xl border border-slate-100 dark:border-slate-900 text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              *Above medicines list includes popular local generic & ethical products. Prices may vary based on market revisions. For complex specialty medicine availability inquiries, please use our <strong>WhatsApp order portal</strong>.
            </div>
          )}

        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold text-accent-med uppercase tracking-wider font-mono">Our Quality Promise</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
              Why Choose Unique Medical Agency
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400">
              Being a trusted healthcare partner in Tekari, we focus on genuine quality, honest pricing, and professional care for every single customer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "100% Genuine Medicines", desc: "Every capsule and device is sourced directly from licensed distributors with full batch tracking.", icon: ShieldCheck, color: "text-emerald-500" },
              { title: "Experienced Staff", desc: "Guided by knowledgeable pharmacists who understand drug safety, dosages, and patient requirements.", icon: Users, color: "text-blue-500" },
              { title: "Affordable Prices", desc: "Honest discounts on prescription medicines and healthcare products for Tekari community.", icon: Percent, color: "text-amber-500" },
              { title: "Fast Store Service", desc: "No long waiting queues. Your prescriptions are sorted and packed with speed and hygiene.", icon: Clock, color: "text-indigo-500" }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/30 border border-slate-100 dark:border-slate-800/80 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 mb-5 shadow-xs">
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold font-display text-slate-950 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Sub-cards requested */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              { title: "Prescription Medicines", desc: "All specialized healthcare medications readily available for immediate dispense.", icon: Check, color: "text-emerald-500" },
              { title: "Healthcare Products", desc: "Extensive stocks of wellness, baby care, orthopedic and daily hygienic essentials.", icon: Check, color: "text-emerald-500" },
              { title: "Trusted Local Pharmacy", desc: "Serving Tekari, Bigha, Bahelia for years with stellar local customer goodwill.", icon: Check, color: "text-emerald-500" },
              { title: "Easy WhatsApp Support", desc: "No need to remember names; take a snap of prescription and send in one tap.", icon: Check, color: "text-emerald-500" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex gap-3 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-950/10 border border-slate-100 dark:border-slate-900"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">{item.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-500 leading-normal mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. DYNAMIC OFFERS & DISCOUNTS */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-accent-med uppercase tracking-wider font-mono">Exclusive Offers</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900 dark:text-white mt-1">
                Offers, Coupons & Discounts
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-lg shadow-2xs">
              <Gift className="w-4 h-4 text-emerald-500" />
              <span>Show this at counter to claim</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFERS_DATA.map(offer => (
              <div 
                key={offer.id} 
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-dashed border-slate-200 dark:border-slate-800 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Circle cutouts for coupon effect */}
                <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-slate-50 dark:bg-slate-950 -translate-y-1/2 border-r-2 border-dashed border-slate-200 dark:border-slate-800" />
                <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-slate-50 dark:bg-slate-950 -translate-y-1/2 border-l-2 border-dashed border-slate-200 dark:border-slate-800" />
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-emerald-500/10 text-emerald-500 dark:text-emerald-400">
                      {offer.badge}
                    </span>
                    <Percent className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="text-base font-bold text-slate-950 dark:text-white leading-tight">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="bg-slate-50 dark:bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                    CODE: {offer.code}
                  </div>
                  <button 
                    onClick={() => setActiveTab('whatsapp')}
                    className="text-xs font-bold text-accent-med hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Apply on WhatsApp</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SERVICES GRID AT-A-GLANCE */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div className="space-y-3">
              <span className="text-xs font-bold text-accent-med uppercase tracking-wider font-mono">Our Comprehensive Services</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
                Medicines & Healthcare Services
              </h2>
              <p className="text-base text-slate-500 dark:text-slate-400 max-w-2xl">
                We offer extensive clinical products and medicine sales under strict hygiene conditions. Explore our dedicated categories.
              </p>
            </div>

            <button
              onClick={() => { setActiveTab('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-accent-med hover:border-accent-med font-semibold text-sm cursor-pointer"
            >
              View All Services
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <div 
                key={service.id}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/30 border border-slate-100 dark:border-slate-900 hover:border-emerald-500/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 text-accent-med font-bold text-sm shrink-0">
                      {service.id.replace('s', '#')}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-950 dark:text-white">{service.title}</h3>
                      {service.hindiTitle && (
                        <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 -mt-0.5">
                          {service.hindiTitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-900/60">
                  <span className="text-[10px] font-bold text-slate-400 font-mono uppercase tracking-wider">
                    Category: {service.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. WORKING PROCESS */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold text-accent-med uppercase tracking-wider font-mono">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
              Our Medicine Order Process
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
              Get your authentic medicines in 4 very easy, hassle-free steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Background Line */}
            <div className="hidden md:block absolute top-[45px] left-[12%] right-[12%] h-[1.5px] bg-slate-200 dark:bg-slate-800 z-0" />

            {[
              { step: "01", title: "Visit Store / Website", desc: "Come to our Tekari store physically or browse our instant search query online.", hindi: "स्टोर पर आएं या वेबसाइट देखें" },
              { step: "02", title: "Share Prescription", desc: "Present your doctor prescription or send a clear snapshot of it via our WhatsApp order form.", hindi: "पर्चा शेयर करें" },
              { step: "03", title: "Get Medicines", desc: "Our certified pharmacist packs your genuine medicines, ensuring correct expiration audits.", hindi: "दवाएं प्राप्त करें" },
              { step: "04", title: "Easy Payment", desc: "Pay seamlessly via Cash, Google Pay, PhonePe, credit/debit cards or net banking.", hindi: "आसान भुगतान" }
            ].map((p, idx) => (
              <div key={idx} className="relative z-10 text-center space-y-4 group">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-800 shadow-sm mx-auto group-hover:bg-accent-med group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <span className="font-mono text-lg">{p.step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-950 dark:text-white">{p.title}</h3>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold">{p.hindi}</p>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[200px] mx-auto leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. HEALTH TIPS SECTION (REAL-TIME FROM GEMINI & BACKUP) */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div className="space-y-3">
              <span className="text-xs font-bold text-accent-med uppercase tracking-wider font-mono">AI Health Tips & Awareness</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
                Health Awareness & Pharmacist Tips
              </h2>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl">
                Weekly health advice and dosage reminders directly curated by our pharmacy experts to keep Tekari healthy.
              </p>
            </div>
            
            {/* Visual Indicator of Live AI Generation */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase font-mono">
              <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              <span>AI Gen Enabled</span>
            </div>
          </div>

          {tipLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
              {[1, 2, 3].map(n => (
                <div key={n} className="bg-slate-50 dark:bg-slate-900 rounded-2xl h-48 border border-slate-100 dark:border-slate-800" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {healthTips.map((tip, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-emerald-50/20 dark:bg-slate-950/20 border border-emerald-100/50 dark:border-slate-900/60 relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase font-mono tracking-wider text-accent-med px-2 py-0.5 rounded-sm bg-emerald-500/15">
                        {tip.category || "Wellness"}
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">Tip #{idx+1}</span>
                    </div>
                    <h3 className="font-bold text-base text-slate-950 dark:text-white leading-snug">
                      {tip.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {tip.content}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-medium">Verified by Pharmacist</span>
                    <button 
                      onClick={() => handleInquireAvailability("General Advice")}
                      className="text-xs text-accent-med hover:underline font-bold"
                    >
                      Ask Pharmacist
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Static Health tips fallback/articles requested */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-100 dark:border-slate-800/80">
            {BLOG_PREVIEW_DATA.map(blog => (
              <div 
                key={blog.id}
                className="bg-slate-50 dark:bg-slate-950/20 rounded-2xl overflow-hidden border border-slate-200/40 dark:border-slate-900 flex flex-col justify-between"
              >
                <div>
                  <img 
                    src={blog.imageUrl} 
                    alt={blog.title} 
                    className="w-full h-44 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h4 className="font-bold text-sm sm:text-base text-slate-950 dark:text-white leading-snug">
                      {blog.title}
                    </h4>
                    {blog.hindiTitle && (
                      <p className="text-xs text-slate-400 dark:text-slate-500 italic">
                        {blog.hindiTitle}
                      </p>
                    )}
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {blog.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-2">
                  <button 
                    onClick={() => setActiveTab('contact')}
                    className="text-xs font-bold text-accent-med hover:underline flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Full Guide / पूरी जानकारी</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold text-accent-med uppercase tracking-wider font-mono">Customer Feedback</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
              Why Customers Trust Us
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
              Listen to what our local patients and medical practitioners in Tekari have to say about our medicine authenticity and pharmacy support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div 
                key={t.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 fill-current ${i < t.rating ? 'text-amber-400' : 'text-slate-200'}`} />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                  {t.hindiComment && (
                    <p className="text-xs text-slate-400 dark:text-slate-500 italic mt-1 leading-relaxed">
                      "{t.hindiComment}"
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-sm text-slate-950 dark:text-white">{t.name}</h4>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{t.location}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">{t.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Localized Delivery Information Banner */}
          <div className="mt-12 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-sm uppercase font-mono">Local Store Pickup & Delivery Information</span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Live Near Bigha, Bahelia, or Tekari Chowk?
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl">
                We prioritize senior citizen medical orders. Place your medicine requirements or share your prescription via WhatsApp, and pick them up instantly packed or ask about nearby delivery availability.
              </p>
            </div>
            
            <button 
              onClick={() => setActiveTab('whatsapp')}
              className="px-6 py-3 rounded-xl bg-accent-med hover:bg-emerald-700 text-white font-bold text-sm shrink-0 shadow-md shadow-emerald-500/10 cursor-pointer"
            >
              Verify Delivery Coverage
            </button>
          </div>

        </div>
      </section>

      {/* 9. BILINGUAL ACCORDION FAQ */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold text-accent-med uppercase tracking-wider font-mono">Frequently Asked Questions</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
              Pharmacy FAQs / अक्सर पूछे जाने वाले प्रश्न
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
              Clear, honest answers about our product sourcing, prescription guidelines, and local store timings.
            </p>
          </div>

          {/* Accordion container */}
          <div className="space-y-4">
            {FAQ_DATA.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="bg-slate-50 dark:bg-slate-950/20 rounded-2xl border border-slate-100 dark:border-slate-900 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 dark:text-slate-100 hover:text-accent-med dark:hover:text-emerald-400 transition-colors duration-200 cursor-pointer"
                  >
                    <div className="flex gap-3">
                      <HelpCircle className="w-5 h-5 text-accent-med shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span>{faq.question}</span>
                        {faq.hindiQuestion && (
                          <span className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-normal font-display">
                            {faq.hindiQuestion}
                          </span>
                        )}
                      </div>
                    </div>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 border-t border-slate-200/55 dark:border-slate-900 text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
                          <p>{faq.answer}</p>
                          {faq.hindiAnswer && (
                            <p className="text-slate-400 dark:text-slate-500 italic font-display border-l-2 border-emerald-400/50 pl-3">
                              {faq.hindiAnswer}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. GOOGLE MAPS SECTION */}
      <section className="py-2 relative bg-slate-100 dark:bg-slate-950/20 border-t border-b border-slate-200 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            
            <div className="space-y-4">
              <span className="text-xs font-bold text-accent-med uppercase tracking-wider font-mono">Store Direction Map</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                Visit Us at Kespah Road
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Unique Medical Agency is conveniently situated on the active Kespah Road neighborhood in Tekari, Bihar. Easy access for two-wheelers and patients residing in nearby Bigha and Bahelia.
              </p>
              <div className="space-y-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-rose-500 shrink-0" /> <span>WRWR+WG2, Kespah Road, Tekari</span></p>
                <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-500 shrink-0" /> <span>8:00 AM to 9:00 PM (Mon - Sun)</span></p>
              </div>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Tekari+Bihar"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs transition-all duration-200 shadow-sm hover:bg-slate-850 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span>Open in Google Maps App</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 h-[350px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-850">
              <iframe
                title="यूनिक मेडिकल एजेन्सी Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.111956795493!2d84.8344!3d24.9318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d28ffffffffff%3A0xbc8eefd20f28e21!2sTekari%2C%20Bihar%20824236!5e0!3m2!1sen!2sin!4v1784539167310!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 11. CONTACT CTA BANNER */}
      <section className="bg-gradient-to-r from-accent-med to-teal-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight leading-tight">
            Need Authentic Medicines Instantly?
          </h2>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            यूनिक मेडिकल एजेन्सी पर आपकी स्वास्थ्य सुरक्षा हमारी प्राथमिकता है। दवाइयों की उपलब्धता या पर्चे की पुष्टि के लिए हमें अभी फ़ोन या व्हाट्सएप करें।
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-3">
            <a
              href="tel:09821293749"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-extrabold text-sm sm:text-base shadow-lg hover:bg-slate-50 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Phone className="w-5 h-5 text-accent-med" />
              <span>Call store: 09821293749</span>
            </a>

            <button
              onClick={() => setActiveTab('whatsapp')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-900 text-white font-bold text-sm sm:text-base border border-emerald-400/50 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>Order via WhatsApp Form</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
