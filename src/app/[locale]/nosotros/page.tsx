// src/app/[locale]/nosotros/page.tsx
import Footer from "@/components/Footer";
import { getDictionary, type Dict, type Locale } from "@/i18n/config";
import type { Metadata } from "next";

export const dynamic = "force-static";

type Props = { params: { locale: Locale } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getDictionary(locale);
  
  return {
    title: `${t.aboutUs.title} - ${t.meta.title}`,
    description: t.aboutUs.subtitle,
    alternates: {
      canonical: `/${locale}/nosotros`,
      languages: { es: "/es/nosotros", en: "/en/nosotros" }
    },
  };
}

export default async function AboutUsPage({ params }: Props) {
  const { locale } = await params;
  const t: Dict = await getDictionary(locale);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-yellow-400/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold gradient-text-gold mb-6">
            {t.aboutUs.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.aboutUs.subtitle}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <div className="bg-gradient-to-br from-primary/5 to-yellow-400/5 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                {t.aboutUs.mission.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t.aboutUs.mission.description}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-yellow-400/5 to-primary/5 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                {t.aboutUs.vision.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t.aboutUs.vision.description}
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              {t.aboutUs.values.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.aboutUs.values.items.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Note */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-blue-600 text-2xl">🚧</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Página en Desarrollo
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t.aboutUs.note}
            </p>
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">
                <strong>Nota:</strong> Esta página contiene información genérica y será actualizada con contenido específico de EMC Jewelry próximamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer t={t} locale={locale} />
    </main>
  );
}
