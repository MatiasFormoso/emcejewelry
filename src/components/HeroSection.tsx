'use client';

import { ChevronDown, Sparkles, Crown, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Dict, Locale } from '@/i18n/config';

type HeroSectionProps = { t: Dict; locale: Locale };

export default function HeroSection({ t, locale }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden golden-particles">
      {/* Background Image - Optimized */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <Image
          src="/hero.png"
          alt="EMC Jewelry - Luxury Jewelry Collection"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center min-h-screen pt-20 pb-12 sm:pt-24 sm:pb-16">
        <div className="animate-elegant-fade-in">
          {/* Badge - Minimalist Style */}
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-4 sm:mb-6 border border-white/10">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-white/90 text-xs font-light tracking-wider uppercase">{t.hero.badge}</span>
          </div>

          {/* Main Heading - Luxury Typography */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-light text-white mb-3 sm:mb-4 leading-[0.9] tracking-tight">
            <span className="block gradient-text-gold font-normal">{t.hero.title}</span>
          </h1>

          {/* Subtitle - Elegant Spacing */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed font-light tracking-wide px-2">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons - Luxury Style */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8 px-4">
            <Link
              href={`/${locale}/catalogo`}
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black rounded-none font-light tracking-wider uppercase text-xs sm:text-sm hover:bg-white/90 transition-all duration-300 border border-white/20"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Crown className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {t.hero.ctaPrimary}
              </span>
            </Link>
            <Link
              href={`/${locale}/colecciones`}
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent text-white rounded-none font-light tracking-wider uppercase text-xs sm:text-sm border border-white/30 hover:bg-white/5 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                {t.hero.ctaSecondary}
              </span>
            </Link>
          </div>

          {/* Features - Minimalist Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto px-2 sm:px-4">
            <div className="animate-elegant-slide-in-left">
              <div className="bg-white/5 backdrop-blur-sm rounded-none p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center text-center group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 flex items-center justify-center">
                  <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-white/90 text-xs sm:text-sm font-light tracking-wider uppercase mb-1">{t.hero.features.quality}</h3>
                <p className="text-white/60 text-xs font-light leading-relaxed">
                  {t.hero.features.craftsmanship}
                </p>
              </div>
            </div>

            <div className="animate-elegant-fade-in">
              <div className="bg-white/5 backdrop-blur-sm rounded-none p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center text-center group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-white/90 text-xs sm:text-sm font-light tracking-wider uppercase mb-1">{t.hero.features.craftsmanship}</h3>
                <p className="text-white/60 text-xs font-light leading-relaxed">
                  {t.hero.features.elegance}
                </p>
              </div>
            </div>

            <div className="animate-elegant-slide-in-right">
              <div className="bg-white/5 backdrop-blur-sm rounded-none p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center text-center group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 flex items-center justify-center">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-white/90 text-xs sm:text-sm font-light tracking-wider uppercase mb-1">{t.hero.features.elegance}</h3>
                <p className="text-white/60 text-xs font-light leading-relaxed">
                  {t.hero.features.quality}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 animate-elegant-float">
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" />
      </div>
    </section>
  );
}
