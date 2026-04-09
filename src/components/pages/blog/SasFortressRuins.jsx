'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function SasFortressRuins() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogSas.title')}
      subtitle={t('blogSas.subtitle')}
      description={t('blogSas.description')}
      image="/img/blog-sas-fortress-ruins.webp"
    >
      <h2>{t('blogSas.h2Lost')}</h2>
      <p>{t('blogSas.lostP1')}</p>
      <p>{t('blogSas.lostP2')}</p>

      <h2>{t('blogSas.h2Drive')}</h2>
      <p>{t('blogSas.driveP1')}</p>
      <p>{t('blogSas.driveP2')} <a href={localePath('/blog/ulcinj-to-lake-skadar-south')}>{t('blogSas.skadarLink')}</a> {t('blogSas.driveP3')}</p>

      <img src="/img/blog-sas-fortress-ruins-inline.webp" alt={t('blogSas.altInline')} loading="lazy" />

      <h2>{t('blogSas.h2Ruins')}</h2>
      <p>{t('blogSas.ruinsP1')}</p>
      <p>{t('blogSas.ruinsP2')}</p>

      <h2>{t('blogSas.h2Bojana')}</h2>
      <p>{t('blogSas.bojanaP')} <a href={localePath('/blog/ulcinj-old-town-guide')}>{t('blogSas.oldtownLink')}</a>.</p>

      <h2>{t('blogSas.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogSas.tipAccessLabel')}</strong> {t('blogSas.tipAccessVal')}</li>
        <li><strong>{t('blogSas.tipShoesLabel')}</strong> {t('blogSas.tipShoesVal')}</li>
        <li><strong>{t('blogSas.tipTimeLabel')}</strong> {t('blogSas.tipTimeVal')}</li>
        <li><strong>{t('blogSas.tipCombineLabel')}</strong> {t('blogSas.tipCombineVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogSas.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogSas.glanceDrive')}</strong>
            {t('blogSas.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSas.glanceEra')}</strong>
            {t('blogSas.glanceEraVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSas.glanceFee')}</strong>
            {t('blogSas.glanceFeeVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSas.glanceBest')}</strong>
            {t('blogSas.glanceBestVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
