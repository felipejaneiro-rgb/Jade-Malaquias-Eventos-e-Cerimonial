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
  ArrowUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { CONTACT_INFO, SERVICES, TESTIMONIALS, FAQS, PORTFOLIO_IMAGES } from './constants';
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
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const [activeServiceFilter, setActiveServiceFilter] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

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
        setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isTestimonialHovered]);

  const toggleFaq = (index: number) => {
    setOpenFaqId(openFaqId === index ? null : index);
  };

  const serviceFilters = [
    { id: 'all', label: 'Todos' },
    { id: 'casamento', label: 'Casamentos' },
    { id: 'social', label: '15 Anos & Bodas' },
    { id: 'corporativo', label: 'Corporativo' },
  ];

  const filteredServices = SERVICES.filter(service => 
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
              <a href="#sobre" className="hover:text-jade-primary dark:hover:text-jade-primary transition-colors">Sobre</a>
              <a href="#servicos" className="hover:text-jade-primary dark:hover:text-jade-primary transition-colors">Serviços</a>
              <a href="#portfolio" className="hover:text-jade-primary dark:hover:text-jade-primary transition-colors">Portfólio</a>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-jade-dark dark:text-jade-secondary transition-colors"
                aria-label="Alternar tema"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <div className="hidden md:block">
                <Button href={CONTACT_INFO.whatsappLink} variant="primary" className="px-6 py-2 text-xs">
                  Fale Conosco
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
            src="https://picsum.photos/seed/weddinghero/1920/1080?grayscale" 
            alt="Decoração de casamento romântico e sofisticado em preto e branco representando a realização de sonhos" 
            className="w-full h-full object-cover"
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
            {CONTACT_INFO.tagline}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl font-light tracking-wide mb-10 opacity-90"
          >
            Assessoria de eventos e cerimonial com 13 anos de experiência.
          </motion.p>
          <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Button href={CONTACT_INFO.whatsappLink} variant="primary" icon>
              Fale com a Jade
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. About Section */}
      <section id="sobre" className="py-20 px-6 bg-white dark:bg-neutral-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-jade-primary rounded-sm z-0"></div>
              <img 
                src="https://picsum.photos/seed/jadeportrait/600/800" 
                alt="Jade Malaquias, especialista em Assessoria de Eventos e Cerimonial com 13 anos de experiência" 
                className="relative z-10 w-full rounded-sm shadow-lg grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          <div className="md:order-2 space-y-6">
            <span className="text-jade-primary text-sm font-bold tracking-[0.2em] uppercase">Sobre Mim</span>
            <h2 className="font-serif text-4xl md:text-5xl text-jade-dark dark:text-white">13 Anos de Paixão por Realizar Sonhos</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg">
              Com mais de uma década dedicada ao mercado de eventos, minha missão vai além da organização: é sobre <span className="italic font-serif text-jade-dark dark:text-jade-secondary">acolhimento</span> e <span className="italic font-serif text-jade-dark dark:text-jade-secondary">execução detalhista</span>.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg">
              Transformo a ansiedade do planejamento em tranquilidade, garantindo que cada detalhe, do cronograma à decoração, reflita a essência única de quem celebra. A perfeição mora nos detalhes, e eu cuido de todos eles para você.
            </p>
            <div className="pt-4">
              <Button 
                variant="text" 
                href="#portfolio" 
                onClick={handleScrollToPortfolio}
              >
                Ver meu trabalho
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section id="servicos" className="py-20 px-6 bg-jade-rose dark:bg-neutral-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
             <h2 className="font-serif text-4xl text-jade-dark dark:text-white mb-4">Nossos Serviços</h2>
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
          </div>

          <div className="grid md:grid-cols-3 gap-8 min-h-[400px] items-start">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <motion.div 
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
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
                    Ver Detalhes
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredServices.length === 0 && (
               <div className="col-span-3 text-center py-12 text-gray-400 italic">
                 Nenhum serviço encontrado para esta categoria.
               </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="py-20 px-6 bg-white dark:bg-neutral-900 transition-colors duration-500">
        <div className="max-w-5xl mx-auto">
           <div className="text-center mb-16">
             <span className="text-jade-primary text-xs font-bold tracking-widest uppercase">Passo a Passo</span>
             <h2 className="font-serif text-3xl md:text-4xl mt-2 dark:text-white">Como Funciona</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
             {/* Connecting Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-[12.5%] w-[75%] h-0.5 bg-jade-primary z-0"></div>

             {[
               { icon: Phone, title: "Reunião Inicial", desc: "Entendemos seus sonhos e expectativas." },
               { icon: CheckSquare, title: "Planejamento", desc: "Cronograma e orçamento definidos." },
               { icon: Heart, title: "Fornecedores", desc: "Curadoria e contratação dos melhores." },
               { icon: Star, title: "Grande Dia", desc: "Execução perfeita para você celebrar." }
             ].map((step, idx) => (
               <motion.div 
                  key={idx} 
                  className="flex flex-col items-center text-center relative z-10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
               >
                  <div className="w-24 h-24 bg-jade-primary text-white rounded-full flex items-center justify-center text-5xl font-serif italic mb-4 shadow-lg border-4 border-white dark:border-neutral-900 transform transition-transform hover:scale-105">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-lg mb-2 dark:text-white">{step.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-light">{step.desc}</p>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* 5. Portfolio Section (3D Carousel) */}
      <section id="portfolio" className="py-24 bg-zinc-50 dark:bg-black transition-colors duration-500 overflow-hidden">
         <div className="text-center mb-12 px-6">
            <h2 className="font-serif text-4xl md:text-5xl text-jade-dark dark:text-white italic mb-2">Portfólio</h2>
            <p className="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-xs">Momentos reais, emoções eternas</p>
         </div>
         <PortfolioCarousel items={PORTFOLIO_IMAGES} />
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-20 px-6 bg-jade-primary/5 dark:bg-jade-primary/10 transition-colors duration-500">
        <div className="max-w-4xl mx-auto text-center">
           <Heart className="w-10 h-10 text-jade-primary mx-auto mb-8 fill-current opacity-50" />
           
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
                   "{TESTIMONIALS[testimonialIndex].text}"
                 </p>
                 <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-2 border-jade-primary/30 shadow-sm">
                       <img 
                        src={TESTIMONIALS[testimonialIndex].image} 
                        alt={`Foto de ${TESTIMONIALS[testimonialIndex].name}, cliente feliz com a assessoria de Jade Malaquias`} 
                        className="w-full h-full object-cover"
                       />
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="font-bold text-jade-dark dark:text-white uppercase tracking-wide text-sm mb-1">
                        {TESTIMONIALS[testimonialIndex].name}
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
             {TESTIMONIALS.map((_, idx) => (
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
        </div>
      </section>

      {/* 7. Secondary CTA */}
      <section className="py-24 px-6 bg-cover bg-center bg-fixed relative flex items-center justify-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519225464466-c6c38f301316?auto=format&fit=crop&w=1920&q=80')` }}>
        <div className="absolute inset-0 bg-jade-dark/70 dark:bg-black/80 transition-colors duration-500"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto text-white">
          <h2 className="font-serif text-3xl md:text-5xl mb-6 italic">
            "Quer viver o casamento dos seus sonhos com tranquilidade e perfeição em cada detalhe?"
          </h2>
          <Button href={CONTACT_INFO.whatsappLink} variant="primary">
            Fale com a Jade
          </Button>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 px-6 bg-white dark:bg-neutral-900 transition-colors duration-500 max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl text-center mb-12 text-jade-dark dark:text-white">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
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
        </div>
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
         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
            <div>
               <h3 className="font-serif text-2xl text-white mb-2">Jade Malaquias</h3>
               <p className="text-xs tracking-widest uppercase opacity-70">Assessoria & Cerimonial</p>
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
               <p>Todos os direitos reservados.</p>
            </div>
         </div>
      </footer>

      {/* Modals */}
      <ServiceModal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        service={selectedService} 
      />
    </div>
  );
}

export default App;