import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';
import type { Dict, Locale } from '@/i18n/config';

type FooterProps = { t: Dict; locale: Locale };

export default function Footer({ t, locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-playfair font-bold gradient-text-gold">
                EMC Jewelry
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-6 gradient-text-gold">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}`} className="text-gray-300 hover:text-primary transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/catalogo`} className="text-gray-300 hover:text-primary transition-colors">
                  {t.nav.catalog}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/colecciones`} className="text-gray-300 hover:text-primary transition-colors">
                  {t.nav.collections}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/nosotros`} className="text-gray-300 hover:text-primary transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contacto`} className="text-gray-300 hover:text-primary transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-6 gradient-text-gold">
              {t.footer.contact}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">+971 54 708 3607</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">info@emcjewelry.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-300">
                  {locale === 'en' ? 'New York, NY' : 'Nueva York, NY'}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-gray-300">
                  {locale === 'en' ? 'Mon-Fri 9AM-6PM' : 'Lun-Vie 9AM-6PM'}
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 gradient-text-gold">
              {t.footer.followUs}
            </h3>
            <p className="text-gray-300 mb-4">
              {locale === 'en' 
                ? 'Subscribe to our newsletter for exclusive offers and new collections'
                : 'Suscríbete a nuestro boletín para ofertas exclusivas y nuevas colecciones'
              }
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder={locale === 'en' ? 'Your email' : 'Tu email'}
                className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary/90 transition-colors">
                {locale === 'en' ? 'Subscribe' : 'Suscribirse'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}