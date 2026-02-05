import React from 'react'
import { useTranslation } from 'react-i18next'

const AdditivesAndAromas = () => {
    const { t } = useTranslation()

  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>{t('additivesAndAromas.pageTitle')}</h1>
        </section>
        <section className="container termination-sec find-more-halal">
            <p>{t('additivesAndAromas.content.description')}</p>

            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <button>{t('additivesAndAromas.content.buttonText')}</button>
            </div>
        </section>
    </div>
  )
}

export default AdditivesAndAromas