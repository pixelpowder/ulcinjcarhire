import { t, buildAlternates } from '../../metadata';
import AdaBojanaRiverIsland from '@/src/components/pages/blog/AdaBojanaRiverIsland';

export async function generateMetadata() {
  return {
    title: t('en', 'blogAdabojana.title') + ' | Ulcinj Car Hire',
    description: t('en', 'blogAdabojana.description'),
    alternates: buildAlternates('blog/ada-bojana-river-island'),
  };
}

export default function AdaBojanaRiverIslandRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogAdabojana.title'),
    "description": t('en', 'blogAdabojana.description'),
    "image": "https://www.ulcinjcarhire.com/img/blog-ada-bojana-river-island.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Ulcinj Car Hire", "url": "https://www.ulcinjcarhire.com" },
    "publisher": { "@type": "Organization", "name": "Ulcinj Car Hire", "url": "https://www.ulcinjcarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <AdaBojanaRiverIsland />
    </>
  );
}
