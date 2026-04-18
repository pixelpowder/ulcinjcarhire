import { t, buildAlternates } from '../../metadata';
import Bar from '@/src/components/pages/Bar';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'bar.title') + ' | Ulcinj Car Hire',
    description: t(lang, 'bar.seoDesc'),
    alternates: buildAlternates('bar', lang),
  };
}

export default function BarRoute() {
  return <Bar />;
}
