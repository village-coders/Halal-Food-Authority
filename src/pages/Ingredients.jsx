import React from 'react'
import { useTranslation } from 'react-i18next'

const Ingredients = () => {
    const { t } = useTranslation()

  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>{t('ingredients.pageTitle')}</h1>
        </section>
        <section className="container termination-sec find-more-halal">
            <p>{t('ingredients.content.description')}</p>

            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <button>{t('ingredients.content.buttonText')}</button>
            </div>
        </section>
    </div>
  )
}

export default Ingredients