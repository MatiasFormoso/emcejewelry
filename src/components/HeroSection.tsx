'use client';

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';
import { Crown, Heart } from 'lucide-react';
import type { Dict, Locale } from '@/i18n/config';

type HeroSectionProps = { t: Dict; locale: Locale };

export default function HeroSection({ t, locale }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -20]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section id="hero" className="relative overflow-hidden">
      <motion.div
        className="h-full w-full overflow-hidden"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ y, opacity }}
      >
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/hero.png"
            alt="EMC Jewelry - Luxury Jewelry Collection"
            width={1920}
            height={1080}
            priority
            className="h-full w-full object-cover object-[center_75%]"
          />
        </motion.div>
      </motion.div>
             {/* Professional overlay system for optimal readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
             <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/5 to-black/20" />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />
             
             {/* Elegant ambient particles */}
             <div className="absolute inset-0 overflow-hidden pointer-events-none">
               {[...Array(6)].map((_, i) => (
                 <motion.div
                   key={i}
                   className="absolute bg-white/8 rounded-full blur-[0.5px]"
                   style={{
                     width: `${1.5 + (i % 3) * 0.5}px`,
                     height: `${1.5 + (i % 3) * 0.5}px`,
                     left: `${15 + i * 15}%`,
                     top: `${25 + i * 12}%`,
                   }}
                   animate={{
                     y: [0, -30, 0],
                     opacity: [0.2, 0.6, 0.2],
                     scale: [1, 1.2, 1],
                   }}
                   transition={{
                     duration: 6 + i * 0.5,
                     repeat: Infinity,
                     ease: [0.4, 0, 0.6, 1],
                     delay: i * 0.8,
                   }}
                 />
               ))}
             </div>
      <div className="absolute inset-0 flex items-center justify-center pt-16">
        <div className="text-center text-white px-6 max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/8 backdrop-blur-md rounded-full px-4 py-2 mb-12 border border-white/20"
              whileHover={{ 
                backgroundColor: "rgba(255,255,255,0.12)",
                borderColor: "rgba(255,255,255,0.3)",
                scale: 1.05
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div 
                className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
                animate={{ 
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.6, 1]
                }}
              />
              <span className="text-white/90 text-xs font-medium tracking-wider uppercase">{t.hero.badge}</span>
            </motion.div>
          </motion.div>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span 
              className="block bg-gradient-to-r from-white via-yellow-50 to-yellow-100 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              {t.hero.title}
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl font-light mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Link
                href={`/${locale}/catalogo`}
                className="group relative bg-white text-stone-900 px-8 py-3 rounded-sm text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-stone-50 flex items-center justify-center border border-stone-200 hover:border-stone-300 hover:shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Crown className="w-4 h-4 mr-2" />
                </motion.div>
                <span>{t.hero.ctaPrimary}</span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Link
                href={`/${locale}/colecciones`}
                className="group relative border border-white/40 hover:border-white text-white px-8 py-3 rounded-sm text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/10 flex items-center justify-center hover:shadow-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Heart className="w-4 h-4 mr-2" />
                </motion.div>
                <span>{t.hero.ctaSecondary}</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}