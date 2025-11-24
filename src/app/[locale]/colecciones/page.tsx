// src/app/[locale]/colecciones/page.tsx
import Footer from "@/components/Footer";
import CollectionsGrid from "@/components/CollectionsGrid";
import { getDictionary, type Dict, type Locale } from "@/i18n/config";
import type { Metadata } from "next";

export const dynamic = "force-static";

type Props = { params: { locale: Locale } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getDictionary(locale);
  
  return {
    title: `${locale === 'en' ? 'Collections' : 'Colecciones'} - ${t.meta.title}`,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}/colecciones`,
      languages: { es: "/es/colecciones", en: "/en/colecciones" }
    },
  };
}

export default async function CollectionsPage({ params }: Props) {
  const { locale } = await params;
  const t: Dict = await getDictionary(locale);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-light text-gray-900 mb-8 tracking-tight">
            {locale === 'en' ? 'Collections' : 'Colecciones'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
            {t.meta.description}
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <CollectionsGrid t={t} locale={locale} />

      <Footer t={t} locale={locale} />
    </main>
  );
}
