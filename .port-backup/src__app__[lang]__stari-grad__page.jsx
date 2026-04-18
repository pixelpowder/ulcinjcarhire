import { t, buildAlternates } from '../../metadata';
import StariGrad from '@/src/components/pages/StariGrad';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'stari-grad.title') + ' | Ulcinj Car Hire',
    description: t(lang, 'stari-grad.seoDesc'),
    alternates: buildAlternates('stari-grad'),
  };
}

export default function StariGradRoute() {
  return <StariGrad />;
}
