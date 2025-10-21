'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, ShoppingCart, Heart, CheckCircle } from 'lucide-react';
import { getFeaturedProducts, formatPrice } from '@/lib/products';
import { useCartFeedback } from '@/hooks/useCartFeedback';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useToastContext } from './ToastProvider';
import type { Dict, Locale } from '@/i18n/config';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

type FeaturedCollectionsProps = { t: Dict; locale: Locale };

export default function FeaturedCollections({ t, locale }: FeaturedCollectionsProps) {
  const featuredProducts = getFeaturedProducts();
  const { addItem } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { success } = useToastContext();
  const { triggerCartAnimation } = useCartFeedback();
  const router = useRouter();
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [addingToCart, setAddingToCart] = useState<string | null>(null);
  const [addingToFavorites, setAddingToFavorites] = useState<string | null>(null);

  const handleAddToCart = async (product: any) => {
    if (addingToCart === product.id) return; // Prevent double calls
    
    setAddingToCart(product.id);
    addItem(product);
    
    // Trigger visual feedback
    triggerCartAnimation(locale === 'en' ? product.nameEn : product.name);
    
    // Simular delay para feedback visual
    await new Promise(resolve => setTimeout(resolve, 500));

    success(
      locale === 'en' ? 'Added to Cart' : 'Agregado al Carrito',
      `${locale === 'en' ? product.nameEn : product.name} ${locale === 'en' ? 'has been added to your cart' : 'ha sido agregado a tu carrito'}`,
      <ShoppingCart className="w-5 h-5" />
    );

    setAddingToCart(null);
  };

  const handleToggleFavorite = async (product: any) => {
    if (addingToFavorites === product.id) return; // Prevent double calls
    
    setAddingToFavorites(product.id);
    
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
      await new Promise(resolve => setTimeout(resolve, 300));
      success(
        locale === 'en' ? 'Removed from Favorites' : 'Eliminado de Favoritos',
        `${locale === 'en' ? product.nameEn : product.name} ${locale === 'en' ? 'has been removed from favorites' : 'ha sido eliminado de favoritos'}`,
        <Heart className="w-5 h-5" />
      );
    } else {
      addFavorite(product);
      await new Promise(resolve => setTimeout(resolve, 300));
      success(
        locale === 'en' ? 'Added to Favorites' : 'Agregado a Favoritos',
        `${locale === 'en' ? product.nameEn : product.name} ${locale === 'en' ? 'has been added to favorites' : 'ha sido agregado a favoritos'}`,
        <Heart className="w-5 h-5 fill-current" />
      );
    }

    setAddingToFavorites(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Luxury Style */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-light text-gray-800 mb-6 tracking-tight">
            <span className="gradient-text-gold font-normal">{t.featuredCollections.title}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            {t.featuredCollections.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💎</span>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {locale === 'en' ? product.nameEn : product.name}
                </h3>

                <p className="text-gray-600 mb-3 text-sm">
                  {locale === 'en' ? product.descriptionEn : product.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-yellow-600">
                    {formatPrice(product.price)}
                  </span>
                  {product.weight && (
                    <span className="text-xs text-gray-500">
                      {product.weight}g
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    disabled={addingToCart === product.id}
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center min-h-[44px]"
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
                  
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleToggleFavorite(product);
                    }}
                    disabled={addingToFavorites === product.id}
                    className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center min-h-[44px] min-w-[44px] ${
                      isFavorite(product.id)
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {addingToFavorites === product.id ? (
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Heart className={`w-4 h-4 ${isFavorite(product.id) ? 'fill-current' : ''}`} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - Luxury Style */}
        <div className="text-center mt-20">
          <Link
            href={`/${locale}/colecciones`}
            className="group relative px-8 py-3 bg-transparent text-gray-800 rounded-none font-light tracking-wider uppercase text-sm border border-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 inline-flex items-center"
          >
            <span className="relative z-10 flex items-center">
              {t.featuredCollections.cta}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}