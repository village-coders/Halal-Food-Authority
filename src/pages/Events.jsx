import React from 'react'
import hfaLogo from '../assets/imgi_19_Green-logo.png'
import image1 from '../assets/Thisisanamazingpicture1726381673-2 (1).jpg'
import image2 from '../assets/hhic2018.jpg'
import image3 from '../assets/English1 (1).webp'
import image4 from '../assets/English.webp'
import image5 from '../assets/event2-1-1.jpg'
import image6 from '../assets/event3.jpg'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Events = () => {
    const { t, i18n } = useTranslation()
    const { lng } = useParams()
    const currentLang = lng ?? i18n.resolvedLanguage ?? "en";

    const events = t('events.eventsList', { returnObjects: true });
    
    // Array of imported images in the same order as events
    const eventImages = [image1, hfaLogo, image2, image3, image4, image5, image6];

    return (
        <div className='cert-procedure'>
            <section className="cert-hero our-events">
                <h1>{t('events.pageTitle')}</h1>
            </section>
            <section className='container our-events-sec'>
                {events.map((event, index) => (
                    <Link 
                        key={event.id || index} 
                        to={`/${currentLang}/events/${event.link}`} 
                        className="grid-item"
                    >
                        <div className="img-container">
                            <img 
                                src={eventImages[index]} 
                                alt={event.alt} 
                            />
                        </div>
                        <h2>{event.title}</h2>
                    </Link>
                ))}
            </section>
        </div>
    )
}

export default Events