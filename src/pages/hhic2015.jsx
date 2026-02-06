import React from 'react'
import { useTranslation } from 'react-i18next'
import hhic2015 from '../assets/hhic2015.jpg'

const HHIC2015 = () => {
    const { t } = useTranslation()

    const presentations = t('hhic2015.presentations', { returnObjects: true })

  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>{t('hhic2015.pageTitle')}</h1>
        </section>
        <section className="container termination-sec find-more-halal">
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <h2 style={{textAlign: "center", marginBottom: "30px"}}>
                    {t('hhic2015.mainHeading')}
                </h2>
                <span></span>
            </div>

            <div style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "40px 0px", width: "100%"}}>
                <img 
                    style={{width: "840px"}} 
                    src={hhic2015} 
                    alt={t('hhic2015.mainHeading')} 
                />
            </div>

            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <h2 style={{textAlign: "center", fontSize: "2rem", marginBottom: "30px"}}>
                    {t('hhic2015.subHeading')}
                </h2>
            </div>

            <p>{t('hhic2015.content.paragraph1')}</p>
            <p>{t('hhic2015.content.paragraph2')}</p>
            <p>{t('hhic2015.content.paragraph3')}</p>
            <p>{t('hhic2015.content.paragraph4')}</p>
            <p>{t('hhic2015.content.paragraph5')}</p>

            <h3>{t('hhic2015.presentationsHeading')}</h3>

            {presentations.map((presentation, index) => (
                <p key={presentation.id || index}>
                    <b>{presentation.title}</b>
                    <br />
                    {presentation.presenter}
                </p>
            ))}
        </section>
    </div>
  )
}

export default HHIC2015