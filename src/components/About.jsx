import { useTranslation } from "react-i18next";
import mosque from "../assets/mosque.webp";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="container">
        <h2 className="about-title">{t("home.about.title")}</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              {t("home.about.p1")}
            </p>
            <p>
              {t("home.about.p2")}
            </p>
          </div>
          <div className="about-image">
            <img loading="lazy" src={mosque} alt="Mosque at sunset" />
          </div>
        </div>
      </div>
    </section>
  );
}