import { t, buildAlternates } from '../../metadata';
import AdaBojanaRiverIsland from '@/src/components/pages/blog/AdaBojanaRiverIsland';

export async function generateMetadata() {
  const title = t('en', 'blogAdabojana.title') + ' | Ulcinj Car Hire';
  const description = t('en', 'blogAdabojana.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/ada-bojana-river-island'),
    openGraph: { title, description, type: 'website' },
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
