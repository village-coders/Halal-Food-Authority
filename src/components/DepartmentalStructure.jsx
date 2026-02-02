import React from 'react';
import { useTranslation } from 'react-i18next';

const DepartmentalStructure = () => {
  const { t } = useTranslation();
  const departments = t('about.departments.items', { returnObjects: true });

  return (
    <section className="dept-section">
      <div className="dept-header">
        <h2>{t('about.departments.title')}</h2>
        <p>{t('about.departments.subtitle')}</p>
      </div>

      <div className="dept-grid">
        {departments.map((dept, index) => (
          <div key={index} className={`dept-card ${dept.type}`}>
            <h3>{dept.title}</h3>
            <p>{dept.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentalStructure;