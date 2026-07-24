import React, { useState } from 'react';
import { SERVICES_DATA } from '../data';
import { 
  FileText, Pill, Activity, Baby, Heart, Cpu, 
  Scissors, ShieldAlert, Droplet, Sparkles, Phone, ArrowRight 
} from 'lucide-react';
import { AppTab } from '../types';

interface ServicesViewProps {
  setActiveTab: (tab: AppTab) => void;
}

export default function ServicesView({ setActiveTab }: ServicesViewProps) {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Map dynamic icon name to Lucide Icon component
  const iconMap: Record<string, any> = {
    FileText, Pill, Activity, Baby, Heart, Cpu, Scissors, ShieldAlert, Droplet, Sparkles
  };

  const categories = ['All', 'Core Healthcare', 'General Care', 'Wellness', 'Family Health', 'Devices', 'Specialized'];

  const filteredServices = SERVICES_DATA.filter(service => {
    return filterCategory === 'All' || service.category === filterCategory;
  });

  return (
    <div className="bg-slate-50 dark:bg-slate-950/40 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Title Header */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" 
            alt="Services Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-2">
          <span className="text-xs font-bold text-accent-med uppercase tracking-wider font-mono">Our Pharmacy Offerings</span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight leading-tight">
            Our Healthcare Services
          </h1>
          <p className="text-sm sm:text-base text-slate-400 font-light max-w-xl mx-auto">
            Providing high-quality prescription fills, OTC daily medications, baby essentials, and durable medical equipment under certified expert supervision.
          </p>
        </div>
      </section>

      {/* Services Grid & Categories Filters */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                filterCategory === cat
                  ? 'bg-accent-med text-white shadow-md shadow-emerald-500/10 scale-105'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Pill;
            return (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-800/80 hover:shadow-xl hover:border-emerald-500/25 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Icon & Category Header */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500/10 text-accent-med group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[9px] font-bold font-mono tracking-widest text-slate-400 uppercase bg-slate-100 dark:bg-slate-950 px-2 py-1 rounded-md">
                      {service.category}
                    </span>
                  </div>

                  {/* Titles */}
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white group-hover:text-accent-med transition-colors duration-200">
                      {service.title}
                    </h3>
                    {service.hindiTitle && (
                      <p className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 font-display">
                        {service.hindiTitle}
                      </p>
                    )}
                  </div>

                  {/* Descriptions */}
                  <div className="space-y-2 border-t border-slate-100 dark:border-slate-950 pt-4">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                    {service.fullDescription && (
                      <p className="text-xs text-slate-400 dark:text-slate-500 italic leading-relaxed">
                        {service.fullDescription}
                      </p>
                    )}
                  </div>
                </div>

                {/* Instant Action CTA */}
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-950 flex items-center justify-between">
                  <a
                    href="tel:09821293749"
                    className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-accent-med"
                  >
                    <Phone className="w-3.5 h-3.5 text-accent-med" />
                    <span>Call Store Inquiry</span>
                  </a>
                  
                  <button
                    onClick={() => {
                      setActiveTab('whatsapp');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-accent-med hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Order Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic Warning Alert on prescriptions */}
        <div className="mt-16 bg-red-500/10 border-l-4 border-rose-500 p-6 rounded-2xl max-w-4xl mx-auto flex gap-4 items-start">
          <ShieldAlert className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Important Medicine Sales Note / आवश्यक सूचना</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              At Unique Medical Agency, we strictly comply with Ministry of Health & drug administration guidelines. Scheduled medications, restricted antibiotics, and specialty hormonal pills cannot be dispensed without a physical or digital stamp prescription from a qualified physician. Thank you for helping us keep Tekari drug consumption safe.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}
