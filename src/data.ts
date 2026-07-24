import { ServiceItem, CategoryItem, MedicineItem, TestimonialItem, FAQItem, GalleryItem } from "./types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "s1",
    title: "Prescription Medicines",
    hindiTitle: "पर्चे की दवाएं",
    description: "Accurate dispensing of all authentic prescription-only life-saving medicines under certified pharmacy supervision.",
    fullDescription: "हम डॉक्टरों द्वारा पर्चे पर लिखी गई सभी प्रकार की जीवन रक्षक दवाओं (Life-saving Medicines) की सटीक और प्रमाणित बिक्री सुनिश्चित करते हैं। सभी दवाएं उच्च गुणवत्ता और प्रामाणिक बैच की होती हैं।",
    iconName: "FileText",
    category: "Core Healthcare"
  },
  {
    id: "s2",
    title: "General Medicines (OTC)",
    hindiTitle: "सामान्य दवाएं (ओटीसी)",
    description: "Wide range of Over-The-Counter medicines for common fever, cold, acidity, and headache relief.",
    fullDescription: "बिना पर्चे के मिलने वाली सामान्य स्वास्थ्य समस्याओं (जैसे बुखार, सर्दी, दर्द, एसिडिटी, खांसी) की सुरक्षित ओटीसी दवाएं हमारे पास सदैव उपलब्ध हैं।",
    iconName: "Pills",
    category: "General Care"
  },
  {
    id: "s3",
    title: "Health Supplements",
    hindiTitle: "स्वास्थ्य सप्लीमेंट्स",
    description: "Multi-vitamins, protein powder, calcium supplements, omega-3, and energy boosters for overall fitness.",
    fullDescription: "शरीर को स्वस्थ और ऊर्जावान बनाए रखने के लिए मल्टी-विटामिन, प्रोटीन सप्लीमेंट्स, कैल्शियम, और इम्युनिटी बूस्टर्स के ब्रांडेड प्रोडक्ट्स उपलब्ध हैं।",
    iconName: "Activity",
    category: "Wellness"
  },
  {
    id: "s4",
    title: "Baby Care Products",
    hindiTitle: "शिशु देखभाल उत्पाद",
    description: "Trusted baby food, milk powders, diapers, lotions, baby soaps, and feeding hygiene products.",
    fullDescription: "नवजात शिशुओं की नाजुक त्वचा और पोषण के लिए हिमालय, जॉनसन, नेस्ले आदि ब्रांड्स के बेबी फ़ूड, डाइपर, शैम्पू, और पाउडर की संपूर्ण रेंज।",
    iconName: "Baby",
    category: "Family Health"
  },
  {
    id: "s5",
    title: "Personal Care Products",
    hindiTitle: "व्यक्तिगत देखभाल उत्पाद",
    description: "Skincare, hair care, oral hygiene, and female wellness products from trusted premium brands.",
    fullDescription: "त्वचा, बाल, दांतों और संपूर्ण व्यक्तिगत स्वच्छता से जुड़े ब्रांडेड प्रोडक्ट्स जो आपकी दैनिक सुरक्षा सुनिश्चित करते हैं।",
    iconName: "Heart",
    category: "Daily Essentials"
  },
  {
    id: "s6",
    title: "Medical Equipment",
    hindiTitle: "चिकित्सा उपकरण",
    description: "Sale of digital Blood Pressure monitors, blood glucose meters, nebulizers, and thermometers.",
    fullDescription: "घर पर स्वास्थ्य निगरानी के लिए डिजिटल बीपी मशीन, शुगर जांचने की मशीन (Glucometer), नेबुलाइजर, थर्मामीटर और ऑक्सीमीटर उपलब्ध हैं।",
    iconName: "Cpu",
    category: "Devices"
  },
  {
    id: "s7",
    title: "Surgical Supplies",
    hindiTitle: "सर्जिकल आपूर्ति",
    description: "Sterilized cotton, bandages, surgical tapes, disposable syringes, gloves, and IV sets.",
    fullDescription: "अस्पतालों और घरेलू उपयोग के लिए उच्च गुणवत्ता वाले स्टेराइल कॉटन, पट्टियां, डिस्पोजेबल सिरिंज, सर्जिकल मास्क और दस्ताने उपलब्ध हैं।",
    iconName: "Scissors",
    category: "Devices"
  },
  {
    id: "s8",
    title: "First Aid Products",
    hindiTitle: "प्राथमिक चिकित्सा सामग्री",
    description: "Comprehensive first aid kits, antiseptic liquids (Dettol, Savlon), creams, and pain relief sprays.",
    fullDescription: "इमरजेंसी और घरेलू चोटों के इलाज के लिए प्राथमिक चिकित्सा किट, एंटीसेप्टिक लोशन, ऑइंटमेंट और पेन रिलीफ स्प्रे की उपलब्धता।",
    iconName: "ShieldAlert",
    category: "General Care"
  },
  {
    id: "s9",
    title: "Diabetic Care",
    hindiTitle: "मधुमेह देखभाल",
    description: "Specialized low-glycemic foods, sugar-free sweeteners, diabetic socks, and insulin syringes.",
    fullDescription: "मधुमेह (डायबिटीज) से पीड़ित लोगों के लिए विशेष शुगर-फ्री उत्पाद, इंसुलिन पेन, सीरिंज और बीपी/शुगर चार्ट ट्रैकर उपलब्ध हैं।",
    iconName: "Droplet",
    category: "Specialized"
  },
  {
    id: "s10",
    title: "Healthcare Essentials",
    hindiTitle: "स्वास्थ्य आवश्यक वस्तुएं",
    description: "Masks, hand sanitizers, vaporizers, and immune-supportive ayurvedic syrups (Chyawanprash, Kadha).",
    fullDescription: "आयुर्वेदिक काढ़ा, च्यवनप्राश, सैनिटाइज़र, वैपोराइज़र और विभिन्न इम्युनिटी बूस्टिंग हर्बल दवाएं हमारे यहाँ उचित दाम पर उपलब्ध हैं।",
    iconName: "Sparkles",
    category: "Wellness"
  }
];

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: "c1",
    name: "Tablets",
    hindiName: "टैबलेट्स",
    description: "Wide range of fever, painkiller, antibiotic, and daily tablets",
    iconName: "Tablet",
    tag: "Tablets"
  },
  {
    id: "c2",
    name: "Capsules",
    hindiName: "कैप्सूल",
    description: "Multivitamins, gastro-resistant, and herbal nutrient capsules",
    iconName: "Pills",
    tag: "Capsules"
  },
  {
    id: "c3",
    name: "Syrups",
    hindiName: "सिरप / टॉनिक",
    description: "Cough syrups, multivitamins, liver tonics, and digestive enzymes",
    iconName: "GlassWater",
    tag: "Syrups"
  },
  {
    id: "c4",
    name: "Injections",
    hindiName: "इंजेक्शन",
    description: "Vaccine, pain relief, and emergency life-saving injections",
    iconName: "Syringe",
    tag: "Injection"
  },
  {
    id: "c5",
    name: "Medical Equipment",
    hindiName: "मेडिकल उपकरण",
    description: "Blood pressure and sugar monitors, nebulizers, thermometers",
    iconName: "Activity",
    tag: "Medical Equipment"
  },
  {
    id: "c6",
    name: "Protein & Supplements",
    hindiName: "सप्लीमेंट्स",
    description: "Health drinks, whey protein, calcium, and weight gainers",
    iconName: "Flame",
    tag: "Protein Supplements"
  }
];

