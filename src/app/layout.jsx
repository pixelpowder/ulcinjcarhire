import '@/src/index.css';
import '@/src/App.css';
import '@/src/ContentPage.css';
import '@/src/BookPage.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { headers } from 'next/headers';
import CookieBanner from '@/src/CookieBanner';
import DynamicLanguageProvider from '@/src/i18n/DynamicLanguageProvider';
import { SUPPORTED_LANGS, DEFAULT_LANG, LANG_HREFLANG } from '@/src/i18n/languages';
import LocaleAwareSchema from '@/src/components/LocaleAwareSchema';

export const metadata = {
  title: 'Ulcinj Car Hire — 12 km Beach, Albania Border',
  description:
    'Montenegro\'s hidden south needs a car. 12 km Long Beach, Ada Bojana kitesurfing, and Albania 30 min away. From \u20AC13/day with Albanian border docs included.',
  metadataBase: new URL('https://www.ulcinjcarhire.com'),
};

async function activeLocale() {
  const h = await headers();
  const pathname = h.get('x-pathname') || h.get('x-invoke-path') || '';
  const first = pathname.replace(/^\//, '').split('/')[0];
  if (SUPPORTED_LANGS.includes(first) && first !== DEFAULT_LANG) return first;
  return DEFAULT_LANG;
}

export default async function RootLayout({ children }) {
  const lang = await activeLocale();
  const htmlLang = LANG_HREFLANG[lang] || lang;

  return (
    <html lang={htmlLang}>
      <head>
        <link rel="preload" href="/hero-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/hero-bg.webp" as="image" type="image/webp" />
        <LocaleAwareSchema lang={lang} />
      </head>
      <body>
        <DynamicLanguageProvider initialLang={lang}>
          {children}
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </DynamicLanguageProvider>
      </body>
    </html>
  );
}
