'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShoppingCart, Heart } from 'lucide-react';
import { getFeaturedProducts, formatPrice } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useSimpleToast } from './SimpleToast';
import type { Dict, Locale } from '@/i18n/config';
import { useState } from 'react';

type FeaturedCollectionsProps = { t: Dict; locale: Locale };

export default function FeaturedCollections({ t, locale }: FeaturedCollectionsProps) {
  const featuredProducts = getFeaturedProducts();
  const { addItem } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { success } = useSimpleToast();
  const [addingToCart, setAddingToCart] = useState<string | null>(null);
  const [addingToFavorites, setAddingToFavorites] = useState<string | null>(null);

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
    <section className="py-20 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-800 mb-6 tracking-tight">
            {t.featuredCollections.title}
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
            {t.featuredCollections.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-stone-200 rounded-sm shadow-sm hover:shadow-md transition-all duration-200 ease-out"
            >
              {/* Product Image */}
              <div className="h-64 bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-stone-200 to-stone-300 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <div className="w-8 h-8 bg-gradient-to-br from-stone-400 to-stone-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full opacity-60"></div>
                    </div>
                  </div>
                  <p className="text-xs text-stone-500 font-light tracking-wide uppercase">Jewelry</p>
                </div>
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
                      {product.weight}g
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
                  
                  <button
                    onClick={() => handleToggleFavorite(product)}
                    disabled={addingToFavorites === product.id}
                           className={`px-3 py-2 rounded-sm font-light text-sm transition-all duration-200 ease-out flex items-center justify-center min-h-[44px] min-w-[44px] ${
                             isFavorite(product.id)
                               ? 'bg-stone-600 text-white hover:bg-stone-700'
                               : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
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

        {/* CTA */}
        <div className="text-center mt-20">
                 <Link
                   href={`/${locale}/colecciones`}
                   className="group relative px-8 py-3 bg-stone-800 text-white rounded-sm font-light tracking-wide uppercase text-sm hover:bg-stone-900 transition-all duration-200 ease-out inline-flex items-center"
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