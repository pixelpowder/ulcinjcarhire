import { t, buildAlternates } from '../../metadata';
import UlcinjOliveTrail from '@/src/components/pages/blog/UlcinjOliveTrail';

export async function generateMetadata() {
  return {
    title: t('en', 'blogOlive.title') + ' | Ulcinj Car Hire',
    description: t('en', 'blogOlive.description'),
    alternates: buildAlternates('blog/ulcinj-olive-trail'),
  };
}

export default function UlcinjOliveTrailRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogOlive.title'),
    "description": t('en', 'blogOlive.description'),
    "image": "https://www.ulcinjcarhire.com/img/blog-ulcinj-olive-trail.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Ulcinj Car Hire", "url": "https://www.ulcinjcarhire.com" },
    "publisher": { "@type": "Organization", "name": "Ulcinj Car Hire", "url": "https://www.ulcinjcarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <UlcinjOliveTrail />
    </>
  );
}
