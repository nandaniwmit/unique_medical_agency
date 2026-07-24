import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ShoppingCart, Activity, Sun, Moon } from 'lucide-react';
import { AppTab } from '../types';

interface HeaderProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Header({ activeTab, setActiveTab, darkMode, setDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems: { id: AppTab; label: string; hindiLabel: string }[] = [
    { id: 'home', label: 'Home', hindiLabel: 'मुख्य पृष्ठ' },
    { id: 'about', label: 'About', hindiLabel: 'हमारे बारे में' },
    { id: 'services', label: 'Services', hindiLabel: 'सेवाएं' },
    { id: 'gallery', label: 'Gallery', hindiLabel: 'गैलरी' },
    { id: 'contact', label: 'Contact', hindiLabel: 'संपर्क करें' },
    { id: 'whatsapp', label: 'WhatsApp Order', hindiLabel: 'व्हाट्सएप ऑर्डर' }
  ];

  const handleTabChange = (tabId: AppTab) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => handleTabChange('home')}>
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-med text-white shadow-md shadow-emerald-500/10 hover:scale-105 transition-transform duration-300">
              <Activity className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-slate-800 dark:text-white leading-tight">
                यूनिक मेडिकल <span className="text-accent-med">एजेन्सी</span>
              </h1>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">
                Unique Medical Agency
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'text-accent-med' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-accent-med dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <span className="flex flex-col items-center">
                    <span>{item.label}</span>
                    <span className="text-[9px] opacity-75 font-normal tracking-wide -mt-0.5">{item.hindiLabel}</span>
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent-med rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions & Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer"
              title={darkMode ? "Light Mode" : "Dark Mode"}
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            {/* Direct Call Button */}
            <a
              href="tel:09821293749"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-200 dark:border-emerald-900/50 text-accent-med bg-emerald-50/50 dark:bg-emerald-950/20 hover:bg-emerald-500 hover:text-white dark:hover:bg-accent-med transition-all duration-300 text-sm font-medium cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] uppercase font-mono tracking-wider opacity-90">Call Store</span>
                <span className="text-xs font-semibold">98212 93749</span>
              </div>
            </a>

            {/* Quick WhatsApp Order Button */}
            <button
              onClick={() => handleTabChange('whatsapp')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-med hover:bg-emerald-700 text-white shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 text-sm font-medium cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-100 font-semibold">Order Now</span>
                <span className="text-xs">व्हाट्सएप ऑर्डर</span>
              </div>
            </button>
          </div>

          {/* Mobile Actions and Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
              {menuItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-all duration-200 ${
                      isActive 
                        ? 'bg-emerald-50 dark:bg-emerald-950/30 text-accent-med' 
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-normal text-slate-400 dark:text-slate-500 font-display">
                      {item.hindiLabel}
                    </span>
                  </button>
                );
              })}

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <a
                  href="tel:09821293749"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-emerald-200 dark:border-emerald-900/50 text-accent-med bg-emerald-50/50 dark:bg-emerald-950/20 font-medium text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: 09821293749</span>
                </a>
                
                <button
                  onClick={() => handleTabChange('whatsapp')}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-accent-med text-white font-medium text-sm shadow-md shadow-emerald-500/10"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>WhatsApp Order (पर्चे अपलोड करें)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
