import React from 'react'
import { useTranslation } from 'react-i18next'
import iftar from '../assets/imgi_2_iftar.png'
import skinCare from '../assets/imgi_3_skincare.png'
import pills from '../assets/imgi_4_pills.png'
import ingredient from '../assets/imgi_5_ingredient.png'
import perfume from '../assets/imgi_6_perfume.png'
import cleaning from '../assets/imgi_7_cleaning.png'
import packaging from '../assets/imgi_8_labeling.png'

import UkImg from '../assets/imgi_16_CHEO36LDSRCFFLKHDEUBVTMYSU.avif'
import saudiImg from '../assets/552686_9733817_updates-696x398-1.jpg'
import uaeImg from '../assets/UAE-FLAG-ILOE-scheme-1.jpg'
import IndonesiaImg from '../assets/indonesia-flag_20170821100153_reuters.webp'
import MalaysiaImg from '../assets/UAE-FLAG-ILOE-scheme-1.jpg'
import OtherImg from '../assets/world-1.png'

import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'

const FindMoreHalalFoodAuthority = () => {
    const { t, i18n } = useTranslation()
    const {lng} =  useParams()

    const currentLang = lng ?? i18n.resolvedLanguage ?? "en";

    const categories = t('findMoreHalalFoodAuthority.productCategory.categories', { returnObjects: true })
    const countries = t('findMoreHalalFoodAuthority.halalCertification.countries', { returnObjects: true })

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 1, ease: "easeOut" }
    };

    // Array of imported images for categories
    const categoryImages = [iftar, skinCare, pills, ingredient, perfume, cleaning, packaging]

    const categoryLinks = [`/${currentLang}/food-and-beverages`, `/${currentLang}/cosmetics`, `/${currentLang}/pharmaceuticals`, `/${currentLang}/ingredients`, `/${currentLang}/additives-aromas`, ` ` , `/${currentLang}/packaging-materials`]

  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>{t('findMoreHalalFoodAuthority.pageTitle')}</h1>
        </section>
        <section className="container termination-sec find-more-halal">
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <h2 style={{textAlign: "center", marginBottom: "30px"}}>
                    {t('findMoreHalalFoodAuthority.productCategory.heading')}
                </h2>
                <p>{t('findMoreHalalFoodAuthority.productCategory.description')}</p>
            </div>

            <div className="grid-container">
                {categories.map((category, index) => (
                    <div className="grid-item" key={category.id || index}>
                        <img
                            src={categoryImages[index]} 
                            loading='lazy'
                            alt={category.title.toLowerCase()} 
                        />
                        <h3>{category.title}</h3>
                        <p>
                            {category.description}
                            <a href={categoryLinks[index]}> {category.linkText}</a>
                        </p>
                    </div>
                ))}
            </div>

            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <h2 style={{textAlign: "center", marginBottom: "30px"}}>
                    {t('findMoreHalalFoodAuthority.halalCertification.heading')}
                </h2>
                <p>{t('findMoreHalalFoodAuthority.halalCertification.description')}</p>
            </div>

            <div className="country-grid-container">
                {countries.slice(0, 3).map((country, index) => (
                    <div className="country-grid-item" key={country.id || index}>
                        <img src={
                            index === 0 ? UkImg : 
                            index === 1 ? saudiImg : 
                            uaeImg
                        } loading='lazy' alt={country.name} />

                        <h3>{country.name}</h3>
                    </div>
                ))}
            </div>

            <div className="country-grid-container">
                {countries.slice(3).map((country, index) => (
                    <div className="country-grid-item" key={country.id || index}>
                        <img src={
                            index === 0 ? IndonesiaImg : 
                            index === 1 ? MalaysiaImg : 
                            OtherImg
                        } loading='lazy' alt={country.name} />
                        <h3>{country.name}</h3>
                    </div>
                ))}
            </div>
        </section>
        
        <section className='about-appointment-sec'>
            <div className="about-app-overlay"></div>
            <div className="container about-appointment">
                <motion.h2>{t('findMoreHalalFoodAuthority.contactSection.heading')}</motion.h2>
                <motion.p>{t('findMoreHalalFoodAuthority.contactSection.description')}</motion.p>
                <motion.button {...fadeInUp}>
                    {t('findMoreHalalFoodAuthority.contactSection.buttonText')}
                </motion.button>
            </div>
        </section>
    </div>
  )
}

export default FindMoreHalalFoodAuthority