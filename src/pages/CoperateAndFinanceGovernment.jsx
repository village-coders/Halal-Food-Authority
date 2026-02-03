import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const CorporateAndFinancialGovernance = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    function handleContactButton() {
        navigate('/contact')
    }
    
  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>{t('corporateFinanceGovernance.pageTitle')}</h1>
        </section>
        <section className="container termination-sec">
            <p>{t('corporateFinanceGovernance.content.paragraph1')}</p>
            <p>{t('corporateFinanceGovernance.content.paragraph2')}</p>
            
            <h3>{t('corporateFinanceGovernance.content.financialIncome.title')}</h3>
            <p>{t('corporateFinanceGovernance.content.financialIncome.paragraph')}</p>
            <ul>
                {t('corporateFinanceGovernance.content.financialIncome.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3>{t('corporateFinanceGovernance.content.charityCommitment.title')}</h3>
            <p>{t('corporateFinanceGovernance.content.charityCommitment.paragraph')}</p>

            <h3>{t('corporateFinanceGovernance.content.financialReporting.title')}</h3>
            <p>{t('corporateFinanceGovernance.content.financialReporting.paragraph')}</p>
            <ul>
                {t('corporateFinanceGovernance.content.financialReporting.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3>{t('corporateFinanceGovernance.content.delegatedAuthority.title')}</h3>
            <p>{t('corporateFinanceGovernance.content.delegatedAuthority.paragraph')}</p>

            <button onClick={handleContactButton}>
                {t('corporateFinanceGovernance.contact.button')}
            </button>
        </section>
    </div>
  )
}

export default CorporateAndFinancialGovernance