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
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
             
             {/* Subtle floating particles */}
             <div className="absolute inset-0 overflow-hidden pointer-events-none">
               {[...Array(6)].map((_, i) => (
                 <motion.div
                   key={i}
                   className="absolute w-1 h-1 bg-white/20 rounded-full"
                   style={{
                     left: `${20 + i * 15}%`,
                     top: `${30 + i * 10}%`,
                   }}
                   animate={{
                     y: [0, -20, 0],
                     opacity: [0.2, 0.8, 0.2],
                     scale: [1, 1.5, 1],
                   }}
                   transition={{
                     duration: 4 + i,
                     repeat: Infinity,
                     ease: "easeInOut",
                     delay: i * 0.5,
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
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl rounded-full px-10 py-5 mb-16 border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-white text-sm font-medium tracking-[0.15em] uppercase">{t.hero.badge}</span>
            </motion.div>
          </motion.div>
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-8 md:mb-12 leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.span 
              className="block bg-gradient-to-r from-white via-yellow-50 to-yellow-100 bg-clip-text text-transparent drop-shadow-lg"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              {t.hero.title}
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl font-light mb-16 max-w-4xl mx-auto text-white/90 leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.3 }
            }}
          >
            <motion.span 
              className="drop-shadow-md"
              animate={{
                textShadow: [
                  "0 2px 4px rgba(0,0,0,0.3)",
                  "0 4px 8px rgba(0,0,0,0.4)",
                  "0 2px 4px rgba(0,0,0,0.3)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {t.hero.subtitle}
            </motion.span>
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href={`/${locale}/catalogo`}
              className="group relative bg-white text-stone-900 px-12 py-6 rounded-sm text-base font-medium tracking-wider uppercase transition-all duration-700 hover:bg-stone-50 flex items-center justify-center overflow-hidden border border-white/30 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-stone-50 to-stone-100 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <Crown className="w-5 h-5 mr-3 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative z-10 transition-all duration-300 group-hover:tracking-widest">{t.hero.ctaPrimary}</span>
            </Link>
            <Link
              href={`/${locale}/colecciones`}
              className="group relative border-2 border-white/40 hover:border-white text-white px-12 py-6 rounded-sm text-base font-medium tracking-wider uppercase transition-all duration-700 backdrop-blur-xl hover:bg-white/10 flex items-center justify-center overflow-hidden transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <Heart className="w-5 h-5 mr-3 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative z-10 transition-all duration-300 group-hover:tracking-widest">{t.hero.ctaSecondary}</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}