// src/components/Cart.tsx
'use client';

import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/products';
import type { Dict, Locale } from '@/i18n/config';

interface CartProps {
  t: Dict;
  locale: Locale;
}

export default function Cart({ t, locale }: CartProps) {
  const { state, removeItem, updateQuantity, clearCart, closeCart, getTotalPrice } = useCart();

  const handleWhatsAppOrder = () => {
    const items = state.items.map(item => 
      `• ${item.product.name} (${locale === 'en' ? item.product.nameEn : item.product.name}) - Cantidad: ${item.quantity} - Precio: ${formatPrice(item.product.price)}`
    ).join('\n');
    
    const total = formatPrice(getTotalPrice());
    const message = `Hola! Me interesa realizar una compra:\n\n${items}\n\nTotal: ${total}\n\n¿Podrían ayudarme con el proceso de compra?`;
    
    if (typeof window !== 'undefined') {
      const whatsappUrl = `https://wa.me/971547083607?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  if (!state.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeCart}
      />
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {locale === 'en' ? 'Shopping Cart' : 'Carrito de Compras'}
            </h2>
            <button
              onClick={closeCart}
              className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {state.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {locale === 'en' ? 'Your cart is empty' : 'Tu carrito está vacío'}
                </h3>
                <p className="text-gray-500">
                  {locale === 'en' ? 'Add some beautiful jewelry to get started' : 'Agrega algunas joyas hermosas para comenzar'}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4 rounded-lg border border-gray-200 p-4">
                    <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">💎</span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 truncate">
                        {locale === 'en' ? item.product.nameEn : item.product.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="rounded-full p-1 text-red-400 hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-900">
                  {locale === 'en' ? 'Total' : 'Total'}
                </span>
                <span className="text-lg font-bold text-primary">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>📱</span>
                  <span>{locale === 'en' ? 'Order via WhatsApp' : 'Comprar por WhatsApp'}</span>
                </button>
                
                <button
                  onClick={clearCart}
                  className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
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
