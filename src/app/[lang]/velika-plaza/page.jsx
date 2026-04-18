import { t, buildAlternates } from '../../metadata';
import VelikaPlaza from '@/src/components/pages/VelikaPlaza';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'velika-plaza.title') + ' | Ulcinj Car Hire',
    description: t(lang, 'velika-plaza.seoDesc'),
    alternates: buildAlternates('velika-plaza', lang),
  };
}

export default function VelikaPlazaRoute() {
  return <VelikaPlaza />;
}
