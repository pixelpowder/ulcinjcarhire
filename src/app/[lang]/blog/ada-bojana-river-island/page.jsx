import { t, buildAlternates } from '../../../metadata';
import AdaBojanaRiverIsland from '@/src/components/pages/blog/AdaBojanaRiverIsland';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogAdabojana.title') + ' | Ulcinj Car Hire',
    description: t(lang, 'blogAdabojana.description'),
    alternates: buildAlternates('blog/ada-bojana-river-island', lang),
  };
}

export default async function LangAdaBojanaRiverIslandRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogAdabojana.title'),
    "description": t(lang, 'blogAdabojana.description'),
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
