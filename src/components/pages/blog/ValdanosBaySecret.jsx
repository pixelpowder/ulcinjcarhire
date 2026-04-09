'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function ValdanosBaySecret() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogValdanos.title')}
      subtitle={t('blogValdanos.subtitle')}
      description={t('blogValdanos.description')}
      image="/img/blog-valdanos-bay-secret.webp"
    >
      <h2>{t('blogValdanos.h2Hidden')}</h2>
      <p>{t('blogValdanos.hiddenP1')}</p>
      <p>{t('blogValdanos.hiddenP2')}</p>

      <h2>{t('blogValdanos.h2Drive')}</h2>
      <p>{t('blogValdanos.driveP1')}</p>
      <p>{t('blogValdanos.driveP2')} <a href={localePath('/blog/ulcinj-old-town-guide')}>{t('blogValdanos.oldtownLink')}</a> {t('blogValdanos.driveP3')}</p>

      <img src="/img/blog-valdanos-bay-secret-inline.webp" alt={t('blogValdanos.altInline')} loading="lazy" />

      <h2>{t('blogValdanos.h2Olives')}</h2>
      <p>{t('blogValdanos.olivesP')} <a href={localePath('/blog/ulcinj-olive-trail')}>{t('blogValdanos.oliveLink')}</a>.</p>

      <h2>{t('blogValdanos.h2Swim')}</h2>
      <p>{t('blogValdanos.swimP')}</p>

      <h2>{t('blogValdanos.h2History')}</h2>
      <p>{t('blogValdanos.historyP')}</p>

      <h2>{t('blogValdanos.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogValdanos.tipRoadLabel')}</strong> {t('blogValdanos.tipRoadVal')}</li>
        <li><strong>{t('blogValdanos.tipBringLabel')}</strong> {t('blogValdanos.tipBringVal')}</li>
        <li><strong>{t('blogValdanos.tipTimeLabel')}</strong> {t('blogValdanos.tipTimeVal')}</li>
        <li><strong>{t('blogValdanos.tipQuietLabel')}</strong> {t('blogValdanos.tipQuietVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogValdanos.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogValdanos.glanceDrive')}</strong>
            {t('blogValdanos.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogValdanos.glanceOlives')}</strong>
            {t('blogValdanos.glanceOlivesVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogValdanos.glanceRoad')}</strong>
            {t('blogValdanos.glanceRoadVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogValdanos.glanceBest')}</strong>
            {t('blogValdanos.glanceBestVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
