'use client';

import Image from 'next/image';
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { Dict, Locale } from '@/i18n/config';

type ArtGalleryProps = { t: Dict; locale: Locale };

// Imágenes de piezas en orden del 1 al 6
const artPieces = [
  { id: '1', src: '/1.jpeg', alt: 'Pieza de Arte 1' },
  { id: '2', src: '/2.jpeg', alt: 'Pieza de Arte 2' },
  { id: '3', src: '/3.jpeg', alt: 'Pieza de Arte 3' },
  { id: '4', src: '/4.jpeg', alt: 'Pieza de Arte 4' },
  { id: '5', src: '/5.jpeg', alt: 'Pieza de Arte 5' },
  { id: '6', src: '/6.jpeg', alt: 'Pieza de Arte 6' },
];

export default function ArtGallery({ t, locale }: ArtGalleryProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-light text-gray-900 mb-8 tracking-tight">
            {t.atelier.title}
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-light max-w-2xl mx-auto tracking-widest uppercase">
            {t.atelier.subtitle}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {artPieces.map((piece, index) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.3 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="relative overflow-hidden bg-gray-50 aspect-square"
            >
              <Image
                src={piece.src}
                alt={piece.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

