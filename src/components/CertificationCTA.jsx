import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const CertificationCTA = () => {
    const navigate = useNavigate()
  const handleApplyClick = () => {
    navigate("/apply") ; // Or use navigate() from react-router
  };

  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Lets Initiate Your HFA Certification Process Today</h2>
        <p>
          If you are interested in becoming HFA certified, please kindly complete our 
          non-obligatory online application form to obtain further details and our 
          certification proposal. Submission of an application form and initial 
          screening by the HFA is free of charge.
        </p>
        <button onClick={handleApplyClick} type="button">
          APPLY FOR NEW CERTIFICATION
        </button>
      </div>
    </section>
  );
};

export default CertificationCTA;