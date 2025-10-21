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
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

               {/* Product Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {filteredProducts.map((product, index) => (
                   <div
                     key={product.id}
                     className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                   >
                     {/* Product Image */}
                     <div className="h-64 bg-gray-100 flex items-center justify-center relative">
                       <div className="text-center">
                         <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                           <span className="text-3xl">💎</span>
                         </div>
                       </div>
                       
                       {/* Favorite Button */}
                       <button
                         onClick={(e) => {
                           e.preventDefault();
                           e.stopPropagation();
                           handleToggleFavorite(product);
                         }}
                         disabled={addingToFavorites === product.id}
                         className={`absolute top-4 right-4 p-2 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center min-h-[44px] min-w-[44px] ${
                           isFavorite(product.id)
                             ? 'bg-red-500 text-white hover:bg-red-600'
                             : 'bg-white/90 text-gray-700 hover:bg-white'
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
                             {product.weight}
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
                         
                         <Link
                           href={`/${locale}/catalogo`}
                           className="px-3 py-2 border border-yellow-500 text-yellow-600 rounded-lg font-medium text-sm hover:bg-yellow-500 hover:text-white transition-colors duration-200 flex items-center justify-center min-h-[44px] min-w-[44px]"
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
