import { t, buildAlternates } from '../../metadata';
import ValdanosBaySecret from '@/src/components/pages/blog/ValdanosBaySecret';

export async function generateMetadata() {
  const title = t('en', 'blogValdanos.title') + ' | Ulcinj Car Hire';
  const description = t('en', 'blogValdanos.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/valdanos-bay-secret'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function ValdanosBaySecretRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogValdanos.title'),
    "description": t('en', 'blogValdanos.description'),
    "image": "https://www.ulcinjcarhire.com/img/blog-valdanos-bay-secret.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Ulcinj Car Hire", "url": "https://www.ulcinjcarhire.com" },
    "publisher": { "@type": "Organization", "name": "Ulcinj Car Hire", "url": "https://www.ulcinjcarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <ValdanosBaySecret />
    </>
  );
}
