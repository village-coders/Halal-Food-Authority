import React from 'react'
import { useTranslation } from 'react-i18next'

const TerminationProcedure = () => {
    const {t} = useTranslation()
    
  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>{t('terminationProcedure.pageTitle')}</h1>
        </section>
        <section className="container termination-sec">
            <h2>{t('terminationProcedure.sections.mainTitle')}</h2>
            <span></span>
            <p>{t('terminationProcedure.sections.introduction')}</p>
            
            <h3>{t('terminationProcedure.sections.suspension.title')}</h3>
            <p>{t('terminationProcedure.sections.suspension.content')}</p>
            
            <h3>{t('terminationProcedure.sections.termination.title')}</h3>
            <p>{t('terminationProcedure.sections.termination.intro')}</p>
            <ul>
                {t('terminationProcedure.sections.termination.reasons', { returnObjects: true }).map((reason, index) => (
                    <li key={index}>{reason}</li>
                ))}
            </ul>
            <p>{t('terminationProcedure.sections.termination.additional')}</p>
            
            <h3>{t('terminationProcedure.sections.notice.title')}</h3>
            <p>{t('terminationProcedure.sections.notice.content')}</p>
            
            <h3>{t('terminationProcedure.sections.appeals.title')}</h3>
            <p>{t('terminationProcedure.sections.appeals.content')}</p>
            
            <h3 style={{textDecoration: "underline"}}>{t('terminationProcedure.sections.acceptance.title')}</h3>
            
            <h3>{t('terminationProcedure.sections.acceptance.membershipTitle')}</h3>
            <p>{t('terminationProcedure.sections.acceptance.membershipContent1')}</p>
            <p>{t('terminationProcedure.sections.acceptance.membershipContent2')}</p>
            
            <h3>{t('terminationProcedure.sections.acceptance.organizationsTitle')}</h3>
            <ul>
                {t('terminationProcedure.sections.acceptance.organizationsList1', { returnObjects: true }).map((org, index) => (
                    <li key={index}>{org}</li>
                ))}
            </ul>
            
            <h3>{t('terminationProcedure.sections.acceptance.recognitionTitle')}</h3>
            <p>{t('terminationProcedure.sections.acceptance.recognitionNote')}</p>
            <ul>
                {t('terminationProcedure.sections.acceptance.recognitionList', { returnObjects: true }).map((org, index) => (
                    <li key={index}>{org}</li>
                ))}
            </ul>
        </section>
    </div>
  )
}

export default TerminationProcedure