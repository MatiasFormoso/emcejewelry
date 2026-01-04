'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LocaleSwitcher from './LocaleSwitcher';
import type { Dict, Locale } from '@/i18n/config';

type HeaderProps = { 
  t: Dict; 
  locale: Locale;
};

export default function Header({ t, locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: t.nav.home, href: `/${locale}` },
    { name: t.nav.about, href: `/${locale}/nosotros` },
    { name: t.nav.contact, href: `/${locale}/contacto` },
  ];

  return (
    <nav id="site-nav" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 safe-area-top shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center"
          >
            <Link
              href={`/${locale}`}
              className="flex items-center gap-3 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none"
              style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
            >
              <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full overflow-hidden ring-1 ring-gray-200">
                <Image
                  src="/Logo.jpeg"
                  alt="EMC Jewelry Logo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 48px, 56px"
                  priority
                />
              </div>
              <motion.span
                className="text-lg sm:text-xl font-playfair font-light text-gray-900 tracking-wide"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                EMC Jewelry
              </motion.span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-10"
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
                  className="text-gray-700 hover:text-gray-900 transition-all duration-200 ease-out font-light text-sm relative group focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none tracking-wide"
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
                    className="absolute bottom-0 left-0 h-px bg-gray-900"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </Link>
              </motion.div>
            ))}
            <LocaleSwitcher />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <a
                href={`https://api.whatsapp.com/send?phone=971547083607&text=${encodeURIComponent(
                  locale === 'en' 
                    ? 'Hello! I am interested in learning more about EMC Jewelry pieces.'
                    : 'Hola! Me interesa saber más sobre las joyas de EMC Jewelry'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full text-sm font-light tracking-wide transition-all duration-300 hover:shadow-lg"
              >
                {t.nav.contact}
              </a>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            aria-label="Abrir menú"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-700 mt-1 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-700 mt-1 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-lg transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block w-full text-left text-gray-700 hover:text-gray-900 transition-all duration-300 font-light py-4 px-3 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none"
                style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="px-3 pt-4 border-t border-gray-100">
              <LocaleSwitcher />
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}