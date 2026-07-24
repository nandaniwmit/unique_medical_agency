import React, { useState, useRef, useEffect } from 'react';
import { ShoppingCart, Phone, FileUp, UploadCloud, CheckCircle2, AlertCircle, X, ShieldAlert, Clock, MapPin } from 'lucide-react';

interface WhatsAppOrderViewProps {
  prefilledMedicine: string;
  setPrefilledMedicine: (name: string) => void;
}

export default function WhatsAppOrderView({ prefilledMedicine, setPrefilledMedicine }: WhatsAppOrderViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    medicineName: prefilledMedicine || '',
    message: '',
    deliveryTime: '09:00 AM - 12:00 PM'
  });

  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [prescriptionPreview, setPrescriptionPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Keep medicineName field in sync if prefilled value changes from other views
  useEffect(() => {
    if (prefilledMedicine) {
      setFormData(prev => ({ ...prev, medicineName: prefilledMedicine }));
    }
  }, [prefilledMedicine]);

  // Handle Drag & Drop Events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    // Only accept common image files and PDFs
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
      alert("कृपया केवल फोटो (JPG, PNG) या PDF फाइल ही अपलोड करें!");
      return;
    }
    setPrescriptionFile(file);

    // If it's an image, generate a base64 preview
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPrescriptionPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPrescriptionPreview(null); // No image preview for PDFs
    }
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPrescriptionFile(null);
    setPrescriptionPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      alert("कृपया अपना नाम, मोबाइल नंबर और पता अवश्य भरें!");
      return;
    }

    // Compose formatted WhatsApp API message
    const businessName = "यूनिक मेडिकल एजेन्सी (Unique Medical Agency)";
    const hasPrescription = prescriptionFile ? "Yes, Attached/Uploaded" : "No";

    const formattedText = 
