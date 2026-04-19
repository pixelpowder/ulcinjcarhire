import { t, buildAlternates } from '../../../metadata';
import UlcinjOliveTrail from '@/src/components/pages/blog/UlcinjOliveTrail';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogOlive.title') + ' | Ulcinj Car Hire',
    description: t(lang, 'blogOlive.description'),
    alternates: buildAlternates('blog/ulcinj-olive-trail', lang),
  };
}

export default function LangUlcinjOliveTrailRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogOlive.title'),
    "description": t(lang, 'blogOlive.description'),
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
