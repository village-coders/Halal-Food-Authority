import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/imgi_19_Green-logo.png';
import { useParams } from 'react-router-dom';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const { lng } = useParams();

  const currentLang = lng ?? i18n.resolvedLanguage ?? "en";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        {/* Branding & Logo Column */}
        <div className="footer-col branding">
          <div className="footer-logo">
            <img loading='lazy' src={logo} alt="HFA Approved Logo" />
          </div>
          <p className="footer-tagline">
            {t('home.footer.branding.tagline')}
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h4 className="footer-heading">{t('home.footer.quickLinks')}</h4>
          <ul className="footer-links">
            <li><a href={`/${currentLang}`}>{t('home.footer.links.home')}</a></li>
            <li><a href={`/${currentLang}/about`}>{t('home.footer.links.about')}</a></li>
            <li><a href={`/${currentLang}/faq`}>{t('home.footer.links.faq')}</a></li>
            <li><a href={`/${currentLang}/contact`}>{t('home.footer.links.contact')}</a></li>
          </ul>
        </div>

        {/* Important Links Column */}
        <div className="footer-col">
          <h4 className="footer-heading">{t('home.footer.importantLinks')}</h4>
          <ul className="footer-links">
            <li><a target='blank' href="https://hfa-portals.com/">{t('home.footer.links.apply')}</a></li>
            <li><a href={`${currentLang}/events`}>{t('home.footer.links.events')}</a></li>
            <li><a href={`${currentLang}/fee-policy`}>{t('home.footer.links.feePolicy')}</a></li>
            <li><a href={`${currentLang}/hfa-quality-policy`}>{t('home.footer.links.qualityPolicy')}</a></li>
            <li><a href={`${currentLang}/certification/procedure`}>{t('home.footer.links.procedure')}</a></li>
          </ul>
        </div>

        {/* Contact Us Column */}
        <div className="footer-col">
          <h4 className="footer-heading">{t('home.footer.contactUs')}</h4>
          <div className="contact-info">
            <p>{t('home.footer.contact.address')}</p>
            <p className="contact-item">{t('home.footer.contact.phone')}</p>
            <a style={{color: "#d0dcd7", textDecoration: "inherit"}} href={`mailto:info@halalfoodauthority.com`} className="contact-item">{t('home.footer.contact.email')}</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container bottom-content">
          <div className="copyright">
            {t('home.footer.copyright', { year: currentYear })}
          </div>
          <div className="legal-links">
            <a href="#">{t('home.footer.links.terms')}</a>
            <a href="#">{t('home.footer.links.privacy')}</a>
          </div>
          <div className="social-icons">
            <a target='blank' href="https://www.facebook.com/HalalFoodAuthorityUK?_rdc=2&_rdr#" aria-label={t('home.footer.social.facebook')}><Facebook size={20} /></a>
            <a target='blank' href="https://x.com/hfa_uk?lang=en-GB" aria-label={t('home.footer.social.twitter')}><Twitter size={20} /></a>
            <a target='blank' href="https://www.instagram.com/halalfoodauthority_uk/" aria-label={t('home.footer.social.instagram')}><Instagram size={20} /></a>
            <a target='blank' href="https://www.linkedin.com/company/halal-food-authority-limited?trk=public_profile_topcard-current-company&originalSubdomain=uk" aria-label={t('home.footer.social.linkedin')}><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}