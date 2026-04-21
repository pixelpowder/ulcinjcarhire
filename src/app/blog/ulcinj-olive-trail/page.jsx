import { t, buildAlternates } from '../../metadata';
import UlcinjOliveTrail from '@/src/components/pages/blog/UlcinjOliveTrail';

export async function generateMetadata() {
  const title = t('en', 'blogOlive.title') + ' | Ulcinj Car Hire';
  const description = t('en', 'blogOlive.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/ulcinj-olive-trail'),
    openGraph: { title, description, type: 'website' },
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
