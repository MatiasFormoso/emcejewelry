'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag, Heart, User, Search } from 'lucide-react';
import LocaleSwitcher from './LocaleSwitcher';
import SearchModal from './SearchModal';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import type { Dict, Locale } from '@/i18n/config';

type HeaderProps = { t: Dict; locale: Locale };

export default function Header({ t, locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const { toggleCart, getTotalItems } = useCart();
  const { getTotalFavorites } = useFavorites();

  const navigation = [
    { name: t.nav.home, href: `/${locale}` },
    { name: t.nav.catalog, href: `/${locale}/catalogo` },
    { name: t.nav.collections, href: `/${locale}/colecciones` },
    { name: t.nav.about, href: `/${locale}/nosotros` },
    { name: t.nav.contact, href: `/${locale}/contacto` },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            setIsScrolled(window.scrollY > 20);
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm' 
        : 'bg-white/80 backdrop-blur-lg border-b border-gray-200/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Luxury Style */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center space-x-3 group focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-yellow-400 rounded-none flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                <span className="text-white font-light text-xl tracking-wider">E</span>
              </div>
              <span className="text-2xl font-playfair font-light text-gray-800 group-hover:text-primary transition-colors duration-300 tracking-wide">
                EMC Jewelry
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Luxury Style */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-light tracking-wider uppercase transition-all duration-300 hover:text-primary group ${
                  pathname === item.href ? 'text-primary' : 'text-gray-700'
                }`}
              >
                {item.name}
                {/* Active indicator */}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
                )}
                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions - Luxury Style */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-600 hover:text-primary transition-colors duration-300 group focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
            <Link
              href={`/${locale}/favoritos`}
              className="p-2 text-gray-600 hover:text-primary transition-colors duration-300 group focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 relative"
            >
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              {getTotalFavorites() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-light">
                  {getTotalFavorites()}
                </span>
              )}
            </Link>
            <button 
              onClick={toggleCart}
              className="p-2 text-gray-600 hover:text-primary transition-colors duration-300 group relative focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-light">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <LocaleSwitcher size="sm" />
          </div>

          {/* Mobile menu button - Luxury Style */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Luxury Style */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 py-6 space-y-4 bg-white/98 backdrop-blur-lg border-t border-gray-200/50">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 text-sm font-light tracking-wider uppercase transition-colors duration-300 ${
                    pathname === item.href
                      ? 'text-primary border-l-2 border-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Actions */}
              <div className="pt-4 border-t border-gray-200/50">
                <div className="flex items-center justify-center space-x-6">
                  <button 
                    onClick={() => setIsSearchOpen(true)}
                    className="p-2 text-gray-600 hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                  <Link
                    href={`/${locale}/favoritos`}
                    className="relative p-2 text-gray-600 hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Heart className="w-5 h-5" />
                    {getTotalFavorites() > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-light">
                        {getTotalFavorites()}
                      </span>
                    )}
                  </Link>
                  <button 
                    onClick={toggleCart}
                    className="relative p-2 text-gray-600 hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    {getTotalItems() > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-light">
                        {getTotalItems()}
                      </span>
                    )}
                  </button>
                </div>
                <div className="flex justify-center mt-4">
                  <LocaleSwitcher size="sm" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        t={t} 
        locale={locale} 
      />
    </header>
  );
}
