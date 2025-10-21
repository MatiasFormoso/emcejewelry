'use client';

import { ChevronDown, Sparkles, Crown, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Dict, Locale } from '@/i18n/config';

type HeroSectionProps = { t: Dict; locale: Locale };

export default function HeroSection({ t, locale }: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background Image - Optimized */}
      <Image
        src="/hero.png"
        alt="EMC Jewelry - Luxury Jewelry Collection"
        width={1920}
        height={1080}
        priority
        className="h-full w-full object-cover object-center"
      />
      
      {/* Professional Brand Filter Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-secondary/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center pt-12 pb-8 md:pt-16">
        <div className="text-center text-white px-4 sm:px-6 max-w-6xl w-full h-full flex flex-col justify-center">
          <div className="animate-elegant-fade-in">
            {/* Badge - Minimalist Style */}
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 border border-white/10">
              <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary" />
              <span className="text-white/90 text-xs font-light tracking-wider uppercase">{t.hero.badge}</span>
            </div>

            {/* Main Heading - Luxury Typography - Mobile Optimized */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-light text-white mb-3 md:mb-4 leading-tight tracking-tight">
              <span className="block gradient-text-gold font-normal">{t.hero.title}</span>
            </h1>

            {/* Subtitle - Elegant Spacing - Mobile Optimized */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light mb-6 md:mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed px-2">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons - Luxury Style - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8 px-4">
              <Link
                href={`/${locale}/catalogo`}
                className="group relative w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-none font-light tracking-wider uppercase text-xs md:text-sm hover:bg-white/90 transition-all duration-300 border border-white/20"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Crown className="w-3 h-3 md:w-4 md:h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  {t.hero.ctaPrimary}
                </span>
              </Link>
              <Link
                href={`/${locale}/colecciones`}
                className="group relative w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-transparent text-white rounded-none font-light tracking-wider uppercase text-xs md:text-sm border border-white/30 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Heart className="w-3 h-3 md:w-4 md:h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  {t.hero.ctaSecondary}
                </span>
              </Link>
            </div>

            {/* Features - Minimalist Cards - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto px-4">
              <div className="animate-elegant-slide-in-left">
                <div className="bg-white/5 backdrop-blur-sm rounded-none p-4 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center text-center group">
                  <div className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3 flex items-center justify-center">
                    <Crown className="w-4 h-4 md:w-5 md:h-5 text-white/80 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-white/90 text-xs md:text-sm font-light tracking-wider uppercase mb-1">{t.hero.features.quality}</h3>
                  <p className="text-white/60 text-xs font-light leading-relaxed hidden sm:block">
                    {t.hero.features.craftsmanship}
                  </p>
                </div>
              </div>

              <div className="animate-elegant-fade-in">
                <div className="bg-white/5 backdrop-blur-sm rounded-none p-4 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center text-center group">
                  <div className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white/80 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-white/90 text-xs md:text-sm font-light tracking-wider uppercase mb-1">{t.hero.features.craftsmanship}</h3>
                  <p className="text-white/60 text-xs font-light leading-relaxed hidden sm:block">
                    {t.hero.features.elegance}
                  </p>
                </div>
              </div>

              <div className="animate-elegant-slide-in-right">
                <div className="bg-white/5 backdrop-blur-sm rounded-none p-4 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center text-center group">
                  <div className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3 flex items-center justify-center">
                    <Heart className="w-4 h-4 md:w-5 md:h-5 text-white/80 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-white/90 text-xs md:text-sm font-light tracking-wider uppercase mb-1">{t.hero.features.elegance}</h3>
                  <p className="text-white/60 text-xs font-light leading-relaxed hidden sm:block">
                    {t.hero.features.quality}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Solo desktop */}
      <div className="absolute bottom-8 left-0 right-0 justify-center z-10 hidden md:flex">
        <div className="animate-elegant-float">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  );
}
