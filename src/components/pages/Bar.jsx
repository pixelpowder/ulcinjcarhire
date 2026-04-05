'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';

export default function Bar() {
  const { t } = useTranslation();
  return (
    <ContentPage
      title={t("bar.title")}
      subtitle={t("bar.subtitle")}
      description={t("bar.seoDesc")}
      image="/img/pexels-26753897.jpg"
    >
      <h2>{t('barBody.h1')}</h2>
      <p>{t('barBody.p1')}</p>
      <p>{t('barBody.p2')}</p>

      <h3>{t('barBody.dayTripTitle')}</h3>
      <ul>
        <li>{t('barBody.stariBar')}</li>
        <li>{t('barBody.oliveTree')}</li>
        <li>{t('barBody.portArea')}</li>
      </ul>

      <h3>{t('barBody.gettingThereTitle')}</h3>
      <p>{t('barBody.gettingThereText')}</p>
    </ContentPage>
  );
}
