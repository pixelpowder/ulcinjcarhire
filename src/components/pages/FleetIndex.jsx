'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
import config from '../../siteConfig';
import { Users, Fuel, Settings, Briefcase, ArrowRight } from 'lucide-react';

export default function FleetIndex() {
  const { t, localePath } = useTranslation();

  return (
    <ContentPage
      title={t('fleetIndex.title', 'Our Fleet')}
      subtitle={t('fleetIndex.subtitle', 'Seven cars picked for Ulcinj — old-town parking, Velika Plaža runs, Ada Bojana tracks, Albanian border hops.')}
      image="/img/fleet/vw-polo.jpg"
      heroPosition="center"
      description={t('fleetIndex.seoDesc', 'Browse the Ulcinj Car Hire fleet — specs, fuel use, boot size, and what each car is really good at on Montenegro\u2019s southern coast.')}
    >
      <p>{t('fleetIndex.intro1', `Ulcinj sits at the far south of Montenegro's coast, and its driving is unlike anywhere else in the country. Mornings you're threading narrow lanes beneath the Ottoman walls of Kalaja; afternoons you're rolling along 13 kilometres of open sand at Velika Plaža with the Albanian mountains on the horizon; evenings you're crossing the Bojana bridge to eat grilled eels at a stilt restaurant on Ada Bojana. The cars we rent are chosen to cover exactly that range: an agile hatch for the old-town crawl, a soft-sprung small car for the patched service roads out to Ada, a high-riding crossover for the unpaved stretch past the kite schools, and a mid-size diesel for the 90-minute push up to Tivat Airport or the Sukobin border run into Albania.`)}</p>

      <p>{t('fleetIndex.intro2', `Two things shape the right choice more than price. First, summer heat. Ulcinj records the hottest average temperatures in Montenegro — regularly above 35°C in July and August — so the AC compressor matters more than brochure figures suggest. The Yaris Hybrid wins here because its electric compressor runs independent of the petrol engine: cold cabin without extra fuel burn in stop-start beach traffic. Second, road surface. The coastal road itself is smooth, but the service tracks onto Velika Plaža, the approach to Valdanos bay, and the last 2 km to Ada Bojana kite schools are patched or unpaved in places. A Stonic's extra ride height or a C3's long-travel suspension earns its money in those last few kilometres.`)}</p>

      <p>{t('fleetIndex.intro3', `If you're splitting your week between beaches and a cross-border day to Shkodër, the Sukobin crossing is 20 minutes south of town and usually clears fast — make sure your rental includes the Albanian Green Card at pickup (we sort it on request). For the longer inland loop via Šasko Lake to Podgorica, or the full coast haul up through Bar, Budva and Kotor to Tivat Airport, the VW Golf with its DSG diesel is the easiest car to live with. And for anyone anchoring their stay in an apartment within walking distance of Mala Plaža — a Fiat 500 or a VW Polo slips into the cramped lots where bigger cars give up.`)}</p>

      <div className="fleet-index-grid">
        {config.cars.map((car) => {
          const tk = (sub, fallback) => {
            const val = t(`cars.${car.slug}.${sub}`);
            return val && val !== `cars.${car.slug}.${sub}` ? val : fallback;
          };
          const name = tk('name', car.name);
          const tagline = tk('tagline', car.tagline);
          const category = tk('category', car.category);
          const consumption = car.details?.consumption;

          return (
            <a
              key={car.slug}
              href={localePath(`/cars/${car.slug}`)}
              className="fleet-index-card"
            >
              <div className="fleet-index-card__img" style={{ backgroundImage: `url(${car.image})` }}>
                <span className="fleet-index-card__tag">{category}</span>
              </div>
              <div className="fleet-index-card__body">
                <h3 className="fleet-index-card__name">{name}</h3>
                <p className="fleet-index-card__tagline">{tagline}</p>
                <div className="fleet-index-card__specs">
                  <span><Users size={14} /> {car.seats}</span>
                  <span><Settings size={14} /> {car.transmission.slice(0,4)}</span>
                  <span><Fuel size={14} /> {car.fuel}</span>
                  <span><Briefcase size={14} /> {car.luggage}</span>
                </div>
                {consumption && (
                  <div className="fleet-index-card__extra">
                    {consumption}
                  </div>
                )}
                <div className="fleet-index-card__footer">
                  <span className="fleet-index-card__arrow">
                    {t('cars.readGuide', 'Read guide')} <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </ContentPage>
  );
}
