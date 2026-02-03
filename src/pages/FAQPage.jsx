import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const FAQPage = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    function handleContactButton() {
        navigate('/contact')
    }
    
  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>FAQs</h1>
        </section>
        <section className="container termination-sec">
            
        </section>
    </div>
  )
}

export default FAQPage