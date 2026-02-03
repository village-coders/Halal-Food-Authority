import React from 'react'
import { useTranslation } from 'react-i18next'

const ProvisionForUseOfHfaLogo = () => {
    const { t } = useTranslation()

  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>{t('provisionForUseOfHfaLogo.pageTitle')}</h1>
        </section>
        <section className="container termination-sec provision-sec">
            <h2>{t('provisionForUseOfHfaLogo.sections.mainTitle')}</h2>
            <span></span>
            <p>{t('provisionForUseOfHfaLogo.sections.intro1')}</p>
            <p>{t('provisionForUseOfHfaLogo.sections.intro2')}</p>
            <ol>
                {t('provisionForUseOfHfaLogo.sections.provisions', { returnObjects: true }).map((provision, index) => (
                    <li key={index}>{provision}</li>
                ))}
            </ol>
        </section>
    </div>
  )
}

export default ProvisionForUseOfHfaLogo