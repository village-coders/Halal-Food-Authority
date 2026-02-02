
import { CheckCircle, BarChart2, Newspaper, Users, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const {t} = useTranslation()
  return (
    <section className="services">
      <div className="container">
        <div className="services-header-grid">
          <div className="services-intro">
            <h2 className="services-title">{t("home.services.title")}</h2>
            <p>
              {t("home.services.intro")}
            </p>
          </div>

          <div className="service-card">
            <CheckCircle className="service-icon" size={32} />
            <h3>{t("home.services.audit.title")}</h3>
            <p>
              {t("home.services.audit.text")}
            </p>
          </div>

          <div className="service-card">
            <BarChart2 className="service-icon" size={32} />
            <h3>{t("home.services.products.title")}</h3>
            <p>
              {t("home.services.products.text")}
            </p>
          </div>

          <div className="service-card">
            <Newspaper className="service-icon" size={32} />
            <h3>{t("home.services.export.title")}</h3>
            <p>
              {t("home.services.export.text")}
            </p>
          </div>

          <div className="service-card">
            <Users className="service-icon" size={32} />
            <h3>{t("home.services.group.title")}</h3>
            <p>
              {t("home.services.group.text")}
            </p>
          </div>

          <div className="service-card">
            <FileText className="service-icon" size={32} />
            <h3>{t("home.services.inspection.title")}</h3>
            <p>{t("home.services.inspection.text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}