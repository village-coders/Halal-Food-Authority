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


const FindMoreHalalFoodAuthority = () => {
    const { t } = useTranslation()

  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>Find More Halal Food Authourity</h1>
        </section>
        <section className="container termination-sec find-more-halal">
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <h2 style={{textAlign: "center", marginBottom: "30px"}}>What is your product category?</h2>
                <p>Halal Food Authority is an industry-leading Halal Food Certification body. We specialise in Halal Certification of Food and Non-Food items including cosmetics, logistics, chemicals, additives & aromas, cleaning substances, packaging, pharmaceutical, ingredients, and much more.</p>
            </div>

            <div className="grid-container">
                <div className="grid-item">
                    <img src={iftar} alt="food & beverages" />
                    <h3>Food & Beverages</h3>
                    <p>
                        The food and beverage industry is one of the fastest-growing sectors in the Halal market. If you're operating within this
                        <a href=""> Find more....</a>
                    </p>
                </div>
                <div className="grid-item">
                    <img src={skinCare} alt="cosmetics" />
                    <h3>Cosmetics</h3>
                    <p>
                        When evaluating whether cosmetics and personal care products meet halal standards, it is crucial that all ingredients
                        <a href=""> Find more....</a>
                    </p>
                </div>
                <div className="grid-item">
                    <img src={pills} alt="pharmaceuticals" />
                    <h3>Pharmaceuticals</h3>
                    <p>
                        The process of halal certification for pharmaceuticals ensures that all elements related to a drug's development
                        <a href=""> Find more....</a>
                    </p>
                </div>
                <div className="grid-item">
                    <img src={ingredient} alt="ingredients" />
                    <h3>Ingredients</h3>
                    <p>
                        Halal certification verifies that all ingredients in a product comply with Islamic dietary regulations. To qualify as
                        <a href=""> Find more....</a>
                    </p>
                </div>
                <div className="grid-item">
                    <img src={perfume} alt="additives & aromas" />
                    <h3>Additives & Aromas</h3>
                    <p>
                        Halal certification guarantees that the additives and flavors used in food production adhere to Islamic dietary
                        <a href=""> Find more....</a>
                    </p>
                </div>
                <div className="grid-item">
                    <img src={cleaning} alt="cleaning substances" />
                    <h3>Cleaning Substances</h3>
                    <p>
                        The process of halal certification for cleaning agents confirms that these products conform to Islamic guidelines
                        <a href=""> Find more....</a>
                    </p>
                </div>
                <div className="grid-item">
                    <img src={packaging} alt="packaging materials" />
                    <h3>Packaging Materials</h3>
                    <p>
                        Halal certification is essential for packaging to ensure that all elements of the product, including its outer materials
                        <a href=""> Find more....</a>
                    </p>
                </div>
                
            </div>

            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <h2 style={{textAlign: "center", marginBottom: "30px"}}>Halal Certification Beyond Borders</h2>
                <p>Halal Food Authority is an industry-leading Halal Food Certification body. We specialise in Halal Certification of Food and Non-Food items including cosmetics, logistics, chemicals, additives & aromas, cleaning substances, packaging, pharmaceutical, ingredients, and much more.</p>
            </div>

            <div className="country-grid-container">
                <div className="country-grid-item">
                    <img src={UkImg} alt="food & beverages" />
                    <h3>UK/EU</h3>
                </div>
                <div className="country-grid-item">
                    <img src={saudiImg} alt="food & beverages" />
                    <h3>Saudi Arabia</h3>
                </div>
                <div className="country-grid-item">
                    <img src={uaeImg} alt="food & beverages" />
                    <h3>UAE</h3>
                </div>
                
            </div>

            <div className="country-grid-container">
                <div className="country-grid-item">
                    <img src={IndonesiaImg} alt="food & beverages" />
                    <h3>Indonesia</h3>
                </div>
                <div className="country-grid-item">
                    <img src={MalaysiaImg} alt="food & beverages" />
                    <h3>Malaysia</h3>
                </div>
                <div className="country-grid-item">
                    <img src={OtherImg} alt="food & beverages" />
                    <h3>Other World</h3>
                </div>
            </div>
            
        </section>
    </div>
  )
}

export default FindMoreHalalFoodAuthority