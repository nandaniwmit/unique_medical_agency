import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Send, Mail, CheckCircle2 } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("कृपया नाम और मोबाइल नंबर अवश्य भरें!");
      return;
    }
    setSubmitting(true);
    // Simulate API form post
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', email: '', message: '' });
    setSubmitted(false);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950/40 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Title Header */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80" 
            alt="Contact Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-2">
          <span className="text-xs font-bold text-accent-med uppercase tracking-wider font-mono">Get in Touch with Pharmacists</span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight leading-tight">
            Contact Us / संपर्क करें
          </h1>
          <p className="text-sm sm:text-base text-slate-400 font-light max-w-xl mx-auto">
            Have questions about medicine availability, batch specifications, pricing, or prescription instructions? Reach out directly.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Business Details & Timing */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-accent-med uppercase tracking-wider font-mono">Store Information</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-950 dark:text-white">
                Visit or Reach Out Today
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Unique Medical Agency maintains strict storage safety guidelines. Come visit our Kespah Road store to check batch certifications and buy prescription drugs under pharmacist control.
              </p>
            </div>

            {/* Quick Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-2xs flex gap-4">
                <MapPin className="w-8 h-8 text-rose-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-950 dark:text-white text-sm">Store Address</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal mt-1">
                    WRWR+WG2, केसपा रोड,<br />
                    बिगहा, बहेलिया, Tekari, Bihar 824236
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-2xs flex gap-4">
                <Phone className="w-8 h-8 text-accent-med shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-950 dark:text-white text-sm">Direct Phone</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal mt-1">
                    <a href="tel:09821293749" className="hover:underline text-accent-med font-semibold">09821293749</a>
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1 font-mono uppercase">Click to call</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-2xs flex gap-4">
                <Clock className="w-8 h-8 text-sky-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-950 dark:text-white text-sm">Working Hours</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal mt-1">
                    Monday to Sunday<br />
                    <strong>8:00 AM - 9:00 PM</strong>
                  </p>
                  <p className="text-[9px] text-emerald-400 font-bold uppercase mt-1">● Open all 7 Days</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-2xs flex gap-4">
                <MessageSquare className="w-8 h-8 text-emerald-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-950 dark:text-white text-sm">WhatsApp Chat</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal mt-1">
                    <a href="https://wa.me/919821293749" target="_blank" rel="noreferrer noopener" className="hover:underline text-emerald-400 font-semibold">Message Active</a>
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1 font-mono uppercase">24h Response Setup</p>
                </div>
              </div>
            </div>

            {/* Sub-map for reference */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 h-64 shadow-xs">
              <iframe
                title="Google Maps Embedded Location View"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.111956795493!2d84.8344!3d24.9318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d28ffffffffff%3A0xbc8eefd20f28e21!2sTekari%2C%20Bihar%20824236!5e0!3m2!1sen!2sin!4v1784539167310!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/60 dark:border-slate-800/80 shadow-lg">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-emerald-500/10 text-accent-med animate-bounce">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Message Received / संदेश प्राप्त हुआ!</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting Unique Medical Agency. Our certified pharmacist will review your health query or medicine request and contact you on <strong>{formData.phone}</strong> very soon.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-950 dark:text-white">Send Quick Inquiry</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Feel free to write your health requirements or general questions down below.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider">
                    Your Name * (आपका नाम)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-850 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-accent-med text-sm"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider">
                    Mobile Number * (मोबाइल नंबर)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-mono font-bold">+91</span>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="Enter 10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-14 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-850 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-accent-med text-sm font-mono"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider">
                    Email Address (ईमेल पता) - Optional
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-850 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-accent-med text-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider">
                    Your Message / Inquiry Details (पूछताछ विवरण)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="List your required medicines or write your question here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-850 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-accent-med text-sm resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent-med hover:bg-emerald-700 disabled:bg-emerald-600/60 text-white font-bold transition-all duration-200 shadow-md shadow-emerald-500/10 hover:shadow-lg text-sm sm:text-base cursor-pointer"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4.5 h-4.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Sending inquiry...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4.5 h-4.5" />
                      <span>Send Inquiry Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
