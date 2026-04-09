'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function UlcinjToAlbaniaBorder() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogAlbania.title')}
      subtitle={t('blogAlbania.subtitle')}
      description={t('blogAlbania.description')}
      image="/img/blog-ulcinj-to-albania-border.webp"
    >
      <h2>{t('blogAlbania.h2Why')}</h2>
      <p>{t('blogAlbania.whyP1')}</p>
      <p>{t('blogAlbania.whyP2')}</p>

      <h2>{t('blogAlbania.h2Crossing')}</h2>
      <p>{t('blogAlbania.crossingP1')}</p>
      <p>{t('blogAlbania.crossingP2')} <a href={localePath('/border-crossing-guide')}>{t('blogAlbania.borderGuideLink')}</a> {t('blogAlbania.crossingP3')}</p>

      <img src="/img/blog-ulcinj-to-albania-border-inline.webp" alt={t('blogAlbania.altInline')} loading="lazy" />

      <h2>{t('blogAlbania.h2Shkodra')}</h2>
      <p>{t('blogAlbania.shkodraP')}</p>

      <h2>{t('blogAlbania.h2GreenCard')}</h2>
      <p>{t('blogAlbania.greenCardP')} <a href={localePath('/blog/ada-bojana-river-island')}>{t('blogAlbania.adaLink')}</a> {t('blogAlbania.greenCardP2')}</p>

      <h2>{t('blogAlbania.h2DayTrip')}</h2>
      <p>{t('blogAlbania.dayTripP')}</p>

      <h2>{t('blogAlbania.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogAlbania.tipDocsLabel')}</strong> {t('blogAlbania.tipDocsVal')}</li>
        <li><strong>{t('blogAlbania.tipCurrencyLabel')}</strong> {t('blogAlbania.tipCurrencyVal')}</li>
        <li><strong>{t('blogAlbania.tipFuelLabel')}</strong> {t('blogAlbania.tipFuelVal')}</li>
        <li><strong>{t('blogAlbania.tipReturnLabel')}</strong> {t('blogAlbania.tipReturnVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogAlbania.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogAlbania.glanceBorder')}</strong>
            {t('blogAlbania.glanceBorderVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogAlbania.glanceShkodra')}</strong>
            {t('blogAlbania.glanceShkodraVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogAlbania.glanceDocs')}</strong>
            {t('blogAlbania.glanceDocsVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogAlbania.glanceBest')}</strong>
            {t('blogAlbania.glanceBestVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
