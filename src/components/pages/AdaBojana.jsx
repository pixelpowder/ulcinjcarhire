'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';

export default function AdaBojana() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t("ada-bojana.title")}
      subtitle={t("ada-bojana.subtitle")}
      description={t("ada-bojana.seoDesc")}
      image="/img/ada-bojana.webp"
    >
      <h2>{t('adaBojanaBody.h1')}</h2>
      <p>{t('adaBojanaBody.p1')}</p>
      <img src="/img/ada-bojana.webp" alt="Ada Bojana river island and beach near Ulcinj" loading="lazy" />
      <p>{t('adaBojanaBody.p2')}</p>

      <h3>{t('adaBojanaBody.kitesurfTitle')}</h3>
      <p>{t('adaBojanaBody.kitesurfText')}</p>

      <h3>{t('adaBojanaBody.restaurantsTitle')}</h3>
      <p>{t('adaBojanaBody.restaurantsText')}</p>

      <h3>{t('adaBojanaBody.gettingThereTitle')}</h3>
      <p>{t('adaBojanaBody.gettingThereText')} {t('adaBojanaBody.shkodraLinkPre')}<a href={localePath('/shkodra')}>{t('adaBojanaBody.shkodraLinkText')}</a>{t('adaBojanaBody.shkodraLinkPost')}</p>
    </ContentPage>
  );
}
