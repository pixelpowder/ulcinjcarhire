import { t, buildAlternates } from '../metadata';
import LakeSkadar from '@/src/components/pages/LakeSkadar';

export async function generateMetadata() {
  return {
    title: t('en', 'lake-skadar.title') + ' | Ulcinj Car Hire',
    description: t('en', 'lake-skadar.seoDesc'),
    alternates: buildAlternates('lake-skadar'),
  };
}

export default function LakeSkadarRoute() {
  return <LakeSkadar />;
}
