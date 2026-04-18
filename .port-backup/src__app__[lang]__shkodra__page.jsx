import { t, buildAlternates } from '../../metadata';
import Shkodra from '@/src/components/pages/Shkodra';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'shkodra.title') + ' | Ulcinj Car Hire',
    description: t(lang, 'shkodra.seoDesc'),
    alternates: buildAlternates('shkodra'),
  };
}

export default function ShkodraRoute() {
  return <Shkodra />;
}
