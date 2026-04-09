'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function UlcinjToLakeSkadarSouth() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogSkadar.title')}
      subtitle={t('blogSkadar.subtitle')}
      description={t('blogSkadar.description')}
      image="/img/blog-ulcinj-to-lake-skadar-south.webp"
    >
      <h2>{t('blogSkadar.h2Why')}</h2>
      <p>{t('blogSkadar.whyP1')}</p>
      <p>{t('blogSkadar.whyP2')}</p>

      <h2>{t('blogSkadar.h2Route')}</h2>
      <p>{t('blogSkadar.routeP1')}</p>
      <p>{t('blogSkadar.routeP2')} <a href={localePath('/blog/sas-fortress-ruins')}>{t('blogSkadar.sasLink')}</a> {t('blogSkadar.routeP3')}</p>

      <img src="/img/blog-ulcinj-to-lake-skadar-south-inline.webp" alt={t('blogSkadar.altInline')} loading="lazy" />

      <h2>{t('blogSkadar.h2Murici')}</h2>
      <p>{t('blogSkadar.muriciP1')}</p>
      <p>{t('blogSkadar.muriciP2')}</p>

      <h2>{t('blogSkadar.h2Boat')}</h2>
      <p>{t('blogSkadar.boatP')}</p>

      <h2>{t('blogSkadar.h2Combine')}</h2>
      <p>{t('blogSkadar.combineP')} <a href={localePath('/blog/ulcinj-seafood-guide')}>{t('blogSkadar.seafoodLink')}</a>.</p>

      <h2>{t('blogSkadar.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogSkadar.tipRoadLabel')}</strong> {t('blogSkadar.tipRoadVal')}</li>
        <li><strong>{t('blogSkadar.tipSwimLabel')}</strong> {t('blogSkadar.tipSwimVal')}</li>
        <li><strong>{t('blogSkadar.tipBirdsLabel')}</strong> {t('blogSkadar.tipBirdsVal')}</li>
        <li><strong>{t('blogSkadar.tipFuelLabel')}</strong> {t('blogSkadar.tipFuelVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogSkadar.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogSkadar.glanceDrive')}</strong>
            {t('blogSkadar.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSkadar.glanceMurici')}</strong>
            {t('blogSkadar.glanceMuriciVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSkadar.glanceBoat')}</strong>
            {t('blogSkadar.glanceBoatVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSkadar.glanceBest')}</strong>
            {t('blogSkadar.glanceBestVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
