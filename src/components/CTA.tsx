import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';
import type { Dict, Locale } from '@/i18n/config';

type CTAProps = { t: Dict; locale: Locale };

export default function CTA({ t, locale }: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            <span className="gradient-text-gold">{t.cta.title}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t.cta.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Contact Methods */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {locale === 'en' ? 'Call Us' : 'Llámanos'}
            </h3>
            <p className="text-gray-400 text-sm">
              {locale === 'en' ? 'Mon-Fri 9AM-6PM' : 'Lun-Vie 9AM-6PM'}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {locale === 'en' ? 'Email Us' : 'Escríbenos'}
            </h3>
            <p className="text-gray-400 text-sm">
              {locale === 'en' ? '24/7 Response' : 'Respuesta 24/7'}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {locale === 'en' ? 'Visit Us' : 'Visítanos'}
            </h3>
            <p className="text-gray-400 text-sm">
              {locale === 'en' ? 'By Appointment' : 'Con Cita'}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {locale === 'en' ? 'Book Consultation' : 'Consulta'}
            </h3>
            <p className="text-gray-400 text-sm">
              {locale === 'en' ? 'Free Design Session' : 'Sesión Gratuita'}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href={`/${locale}/contacto`}
            className="btn-elegant px-12 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-transform duration-300 inline-flex items-center space-x-3"
          >
            <span>{t.cta.button}</span>
            <Calendar className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}