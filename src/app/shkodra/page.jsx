import { t, buildAlternates } from '../metadata';
import Shkodra from '@/src/components/pages/Shkodra';

export async function generateMetadata() {
  const title = t('en', 'shkodra.title') + ' | Ulcinj Car Hire';
  const description = t('en', 'shkodra.seoDesc');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('shkodra'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function ShkodraRoute() {
  return <Shkodra />;
}
