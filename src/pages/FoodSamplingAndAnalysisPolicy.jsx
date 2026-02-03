import React from 'react'
import { useTranslation } from 'react-i18next'
import { MdCall } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';

const FoodSamplingAndAnalysisPolicy = () => {
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
            <h1>{t('foodSamplingAnalysisPolicy.pageTitle')}</h1>
        </section>
        <section className="container termination-sec">
            <p>{t('foodSamplingAnalysisPolicy.content.paragraph1')}</p>
            <p>{t('foodSamplingAnalysisPolicy.content.paragraph2')}</p>
            <p>{t('foodSamplingAnalysisPolicy.content.paragraph3')}</p>
            <p>{t('foodSamplingAnalysisPolicy.content.paragraph4')}</p>

            <button onClick={handleContactButton}>
                {t('foodSamplingAnalysisPolicy.contact.button')}
            </button>
        </section>
    </div>
  )
}

export default FoodSamplingAndAnalysisPolicy