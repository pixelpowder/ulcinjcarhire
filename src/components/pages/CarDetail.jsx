'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
import config from '../../siteConfig';
import { carArticles as carArticlesEn } from '../../data/carArticles';
import { carArticles as carArticlesDe } from '../../data/carArticles.de';
import { carArticles as carArticlesRu } from '../../data/carArticles.ru';
import { carArticles as carArticlesIt } from '../../data/carArticles.it';
import { carArticles as carArticlesFr } from '../../data/carArticles.fr';
import { carArticles as carArticlesMe } from '../../data/carArticles.me';
import { carImages } from '../../data/carImages';
import CarGallery from '../CarGallery';

const CAR_ARTICLES_BY_LANG = {
  en: carArticlesEn,
  de: carArticlesDe,
  ru: carArticlesRu,
  it: carArticlesIt,
  fr: carArticlesFr,
  me: carArticlesMe,
};
import {
  Users, Fuel, Settings, Briefcase, CheckCircle, ArrowRight,
  Gauge, Car as CarIcon, Ruler, Zap, Droplet, Compass, Timer, Package,
} from 'lucide-react';

// One inline photo per car, chosen for the Ulcinj-specific character of each.
const INLINE_PHOTOS = {
  'vw-polo':        { src: '/img/fleet-inline/village-trees.jpg',     alt: 'Stone village road in southern Montenegro',        caption: 'Back streets climbing up toward Kalaja, narrow, single-lane, measured in centimetres. The Polo slips through.' },
  'fiat-500':       { src: '/img/fleet-inline/seashore-hills.jpg',    alt: 'Coastal road along the Adriatic',                  caption: 'The Mala Plaža promenade at golden hour, short hops, a sunroof, and somewhere tight to park at the end.' },
  'renault-clio':   { src: '/img/fleet-inline/seaside-road.jpg',      alt: 'Coastal road beside the Adriatic',                 caption: 'The coast road north through Sutomore and Bar, the Clio covers it in quiet sixth-gear cruise.' },
  'renault-megane': { src: '/img/fleet-inline/mountain-highway.jpg',  alt: 'Mountain highway with empty lanes',                caption: 'The Sozina motorway toward Podgorica, where the Megane\u2019s diesel torque and rear vents justify the size-up.' },
  'toyota-yaris':   { src: '/img/fleet-inline/aerial-mountains.jpg',  alt: 'Aerial view of south-coast Montenegro',            caption: 'Two weeks of this, beach, border, Šasko Lake, back, for under €80 of fuel in the Yaris Hybrid.' },
  'kia-stonic':     { src: '/img/fleet-inline/rocky-road.jpg',        alt: 'Empty asphalt road between scrub and rocks',       caption: 'The last kilometres onto Ada Bojana, loose surface, ruts, and the Stonic\u2019s ride height making short work of it.' },
  'peugeot-308':    { src: '/img/fleet-inline/forest-road.jpg',       alt: 'Tree-lined road in coastal Montenegro',            caption: 'The coastal road north through Bar and Petrovac, EAT8 + BlueHDi, set and forget toward Tivat Airport.' },
  _default:         { src: '/img/fleet-inline/sunset-montenegro.jpg', alt: 'Southern Montenegro coast at sunset',              caption: 'Ulcinj\u2019s coast stitches beach, border and lake into one long drive south.' },
};

