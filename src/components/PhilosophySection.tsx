'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { Dict, Locale } from '@/i18n/config';

type PhilosophySectionProps = { t: Dict; locale: Locale };

export default function PhilosophySection({ t, locale }: PhilosophySectionProps) {
  const { ref, isVisible } = useScrollReveal();

  const lifestyleImages = [
    { src: '/fotomodelo1.jpeg', alt: 'Modelo con piezas EMC Jewelry', key: 'modelo1' },
    { src: '/fotomodelo2.jpeg', alt: 'Modelo con piezas EMC Jewelry', key: 'modelo2' },
    { src: '/fotomodelo3.jpeg', alt: 'Modelo con piezas EMC Jewelry', key: 'modelo3' },
    { src: '/fotomodelo4.jpeg', alt: 'Modelo con piezas EMC Jewelry', key: 'modelo4' },
  ];

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
            {t.philosophy.title}
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-light max-w-2xl mx-auto tracking-widest uppercase">
            {t.philosophy.subtitle}
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-24"
        >
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-800 font-light leading-relaxed max-w-6xl mx-auto">
            {t.philosophy.description}
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {lifestyleImages.map((image, index) => (
            <motion.div
              key={image.key || index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.5 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="relative overflow-hidden bg-gray-50 aspect-[4/5] group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover ${index === 0 || index === 1 || index === 3 ? 'object-top' : 'object-center'}`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/5 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

