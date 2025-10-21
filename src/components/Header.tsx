'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Heart, Search, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import LocaleSwitcher from './LocaleSwitcher';
import type { Dict, Locale } from '@/i18n/config';

type HeaderProps = { t: Dict; locale: Locale; toggleCart: () => void };

export default function Header({ t, locale, toggleCart }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state: cartState } = useCart();
  const { state: favoritesState } = useFavorites();

  const navigation = [
    { name: t.nav.home, href: `/${locale}` },
    { name: t.nav.catalog, href: `/${locale}/catalogo` },
    { name: t.nav.collections, href: `/${locale}/colecciones` },
    { name: t.nav.about, href: `/${locale}/nosotros` },
    { name: t.nav.contact, href: `/${locale}/contacto` },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [locale]);

  return (
        <nav id="site-nav" className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/50 safe-area-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href={`/${locale}`}
            className="text-xl font-bold text-stone-900 hover:text-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none"
            style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
          >
            EMC Jewelry
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-stone-600 hover:text-stone-900 transition-all duration-300 font-medium text-sm relative group focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none"
                style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <LocaleSwitcher />
                  <motion.button
                    onClick={toggleCart}
                    className="relative p-2 rounded-full text-stone-600 hover:bg-stone-100 transition-colors duration-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none"
                    aria-label="Abrir carrito de compras"
                    style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {cartState.items.length > 0 && (
                      <motion.span 
                        className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      >
                        {cartState.items.length}
                      </motion.span>
                    )}
                  </motion.button>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={`/${locale}/favoritos`}
                      className="relative p-2 rounded-full text-stone-600 hover:bg-stone-100 transition-colors duration-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none"
                      aria-label="Ver favoritos"
                      style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
                    >
                      <Heart className="w-5 h-5" />
                      {favoritesState.items.length > 0 && (
                        <motion.span 
                          className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-rose-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                          {favoritesState.items.length}
                        </motion.span>
                      )}
                    </Link>
                  </motion.div>
          </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors duration-300"
          aria-label="Abrir menú"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <motion.span 
              className="block w-5 h-0.5 bg-stone-700"
              animate={{ 
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 6 : 0
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="block w-5 h-0.5 bg-stone-700 mt-1"
              animate={{ 
                opacity: isMenuOpen ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="block w-5 h-0.5 bg-stone-700 mt-1"
              animate={{ 
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -6 : 0
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-stone-200/30 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="px-4 py-6 space-y-2">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0, 
                  x: isMenuOpen ? 0 : -20 
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: isMenuOpen ? index * 0.1 : 0 
                }}
              >
                <Link
                  href={item.href}
                  className="block w-full text-left text-stone-600 hover:text-stone-900 transition-all duration-300 font-medium py-4 px-3 rounded-xl hover:bg-gradient-to-r hover:from-yellow-50 hover:to-amber-50 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none relative group border border-transparent hover:border-yellow-200"
                  style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.span 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-gradient-to-r from-yellow-500 to-amber-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
            
            {/* Language Switcher */}
            <motion.div 
              className="px-3 pt-4 border-t border-stone-200/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0, 
                y: isMenuOpen ? 0 : 20 
              }}
              transition={{ 
                duration: 0.3, 
                delay: isMenuOpen ? navigation.length * 0.1 : 0 
              }}
            >
              <LocaleSwitcher />
            </motion.div>
            
            {/* Action Buttons */}
            <motion.div 
              className="px-3 pt-4 flex justify-between items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0, 
                y: isMenuOpen ? 0 : 20 
              }}
              transition={{ 
                duration: 0.3, 
                delay: isMenuOpen ? (navigation.length + 1) * 0.1 : 0 
              }}
            >
              <motion.button
                onClick={() => { toggleCart(); setIsMenuOpen(false); }}
                className="relative flex items-center justify-center p-3 rounded-xl text-stone-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none border border-transparent hover:border-green-200 flex-1"
                aria-label="Abrir carrito de compras"
                style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">{t.nav.cart}</span>
                {cartState.items.length > 0 && (
                  <motion.span 
                    className="absolute -top-1 -right-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    {cartState.items.length}
                  </motion.span>
                )}
              </motion.button>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1"
              >
                <Link
                  href={`/${locale}/favoritos`}
                  className="relative flex items-center justify-center p-3 rounded-xl text-stone-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-rose-50 transition-all duration-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none border border-transparent hover:border-red-200 w-full"
                  aria-label="Ver favoritos"
                  style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">{t.nav.favorites}</span>
                  {favoritesState.items.length > 0 && (
                    <motion.span 
                      className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                      {favoritesState.items.length}
                    </motion.span>
                  )}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
