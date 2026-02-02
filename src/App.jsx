import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Home from "./pages/Home";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import CertificationProcedure from "./pages/CertificationProcedure";

const SUPPORTED_LANGUAGES = ["en", "fr", "de", "es", "it"];

function App() {
  const browserLang = navigator.language.split("-")[0];
  const defaultLang = SUPPORTED_LANGUAGES.includes(browserLang)
    ? browserLang
    : "en";

  return (
    <Router>
      <Routes>
        {/* Redirect root to browser language or fallback */}
        <Route path="/" element={<Navigate to={`/${defaultLang}`} replace />} />

        {/* All routes prefixed with language */}
        <Route path="/:lng/*" element={<MainContent />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to={`/${defaultLang}`} replace />} />
      </Routes>
    </Router>
  );
}

function MainContent() {
  const { lng } = useParams();
  const { i18n } = useTranslation();



  // Sync i18n with URL language
  useEffect(() => {
    if (!lng || !SUPPORTED_LANGUAGES.includes(lng)) {
      // Invalid language in URL → navigate to default
      window.location.replace("/en");
      return;
    }

    if (i18n.language !== lng) {
      i18n.changeLanguage(lng); // ✅ Must call this!
    }
  }, [lng, i18n]);

  // Set <html lang="...">
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/certification/procedure" element={<CertificationProcedure/>} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
