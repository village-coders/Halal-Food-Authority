import React from 'react'
import { useTranslation } from 'react-i18next'

const Cosmetics = () => {
    const { t } = useTranslation()

  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>{t('cosmetics.pageTitle')}</h1>
        </section>
        <section className="container termination-sec find-more-halal">
            <p>{t('cosmetics.content.paragraph1')}</p>

            <p>{t('cosmetics.content.paragraph2')}</p>

            <p>{t('cosmetics.content.paragraph3')}</p>

            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <button>{t('cosmetics.content.buttonText')}</button>
            </div>
        </section>
    </div>
  )
}

export default Cosmetics