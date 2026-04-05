import { t, buildAlternates } from '../metadata';
import StariGrad from '@/src/components/pages/StariGrad';

export async function generateMetadata() {
  return {
    title: t('en', 'stari-grad.title') + ' | Ulcinj Car Hire',
    description: t('en', 'stari-grad.seoDesc'),
    alternates: buildAlternates('stari-grad'),
  };
}

export default function StariGradRoute() {
  return <StariGrad />;
}
