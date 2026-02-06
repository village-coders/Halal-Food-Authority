import React from 'react'
import { useTranslation } from 'react-i18next'
import hhic2017 from '../assets/HHIC2017 (1).jpg'

const HHIC2017 = () => {
    const { t } = useTranslation()

    const presentations = t('hhic2017.presentations', { returnObjects: true })
    const video = t('hhic2017.video', { returnObjects: true })

  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>{t('hhic2017.pageTitle')}</h1>
        </section>
        <section className="container termination-sec find-more-halal">
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <h2 style={{textAlign: "center", marginBottom: "30px"}}>
                    {t('hhic2017.mainHeading')}
                </h2>
                <span></span>
            </div>

            <div>
                <iframe 
                    width="100%" 
                    height="514" 
                    src={video.url}
                    title={video.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                ></iframe>
            </div>

            <div style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "40px 0px", width: "100%"}}>
                <img 
                    style={{width: "840px"}} 
                    src={hhic2017} 
                    alt={t('hhic2017.mainHeading')} 
                />
            </div>
            
            <h3>{t('hhic2017.presentationsHeading')}</h3>

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

export default HHIC2017