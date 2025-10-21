'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';
import { Crown, Heart } from 'lucide-react';
import type { Dict, Locale } from '@/i18n/config';

type HeroSectionProps = { t: Dict; locale: Locale };

export default function HeroSection({ t, locale }: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden">
      <Image
        src="/hero.png"
        alt="EMC Jewelry - Luxury Jewelry Collection"
        width={1920}
        height={1080}
        priority
        className="h-full w-full object-cover object-[center_75%]"
      />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      <div className="absolute inset-0 flex items-center justify-center pt-16">
        <div className="text-center text-white px-6 max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center space-x-3 bg-yellow-500/20 backdrop-blur-lg rounded-full px-6 py-3 mb-8 border border-yellow-400/30">
              <span className="text-yellow-100 text-sm font-medium tracking-wider uppercase">{t.hero.badge}</span>
            </div>
          </motion.div>
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-[1.05] md:leading-tight tracking-tight md:whitespace-nowrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="block bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
              {t.hero.title}
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl font-light mb-12 max-w-4xl mx-auto text-white/95 leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="drop-shadow-md">{t.hero.subtitle}</span>
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href={`/${locale}/catalogo`}
              className="group relative bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Crown className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">{t.hero.ctaPrimary}</span>
            </Link>
            <Link
              href={`/${locale}/colecciones`}
              className="group relative border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-lg hover:scale-105 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Heart className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">{t.hero.ctaSecondary}</span>
            </Link>
          </motion.div>
        </div>
      </div>
             {/* Elegant scroll indicator - Solo desktop */}
             <div className="absolute bottom-8 left-0 right-0 z-10 hidden md:block">
               <div className="flex justify-center">
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, delay: 1.2 }}
                   className="flex flex-col items-center space-y-2"
                 >
                   <motion.div
                     className="text-white/60 text-xs font-light tracking-widest uppercase"
                     animate={{ opacity: [0.6, 1, 0.6] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                   >
                     Descubre
                   </motion.div>
                   <motion.div
                     className="flex flex-col items-center space-y-1"
                     animate={{ y: [0, -8, 0] }}
                     transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                   >
                     <div className="w-px h-8 bg-gradient-to-b from-white/80 to-transparent"></div>
                     <div className="w-1 h-1 bg-white/80 rounded-full"></div>
                   </motion.div>
                 </motion.div>
               </div>
             </div>
    </section>
  );
}