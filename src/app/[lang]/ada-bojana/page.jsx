import { t, buildAlternates } from '../../metadata';
import AdaBojana from '@/src/components/pages/AdaBojana';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'ada-bojana.title') + ' | Ulcinj Car Hire',
    description: t(lang, 'ada-bojana.seoDesc'),
    alternates: buildAlternates('ada-bojana', lang),
  };
}

export default function AdaBojanaRoute() {
  return <AdaBojana />;
}
