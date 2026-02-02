import React from 'react';
import { useTranslation } from 'react-i18next';

const Flowchart1 = () => {
  const { t } = useTranslation();

  return (
    <div className="flowchart-section">
      <div className="flow-container">
        {/* INITIAL PHASES */}
        <div className="node start">{t('certificationProcedure.flowchart.flowchart1.steps.receiptApplication')}</div>
        <div className="node">{t('certificationProcedure.flowchart.flowchart1.steps.certificationProposal')}</div>
        <div className="node">{t('certificationProcedure.flowchart.flowchart1.steps.acceptanceProposal')}</div>
        <div className="node">{t('certificationProcedure.flowchart.flowchart1.steps.issuanceInvoice')}</div>
        <div className="node">{t('certificationProcedure.flowchart.flowchart1.steps.documentationReview')}</div>

        {/* AUDIT BRANCHING */}
        <div className="branch-row">
          <div className="primary-path">
            <div className="node">{t('certificationProcedure.flowchart.flowchart1.steps.stage1Audit')}</div>
            <div className="node">{t('certificationProcedure.flowchart.flowchart1.steps.stage2Audit')}</div>
          </div>
          <div className="logic-path">
            <div className="logic-gate">{t('certificationProcedure.flowchart.flowchart1.decisions.unsuccessful')}</div>
            <div className="sub-logic">
              <div className="path-item">
                <span className="label">{t('certificationProcedure.flowchart.flowchart1.decisions.critical')}</span>
                <div className="node error">{t('certificationProcedure.flowchart.flowchart1.decisions.refused')}</div>
              </div>
              <div className="path-item">
                <span className="label">{t('certificationProcedure.flowchart.flowchart1.decisions.nonCritical')}</span>
                <div className="node">{t('certificationProcedure.flowchart.flowchart1.steps.nonConformancesClosed')}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="node">{t('certificationProcedure.flowchart.flowchart1.steps.halalCertificationCommittee')}</div>

        {/* COMMITTEE BRANCHING */}
        <div className="branch-row">
          <div className="primary-path">
            <div className="node">{t('certificationProcedure.flowchart.flowchart1.steps.certificationAgreement')}</div>
          </div>
          <div className="logic-path">
            <div className="logic-gate">{t('certificationProcedure.flowchart.flowchart1.decisions.unsuccessful')}</div>
            <div className="node wide">{t('certificationProcedure.flowchart.flowchart1.decisions.removalUnapproved')}</div>
          </div>
        </div>

        <div className="node">{t('certificationProcedure.flowchart.flowchart1.steps.finalCertificationInvoice')}</div>
        <div className="node success">{t('certificationProcedure.flowchart.flowchart1.steps.halalCertificate')}</div>

        {/* MAINTENANCE CYCLE */}
        <div className="cycle-container">
          <div className="node">{t('certificationProcedure.flowchart.flowchart1.steps.surveillanceAuditYear1')}</div>
          <div className="node">{t('certificationProcedure.flowchart.flowchart1.steps.nonConformancesClosed')}</div>
          <div className="node">{t('certificationProcedure.flowchart.flowchart1.steps.surveillanceAuditYear2')}</div>
          <div className="node">{t('certificationProcedure.flowchart.flowchart1.steps.nonConformancesClosed')}</div>
          <div className="node">{t('certificationProcedure.flowchart.flowchart1.steps.submitRenewal')}</div>
          <div className="notice-box">
            {t('certificationProcedure.flowchart.flowchart1.notice')}
          </div>
        </div>

        {/* RENEWAL PHASE */}
        <div className="node">{t('certificationProcedure.flowchart.flowchart1.steps.renewalAudit')}</div>
        <div className="node">{t('certificationProcedure.flowchart.flowchart1.steps.nonConformancesClosed')}</div>
        <div className="node success">{t('certificationProcedure.flowchart.flowchart1.steps.halalCertificate')}</div>
      </div>
    </div>
  );
};

export default Flowchart1;