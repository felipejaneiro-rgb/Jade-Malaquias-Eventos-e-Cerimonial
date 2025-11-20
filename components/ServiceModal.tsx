import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { Service } from '../types';
import { Button } from './Button';
import { CONTACT_INFO } from '../constants';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[51] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div 
            onClick={onClose}
            className="absolute inset-0 bg-jade-dark/60 dark:bg-black/80 backdrop-blur-sm transition-colors duration-500"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white dark:bg-neutral-800 w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-colors duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative h-32 bg-jade-rose dark:bg-neutral-700 flex items-center justify-center flex-shrink-0 transition-colors duration-500">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/50 dark:bg-black/20 hover:bg-white dark:hover:bg-black/40 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6 text-jade-dark dark:text-white" />
              </button>
              <h2 className="font-serif text-3xl text-jade-dark dark:text-white italic px-8 text-center">{service.title}</h2>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto custom-scrollbar">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed border-b border-jade-secondary dark:border-white/10 pb-6">
                {service.fullDescription}
              </p>

              <h3 className="font-serif text-xl mb-4 text-jade-primary">O que está incluso:</h3>
              <ul className="space-y-3 mb-8">
                {service.includes.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-jade-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-sans">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-jade-rose/30 dark:bg-neutral-700/50 p-6 rounded-lg mb-6 transition-colors">
                 <span className="block text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">Investimento</span>
                 <span className="font-serif text-2xl text-jade-dark dark:text-white">{service.priceRange}</span>
              </div>
              
              <p className="text-xs text-gray-400 dark:text-gray-500 italic mb-4">* Não oferecemos consultoria gratuita. O orçamento é enviado após a primeira reunião.</p>

              <div className="flex justify-end">
                <Button href={CONTACT_INFO.whatsappLink} icon>
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};