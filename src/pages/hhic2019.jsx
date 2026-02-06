import React from 'react'
import { useTranslation } from 'react-i18next'
import hhic2019 from '../assets/hhic2019 (1).jpg'

const HHIC2019 = () => {
    const { t } = useTranslation()

    // Function to render HTML from translation strings
    const renderHTML = (htmlString) => {
        return { __html: htmlString };
    };

  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>{t('hhic2019.pageTitle')}</h1>
        </section>
        <section className="container termination-sec find-more-halal">
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <h2 style={{textAlign: "center", marginBottom: "30px"}}>
                    {t('hhic2019.mainHeading')}
                </h2>
                <span></span>
            </div>

            <div style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "40px 0px", width: "100%"}}>
                <img 
                    style={{width: "840px"}} 
                    src={hhic2019} 
                    alt={t('hhic2019.mainHeading')} 
                />
            </div>

            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <h2 
                    style={{textAlign: "center", marginBottom: "30px"}}
                    dangerouslySetInnerHTML={renderHTML(t('hhic2019.pressReleaseHeading'))}
                />
                <span></span>
            </div>

            <p>{t('hhic2019.content.paragraph1')}</p>
            <p>{t('hhic2019.content.paragraph2')}</p>
            <p>{t('hhic2019.content.paragraph3')}</p>
            <p>{t('hhic2019.content.paragraph4')}</p>
            <p>{t('hhic2019.content.paragraph5')}</p>
            <p>{t('hhic2019.content.paragraph6')}</p>
            <p>{t('hhic2019.content.paragraph7')}</p>
            <p>{t('hhic2019.content.paragraph8')}</p>
            <p>{t('hhic2019.content.paragraph9')}</p>
            <p dangerouslySetInnerHTML={renderHTML(t('hhic2019.content.paragraph10'))} />
        </section>
    </div>
  )
}

export default HHIC2019