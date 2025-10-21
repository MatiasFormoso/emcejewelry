'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, ArrowRight } from 'lucide-react';
import { products, formatPrice } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useSimpleToast } from './SimpleToast';
import type { Dict, Locale } from '@/i18n/config';

interface CatalogGridProps {
  t: Dict;
  locale: Locale;
}

export default function CatalogGrid({ t, locale }: CatalogGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [addingToCart, setAddingToCart] = useState<string | null>(null);
  const [addingToFavorites, setAddingToFavorites] = useState<string | null>(null);
  const { addItem } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { success } = useSimpleToast();

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

  const handleAddToCart = async (product: any) => {
    if (addingToCart === product.id) return;
    
    setAddingToCart(product.id);
    addItem(product);

    success(
      locale === 'en' ? 'Added to Cart' : 'Agregado al Carrito',
      `${locale === 'en' ? product.nameEn : product.name} ${locale === 'en' ? 'has been added to your cart' : 'ha sido agregado a tu carrito'}`,
      <ShoppingCart className="w-5 h-5" />
    );

    setTimeout(() => setAddingToCart(null), 500);
  };

  const handleToggleFavorite = async (product: any) => {
    if (addingToFavorites === product.id) return;
    
    setAddingToFavorites(product.id);

    if (isFavorite(product.id)) {
      removeFavorite(product.id);
      success(
        locale === 'en' ? 'Removed from Favorites' : 'Eliminado de Favoritos',
        `${locale === 'en' ? product.nameEn : product.name} ${locale === 'en' ? 'has been removed from favorites' : 'ha sido eliminado de favoritos'}`,
        <Heart className="w-5 h-5" />
      );
    } else {
      addFavorite(product);
      success(
        locale === 'en' ? 'Added to Favorites' : 'Agregado a Favoritos',
        `${locale === 'en' ? product.nameEn : product.name} ${locale === 'en' ? 'has been added to favorites' : 'ha sido agregado a favoritos'}`,
        <Heart className="w-5 h-5 fill-current" />
      );
    }

    setTimeout(() => setAddingToFavorites(null), 300);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
                     className={`px-6 py-3 rounded-sm font-light tracking-wide uppercase text-sm transition-all duration-200 ease-out focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-sm hover:shadow-md ${
                       selectedCategory === category.key
                         ? 'bg-stone-800 text-white shadow-lg'
                         : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900'
                     }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-stone-200 rounded-sm shadow-sm hover:shadow-md transition-all duration-200 ease-out"
            >
              {/* Product Image */}
              <div className="h-64 bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-stone-200 to-stone-300 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <div className="w-8 h-8 bg-gradient-to-br from-stone-400 to-stone-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full opacity-60"></div>
                    </div>
                  </div>
                  <p className="text-xs text-stone-500 font-light tracking-wide uppercase">Jewelry</p>
                </div>
                
                {/* Favorite Button */}
                <button
                  onClick={() => handleToggleFavorite(product)}
                  disabled={addingToFavorites === product.id}
                           className={`absolute top-4 right-4 p-2 rounded-sm font-light text-sm transition-all duration-200 ease-out flex items-center justify-center min-h-[44px] min-w-[44px] ${
                             isFavorite(product.id)
                               ? 'bg-stone-600 text-white hover:bg-stone-700'
                               : 'bg-white/90 text-stone-600 hover:bg-white'
                           }`}
                >
                  {addingToFavorites === product.id ? (
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Heart className={`w-4 h-4 ${isFavorite(product.id) ? 'fill-current' : ''}`} />
                  )}
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                       <h3 className="text-lg font-light text-stone-800 mb-2 tracking-wide">
                         {locale === 'en' ? product.nameEn : product.name}
                       </h3>

                <p className="text-stone-600 mb-3 text-sm font-light leading-relaxed">
                  {locale === 'en' ? product.descriptionEn : product.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-light text-stone-700 tracking-wide">
                    {formatPrice(product.price)}
                  </span>
                  {product.weight && (
                    <span className="text-xs text-stone-500 font-light">
                      {product.weight}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={addingToCart === product.id}
                           className="flex-1 bg-stone-800 hover:bg-stone-900 text-white py-2 px-4 rounded-sm font-light text-sm transition-all duration-200 ease-out flex items-center justify-center min-h-[44px] tracking-wide"
                  >
                    {addingToCart === product.id ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        {locale === 'en' ? 'Add to Cart' : 'Agregar'}
                      </>
                    )}
                  </button>
                  
                  <Link
                    href={`/${locale}/catalogo`}
                           className="px-3 py-2 border border-stone-300 text-stone-700 rounded-sm font-light text-sm hover:bg-stone-800 hover:text-white transition-all duration-200 ease-out flex items-center justify-center min-h-[44px] min-w-[44px]"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-stone-200/20 to-stone-300/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-stone-400 to-stone-500 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full opacity-60"></div>
              </div>
            </div>
            <h3 className="text-xl font-light text-stone-800 mb-4 tracking-wide">
              {locale === 'en' ? 'No products found' : 'No se encontraron productos'}
            </h3>
            <p className="text-stone-600 font-light">
              {locale === 'en' ? 'Try selecting a different category' : 'Intenta seleccionar una categoría diferente'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}