import { t, buildAlternates } from '../metadata';
import Valdanos from '@/src/components/pages/Valdanos';

export async function generateMetadata() {
  return {
    title: t('en', 'valdanos.title') + ' | Ulcinj Car Hire',
    description: t('en', 'valdanos.seoDesc'),
    alternates: buildAlternates('valdanos'),
  };
}

export default function ValdanosRoute() {
  return <Valdanos />;
}
