'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';

export default function Bar() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t("bar.title")}
      subtitle={t("bar.subtitle")}
      description={t("bar.seoDesc")}
      image="/img/bar-nearby.webp"
    >
      <h2>{t('barBody.h1')}</h2>
      <p>{t('barBody.p1')}</p>
      <img src="/img/bar-nearby.webp" alt="Bar town and port on the Montenegrin coast" loading="lazy" />
      <p>{t('barBody.p2')}</p>

      <h3>{t('barBody.dayTripTitle')}</h3>
      <ul>
        <li>{t('barBody.stariBar')}</li>
        <li>{t('barBody.oliveTree')}</li>
        <li>{t('barBody.portArea')}</li>
      </ul>

      <h3>{t('barBody.gettingThereTitle')}</h3>
      <p>{t('barBody.gettingThereText')} {t('barBody.velikaPlazaLinkPre')} <a href={localePath('/velika-plaza')}>{t('barBody.velikaPlazaLinkText')}</a> {t('barBody.velikaPlazaLinkPost')}</p>
    </ContentPage>
  );
}
