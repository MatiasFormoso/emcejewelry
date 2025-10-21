'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppFloat() {
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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 hidden md:block"
    >
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
}
