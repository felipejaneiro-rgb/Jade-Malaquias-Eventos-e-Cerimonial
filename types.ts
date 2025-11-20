export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  includes: string[];
  priceRange: string;
  categories: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  image?: string;
}

export interface PortfolioItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  type?: 'image' | 'video';
  poster?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}