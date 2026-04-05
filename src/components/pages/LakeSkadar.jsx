'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';

export default function LakeSkadar() {
  const { t } = useTranslation();
  return (
    <ContentPage
      title={t("lake-skadar.title")}
      subtitle={t("lake-skadar.subtitle")}
      description={t("lake-skadar.seoDesc")}
      image="/img/lake-skadar.webp"
    >
      <h2>{t('lakeSkadarBody.h1')}</h2>
      <p>{t('lakeSkadarBody.p1')}</p>
      <p>{t('lakeSkadarBody.p2')}</p>

      <h3>{t('lakeSkadarBody.activitiesTitle')}</h3>
      <ul>
        <li>{t('lakeSkadarBody.boatTour')}</li>
        <li>{t('lakeSkadarBody.wine')}</li>
        <li>{t('lakeSkadarBody.kayak')}</li>
      </ul>

      <h3>{t('lakeSkadarBody.gettingThereTitle')}</h3>
      <p>{t('lakeSkadarBody.gettingThereText')}</p>
    </ContentPage>
  );
}
