import '@/src/index.css';
import '@/src/App.css';
import '@/src/ContentPage.css';
import '@/src/BookPage.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import CookieBanner from '@/src/CookieBanner';
import { LanguageContext } from '@/src/i18n/LanguageContext';
import { DEFAULT_LANG } from '@/src/i18n/languages';

export const metadata = {
  title: 'Ulcinj Car Hire — 12 km Beach, Albania Border',
  description:
    'Montenegro\'s hidden south needs a car. 12 km Long Beach, Ada Bojana kitesurfing, and Albania 30 min away. From \u20AC13/day with Albanian border docs included.',
  metadataBase: new URL('https://www.ulcinjcarhire.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/hero-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/hero-bg.webp" as="image" type="image/webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRental",
            "name": "Ulcinj Car Hire",
            "url": "https://www.ulcinjcarhire.com",
            "description": "Rent a car in Ulcinj from trusted local providers with free cancellation, full insurance, and airport pickup from Podgorica or Tivat.",
            "email": "info@ulcinjcarhire.com",
            "image": "https://www.ulcinjcarhire.com/img/schema-car.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ulcinj",
              "postalCode": "85360",
              "addressCountry": "ME"
            },
            "areaServed": [
              {"@type": "City", "name": "Ulcinj"},
              {"@type": "City", "name": "Bar"},
              {"@type": "City", "name": "Podgorica"},
              {"@type": "City", "name": "Shkodra"},
              {"@type": "City", "name": "Tivat"}
            ],
            "priceRange": "€25–€120",
            "currenciesAccepted": "EUR",
            "openingHoursSpecification": [
              {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00"},
              {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday","Sunday"], "opens": "00:00", "closes": "23:59"}
            ],
            "aggregateRating": {"@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "3", "bestRating": "5"}
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What documents do I need?",
                "acceptedAnswer": {"@type": "Answer", "text": "A valid driving licence showing details in Latin script, your passport, and a physical credit card in the main driver\u2019s name. If your licence was issued outside the EU and is only valid in its country of origin, bring an International Driving Permit. Electronic or photocopied licences are not accepted at pickup."}
              },
              {
                "@type": "Question",
                "name": "Can I drive to Albania?",
                "acceptedAnswer": {"@type": "Answer", "text": "Absolutely \u2014 and Ulcinj is the best starting point in Montenegro for it. The Muriqan/Sukobin border crossing is just 20 minutes south of town and usually clears quickly. Shkodra is 45 minutes away; Tirana is around 3 hours. Just tell us at booking and we\u2019ll have the Green Card and border paperwork ready. Travel to Croatia, Bosnia, Kosovo, and Serbia is also permitted."}
              },
              {
                "@type": "Question",
                "name": "Is there a minimum age?",
                "acceptedAnswer": {"@type": "Answer", "text": "The minimum age is 21. Drivers must have held a full licence for at least 2 years. Drivers aged 21\u201324 pay a young driver supplement \u2014 the exact rate is shown per vehicle in the search results."}
              },
              {
                "@type": "Question",
                "name": "What\u2019s included in the price?",
                "acceptedAnswer": {"@type": "Answer", "text": "All vehicles include Third Party Liability insurance and Collision Damage Waiver (CDW) in the base price. VAT, mandatory equipment kit (first aid, warning triangle, visibility vest), and a transparent fuel policy are all included. Unlimited mileage and extended coverage upgrades are available per vehicle."}
              },
              {
                "@type": "Question",
                "name": "How does pickup work?",
                "acceptedAnswer": {"@type": "Answer", "text": "Ulcinj is around 2 hours from Podgorica Airport and 2.5 hours from Tivat \u2014 both are long drives after a flight. We strongly recommend a one-way rental: pick up at whichever airport you land at and drop off in Ulcinj, or vice versa."}
              },
              {
                "@type": "Question",
                "name": "Can I drop off at a different location?",
                "acceptedAnswer": {"@type": "Answer", "text": "Yes \u2014 one-way rentals are available across 28 towns and cities throughout Montenegro. Given the distance from both airports, picking up at Podgorica or Tivat and returning the car in Ulcinj (or the reverse) is one of the most popular combinations we arrange."}
              },
              {
                "@type": "Question",
                "name": "What is the cancellation policy?",
                "acceptedAnswer": {"@type": "Answer", "text": "Standard rentals: free cancellation up to 7 days before the start date. Premium and convertible vehicles: free cancellation up to 30 days before. A 6% payment processing fee applies to all cancellations regardless of timing."}
              },
              {
                "@type": "Question",
                "name": "Is a deposit required?",
                "acceptedAnswer": {"@type": "Answer", "text": "Deposit requirements vary by vehicle \u2014 typically between EUR 50 and EUR 300, and some cars carry no deposit at all. The deposit must be on a physical credit card (not debit or prepaid) in the main driver\u2019s name."}
              },
              {
                "@type": "Question",
                "name": "What happens if I exceed the mileage limit?",
                "acceptedAnswer": {"@type": "Answer", "text": "Vehicles that carry a mileage cap charge per kilometre above the agreed limit. The per-km rate is listed in the vehicle details before you confirm your booking. If you\u2019re planning to drive into Albania or explore the full Montenegrin coast, look for unlimited mileage options in the search results."}
              },
              {
                "@type": "Question",
                "name": "Are there any hidden fees?",
                "acceptedAnswer": {"@type": "Answer", "text": "None. The price shown at booking is the full price \u2014 taxes, VAT, and all standard fees are included. You won\u2019t be handed a surprise invoice at pickup."}
              },
              {
                "@type": "Question",
                "name": "How much do I pay upfront?",
                "acceptedAnswer": {"@type": "Answer", "text": "A deposit of 15\u201320% of the total rental cost is taken at booking to secure the vehicle. The remaining balance is settled in cash or by card directly with the rental agent when you collect the keys."}
              },
              {
                "@type": "Question",
                "name": "Can I rent without a credit card?",
                "acceptedAnswer": {"@type": "Answer", "text": "A small selection of vehicles can be rented without a credit card. These are flagged clearly in the search results. For most vehicles, a physical credit card in the main driver\u2019s name is required."}
              }
            ]
          }) }}
        />
      </head>
      <body>
        <LanguageContext value={DEFAULT_LANG}>
          {children}
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </LanguageContext>
      </body>
    </html>
  );
}
