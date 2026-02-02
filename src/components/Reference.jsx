import { ArrowRight } from 'lucide-react';
import React from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

const Reference = () => {
  const { t } = useTranslation();

  // Get standards array from translations
  const standards = t('home.reference.standards', { returnObjects: true });

  return (
    <section className="reference-section">
      <div className="container">
        <h2 className="reference-main-title">{t('home.reference.title')}</h2>
        <div className="reference-content">
          {standards.map((text, index) => (
            <div key={index} className="reference-item">
              <IoCheckmarkCircleOutline className="ref-icon" />
              <span className="ref-text">{text}</span>
            </div>  
          ))}
          {/* Specific complex item with a button */}
          <div className="reference-item">
            <IoCheckmarkCircleOutline className="ref-icon" />
            <span className="ref-text">
              {t('home.reference.complexStandard')}
              <button className="ref-inline-btn">
                {t('home.reference.findOutMore')}
              </button>
            </span>
          </div>
        </div>

        <button className="read-more">
          {t('home.reference.readMore')} <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Reference;