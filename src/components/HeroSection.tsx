'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';
import { Crown, Heart, Sparkles, Gem, Star } from 'lucide-react';
import type { Dict, Locale } from '@/i18n/config';

type HeroSectionProps = { t: Dict; locale: Locale };

export default function HeroSection({ t, locale }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen bg-black">
      <Image
        src="/hero.png"
        alt="EMC Jewelry - Luxury Jewelry Collection"
        width={1920}
        height={1080}
        priority
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* Simple overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
        <div className="text-center text-white max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center space-x-3 bg-yellow-500/20 backdrop-blur-lg rounded-full px-6 py-3 mb-6 border border-yellow-400/30">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-yellow-100 text-sm font-medium tracking-wider uppercase">{t.hero.badge}</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl font-light mb-8 text-white/90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href={`/${locale}/catalogo`}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center min-h-[48px] min-w-[200px]"
            >
              <Crown className="w-5 h-5 mr-2" />
              {t.hero.ctaPrimary}
            </Link>
            <Link
              href={`/${locale}/colecciones`}
              className="border-2 border-yellow-400 hover:border-yellow-300 hover:bg-yellow-400/10 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center justify-center min-h-[48px] min-w-[200px]"
            >
              <Heart className="w-5 h-5 mr-2" />
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
