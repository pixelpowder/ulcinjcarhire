'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
import LegalBody from './LegalBody';

export default function CookiePolicy() {
  const { t } = useTranslation();
  return (
    <ContentPage
      title={t("cookie-policy.title")}
      subtitle={t("cookie-policy.subtitle")}
      description={t("cookie-policy.seoDesc")}
      image="/img/ulcinj-old-town.webp"
    >
      <LegalBody bodyKey="cookiePolicyBody" />
    </ContentPage>
  );
}
