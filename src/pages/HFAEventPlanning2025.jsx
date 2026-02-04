import React from 'react'
import { useTranslation } from 'react-i18next'
import { MdCall } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';

const HFAEventPlanning2025 = () => {
    const { t, i18n } = useTranslation()
    const {lng} =  useParams()
    const navigate = useNavigate()
    const currentLang = lng ?? i18n.resolvedLanguage ?? "en";

    const handleContactButton = () => {
        navigate(`/${currentLang}/contact`);
    };
    
  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>HFA Event Planning 2025</h1>
        </section>
        <section className="container termination-sec">
            <h2>Our National and International Event Participation </h2>

            <p>We are proud to be actively involved in a variety of prestigious events across the globe. These events offer us an invaluable platform to showcase our services, engage with industry leaders, and stay up-to-date with new developments and industry advancements. Our participation not only reinforces our commitment to excellence but also provides us with the opportunity to foster meaningful connections with our valued customers and partners. Below is a list of key events where we have a presence, both nationally and internationally:  </p>
            
            <h3>IFE – International Food & Drink Event </h3>

            <p>
                 Dates: 17 – 19 March: Location: London (Excel) 
            </p>
            
        </section>
    </div>
  )
}

export default HFAEventPlanning2025