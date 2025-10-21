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
    title: `${t.collections.title} - ${t.meta.title}`,
    description: t.collections.subtitle,
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
      <section className="bg-gradient-to-br from-primary/5 to-yellow-400/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold gradient-text-gold mb-6">
            {t.collections.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.collections.subtitle}
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <CollectionsGrid t={t} locale={locale} />

      <Footer t={t} locale={locale} />
    </main>
  );
}
