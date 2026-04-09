'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function UlcinjOldTownGuide() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogOldtown.title')}
      subtitle={t('blogOldtown.subtitle')}
      description={t('blogOldtown.description')}
      image="/img/blog-ulcinj-old-town-guide.webp"
    >
      <h2>{t('blogOldtown.h2History')}</h2>
      <p>{t('blogOldtown.historyP1')}</p>
      <p>{t('blogOldtown.historyP2')}</p>

      <h2>{t('blogOldtown.h2Enter')}</h2>
      <p>{t('blogOldtown.enterP')}</p>

      <img src="/img/blog-ulcinj-old-town-guide-inline.webp" alt={t('blogOldtown.altInline')} loading="lazy" />

      <h2>{t('blogOldtown.h2Mosques')}</h2>
      <p>{t('blogOldtown.mosquesP1')}</p>
      <p>{t('blogOldtown.mosquesP2')} <a href={localePath('/blog/valdanos-bay-secret')}>{t('blogOldtown.valdanosLink')}</a> {t('blogOldtown.mosquesP3')}</p>

      <h2>{t('blogOldtown.h2Walls')}</h2>
      <p>{t('blogOldtown.wallsP1')}</p>
      <p>{t('blogOldtown.wallsP2')} <a href={localePath('/blog/ulcinj-seafood-guide')}>{t('blogOldtown.seafoodLink')}</a>.</p>

      <h2>{t('blogOldtown.h2Museum')}</h2>
      <p>{t('blogOldtown.museumP')}</p>

      <h2>{t('blogOldtown.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogOldtown.tipTimeLabel')}</strong> {t('blogOldtown.tipTimeVal')}</li>
        <li><strong>{t('blogOldtown.tipShoesLabel')}</strong> {t('blogOldtown.tipShoesVal')}</li>
        <li><strong>{t('blogOldtown.tipParkingLabel')}</strong> {t('blogOldtown.tipParkingVal')}</li>
        <li><strong>{t('blogOldtown.tipSunsetLabel')}</strong> {t('blogOldtown.tipSunsetVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogOldtown.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogOldtown.glanceEntry')}</strong>
            {t('blogOldtown.glanceEntryVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogOldtown.glanceDuration')}</strong>
            {t('blogOldtown.glanceDurationVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogOldtown.glanceParking')}</strong>
            {t('blogOldtown.glanceParkingVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogOldtown.glanceBest')}</strong>
            {t('blogOldtown.glanceBestVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
