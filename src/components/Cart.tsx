'use client';

import { useState } from 'react';
import { X, ShoppingCart, Heart, MessageCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import type { Dict, Locale } from '@/i18n/config';

type CartProps = { 
  t: Dict; 
  locale: Locale;
  isOpen: boolean;
  onClose: () => void;
};

export default function Cart({ t, locale, isOpen, onClose }: CartProps) {
  const { state: cartState, removeItem, updateQuantity, clearCart, getTotalPrice } = useCart();

  const handleWhatsAppOrder = () => {
    if (cartState.items.length === 0) return;

    const itemsText = cartState.items
      .map(item => {
        const productName = locale === 'en' ? item.product.nameEn : item.product.name;
        return `• ${productName} x${item.quantity} - ${formatPrice(item.product.price * item.quantity)}`;
      })
      .join('\n');

    const totalText = `Total: ${formatPrice(getTotalPrice())}`;
    const message = `Hola! Me interesa realizar el siguiente pedido:\n\n${itemsText}\n\n${totalText}`;
    
    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-stone-900/20 backdrop-blur-sm" onClick={onClose} />
      
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-stone-200 px-6 py-4">
            <h2 className="text-lg font-light text-stone-900 tracking-wide">
              {t.nav.cart} ({cartState.items.length})
            </h2>
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-stone-600 transition-all duration-200 ease-out"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cartState.items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="mx-auto h-12 w-12 text-stone-400" />
                <h3 className="mt-2 text-sm font-light text-stone-900 tracking-wide">
                  {locale === 'en' ? 'Your cart is empty' : 'Tu carrito está vacío'}
                </h3>
                <p className="mt-1 text-sm text-stone-500 font-light">
                  {locale === 'en' ? 'Add some items to get started' : 'Agrega algunos artículos para comenzar'}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartState.items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <div className="h-full w-full flex items-center justify-center">
                        <span className="text-2xl">💎</span>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900">
                        {locale === 'en' ? item.product.nameEn : item.product.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        -
                      </button>
                      <span className="text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        +
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-400 hover:text-red-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartState.items.length > 0 && (
            <div className="border-t border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between text-base font-medium text-gray-900 mb-4">
                <span>{locale === 'en' ? 'Total' : 'Total'}</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-stone-800 hover:bg-stone-900 text-white py-3 px-4 rounded-sm font-light flex items-center justify-center transition-all duration-200 ease-out tracking-wide"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {locale === 'en' ? 'Order via WhatsApp' : 'Pedir por WhatsApp'}
                </button>
                
                <button
                  onClick={clearCart}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium"
                >
                  {locale === 'en' ? 'Clear Cart' : 'Vaciar Carrito'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}