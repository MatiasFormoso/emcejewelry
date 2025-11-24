// src/app/[locale]/page.tsx
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import StorySection from "@/components/StorySection";
import ArtGallery from "@/components/ArtGallery";

import { getDictionary, type Dict, type Locale } from "@/i18n/config";
import type { Metadata } from "next";

export const dynamic = "force-static";

type Props = { params: { locale: Locale } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getDictionary(locale);
  
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { es: "/es", en: "/en" }
    },
    robots: {
      index: true,
      follow: true,
    }
  };
}

export default async function HomeByLocale({ params }: Props) {
  const { locale } = await params;
  const t: Dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* SECCIÓN A: HERO (Impacto) */}
      <HeroSection t={t} locale={locale} />
      
      {/* SECCIÓN B: FILOSOFÍA (El "Por Qué") */}
      <PhilosophySection t={t} locale={locale} />
      
      {/* SECCIÓN C: LA HISTORIA (El "Quién") */}
      <StorySection t={t} locale={locale} />
      
      {/* SECCIÓN D: EL ATELIER (Galería de Arte) */}
      <ArtGallery t={t} locale={locale} />
      
      <Footer t={t} locale={locale} />
    </main>
  );
}
