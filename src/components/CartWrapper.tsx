'use client';

import { useState } from 'react';
import Header from './Header';
import Cart from './Cart';
import type { Dict, Locale } from '@/i18n/config';

type CartWrapperProps = { 
  children: React.ReactNode;
  t: Dict; 
  locale: Locale; 
};

export default function CartWrapper({ children, t, locale }: CartWrapperProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <Header t={t} locale={locale} toggleCart={toggleCart} />
      <main>
        {children}
      </main>
      <Cart t={t} locale={locale} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
