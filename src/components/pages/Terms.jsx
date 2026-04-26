'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
import LegalBody from './LegalBody';

export default function Terms() {
  const { t } = useTranslation();
  return (
    <ContentPage
      title={t("terms.title")}
      subtitle={t("terms.subtitle")}
      description={t("terms.seoDesc")}
      image="/img/ulcinj-old-town.webp"
    >
      <LegalBody bodyKey="termsBody" />
    </ContentPage>
  );
}
