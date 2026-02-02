import React from 'react';
import { useTranslation } from 'react-i18next';

const CertificationCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>{t('certificationProcedure.certificationCTA.title')}</h2>
        <p>
          {t('certificationProcedure.certificationCTA.description')}
        </p>
        <a target='blank' href="https://hfa-portal.com">
          {t('certificationProcedure.certificationCTA.applyButton')}
        </a>
      </div>
    </section>
  );
};

export default CertificationCTA;