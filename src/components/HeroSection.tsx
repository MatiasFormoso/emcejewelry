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
      <motion.div
        className="h-full w-full overflow-hidden"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/hero.png"
          alt="EMC Jewelry - Luxury Jewelry Collection"
          width={1920}
          height={1080}
          priority
          className="h-full w-full object-cover object-[center_75%] transition-transform duration-1000 hover:scale-105"
        />
      </motion.div>
             {/* Professional overlay system for optimal readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
             <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-black/30" />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
             
             {/* Elegant ambient particles */}
             <div className="absolute inset-0 overflow-hidden pointer-events-none">
               {[...Array(4)].map((_, i) => (
                 <motion.div
                   key={i}
                   className="absolute bg-white/5 rounded-full"
                   style={{
                     width: `${1 + (i % 2)}px`,
                     height: `${1 + (i % 2)}px`,
                     left: `${20 + i * 20}%`,
                     top: `${30 + i * 15}%`,
                   }}
                   animate={{
                     y: [0, -20, 0],
                     opacity: [0.3, 0.8, 0.3],
                   }}
                   transition={{
                     duration: 4 + i,
                     repeat: Infinity,
                     ease: "easeInOut",
                     delay: i * 1,
                   }}
                 />
               ))}
             </div>
      <div className="absolute inset-0 flex items-center justify-center pt-16">
        <div className="text-center text-white px-6 max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/8 backdrop-blur-md rounded-full px-4 py-2 mb-12 border border-white/20"
              whileHover={{ 
                backgroundColor: "rgba(255,255,255,0.12)",
                borderColor: "rgba(255,255,255,0.3)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
                animate={{ 
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-white/90 text-xs font-medium tracking-wider uppercase">{t.hero.badge}</span>
            </motion.div>
          </motion.div>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <span className="block bg-gradient-to-r from-white via-yellow-50 to-yellow-100 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl font-light mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
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
              className="group relative bg-white text-stone-900 px-8 py-3 rounded-sm text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-stone-50 flex items-center justify-center border border-stone-200 hover:border-stone-300"
            >
              <Crown className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:scale-105" />
              <span>{t.hero.ctaPrimary}</span>
            </Link>
            <Link
              href={`/${locale}/colecciones`}
              className="group relative border border-white/40 hover:border-white text-white px-8 py-3 rounded-sm text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/10 flex items-center justify-center"
            >
              <Heart className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:scale-105" />
              <span>{t.hero.ctaSecondary}</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}