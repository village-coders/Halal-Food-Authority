import React from 'react';
import { useTranslation } from 'react-i18next';
import mosque from "../assets/imgi_2_London-Skyscrapers-10-1.jpg";
import HalalImage from '../assets/about_section2.jpg';
import StatsSection from '../components/StatsSection';
import DepartmentalStructure from '../components/DepartmentalStructure';
import TeamSection from '../components/TeamSection';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <main className='about-bg'>
      <div className="container about-sec1">
        <h1>{t('about.pageTitle')}</h1>
      </div>
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="about-page-title">{t('about.sections.whoWeAre.title')}</h2>
              <p>{t('about.sections.whoWeAre.content')}</p>
            </div>
            <div className="about-image">
              <img loading="lazy" src={mosque} alt={t('about.images.mosque')} />
            </div>
          </div>
        </div>
      </section>
      <StatsSection />
      <DepartmentalStructure />
      <section className="about" style={{background: "#f1f2f3"}}>
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="about-page-title">{t('about.sections.ourMission.title')}</h2>
              <p>{t('about.sections.ourMission.content')}</p>
            </div>
            <div className="about-image">
              <img loading="lazy" src={HalalImage} alt={t('about.images.halal')} />
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
      <section className='about-appointment-sec'>
        <div className="about-app-overlay"></div>
        <div className="container about-appointment">
          <h2>{t('about.sections.appointment.title')}</h2>
          <p>{t('about.sections.appointment.content')}</p>
          <button>{t('about.sections.appointment.button')}</button>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;