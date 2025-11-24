// src/app/[locale]/nosotros/page.tsx
import Footer from "@/components/Footer";
import { getDictionary, type Dict, type Locale } from "@/i18n/config";
import type { Metadata } from "next";
import AboutUsContent from "./AboutUsContent";

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
    <main className="min-h-screen bg-gray-50">
      <AboutUsContent t={t} locale={locale} />
      <Footer t={t} locale={locale} />
    </main>
  );
}
