import React from 'react'
import mosque from "../assets/imgi_2_London-Skyscrapers-10-1.jpg";
import HalalImage from '../assets/about_section2.jpg'
import StatsSection from '../components/StatsSection';
import DepartmentalStructure from '../components/DepartmentalStructure';


const AboutPage = () => {
  return (
    <main className='about-bg'>
        <div className="container about-sec1">
          <h1>About Us</h1>
        </div>
        <section className="about">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h2 className="about-page-title">Who we are</h2>
                <p>
                  Since 1994, the Halal Food Authority (HFA) has been a leading provider of comprehensive halal certification and auditing services for both food and non-food producers. Committed to maintaining the highest halal standards, we conduct rigorous monitoring of processes, thorough ingredient evaluations, and precise halal labelling. Accredited by prominent international halal organisations, we guarantee that your products meet global recognition and compliance standards.
                </p>
              </div>
              <div className="about-image">
                <img loading="lazy" src={mosque} alt="Mosque at sunset" />
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
                <h2 className="about-page-title">Our Mission</h2>
                <p>
                  At HFA, our mission is to ensure the highest standards of halal compliance worldwide. Since 1994, we have been dedicated to certifying and auditing food and non-food products to meet strict halal guidelines. We strive to provide consumers with confidence in authentic halal products and support producers in maintaining their integrity. Our goal is to contribute to the global growth of halal markets, making halal products accessible, trusted, and respected everywhere.
                </p>
              </div>
              <div className="about-image">
                <img loading="lazy" src={HalalImage} alt="Mosque at sunset" />
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}

export default AboutPage