// Related image-link cards at the foot of each detail page. Three cards per car,
// pointing to Ulcinj destination pages or local blog posts that fit the car's character.
const RELATED = {
  'vw-polo': [
    { href: '/stari-grad',                               img: '/img/ulcinj-old-town.webp',                            title: 'Ulcinj Old Town (Stari Grad)' },
    { href: '/velika-plaza',                             img: '/img/velika-plaza.webp',                               title: 'Velika Plaža' },
    { href: '/blog/ulcinj-old-town-guide',               img: '/img/blog-ulcinj-old-town-guide.webp',                 title: 'Ulcinj Old Town guide' },
  ],
  'fiat-500': [
    { href: '/stari-grad',                               img: '/img/ulcinj-old-town.webp',                            title: 'Ulcinj Old Town (Stari Grad)' },
    { href: '/velika-plaza',                             img: '/img/velika-plaza.webp',                               title: 'Velika Plaža' },
    { href: '/blog/ulcinj-seafood-guide',                img: '/img/blog-ulcinj-seafood-guide.webp',                  title: 'Ulcinj seafood guide' },
  ],
  'renault-clio': [
    { href: '/velika-plaza',                             img: '/img/velika-plaza.webp',                               title: 'Velika Plaža' },
    { href: '/bar',                                      img: '/img/bar-nearby.webp',                                 title: 'Bar, 30 min north' },
    { href: '/shkodra',                                  img: '/img/shkodra-albania.webp',                            title: 'Shkodra, Albania' },
  ],
  'renault-megane': [
    { href: '/podgorica-airport',                        img: '/img/podgorica-airport.webp',                          title: 'Podgorica Airport transfer' },
    { href: '/lake-skadar',                              img: '/img/lake-skadar.webp',                                title: 'Lake Skadar' },
    { href: '/shkodra',                                  img: '/img/shkodra-albania.webp',                            title: 'Shkodra, Albania' },
  ],
  'toyota-yaris': [
    { href: '/velika-plaza',                             img: '/img/velika-plaza.webp',                               title: 'Velika Plaža' },
    { href: '/blog/velika-plaza-kitesurfing',            img: '/img/blog-velika-plaza-kitesurfing.webp',              title: 'Velika Plaža kitesurfing' },
    { href: '/bar',                                      img: '/img/bar-nearby.webp',                                 title: 'Bar, 30 min north' },
  ],
  'kia-stonic': [
    { href: '/ada-bojana',                               img: '/img/ada-bojana.webp',                                 title: 'Ada Bojana' },
    { href: '/blog/ada-bojana-river-island',             img: '/img/blog-ada-bojana-river-island.webp',               title: 'Ada Bojana river island' },
    { href: '/valdanos',                                 img: '/img/valdanos-olives.webp',                            title: 'Valdanos Bay' },
  ],
  'peugeot-308': [
    { href: '/tivat-airport',                            img: '/img/kotor-old-town.webp',                             title: 'Tivat Airport transfer' },
    { href: '/shkodra',                                  img: '/img/shkodra-albania.webp',                            title: 'Shkodra, Albania' },
    { href: '/blog/ulcinj-to-albania-border',            img: '/img/blog-ulcinj-to-albania-border.webp',              title: 'Ulcinj to the Albanian border' },
  ],
};

const ARTICLE_LINKS = {
  'vw-polo':        { paraIndex: 1, candidates: ['Kalaja', 'Mala Plaža', 'Stari Grad'],                 href: '/stari-grad' },
  'fiat-500':       { paraIndex: 1, candidates: ['Mala Plaža', 'Kalaja', 'Pristan'],                    href: '/stari-grad' },
  'renault-clio':   { paraIndex: 1, candidates: ['Velika Plaža', 'Bar', 'Sutomore'],                    href: '/velika-plaza' },
  'renault-megane': { paraIndex: 1, candidates: ['Sozina', 'Podgorica', 'Velika Plaža'],                href: '/podgorica-airport' },
  'toyota-yaris':   { paraIndex: 1, candidates: ['Velika Plaža', 'Bar', 'Pristan'],                     href: '/velika-plaza' },
  'kia-stonic':     { paraIndex: 1, candidates: ['Ada Bojana', 'Valdanos', 'kite schools'],             href: '/blog/ada-bojana-river-island' },
  'peugeot-308':    { paraIndex: 1, candidates: ['Sukobin', 'Albanian border', 'Tivat Airport', 'Bar'], href: '/blog/ulcinj-to-albania-border' },
};

