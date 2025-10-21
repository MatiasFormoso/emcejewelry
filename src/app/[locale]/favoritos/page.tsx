// src/app/[locale]/favoritos/page.tsx
import Footer from "@/components/Footer";
import FavoritesList from "@/components/FavoritesList";
import { getDictionary, type Dict, type Locale } from "@/i18n/config";
import type { Metadata } from "next";

export const dynamic = "force-static";

type Props = { params: { locale: Locale } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getDictionary(locale);
  
  return {
    title: `${t.favorites.title} - ${t.meta.title}`,
    description: t.favorites.subtitle,
    alternates: {
      canonical: `/${locale}/favoritos`,
      languages: { es: "/es/favoritos", en: "/en/favoritos" }
    },
  };
}

export default async function FavoritesPage({ params }: Props) {
  const { locale } = await params;
  const t: Dict = await getDictionary(locale);

  return (
    <main>
      <FavoritesList t={t} locale={locale} />
      <Footer t={t} locale={locale} />
    </main>
  );
}

