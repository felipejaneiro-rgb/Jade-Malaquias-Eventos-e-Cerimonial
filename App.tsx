import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Calendar, 
  CheckSquare, 
  Clock, 
  Star, 
  MapPin,
  Instagram,
  Phone,
  X,
  Moon,
  Sun,
  ArrowUp,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { CONTACT_INFO, PORTFOLIO_IMAGES, TRANSLATIONS } from './constants';
import { Service } from './types';
import { Button } from './components/Button';
import { ServiceModal } from './components/ServiceModal';
import { PortfolioCarousel } from './components/PortfolioCarousel';

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471.048-.67.351-.197.295-.767.965-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

function App() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const [activeServiceFilter, setActiveServiceFilter] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const t = TRANSLATIONS[language];

  // Theme Toggle Logic
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  // Scroll to top visibility logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Specific handler for "Ver meu trabalho" to ensure smooth scroll
  const handleScrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Testimonial Autoplay
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (!isTestimonialHovered) {
      interval = setInterval(() => {
        setTestimonialIndex((prev) => (prev + 1) % t.testimonials.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isTestimonialHovered, t.testimonials.length]);

  const toggleFaq = (index: number) => {
    setOpenFaqId(openFaqId === index ? null : index);
  };

  const serviceFilters = [
    { id: 'all', label: t.ui.services.filters.all },
    { id: 'casamento', label: t.ui.services.filters.wedding },
    { id: 'social', label: t.ui.services.filters.social },
    { id: 'corporativo', label: t.ui.services.filters.corporate },
  ];

  const filteredServices = t.services.filter(service => 
    activeServiceFilter === 'all' || service.categories.includes(activeServiceFilter)
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-jade-light dark:bg-neutral-900 text-jade-dark dark:text-jade-light transition-colors duration-500 selection:bg-jade-secondary selection:text-jade-dark">
      
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm border-b border-jade-secondary/20 dark:border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div 
            className="font-serif text-2xl tracking-widest text-jade-dark dark:text-jade-primary uppercase font-semibold cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Jade Malaquias
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider text-gray-600 dark:text-gray-300 font-bold">
              <a href="#sobre" className="hover:text-jade-primary dark:hover:text-jade-primary transition-colors">{t.ui.nav.about}</a>
              <a href="#servicos" className="hover:text-jade-primary dark:hover:text-jade-primary transition-colors">{t.ui.nav.services}</a>
              <a href="#portfolio" className="hover:text-jade-primary dark:hover:text-jade-primary transition-colors">{t.ui.nav.portfolio}</a>
            </div>

            <div className="flex items-center gap-4">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-jade-dark dark:text-jade-secondary transition-colors font-bold text-xs flex items-center gap-1"
                aria-label="Switch Language"
              >
                <Globe size={16} />
                <span>{language.toUpperCase()}</span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-jade-dark dark:text-jade-secondary transition-colors"
                aria-label="Alternar tema"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <div className="hidden md:block">
                <Button href={CONTACT_INFO.whatsappLink} variant="primary" className="px-6 py-2 text-xs">
                  {t.ui.nav.contact}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80" 
            alt={language === 'pt' ? "Casal em celebração de casamento, momento emocionante e sofisticado" : "Couple in wedding celebration, emotional and sophisticated moment"}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-colors duration-500"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight italic"
          >
            {t.ui.hero.tagline}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl font-light tracking-wide mb-10 opacity-90"
          >
            {t.ui.hero.subtitle}
          </motion.p>
          <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Button href={CONTACT_INFO.whatsappLink} variant="primary" icon>
              {t.ui.hero.cta}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. About Section */}
      <section id="sobre" className="py-20 px-6 bg-white dark:bg-neutral-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="md:order-1 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block">
              <div className="absolute -top-4 -left-4 w-full h-full border border-jade-primary rounded-sm z-0"></div>
              <img 
                src="https://i.ibb.co/Mk3nqKFy/FotoJade.jpg" 
                alt={t.ui.about.imageAlt}
                className="relative z-10 block w-full max-w-[400px] md:max-w-[480px] h-auto object-contain rounded-sm shadow-lg transition-all duration-700"
              />
            </div>
          </motion.div>
          <motion.div 
            className="md:order-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-jade-primary text-sm font-bold tracking-[0.2em] uppercase">{t.ui.about.badge}</span>
            <h2 className="font-serif text-4xl md:text-5xl text-jade-dark dark:text-white">{t.ui.about.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg">
              {t.ui.about.p1}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg">
              {t.ui.about.p2}
            </p>
            <div className="pt-4">
              <Button 
                variant="text" 
                href="#portfolio" 
                onClick={handleScrollToPortfolio}
              >
                {t.ui.about.cta}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section id="servicos" className="py-20 px-6 bg-jade-rose dark:bg-neutral-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
             <h2 className="font-serif text-4xl text-jade-dark dark:text-white mb-4">{t.ui.services.title}</h2>
             <div className="w-16 h-0.5 bg-jade-primary mx-auto mb-8"></div>
             
             {/* Service Filters */}
             <div className="flex flex-wrap justify-center gap-3">
               {serviceFilters.map((filter) => (
                 <button
                   key={filter.id}
                   onClick={() => setActiveServiceFilter(filter.id)}
                   className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 border ${
                     activeServiceFilter === filter.id
                       ? 'bg-jade-primary text-white border-jade-primary shadow-md'
                       : 'bg-transparent text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-jade-primary hover:text-jade-primary dark:hover:text-jade-primary'
                   }`}
                 >
                   {filter.label}
                 </button>
               ))}
             </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 min-h-[400px] items-start">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <motion.div 
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-neutral-800 p-8 rounded-sm shadow-md flex flex-col items-center text-center group cursor-pointer border-t-4 border-transparent hover:border-jade-primary transition-all h-full"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="mb-6 p-4 bg-jade-rose dark:bg-neutral-700 rounded-full text-jade-primary group-hover:bg-jade-primary group-hover:text-white transition-colors">
                    {service.id === 'full' && <Star size={32} strokeWidth={1.5} />}
                    {service.id === 'day-of' && <Clock size={32} strokeWidth={1.5} />}
                    {service.id === 'planning' && <Calendar size={32} strokeWidth={1.5} />}
                  </div>
                  <h3 className="font-serif text-2xl mb-3 text-jade-dark dark:text-white">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-300 mb-6 font-light text-sm leading-relaxed">{service.shortDescription}</p>
                  <span className="text-jade-primary text-xs font-bold uppercase tracking-wider mt-auto border-b border-jade-primary pb-1">
                    {t.ui.services.card.details}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredServices.length === 0 && (
               <div className="col-span-3 text-center py-12 text-gray-400 italic">
                 {t.ui.services.empty}
               </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="py-24 px-6 bg-white dark:bg-neutral-900 transition-colors duration-500 overflow-hidden">
        <div className="max-w-5xl mx-auto">
           <motion.div 
             className="text-center mb-16"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <span className="text-jade-primary text-xs font-bold tracking-widest uppercase">{t.ui.process.badge}</span>
             <h2 className="font-serif text-3xl md:text-4xl mt-2 dark:text-white">{t.ui.process.title}</h2>
           </motion.div>
           
           <motion.div 
             className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={{
               hidden: {},
               visible: {
                 transition: {
                   staggerChildren: 0.3
                 }
               }
             }}
           >
             {/* Connecting Line (Desktop) */}
             <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '75%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="hidden md:block absolute top-12 left-[12.5%] h-0.5 bg-jade-primary z-0"
             />

             {/* Connecting Line (Mobile) - Positioned on the left (behind bubbles) */}
             <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '80%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="md:hidden absolute top-12 left-[3rem] w-0.5 bg-jade-primary z-0"
             />

             {[
               { icon: Phone },
               { icon: CheckSquare },
               { icon: Heart },
               { icon: Star }
             ].map((step, idx) => (
               <motion.div 
                  key={idx} 
                  className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center gap-6 md:gap-0 relative z-10 group"
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.8 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: { 
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                      }
                    }
                  }}
               >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5, borderColor: "#D4AF37" }}
                    className="w-24 h-24 flex-shrink-0 bg-jade-primary text-white rounded-full flex items-center justify-center text-5xl font-serif italic mb-0 md:mb-6 shadow-xl border-4 border-white dark:border-neutral-900 dark:bg-jade-primary relative z-10 transition-colors"
                  >
                    {idx + 1}
                  </motion.div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-lg mb-2 dark:text-white">{t.ui.process.steps[idx].title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-light max-w-[200px]">{t.ui.process.steps[idx].desc}</p>
                  </div>
               </motion.div>
             ))}
           </motion.div>
        </div>
      </section>

      {/* 5. Portfolio Section (3D Carousel) */}
      <section id="portfolio" className="py-24 bg-zinc-50 dark:bg-black transition-colors duration-500 overflow-hidden">
         <motion.div 
           className="text-center mb-12 px-6"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.6 }}
         >
            <h2 className="font-serif text-4xl md:text-5xl text-jade-dark dark:text-white italic mb-2">{t.ui.portfolio.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-xs">{t.ui.portfolio.subtitle}</p>
         </motion.div>
         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
         >
           <PortfolioCarousel items={PORTFOLIO_IMAGES} />
         </motion.div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-20 px-6 bg-jade-primary/5 dark:bg-jade-primary/10 transition-colors duration-500">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
           <motion.div
             animate={{ scale: [1, 1.15, 1] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="inline-block mb-8"
           >
             <Heart className="w-10 h-10 text-jade-primary fill-current opacity-50" />
           </motion.div>
           
           <div 
             className="relative h-[400px] md:h-[320px] flex items-center justify-center"
             onMouseEnter={() => setIsTestimonialHovered(true)}
             onMouseLeave={() => setIsTestimonialHovered(false)}
           >
             <AnimatePresence mode="wait">
               <motion.div
                 key={testimonialIndex}
                 initial={{ opacity: 0, y: 20, scale: 0.95 }}
                 animate={{ opacity: 1, y: 0, scale: 1 }}
                 exit={{ opacity: 0, y: -20, scale: 0.95 }}
                 transition={{ duration: 0.5 }}
                 whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                 className="absolute w-full max-w-2xl bg-white dark:bg-neutral-800 p-8 md:p-10 rounded-xl shadow-md border border-jade-secondary/20 dark:border-white/5 cursor-default"
               >
                 <p className="font-serif text-xl md:text-2xl italic text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
                   "{t.testimonials[testimonialIndex].text}"
                 </p>
                 <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-2 border-jade-primary/30 shadow-sm">
                       <img 
                        src={t.testimonials[testimonialIndex].image} 
                        alt={`Foto de ${t.testimonials[testimonialIndex].name}, cliente feliz com a assessoria de Jade Malaquias`} 
                        className="w-full h-full object-cover"
                       />
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="font-bold text-jade-dark dark:text-white uppercase tracking-wide text-sm mb-1">
                        {t.testimonials[testimonialIndex].name}
                      </p>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(s => <Star key={s} size={12} className="fill-jade-primary text-jade-primary" />)}
                      </div>
                    </div>
                 </div>
               </motion.div>
             </AnimatePresence>
           </div>

           <div className="flex justify-center gap-2 mt-4">
             {t.testimonials.map((_, idx) => (
               <button
                 key={idx}
                 onClick={() => setTestimonialIndex(idx)}
                 className={`w-2 h-2 rounded-full transition-colors ${
                   idx === testimonialIndex ? 'bg-jade-primary' : 'bg-gray-300 dark:bg-gray-600 hover:bg-jade-primary/50'
                 }`}
                 aria-label={`Ver depoimento ${idx + 1}`}
               />
             ))}
           </div>
        </motion.div>
      </section>

      {/* 7. Secondary CTA */}
      <section className="py-24 px-6 bg-cover bg-center bg-fixed relative flex items-center justify-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519225464466-c6c38f301316?auto=format&fit=crop&w=1920&q=80')` }}>
        <div className="absolute inset-0 bg-jade-dark/70 dark:bg-black/80 transition-colors duration-500"></div>
        <motion.div 
          className="relative z-10 text-center max-w-3xl mx-auto text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl mb-6 italic">
            {t.ui.ctaSecondary.text}
          </h2>
          <Button href={CONTACT_INFO.whatsappLink} variant="primary">
            {t.ui.ctaSecondary.button}
          </Button>
        </motion.div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 px-6 bg-white dark:bg-neutral-900 transition-colors duration-500 max-w-3xl mx-auto">
        <motion.h2 
          className="font-serif text-3xl text-center mb-12 text-jade-dark dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.ui.faq.title}
        </motion.h2>
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100 dark:border-gray-800 pb-4">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full text-left flex justify-between items-center py-4 focus:outline-none group"
              >
                <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-jade-primary dark:group-hover:text-jade-primary transition-colors">{faq.question}</span>
                <span className={`transform transition-transform ${openFaqId === idx ? 'rotate-45' : 'rotate-0'}`}>
                  <X className="w-4 h-4 text-gray-400" />
                </span>
              </button>
              <AnimatePresence>
                {openFaqId === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-500 dark:text-gray-400 font-light pb-4 text-sm leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 bg-jade-primary text-white rounded-full shadow-lg hover:bg-[#BFA030] transition-colors focus:outline-none focus:ring-2 focus:ring-jade-primary focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 9. Footer */}
      <footer className="bg-jade-dark dark:bg-black text-jade-secondary py-16 px-6 transition-colors duration-500">
         <motion.div 
           className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-center text-center md:text-left"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
         >
            <div>
               <h3 className="font-serif text-2xl text-white mb-2">Jade Malaquias</h3>
               <p className="text-xs tracking-widest uppercase opacity-70">{t.ui.footer.role}</p>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-4">
               <a 
                 href="https://instagram.com/jademalaquiaseventos" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-jade-primary hover:text-white transition-colors text-base font-medium tracking-wide group"
               >
                  <Instagram size={20} strokeWidth={1.5} />
                  <span>@jademalaquiaseventos</span>
               </a>
               <a 
                 href={CONTACT_INFO.whatsappLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-jade-primary hover:text-white transition-colors text-base font-medium tracking-wide group"
               >
                  <WhatsAppIcon size={20} />
                  <span>{CONTACT_INFO.phone}</span>
               </a>
            </div>

            <div className="text-center md:text-right text-sm opacity-50 font-light">
               <p>&copy; {new Date().getFullYear()} Jade Malaquias.</p>
               <p>{t.ui.footer.rights}</p>
            </div>
         </motion.div>
      </footer>

      {/* Modals */}
      <ServiceModal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        service={selectedService} 
        labels={t.ui.modal}
      />
    </div>
  );
}

export default App;