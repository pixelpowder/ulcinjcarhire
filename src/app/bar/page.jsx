import { t, buildAlternates } from '../metadata';
import Bar from '@/src/components/pages/Bar';

export async function generateMetadata() {
  const title = t('en', 'bar.title') + ' | Ulcinj Car Hire';
  const description = t('en', 'bar.seoDesc');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('bar'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function BarRoute() {
  return <Bar />;
}
