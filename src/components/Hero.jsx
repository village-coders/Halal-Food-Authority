import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <h1>{t("hero.title")}</h1>
          <p>{t("hero.description")}</p>

          <div className="hero-buttons">
            <button className="btn-white">{t("hero.apply")}</button>
            <button className="btn-outline">{t("hero.findMore")}</button>
          </div>

          <div className="stats">
            <div className="stat-item">
              <strong>{t("hero.stats.clients.number")}</strong>
              <span>{t("hero.stats.clients.text")}</span>
            </div>
            <div className="stat-item">
              <strong>{t("hero.stats.products.number")}</strong>
              <span>{t("hero.stats.products.text")}</span>
            </div>
            <div className="stat-item">
              <strong>{t("hero.stats.certificates.number")}</strong>
              <span>{t("hero.stats.certificates.text")}</span>
            </div>
            <div className="stat-item">
              <strong>{t("hero.stats.recognition.number")}</strong>
              <span>{t("hero.stats.recognition.text")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
