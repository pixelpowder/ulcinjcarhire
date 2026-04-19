import { t, buildAlternates } from '../../../metadata';
import SasFortressRuins from '@/src/components/pages/blog/SasFortressRuins';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogSas.title') + ' | Ulcinj Car Hire',
    description: t(lang, 'blogSas.description'),
    alternates: buildAlternates('blog/sas-fortress-ruins', lang),
  };
}

export default async function LangSasFortressRuinsRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t(lang, 'blogSas.title'),
    "description": t(lang, 'blogSas.description'),
    "image": "https://www.ulcinjcarhire.com/img/blog-sas-fortress-ruins.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Ulcinj Car Hire", "url": "https://www.ulcinjcarhire.com" },
    "publisher": { "@type": "Organization", "name": "Ulcinj Car Hire", "url": "https://www.ulcinjcarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SasFortressRuins />
    </>
  );
}
