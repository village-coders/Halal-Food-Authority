import React from 'react'
import pressRelease from '../assets/imgi_24_UK-and-Indonesia-Promote-New-Economic-Ties-768x432.png'
import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ExportingYourProductsToIndonesia = () => {
    const { t, i18n } = useTranslation()
    const { lng } = useParams()

    const currentLang = lng ?? i18n.resolvedLanguage ?? "en";

    // Function to render HTML from translation strings
    const renderHTML = (htmlString) => {
        return { __html: htmlString };
    };

    const timelineDates = t('exportingToIndonesia.timeline.dates', { returnObjects: true });
    const exportPoints = t('exportingToIndonesia.exportRequirements.points', { returnObjects: true });

    return (
        <div className='cert-procedure container' style={{ background: "#F5F5F5", paddingTop: "60px", paddingBottom: "60px" }}>
            <section className="container termination-sec events pad">
                <div style={{ marginBottom: "30px" }}>
                    <img src={pressRelease} alt={t('exportingToIndonesia.pressReleaseAlt')} />
                </div>

                <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>
                    {t('exportingToIndonesia.mainHeading')}
                </h2>

                <p>{t('exportingToIndonesia.content.paragraph1')}</p>

                <p>{t('exportingToIndonesia.content.paragraph2')}</p>

                <p>{t('exportingToIndonesia.content.paragraph3')}</p>

                <p><b>{t('exportingToIndonesia.timeline.heading')}</b></p>

                <p>{t('exportingToIndonesia.timeline.description')}</p>

                <ul>
                    {timelineDates.map((item, index) => (
                        <li key={index}>
                            <b>{item.date}</b> {item.description}
                        </li>
                    ))}
                </ul>

                <p><b>{t('exportingToIndonesia.exportRequirements.heading')}</b></p>

                <ul>
                    {exportPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>

                <p dangerouslySetInnerHTML={renderHTML(t('exportingToIndonesia.contactInfo'))} />
            </section>
            
            <div className="pagination">
                <Link to={`/${currentLang}/uk-parliament-debate-on-banning-non-stun-slaughter-on-9th-may-hfa-perspective`}>
                    <ArrowLeft/> {t('exportingToIndonesia.pagination.previousPost')}
                </Link>
                <Link to={``}></Link>
            </div>
        </div>
    )
}

export default ExportingYourProductsToIndonesia