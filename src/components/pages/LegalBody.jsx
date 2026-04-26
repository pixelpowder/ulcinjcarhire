'use client';
import useTranslation from '../../i18n/useTranslation';

// Generic legal-page body renderer. Reads the body array from translations
// (privacyBody, termsBody, cookiePolicyBody) and renders headings, paragraphs,
// bulleted lists and bold-prefixed bullets. Locale-bleed-safe: every string
// (including the "Last updated" prefix and date) comes from the locale JSON.
export default function LegalBody({ bodyKey }) {
  const { t, localePath } = useTranslation();
  const body = t(bodyKey);
  const items = Array.isArray(body) ? body : [];
  const lastUpdated = t('legalCommon.lastUpdated');
  const lastUpdatedDate = t('legalCommon.lastUpdatedDate');

  return (
    <>
      {items.map((it, i) => {
        if (it.h2) return <h2 key={i}>{it.h2}</h2>;
        if (it.h3) return <h3 key={i}>{it.h3}</h3>;
        if (it.p === '__lastUpdated__') {
          return (
            <p key={i}>
              <strong>{lastUpdated}</strong> {lastUpdatedDate}
            </p>
          );
        }
        if (it.ul) {
          return (
            <ul key={i}>
              {it.ul.map((li, j) => <li key={j}>{li}</li>)}
            </ul>
          );
        }
        if (it.ulBold) {
          return (
            <ul key={i}>
              {it.ulBold.map((row, j) => (
                <li key={j}><strong>{row.b}</strong> {row.t}</li>
              ))}
            </ul>
          );
        }
        if (it.linkPath && it.linkLabel) {
          return (
            <p key={i}>
              {it.p ? it.p + ' ' : ''}
              <a href={localePath(it.linkPath)}>{it.linkLabel}</a>
            </p>
          );
        }
        if (it.p) return <p key={i}>{it.p}</p>;
        return null;
      })}
    </>
  );
}
