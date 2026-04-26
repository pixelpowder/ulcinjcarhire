import { t, buildAlternates } from '../metadata';
import FleetIndex from '@/src/components/pages/FleetIndex';

const SITE = 'https://www.ulcinjcarhire.com';

export async function generateMetadata() {
  const title = 'Our Fleet, 7 Cars for Rent in Ulcinj | Ulcinj Car Hire';
  const description = (t('en', 'fleetIndex.seoDesc') !== 'fleetIndex.seoDesc'
    ? t('en', 'fleetIndex.seoDesc')
    : 'Browse 7 rental cars for Ulcinj, from the €20/day Fiat 500 for Stari Grad parking to the VW Golf for Tivat Airport transfers. Full specs and who each car suits.');
  return {
    title,
    description,
    alternates: buildAlternates('cars'),
    openGraph: {
      title,
      description,
      url: `${SITE}/cars`,
      type: 'website',
      images: [{ url: `${SITE}/img/fleet/vw-polo.jpg`, width: 1200, height: 800, alt: 'Ulcinj Car Hire fleet' }],
    },
  };
}

export default function FleetIndexRoute() {
  return <FleetIndex />;
}
