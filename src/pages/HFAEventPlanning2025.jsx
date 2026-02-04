import React from 'react'
import { useTranslation } from 'react-i18next'

const HFAEventPlanning2025 = () => {
    const { t } = useTranslation()
    
    const events = t('hfaEventPlanning2025.sections.events', { returnObjects: true })

  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>{t('hfaEventPlanning2025.pageTitle')}</h1>
        </section>
        <section className="container termination-sec events">
            <h3>{t('hfaEventPlanning2025.sections.mainHeading')}</h3>

            <p>{t('hfaEventPlanning2025.sections.intro')}</p>
            
            {events.map((event, index) => (
                <div key={event.id || index} className="event-item">
                    <a href={event.link} target="_blank" rel="noopener noreferrer">
                        {event.title}
                    </a>
                    
                    <p>
                        <b>Dates:</b> {event.dates}: <b>Location:</b> {event.location}
                    </p>

                    <p>
                        <b>Overview:</b> {event.overview}
                    </p>

                    {event.features && (
                        <>
                            <br />
                            <p><b>Featuring:</b> {event.features}</p>
                        </>
                    )}
                </div>
            ))}
        </section>
    </div>
  )
}

export default HFAEventPlanning2025