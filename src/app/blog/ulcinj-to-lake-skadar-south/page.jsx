import { t, buildAlternates } from '../../metadata';
import UlcinjToLakeSkadarSouth from '@/src/components/pages/blog/UlcinjToLakeSkadarSouth';

export async function generateMetadata() {
  const title = t('en', 'blogSkadar.title') + ' | Ulcinj Car Hire';
  const description = t('en', 'blogSkadar.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/ulcinj-to-lake-skadar-south'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function UlcinjToLakeSkadarSouthRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogSkadar.title'),
    "description": t('en', 'blogSkadar.description'),
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
