'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const phoneNumber = "971547083607"; // Número de WhatsApp (formato internacional)
  const message = "Hola! Me interesa conocer más sobre sus joyas.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-elegant-glow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
