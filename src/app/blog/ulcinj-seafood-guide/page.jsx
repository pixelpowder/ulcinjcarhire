import { t, buildAlternates } from '../../metadata';
import UlcinjSeafoodGuide from '@/src/components/pages/blog/UlcinjSeafoodGuide';

export async function generateMetadata() {
  const title = t('en', 'blogSeafood.title') + ' | Ulcinj Car Hire';
  const description = t('en', 'blogSeafood.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/ulcinj-seafood-guide'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function UlcinjSeafoodGuideRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogSeafood.title'),
    "description": t('en', 'blogSeafood.description'),
    "image": "https://www.ulcinjcarhire.com/img/blog-ulcinj-seafood-guide.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Ulcinj Car Hire", "url": "https://www.ulcinjcarhire.com" },
    "publisher": { "@type": "Organization", "name": "Ulcinj Car Hire", "url": "https://www.ulcinjcarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <UlcinjSeafoodGuide />
    </>
  );
}
