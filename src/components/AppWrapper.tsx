'use client';

import Header from './Header';
import { ToastProvider } from './SimpleToast';
import ToastContainer from './ToastContainer';
import WhatsAppFloat from './WhatsAppFloat';
import type { Dict, Locale } from '@/i18n/config';

type AppWrapperProps = { 
  children: React.ReactNode;
  t: Dict; 
  locale: Locale; 
};

export default function AppWrapper({ children, t, locale }: AppWrapperProps) {
  return (
    <ToastProvider>
      <Header t={t} locale={locale} />
      <main className="min-h-screen">
        {children}
      </main>
      <ToastContainer />
      <WhatsAppFloat />
    </ToastProvider>
  );
}

