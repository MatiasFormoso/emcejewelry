'use client';

import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      
      // Obtener la altura del viewport
      const viewportHeight = window.innerHeight;
      // Obtener la posición del scroll
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      
      // Mostrar el botón cuando se ha scrolleado más del 80% del viewport
      // Esto asegura que aparezca después del hero pero no demasiado tarde
      const threshold = viewportHeight * 0.8;
      setIsVisible(scrollY > threshold);
    };

    // Verificar posición inicial después de un pequeño delay para asegurar que el DOM esté listo
    setTimeout(() => {
      handleScroll();
    }, 100);

    // Agregar listener de scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '971547083607';
    const message = 'Hola! Me interesa saber más sobre las joyas de EMC Jewelry';
    const encodedMessage = encodeURIComponent(message);
    
    // Intentar múltiples formatos
    const whatsappUrl1 = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    const whatsappUrl2 = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    try {
      const newWindow = window.open(whatsappUrl1, '_blank');
      if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
        window.open(whatsappUrl2, '_blank');
      }
    } catch (error) {
      window.open(whatsappUrl2, '_blank');
    }
  };

  // No renderizar hasta que el componente esté montado (evitar problemas de SSR)
  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-[9999]"
          style={{ 
            position: 'fixed',
            bottom: '1rem',
            right: '1rem',
            zIndex: 9999
          }}
        >
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center touch-manipulation"
            style={{
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation'
            }}
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
