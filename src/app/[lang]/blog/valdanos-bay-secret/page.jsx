import { t, buildAlternates } from '../../../metadata';
import ValdanosBaySecret from '@/src/components/pages/blog/ValdanosBaySecret';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogValdanos.title') + ' | Ulcinj Car Hire',
    description: t(lang, 'blogValdanos.description'),
    alternates: buildAlternates('blog/valdanos-bay-secret', lang),
  };
}

export default async function LangValdanosBaySecretRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogValdanos.title'),
    "description": t(lang, 'blogValdanos.description'),
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