`Hello
यूनिक मेडिकल एजेन्सी

Customer Name: ${formData.name}
Phone: ${formData.phone}
Medicine Required: ${formData.medicineName || "General Consultation Request"}
Address: ${formData.address}
Prescription Attached: ${hasPrescription}
Preferred Delivery Time: ${formData.deliveryTime}
Message: ${formData.message || "Please prepare these medicines. I will pick them up / confirm order details."}

------------------------------
Sent via Unique Medical App`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/919821293749?text=${encodedText}`;

    // Mark as simulation sent & open WhatsApp
    setOrderSent(true);
    window.open(whatsappUrl, '_blank');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      medicineName: '',
      message: '',
      deliveryTime: '09:00 AM - 12:00 PM'
    });
    setPrescriptionFile(null);
    setPrescriptionPreview(null);
    setPrefilledMedicine('');
    setOrderSent(false);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950/40 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1631549916768-4119b255f946?auto=format&fit=crop&w=1200&q=80" 
            alt="WhatsApp Order" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-2">
          <span className="text-xs font-bold text-accent-med uppercase tracking-wider font-mono">Instant Digital Order Panel</span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight leading-tight">
            WhatsApp Order Form / ऑर्डर फॉर्म
          </h1>
          <p className="text-sm sm:text-base text-slate-400 font-light max-w-xl mx-auto">
            Order your medicines or upload prescriptions instantly. Your products are prepared by our pharmacist and kept ready for you.
          </p>
        </div>
      </section>

      {/* Main Form container */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left instructions block (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/50 dark:border-slate-800 shadow-2xs space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 text-accent-med">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-950 dark:text-white font-display">How WhatsApp Order Works</h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-500 font-mono font-bold shrink-0 text-xs">1</span>
                  <p className="text-slate-500 dark:text-slate-400 leading-normal">
                    Fill out your personal details, correct Tekari delivery/store-pickup address and medicine names.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-500 font-mono font-bold shrink-0 text-xs">2</span>
                  <p className="text-slate-500 dark:text-slate-400 leading-normal">
                    Drag & drop or click to upload a clear photo of your physician's prescription.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-500 font-mono font-bold shrink-0 text-xs">3</span>
                  <p className="text-slate-500 dark:text-slate-400 leading-normal">
                    Click <strong>Send via WhatsApp</strong>. This formats your details and launches WhatsApp securely with the prefilled request.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-500 font-mono font-bold shrink-0 text-xs">4</span>
                  <p className="text-slate-500 dark:text-slate-400 leading-normal">
                    Our pharmacist reviews your prescription, verifies batch packaging and responds with bill summary and payment links.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 space-y-3">
                <p className="text-xs text-slate-400 font-medium">Need immediate audio verification?</p>
                <a 
                  href="tel:09821293749"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-emerald-200 dark:border-emerald-850 text-accent-med bg-emerald-50/20 text-xs font-bold"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Store: 09821293749</span>
                </a>
              </div>
            </div>

            {/* Compliance Banner */}
            <div className="p-6 bg-amber-500/10 border-l-4 border-amber-500 rounded-3xl space-y-2">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <h4 className="font-bold text-sm">Prescription Policy</h4>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                For restricted therapeutic classes (such as painkillers, strong hormonal tablets, or cardiac pills), we will verify the doctor's stamp and license number during pickup.
              </p>
            </div>
          </div>

          {/* Right Form block (8 cols) */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/60 dark:border-slate-800/80 shadow-lg">
            
            {orderSent ? (
              <div className="py-12 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-emerald-500/10 text-accent-med animate-bounce">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Order Launched via WhatsApp!</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                  The formatted order template was generated successfully. If WhatsApp did not open automatically, please click the button below to complete the secure transmission.
                </p>
                
                <div className="flex flex-wrap justify-center gap-3 pt-6">
                  <button
                    onClick={handleFormSubmit}
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md"
                  >
                    Open WhatsApp Chat Again
                  </button>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-50"
                  >
                    Place Another Order
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider">
                      Customer Name * (आपका नाम)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-accent-med text-sm font-semibold"
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
                        placeholder="10-digit phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-14 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-accent-med text-sm font-mono"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider">
                      Email Address (optional)
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-accent-med text-sm"
                    />
                  </div>

                  {/* Preferred Delivery Time */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider">
                      Preferred Pickup / Delivery Time
                    </label>
                    <select
                      value={formData.deliveryTime}
                      onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-accent-med text-sm font-semibold cursor-pointer"
                    >
                      <option value="09:00 AM - 12:00 PM">Morning (09:00 AM - 12:00 PM)</option>
                      <option value="12:00 PM - 04:00 PM">Afternoon (12:00 PM - 04:00 PM)</option>
                      <option value="04:00 PM - 09:00 PM">Evening (04:00 PM - 09:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider">
                    Full Address in Tekari * (घर का पूरा पता - दवा डिलीवरी या पिकअप के लिए)
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                    <textarea
                      rows={2}
                      required
                      placeholder="Street name, colony, near landmark, Tekari, Gaya, Bihar 824236"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-accent-med text-sm resize-none"
                    />
                  </div>
                </div>

                {/* Medicine Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider">
                    Medicine Names Required (दवाइयों के नाम - यदि पर्चा अपलोड नहीं कर रहे हैं)
                  </label>
                  <input
                    type="text"
                    placeholder="E.g. Paracetamol 650mg 2 strips, Shelcal 1 strip, Becosules..."
                    value={formData.medicineName}
                    onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-accent-med text-sm font-medium"
                  />
                </div>

                {/* Drag-and-Drop Prescription Upload Simulator */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider block">
                    Upload Doctor Prescription * (डॉक्टर का पर्चा अपलोड करें)
                  </label>

                  <div
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    onClick={handleUploadClick}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-200 ${
                      dragActive 
                        ? 'border-accent-med bg-emerald-500/10' 
                        : 'border-slate-250 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-950/20 bg-slate-50/50 dark:bg-slate-950/10'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {prescriptionFile ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-center gap-2 text-accent-med">
                          <CheckCircle2 className="w-8 h-8 animate-pulse" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800 dark:text-white truncate max-w-xs mx-auto">
                            {prescriptionFile.name}
                          </p>
                          <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                            {(prescriptionFile.size / 1024 / 1024).toFixed(2)} MB • {prescriptionFile.type}
                          </p>
                        </div>
                        
                        {prescriptionPreview && (
                          <div className="w-32 h-32 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 mx-auto relative group">
                            <img 
                              src={prescriptionPreview} 
                              alt="Prescription preview" 
                              className="w-full h-full object-cover" 
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-slate-950/35 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-[10px] text-white font-mono font-bold uppercase">Ready</span>
                            </div>
                          </div>
                        )}

                        <button
                          type="button"
                          onClick={removeFile}
                          className="px-3 py-1 rounded-md bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white text-xs font-bold transition-all duration-200 cursor-pointer"
                        >
                          Remove File / पर्चा हटाएं
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex justify-center">
                          <UploadCloud className="w-12 h-12 text-slate-400" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                            Drag & Drop your prescription here, or <span className="text-accent-med underline">Browse file</span>
                          </p>
                          <p className="text-[10px] text-slate-400 font-medium">
                            Supports JPG, PNG, PDF formats up to 5MB size
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Instruction message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider">
                    Additional Instructions / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Write if you need home delivery inquiries or special instructions (e.g., leave package at door, call before arriving)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-accent-med text-sm resize-none"
                  />
                </div>

                {/* Submit trigger button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold shadow-lg shadow-emerald-500/20 transition-all duration-200 text-base cursor-pointer"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Send via WhatsApp / व्हाट्सएप पर भेजें</span>
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
