'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';
import { Crown, Heart, Sparkles, Gem, Star } from 'lucide-react';
import type { Dict, Locale } from '@/i18n/config';

type HeroSectionProps = { t: Dict; locale: Locale };

export default function HeroSection({ t, locale }: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden" style={{ height: '100vh', minHeight: '100vh' }}>
      <Image
        src="/hero.png"
        alt="EMC Jewelry - Luxury Jewelry Collection"
        width={1920}
        height={1080}
        priority
        className="h-full w-full object-cover object-[center_75%]"
      />
         {/* Elegant gradient overlay with gold accents */}
         <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/70" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
         {/* Elegant floating jewelry elements */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <motion.div
             className="absolute top-20 left-10 text-yellow-400/20"
             animate={{ 
               y: [0, -20, 0],
               rotate: [0, 5, 0]
             }}
             transition={{ 
               duration: 6, 
               repeat: Infinity, 
               ease: "easeInOut" 
             }}
           >
             <Gem className="w-8 h-8" />
           </motion.div>
           <motion.div
             className="absolute top-32 right-16 text-yellow-300/15"
             animate={{ 
               y: [0, 15, 0],
               rotate: [0, -3, 0]
             }}
             transition={{ 
               duration: 8, 
               repeat: Infinity, 
               ease: "easeInOut",
               delay: 1
             }}
           >
             <Star className="w-6 h-6" />
           </motion.div>
           <motion.div
             className="absolute bottom-32 left-20 text-yellow-500/10"
             animate={{ 
               y: [0, -10, 0],
               rotate: [0, 2, 0]
             }}
             transition={{ 
               duration: 7, 
               repeat: Infinity, 
               ease: "easeInOut",
               delay: 2
             }}
           >
             <Sparkles className="w-10 h-10" />
           </motion.div>
         </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
                 <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-lg rounded-full px-8 py-4 mb-8 border border-yellow-400/30 shadow-lg">
                   <Sparkles className="w-5 h-5 text-yellow-300" />
                   <span className="text-yellow-100 text-sm font-medium tracking-wider uppercase">{t.hero.badge}</span>
                 </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 md:mb-8 leading-[1.05] md:leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent font-normal">
              {t.hero.title}
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl font-light mb-12 max-w-4xl mx-auto text-white/95 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href={`/${locale}/catalogo`}
              className="group inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 shadow-lg"
            >
              <span className="flex items-center justify-center">
                <Crown className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {t.hero.ctaPrimary}
              </span>
            </Link>
            <Link
              href={`/${locale}/colecciones`}
              className="group inline-block border-2 border-yellow-400/60 hover:border-yellow-300 hover:bg-yellow-400/10 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:scale-105 shadow-lg"
            >
              <span className="flex items-center justify-center">
                <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                {t.hero.ctaSecondary}
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
