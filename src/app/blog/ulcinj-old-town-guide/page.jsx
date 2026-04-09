import { t, buildAlternates } from '../../metadata';
import UlcinjOldTownGuide from '@/src/components/pages/blog/UlcinjOldTownGuide';

export async function generateMetadata() {
  return {
    title: t('en', 'blogOldtown.title') + ' | Ulcinj Car Hire',
    description: t('en', 'blogOldtown.description'),
    alternates: buildAlternates('blog/ulcinj-old-town-guide'),
  };
}

export default function UlcinjOldTownGuideRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogOldtown.title'),
    "description": t('en', 'blogOldtown.description'),
    "image": "https://www.ulcinjcarhire.com/img/blog-ulcinj-old-town-guide.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Ulcinj Car Hire", "url": "https://www.ulcinjcarhire.com" },
    "publisher": { "@type": "Organization", "name": "Ulcinj Car Hire", "url": "https://www.ulcinjcarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <UlcinjOldTownGuide />
    </>
  );
}
