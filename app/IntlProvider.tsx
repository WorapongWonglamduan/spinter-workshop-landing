'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import thMessages from '@/messages/th.json';
import enMessages from '@/messages/en.json';

export function IntlProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const urlLocale = pathname?.split('/')[1];
  const detectedLocale = ['en', 'th'].includes(urlLocale) ? urlLocale : 'th';
  
  const messages = detectedLocale === 'en' ? enMessages : thMessages;

  return (
    <NextIntlClientProvider locale={detectedLocale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
