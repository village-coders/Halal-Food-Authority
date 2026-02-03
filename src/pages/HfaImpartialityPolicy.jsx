import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

const HfaImpartialityPolicy = () => {
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
            <h1>{t('hfaImpartialityPolicy.pageTitle')}</h1>
        </section>
        <section className="container termination-sec">
            <p>{t('hfaImpartialityPolicy.content.paragraph1')}</p>
            <p>{t('hfaImpartialityPolicy.content.paragraph2')}</p>
            <p>{t('hfaImpartialityPolicy.content.paragraph3')}</p>
            <p>{t('hfaImpartialityPolicy.content.paragraph4')}</p>
            <button onClick={handleContactButton}>
                {t('hfaImpartialityPolicy.contact.button')}
            </button>
        </section>
    </div>
  )
}

export default HfaImpartialityPolicy