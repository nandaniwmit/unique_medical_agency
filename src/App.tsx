import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, MessageSquare, ArrowUp, AlertTriangle, X, Shield, 
  Scale, FileWarning, Clock, Activity 
} from 'lucide-react';
import { AppTab } from './types';

// Import our modular components
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';
import WhatsAppOrderView from './components/WhatsAppOrderView';
import AIAssistant from './components/AIAssistant';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [prefilledMedicine, setPrefilledMedicine] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check initial preference
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  // Modal control
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll height to show back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync dark mode class on HTML document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Global Tracking Hook for automatic React SPA tracking
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid'));
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      // Prioritize activeTab as this is a state-based SPA, fallback to URL path segment
      if (activeTab && activeTab !== 'home') {
        return activeTab.charAt(0).toUpperCase() + activeTab.slice(1);
      }
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, visitor_id: visitorId, session_id: sessionId,
        page_name: getPageName(), referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }).catch(err => {});
    };

    const sendExitPayload = () => {
      const payload = { cid: cid, session_id: sessionId, page_name: getPageName(), action: 'page_change' };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), keepalive: true }).catch(err => {});
      }
    };

    sendInitPayload();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { sendExitPayload(); }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      sendExitPayload();
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', sendExitPayload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [activeTab]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = (type: 'privacy' | 'terms' | 'disclaimer') => {
    setModalType(type);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-slate-950 transition-colors duration-300 antialiased selection:bg-emerald-500/20 selection:text-emerald-900 dark:selection:text-emerald-400">
      
      {/* 1. TOP EMERGENCY BANNER / ANNOUNCEMENT RAIL */}
      <div className="w-full bg-rose-600 dark:bg-rose-950 text-white px-4 py-2.5 text-xs font-mono flex items-center justify-between gap-4 border-b border-rose-700 select-none">
        <div className="flex items-center gap-2 overflow-hidden">
          <AlertTriangle className="w-4 h-4 text-rose-200 animate-pulse shrink-0" />
          <span className="font-semibold uppercase tracking-wider shrink-0 text-rose-100">Store Hours:</span>
          <span className="truncate leading-normal text-slate-100 font-sans">
            हम सुबह 8:00 बजे से रात 9:00 बजे तक (सातों दिन) खुले हैं। emergency medicine stock inquiry call directly on <strong>09821293749</strong>.
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[10px] uppercase font-bold tracking-widest shrink-0">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-300">Registered Pharmacist Active</span>
          </span>
        </div>
      </div>

      {/* 2. STICKY HEADER */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* 3. CORE VIEWPORT ZONE (TABS ROUTER) */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {activeTab === 'home' && (
              <HomeView 
                setActiveTab={setActiveTab} 
                setPrefilledMedicine={setPrefilledMedicine} 
              />
            )}
            
            {activeTab === 'about' && (
              <AboutView />
            )}

            {activeTab === 'services' && (
              <ServicesView setActiveTab={setActiveTab} />
            )}

            {activeTab === 'gallery' && (
              <GalleryView />
            )}

            {activeTab === 'contact' && (
              <ContactView />
            )}

            {activeTab === 'whatsapp' && (
              <WhatsAppOrderView 
                prefilledMedicine={prefilledMedicine} 
                setPrefilledMedicine={setPrefilledMedicine} 
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. FOOTER */}
      <Footer 
        setActiveTab={setActiveTab} 
        openModal={handleOpenModal} 
      />

      {/* 5. FLOATING WIDGETS & SIDEBAR UTILITIES */}
      <div className="fixed bottom-24 right-6 z-40 flex flex-col gap-3">
        {/* Floating Call Button */}
        <motion.a
          href="tel:09821293749"
          className="p-4 rounded-full bg-sky-600 hover:bg-sky-500 text-white shadow-lg border border-sky-700/30 flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Call store directly"
        >
          <Phone className="w-5 h-5" />
        </motion.a>

        {/* Floating WhatsApp Quick Order Button */}
        <motion.button
          onClick={() => { setActiveTab('whatsapp'); scrollToTop(); }}
          className="p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg border border-emerald-700/30 flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Open WhatsApp order form"
        >
          <MessageSquare className="w-5 h-5" />
        </motion.button>

        {/* Back To Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="p-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-md hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* 6. AI ASSISTANT PANEL */}
      <AIAssistant />

      {/* 7. INTERACTIVE LEGAL POLICY MODALS */}
      <AnimatePresence>
        {modalType !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setModalType(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl overflow-y-auto max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/30 text-accent-med border border-slate-200/50 dark:border-slate-800">
                    {modalType === 'privacy' && <Shield className="w-6 h-6" />}
                    {modalType === 'terms' && <Scale className="w-6 h-6" />}
                    {modalType === 'disclaimer' && <FileWarning className="w-6 h-6 text-rose-500" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-950 dark:text-white font-display">
                      {modalType === 'privacy' && "Privacy Policy / गोपनीयता नीति"}
                      {modalType === 'terms' && "Terms & Conditions / नियम व शर्तें"}
                      {modalType === 'disclaimer' && "Clinical Medical Disclaimer"}
                    </h3>
                    <p className="text-[10px] font-mono uppercase text-slate-400 mt-0.5">यूनिक मेडिकल एजेन्सी • TEKARI</p>
                  </div>
                </div>

                <button
                  onClick={() => setModalType(null)}
                  className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body Content */}
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
                
                {modalType === 'privacy' && (
                  <>
                    <p className="font-bold text-slate-900 dark:text-white">1. Data Collected for Deliveries (डेटा संग्रह)</p>
                    <p>At Unique Medical Agency, we collect name, WhatsApp phone numbers, optional email addresses, and detailed physical delivery addresses solely to facilitate drug preparation, store pickup coordination, or delivery queries.</p>
                    
                    <p className="font-bold text-slate-900 dark:text-white">2. Strict Prescription Records (पर्चे का डेटा)</p>
                    <p>Physician prescription photographs uploaded via our simulator are reviewed strictly by our certified pharmacist for Schedule H regulatory compliance and are stored securely. We never sell or share prescription history with external marketing services.</p>
                    
                    <p className="font-bold text-slate-900 dark:text-white">3. Third Party Security (तृतीय पक्ष सुरक्षा)</p>
                    <p>Since your final order is transmitted to us over official WhatsApp channels, WhatsApp's standard terms of end-to-end encryption apply. No public indexing of your requested medications takes place.</p>
                  </>
                )}

                {modalType === 'terms' && (
                  <>
                    <p className="font-bold text-slate-900 dark:text-white">1. Prescription Mandatory Laws (पर्चे की अनिवार्यता)</p>
                    <p>We strictly adhere to regulatory medical standards in Bihar, India. Lifesaving and high-dose medications cannot be packed or delivered unless a legitimate, stamped, and signed physical doctor's prescription is provided during the transaction.</p>
                    
                    <p className="font-bold text-slate-900 dark:text-white">2. Genuine Stock Audits (मूल दवा की गारंटी)</p>
                    <p>We guarantee 100% genuine products sourced directly from authorized medical wholesalers. However, batch revisions, MRP changes, and packaging color shifts from pharmaceutical brands are outside our store control.</p>
                    
                    <p className="font-bold text-slate-900 dark:text-white">3. Delivery Limitations (सीमाएं)</p>
                    <p>Nearby delivery and senior citizen services are subject to pharmacist availability and seasonal weather conditions inside Tekari territory boundaries. Same-day orders should be sent before 5:00 PM.</p>
                  </>
                )}

                {modalType === 'disclaimer' && (
                  <>
                    <div className="p-4 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 text-xs flex gap-3">
                      <FileWarning className="w-5 h-5 shrink-0 mt-0.5" />
                      <p><strong>CRITICAL MEDICAL NOTICE:</strong> The virtual assistant, medical directories, and pharmacist tips hosted on this application are provided strictly for educational guidelines and store inquiry purposes. They DO NOT replace expert clinical advice.</p>
                    </div>
                    
                    <p>1. **No Professional Diagnosis**: Do not use the information found on this platform to treat a serious infection, chronic illness, or physical trauma without a physician's presence.</p>
                    
                    <p>2. **Emergency Protocol**: If you or your family members are experiencing severe chest pain, extreme breathlessness, high-grade unconscious fever, or critical poisoning, please immediately rush to the nearest Government Hospital or call emergency medical ambulance services in Gaya/Tekari territory.</p>
                  </>
                )}

              </div>

              {/* Close Footer Button */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex justify-end">
                <button
                  onClick={() => setModalType(null)}
                  className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 cursor-pointer"
                >
                  I Understand / ठीक है
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
