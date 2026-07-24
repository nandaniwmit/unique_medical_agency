export type AppTab = 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'whatsapp';

export interface ServiceItem {
  id: string;
  title: string;
  hindiTitle?: string;
  description: string;
  fullDescription?: string;
  iconName: string; // Dynamic icon rendering name from lucide-react
  category: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  hindiName?: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface MedicineItem {
  id: string;
  name: string;
  hindiName?: string;
  category: string;
  type: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Equipment' | 'Other';
  price: string;
  purpose: string;
  hindiPurpose?: string;
  availability: boolean;
  dosage?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  hindiComment?: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  hindiQuestion?: string;
  answer: string;
  hindiAnswer?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'store' | 'medicines' | 'equipment' | 'customers' | 'all';
  alt: string;
}

export interface HealthTip {
  id: number;
  title: string;
  content: string;
  category: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