// Seed data for 25 common medicines to make search extremely realistic and operational
export const MEDICINES_DATA: MedicineItem[] = [
  { id: "m1", name: "Paracetamol 650mg", hindiName: "पैरासिटामोल 650mg", category: "Tablets", type: "Tablet", price: "₹15 / strip", purpose: "Fever and mild to moderate pain relief", hindiPurpose: "बुखार और बदन दर्द से राहत", availability: true, dosage: "1 tablet after food, up to 3 times a day" },
  { id: "m2", name: "Amoxicillin 500mg", hindiName: "अमोक्सिसिलिन 500mg", category: "Tablets", type: "Tablet", price: "₹85 / strip", purpose: "Antibiotic for bacterial infections", hindiPurpose: "बैक्टीरियल इन्फेक्शन के लिए एंटीबायोटिक", availability: true, dosage: "As prescribed by the doctor" },
  { id: "m3", name: "Pantocid 40mg (Pantoprazole)", hindiName: "पेंटोसिड 40mg", category: "Tablets", type: "Tablet", price: "₹110 / strip", purpose: "Acidity, heartburn, and gas relief", hindiPurpose: "गैस, एसिडिटी और सीने में जलन", availability: true, dosage: "1 tablet empty stomach in the morning" },
  { id: "m4", name: "Combiflam", hindiName: "कॉम्बीफ्लेम", category: "Tablets", type: "Tablet", price: "₹25 / strip", purpose: "Severe body pain, joint pain and inflammation", hindiPurpose: "तेज सिरदर्द, बदन दर्द और सूजन", availability: true, dosage: "1 tablet after meals when needed" },
  { id: "m5", name: "Cetzine 10mg (Cetirizine)", hindiName: "सेटज़िन 10mg", category: "Tablets", type: "Tablet", price: "₹18 / strip", purpose: "Anti-allergy, sneezing, runny nose relief", hindiPurpose: "एलर्जी, छींक आना और बहती नाक", availability: true, dosage: "1 tablet at bedtime" },
  { id: "m6", name: "Becosules", hindiName: "बिकासूल्स", category: "Capsules", type: "Capsule", price: "₹35 / strip", purpose: "Vitamin B-Complex with Vitamin C for strength and mouth ulcers", hindiPurpose: "मुंह के छाले और विटामिन की कमी", availability: true, dosage: "1 capsule daily after breakfast" },
  { id: "m7", name: "Evion 400 (Vitamin E)", hindiName: "एवियन 400", category: "Capsules", type: "Capsule", price: "₹32 / strip", purpose: "Muscle health, hair growth and skin repair", hindiPurpose: "त्वचा, बाल और मांसपेशियों की मजबूती", availability: true, dosage: "1 capsule daily with milk" },
  { id: "m8", name: "Omeprazole 20mg", hindiName: "ओमेप्राजोल 20mg", category: "Capsules", type: "Capsule", price: "₹40 / strip", purpose: "Anti-reflux and stomach acid reducer", hindiPurpose: "पेट दर्द और खट्टी डकारें", availability: true, dosage: "1 capsule empty stomach" },
  { id: "m9", name: "Grilinctus Cough Syrup", hindiName: "ग्रिलिंक्टस सिरप", category: "Syrups", type: "Syrup", price: "₹120 / bottle", purpose: "Relief from wet and dry cough", hindiPurpose: "खांसी और बलगम से राहत", availability: true, dosage: "10ml twice a day" },
  { id: "m10", name: "Ascoril LS", hindiName: "एस्कोरिल एलएस", category: "Syrups", type: "Syrup", price: "₹115 / bottle", purpose: "Bronchial dilator for chest congestion & asthma", hindiPurpose: "छाती में जकड़न और कफ निकालना", availability: true, dosage: "5ml to 10ml as directed" },
  { id: "m11", name: "Digene Gel", hindiName: "डाइजीन जेल सिरप", category: "Syrups", type: "Syrup", price: "₹95 / bottle", purpose: "Instant antacid gel for acidity and gas", hindiPurpose: "एसिडिटी और गैस से तुरंत राहत", availability: true, dosage: "2 teaspoons after meals" },
  { id: "m12", name: "Voveran Aqua Injection", hindiName: "वोवेरॉन इंजेक्शन", category: "Injections", type: "Injection", price: "₹30 / ampoule", purpose: "Rapid painkiller injection for intense joint/back pain", hindiPurpose: "असहनीय दर्द के लिए दर्द निवारक", availability: true, dosage: "Administered by healthcare professional only" },
  { id: "m13", name: "Monocef 1gm Injection", hindiName: "मोनोसेफ 1gm", category: "Injections", type: "Injection", price: "₹65 / vial", purpose: "Broad-spectrum antibacterial IV injection", hindiPurpose: "गंभीर बैक्टीरिया संक्रमण के लिए", availability: true, dosage: "Under hospital supervision only" },
  { id: "m14", name: "Dr. Trust BP Monitor", hindiName: "डिजिटल बीपी मशीन", category: "Medical Equipment", type: "Equipment", price: "₹1499 / piece", purpose: "Accurate blood pressure and heart rate tracking at home", hindiPurpose: "ब्लड प्रेशर मापने का डिजिटल यंत्र", availability: true, dosage: "Use as shown in manual" },
  { id: "m15", name: "Accu-Chek Active Glucometer", hindiName: "एक्यू-चेक शुगर मशीन", category: "Medical Equipment", type: "Equipment", price: "₹1150 / kit", purpose: "Self testing blood glucose monitoring with strips", hindiPurpose: "घर पर शुगर की जांच के लिए", availability: true, dosage: "Read manual carefully before testing" },
  { id: "m16", name: "Omron Nebulizer", hindiName: "नेबुलाइजर मशीन", category: "Medical Equipment", type: "Equipment", price: "₹1850 / piece", purpose: "Inhalation therapy for respiratory/asthma relief", hindiPurpose: "सांस लेने में तकलीफ और सर्दी-खांसी भाप के लिए", availability: true, dosage: "As advised by doctor" },
  { id: "m17", name: "Protinex Original 250g", hindiName: "प्रोटीनेक्स पाउडर", category: "Protein Supplements", type: "Other", price: "₹395 / pack", purpose: "High protein nutritional health drink for immunity and strength", hindiPurpose: "शारीरिक कमजोरी दूर करने का प्रोटीन ड्रिंक", availability: true, dosage: "2 scoops daily with warm milk" },
  { id: "m18", name: "Shelcal 500 (Calcium)", hindiName: "शैलकॉल 500", category: "Vitamins", type: "Tablet", price: "₹119 / strip", purpose: "Calcium and Vitamin D3 supplement for bone health", hindiPurpose: "हड्डियों और जोड़ों की मजबूती", availability: true, dosage: "1 tablet daily after lunch" },
  { id: "m19", name: "Himalaya Baby Massage Oil", hindiName: "हिमालय बेबी ऑयल", category: "Baby Products", type: "Other", price: "₹150 / bottle", purpose: "Nourishing pure olive oil blend for baby soft skin", hindiPurpose: "बच्चों की मालिश का तेल", availability: true, dosage: "Apply before baby bath" },
  { id: "m20", name: "Detol Liquid Antiseptic 250ml", hindiName: "डेटॉल लिक्विड", category: "Personal Hygiene", type: "Other", price: "₹115 / bottle", purpose: "First aid wound washing and disinfection", hindiPurpose: "घाव धोने और कीटाणुनाशक के रूप में", availability: true, dosage: "Dilute with clean water" },
  { id: "m21", name: "Crepe Bandage 10cm", hindiName: "गरम पट्टी", category: "Orthopedic Support", type: "Other", price: "₹85 / piece", purpose: "Elastic support for sprains, sports injuries, and muscle strain", hindiPurpose: "मोच, सूजन और दर्द पर चढ़ाने की पट्टी", availability: true, dosage: "Do not tie extremely tight" },
  { id: "m22", name: "Omez 20mg Capsules", hindiName: "ओमेज कैप्सूल", category: "Diabetic Care", type: "Capsule", price: "₹45 / strip", purpose: "Gastric antiulcer capsule to protect stomach lining", hindiPurpose: "पेट के अल्सर और एसिडिटी की दवा", availability: true },
  { id: "m23", name: "Volini Pain Spray", hindiName: "वोलीनी स्प्रे", category: "Skin Care", type: "Other", price: "₹140 / can", purpose: "Instant pain relief aerosol spray for back, neck & joints", hindiPurpose: "पीठ और जोड़ों के दर्द से तुरंत स्प्रे राहत", availability: true, dosage: "Spray from 5cm distance" },
  { id: "m24", name: "Cerelac Wheat-Apple 300g", hindiName: "सेरेलैक बेबी फ़ूड", category: "Baby Products", type: "Other", price: "₹260 / pack", purpose: "Nutritious infant cereal for babies above 6 months", hindiPurpose: "६ माह से ऊपर के बच्चों का आहार", availability: true },
  { id: "m25", name: "Sugar Free Gold 100 Tabs", hindiName: "शुगर फ्री गोल्ड", category: "Diabetic Care", type: "Tablet", price: "₹75 / pack", purpose: "Zero calorie sugar alternate sweetener tablet", hindiPurpose: "शुगर के मरीजों के लिए मिठास टैबलेट", availability: true }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    name: "Dr. Satish Kumar",
    location: "Tekari, Gaya",
    rating: 5,
    comment: "Excellent inventory! They have all specialty medicines that are usually hard to find in Tekari. Genuine products with correct batch printing and expiry details.",
    hindiComment: "बहुत ही बढ़िया स्टॉक है! यूनिक मेडिकल पर वह सारी दवाइयां मिल जाती हैं जो आमतौर पर टेकारी में कहीं नहीं मिलतीं। सभी दवाएं एकदम असली और नए बैच की होती हैं।",
    date: "July 12, 2026"
  },
  {
    id: "t2",
    name: "Rameshwar Prasad Singh",
    location: "Bigha, Tekari",
    rating: 5,
    comment: "Highly trusted medical store. The owner and staff are extremely helpful and knowledgeable. They guided me correctly on dosage and gave genuine advice.",
    hindiComment: "अत्यंत विश्वसनीय मेडिकल स्टोर। यहाँ के मालिक और स्टाफ बहुत ही मददगार हैं। वे दवा की खुराक के बारे में सही जानकारी देते हैं और हमेशा उचित सलाह प्रदान करते हैं।",
    date: "June 30, 2026"
  },
  {
    id: "t3",
    name: "Anjali Kumari",
    location: "Kespah Road, Tekari",
    rating: 5,
    comment: "Unique Medical Agency is a blessing for our family. I regularly order my father's diabetes medicine via their WhatsApp order feature. It's so fast and simple!",
    hindiComment: "यूनिक मेडिकल एजेंसी हमारे परिवार के लिए वरदान की तरह है। मैं अपने पिताजी की डायबिटीज की दवाएं सीधे व्हाट्सएप ऑर्डर से मंगाती हूं। यह बहुत तेज और आसान है!",
    date: "July 05, 2026"
  },
  {
    id: "t4",
    name: "Mohammad Yusuf",
    location: "Bahelia, Tekari",
    rating: 4,
    comment: "Very reasonable and fair pricing. Unlike others who charge flat MRP, they offer fair discounts and keep genuine bills. The shop is modern and clean.",
    hindiComment: "दवाइयों के दाम बहुत ही उचित हैं। अन्य दुकानों की तरह वे केवल एमआरपी पर नहीं बेचते, बल्कि उचित छूट भी देते हैं। दुकान बहुत ही साफ-सुथरी और आधुनिक है।",
    date: "May 25, 2026"
  },
  {
    id: "t5",
    name: "Vikash Kumar Yadav",
    location: "Tekari Chowk",
    rating: 5,
    comment: "Awesome service. Visited for a blood pressure monitor. The staff unboxed the monitor, taught me how to wear the cuff and check the reading step-by-step. Recommended!",
    hindiComment: "लाजवाब सर्विस! मैं बीपी मशीन खरीदने गया था। स्टाफ ने खुद डिब्बा खोलकर मुझे कफ बांधने और रीडिंग चेक करने का तरीका बहुत अच्छे से सिखाया। बेहद संतुष्ट!",
    date: "July 15, 2026"
  },
  {
    id: "t6",
    name: "Preeti Sharma",
    location: "Tekari Road, Bihar",
    rating: 5,
    comment: "They keep premium brands for newborn babies like Johnson's, Himalaya, and Nestlé formulas in perfect storage. Clean environment and fast service.",
    hindiComment: "ये नवजात बच्चों के लिए जॉनसन, हिमालय और नेस्ले फॉर्मूला जैसे प्रीमियम ब्रांड की सभी चीजें बेहतरीन ढंग से रखते हैं। दुकान का माहौल बहुत स्वच्छ और सेवा तेज है।",
    date: "April 18, 2026"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq1",
    question: "Do you sell 100% genuine and authentic medicines?",
    hindiQuestion: "क्या आप शत-प्रतिशत असली दवाएं बेचते हैं?",
    answer: "Yes, absolutely! At Unique Medical Agency, we source all medicines and healthcare products directly from licensed pharmaceutical companies and authorized distributors. Every medicine comes with clear batch numbers and valid expiry dates.",
    hindiAnswer: "हाँ, बिल्कुल! यूनिक मेडिकल एजेन्सी पर हम सभी दवाइयां और स्वास्थ्य उत्पाद सीधे लाइसेंस प्राप्त फार्मास्युटिकल कंपनियों और अधिकृत वितरकों से मंगाते हैं। हर दवा पर बैच नंबर और एक्सपायरी तिथि साफ अंकित होती है।"
  },
  {
    id: "faq2",
    question: "How can I order medicines through WhatsApp?",
    hindiQuestion: "मैं व्हाट्सएप के माध्यम से दवाएं कैसे ऑर्डर कर सकता हूं?",
    answer: "It's extremely easy! Go to our 'WhatsApp Order' tab on this website, fill out your name, address, list of required medicines, and upload a photo of your doctor's prescription. Click 'Send via WhatsApp', and it will open formatted text in your WhatsApp. We will prepare your medicines instantly.",
    hindiAnswer: "यह बहुत आसान है! हमारी वेबसाइट पर 'WhatsApp Order' टैब पर जाएं, अपना नाम, पता, दवाओं की सूची भरें और अपने डॉक्टर के पर्चे की फोटो अपलोड करें। 'Send via WhatsApp' पर क्लिक करते ही व्हाट्सएप खुल जाएगा। हम आपकी दवाएं तुरंत तैयार कर देंगे।"
  },
  {
    id: "faq3",
    question: "Do you require a doctor's prescription for all medicines?",
    hindiQuestion: "क्या सभी दवाओं के लिए डॉक्टर का पर्चा आवश्यक है?",
    answer: "For Schedule H and prescription-only medicines (like antibiotics, strong painkillers, psychiatric drugs), a valid doctor prescription is mandatory. However, for general OTC products like multi-vitamins, band-aids, cough drops, and basic digestion tablets, no prescription is required.",
    hindiAnswer: "शेड्यूल एच (Schedule H) और पर्चे वाली दवाओं (जैसे एंटीबायोटिक्स, तेज दर्द निवारक) के लिए डॉक्टर का वैध पर्चा अनिवार्य है। हालांकि, सामान्य स्वास्थ्य उत्पादों जैसे ओटीसी दवाएं, विटामिन, पट्टी, या गैस की गोली के लिए पर्चे की आवश्यकता नहीं है।"
  },
  {
    id: "faq4",
    question: "What are the store operating hours?",
    hindiQuestion: "दुकान के खुलने और बंद होने का समय क्या है?",
    answer: "Unique Medical Agency is open from 8:00 AM to 9:00 PM, Monday to Sunday. We are open all 7 days of the week to serve your healthcare needs.",
    hindiAnswer: "यूनिक मेडिकल एजेन्सी सोमवार से रविवार तक प्रतिदिन सुबह 8:00 बजे से रात 9:00 बजे तक खुली रहती है। हम आपकी स्वास्थ्य सेवा के लिए सप्ताह के सातों दिन उपलब्ध हैं।"
  },
  {
    id: "faq5",
    question: "Do you have digital medical devices like BP monitors and Glucometers?",
    hindiQuestion: "क्या आपके पास बीपी और शुगर चेक करने वाली मशीनें हैं?",
    answer: "Yes, we sell high-quality, clinically approved digital blood pressure monitors, blood glucose monitors (sugar testing kits), nebulizers, digital thermometers, and pulse oximeters from trusted brands like Omron, Dr. Trust, and Accu-Chek.",
    hindiAnswer: "हाँ, हमारे पास उच्च गुणवत्ता वाली और डॉक्टरों द्वारा प्रमाणित डिजिटल बीपी मशीनें, शुगर जांचने की मशीनें (ग्लूकोमीटर), नेबुलाइजर, थर्मामीटर और ऑक्सीमीटर उपलब्ध हैं।"
  },
  {
    id: "faq6",
    question: "Can I check medicine availability before visiting?",
    hindiQuestion: "क्या मैं आने से पहले दवाओं की उपलब्धता की जांच कर सकता हूं?",
    answer: "Yes! You can search for medicines in our live Search Box on the homepage. If you can't find a medicine in the list, just use our Quick Inquiry or WhatsApp Order form to ask our pharmacist instantly.",
    hindiAnswer: "हाँ! आप हमारे होमपेज पर बने लाइव सर्च बॉक्स में दवाओं को ढूंढ सकते हैं। यदि कोई दवा सूची में न मिले, तो हमारे त्वरित पूछताछ (Quick Inquiry) या व्हाट्सएप ऑर्डर फॉर्म का उपयोग करके तुरंत फार्मासिस्ट से पूछ सकते हैं।"
  },
  {
    id: "faq7",
    question: "Do you offer any discounts on medicines?",
    hindiQuestion: "क्या आप दवाओं पर कोई छूट देते हैं?",
    answer: "Yes, we provide fair and honest discounts on prescription and general medicines to ensure healthcare remains affordable for the local community of Tekari.",
    hindiAnswer: "हाँ, हम अपने ग्राहकों को पर्चे और सामान्य दवाओं पर उचित और ईमानदार छूट (Discounts) प्रदान करते हैं ताकि टेकारी के स्थानीय लोगों के लिए चिकित्सा सस्ती बनी रहे।"
  },
  {
    id: "faq8",
    question: "Where is Unique Medical Agency located?",
    hindiQuestion: "यूनिक मेडिकल एजेन्सी कहाँ स्थित है?",
    answer: "We are located at WRWR+WG2, Kespah Road, Bigha, Bahelia, Tekari, Bihar 824236. You can easily find us on Google Maps by clicking the 'Get Directions' button on our homepage.",
    hindiAnswer: "हम WRWR+WG2, केसपा रोड, बिगहा, बहेलिया, टेकारी, बिहार 824236 पर स्थित हैं। आप हमारे होमपेज पर 'Get Directions' बटन पर क्लिक करके सीधे गूगल मैप्स पर हमारा रास्ता देख सकते हैं।"
  },
  {
    id: "faq9",
    question: "Do you accept digital payments like UPI, Google Pay, or PhonePe?",
    hindiQuestion: "क्या आप गूगल पे, फोनपे या यूपीआई पेमेंट स्वीकार करते हैं?",
    answer: "Yes, we accept all types of modern digital payments including UPI (Google Pay, PhonePe, Paytm, BHIM), debit/credit cards, and cash.",
    hindiAnswer: "हाँ, हम सभी प्रकार के आधुनिक डिजिटल भुगतान जैसे यूपीआई (गूगल पे, फोनपे, पेटीएम, भीम), क्रेडिट/डेबिट कार्ड और नकद भुगतान स्वीकार करते हैं।"
  },
  {
    id: "faq10",
    question: "What should I do in case of emergency medical needs?",
    hindiQuestion: "आपातकालीन चिकित्सा आवश्यकताओं के मामले में मुझे क्या करना चाहिए?",
    answer: "For emergency medicine needs during our business hours, you can call us directly on 09821293749. We will prioritize your prescription and keep your medicines ready. For serious clinical emergencies, please rush to the nearest government hospital or trauma center in Tekari.",
    hindiAnswer: "दुकान के समय के दौरान आपातकालीन दवा आवश्यकताओं के लिए, आप सीधे 09821293749 पर फोन कर सकते हैं। हम आपकी दवाओं को सर्वोच्च प्राथमिकता पर तैयार रखेंगे। गंभीर आपातकालीन मामलों के लिए कृपया तुरंत टेकारी के निकटतम अस्पताल में जाएं।"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    url: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80",
    title: "Store Interior & Shelves",
    category: "store",
    alt: "Modern clean pharmacy interior"
  },
  {
    id: "g2",
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    title: "Accurate Dispensing Counter",
    category: "medicines",
    alt: "Pharmacist checking medicine quality"
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    title: "Genuine Branded Medicines",
    category: "medicines",
    alt: "Tablets and capsules packaging"
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80",
    title: "Clinically Certified Equipment",
    category: "equipment",
    alt: "Glucometer, BP Monitors, and Nebulizers"
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=800&q=80",
    title: "Caring & Experienced Staff",
    category: "customers",
    alt: "Store pharmacist guiding an elder client"
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1631549916768-4119b255f946?auto=format&fit=crop&w=800&q=80",
    title: "Hygienic Storage & Store Front",
    category: "store",
    alt: "Pristine medicine storage conditions"
  }
];

