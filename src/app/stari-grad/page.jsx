import { t, buildAlternates } from '../metadata';
import StariGrad from '@/src/components/pages/StariGrad';

export async function generateMetadata() {
  const title = t('en', 'stari-grad.title') + ' | Ulcinj Car Hire';
  const description = t('en', 'stari-grad.seoDesc');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('stari-grad'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function StariGradRoute() {
  return <StariGrad />;
}
