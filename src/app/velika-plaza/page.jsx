import { t, buildAlternates } from '../metadata';
import VelikaPlaza from '@/src/components/pages/VelikaPlaza';

export async function generateMetadata() {
  const title = t('en', 'velika-plaza.title') + ' | Ulcinj Car Hire';
  const description = t('en', 'velika-plaza.seoDesc');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('velika-plaza'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function VelikaPlazaRoute() {
  return <VelikaPlaza />;
}
