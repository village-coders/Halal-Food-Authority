import React from 'react'
import { useTranslation } from 'react-i18next';
import CertificationCTA from '../components/CertificationCTA'
import Flowchart2 from '../components/Flowchart2'
import Flowchart1 from '../components/Flowchart1'

const CertificationProcedure = () => {
  const { t } = useTranslation();

  return (
    <main className='cert-procedure '>
        <section className="cert-hero container">
            <h1>{t('certificationProcedure.pageTitle')}</h1>
        </section>
        <section className="sec-1 container">
            <h2>{t('certificationProcedure.sections.flowchart.title')}</h2>
            <span></span>
            <p>{t('certificationProcedure.sections.flowchart.description')}</p>
            <Flowchart2 />
            <br />
            <h2>{t('certificationProcedure.sections.uaeScheme.title')}</h2>
            <span></span>
            <br />
            <Flowchart1 />
        </section>
        <CertificationCTA />
    </main>
  )
}

export default CertificationProcedure