import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import type { Dict, Locale } from '@/i18n/config';

type FooterProps = { t: Dict; locale: Locale };

export default function Footer({ t, locale }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo y Descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Link href={`/${locale}`} className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full overflow-hidden">
                <Image
                  src="/Logo.jpeg"
                  alt="EMC Jewelry Logo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 56px, 64px"
                />
              </Link>
              <span className="text-2xl font-playfair font-light text-white tracking-wide">
                EMC Jewelry
              </span>
            </div>
            <p className="text-gray-200 text-base leading-relaxed mb-8 max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-xl font-playfair font-light text-white mb-8 tracking-wide">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href={`/${locale}`} className="text-gray-200 hover:text-white text-base font-light transition-colors duration-200 inline-block">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/nosotros`} className="text-gray-200 hover:text-white text-base font-light transition-colors duration-200 inline-block">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contacto`} className="text-gray-200 hover:text-white text-base font-light transition-colors duration-200 inline-block">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-playfair font-light text-white mb-8 tracking-wide">
              {t.footer.contact}
            </h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-white mt-0.5 shrink-0" />
                <a href="tel:+971547083607" className="text-gray-200 hover:text-white text-base font-light transition-colors duration-200">
                  +971 54 708 3607
                </a>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-white mt-0.5 shrink-0" />
                <a href="mailto:info@emcjewelry.com" className="text-gray-200 hover:text-white text-base font-light transition-colors duration-200 break-all">
                  info@emcjewelry.com
                </a>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-white mt-0.5 shrink-0" />
                <span className="text-gray-200 text-base font-light">
                  Abu Dhabi - UAE
                </span>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-5 h-5 text-white mt-0.5 shrink-0" />
                <span className="text-gray-200 text-base font-light">
                  {locale === 'en' ? 'Mon-Fri 9AM-6PM' : 'Lun-Vie 9AM-6PM'}
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-playfair font-light text-white mb-8 tracking-wide">
              {t.footer.followUs}
            </h3>
            <p className="text-gray-200 text-base leading-relaxed mb-6">
              {locale === 'en' 
                ? 'Follow us on social media for exclusive updates and new collections'
                : 'Síguenos en redes sociales para actualizaciones exclusivas y nuevas colecciones'
              }
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/emcejewelry" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-700/50 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700/50 mt-16 pt-8 text-center">
          <p className="text-gray-300 text-sm font-light mb-2">
            {t.footer.rights}
          </p>
          <p className="text-gray-400 text-xs font-light">
            {locale === 'en' ? 'Web support by ' : 'Soporte web por '}
            <a 
              href="https://modularsoluciones.com/en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200 underline"
            >
              Modular Soluciones
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}