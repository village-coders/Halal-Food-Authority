import React from 'react';
import { useTranslation } from 'react-i18next';
import mosque from "../assets/imgi_2_London-Skyscrapers-10-1.jpg";
import HalalImage from '../assets/about_section2.jpg';
import StatsSection from '../components/StatsSection';
import DepartmentalStructure from '../components/DepartmentalStructure';
import TeamSection from '../components/TeamSection';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const { t } = useTranslation();

    const fadeInUp = {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 1, ease: "easeOut" }
    };

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
          <motion.h2 {...fadeInUp}>{t('about.sections.appointment.title')}</motion.h2>
          <motion.p>{t('about.sections.appointment.content')}</motion.p>
          <motion.button {...fadeInUp}>{t('about.sections.appointment.button')}</motion.button>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;