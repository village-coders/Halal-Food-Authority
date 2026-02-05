import React from 'react'
import pressRelease from '../assets/imgi_17_Press-Release.png'
import hfaPressRelease from '../assets/HFA-Press-Release-about-the-Non-Stun-Ban-debate-2025_page-0001-1086x1536.jpg'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const UKParliamentDebateOnBanning = () => {
    const { t, i18n } = useTranslation()
    const {lng} = useParams()

    const currentLang = lng ?? i18n.resolvedLanguage ?? "en";

  return (
    <div className='cert-procedure container' style={{background: "#F5F5F5", paddingTop: "60px", paddingBottom: "60px"}}>
        <section className="container termination-sec events pad">
            <div style={{marginBottom: "30px"}}>
                <img src={pressRelease} alt={t('ukParliamentDebate.pressReleaseAlt')} />
            </div>

            <h2 style={{marginBottom: "50px", marginTop: "50px"}}>
                {t('ukParliamentDebate.mainHeading')}
            </h2>

            <p>
                {t('ukParliamentDebate.description')}
            </p>

            <div style={{marginBottom: "50px", marginTop: "50px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img 
                    style={{maxWidth: "700px"}} 
                    src={hfaPressRelease} 
                    alt={t('ukParliamentDebate.hfaPressReleaseAlt')} 
                />
            </div>
        </section>
        
        <div className="pagination">
            <Link to={`/${currentLang}/our-clients`}>
                <ArrowLeft/> {t('ukParliamentDebate.pagination.previousPost')}
            </Link>
            <Link to={`/${currentLang}/exporting-your-products-to-indonesia`}>
                {t('ukParliamentDebate.pagination.nextPost')} <ArrowRight />
            </Link>
        </div>
    </div>
  )
}

export default UKParliamentDebateOnBanning