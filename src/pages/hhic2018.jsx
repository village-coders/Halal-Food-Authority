import React from 'react'
import { useTranslation } from 'react-i18next'
import hhic2018 from '../assets/hhic2018.jpg'

const HHIC2018 = () => {
    const { t } = useTranslation()

    const presentations = t('hhic2018.presentations', { returnObjects: true })

  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>{t('hhic2018.pageTitle')}</h1>
        </section>
        <section className="container termination-sec find-more-halal">
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <h2 style={{textAlign: "center", marginBottom: "30px"}}>
                    {t('hhic2018.mainHeading')}
                </h2>
                <span></span>
            </div>

            <div style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "40px 0px", width: "100%"}}>
                <img 
                    style={{width: "840px"}} 
                    src={hhic2018} 
                    alt={t('hhic2018.mainHeading')} 
                />
            </div>
            
            <h3>{t('hhic2018.presentationsHeading')}</h3>

            {presentations.map((presentation, index) => (
                <p key={presentation.id || index}>
                    <b>{presentation.title}</b>
                    <br />
                    {presentation.presenter}{' '}
                    <a 
                        style={{display: "inline", fontWeight: 680}} 
                        href={presentation.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {presentation.linkText}
                    </a>
                </p>
            ))}
        </section>
    </div>
  )
}

export default HHIC2018