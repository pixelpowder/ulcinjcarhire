'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';

export default function StariGrad() {
  const { t } = useTranslation();
  return (
    <ContentPage
      title={t("stari-grad.title")}
      subtitle={t("stari-grad.subtitle")}
      description={t("stari-grad.seoDesc")}
      image="/img/ulcinj-old-town.webp"
    >
      <h2>{t('stariGradBody.h1')}</h2>
      <p>{t('stariGradBody.p1')}</p>
      <img src="/img/ulcinj-old-town.webp" alt="Ulcinj Old Town fortress walls overlooking the Adriatic Sea" loading="lazy" />
      <p>{t('stariGradBody.p2')}</p>

      <h3>{t('stariGradBody.historyTitle')}</h3>
      <p>{t('stariGradBody.historyText')}</p>

      <h3>{t('stariGradBody.whatToSeeTitle')}</h3>
      <ul>
        <li>{t('stariGradBody.museum')}</li>
        <li>{t('stariGradBody.mosque')}</li>
        <li>{t('stariGradBody.walls')}</li>
      </ul>

      <h3>{t('stariGradBody.gettingThereTitle')}</h3>
      <p>{t('stariGradBody.gettingThereText')}</p>
    </ContentPage>
  );
}
