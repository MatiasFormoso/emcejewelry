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

type FeaturedCollectionsProps = { t: Dict; locale: Locale };

export default function FeaturedCollections({ t, locale }: FeaturedCollectionsProps) {
  const featuredProducts = getFeaturedProducts();
  const { addItem } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { success } = useToastContext();
  const { triggerCartAnimation } = useCartFeedback();
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [addingToCart, setAddingToCart] = useState<number | null>(null);
  const [addingToFavorites, setAddingToFavorites] = useState<number | null>(null);

  const handleAddToCart = async (product: any) => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative bg-white border border-gray-200/50 hover:border-primary/30 transition-all duration-500 overflow-hidden rounded-xl shadow-sm hover:shadow-xl"
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
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
                
                {/* Hover Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-black/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProduct === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="flex space-x-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ 
                        y: hoveredProduct === index ? 0 : 20, 
                        opacity: hoveredProduct === index ? 1 : 0 
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <motion.button
                        onClick={() => handleAddToCart(product)}
                        disabled={addingToCart === product.id}
                        className="bg-white text-black px-4 py-2 rounded-lg font-medium tracking-wider uppercase text-xs hover:bg-gray-100 active:scale-95 transition-all duration-200 flex items-center shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {addingToCart === product.id ? (
                          <motion.div
                            className="w-3 h-3 mr-1 border border-gray-400 border-t-transparent rounded-full"
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
                      
                      <motion.button 
                        onClick={() => handleToggleFavorite(product)}
                        disabled={addingToFavorites === product.id}
                        className={`px-4 py-2 rounded-lg font-medium tracking-wider uppercase text-xs transition-all duration-200 flex items-center shadow-lg ${
                          isFavorite(product.id) 
                            ? 'bg-red-500 text-white border border-red-500 hover:bg-red-600' 
                            : 'bg-transparent border border-white text-white hover:bg-white/10'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {addingToFavorites === product.id ? (
                          <motion.div
                            className="w-3 h-3 mr-1 border border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                        ) : (
                          <Heart className={`w-3 h-3 mr-1 ${isFavorite(product.id) ? 'fill-current' : ''}`} />
                        )}
                        {addingToFavorites === product.id 
                          ? (locale === 'en' ? 'Saving...' : 'Guardando...')
                          : (locale === 'en' ? 'Wishlist' : 'Favoritos')
                        }
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Featured Badge */}
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 text-xs font-light tracking-wider uppercase">
                  {locale === 'en' ? 'Featured' : 'Destacada'}
                </div>
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
                      {product.weight}g
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                    <span className="text-xs text-gray-500 ml-2 font-light">(4.9)</span>
                  </div>
                  <Link
                    href={`/${locale}/catalogo`}
                    className="text-primary text-xs font-light tracking-wider uppercase hover:text-primary/80 transition-colors duration-300 flex items-center"
                  >
                    {locale === 'en' ? 'View Details' : 'Ver Detalles'}
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
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