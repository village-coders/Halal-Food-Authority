import React from 'react'
import { useTranslation } from 'react-i18next'

const HFAWebinar2020 = () => {
    const { t } = useTranslation()
    
    const videos = t('hfaWebinar2020.sections.videos', { returnObjects: true })

  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>{t('hfaWebinar2020.pageTitle')}</h1>
        </section>
        <section className="container termination-sec">
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <h2 style={{textAlign: "center"}}>{t('hfaWebinar2020.sections.mainHeading')}</h2>
                <span></span>
            </div>

            {videos.map((video, index) => (
                <div key={video.id || index} style={{ marginBottom: '40px' }}>
                    <iframe 
                        width="100%" 
                        height="533" 
                        src={video.url}
                        title={video.title}
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
            ))}

            <h2 style={{textAlign: "center", marginTop: '40px', marginBottom: "30px"}}>
                {t('hfaWebinar2020.sections.postBrexitHeading')}
            </h2>

            <p>{t('hfaWebinar2020.sections.content.paragraph1')}</p>

            <p>{t('hfaWebinar2020.sections.content.paragraph2')}</p>

            <p>{t('hfaWebinar2020.sections.content.paragraph3')}</p>

            <p>{t('hfaWebinar2020.sections.content.paragraph4')}</p>

            <p>{t('hfaWebinar2020.sections.content.paragraph5')}</p>
        </section>
    </div>
  )
}

export default HFAWebinar2020