'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';

export default function Shkodra() {
  const { t } = useTranslation();
  return (
    <ContentPage
      title={t("shkodra.title")}
      subtitle={t("shkodra.subtitle")}
      description={t("shkodra.seoDesc")}
      image="/img/shkodra-albania.webp"
    >
      <h2>{t('shkodraBody.h1')}</h2>
      <p>{t('shkodraBody.p1')}</p>
      <img src="/img/shkodra-albania.webp" alt="Shkodra city and Rozafa Castle in northern Albania" loading="lazy" />
      <p>{t('shkodraBody.p2')}</p>

      <h3>{t('shkodraBody.whatToSeeTitle')}</h3>
      <ul>
        <li>{t('shkodraBody.castle')}</li>
        <li>{t('shkodraBody.pedestrian')}</li>
        <li>{t('shkodraBody.lake')}</li>
      </ul>

      <h3>{t('shkodraBody.borderTitle')}</h3>
      <p>{t('shkodraBody.borderText')}</p>

      <h3>{t('shkodraBody.gettingThereTitle')}</h3>
      <p>{t('shkodraBody.gettingThereText')}</p>
    </ContentPage>
  );
}
