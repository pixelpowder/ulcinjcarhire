'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function UlcinjOliveTrail() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogOlive.title')}
      subtitle={t('blogOlive.subtitle')}
      description={t('blogOlive.description')}
      image="/img/blog-ulcinj-olive-trail.webp"
    >
      <h2>{t('blogOlive.h2Tree')}</h2>
      <p>{t('blogOlive.treeP1')}</p>
      <p>{t('blogOlive.treeP2')}</p>

      <h2>{t('blogOlive.h2Getting')}</h2>
      <p>{t('blogOlive.gettingP')} <a href={localePath('/blog/valdanos-bay-secret')}>{t('blogOlive.valdanosLink')}</a> {t('blogOlive.gettingP2')}</p>

      <img src="/img/blog-ulcinj-olive-trail-inline.webp" alt={t('blogOlive.altInline')} loading="lazy" />

      <h2>{t('blogOlive.h2Groves')}</h2>
      <p>{t('blogOlive.grovesP1')}</p>
      <p>{t('blogOlive.grovesP2')}</p>

      <h2>{t('blogOlive.h2Oil')}</h2>
      <p>{t('blogOlive.oilP')} <a href={localePath('/blog/ulcinj-seafood-guide')}>{t('blogOlive.seafoodLink')}</a>.</p>

      <h2>{t('blogOlive.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogOlive.tipSeasonLabel')}</strong> {t('blogOlive.tipSeasonVal')}</li>
        <li><strong>{t('blogOlive.tipPhotoLabel')}</strong> {t('blogOlive.tipPhotoVal')}</li>
        <li><strong>{t('blogOlive.tipBuyLabel')}</strong> {t('blogOlive.tipBuyVal')}</li>
        <li><strong>{t('blogOlive.tipCombineLabel')}</strong> {t('blogOlive.tipCombineVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogOlive.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogOlive.glanceAge')}</strong>
            {t('blogOlive.glanceAgeVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogOlive.glanceDrive')}</strong>
            {t('blogOlive.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogOlive.glanceFee')}</strong>
            {t('blogOlive.glanceFeeVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogOlive.glanceBest')}</strong>
            {t('blogOlive.glanceBestVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
