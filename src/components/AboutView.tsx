import React from 'react';
import { ShieldAlert, Eye, Target, Heart, Handshake, ShieldCheck, Award, Clock } from 'lucide-react';

export default function AboutView() {
  
  const values = [
    { title: "Purity & Authenticity", desc: "No generic compromise. Every medicine is 100% genuine with complete batch verification.", icon: ShieldCheck, color: "text-emerald-500 bg-emerald-500/10" },
    { title: "Caring Customer Service", desc: "Our patients are our family. We spend time listening and explaining correct medication instructions.", icon: Heart, color: "text-rose-500 bg-rose-500/10" },
    { title: "Ethical Standards", desc: "No hoarding or overcharging. We adhere strictly to govt-regulated drug pricing standards.", icon: Handshake, color: "text-blue-500 bg-blue-500/10" },
    { title: "Prompt Service Support", desc: "Ready with critical drugs so patients don't have to wander during medical emergencies.", icon: Clock, color: "text-indigo-500 bg-indigo-500/10" }
  ];

  const timelineSteps = [
    { year: "2019", title: "The Humble Foundation", desc: "Started as a micro medicine outlet on Kespah Road with a simple goal of supplying genuine medicines to Bigha and Bahelia colony." },
    { year: "2021", title: "COVID-19 Emergency Resilience", desc: "Served round-the-clock during global pandemic peak, organizing oxygen concentrators, digital monitors, and certified life-saving drugs for Tekari families." },
    { year: "2024", title: "Modernization & Devices expansion", desc: "Upgraded store infrastructure to scientific climate-controlled medicine storage and expanded into orthopedic support, baby wellness, and digital monitors." },
    { year: "2026", title: "Goes Digital (WhatsApp orders)", desc: "Launched this instant web inquiry and direct WhatsApp prescription-upload portal, letting local residents inquire and secure stock before visiting." }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950/40 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Page Title Header */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80" 
            alt="Medical Backdrop" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-2">
          <span className="text-xs font-bold text-accent-med uppercase tracking-wider font-mono">Our Legacy of Trust</span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight leading-tight">
            About यूनिक मेडिकल एजेन्सी
          </h1>
          <p className="text-sm sm:text-base text-slate-400 font-light max-w-xl mx-auto">
            Providing reliable health and pharmaceutical services for Tekari, Bigha, Bahelia and surrounding regions since inception.
          </p>
        </div>
      </section>

      {/* Business Story and Owner Message */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-accent-med uppercase tracking-wider font-mono">Our History</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-950 dark:text-white">
                The Story Behind Unique Medical Agency
              </h2>
            </div>
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-350 leading-relaxed font-light">
              Founded on the pillars of **integrity and clinical authenticity**, <strong>यूनिक मेडिकल एजेन्सी (Unique Medical Agency)</strong> was established to bridge a crucial gap in Tekari—access to 100% genuine, unadulterated specialty medicines and health supplies. Under-certified medical sales protocols, we protect our local families from expired or sub-standard products.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-350 leading-relaxed font-light">
              Over the years, we have grown from a local neighborhood store into Tekari's premier destination for digital healthcare equipment, infant dietary formulas, geriatric orthopedic braces, and essential wellness supplements. We are extremely proud to be a highly trusted cornerstone of health for thousands of local residents on Kespah Road and nearby villages.
            </p>

            {/* Owner Quote Block */}
            <div className="p-5 rounded-2xl bg-emerald-500/10 border-l-4 border-accent-med text-slate-700 dark:text-slate-300">
              <span className="text-[10px] uppercase font-mono tracking-widest text-accent-med font-bold">Owner Message / संदेश</span>
              <p className="text-sm italic mt-2 font-medium">
                "दवा बेचना हमारे लिए सिर्फ एक व्यवसाय नहीं है, बल्कि टेकारी के हमारे परिवारों के स्वास्थ्य और सुरक्षा की जिम्मेदारी है। हम सदैव आपके भरोसे पर खरा उतरने का प्रयास करते हैं।"
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-white">— श्री रामप्रसाद सिंह (Owner / संस्थापक)</span>
                <span className="text-[10px] font-mono text-slate-400">Tekari, Bihar</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
                alt="Pharmacist dispensing medicines" 
                className="w-full h-[320px] object-cover hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-800 flex items-center gap-3.5 shadow-2xs">
                <Award className="w-8 h-8 text-accent-med shrink-0" />
                <div>
                  <p className="text-xl font-bold text-slate-900 dark:text-white leading-none">100%</p>
                  <p className="text-[10px] text-slate-400 font-mono mt-1 uppercase">Genuine Certified</p>
                </div>
              </div>
              
              <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-800 flex items-center gap-3.5 shadow-2xs">
                <Clock className="w-8 h-8 text-sky-500 shrink-0" />
                <div>
                  <p className="text-xl font-bold text-slate-900 dark:text-white leading-none">7 Days</p>
                  <p className="text-[10px] text-slate-400 font-mono mt-1 uppercase">Active Service</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Mission */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-900 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 flex items-center justify-center text-accent-med">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-950 dark:text-white">Our Mission / हमारा लक्ष्य</h3>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                To serve as Tekari's premier and most reliable health custodian by ensuring every single customer receives top-tier authentic medicines, specialized medical advice, and warm human care without any compromise.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-900 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 flex items-center justify-center text-blue-500">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-950 dark:text-white">Our Vision / हमारी परिकल्पना</h3>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                To modernize neighborhood pharmacy care in rural Bihar. By integrating high-tech digital devices, immediate online prescription inquiry methods, and direct WhatsApp packing, we aim to make healthcare seamless.
              </p>
            </div>

          </div>

          {/* Core Values */}
          <div className="space-y-10">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-accent-med uppercase tracking-wider font-mono">Principles we stand by</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">Our Core Business Values</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/10 border border-slate-150 dark:border-slate-850">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${v.color}`}>
                    <v.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-slate-950 dark:text-white mb-2">{v.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Timeline of History */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950/10 border-t border-slate-200 dark:border-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-16">
            <span className="text-xs font-bold text-accent-med uppercase tracking-wider font-mono">Our Growth Story</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              The Historical Journey
            </h2>
          </div>

          <div className="relative border-l-2 border-emerald-400/30 pl-6 sm:pl-8 space-y-10 ml-4">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Bullet */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-accent-med flex items-center justify-center z-10" />
                
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-850 shadow-2xs space-y-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-sm bg-emerald-500/10 text-accent-med">
                    {step.year}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
