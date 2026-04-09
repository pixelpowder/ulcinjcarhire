'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function VelikaPlazaKitesurfing() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogVelikaplaza.title')}
      subtitle={t('blogVelikaplaza.subtitle')}
      description={t('blogVelikaplaza.description')}
      image="/img/blog-velika-plaza-kitesurfing.webp"
    >
      <h2>{t('blogVelikaplaza.h2Beach')}</h2>
      <p>{t('blogVelikaplaza.beachP1')}</p>
      <p>{t('blogVelikaplaza.beachP2')}</p>

      <h2>{t('blogVelikaplaza.h2Kite')}</h2>
      <p>{t('blogVelikaplaza.kiteP1')}</p>
      <p>{t('blogVelikaplaza.kiteP2')} <a href={localePath('/blog/ada-bojana-river-island')}>{t('blogVelikaplaza.adaLink')}</a> {t('blogVelikaplaza.kiteP3')}</p>

      <img src="/img/blog-velika-plaza-kitesurfing-inline.webp" alt={t('blogVelikaplaza.altInline')} loading="lazy" />

      <h2>{t('blogVelikaplaza.h2Sections')}</h2>
      <h3>{t('blogVelikaplaza.h3North')}</h3>
      <p>{t('blogVelikaplaza.northP')}</p>
      <h3>{t('blogVelikaplaza.h3Central')}</h3>
      <p>{t('blogVelikaplaza.centralP')}</p>
      <h3>{t('blogVelikaplaza.h3South')}</h3>
      <p>{t('blogVelikaplaza.southP')}</p>

      <h2>{t('blogVelikaplaza.h2Drive')}</h2>
      <p>{t('blogVelikaplaza.driveP')} <a href={localePath('/blog/ulcinj-old-town-guide')}>{t('blogVelikaplaza.oldtownLink')}</a>.</p>

      <h2>{t('blogVelikaplaza.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogVelikaplaza.tipSandLabel')}</strong> {t('blogVelikaplaza.tipSandVal')}</li>
        <li><strong>{t('blogVelikaplaza.tipParkingLabel')}</strong> {t('blogVelikaplaza.tipParkingVal')}</li>
        <li><strong>{t('blogVelikaplaza.tipSunLabel')}</strong> {t('blogVelikaplaza.tipSunVal')}</li>
        <li><strong>{t('blogVelikaplaza.tipFoodLabel')}</strong> {t('blogVelikaplaza.tipFoodVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogVelikaplaza.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogVelikaplaza.glanceLength')}</strong>
            {t('blogVelikaplaza.glanceLengthVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogVelikaplaza.glanceSand')}</strong>
            {t('blogVelikaplaza.glanceSandVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogVelikaplaza.glanceDrive')}</strong>
            {t('blogVelikaplaza.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogVelikaplaza.glanceBest')}</strong>
            {t('blogVelikaplaza.glanceBestVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
