'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, ArrowRight } from 'lucide-react';
import { products, formatPrice } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import type { Dict, Locale } from '@/i18n/config';

interface CatalogGridProps {
  t: Dict;
  locale: Locale;
}

export default function CatalogGrid({ t, locale }: CatalogGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addItem } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  // Manejar parámetros de URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const category = urlParams.get('category');
      if (category && ['rings', 'earrings', 'ear-cuffs', 'bracelets', 'chokers', 'sets', 'pearls', 'colombian-emeralds', 'natural-stones', 'anklets'].includes(category)) {
        setSelectedCategory(category);
      }
    }
  }, []);

  const categories = [
    { key: 'all', label: t.catalog.filters.all },
    { key: 'rings', label: t.catalog.filters.rings },
    { key: 'earrings', label: t.catalog.filters.earrings },
    { key: 'ear-cuffs', label: t.catalog.filters['ear-cuffs'] },
    { key: 'bracelets', label: t.catalog.filters.bracelets },
    { key: 'chokers', label: t.catalog.filters.chokers },
    { key: 'sets', label: t.catalog.filters.sets },
    { key: 'pearls', label: t.catalog.filters.pearls },
    { key: 'colombian-emeralds', label: t.catalog.filters['colombian-emeralds'] },
    { key: 'natural-stones', label: t.catalog.filters['natural-stones'] },
    { key: 'anklets', label: t.catalog.filters.anklets },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: any) => {
    addItem(product);
  };

  const handleToggleFavorite = (product: any) => {
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-none font-light tracking-wider uppercase text-sm transition-all duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 ${
                selectedCategory === category.key
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white border border-gray-200/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
              {/* Product Image */}
              <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                      <span className="text-5xl">💎</span>
                    </div>
                  </div>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => handleToggleFavorite(product)}
                  className={`absolute top-4 right-4 p-2 rounded-none font-light tracking-wider uppercase text-xs transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 ${
                    isFavorite(product.id) 
                      ? 'bg-red-500 text-white hover:bg-red-600' 
                      : 'bg-white/80 text-gray-700 hover:bg-white'
                  }`}
                >
                  <Heart className={`w-3 h-3 ${isFavorite(product.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-playfair font-light text-gray-800 mb-2 tracking-wide">
                  {locale === 'en' ? product.nameEn : product.name}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm font-light leading-relaxed">
                  {locale === 'en' ? product.descriptionEn : product.description}
                </p>
                
                {/* Materials */}
                <div className="mb-4">
                  <h4 className="text-xs font-light text-gray-500 uppercase tracking-wider mb-2">
                    {locale === 'en' ? 'Materials' : 'Materiales'}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {(locale === 'en' ? product.materialsEn : product.materials).map((material, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-light">
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Weight */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-playfair font-light gradient-text-gold">
                    {formatPrice(product.price)}
                  </span>
                  {product.weight && (
                    <span className="text-xs text-gray-500 font-light">
                      {product.weight}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-primary text-white py-3 px-4 rounded-none font-light tracking-wider uppercase text-xs hover:bg-primary/90 transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 flex items-center justify-center"
                  >
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    {locale === 'en' ? 'Add to Cart' : 'Agregar'}
                  </button>
                  <Link
                    href={`/${locale}/catalogo`}
                    className="flex items-center justify-center px-4 py-3 border border-primary text-primary rounded-none font-light tracking-wider uppercase text-xs hover:bg-primary hover:text-white transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  >
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">💎</span>
            </div>
            <h3 className="text-xl font-playfair font-light text-gray-800 mb-4">
              {locale === 'en' ? 'No products found' : 'No se encontraron productos'}
            </h3>
            <p className="text-gray-600 font-light">
              {locale === 'en' ? 'Try selecting a different category' : 'Intenta seleccionar una categoría diferente'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
