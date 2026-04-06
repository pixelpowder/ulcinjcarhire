'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';

export default function Valdanos() {
  const { t } = useTranslation();
  return (
    <ContentPage
      title={t("valdanos.title")}
      subtitle={t("valdanos.subtitle")}
      description={t("valdanos.seoDesc")}
      image="/img/valdanos-olives.webp"
    >
      <h2>{t('valdanosBody.h1')}</h2>
      <p>{t('valdanosBody.p1')}</p>
      <img src="/img/valdanos-olives.webp" alt="Ancient olive grove at Valdanos bay near Ulcinj" loading="lazy" />
      <p>{t('valdanosBody.p2')}</p>

      <h3>{t('valdanosBody.olivesTitle')}</h3>
      <p>{t('valdanosBody.olivesText')}</p>

      <h3>{t('valdanosBody.gettingThereTitle')}</h3>
      <p>{t('valdanosBody.gettingThereText')}</p>
    </ContentPage>
  );
}
