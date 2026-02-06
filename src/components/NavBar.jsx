import { useState } from "react";
// 1. Change Link to NavLink
import { NavLink, Link, useNavigate, useParams, useLocation } from "react-router-dom";
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

  // Helper to check if a parent dropdown should be highlighted
  const isParentActive = (pathSegment) => location.pathname.includes(pathSegment);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    const langRegex = new RegExp(`^\\/(${LANGUAGES.map((l) => l.code).join("|")})`);
    const pathWithoutLang = location.pathname.replace(langRegex, "");
    navigate(`/${newLang}${pathWithoutLang || ""}`);
    setIsOpen(false);
  };

  const handleSignup = () => {
    window.location.href = "https://hfa-portals.com";
  }

  return (
    <header className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <Link to={`/${currentLang}`}>
            <img loading="lazy" src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "bar open" : "bar"} />
          <span className={isOpen ? "bar open" : "bar"} />
          <span className={isOpen ? "bar open" : "bar"} />
        </div>

        <nav className={isOpen ? "nav-links open" : "nav-links"}>
          {/* 2. Use end prop for Home so it doesn't match everything */}
          <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${currentLang}`} end className={({ isActive }) => isActive ? "active" : ""}>
            {t("home.nav.home")}
          </NavLink>

          <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${currentLang}/about`} className={({ isActive }) => isActive ? "active" : ""}>
            {t("home.nav.about")}
          </NavLink>

          {/* 3. Dropdowns: Apply 'active' class if a sub-route matches */}
          <div className={`dropdown ${activeDropdown === "cert" ? "active" : ""} ${isParentActive('certification') ? "active-parent" : ""}`}>
            <button className="nav-link" type="button" onClick={() => toggleDropdown("cert")}>
              {t("home.nav.certification")} <span className="caret">▼</span>
            </button>
            <div className="dropdown-menu">
              <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${currentLang}/certification/procedure`}>{t("home.certification.procedure")}</NavLink>
              <NavLink onClick={() => setIsOpen(!isOpen)} target="blank" to={`https://hfa-portals.com`}>{t("home.certification.apply")}</NavLink>
              <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${currentLang}/certification/termination`}>{t("home.certification.termination")}</NavLink>
            </div>
          </div>

          <div className={`dropdown ${activeDropdown === "policy" ? "active" : ""} ${isParentActive('privacy-policy') || isParentActive('terms') ? "active-parent" : ""}`}>
            <button className="nav-link" type="button" onClick={() => toggleDropdown("policy")}>
              {t("home.nav.policies")} <span className="caret">▼</span>
            </button>
            <div className="dropdown-menu">
              <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${currentLang}/fee-policy`}>{t("home.policies.feePolicy")}</NavLink>
              <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${currentLang}/complaints-committee`}>{t("home.policies.complaintsCommittee")}</NavLink>
              <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${currentLang}/provisions-for-the-use-of-hfa-logo`}>{t("home.policies.logoUseProvisions")}</NavLink>
              <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${currentLang}/hfa-impartiality-policy`}>{t("home.policies.impartialityPolicy")}</NavLink>
              <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${currentLang}/hfa-quality-policy`}>{t("home.policies.qualityPolicy")}</NavLink>
              <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${currentLang}/hfa-corporate-and-financial-governance`}>{t("home.policies.corporateGovernance")}</NavLink>
              <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${currentLang}/hfa-complaints-appeals-procedure`}>{t("home.policies.complaintsAppealsProcedure")}</NavLink>
              <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${currentLang}/halal-food-sampling-analysis-policy`}>{t("home.policies.samplingAnalysisPolicy")}</NavLink>
            </div>
          </div>

          <div className={`dropdown ${activeDropdown === "events" ? "active" : ""}  ${isParentActive('privacy-policy') || isParentActive('terms') ? "active-parent" : ""}`}>
            <button className="nav-link" type="button" onClick={() => {setIsOpen(!isOpen); toggleDropdown("events"); navigate(`/${currentLang}/our-events`)}}>
              {t("home.nav.events")} <span className="caret">▼</span>
            </button>
            <div className="dropdown-menu">
              <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${currentLang}/events/hfa-planning-2025`}>{t("home.events.planning2025")}</NavLink>
              <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${currentLang}/events/hfa-webinar-2020`}>{t("home.events.webinar2020")}</NavLink>
              <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${currentLang}/events/ulemah-meeting-jan-2019`}>{t("home.events.ulemah2019")}</NavLink>
            </div>
          </div>

          <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${currentLang}/faqs`} className={({ isActive }) => isActive ? "active" : ""}>
            {t("home.nav.faqs")}
          </NavLink>

          <NavLink onClick={() => setIsOpen(!isOpen)} to={`/${currentLang}/contact`} className={({ isActive }) => isActive ? "active" : ""}>
            {t("home.nav.contact")}
          </NavLink>

          <button onClick={() => {setIsOpen(!isOpen); handleSignup()}} className="btn-primary mobile-only">{t("home.nav.signin")}</button>
        </nav>

        <div className="language-switcher">
          <select value={currentLang} onChange={handleLanguageChange}>
            {LANGUAGES.map((lang) => (
              <option key={lang.code} value={lang.code}>{lang.label}</option>
            ))}
          </select>
        </div>

        <button onClick={() => {setIsOpen(!isOpen); handleSignup()}} className="btn-primary desktop-only">{t("home.nav.signin")}</button>
      </div>
    </header>
  );
}