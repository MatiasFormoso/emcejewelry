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
             
             {/* Professional ambient particles */}
             <div className="absolute inset-0 overflow-hidden pointer-events-none">
               {[...Array(8)].map((_, i) => (
                 <motion.div
                   key={i}
                   className="absolute bg-white/10 rounded-full backdrop-blur-sm"
                   style={{
                     width: `${2 + (i % 3)}px`,
                     height: `${2 + (i % 3)}px`,
                     left: `${15 + i * 12}%`,
                     top: `${25 + i * 8}%`,
                   }}
                   animate={{
                     y: [0, -30, 0],
                     opacity: [0.1, 0.6, 0.1],
                     scale: [1, 1.8, 1],
                     x: [0, Math.sin(i) * 10, 0],
                   }}
                   transition={{
                     duration: 6 + i * 0.5,
                     repeat: Infinity,
                     ease: "easeInOut",
                     delay: i * 0.8,
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
              className="inline-flex items-center space-x-4 bg-white/15 backdrop-blur-2xl rounded-full px-12 py-6 mb-20 border border-white/30 shadow-2xl"
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: "rgba(255,255,255,0.2)",
                borderColor: "rgba(255,255,255,0.4)"
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div 
                className="w-4 h-4 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full shadow-lg"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.9, 1, 0.9],
                  boxShadow: [
                    "0 0 0 0 rgba(255, 215, 0, 0.4)",
                    "0 0 0 8px rgba(255, 215, 0, 0)",
                    "0 0 0 0 rgba(255, 215, 0, 0)"
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-white text-sm font-semibold tracking-[0.2em] uppercase drop-shadow-lg">{t.hero.badge}</span>
            </motion.div>
          </motion.div>
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light mb-12 md:mb-16 leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
          >
            <motion.span 
              className="block bg-gradient-to-r from-white via-yellow-50 to-yellow-100 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))"
              }}
            >
              {t.hero.title}
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl font-light mb-20 max-w-5xl mx-auto text-white leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.005,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
          >
            <motion.span 
              className="drop-shadow-xl"
              animate={{
                textShadow: [
                  "0 2px 4px rgba(0,0,0,0.6)",
                  "0 4px 12px rgba(0,0,0,0.7)",
                  "0 2px 4px rgba(0,0,0,0.6)"
                ]
              }}
              transition={{
                duration: 4,
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
              className="group relative bg-white text-stone-900 px-16 py-8 rounded-sm text-lg font-semibold tracking-wider uppercase transition-all duration-700 hover:bg-stone-50 flex items-center justify-center overflow-hidden border-2 border-white/40 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-stone-50 to-stone-100 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <Crown className="w-6 h-6 mr-4 relative z-10 transition-all duration-400 group-hover:scale-110 group-hover:rotate-12" />
              <span className="relative z-10 transition-all duration-400 group-hover:tracking-widest group-hover:font-bold">{t.hero.ctaPrimary}</span>
            </Link>
            <Link
              href={`/${locale}/colecciones`}
              className="group relative border-2 border-white/50 hover:border-white text-white px-16 py-8 rounded-sm text-lg font-semibold tracking-wider uppercase transition-all duration-700 backdrop-blur-2xl hover:bg-white/15 flex items-center justify-center overflow-hidden transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/15 to-white/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <Heart className="w-6 h-6 mr-4 relative z-10 transition-all duration-400 group-hover:scale-110 group-hover:rotate-12" />
              <span className="relative z-10 transition-all duration-400 group-hover:tracking-widest group-hover:font-bold">{t.hero.ctaSecondary}</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}