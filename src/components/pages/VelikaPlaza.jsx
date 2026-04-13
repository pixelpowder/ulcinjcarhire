'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';

export default function VelikaPlaza() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t("velika-plaza.title")}
      subtitle={t("velika-plaza.subtitle")}
      description={t("velika-plaza.seoDesc")}
      image="/img/velika-plaza.webp"
    >
      <h2>{t('velikaPlazaBody.h1')}</h2>
      <p>{t('velikaPlazaBody.p1')}</p>
      <img src="/img/velika-plaza.webp" alt="Velika Plaza beach, the longest sandy beach in Montenegro" loading="lazy" />
      <p>{t('velikaPlazaBody.p2')}</p>

      <h3>{t('velikaPlazaBody.activitiesTitle')}</h3>
      <ul>
        <li>{t('velikaPlazaBody.activity1')}</li>
        <li>{t('velikaPlazaBody.activity2')}</li>
        <li>{t('velikaPlazaBody.activity3')}</li>
        <li>{t('velikaPlazaBody.activity4')}</li>
      </ul>

      <h3>{t('velikaPlazaBody.gettingThereTitle')}</h3>
      <p>{t('velikaPlazaBody.gettingThereText')} {t('velikaPlazaBody.adaBojanaLinkPre')}<a href={localePath('/ada-bojana')}>{t('velikaPlazaBody.adaBojanaLinkText')}</a>{t('velikaPlazaBody.adaBojanaLinkPost')}</p>
    </ContentPage>
  );
}
