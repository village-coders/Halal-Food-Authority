import React from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";

const HfaQualityPolicy = () => {
  const { t, i18n } = useTranslation();
  const { lng } = useParams();
  const navigate = useNavigate();

  const currentLang = lng ?? i18n.resolvedLanguage ?? "en";

  const handleContactButton = () => {
    navigate(`/${currentLang}/contact`);
  };

  return (
    <div className="cert-procedure">
      <section className="cert-hero">
        <h1>{t("hfaQualityPolicy.pageTitle")}</h1>
      </section>

      <section className="container termination-sec">
        <p>{t("hfaQualityPolicy.content.paragraph1")}</p>
        <p>{t("hfaQualityPolicy.content.paragraph2")}</p>
        <p>{t("hfaQualityPolicy.content.paragraph3")}</p>
        <p>{t("hfaQualityPolicy.content.paragraph4")}</p>

        <button onClick={handleContactButton}>
          {t("hfaQualityPolicy.contact.button")}
        </button>
      </section>
    </div>
  );
};

export default HfaQualityPolicy;
