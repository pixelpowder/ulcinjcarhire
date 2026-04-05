import { t, buildAlternates } from '../metadata';
import AdaBojana from '@/src/components/pages/AdaBojana';

export async function generateMetadata() {
  return {
    title: t('en', 'ada-bojana.title') + ' | Ulcinj Car Hire',
    description: t('en', 'ada-bojana.seoDesc'),
    alternates: buildAlternates('ada-bojana'),
  };
}

export default function AdaBojanaRoute() {
  return <AdaBojana />;
}
