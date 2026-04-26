'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
import LegalBody from './LegalBody';

export default function Privacy() {
  const { t } = useTranslation();
  return (
    <ContentPage
      title={t("privacy.title")}
      subtitle={t("privacy.subtitle")}
      description={t("privacy.seoDesc")}
      image="/img/ulcinj-old-town.webp"
    >
      <LegalBody bodyKey="privacyBody" />
    </ContentPage>
  );
}
