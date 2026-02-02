import { useTranslation } from "react-i18next";

export default function Manual() {
  const { t } = useTranslation();

  return (
    <section className="manual">
      <div className="background-overlay"></div>
      <div className="container manual-content">
        <h2 className="manual-title">{t("home.manual.title")}</h2>

        <p className="manual-description">
          {t("home.manual.description")}
        </p>

        <button className="btn-secondary-rect">
          {t("home.manual.cta")}
        </button>
      </div>
    </section>
  );
}
