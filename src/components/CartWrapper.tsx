'use client';

import { useState } from 'react';
import Header from './Header';
import Cart from './Cart';
import SimpleToastContainer, { useSimpleToast } from './SimpleToast';
import { ToastProvider } from './ToastProvider';
import type { Dict, Locale } from '@/i18n/config';

type CartWrapperProps = { 
  children: React.ReactNode;
  t: Dict; 
  locale: Locale; 
};

function CartWrapperContent({ children, t, locale }: CartWrapperProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toasts, removeToast } = useSimpleToast();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <Header t={t} locale={locale} toggleCart={toggleCart} />
      {children}
      <Cart t={t} locale={locale} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SimpleToastContainer toasts={toasts} onRemove={removeToast} />
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
