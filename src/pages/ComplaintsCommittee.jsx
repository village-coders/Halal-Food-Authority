import React from 'react'
import { useTranslation } from 'react-i18next'

const ComplaintsCommittee = () => {
    const { t } = useTranslation()

  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>{t('complaintsCommittee.pageTitle')}</h1>
        </section>
        <section className="container termination-sec">
            <h2>{t('complaintsCommittee.sections.mainTitle')}</h2>
            <span></span>
            <p>{t('complaintsCommittee.sections.intro')}</p>

            <ol>
                {t('complaintsCommittee.sections.responsibilities', { returnObjects: true }).map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ol>
            
            <div className="complaints-committee-bottom">
                {t('complaintsCommittee.sections.conclusion')}
            </div>
        </section>
    </div>
  )
}

export default ComplaintsCommittee