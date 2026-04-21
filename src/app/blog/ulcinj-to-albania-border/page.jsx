import { t, buildAlternates } from '../../metadata';
import UlcinjToAlbaniaBorder from '@/src/components/pages/blog/UlcinjToAlbaniaBorder';

export async function generateMetadata() {
  const title = t('en', 'blogAlbania.title') + ' | Ulcinj Car Hire';
  const description = t('en', 'blogAlbania.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/ulcinj-to-albania-border'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function UlcinjToAlbaniaBorderRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogAlbania.title'),
    "description": t('en', 'blogAlbania.description'),
    "image": "https://www.ulcinjcarhire.com/img/blog-ulcinj-to-albania-border.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Ulcinj Car Hire", "url": "https://www.ulcinjcarhire.com" },
    "publisher": { "@type": "Organization", "name": "Ulcinj Car Hire", "url": "https://www.ulcinjcarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <UlcinjToAlbaniaBorder />
    </>
  );
}
