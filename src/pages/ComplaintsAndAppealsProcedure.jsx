import React from 'react'
import { useTranslation } from 'react-i18next'
import { MdCall } from "react-icons/md";
import {  useNavigate, useParams } from 'react-router-dom';

const ComplaintsAndAppealsProcedure = () => {
    const { t, i18n } = useTranslation()
    const {lng} =  useParams()
    const navigate = useNavigate()
    const currentLang = lng ?? i18n.resolvedLanguage ?? "en";

    const handleContactButton = () => {
        navigate(`/${currentLang}/contact`);
    };
    
  return (
    <div className='cert-procedure '>
        <section className="cert-hero">
            <h1>{t('complaintsAppealsProcedure.pageTitle')}</h1>
        </section>
        <section className="container termination-sec">
            <h3>{t('complaintsAppealsProcedure.sections.guideTitle')}</h3>
            <p>
                {t('complaintsAppealsProcedure.sections.intro1')}
            </p>
            <p>
                {t('complaintsAppealsProcedure.sections.intro2')}                
            </p>

            <h3>{t('complaintsAppealsProcedure.sections.complaintDefinition.title')}</h3>
            <p>{t('complaintsAppealsProcedure.sections.complaintDefinition.content')}</p>


            <h3>{t('complaintsAppealsProcedure.sections.appealDefinition.title')}</h3>

            <p>{t('complaintsAppealsProcedure.sections.appealDefinition.content')}</p>

            <h3>{t('complaintsAppealsProcedure.sections.procedure.title')}</h3>
            <p>{t('complaintsAppealsProcedure.sections.procedure.content1')}</p>

            <p>{t('complaintsAppealsProcedure.sections.procedure.content2')}</p>
            <p>{t('complaintsAppealsProcedure.sections.procedure.content3')}</p>

            <h3>{t('complaintsAppealsProcedure.sections.whoCanComplain.title')}</h3>
            <p>
                {t('complaintsAppealsProcedure.sections.whoCanComplain.content1')}
            </p>
            <p>
                {t('complaintsAppealsProcedure.sections.whoCanComplain.content2')}
            </p>
            
            <h3>{t('complaintsAppealsProcedure.sections.afterComplaint.title')}</h3>
            <p>
                {t('complaintsAppealsProcedure.sections.afterComplaint.content1')}
            </p>

            <p>
                {t('complaintsAppealsProcedure.sections.afterComplaint.content2')}
            </p>

            <p>
                {t('complaintsAppealsProcedure.sections.afterComplaint.content3')}
            </p>

            <p>
                {t('complaintsAppealsProcedure.sections.afterComplaint.content4')}
            </p>

            <h3>
                {t('complaintsAppealsProcedure.sections.equalityDiversity.title')}
            </h3>
            <p>
                {t('complaintsAppealsProcedure.sections.equalityDiversity.intro')}
            </p>

            <p>
                {t('complaintsAppealsProcedure.sections.equalityDiversity.commitment1')}
            </p>
            <p>
                {t('complaintsAppealsProcedure.sections.equalityDiversity.commitment2')}
            </p>
            <p>
                {t('complaintsAppealsProcedure.sections.equalityDiversity.commitment3')}
            </p>

            <p>
                {t('complaintsAppealsProcedure.sections.equalityDiversity.commitmentsTitle')}
            </p>

            <ul>
                {t('complaintsAppealsProcedure.sections.equalityDiversity.commitments', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <p>{t('complaintsAppealsProcedure.sections.equalityDiversity.conclusion')}</p>

            <button onClick={handleContactButton}>
                {t('complaintsAppealsProcedure.contact.button')}
            </button>
        </section>
    </div>
  )
}

export default ComplaintsAndAppealsProcedure