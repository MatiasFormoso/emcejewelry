'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import LocaleSwitcher from './LocaleSwitcher';
import type { Dict, Locale } from '@/i18n/config';

type HeaderProps = { 
  t: Dict; 
  locale: Locale;
  onToggleCart: () => void;
};

export default function Header({ t, locale, onToggleCart }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state: cartState } = useCart();
  const { state: favoritesState } = useFavorites();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: t.nav.home, href: `/${locale}` },
    { name: t.nav.catalog, href: `/${locale}/catalogo` },
    { name: t.nav.collections, href: `/${locale}/colecciones` },
    { name: t.nav.about, href: `/${locale}/nosotros` },
    { name: t.nav.contact, href: `/${locale}/contacto` },
  ];

  return (
    <nav id="site-nav" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-stone-200/30 safe-area-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link
              href={`/${locale}`}
              className="text-xl font-light text-stone-900 hover:text-stone-700 transition-all duration-200 ease-out focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none tracking-wide"
              style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                EMC Jewelry
              </motion.span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link
                  href={item.href}
                  className="text-stone-600 hover:text-stone-900 transition-all duration-200 ease-out font-light text-sm relative group focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none tracking-wide"
                  style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
                >
                  <motion.span 
                    className="relative z-10"
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                  <motion.span 
                    className="absolute bottom-0 left-0 h-0.5 bg-stone-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </Link>
              </motion.div>
            ))}
            <LocaleSwitcher />
                   <button
                     onClick={onToggleCart}
                     className="relative p-2 text-stone-600 hover:text-stone-800 transition-all duration-200 ease-out"
                   >
              <ShoppingCart className="w-5 h-5" />
              {cartState.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-stone-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartState.items.length}
                </span>
              )}
            </button>
                   <Link
                     href={`/${locale}/favoritos`}
                     className="relative p-2 text-stone-600 hover:text-stone-800 transition-all duration-200 ease-out"
                   >
              <Heart className="w-5 h-5" />
              {favoritesState.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-stone-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {favoritesState.items.length}
                </span>
              )}
            </Link>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <a
                href="https://wa.me/971547083607?text=Hola!%20Me%20interesa%20saber%20m%C3%A1s%20sobre%20las%20joyas%20de%20EMC%20Jewelry"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-900 hover:bg-stone-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Contactar
              </a>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors duration-300"
            aria-label="Abrir menú"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-stone-700 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-stone-700 mt-1 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-stone-700 mt-1 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-stone-200/30 shadow-lg transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block w-full text-left text-stone-600 hover:text-stone-900 transition-all duration-300 font-medium py-4 px-3 rounded-xl hover:bg-stone-50 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none"
                style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="px-3 pt-4 border-t border-stone-200/50">
              <LocaleSwitcher />
            </div>

            {/* Action Buttons */}
            <div className="px-3 pt-4 flex justify-between items-center space-x-4">
              <button
                onClick={() => { onToggleCart(); setIsMenuOpen(false); }}
                className="relative flex items-center justify-center p-3 rounded-xl text-stone-600 hover:bg-green-50 transition-all duration-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none border border-transparent hover:border-green-200 flex-1"
                style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">{t.nav.cart}</span>
                {cartState.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {cartState.items.length}
                  </span>
                )}
              </button>

              <Link
                href={`/${locale}/favoritos`}
                className="relative flex items-center justify-center p-3 rounded-xl text-stone-600 hover:bg-red-50 transition-all duration-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none border border-transparent hover:border-red-200 w-full"
                style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">{t.nav.favorites}</span>
                {favoritesState.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold">
                    {favoritesState.items.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}