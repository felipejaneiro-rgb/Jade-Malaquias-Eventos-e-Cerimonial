import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn, PlayCircle } from 'lucide-react';
import { PortfolioItem } from '../types';

interface PortfolioCarouselProps {
  items: PortfolioItem[];
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  type?: 'image' | 'video';
  poster?: string;
  onClick?: () => void;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, type = 'image', poster, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Refined range for a more subtle parallax effect (smoother on mobile/desktop)
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const [imgSrc, setImgSrc] = useState(type === 'video' && poster ? poster : src);

  const isVideo = type === 'video';

  return (
    <div 
      ref={ref} 
      onClick={onClick}
      className={`relative w-full h-full overflow-hidden rounded-sm group shadow-lg bg-gray-200 dark:bg-neutral-800 ${isVideo ? 'cursor-pointer' : 'cursor-zoom-in'}`}
    >
      <motion.div 
        style={{ y }} 
        className="absolute top-[-10%] left-0 w-full h-[120%]"
      >
        <img 
          src={imgSrc} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          decoding="async"
          onError={() => setImgSrc('https://via.placeholder.com/800x800?text=Imagem+Indispon%C3%ADvel')}
        />
      </motion.div>
      
      {/* Overlay with Icon */}
      <div className={`absolute inset-0 bg-black/0 ${isVideo ? 'bg-black/10' : 'group-hover:bg-black/20'} transition-colors duration-300 pointer-events-none flex items-center justify-center`}>
        {isVideo ? (
           <PlayCircle className="text-white opacity-90 drop-shadow-lg w-12 h-12" strokeWidth={1.5} />
        ) : (
           <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 drop-shadow-lg" />
        )}
      </div>
    </div>
  );
};

export const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({ items }) => {
  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Pause autoplay if user is hovering OR if the lightbox is open
  useEffect(() => {
    if (!isHovered && !selectedImage) {
      autoplayRef.current = setInterval(nextPage, 4000);
    } else {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isHovered, totalPages, selectedImage]);

  const currentItems = items.slice(currentIndex * ITEMS_PER_PAGE, (currentIndex + 1) * ITEMS_PER_PAGE);
  
  // Logic for the "Next Slide" preview (visual layering)
  const nextIndex = (currentIndex + 1) % totalPages;
  const nextItems = items.slice(nextIndex * ITEMS_PER_PAGE, (nextIndex + 1) * ITEMS_PER_PAGE);

  return (
    <>
      <div 
        className="relative w-full max-w-6xl mx-auto perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center">
          
          {/* Background Layer (Next Slide Preview) - Creates Depth */}
          <div 
              className="absolute w-[92%] h-[90%] opacity-40 transition-all duration-500 ease-out"
              style={{ zIndex: 0 }}
          >
               <div className="grid grid-cols-2 gap-4 w-full h-full grayscale blur-[1px]">
                   {nextItems.map((item) => (
                      <div key={`next-${item.id}`} className="bg-gray-200 dark:bg-neutral-800 rounded-sm overflow-hidden h-full">
                          <img 
                            src={(item.type === 'video' && item.poster) ? item.poster : item.src} 
                            className="w-full h-full object-cover opacity-60" 
                            alt="" 
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                      </div>
                   ))}
               </div>
          </div>

          {/* Active Slide Layer */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 50, opacity: 0, scale: 0.98 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: -50, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="grid grid-cols-2 gap-4 w-full h-full p-2 md:p-4 z-10 bg-zinc-50/30 dark:bg-black/30 backdrop-blur-[1px] rounded-lg shadow-sm transition-colors duration-500"
            >
              {currentItems.map((item) => (
                <ParallaxImage 
                  key={item.id} 
                  src={item.src} 
                  alt={item.alt}
                  type={item.type}
                  poster={item.poster}
                  onClick={() => setSelectedImage(item)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Controls */}
        <button 
          onClick={prevPage}
          className="absolute -left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/90 dark:bg-neutral-800/90 rounded-full shadow-lg hover:bg-jade-primary hover:text-white dark:hover:bg-jade-primary transition-all text-jade-dark dark:text-white border border-jade-secondary/20 dark:border-white/10"
          aria-label="Anterior"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextPage}
          className="absolute -right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/90 dark:bg-neutral-800/90 rounded-full shadow-lg hover:bg-jade-primary hover:text-white dark:hover:bg-jade-primary transition-all text-jade-dark dark:text-white border border-jade-secondary/20 dark:border-white/10"
          aria-label="Próximo"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'w-8 bg-jade-primary' : 'w-2 bg-jade-secondary/60 dark:bg-neutral-700 hover:bg-jade-primary/50'
              }`}
              aria-label={`Ir para página ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-50"
              aria-label="Fechar"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-[95vw] max-h-[90vh] overflow-hidden rounded-lg shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the content itself
            >
              {selectedImage.type === 'video' ? (
                 <video 
                    src={selectedImage.src} 
                    poster={selectedImage.poster}
                    className="w-full h-full object-contain max-h-[90vh] max-w-[90vw]"
                    controls
                    autoPlay
                 >
                    Seu navegador não suporta a tag de vídeo.
                 </video>
              ) : (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain max-h-[90vh]"
                />
              )}
              
              {!selectedImage.type || selectedImage.type === 'image' ? (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white pointer-events-none">
                    <p className="text-center font-serif text-lg tracking-wide">{selectedImage.alt}</p>
                  </div>
              ) : null}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};