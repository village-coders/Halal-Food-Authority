import React from 'react';
import { useTranslation } from 'react-i18next';
import martinImg from '../assets/imgi_27_AbdulMatin-3.png';
import gyasudImg from '../assets/imgi_28_Gyassudin-2-1 (1).png';
import ahmedImg from '../assets/imgi_29_AhmedLatif.png';
import masoomImg from '../assets/imgi_30_Dr-Amir-Masoom.png';
import uzainImg from '../assets/imgi_31_ImtiazHussain-1-1.png';
import akbarImg from '../assets/imgi_32_Akbar-Hussain-2.png';
import hifzaImg from '../assets/imgi_33_Hifza.png';
import enasImg from '../assets/imgi_34_EnasalQatarneh.png';
import rashidImg from '../assets/imgi_35_Rashid-1.png';
import abdulkabirImg from '../assets/imgi_36_AbdulKadir-2.png';
import abdulwahabImg from '../assets/imgi_37_AbdulWahab-1.png';
import abusayedImg from '../assets/imgi_38_AbuSayedAnsarey-1.png';
import ahmedquadriImg from '../assets/imgi_39_SardarAhmad-1.png';
import abuyushaImg from '../assets/imgi_40_AbuYusha-1.png';

const TeamSection = () => {
  const { t } = useTranslation();
  const teamMembers = t('about.team.teamMembers', { returnObjects: true });
  const ulemah = t('about.team.ulemah', { returnObjects: true });

  // Image arrays - keep these as imports since they're static assets
  const teamImages = [
    martinImg, gyasudImg, ahmedImg, masoomImg, uzainImg, 
    akbarImg, hifzaImg, enasImg, rashidImg
  ];
  
  const ulemahImages = [
    abdulkabirImg, abdulwahabImg, abusayedImg, 
    ahmedquadriImg, abuyushaImg
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <h2>{t('about.team.title')}</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="member-card">
              <div className="image-wrapper">
                <img loading='lazy' src={teamImages[index]} alt={member.name} />
                <div className="member-details">
                  <p>{member.bio}</p>
                </div>
              </div>
              <h3>{member.name}</h3>
              <span>{member.role}</span>
            </div>
          ))}
        </div>
        <h2 style={{marginTop: "40px"}}>{t('about.team.boardOfUlemah')}</h2>
        <div className="team-grid">
          {ulemah.map((member, index) => (
            <div key={index} className="member-card">
              <div className="image-wrapper">
                <img loading='lazy' src={ulemahImages[index]} alt={member.name} />
                <div className="member-details">
                  <p>{member.bio}</p>
                </div>
              </div>
              <h3>{member.name}</h3>
              <span>{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;