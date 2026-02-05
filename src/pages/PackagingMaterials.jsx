import React from 'react'
import { useTranslation } from 'react-i18next'

const PackagingMaterials = () => {
    const { t } = useTranslation()

  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>{t('packagingMaterials.pageTitle')}</h1>
        </section>
        <section className="container termination-sec find-more-halal">
            <p>{t('packagingMaterials.content.description')}</p>

            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <button>{t('packagingMaterials.content.buttonText')}</button>
            </div>
        </section>
    </div>
  )
}

export default PackagingMaterials