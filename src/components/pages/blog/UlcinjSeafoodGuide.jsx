'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function UlcinjSeafoodGuide() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogSeafood.title')}
      subtitle={t('blogSeafood.subtitle')}
      description={t('blogSeafood.description')}
      image="/img/blog-ulcinj-seafood-guide.webp"
    >
      <h2>{t('blogSeafood.h2Tradition')}</h2>
      <p>{t('blogSeafood.traditionP1')}</p>
      <p>{t('blogSeafood.traditionP2')}</p>

      <h2>{t('blogSeafood.h2Where')}</h2>
      <h3>{t('blogSeafood.h3OldTown')}</h3>
      <p>{t('blogSeafood.oldTownP')} <a href={localePath('/blog/ulcinj-old-town-guide')}>{t('blogSeafood.oldtownLink')}</a>.</p>
      <h3>{t('blogSeafood.h3Port')}</h3>
      <p>{t('blogSeafood.portP')}</p>
      <h3>{t('blogSeafood.h3Ada')}</h3>
      <p>{t('blogSeafood.adaP')} <a href={localePath('/blog/ada-bojana-river-island')}>{t('blogSeafood.adaLink')}</a>.</p>

      <img src="/img/blog-ulcinj-seafood-guide-inline.webp" alt={t('blogSeafood.altInline')} loading="lazy" />

      <h2>{t('blogSeafood.h2Dishes')}</h2>
      <p>{t('blogSeafood.dishesP1')}</p>
      <p>{t('blogSeafood.dishesP2')}</p>

      <h2>{t('blogSeafood.h2Market')}</h2>
      <p>{t('blogSeafood.marketP')} <a href={localePath('/blog/ulcinj-olive-trail')}>{t('blogSeafood.oliveLink')}</a>.</p>

      <h2>{t('blogSeafood.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogSeafood.tipTimeLabel')}</strong> {t('blogSeafood.tipTimeVal')}</li>
        <li><strong>{t('blogSeafood.tipCashLabel')}</strong> {t('blogSeafood.tipCashVal')}</li>
        <li><strong>{t('blogSeafood.tipSeasonLabel')}</strong> {t('blogSeafood.tipSeasonVal')}</li>
        <li><strong>{t('blogSeafood.tipBookLabel')}</strong> {t('blogSeafood.tipBookVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogSeafood.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogSeafood.glanceBudget')}</strong>
            {t('blogSeafood.glanceBudgetVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSeafood.glanceBest')}</strong>
            {t('blogSeafood.glanceBestVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSeafood.glanceMust')}</strong>
            {t('blogSeafood.glanceMustVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSeafood.glanceMarket')}</strong>
            {t('blogSeafood.glanceMarketVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
