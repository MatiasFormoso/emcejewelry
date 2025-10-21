'use client';

import React, { useState, useEffect } from 'react';
import { Search, X, ShoppingCart, Heart } from 'lucide-react';
import { products, formatPrice } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useSimpleToast } from './SimpleToast';
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
  const { success } = useSimpleToast();

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {locale === 'en' ? 'Search Products' : 'Buscar Productos'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Search Input */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={locale === 'en' ? 'Search products...' : 'Buscar productos...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                autoFocus
              />
            </div>
          </div>

          {/* Search Results */}
          <div className="overflow-y-auto max-h-96">
            {searchResults.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  {locale === 'en' ? 'No products found' : 'No se encontraron productos'}
                </p>
              </div>
            ) : (
              <div className="p-6 space-y-4">
                {searchResults.map((product) => (
                  <div key={product.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    {/* Product Image */}
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                      <span className="text-2xl">💎</span>
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900">
                        {locale === 'en' ? product.nameEn : product.name}
                      </h3>
                      <p className="text-sm text-gray-500 truncate">
                        {locale === 'en' ? product.descriptionEn : product.description}
                      </p>
                      <p className="text-sm font-medium text-yellow-600">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={addingToCart === product.id}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center min-h-[44px] min-w-[44px]"
                      >
                        {addingToCart === product.id ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <ShoppingCart className="w-4 h-4" />
                        )}
                      </button>
                      
                      <button
                        onClick={() => handleToggleFavorite(product)}
                        disabled={addingToFavorites === product.id}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center min-h-[44px] min-w-[44px] ${
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
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}