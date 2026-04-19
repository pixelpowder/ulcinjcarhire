import { t, buildAlternates } from '../../../metadata';
import UlcinjToAlbaniaBorder from '@/src/components/pages/blog/UlcinjToAlbaniaBorder';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogAlbania.title') + ' | Ulcinj Car Hire',
    description: t(lang, 'blogAlbania.description'),
    alternates: buildAlternates('blog/ulcinj-to-albania-border', lang),
  };
}

export default function LangUlcinjToAlbaniaBorderRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogAlbania.title'),
    "description": t(lang, 'blogAlbania.description'),
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