export const BLOG_PREVIEW_DATA = [
  {
    id: "b1",
    title: "Understanding High Blood Pressure: Prevention & Home Care",
    hindiTitle: "हाई ब्लड प्रेशर को समझें: बचाव और घरेलू देखभाल",
    date: "July 18, 2026",
    summary: "High blood pressure is often a silent killer. Learn how simple changes in salt intake, moderate walks, and daily monitoring with a reliable home BP device can save lives.",
    author: "Pharmacist, Unique Medical",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "b2",
    title: "Medicine Safety: Why You Should Finish Antibiotic Courses",
    hindiTitle: "दवा सुरक्षा: आपको एंटीबायोटिक का कोर्स क्यों पूरा करना चाहिए",
    date: "June 28, 2026",
    summary: "Stopping antibiotics early helps remaining bacteria mutate and develop resistance. Discover why completing the prescription is critical for long-term health.",
    author: "Pharmacist, Unique Medical",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "b3",
    title: "Essential Baby Hygiene & Skincare Tips for Monsoons",
    hindiTitle: "मॉनसून में बच्चों की त्वचा और स्वच्छता से जुड़े जरूरी टिप्स",
    date: "May 15, 2026",
    summary: "Monsoons bring high humidity and skin rashes. Keep your baby's skin clean, dry, and use trusted herbal powders or gentle massage oils to prevent infections.",
    author: "Pediatric Consultant",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80"
  }
];

export const OFFERS_DATA = [
  {
    id: "o1",
    title: "Monthly Chronic Medication Discount",
    description: "Get flat 10% off on all monthly diabetes, thyroid, and blood pressure regular prescription orders.",
    code: "CHRONIC10",
    badge: "Special Saving"
  },
  {
    id: "o2",
    title: "First WhatsApp Order Offer",
    description: "Upload prescription via our WhatsApp order form and receive an extra 5% off on your overall purchase.",
    code: "ONLINE5",
    badge: "First Order"
  },
  {
    id: "o3",
    title: "Free BP Monitoring Checkup",
    description: "Visit our physical store on Kespah Road anytime and get your Blood Pressure checked for free by our pharmacist.",
    code: "STORE_CHECK",
    badge: "Free Service"
  }
];

export const NEARBY_DELIVERY_DATA = [
  "Bigha & Bahelia Colony",
  "Kespah Road Neighborhood",
  "Tekari Main Chowk",
  "Bajar Road Tekari",
  "Gaya Road Tekari",
  "Sarisatpur & Koch",
  "Mau & nearby villages in Tekari"
];
