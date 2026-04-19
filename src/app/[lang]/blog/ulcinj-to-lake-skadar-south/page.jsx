import { t, buildAlternates } from '../../../metadata';
import UlcinjToLakeSkadarSouth from '@/src/components/pages/blog/UlcinjToLakeSkadarSouth';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogSkadar.title') + ' | Ulcinj Car Hire',
    description: t(lang, 'blogSkadar.description'),
    alternates: buildAlternates('blog/ulcinj-to-lake-skadar-south', lang),
  };
}

export default function LangUlcinjToLakeSkadarSouthRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogSkadar.title'),
    "description": t(lang, 'blogSkadar.description'),
    "image": "https://www.ulcinjcarhire.com/img/blog-ulcinj-to-lake-skadar-south.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Ulcinj Car Hire", "url": "https://www.ulcinjcarhire.com" },
    "publisher": { "@type": "Organization", "name": "Ulcinj Car Hire", "url": "https://www.ulcinjcarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <UlcinjToLakeSkadarSouth />
    </>
  );
}
