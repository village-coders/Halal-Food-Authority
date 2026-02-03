import React from 'react'
import { useTranslation } from 'react-i18next'
import { MdCall } from "react-icons/md";

const HfaQualityPolicy = () => {
    const { t } = useTranslation()

    function handleContactButton(){
        location.href = '/contact'
    }
    
  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>HFA Quality Policy</h1>
        </section>
        <section className="container termination-sec">
            <p>
                HFA ensures consistency, accuracy, and a high customer service level without a compromise on due diligence and quality parameters. Due to constant developments in the food industry, complex supply chain, dynamic global halal regulations, and evolving consumers’ expectations, HFA is committed to achieving enhanced competence of its personnel involved in halal auditing, evaluation, communication, and effective decision making.
            </p>
            <p>
                HFA management aims to provide the required resources and skills to satisfy its stakeholders’ expectations, including but not limited to entities that recognize the certification and activities of the HFA, accreditation bodies, and regulatory authorities. Notwithstanding the size of HFA operations, its locations, global presence, recognition, and accreditation, the Quality Management System of the HFA remains enforced and implemented and is constantly monitored by the HFA’s senior management.
            </p>
            <p>
                Investing in its people and their qualifications and development is an additional pledge from our board. HFA’s recruitment process performs the required checks to maintain the integrity and the quality of the workforce.

            </p>
            <p>
                HFA believes in leading a positive and constructive change, and it is always open to innovation that could add to its quality standards, personnel development, and customer service. HFA intends to become a worldwide market leader in providing the most trusted, robust, and highly compliant halal certification worldwide while developing and producing the best halal auditors and halal technologists/scientists and educating the generation on not only halal consumption but on halal as a lifestyle!
            </p>
            <button onClick={handleContactButton}>
                CONTACT FOR DETAILS
            </button>
        </section>
    </div>
  )
}

export default HfaQualityPolicy