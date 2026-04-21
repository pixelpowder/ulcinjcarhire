import { t, buildAlternates } from '../../metadata';
import UlcinjOldTownGuide from '@/src/components/pages/blog/UlcinjOldTownGuide';

export async function generateMetadata() {
  const title = t('en', 'blogOldtown.title') + ' | Ulcinj Car Hire';
  const description = t('en', 'blogOldtown.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/ulcinj-old-town-guide'),
    openGraph: { title, description, type: 'website' },
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
