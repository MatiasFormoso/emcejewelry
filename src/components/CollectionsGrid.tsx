'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Dict, Locale } from '@/i18n/config';

interface CollectionsGridProps {
  t: Dict;
  locale: Locale;
}

export default function CollectionsGrid({ t, locale }: CollectionsGridProps) {
  const collections = [
    { 
      name: locale === 'en' ? 'Classic Collection' : 'Colección Clásica', 
      description: locale === 'en' ? 'Timeless pieces that never go out of style' : 'Piezas atemporales que nunca pasan de moda',
      href: `/${locale}/catalogo?category=rings`
    },
    { 
      name: locale === 'en' ? 'Modern Collection' : 'Colección Moderna', 
      description: locale === 'en' ? 'Contemporary designs for current style' : 'Diseños contemporáneos para el estilo actual',
      href: `/${locale}/catalogo?category=necklaces`
    },
    { 
      name: locale === 'en' ? 'Vintage Collection' : 'Colección Vintage', 
      description: locale === 'en' ? 'Retro inspiration with a modern touch' : 'Inspiración retro con un toque moderno',
      href: `/${locale}/catalogo?category=earrings`
    },
    { 
      name: locale === 'en' ? 'Minimalist Collection' : 'Colección Minimalista', 
      description: locale === 'en' ? 'Elegance in its purest form' : 'Elegancia en su forma más pura',
      href: `/${locale}/catalogo?category=bracelets`
    },
    { 
      name: locale === 'en' ? 'Bohemian Collection' : 'Colección Bohemia', 
      description: locale === 'en' ? 'Free and artistic style' : 'Estilo libre y artístico',
      href: `/${locale}/catalogo`
    },
    { 
      name: locale === 'en' ? 'Elegant Collection' : 'Colección Elegante', 
      description: locale === 'en' ? 'Sophistication for special occasions' : 'Sofisticación para ocasiones especiales',
      href: `/${locale}/catalogo`
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link
              key={index}
              href={collection.href}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-none p-8 text-center hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-yellow-400/20 rounded-none mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl">💎</span>
              </div>
              <h3 className="text-xl font-playfair font-light mb-3 text-gray-800 group-hover:text-primary transition-colors duration-300">
                {collection.name}
              </h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                {collection.description}
              </p>
              <div className="flex items-center justify-center text-primary group-hover:text-gray-800 transition-colors duration-300">
                <span className="text-sm font-light tracking-wider uppercase mr-2">
                  {locale === 'en' ? 'Explore Collection' : 'Explorar Colección'}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
