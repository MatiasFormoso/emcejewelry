'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Heart, Search, User } from 'lucide-react';
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
    <nav id="site-nav" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-stone-200/30 safe-area-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link
            href={`/${locale}`}
            className="text-2xl font-playfair font-bold text-stone-900 hover:text-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none"
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
            <button
              onClick={toggleCart}
              className="relative p-2 rounded-full text-stone-600 hover:bg-stone-100 transition-colors duration-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none"
              aria-label="Abrir carrito de compras"
              style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartState.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartState.items.length}
                </span>
              )}
            </button>
            <Link
              href={`/${locale}/favoritos`}
              className="relative p-2 rounded-full text-stone-600 hover:bg-stone-100 transition-colors duration-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none"
              aria-label="Ver favoritos"
              style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
            >
              <Heart className="w-5 h-5" />
              {favoritesState.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {favoritesState.items.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors duration-300"
            aria-label="Abrir menú"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-stone-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-stone-700 transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-stone-700 transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-stone-200/30 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block w-full text-left text-stone-600 hover:text-stone-900 transition-all duration-300 font-medium py-3 px-2 rounded-lg hover:bg-stone-50 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none relative group"
                style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <div className="px-2 pt-2">
              <LocaleSwitcher />
            </div>
            <div className="px-2 pt-2 flex justify-between items-center">
              <button
                onClick={() => { toggleCart(); setIsMenuOpen(false); }}
                className="relative flex items-center p-2 rounded-full text-stone-600 hover:bg-stone-100 transition-colors duration-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none"
                aria-label="Abrir carrito de compras"
                style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">{t.nav.cart}</span>
                {cartState.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cartState.items.length}
                  </span>
                )}
              </button>
              <Link
                href={`/${locale}/favoritos`}
                className="relative flex items-center p-2 rounded-full text-stone-600 hover:bg-stone-100 transition-colors duration-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none"
                aria-label="Ver favoritos"
                style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">{t.nav.favorites}</span>
                {favoritesState.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
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
