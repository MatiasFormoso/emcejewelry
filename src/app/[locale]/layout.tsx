// src/app/[locale]/layout.tsx
import "../globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { CartProvider } from "@/contexts/CartContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CartWrapper from "@/components/CartWrapper";
import { getDictionary } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);
  
  return (
        <html lang={locale} className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
          <body className="font-sans antialiased min-h-screen bg-stone-50 text-stone-900 overflow-x-hidden">
            <CartProvider>
              <FavoritesProvider>
                <CartWrapper t={t} locale={locale as Locale}>
                  {children}
                </CartWrapper>
                <WhatsAppFloat />
              </FavoritesProvider>
            </CartProvider>
          </body>
        </html>
  );
}
