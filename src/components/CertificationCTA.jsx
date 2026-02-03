import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const CertificationCTA = () => {
  const { t } = useTranslation();

  // Animation variants for a staggered slide-up effect
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="cta-section">
      <div className="cta-content">
        <motion.h2 {...fadeInUp}>
          {t('certificationProcedure.certificationCTA.title')}
        </motion.h2>
        
        <motion.p 
          {...fadeInUp} 
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          {t('certificationProcedure.certificationCTA.description')}
        </motion.p>
        
        <motion.div 
          {...fadeInUp} 
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
        >
          <a target='blank' href="https://hfa-portal.com">
            {t('certificationProcedure.certificationCTA.applyButton')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationCTA;