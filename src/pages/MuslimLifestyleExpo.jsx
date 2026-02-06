import React from 'react'
import { useTranslation } from 'react-i18next'
import expo from '../assets/expo.jpg'

const MuslimExpo = () => {
    const { t } = useTranslation()

  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>{t('muslimExpo.heroTitle')}</h1>
        </section>
        <section className="container termination-sec find-more-halal">
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <h2 style={{textAlign: "center", marginBottom: "30px"}}>
                    {t('muslimExpo.mainTitle')}
                </h2>
                <span></span>
            </div>


            <div style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "40px 0px", width: "100%"}}>
                <img style={{width: "840px"}} src={expo} alt={t('muslimExpo.imageAlt')} />
            </div>

            <p>
                {t('muslimExpo.description')}
            </p>

        </section>

    </div>
  )
}

export default MuslimExpo