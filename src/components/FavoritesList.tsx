'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, ArrowRight } from 'lucide-react';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/products';
import type { Dict, Locale } from '@/i18n/config';

interface FavoritesListProps {
  t: Dict;
  locale: Locale;
}

export default function FavoritesList({ t, locale }: FavoritesListProps) {
  const { state, removeFavorite, clearFavorites } = useFavorites();
  const { addItem } = useCart();

  const handleAddToCart = (product: any) => {
    addItem(product);
  };

  const handleRemoveFavorite = (productId: string) => {
    removeFavorite(productId);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6 tracking-tight">
            <span className="gradient-text-gold font-normal">{t.favorites.title}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            {t.favorites.subtitle}
          </p>
        </div>

        {/* Favorites Content */}
        {state.items.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-2xl font-playfair font-light text-gray-800 mb-4">
              {locale === 'en' ? 'Your favorites list is empty' : 'Tu lista de favoritos está vacía'}
            </h2>
            <p className="text-gray-600 mb-8 font-light">
              {locale === 'en' ? 'Start adding products you love to your favorites' : 'Comienza agregando productos que te gusten a tus favoritos'}
            </p>
            <Link
              href={`/${locale}/catalogo`}
              className="group relative px-8 py-3 bg-transparent text-gray-800 rounded-none font-light tracking-wider uppercase text-sm border border-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 inline-flex items-center"
            >
              <span className="relative z-10 flex items-center">
                {locale === 'en' ? 'Browse Products' : 'Explorar Productos'}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        ) : (
          <>
            {/* Favorites Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {state.items.map((product) => (
                <div key={product.id} className="group relative bg-white border border-gray-200/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                  {/* Product Image */}
                  <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                          <span className="text-5xl">💎</span>
                        </div>
                      </div>
                    </div>

                    {/* Remove from Favorites Button */}
                    <button
                      onClick={() => handleRemoveFavorite(product.id)}
                      className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-none font-light tracking-wider uppercase text-xs hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    >
                      <Heart className="w-3 h-3 fill-current" />
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

            {/* Clear All Button */}
            <div className="text-center">
              <button
                onClick={clearFavorites}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-none font-light tracking-wider uppercase text-sm hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                {locale === 'en' ? 'Clear All Favorites' : 'Limpiar Todos los Favoritos'}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

