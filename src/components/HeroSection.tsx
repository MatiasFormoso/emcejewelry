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
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
      <div className="absolute inset-0 flex items-center justify-center pt-16">
        <div className="text-center text-white px-6 max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl rounded-full px-8 py-4 mb-12 border border-white/10 shadow-2xl">
              <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-light tracking-[0.2em] uppercase">{t.hero.badge}</span>
            </div>
          </motion.div>
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-thin mb-8 md:mb-12 leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <span className="block bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl font-extralight mb-16 max-w-3xl mx-auto text-white/80 leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="drop-shadow-sm">{t.hero.subtitle}</span>
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href={`/${locale}/catalogo`}
              className="group relative bg-white text-stone-900 px-10 py-5 rounded-none text-base font-light tracking-widest uppercase transition-all duration-500 hover:bg-stone-100 flex items-center justify-center overflow-hidden border border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-stone-50 to-stone-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Crown className="w-4 h-4 mr-3 relative z-10" />
              <span className="relative z-10">{t.hero.ctaPrimary}</span>
            </Link>
            <Link
              href={`/${locale}/colecciones`}
              className="group relative border border-white/30 hover:border-white text-white px-10 py-5 rounded-none text-base font-light tracking-widest uppercase transition-all duration-500 backdrop-blur-xl hover:bg-white/5 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Heart className="w-4 h-4 mr-3 relative z-10" />
              <span className="relative z-10">{t.hero.ctaSecondary}</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}