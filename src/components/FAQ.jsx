import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

// Import translations (you might need to adjust the import based on your i18n setup)

import { useTranslation } from "react-i18next";

export default function FAQ() {
  const [open, setOpen] = useState(1);
  const [open2, setOpen2] = useState(1);
  
  // Access translations
  const {t} = useTranslation();

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-header">
          <h2 className="faq-main-title">{t("faq.title")}</h2>
          <div className="title-underline"></div>
          <p className="faq-subtitle">{t("faq.subtitle")}</p>
        </div>

        <div className="faq-grid">
          {/* Left Column: General Queries */}
          <div className="faq-column">
            <h3 className="column-title">{t("faq.categories.general")}</h3>
            <div className="faq-card">
              <div className="faq-item border-bottom">
                <button
                  className="faq-question"
                  onClick={() => setOpen(open === 1 ? null : 1)}
                >
                  {t("faq.questions.whatIsHalal")}
                  <ChevronDown className={`icon ${open === 1 ? "rotate" : ""}`} size={18} />
                </button>
                {open === 1 && (
                  <div className="faq-answer">
                    {t("faq.answers.whatIsHalal")}
                  </div>
                )}
              </div>
              <div className="faq-item border-bottom">
                <button
                  className="faq-question"
                  onClick={() => setOpen(open === 7 ? null : 7)}
                >
                  {t("faq.questions.mechanicalSlaughtering")}
                  <ChevronDown className={`icon ${open === 7 ? "rotate" : ""}`} size={18} />
                </button>
                {open === 7 && (
                  <div className="faq-answer">
                    {t("faq.answers.mechanicalSlaughtering")}
                  </div>
                )}
              </div>
              <div className="faq-item border-bottom">
                <button
                  className="faq-question"
                  onClick={() => setOpen(open === 8 ? null : 8)}
                >
                  {t("faq.questions.stunningAllowed")}
                  <ChevronDown className={`icon ${open === 8 ? "rotate" : ""}`} size={18} />
                </button>
                {open === 8 && (
                  <div className="faq-answer border-bottom">
                    {t("faq.answers.stunningAllowed")}
                  </div>
                )}
              </div>

              <div className="faq-item border-bottom">
                <button
                  className="faq-question"
                  onClick={() => setOpen(open === 2 ? null : 2)}
                >
                  {t("faq.questions.eNumbers")}
                  <ChevronDown className={`icon ${open === 2 ? "rotate" : ""}`} size={18} />
                </button>
                {open === 2 && (
                  <div className="faq-answer border-bottom">
                    {t("faq.answers.eNumbers")}
                  </div>
                )}
              </div>

              <div className="faq-item border-bottom">
                <button
                  className="faq-question"
                  onClick={() => setOpen(open === 3 ? null : 3)}
                >
                  {t("faq.questions.eNumbersImportance")}
                  <ChevronDown className={`icon ${open === 3 ? "rotate" : ""}`} size={18} />
                </button>
                {open === 3 && (
                  <div className="faq-answer border-bottom">
                    {t("faq.answers.eNumbersImportance")}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Queries */}
          <div className="faq-column">
            <h3 className="column-title">{t("faq.categories.corporate")}</h3>
            <div className="faq-card">
              <div className="faq-item border-bottom">
                <button className="faq-question" onClick={() => setOpen2(open2 === 1 ? null : 1)}>
                  {t("faq.questions.whyCertificationRequired")}
                  <ChevronDown className={`icon ${open2 === 1 ? "rotate" : ""}`} size={18} />
                </button>
                {open2 === 1 && (
                  <div className="faq-answer">
                    {t("faq.answers.whyCertificationRequired")}
                  </div>
                )}
              </div>
              <div className="faq-item border-bottom">
                <button className="faq-question" onClick={() => setOpen2(open2 === 2 ? null : 2)}>
                  {t("faq.questions.certificationCost")}
                  <ChevronDown className={`icon ${open2 === 2 ? "rotate" : ""}`} size={18} />
                </button>
                {open2 === 2 && (
                  <div className="faq-answer">
                    {t("faq.answers.certificationCost")}
                  </div>
                )}
              </div>
              <div className="faq-item border-bottom">
                <button className="faq-question" onClick={() => setOpen2(open2 === 3 ? null : 3)}>
                  {t("faq.questions.timeFrame")}
                  <ChevronDown className={`icon ${open2 === 3 ? "rotate" : ""}`} size={18} />
                </button>
                {open2 === 3 && (
                  <div className="faq-answer">
                    {t("faq.answers.timeFrame")}
                  </div>
                )}
              </div>
              <div className="faq-item border-bottom">
                <button className="faq-question" onClick={() => setOpen2(open2 === 4 ? null : 4)}>
                  {t("faq.questions.qualifiedTeam")}
                  <ChevronDown className={`icon ${open2 === 4 ? "rotate" : ""}`} size={18} />
                </button>
                {open2 === 4 && (
                  <div className="faq-answer">
                    {t("faq.answers.qualifiedTeam")}
                  </div>
                )}
              </div>
              <div className="faq-item border-bottom">
                <button className="faq-question" onClick={() => setOpen2(open2 === 5 ? null : 5)}>
                  {t("faq.questions.middleEastAcceptance")}
                  <ChevronDown className={`icon ${open2 === 5 ? "rotate" : ""}`} size={18} />
                </button>
                {open2 === 5 && (
                  <div className="faq-answer">
                    {t("faq.answers.middleEastAcceptance")}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <button className="read-more">
          {t("faq.readMore")} <ArrowRight />
        </button>
      </div>
    </section>
  );
}