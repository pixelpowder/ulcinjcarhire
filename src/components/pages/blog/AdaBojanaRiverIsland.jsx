'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function AdaBojanaRiverIsland() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogAdabojana.title')}
      subtitle={t('blogAdabojana.subtitle')}
      description={t('blogAdabojana.description')}
      image="/img/blog-ada-bojana-river-island.webp"
    >
      <h2>{t('blogAdabojana.h2Island')}</h2>
      <p>{t('blogAdabojana.islandP1')}</p>
      <p>{t('blogAdabojana.islandP2')}</p>

      <h2>{t('blogAdabojana.h2Drive')}</h2>
      <p>{t('blogAdabojana.driveP1')}</p>
      <p>{t('blogAdabojana.driveP2')} <a href={localePath('/blog/ulcinj-to-albania-border')}>{t('blogAdabojana.albaniaLink')}</a> {t('blogAdabojana.driveP3')}</p>

      <img src="/img/blog-ada-bojana-river-island-inline.webp" alt={t('blogAdabojana.altInline')} loading="lazy" />

      <h2>{t('blogAdabojana.h2Beach')}</h2>
      <p>{t('blogAdabojana.beachP')}</p>

      <h2>{t('blogAdabojana.h2Food')}</h2>
      <p>{t('blogAdabojana.foodP')} <a href={localePath('/blog/ulcinj-seafood-guide')}>{t('blogAdabojana.seafoodLink')}</a>.</p>

      <h2>{t('blogAdabojana.h2Wind')}</h2>
      <p>{t('blogAdabojana.windP')}</p>

      <h2>{t('blogAdabojana.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogAdabojana.tipBridgeLabel')}</strong> {t('blogAdabojana.tipBridgeVal')}</li>
        <li><strong>{t('blogAdabojana.tipCarLabel')}</strong> {t('blogAdabojana.tipCarVal')}</li>
        <li><strong>{t('blogAdabojana.tipCashLabel')}</strong> {t('blogAdabojana.tipCashVal')}</li>
        <li><strong>{t('blogAdabojana.tipMosquitoLabel')}</strong> {t('blogAdabojana.tipMosquitoVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogAdabojana.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogAdabojana.glanceDrive')}</strong>
            {t('blogAdabojana.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogAdabojana.glanceBridge')}</strong>
            {t('blogAdabojana.glanceBridgeVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogAdabojana.glanceBest')}</strong>
            {t('blogAdabojana.glanceBestVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogAdabojana.glanceWind')}</strong>
            {t('blogAdabojana.glanceWindVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
