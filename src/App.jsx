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
import TerminationProcedure from "./pages/TerminationProcedure";
import FeePolicy from "./pages/FeePolicy";
import ComplaintsCommittee from "./pages/ComplaintsCommittee";
import ProvisionForUseOfHfaLogo from "./pages/ProvisionForUseOfHfaLogo";
import HfaImpartialityPolicy from "./pages/HfaImpartialityPolicy";
import HfaQualityPolicy from "./pages/HfaQualityPolicy";
import CoperateAndFinanceGovernment from "./pages/CoperateAndFinanceGovernment";
import ComplaintsAndAppealsProcedure from "./pages/ComplaintsAndAppealsProcedure";
import FoodSamplingAndAnalysisPolicy from "./pages/FoodSamplingAndAnalysisPolicy";
import FAQPage from "./pages/FAQPage";
import Contact from "./pages/Contact";
import HFAEventPlanning2025 from './pages/HFAEventPlanning2025'
import HFAWebinar2020 from "./pages/HFAWebinar2020";
import HFAUleemahMeeting2019 from "./pages/HFAUleemahMeeting2019";

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
        <Route path="/certification/procedure" element={<CertificationProcedure />} />
        <Route path="/certification/termination" element={<TerminationProcedure />} />
        <Route path="/fee-policy" element={<FeePolicy />} />
        <Route path="/complaints-committee" element={<ComplaintsCommittee />} />
        <Route path="/provisions-for-the-use-of-hfa-logo" element={<ProvisionForUseOfHfaLogo />} />
        <Route path="/hfa-impartiality-policy" element={<HfaImpartialityPolicy />} />
        <Route path="/hfa-quality-policy" element={<HfaQualityPolicy />} />
        <Route path="/hfa-corporate-and-financial-governance" element={<CoperateAndFinanceGovernment />} />
        <Route path="/hfa-complaints-appeals-procedure" element={<ComplaintsAndAppealsProcedure />} />
        <Route path="/halal-food-sampling-analysis-policy" element={<FoodSamplingAndAnalysisPolicy />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events/hfa-planning-2025" element={<HFAEventPlanning2025 />} />
        <Route path="/events/hfa-webinar-2020" element={<HFAWebinar2020 />} />
        <Route path="/events/ulemah-meeting-jan-2019/" element={<HFAUleemahMeeting2019 />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
