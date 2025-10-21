import { Award, Users, Clock, Shield } from 'lucide-react';
import Link from 'next/link';
import type { Dict, Locale } from '@/i18n/config';

type AboutSectionProps = { t: Dict; locale: Locale };

export default function AboutSection({ t, locale }: AboutSectionProps) {
  const stats = [
    { icon: Award, value: "15+", label: locale === 'en' ? "Years Experience" : "Años de Experiencia" },
    { icon: Users, value: "5000+", label: locale === 'en' ? "Happy Customers" : "Clientes Satisfechos" },
    { icon: Clock, value: "24/7", label: locale === 'en' ? "Customer Service" : "Servicio al Cliente" },
    { icon: Shield, value: "100%", label: locale === 'en' ? "Quality Guarantee" : "Garantía de Calidad" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-elegant-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
              <span className="gradient-text-gold">{t.about.title}</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t.about.description}
            </p>
            
            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-800 font-medium">
                  {locale === 'en' ? 'Certified materials of the highest quality' : 'Materiales certificados de la más alta calidad'}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-800 font-medium">
                  {locale === 'en' ? 'Custom design according to your preferences' : 'Diseño personalizado según tus preferencias'}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-800 font-medium">
                  {locale === 'en' ? 'Lifetime maintenance and repair' : 'Mantenimiento y reparación de por vida'}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-800 font-medium">
                  {locale === 'en' ? 'Secure shipping nationwide' : 'Envío seguro a todo el país'}
                </span>
              </div>
            </div>

            <Link
              href={`/${locale}/nosotros`}
              className="btn-elegant px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 inline-flex items-center space-x-2"
            >
              <span>{t.about.cta}</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-elegant-slide-in-right">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover-elegant-lift">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold gradient-text-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}