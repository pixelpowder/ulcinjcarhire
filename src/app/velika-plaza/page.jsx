import { t, buildAlternates } from '../metadata';
import VelikaPlaza from '@/src/components/pages/VelikaPlaza';

export async function generateMetadata() {
  return {
    title: t('en', 'velika-plaza.title') + ' | Ulcinj Car Hire',
    description: t('en', 'velika-plaza.seoDesc'),
    alternates: buildAlternates('velika-plaza'),
  };
}

export default function VelikaPlazaRoute() {
  return <VelikaPlaza />;
}
