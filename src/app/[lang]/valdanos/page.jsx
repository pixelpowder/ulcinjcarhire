import { t, buildAlternates } from '../../metadata';
import Valdanos from '@/src/components/pages/Valdanos';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'valdanos.title') + ' | Ulcinj Car Hire',
    description: t(lang, 'valdanos.seoDesc'),
    alternates: buildAlternates('valdanos', lang),
  };
}

export default function ValdanosRoute() {
  return <Valdanos />;
}
