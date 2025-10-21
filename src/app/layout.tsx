import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EMC Jewelry - Joyería Elegante y Sofisticada',
  description: 'Descubre la elegancia atemporal en cada pieza única de EMC Jewelry. Joyería fina con materiales certificados y diseño personalizado.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
