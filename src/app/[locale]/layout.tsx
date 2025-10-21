// src/app/[locale]/layout.tsx
import "../globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { CartProvider } from "@/contexts/CartContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import WhatsAppFloat from "@/components/WhatsAppFloat";
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
  
  return (
        <html lang={locale} className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
          <body className="font-sans antialiased min-h-screen bg-white text-gray-800">
            <CartProvider>
              <FavoritesProvider>
                {children}
                <WhatsAppFloat />
              </FavoritesProvider>
            </CartProvider>
          </body>
        </html>
  );
}
