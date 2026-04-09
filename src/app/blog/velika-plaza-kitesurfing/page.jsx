import { t, buildAlternates } from '../../metadata';
import VelikaPlazaKitesurfing from '@/src/components/pages/blog/VelikaPlazaKitesurfing';

export async function generateMetadata() {
  return {
    title: t('en', 'blogVelikaplaza.title') + ' | Ulcinj Car Hire',
    description: t('en', 'blogVelikaplaza.description'),
    alternates: buildAlternates('blog/velika-plaza-kitesurfing'),
  };
}

export default function VelikaPlazaKitesurfingRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogVelikaplaza.title'),
    "description": t('en', 'blogVelikaplaza.description'),
    "image": "https://www.ulcinjcarhire.com/img/blog-velika-plaza-kitesurfing.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Ulcinj Car Hire", "url": "https://www.ulcinjcarhire.com" },
    "publisher": { "@type": "Organization", "name": "Ulcinj Car Hire", "url": "https://www.ulcinjcarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <VelikaPlazaKitesurfing />
    </>
  );
}
