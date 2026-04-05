import { t, buildAlternates } from '../metadata';
import Bar from '@/src/components/pages/Bar';

export async function generateMetadata() {
  return {
    title: t('en', 'bar.title') + ' | Ulcinj Car Hire',
    description: t('en', 'bar.seoDesc'),
    alternates: buildAlternates('bar'),
  };
}

export default function BarRoute() {
  return <Bar />;
}
