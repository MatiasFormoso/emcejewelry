'use client';

import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Marcar como montado inmediatamente
    setIsMounted(true);
    
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      
      // Múltiples métodos para obtener scroll position (compatibilidad máxima)
      const scrollY = Math.max(
        window.scrollY || 0,
        window.pageYOffset || 0,
        document.documentElement.scrollTop || 0,
        document.body.scrollTop || 0
      );
      
      // Threshold más simple y confiable
      // Mobile: 150px (muy temprano)
      // Desktop: 300px
      const isMobile = window.innerWidth < 768;
      const threshold = isMobile ? 150 : 300;
      
      const shouldShow = scrollY > threshold;
      
      // Forzar actualización del estado
      setIsVisible(shouldShow);
    };

    // Verificar inmediatamente
    handleScroll();

    // Verificar después de que el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleScroll, { once: true });
    }

    // Verificar cuando la página carga completamente
    if (document.readyState === 'complete') {
      handleScroll();
    } else {
      window.addEventListener('load', handleScroll, { once: true });
    }

    // Agregar listeners de scroll y resize
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // También usar requestAnimationFrame para mayor compatibilidad
    let rafId: number;
    const rafHandler = () => {
      handleScroll();
      rafId = requestAnimationFrame(rafHandler);
    };
    rafId = requestAnimationFrame(rafHandler);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('load', handleScroll);
      document.removeEventListener('DOMContentLoaded', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '971547083607';
    const message = 'Hola! Me interesa saber más sobre las joyas de EMC Jewelry';
    const encodedMessage = encodeURIComponent(message);
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Renderizar siempre el contenedor, pero controlar visibilidad con opacity y pointer-events
  return (
    <div
      className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-[9999]"
      style={{ 
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        zIndex: 9999,
        pointerEvents: isVisible ? 'auto' : 'none',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
    >
      <AnimatePresence mode="wait">
        {isVisible && isMounted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center touch-manipulation w-14 h-14 md:w-16 md:h-16"
              style={{
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation',
                minWidth: '56px',
                minHeight: '56px'
              }}
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
