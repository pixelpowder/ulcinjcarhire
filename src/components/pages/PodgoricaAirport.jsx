'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function PodgoricaAirport() {
  const { t } = useTranslation();
  return (
    <ContentPage title={t("podgorica-airport.title")} subtitle={t("podgorica-airport.subtitle")} description={t("podgorica-airport.seoDesc")} image="/img/southern-coast-road.webp">
      <h2>{t('podgoricaAirportBody.h1')}</h2>
      <p>{t('podgoricaAirportBody.p1')}</p>
      <p>{t('podgoricaAirportBody.p2')}</p>
      <h2>{t('podgoricaAirportBody.distancesTitle')}</h2>
      <ul>
        <li>{t('podgoricaAirportBody.dist1')}</li>
        <li>{t('podgoricaAirportBody.dist2')}</li>
        <li>{t('podgoricaAirportBody.dist3')}</li>
        <li>{t('podgoricaAirportBody.dist4')}</li>
      </ul>
      <h2>{t('podgoricaAirportBody.whyTitle')}</h2>
      <p>{t('podgoricaAirportBody.whyText')}</p>
      <p>{t('podgoricaAirportBody.meetText')}</p>
    </ContentPage>
  );
}
