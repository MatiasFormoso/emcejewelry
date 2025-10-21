// src/app/[locale]/catalogo/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatalogGrid from "@/components/CatalogGrid";
import { getDictionary, type Dict, type Locale } from "@/i18n/config";
import type { Metadata } from "next";

export const dynamic = "force-static";

type Props = { params: { locale: Locale } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getDictionary(locale);
  
  return {
    title: `${t.catalog.title} - ${t.meta.title}`,
    description: t.catalog.subtitle,
    alternates: {
      canonical: `/${locale}/catalogo`,
      languages: { es: "/es/catalogo", en: "/en/catalogo" }
    },
  };
}

export default async function CatalogPage({ params }: Props) {
  const { locale } = await params;
  const t: Dict = await getDictionary(locale);

  return (
    <main>
      <Header t={t} locale={locale} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-yellow-400/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold gradient-text-gold mb-6">
            {t.catalog.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.catalog.subtitle}
          </p>
        </div>
      </section>

      {/* Catalog Grid */}
      <CatalogGrid t={t} locale={locale} />

      <Footer t={t} locale={locale} />
    </main>
  );
}
