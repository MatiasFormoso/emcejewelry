// src/app/[locale]/page.tsx
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedCollections from "@/components/FeaturedCollections";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTA from "@/components/CTA";

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
    <main>
      <HeroSection t={t} locale={locale} />
      <FeaturedCollections t={t} locale={locale} />
      <AboutSection t={t} locale={locale} />
      <TestimonialsSection t={t} locale={locale} />
      <CTA t={t} locale={locale} />
      <Footer t={t} locale={locale} />
    </main>
  );
}
