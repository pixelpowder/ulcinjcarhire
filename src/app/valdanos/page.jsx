import { t, buildAlternates } from '../metadata';
import Valdanos from '@/src/components/pages/Valdanos';

export async function generateMetadata() {
  const title = t('en', 'valdanos.title') + ' | Ulcinj Car Hire';
  const description = t('en', 'valdanos.seoDesc');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('valdanos'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function ValdanosRoute() {
  return <Valdanos />;
}
