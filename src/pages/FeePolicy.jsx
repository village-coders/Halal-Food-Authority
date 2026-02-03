import React from 'react'
import { useTranslation } from 'react-i18next'
import { MdCall } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';

const FeePolicy = () => {
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
            <h1>{t('feePolicy.pageTitle')}</h1>
        </section>
        <section className="container termination-sec">
            <h2>{t('feePolicy.sections.mainTitle')}</h2>
            <span></span>
            <p>{t('feePolicy.sections.intro')}</p>
            
            <p>{t('feePolicy.sections.schemes.title')}</p>
            <ul>
                {t('feePolicy.sections.schemes.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            
            <p>{t('feePolicy.sections.factors.title')}</p>
            <ol>
                {t('feePolicy.sections.factors.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
            
            <p>{t('feePolicy.sections.details.size')}</p>
            <p>{t('feePolicy.sections.details.requirements')}</p>
            
            <button onClick={handleContactButton}>
                <MdCall />
                {t('feePolicy.sections.contact.button')}
            </button>
        </section>
    </div>
  )
}

export default FeePolicy