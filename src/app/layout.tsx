import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EMC Jewelry - Joyería Elegante y Sofisticada',
  description: 'Descubre la elegancia atemporal en cada pieza única de EMC Jewelry. Joyería fina con materiales certificados y diseño personalizado.',
  keywords: "joyería, joyas, oro, diamantes, elegante, sofisticado, EMC Jewelry",
  authors: [{ name: "EMC Jewelry" }],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "EMC Jewelry",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "EMC Jewelry",
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#d4af37',
    viewportFit: 'cover',
    interactiveWidget: 'resizes-content',
    colorScheme: 'light',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
