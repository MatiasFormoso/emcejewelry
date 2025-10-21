'use client';

import { useState } from 'react';
import Header from './Header';
import Cart from './Cart';
import ToastContainer, { useToast } from './Toast';
import { ToastProvider } from './ToastProvider';
import type { Dict, Locale } from '@/i18n/config';

type CartWrapperProps = { 
  children: React.ReactNode;
  t: Dict; 
  locale: Locale; 
};

function CartWrapperContent({ children, t, locale }: CartWrapperProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toasts, removeToast } = useToast();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <Header t={t} locale={locale} toggleCart={toggleCart} />
      {children}
      <Cart t={t} locale={locale} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </>
  );
}

export default function CartWrapper(props: CartWrapperProps) {
  return (
    <ToastProvider>
      <CartWrapperContent {...props} />
    </ToastProvider>
  );
}
