import React from 'react'
import pressRelease from '../assets/imgi_24_UK-and-Indonesia-Promote-New-Economic-Ties-768x432.png'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ExportingYourProductsToIndonesia = () => {
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
                Exporting your products to Indonesia
            </h2>

            <p>
                Halal certification will be mandatory for nearly all food and beverage products starting in October 2024.
            </p>

            <p>
                The new halal certification requirements for exporting food items to Indonesia, effective from October 2024, represent a crucial shift in the regulatory landscape for UK businesses. While the new standards are more stringent, they are designed to protect consumer trust and ensure that halal principles are strictly followed.
            </p>

            <p>
                UK exporters must take proactive steps to comply with these requirements, including engaging with accredited certifying bodies, upgrading traceability systems, and ensuring that all aspects of their production process meet halal standards. By doing so, they can continue to access the lucrative Indonesian market while upholding the highest standards of quality and integrity.
            </p>

            <p>
                <b>Timeline and Execution Stages</b>
            </p>

            <p>
                The Halal law is being rolled out in phases. Here are the current key dates to remember:
            </p>

            <ul>
                <li><b>17 October 2024:</b> The deadline for food and beverage products to obtain Halal certification.</li>
                <li><b>17 October 2026:</b> The deadline for chemicals and cosmetics to comply with the Halal certification requirement.</li>
            </ul>

            <p>
                <b>To export your products to Indonesia</b>
            </p>

            <ul>
                <li>B2B products do not require Halal package labelling, however, need a Halal certificate.</li>
                <li>B2C products (products sold in supermarkets) require Halal labelling for Indonesia.</li>
            </ul>

            <p>For more information, please <Link style={{display: "inline", fontWeight: "inherit", fontSize: "inherit"}} to={``}> contact </Link> us</p>


        </section>
        <div className="pagination">
            <Link to={`/${currentLang}/uk-parliament-debate-on-banning-non-stun-slaughter-on-9th-may-hfa-perspective`}><ArrowLeft/>  Previous Post</Link>
            <Link to={``}></Link>
        </div>
    </div>
  )
}

export default ExportingYourProductsToIndonesia