'use client';
import { useState } from 'react';
import { Car, Phone, Mail, MapPin, ChevronRight, ChevronDown } from 'lucide-react';
import config from './siteConfig';
import useTranslation from './i18n/useTranslation';
import './App.css';

function FooterAccordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`footer__accordion${open ? ' footer__accordion--open' : ''}`}>
      <button className="footer__accordion-btn" onClick={() => setOpen(!open)}>
        <span className="footer__col-title">{title}</span>
        <ChevronDown size={16} className="footer__accordion-icon" />
      </button>
      <div className="footer__accordion-body">
        {children}
      </div>
    </div>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <div className="footer__col-title footer__col-title--desktop">{title}</div>
      <FooterAccordion title={title}>
        {children}
      </FooterAccordion>
      <div className="footer__links footer__links--desktop">
        {children}
      </div>
    </div>
  );
}

const FOOTER_FLEET_SLUGS = ['vw-polo', 'fiat-500', 'renault-clio', 'toyota-yaris', 'peugeot-308'];

export default function Footer() {
  const { t, localePath } = useTranslation();
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };

  const fleetCars = config.cars.filter(c => FOOTER_FLEET_SLUGS.includes(c.slug));

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__brand-logo">
            <div className="footer__brand-icon">
              <Car size={16} />
            </div>
            <span className="footer__brand-name">{config.name}</span>
          </div>
          <p className="footer__brand-desc">{t('footer.brandDesc')}</p>
          <div className="footer__contact-list">
            <a href={`mailto:${config.email}`} className="footer__contact-item">
              <Mail size={13} /> {config.email}
            </a>
            <div className="footer__contact-item">
              <MapPin size={13} /> {config.address}
            </div>
          </div>
        </div>

        <FooterColumn title={tf('footer.quickLinks', 'Quick Links')}>
          <a href={localePath('/book')} className="footer__link"><ChevronRight size={12} /> {tf('footer.carHireBooking', 'Car Hire Booking')}</a>
          <a href={localePath('/cars')} className="footer__link"><ChevronRight size={12} /> {tf('nav.fleet', 'Our Fleet')}</a>
          <a href={localePath('/about')} className="footer__link"><ChevronRight size={12} /> {tf('footer.aboutUs', 'About Us')}</a>
          <a href={localePath('/#faq')} className="footer__link"><ChevronRight size={12} /> {tf('footer.faqLink', 'FAQ')}</a>
          <a href={localePath('/#reviews')} className="footer__link"><ChevronRight size={12} /> {tf('footer.testimonials', 'Testimonials')}</a>
        </FooterColumn>

        <FooterColumn title={tf('footer.ourFleet', 'Our Fleet')}>
          {fleetCars.map(car => {
            const carName = (() => {
              const val = t(`cars.${car.slug}.name`);
              return val && val !== `cars.${car.slug}.name` ? val : car.name;
            })();
            return (
              <a key={car.slug} href={localePath(`/cars/${car.slug}`)} className="footer__link">
                <ChevronRight size={12} /> {carName}
              </a>
            );
          })}
        </FooterColumn>

        <FooterColumn title={tf('footer.guides', 'Guides')}>
          <a href={localePath('/blog')} className="footer__link"><ChevronRight size={12} /> {tf('nav.blog', 'Blog')}</a>
          <a href={localePath('/montenegro')} className="footer__link"><ChevronRight size={12} /> {tf('footer.montenegroGuide', 'Montenegro Guide')}</a>
          <a href={localePath('/border-crossing-guide')} className="footer__link"><ChevronRight size={12} /> {tf('footer.borderGuide', 'Border Crossing Guide')}</a>
          <a href={localePath('/#destinations')} className="footer__link"><ChevronRight size={12} /> {tf('footer.destinations', 'Destinations')}</a>
        </FooterColumn>

        <FooterColumn title={tf('footer.locations', 'Locations')}>
          {[
            { name: 'Velika Plaza', slug: 'velika-plaza' },
            { name: 'Ada Bojana', slug: 'ada-bojana' },
            { name: 'Stari Grad', slug: 'stari-grad' },
            { name: 'Podgorica Airport', slug: 'podgorica-airport' },
          ].map(dest => (
            <a key={dest.slug} href={localePath(`/${dest.slug}`)} className="footer__link">
              <MapPin size={12} /> {dest.name}
            </a>
          ))}
        </FooterColumn>
      </div>

      <div className="footer__bottom">
        <span className="footer__copy">
          &copy; {new Date().getFullYear()} {config.name}. All rights reserved.
        </span>
        <div className="footer__bottom-links">
          <a href={localePath('/privacy')} className="footer__bottom-link">{t('footer.privacyPolicy')}</a>
          <a href={localePath('/terms')} className="footer__bottom-link">{t('footer.terms')}</a>
          <a href={localePath('/cookie-policy')} className="footer__bottom-link">{t('footer.cookiePolicy')}</a>
          <a href="/sitemap.xml" className="footer__bottom-link">{t('footer.sitemap')}</a>
        </div>
      </div>
    </footer>
  );
}
