import React from 'react'
import pressRelease from '../assets/imgi_16_ezgif.com-animated-gif-maker-2-5 (1).gif'
import { ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const OurClients = () => {
    const { t, i18n } = useTranslation()
    const {lng} = useParams()

    const currentLang = lng ?? i18n.resolvedLanguage ?? "en";

    // Function to render HTML from translation strings
    const renderHTML = (htmlString) => {
        return { __html: htmlString };
    };

  return (
    <div className='cert-procedure container' style={{background: "#F5F5F5", paddingTop: "60px", paddingBottom: "60px"}}>
        <section className="container termination-sec events pad">
            <div style={{marginBottom: "30px"}}>
                <img src={pressRelease} alt="Press Release" />
            </div>

            <h2 style={{marginBottom: "50px", marginTop: "50px"}}>
                {t('ourClients.section1.heading')}
            </h2>

            <p>
                {t('ourClients.section1.description')}
            </p>

            <h2 style={{marginBottom: "50px", marginTop: "50px"}}>
                {t('ourClients.section2.heading')}
            </h2>

            <p dangerouslySetInnerHTML={renderHTML(t('ourClients.section2.paragraph1'))} />

            <p dangerouslySetInnerHTML={renderHTML(t('ourClients.section2.paragraph2'))} />
        </section>
        
        <div className="pagination">
            <a href=""></a>
            <Link to={`/${currentLang}/uk-parliament-debate-on-banning-non-stun-slaughter-on-9th-may-hfa-perspective`}>
                {t('ourClients.pagination.nextPost')} <ArrowRight />
            </Link>
        </div>
    </div>
  )
}

export default OurClients