'use client';

import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { products, formatPrice } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
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
  const { addItem } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Search Modal */}
      <div className="absolute top-0 left-0 right-0 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-playfair font-light text-gray-800">
              {locale === 'en' ? 'Search Products' : 'Buscar Productos'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={locale === 'en' ? 'Search for jewelry...' : 'Buscar joyas...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-none font-light tracking-wide focus:border-primary transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              autoFocus
            />
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {searchResults.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 font-light">
                  {locale === 'en' ? 'No products found' : 'No se encontraron productos'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.map((product) => (
                  <div key={product.id} className="border border-gray-200 p-4 hover:border-primary/30 transition-colors duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">💎</span>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-playfair font-light text-gray-800 truncate">
                          {locale === 'en' ? product.nameEn : product.name}
                        </h3>
                        <p className="text-xs text-gray-500 truncate">
                          {locale === 'en' ? product.descriptionEn : product.description}
                        </p>
                        <p className="text-sm font-playfair font-light text-primary">
                          {formatPrice(product.price)}
                        </p>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="px-3 py-1 bg-primary text-white text-xs font-light tracking-wider uppercase hover:bg-primary/90 transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                        >
                          {locale === 'en' ? 'Add' : 'Agregar'}
                        </button>
                        <button
                          onClick={() => handleToggleFavorite(product)}
                          className={`px-3 py-1 text-xs font-light tracking-wider uppercase transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 ${
                            isFavorite(product.id) 
                              ? 'bg-red-500 text-white hover:bg-red-600' 
                              : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {locale === 'en' ? 'Fav' : 'Fav'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
