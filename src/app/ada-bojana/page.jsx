import { t, buildAlternates } from '../metadata';
import AdaBojana from '@/src/components/pages/AdaBojana';

export async function generateMetadata() {
  const title = t('en', 'ada-bojana.title') + ' | Ulcinj Car Hire';
  const description = t('en', 'ada-bojana.seoDesc');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('ada-bojana'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function AdaBojanaRoute() {
  return <AdaBojana />;
}
