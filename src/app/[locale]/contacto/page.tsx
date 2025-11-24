// src/app/[locale]/contacto/page.tsx
import Footer from "@/components/Footer";
import { getDictionary, type Dict, type Locale } from "@/i18n/config";
import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const dynamic = "force-static";

type Props = { params: { locale: Locale } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getDictionary(locale);
  
  return {
    title: `${t.contact.title} - ${t.meta.title}`,
    description: t.contact.subtitle,
    alternates: {
      canonical: `/${locale}/contacto`,
      languages: { es: "/es/contacto", en: "/en/contacto" }
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t: Dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-gray-50">
      <ContactContent t={t} locale={locale} />
      <Footer t={t} locale={locale} />
    </main>
  );
}
