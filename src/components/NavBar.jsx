import { useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../assets/Halal-food-authourity-logo-1.png";
import { LANGUAGES } from "../utils/languages";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { lng } = useParams();
  const { t, i18n } = useTranslation();

  const currentLang = lng ?? i18n.resolvedLanguage ?? "en";

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;

    const langRegex = new RegExp(
      `^\\/(${LANGUAGES.map((l) => l.code).join("|")})`
    );

    const pathWithoutLang = location.pathname.replace(langRegex, "");
    navigate(`/${newLang}${pathWithoutLang || ""}`);

    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="navbar">
      <div className="container nav-content">
        {/* LOGO */}
        <div className="logo">
          <Link to={`/${currentLang}`}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "bar open" : "bar"} />
          <span className={isOpen ? "bar open" : "bar"} />
          <span className={isOpen ? "bar open" : "bar"} />
        </div>

        {/* NAV LINKS */}
        <nav className={isOpen ? "nav-links open" : "nav-links"}>
          <Link to={`/${currentLang}`} className="active">
            {t("nav.home")}
          </Link>

          <Link to={`/${currentLang}/about`}>
            {t("nav.about")}
          </Link>

          {/* CERTIFICATION */}
          <div className={`dropdown ${activeDropdown === "cert" ? "active" : ""}`}>
            <button
              className="nav-link"
              type="button"
              onClick={() => toggleDropdown("cert")}
            >
              {t("nav.certification")} <span className="caret">▼</span>
            </button>

            <div className="dropdown-menu">
              <Link to={`/${currentLang}/certification/food`}>
                {t("certification.food")}
              </Link>
              <Link to={`/${currentLang}/certification/abattoir`}>
                {t("certification.abattoir")}
              </Link>
              <Link to={`/${currentLang}/certification/pharma`}>
                {t("certification.pharma")}
              </Link>
            </div>
          </div>

          {/* POLICIES */}
          <div className={`dropdown ${activeDropdown === "policy" ? "active" : ""}`}>
            <button
              className="nav-link"
              type="button"
              onClick={() => toggleDropdown("policy")}
            >
              {t("nav.policies")} <span className="caret">▼</span>
            </button>

            <div className="dropdown-menu">
              <Link to={`/${currentLang}/privacy-policy`}>
                {t("policies.privacy")}
              </Link>
              <Link to={`/${currentLang}/terms`}>
                {t("policies.terms")}
              </Link>
              <Link to={`/${currentLang}/standards`}>
                {t("policies.standards")}
              </Link>
            </div>
          </div>

          {/* EVENTS */}
          <div className={`dropdown ${activeDropdown === "event" ? "active" : ""}`}>
            <button
              className="nav-link"
              type="button"
              onClick={() => toggleDropdown("event")}
            >
              {t("nav.events")} <span className="caret">▼</span>
            </button>

            <div className="dropdown-menu">
              <Link to={`/${currentLang}/events/2025`}>
                {t("events.planning2025")}
              </Link>
              <Link to={`/${currentLang}/events/2020`}>
                {t("events.webinar2020")}
              </Link>
              <Link to={`/${currentLang}/events/2019`}>
                {t("events.ulemah2019")}
              </Link>
            </div>
          </div>

          <Link to={`/${currentLang}/faq`}>
            {t("nav.faqs")}
          </Link>

          <Link to={`/${currentLang}/contact`}>
            {t("nav.contact")}
          </Link>

          <button className="btn-primary mobile-only">
            {t("nav.signin")}
          </button>


        </nav>

        <div className="language-switcher">
          <select value={currentLang} onChange={handleLanguageChange}>
              {LANGUAGES.map((lang) => (
              <option key={lang.code} value={lang.code}>
                  {lang.label}
              </option>
              ))}
          </select>
        </div>
        {/* LANGUAGE SWITCHER */}
       

        {/* DESKTOP CTA */}
        <button className="btn-primary desktop-only">
          {t("nav.signin")}
        </button>
      </div>
    </header>
  );
}
