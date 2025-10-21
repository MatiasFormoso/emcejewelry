'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCartFeedback } from '@/hooks/useCartFeedback';
import { products, formatPrice } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useToastContext } from './ToastProvider';
import type { Dict, Locale } from '@/i18n/config';

interface CatalogGridProps {
  t: Dict;
  locale: Locale;
}

export default function CatalogGrid({ t, locale }: CatalogGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [addingToCart, setAddingToCart] = useState<string | null>(null);
  const [addingToFavorites, setAddingToFavorites] = useState<string | null>(null);
  const { addItem } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { success } = useToastContext();
  const { triggerCartAnimation } = useCartFeedback();

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
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-xl font-medium tracking-wider uppercase text-sm transition-all duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-sm hover:shadow-md ${
                selectedCategory === category.key
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div 
              key={product.id} 
              className="group bg-white border border-gray-200/50 hover:border-yellow-300/50 transition-all duration-500 overflow-hidden rounded-xl shadow-sm hover:shadow-xl"
              onMouseEnter={() => setHoveredProduct(product.id)}
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
                    <motion.div 
                      className="w-24 h-24 bg-gradient-to-br from-yellow-400/10 to-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-5xl">💎</span>
                    </motion.div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-black/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="flex space-x-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ 
                        y: hoveredProduct === product.id ? 0 : 20, 
                        opacity: hoveredProduct === product.id ? 1 : 0 
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
                    </motion.div>
                  </div>
                </motion.div>

                {/* Favorite Button */}
                <motion.button
                  onClick={() => handleToggleFavorite(product)}
                  disabled={addingToFavorites === product.id}
                  className={`absolute top-4 right-4 p-2 rounded-lg font-medium tracking-wider uppercase text-xs transition-all duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-lg ${
                    isFavorite(product.id) 
                      ? 'bg-red-500 text-white hover:bg-red-600' 
                      : 'bg-white/90 text-gray-700 hover:bg-white'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {addingToFavorites === product.id ? (
                    <motion.div
                      className="w-3 h-3 border border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <Heart className={`w-3 h-3 ${isFavorite(product.id) ? 'fill-current' : ''}`} />
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

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
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
              <span className="text-4xl">💎</span>
            </motion.div>
            <h3 className="text-xl font-playfair font-light text-gray-800 mb-4">
              {locale === 'en' ? 'No products found' : 'No se encontraron productos'}
            </h3>
            <p className="text-gray-600 font-light">
              {locale === 'en' ? 'Try selecting a different category' : 'Intenta seleccionar una categoría diferente'}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
