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

export interface UIContent {
  nav: {
    about: string;
    services: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    tagline: string;
    subtitle: string;
    cta: string;
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    cta: string;
    imageAlt: string;
  };
  services: {
    title: string;
    filters: {
      all: string;
      wedding: string;
      social: string;
      corporate: string;
    };
    card: {
      details: string;
    };
    empty: string;
  };
  process: {
    badge: string;
    title: string;
    steps: {
      title: string;
      desc: string;
    }[];
  };
  portfolio: {
    title: string;
    subtitle: string;
  };
  ctaSecondary: {
    text: string;
    button: string;
  };
  faq: {
    title: string;
  };
  footer: {
    role: string;
    rights: string;
  };
  modal: {
    includes: string;
    investment: string;
    disclaimer: string;
    button: string;
  };
}

export interface TranslationData {
  ui: UIContent;
  services: Service[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
}