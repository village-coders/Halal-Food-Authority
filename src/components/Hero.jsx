import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <h1>{t("home.hero.title")}</h1>
          <p>{t("home.hero.description")}</p>

          <div className="hero-buttons">
            <button className="btn-white">{t("home.hero.apply")}</button>
            <button className="btn-outline">{t("home.hero.findMore")}</button>
          </div>

          <div className="stats">
            <div className="stat-item">
              <strong>{t("home.hero.stats.clients.number")}</strong>
              <span>{t("home.hero.stats.clients.text")}</span>
            </div>
            <div className="stat-item">
              <strong>{t("home.hero.stats.products.number")}</strong>
              <span>{t("home.hero.stats.products.text")}</span>
            </div>
            <div className="stat-item">
              <strong>{t("home.hero.stats.certificates.number")}</strong>
              <span>{t("home.hero.stats.certificates.text")}</span>
            </div>
            <div className="stat-item">
              <strong>{t("home.hero.stats.recognition.number")}</strong>
              <span>{t("home.hero.stats.recognition.text")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
