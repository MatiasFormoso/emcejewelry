'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useCart } from '@/contexts/CartContext';
import { useToastContext } from './ToastProvider';
import { formatPrice } from '@/lib/products';
import type { Dict, Locale } from '@/i18n/config';

interface FavoritesListProps {
  t: Dict;
  locale: Locale;
}

export default function FavoritesList({ t, locale }: FavoritesListProps) {
  const { state, removeFavorite, clearFavorites } = useFavorites();
  const { addItem } = useCart();
  const { success } = useToastContext();
  const [addingToCart, setAddingToCart] = useState<string | null>(null);
  const [removingFromFavorites, setRemovingFromFavorites] = useState<string | null>(null);

  const handleAddToCart = async (product: any) => {
    setAddingToCart(product.id);
    addItem(product);
    
    // Simular delay para feedback visual
    await new Promise(resolve => setTimeout(resolve, 500));
    
    success(
      locale === 'en' ? 'Added to Cart' : 'Agregado al Carrito',
      `${locale === 'en' ? product.nameEn : product.name} ${locale === 'en' ? 'has been added to your cart' : 'ha sido agregado a tu carrito'}`,
      <ShoppingCart className="w-5 h-5" />
    );
    
    setAddingToCart(null);
  };

  const handleRemoveFavorite = async (productId: string) => {
    setRemovingFromFavorites(productId);
    
    // Simular delay para feedback visual
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const product = state.items.find(p => p.id === productId);
    removeFavorite(productId);
    
    if (product) {
      success(
        locale === 'en' ? 'Removed from Favorites' : 'Eliminado de Favoritos',
        `${locale === 'en' ? product.nameEn : product.name} ${locale === 'en' ? 'has been removed from favorites' : 'ha sido eliminado de favoritos'}`,
        <Heart className="w-5 h-5" />
      );
    }
    
    setRemovingFromFavorites(null);
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
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="w-24 h-24 bg-gradient-to-br from-yellow-400/10 to-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-6"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-12 h-12 text-yellow-600" />
            </motion.div>
            <h2 className="text-2xl font-playfair font-light text-gray-800 mb-4">
              {locale === 'en' ? 'Your favorites list is empty' : 'Tu lista de favoritos está vacía'}
            </h2>
            <p className="text-gray-600 mb-8 font-light">
              {locale === 'en' ? 'Start adding products you love to your favorites' : 'Comienza agregando productos que te gusten a tus favoritos'}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`/${locale}/catalogo`}
                className="group relative px-8 py-3 bg-transparent text-gray-800 rounded-xl font-medium tracking-wider uppercase text-sm border border-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 inline-flex items-center shadow-sm hover:shadow-md"
              >
                <span className="relative z-10 flex items-center">
                  {locale === 'en' ? 'Browse Products' : 'Explorar Productos'}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <>
            {/* Favorites Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {state.items.map((product, index) => (
                <motion.div 
                  key={product.id} 
                  className="group relative bg-white border border-gray-200/50 hover:border-yellow-300/50 transition-all duration-500 overflow-hidden rounded-xl shadow-sm hover:shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
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
                    <motion.button
                      onClick={() => handleRemoveFavorite(product.id)}
                      disabled={removingFromFavorites === product.id}
                      className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-lg font-medium tracking-wider uppercase text-xs hover:bg-red-600 transition-all duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {removingFromFavorites === product.id ? (
                        <motion.div
                          className="w-3 h-3 border border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      ) : (
                        <Heart className="w-3 h-3 fill-current" />
                      )}
                    </motion.button>
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
                      <motion.button
                        onClick={() => handleAddToCart(product)}
                        disabled={addingToCart === product.id}
                        className="flex-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-white py-3 px-4 rounded-lg font-medium tracking-wider uppercase text-xs hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 flex items-center justify-center shadow-md hover:shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {addingToCart === product.id ? (
                          <motion.div
                            className="w-3 h-3 mr-1 border border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                        ) : (
                          <ShoppingCart className="w-3 h-3 mr-1" />
                        )}
                        {addingToCart === product.id 
                          ? (locale === 'en' ? 'Adding...' : 'Agregando...')
                          : (locale === 'en' ? 'Add to Cart' : 'Agregar')
                        }
                      </motion.button>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={`/${locale}/catalogo`}
                          className="flex items-center justify-center px-4 py-3 border border-yellow-500 text-yellow-600 rounded-lg font-medium tracking-wider uppercase text-xs hover:bg-yellow-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md hover:shadow-lg"
                        >
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Clear All Button */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: state.items.length * 0.1 }}
            >
              <motion.button
                onClick={clearFavorites}
                className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl font-medium tracking-wider uppercase text-sm hover:from-gray-200 hover:to-gray-300 transition-all duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {locale === 'en' ? 'Clear All Favorites' : 'Limpiar Todos los Favoritos'}
              </motion.button>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}

