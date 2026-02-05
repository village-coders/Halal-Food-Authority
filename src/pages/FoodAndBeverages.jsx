import React from 'react'
import { useTranslation } from 'react-i18next'

const FoodAndBeverages = () => {
    const { t } = useTranslation()

  return (
    <div className='cert-procedure '>
        <section style={{background: "#F8F6F3"}} className="container termination-sec find-more-halal">
            <h2>{t('foodAndBeverages.content.heading')}</h2>
            <p>{t('foodAndBeverages.content.description')}</p>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <button>{t('foodAndBeverages.content.buttonText')}</button>
            </div>
        </section>
    </div>
  )
}

export default FoodAndBeverages