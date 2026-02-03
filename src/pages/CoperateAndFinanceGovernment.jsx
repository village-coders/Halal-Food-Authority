import React from 'react'
import { useTranslation } from 'react-i18next'
import { MdCall } from "react-icons/md";

const CoperateAndFinanceGovernment = () => {
    const { t } = useTranslation()

    function handleContactButton(){
        location.href = '/contact'
    }
    
  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>HFA Corporate and Financial Governance</h1>
        </section>
        <section className="container termination-sec">
            <p>
                Halal Food Authority (HFA) would like to shed more light on our corporate and financial governance to ensure the industry and consumers that we do not dispense any of our finances to untoward activities or bodies.
            </p>
            <p>
                As a company serving the Muslim community and the halal industry for twenty-five years, we are a body that works tirelessly to facilitate, support, and enhance halal trade globally, especially to UK/ EU exporters. Our integrity is of the utmost importance to us.
            </p>
            <h3>Financial Income</h3>
            <p>A team of voluntary trustees governs the HFA, and we receive no foreign aid, nor do we distribute our generated funds in any way (internally OR externally). The HFA shall have an independent budget financed from the following resources:</p>

            <ul>
                <li>The subscription and fees charged by the HFA in return for the services provided, such as Halal audit for up to a full man-day. A certification proposal that contains certification fees will be provided upon receiving the completed application form online</li>
                <li>Sponsorships and payments were received for conference or training conducted, which do not compromise the HFA Impartiality.</li>
                <li>Other resources as determined by the Board of Directors.</li>
            </ul>

            <h3>Charity Commitment</h3>

            <p>The utilization of the income received from any source shall be applied solely towards achieving the visions and responsibilities of the HFA. All HFA surplus and yields directly go back to the Halal Food Foundation (HFF), the charitable arm of the HFA. The HFF is a registered UK charity concerned with education, outreach work, making bonds within the Muslim community, and creating awareness on leading a halal and healthy lifestyle. Funds attributed to our charitable arm are used for educational purposes and, of course, reserved for potential educational projects, events, and workshops that are to be governed by the charity in the future.</p>

            <h3>Financial Reporting</h3>
            <p>Statutory accounts that kept records about the company and financial and accounting records are prepared from the HFA’s financial records at the end of the financial year. Statutory accounts must include the following items:</p>

            <ul>
                <li>a ‘balance sheet, which shows the value of everything the company owns, owes and is owed on the last day of the financial year;</li>
                <li>a ‘profit and loss account’, which shows the company’s sales, running costs, and the profit or loss it has made over the financial year;</li>
                <li>notes about the accounts; and</li>
                <li>a director’s report</li>
            </ul>

            <h3>Delegated Authority Policies</h3>
            <p>The HFA shall have a Finance Policies and Procedures Manual covering its day-to-day operations and activities. The delegated authorities’ list is prepared and maintained by the Financial Controller, approved by the Chief Executive and Chairman, and acknowledged by all employees</p>

            <button onClick={handleContactButton}>
                CONTACT FOR DETAILS
            </button>
        </section>
    </div>
  )
}

export default CoperateAndFinanceGovernment