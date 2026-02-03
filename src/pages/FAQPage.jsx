import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, ChevronDown } from "lucide-react";

const FAQPage = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(1);

  const faqs = t('faqPage.questions', { returnObjects: true });

  return (
    <div className="cert-procedure ">
      <section className="cert-hero">
        <h1>{t('faqPage.pageTitle')}</h1>
      </section>
      <section className="container faq-sec ">
        <div className="faq-column">
          <p className="title">
            {t('faqPage.description')}
          </p>
          <div className="faq-card">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="faq-item border-bottom">
                <button
                  className={`faq-question ${open === faq.id ? "active" : ""}`}
                  onClick={() => setOpen(open === faq.id ? null : faq.id)}
                >
                  {faq.question}
                  <ChevronDown
                    className={`icon ${open === faq.id ? "rotate" : ""}`}
                    size={18}
                  />
                </button>
                {open === faq.id && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;