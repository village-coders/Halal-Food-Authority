import { ArrowRight } from 'lucide-react';
import React from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const HFA_STANDARDS = [
  "OIC/SMIIC 1 General Requirements for Halal Food",
  "OIC/SMIIC 24 General Requirements for Food Additives and Other Added Chemicals to Halal Food",
  "MS 1500 Malaysian Standard on Halal Food",
  "Malaysian Protocol for Halal Meat Production",
  "MS 2565 Halal Packaging- General Guidelines",
  "GSO 2055-1 Halal products - Part one: General Requirements for Halal Food",
  "UAE.S 993 Animal Slaughtering Requirements According to Islamic Rules",
  "GSO 2538 The maximum limits for residues of ethyl alcohol (ethanol) in food",
  "UAE.S 192 Additives Permitted for Use in Food Stuffs",
  "SNI 99004:2021 General Requirements of Halal Food",
  "SNI 99001:2016 Halal Assurance System",
  "SNI ISO/IEC 17065:2012 Requirements for bodies certifying products, processes and services",
  "Decree of Minister of Religious Affairs of Republic of Indonesia Number 748 of 2021 concerning Products Type Must Be Halal Certified",
  "Regulation of Government of the Republic of Indonesia Number 39 of 2021 concerning Implementation Law of the Republic of Indonesia Number 33 of 2014 concerning Halal Product Assurance."
];

const Reference = () => {
  return (
    <section className="reference-section">
      <div className="container">
        <h2 className="reference-main-title">HFA Standard's Reference</h2>
        <div className="reference-content">
          {HFA_STANDARDS.map((text, index) => (
            <div key={index} className="reference-item">
              <IoCheckmarkCircleOutline className="ref-icon" />
              <span className="ref-text">{text}</span>
            </div>
          ))}
          {/* Specific complex item with a button */}
          <div className="reference-item">
            <IoCheckmarkCircleOutline className="ref-icon" />
            <span className="ref-text">
              Decree of Head of Halal Product Assurance Organizing Agency Number 20 of 2023 concerning Amendments... 
              <button className="ref-inline-btn">Find out more!</button>
            </span>
          </div>
        </div>

        <button className="read-more">
            Read More <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Reference;   