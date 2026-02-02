import React from 'react';
import { useTranslation } from 'react-i18next';

const Flowchart2 = () => {
  const { t } = useTranslation();

  return (
    <div className="procedure-wrapper">
      <div className="procedure-flow">
        <div className="line-long"></div>
        
        {/* Initial Steps */}
        <div className="step-group">
          <div className="node oval">{t('certificationProcedure.flowchart.flowchart2.steps.receiptApplication')}</div>
          <div className="node rect">{t('certificationProcedure.flowchart.flowchart2.steps.certificationProposal')}</div>
          <div className="node rect">{t('certificationProcedure.flowchart.flowchart2.steps.acceptanceProposal')}</div>
          <div className="node rect">{t('certificationProcedure.flowchart.flowchart2.steps.issuanceInvoice')}</div>
          <div className="node rect">{t('certificationProcedure.flowchart.flowchart2.steps.submissionProduct')}</div>
        </div>

        {/* First Branching Node */}
        <div className="branch-container">
          <div className="main-path">
            <div className="node rect">{t('certificationProcedure.flowchart.flowchart2.steps.approvalProducts')}</div>
          </div>
          <div className="side-path">
            <div className="connector">{t('certificationProcedure.flowchart.flowchart2.decisions.no')}</div>
            <div className="node rect">{t('certificationProcedure.flowchart.flowchart2.steps.removalUnapproved')}</div>
          </div>
        </div>

        {/* Audit Phase */}
        <div className="step-group">
          <div className="node rect">{t('certificationProcedure.flowchart.flowchart2.steps.auditScheduled')}</div>
          <div className="node rect">{t('certificationProcedure.flowchart.flowchart2.steps.auditConducted')}</div>
          <div className="node rect">{t('certificationProcedure.flowchart.flowchart2.steps.issuanceAuditInvoice')}</div>
          <div className="node rect">{t('certificationProcedure.flowchart.flowchart2.steps.receiptDocumentation')}</div>
        </div>

        {/* Decision Diamond 1 */}
        <div className="branch-container">
          <div className="main-path">
            <div className="node diamond">{t('certificationProcedure.flowchart.flowchart2.steps.implementationCorrective')}</div>
          </div>
          <div className="side-path">
            <div className="connector">{t('certificationProcedure.flowchart.flowchart2.decisions.no')}</div>
            <div className="node rect danger">{t('certificationProcedure.flowchart.flowchart2.decisions.applicationRefused')}</div>
          </div>
        </div>

        {/* Decision Diamond 2 */}
        <div className="branch-container">
          <div className="main-path">
            <div className="node diamond">{t('certificationProcedure.flowchart.flowchart2.steps.conclusionAudit')}</div>
          </div>
          <div className="side-path">
            <div className="connector">{t('certificationProcedure.flowchart.flowchart2.decisions.no')}</div>
            <div className="node rect danger long">{t('certificationProcedure.flowchart.flowchart2.decisions.reAuditRefused')}</div>
          </div>
        </div>

        {/* Finalization Phase */}
        <div className="step-group">
          <div className="node rect">{t('certificationProcedure.flowchart.flowchart2.steps.certificationCommittee')}</div>
          <div className="node rect">{t('certificationProcedure.flowchart.flowchart2.steps.certificationAgreement')}</div>
          <div className="node rect">{t('certificationProcedure.flowchart.flowchart2.steps.certificationInvoice')}</div>
          <div className="node oval success">{t('certificationProcedure.flowchart.flowchart2.steps.halalCertificate')}</div>
        </div>

        {/* Terminal Refund Path */}
        <div className="terminal-container">
           <div className="node oval secondary">{t('certificationProcedure.flowchart.flowchart2.steps.refundIssued')}</div>
        </div>

      </div>
    </div>
  );
};

export default Flowchart2;