import { t, buildAlternates } from '../metadata';
import Shkodra from '@/src/components/pages/Shkodra';

export async function generateMetadata() {
  return {
    title: t('en', 'shkodra.title') + ' | Ulcinj Car Hire',
    description: t('en', 'shkodra.seoDesc'),
    alternates: buildAlternates('shkodra'),
  };
}

export default function ShkodraRoute() {
  return <Shkodra />;
}
