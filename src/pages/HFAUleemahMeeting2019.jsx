import React from 'react'
import { useTranslation } from 'react-i18next'

const HFAUleemahMeeting2019 = () => {
    const { t } = useTranslation()

  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>{t('hfaUleemahMeeting2019.pageTitle')}</h1>
        </section>
        <section className="container termination-sec">
            <p>{t('hfaUleemahMeeting2019.content.paragraph1')}</p>

            <p>{t('hfaUleemahMeeting2019.content.paragraph2')}</p>
        </section>
    </div>
  )
}

export default HFAUleemahMeeting2019