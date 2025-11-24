'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Instagram } from 'lucide-react';
import type { Dict, Locale } from '@/i18n/config';

type InstagramFeedProps = { t: Dict; locale: Locale };

// Configuración simple: solo agrega las imágenes a /public con estos nombres
// El componente las mostrará automáticamente
const INSTAGRAM_IMAGES = [
  { id: '1', src: '/ig1.jpg', alt: 'Instagram Post 1' },
  { id: '2', src: '/ig2.jpg', alt: 'Instagram Post 2' },
  { id: '3', src: '/ig3.jpg', alt: 'Instagram Post 3' },
  { id: '4', src: '/ig4.jpg', alt: 'Instagram Post 4' },
  { id: '5', src: '/ig5.jpg', alt: 'Instagram Post 5' },
  { id: '6', src: '/ig6.jpg', alt: 'Instagram Post 6' },
];

export default function InstagramFeed({ t, locale }: InstagramFeedProps) {
  const { ref, isVisible } = useScrollReveal();

  const handleInstagramClick = () => {
    window.open('https://instagram.com/emcejewelry', '_blank');
  };

  return (
    <section ref={ref} className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-light text-gray-900 mb-6 tracking-tight">
            {t.instagram.title}
          </h2>
          <a
            href="https://instagram.com/emcejewelry"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-gray-400 font-light hover:text-gray-600 transition-colors inline-flex items-center gap-2 tracking-wide"
          >
            <Instagram className="w-4 h-4" />
            {t.instagram.subtitle}
          </a>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {INSTAGRAM_IMAGES.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/emcejewelry"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative overflow-hidden bg-gray-50 aspect-square cursor-pointer group"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const placeholder = target.parentElement?.querySelector('.placeholder');
                  if (placeholder) {
                    (placeholder as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              
              {/* Placeholder que se muestra si la imagen no carga */}
              <div className="placeholder absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100" style={{ display: 'none' }}>
                <span className="text-gray-200 text-xs font-light">
                  {post.alt}
                </span>
              </div>
              
              {/* Elegant Instagram overlay */}
              <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-all duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="text-gray-700"
                >
                  <Instagram className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