function renderParagraphWithLink(paragraph, rule, localePath, linkLabel) {
  if (!rule) return paragraph;
  for (const phrase of rule.candidates) {
    const idx = paragraph.indexOf(phrase);
    if (idx === -1) continue;
    const before = paragraph.slice(0, idx);
    const linkText = paragraph.slice(idx, idx + phrase.length);
    const after = paragraph.slice(idx + phrase.length);
    return (
      <>
        {before}
        <a href={localePath(rule.href)} title={linkLabel}>{linkText}</a>
        {after}
      </>
    );
  }
  return paragraph;
}

export default function CarDetail({ slug }) {
  const { t, lang, localePath } = useTranslation();
  const localisedArticles = CAR_ARTICLES_BY_LANG[lang] || CAR_ARTICLES_BY_LANG.en;
  const carArticles = localisedArticles[slug] ? localisedArticles : CAR_ARTICLES_BY_LANG.en;
  const car = config.cars.find(c => c.slug === slug);
  if (!car) return null;

  const k = (sub) => `cars.${slug}.${sub}`;
  const tk = (sub, fallback) => {
    const val = t(k(sub));
    return val && val !== k(sub) ? val : fallback;
  };
  const tf = (key, fallback) => {
    const val = t(key);
    return val && val !== key ? val : fallback;
  };

  const name = tk('name', car.name);
  const tagline = tk('tagline', car.tagline);
  const lede = tk('lede', car.lede);
  const suitability = tk('suitability', car.suitability);
  const regional = tk('regional', car.regional);
  const category = tk('category', car.category);
  const details = car.details || {};

  const idx = config.cars.findIndex(c => c.slug === slug);
  const next = config.cars[(idx + 1) % config.cars.length];

  const toMpg = (consumption) => {
    if (!consumption) return null;
    const m = consumption.match(/([\d.]+)\s*L\/100/);
    if (!m) return null;
    const l100 = parseFloat(m[1]);
    if (!l100) return null;
    return `${Math.round(282.48 / l100)} mpg`;
  };
  const mpg = toMpg(details.consumption);

  const quickRow = [
    { icon: <Users size={16} />,     label: tf('carSpecs.seats', 'Seats'),          value: car.seats },
    { icon: <Settings size={16} />,  label: tf('carSpecs.transmission', 'Gearbox'), value: car.transmission },
    { icon: <Fuel size={16} />,      label: tf('carSpecs.fuel', 'Fuel'),            value: car.fuel },
    { icon: <Briefcase size={16} />, label: tf('carSpecs.luggage', 'Luggage'),      value: `${car.luggage} bags` },
    { icon: <Package size={16} />,   label: tf('carSpecs.bootSize', 'Boot'),        value: details.bootSize },
    { icon: <Droplet size={16} />,   label: tf('carSpecs.mpg', 'Economy'),          value: mpg || details.consumption },
  ].filter(r => r.value);
  const detailRow = [];

  return (
    <ContentPage
      title={name}
      subtitle={tagline}
      description={suitability}
      image={car.image}
      heroPosition="center"
    >
      <div className="car-detail-hero-card">
        <div className="car-detail-category-tag">{category}</div>
        <p className="car-detail-lede">{lede}</p>
      </div>

      <CarGallery images={carImages[slug] || [car.image]} alt={name} />

      <h2>{tf('cars.overviewTitle', 'At a glance')}</h2>
      <div className="car-detail-specs car-detail-specs--quick">
        {quickRow.map((s) => (
          <div key={s.label} className="car-detail-spec">
            <div className="car-detail-spec__icon">{s.icon}</div>
            <div className="car-detail-spec__label">{s.label}</div>
            <div className="car-detail-spec__value">{s.value}</div>
          </div>
        ))}
      </div>

      {detailRow.length > 0 && (
        <>
          <h3 className="car-detail-specs__subhead">{t('cars.specsTitle') || 'Performance & dimensions'}</h3>
          <div className="car-detail-specs car-detail-specs--full">
            {detailRow.map((s) => (
              <div key={s.label} className="car-detail-spec">
                <div className="car-detail-spec__icon">{s.icon}</div>
                <div className="car-detail-spec__label">{s.label}</div>
                <div className="car-detail-spec__value">{s.value}</div>
              </div>
            ))}
          </div>
        </>
      )}

      <h2>{t('cars.whoForTitle') || `Who is the ${car.name} for?`}</h2>
      <p>{suitability}</p>
      {Array.isArray(car.bestFor) && (
        <ul className="car-detail-bestfor">
          {car.bestFor.map((b, i) => (
            <li key={i}><CheckCircle size={14} /> {tk(`bestFor.${i}`, b)}</li>
          ))}
        </ul>
      )}

      <div className="car-detail-regional">
        <h2>{t('cars.regionalTitle') || 'Best regional use'}</h2>
        <p>{regional}</p>
      </div>

      {carArticles[slug] && (
        <div className="car-detail-article">
          <h2>{tf('cars.articleTitle', `The ${car.name} on Ulcinj roads`)}</h2>
          {carArticles[slug].paragraphs.map((para, i) => {
            const rule = ARTICLE_LINKS[slug];
            const applyRuleHere = rule && rule.paraIndex === i;
            const sectionKeys = [
              'behindWheel', 'onRoads', 'spaceLoad', 'bestFor', 'practical', 'verdict',
            ];
            const sectionFallbacks = [
              'Behind the wheel',
              'On Ulcinj roads',
              'Space and load',
              'Best journeys for this car',
              'Practical notes',
              'The verdict',
            ];
            return (
              <>
                <section key={i} className="car-detail-article__section">
                  <h3>{tf(`cars.sections.${sectionKeys[i]}`, sectionFallbacks[i])}</h3>
                  <p>{applyRuleHere ? renderParagraphWithLink(para, rule, localePath, car.name) : para}</p>
                </section>
                {i === 2 && (() => {
                  const inline = INLINE_PHOTOS[slug] || INLINE_PHOTOS._default;
                  return (
                    <figure key={`inline-${i}`} className="car-detail-article__figure">
                      <img src={inline.src} alt={inline.alt} loading="lazy" />
                      <figcaption>{inline.caption}</figcaption>
                    </figure>
                  );
                })()}
              </>
            );
          })}
        </div>
      )}

      <h2>{t('cars.specsTitle') || 'Full specification'}</h2>
      <div className="car-detail-specs car-detail-specs--full">
        {detailRow.map((s) => (
          <div key={s.label} className="car-detail-spec">
            <div className="car-detail-spec__icon">{s.icon}</div>
            <div className="car-detail-spec__label">{s.label}</div>
            <div className="car-detail-spec__value">{s.value}</div>
          </div>
        ))}
      </div>

      <h2>{t('cars.featuresTitle') || 'Inside the car'}</h2>
      <ul className="car-detail-feature-list">
        {car.features.map((f, i) => {
          const translated = tk(`features.${i}`, f);
          return <li key={i}><CheckCircle size={14} /> {translated}</li>;
        })}
      </ul>

      {RELATED[slug] && (
        <div className="car-detail-related">
          <h2>{tf('cars.relatedTitle', 'Where this car takes you')}</h2>
          <div className="car-detail-related__grid">
            {RELATED[slug].map((card) => (
              <a key={card.href} href={localePath(card.href)} className="car-detail-related__card">
                <div className="car-detail-related__img" style={{ backgroundImage: `url(${card.img})` }} />
                <div className="car-detail-related__body">
                  <span className="car-detail-related__title">{card.title}</span>
                  <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="car-detail-cta">
        <a href={localePath('/book')} className="car-detail-cta__btn">
          {t('cars.checkAvailability') || `Check availability & live pricing`} <ArrowRight size={16} />
        </a>
        <a href={localePath(`/cars/${next.slug}`)} className="car-detail-cta__next">
          {t('cars.nextBtn') || `Next in fleet: ${next.name}`} →
        </a>
      </div>
    </ContentPage>
  );
}
