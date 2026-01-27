import React from 'react'
import mosque from "../assets/imgi_2_London-Skyscrapers-10-1.jpg";


const AboutPage = () => {
  return (
    <section className='about-bg  '>
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
    </section>
  )
}

export default AboutPage