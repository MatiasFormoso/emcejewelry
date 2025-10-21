'use client';

import React, { useState, useEffect } from 'react';
import { Search, X, ShoppingCart, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, formatPrice } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useToastContext } from './ToastProvider';
import type { Dict, Locale } from '@/i18n/config';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Dict;
  locale: Locale;
}

export default function SearchModal({ isOpen, onClose, t, locale }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(products);
  const [addingToCart, setAddingToCart] = useState<string | null>(null);
  const [addingToFavorites, setAddingToFavorites] = useState<string | null>(null);
  const { addItem } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { success } = useToastContext();

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults(products);
    } else {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.descriptionEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.materials.some(material => material.toLowerCase().includes(searchTerm.toLowerCase())) ||
        product.materialsEn.some(material => material.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setSearchResults(filtered);
    }
  }, [searchTerm]);

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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <motion.div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
        
        {/* Search Modal */}
        <motion.div 
          className="absolute top-0 left-0 right-0 bg-white shadow-2xl"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="max-w-4xl mx-auto px-4 py-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <motion.h2 
                className="text-2xl font-playfair font-light text-gray-800"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {locale === 'en' ? 'Search Products' : 'Buscar Productos'}
              </motion.h2>
              <motion.button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg hover:bg-gray-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <X className="h-6 w-6" />
              </motion.button>
            </div>

            {/* Search Input */}
            <motion.div 
              className="relative mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={locale === 'en' ? 'Search for jewelry...' : 'Buscar joyas...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl font-medium tracking-wide focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 focus:outline-none shadow-sm hover:shadow-md"
                autoFocus
              />
            </motion.div>

            {/* Search Results */}
            <motion.div 
              className="max-h-96 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {searchResults.length === 0 ? (
                <motion.div 
                  className="text-center py-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-yellow-400/10 to-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-2xl">💎</span>
                  </motion.div>
                  <p className="text-gray-500 font-light">
                    {locale === 'en' ? 'No products found' : 'No se encontraron productos'}
                  </p>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {searchResults.map((product, index) => (
                    <motion.div 
                      key={product.id} 
                      className="border border-gray-200 p-4 hover:border-yellow-300/50 transition-all duration-300 rounded-xl hover:shadow-md bg-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className="w-16 h-16 bg-gradient-to-br from-yellow-400/10 to-amber-400/10 rounded-full flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-2xl">💎</span>
                        </motion.div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-playfair font-medium text-gray-800 truncate">
                            {locale === 'en' ? product.nameEn : product.name}
                          </h3>
                          <p className="text-xs text-gray-500 truncate">
                            {locale === 'en' ? product.descriptionEn : product.description}
                          </p>
                          <p className="text-sm font-playfair font-medium text-yellow-600">
                            {formatPrice(product.price)}
                          </p>
                        </div>

                        <div className="flex flex-col space-y-2">
                          <motion.button
                            onClick={() => handleAddToCart(product)}
                            disabled={addingToCart === product.id}
                            className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs font-medium tracking-wider uppercase hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg shadow-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {addingToCart === product.id ? (
                              <motion.div
                                className="w-3 h-3 border border-white border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              />
                            ) : (
                              locale === 'en' ? 'Add' : 'Agregar'
                            )}
                          </motion.button>
                          <motion.button
                            onClick={() => handleToggleFavorite(product)}
                            disabled={addingToFavorites === product.id}
                            className={`px-3 py-1 text-xs font-medium tracking-wider uppercase transition-all duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg ${
                              isFavorite(product.id) 
                                ? 'bg-red-500 text-white hover:bg-red-600' 
                                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
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
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

