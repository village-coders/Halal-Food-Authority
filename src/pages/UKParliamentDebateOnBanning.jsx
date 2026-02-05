import React from 'react'
import pressRelease from '../assets/imgi_17_Press-Release.png'
import hfaPressRelease from '../assets/HFA-Press-Release-about-the-Non-Stun-Ban-debate-2025_page-0001-1086x1536.jpg'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const UKParliamentDebateOnBanning = () => {
    const { t, i18n } = useTranslation()
    const {lng} =  useParams()

    const currentLang = lng ?? i18n.resolvedLanguage ?? "en";

  return (
    <div className='cert-procedure container' style={{background: "#F5F5F5", paddingTop: "60px", paddingBottom: "60px"}}>
        <section className="container termination-sec events pad">

            <div style={{marginBottom: "30px"}}>
                <img src={pressRelease} alt="Press Release" />
            </div>

            <h2 style={{marginBottom: "50px", marginTop: "50px",}}>
                UK Parliament Debate on banning Non-Stun Slaughter on 9th May – HFA Perspective
            </h2>

            <p>
                A recent Early Day Motion (EDM 1394) was tabled in the UK Parliament on June 4, 2025, calling for a review of the legislative framework around non-stun slaughter. The motion expresses concern over the continued allowance of non-stun animal slaughter, particularly in halal meat production, and highlights veterinary evidence suggesting that pre-stunning reduces animal suffering. It urges the government to consider restricting or banning the practice and to introduce mandatory labelling of meat products based on the method of slaughter. Here is HFA point of view over the proposed ban.
            </p>

            <div style={{marginBottom: "50px", marginTop: "50px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img style={{maxWidth: "700px"}} src={hfaPressRelease} alt="Hfa press Release letter" />
            </div>


        </section>
        <div className="pagination">
            <Link to={`/${currentLang}/our-clients`}><ArrowLeft/>  Previous Post</Link>
            <Link to={`/${currentLang}/exporting-your-products-to-indonesia`}>Next Post <ArrowRight /></Link>
        </div>
    </div>
  )
}

export default UKParliamentDebateOnBanning