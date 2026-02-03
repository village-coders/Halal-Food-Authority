import React from 'react'
import { useTranslation } from 'react-i18next'
import { MdCall } from "react-icons/md";

const FoodSamplingAndAnalysisPolicy = () => {
    const { t } = useTranslation()

    function handleContactButton(){
        location.href = '/contact'
    }
    
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