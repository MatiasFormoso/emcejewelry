'use client';

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import type { Dict, Locale } from "@/i18n/config";

type ContactContentProps = {
  t: Dict;
  locale: Locale;
};

const contactInfo = [
  {
    icon: MapPin,
    label: (locale: Locale) => locale === 'en' ? 'Address' : 'Dirección',
    value: (t: Dict) => t.contact.info.address,
  },
  {
    icon: Phone,
    label: (locale: Locale) => locale === 'en' ? 'Phone' : 'Teléfono',
    value: (t: Dict) => t.contact.info.phone,
    href: () => 'tel:+971547083607',
  },
  {
    icon: Mail,
    label: (locale: Locale) => locale === 'en' ? 'Email' : 'Email',
    value: (t: Dict) => t.contact.info.email,
    href: (t: Dict) => `mailto:${t.contact.info.email}`,
  },
  {
    icon: Clock,
    label: (locale: Locale) => locale === 'en' ? 'Hours' : 'Horarios',
    value: (t: Dict) => t.contact.info.hours,
  },
];

export default function ContactContent({ t, locale }: ContactContentProps) {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-light text-gray-900 mb-6 md:mb-8 tracking-tight">
              {t.contact.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, y: 30 }}
              animate={infoVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 shadow-sm"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-light text-gray-900 mb-8 md:mb-12 tracking-tight text-center">
                {locale === 'en' ? 'Contact Information' : 'Información de Contacto'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const isLink = item.href !== undefined;
                  const content = (
                    <div className="flex items-start space-x-4 md:space-x-5">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xs md:text-sm text-gray-500 font-light mb-2 tracking-widest uppercase">
                          {item.label(locale)}
                        </h3>
                        {isLink ? (
                          <a
                            href={item.href(t)}
                            className="text-base md:text-lg lg:text-xl text-gray-900 font-light hover:text-gray-700 transition-colors duration-200 break-words"
                          >
                            {item.value(t)}
                          </a>
                        ) : (
                          <p className="text-base md:text-lg lg:text-xl text-gray-900 font-light">
                            {item.value(t)}
                          </p>
                        )}
                      </div>
                    </div>
                  );

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={infoVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.2 + index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      {content}
                    </motion.div>
                  );
                })}
              </div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={infoVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-gray-900 rounded-2xl p-8 md:p-10 text-center"
              >
                <div className="mb-6">
                  <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-playfair font-light text-white mb-3">
                    {locale === 'en' ? 'Need Immediate Help?' : '¿Necesitas Ayuda Inmediata?'}
                  </h3>
                  <p className="text-gray-300 font-light text-base md:text-lg">
                    {locale === 'en' 
                      ? 'Chat with us on WhatsApp' 
                      : 'Chatea con nosotros por WhatsApp'}
                  </p>
                </div>
                <a
                  href="https://api.whatsapp.com/send?phone=971547083607&text=Hola!%20Me%20interesa%20saber%20m%C3%A1s%20sobre%20las%20joyas%20de%20EMC%20Jewelry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-gray-900 px-8 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-base font-light tracking-wide hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {locale === 'en' ? 'Open WhatsApp' : 'Abrir WhatsApp'}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

