'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar } from 'lucide-react';
import type { Dict, Locale } from '@/i18n/config';

type HeroSectionProps = { t: Dict; locale: Locale };

export default function HeroSection({ t, locale }: HeroSectionProps) {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById('philosophy');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      <motion.div
        className="h-full w-full overflow-hidden"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Desktop Image */}
          <Image
            src="/hero1.png"
            alt="EMC Jewelry - Luxury Jewelry Collection"
            width={1920}
            height={1080}
            priority
            className="hidden md:block h-full w-full object-cover object-center"
          />
          {/* Mobile Image */}
          <Image
            src="/hero1_mobile.png"
            alt="EMC Jewelry - Luxury Jewelry Collection"
            width={768}
            height={1024}
            priority
            className="block md:hidden h-full w-full object-cover object-center"
          />
        </motion.div>
      </motion.div>
      
      {/* Clean text overlay */}
      <div className="absolute inset-0 flex items-center justify-center pt-16">
        <div className="text-center px-6 max-w-6xl w-full">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair font-light mb-8 leading-[1.1] tracking-tight text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              {t.hero.title}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl font-light mb-12 max-w-3xl mx-auto text-white/95 leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.a
              href="#philosophy"
              onClick={handleScrollToSection}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative bg-white hover:bg-white/95 text-gray-900 px-10 py-4 text-base font-light tracking-wide transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer"
            >
              <Calendar className="w-5 h-5 mr-3" />
              <span>{t.hero.cta}</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
