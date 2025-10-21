// src/app/[locale]/layout.tsx
import "../globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { CartProvider } from "@/contexts/CartContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import SimpleToastContainer, { ToastProvider } from "@/components/SimpleToast";
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
    <html lang={locale} className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <CartProvider>
          <FavoritesProvider>
            <ToastProvider>
              <Header t={t} locale={locale as Locale} />
              <main className="pt-16">
                {children}
              </main>
              <Cart t={t} locale={locale as Locale} />
              <SimpleToastContainer />
              <WhatsAppFloat />
            </ToastProvider>
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  );
}