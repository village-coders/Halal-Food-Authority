import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Add this

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
import FindMoreHalalFoodAuthority from "./pages/FindMoreHalalFoodAuthority";
import ScrollToTop from "./components/ScrollToTop";
import FoodAndBeverages from "./pages/FoodAndBeverages";
import Cosmetics from "./pages/Cosmetics";
import Pharmaceuticals from "./pages/Pharmaceuticals";
import Ingredients from "./pages/Ingredients";
import AdditivesAndAromas from "./pages/AdditivesAndAromas";
import PackagingMaterials from "./pages/PackagingMaterials";
import UKParliamentDebateOnBanning from "./pages/UKParliamentDebateOnBanning";
import OurClients from "./pages/OurClients";
import ExportingYourProductsToIndonesia from "./pages/ExportingYourProductsToIndonesia";
import Events from "./pages/Events";
import HHIC2019 from "./pages/hhic2019";
import HHIC2018 from "./pages/hhic2018";
import HHIC2017 from "./pages/hhic2017";
import HHIC2016 from "./pages/hhic2016";
import HHIC2015 from "./pages/hhic2015";
import MuslimExpo from "./pages/MuslimLifestyleExpo";

// Import SEO components
import PageSeo from "./components/PageSeo";
import NotFound from "./pages/Notfound";
// import Breadcrumb from "./components/Breadcrumb";

const SUPPORTED_LANGUAGES = ["en", "fr", "de", "es", "it"];

function App() {
  const browserLang = navigator.language.split("-")[0];
  const defaultLang = SUPPORTED_LANGUAGES.includes(browserLang)
    ? browserLang
    : "en";

  return (
    <HelmetProvider>
    <Router>
      <ScrollToTop />
      <GlobalSeo /> {/* Add Global SEO */}
      <Routes>
        {/* Redirect root to browser language or fallback */}
        <Route path="/" element={<Navigate to={`/${defaultLang}`} replace />} />

        {/* All routes prefixed with language */}
        <Route path="/:lng/*" element={<MainContent />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to={`/${defaultLang}`} replace />} />
      </Routes>
    </Router>
    </HelmetProvider>
  );
}

// Global SEO Component
function GlobalSeo() {
  const { t } = useTranslation();
  
  return (
    <Helmet>
      {/* Global Meta Tags */}
      <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
      <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
      
      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#2A5C3D" />
      
      {/* Global Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Halal Food Authority",
          "url": "https://halalfoodauthority.com",
          "logo": "https://halalfoodauthority.com/favicon.png",
          "sameAs": [
            "https://facebook.com/halalfoodauthority",
            "https://twitter.com/halalauthority",
            "https://linkedin.com/company/halal-food-authority"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+44-XXX-XXX-XXXX",
            "contactType": "customer service",
            "availableLanguage": ["English", "French", "German", "Spanish", "Italian"]
          }
        })}
      </script>
    </Helmet>
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
      i18n.changeLanguage(lng);
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
        {/* Home Page with SEO */}
        <Route path="/" element={
          <>
            <PageSeo pageKey="home" />
            <Home />
          </>
        } />
        
        {/* About Page */}
        <Route path="/about" element={
          <>
            <PageSeo pageKey="about" />
            
            <AboutPage />
          </>
        } />
        
        {/* Certification Pages */}
        <Route path="/certification/procedure" element={
          <>
            <PageSeo pageKey="certificationProcedure" />
            
            <CertificationProcedure />
          </>
        } />
        
        <Route path="/certification/termination" element={
          <>
            <PageSeo pageKey="terminationProcedure" />
            
            <TerminationProcedure />
          </>
        } />
        
        {/* Policies */}
        <Route path="/fee-policy" element={
          <>
            <PageSeo pageKey="feePolicy" />
            
            <FeePolicy />
          </>
        } />
        
        <Route path="/complaints-committee" element={
          <>
            <PageSeo pageKey="complaintsCommittee" />
            
            <ComplaintsCommittee />
          </>
        } />
        
        <Route path="/provisions-for-the-use-of-hfa-logo" element={
          <>
            <PageSeo pageKey="hfaLogoProvisions" />
            
            <ProvisionForUseOfHfaLogo />
          </>
        } />
        
        <Route path="/hfa-impartiality-policy" element={
          <>
            <PageSeo pageKey="impartialityPolicy" />
            
            <HfaImpartialityPolicy />
          </>
        } />
        
        <Route path="/hfa-quality-policy" element={
          <>
            <PageSeo pageKey="qualityPolicy" />
            
            <HfaQualityPolicy />
          </>
        } />
        
        <Route path="/hfa-corporate-and-financial-governance" element={
          <>
            <PageSeo pageKey="corporateGovernance" />
            
            <CoperateAndFinanceGovernment />
          </>
        } />
        
        <Route path="/hfa-complaints-appeals-procedure" element={
          <>
            <PageSeo pageKey="complaintsAppeals" />
            
            <ComplaintsAndAppealsProcedure />
          </>
        } />
        
        <Route path="/halal-food-sampling-analysis-policy" element={
          <>
            <PageSeo pageKey="foodSampling" />
            
            <FoodSamplingAndAnalysisPolicy />
          </>
        } />
        
        {/* FAQ */}
        <Route path="/faqs" element={
          <>
            <PageSeo pageKey="faq" />
            
            <FAQPage />
          </>
        } />
        
        {/* Contact */}
        <Route path="/contact" element={
          <>
            <PageSeo pageKey="contact" />
            
            <Contact />
          </>
        } />
        
        {/* Events */}
        <Route path="/events/hfa-planning-2025" element={
          <>
            <PageSeo pageKey="eventPlanning2025" />
            
            <HFAEventPlanning2025 />
          </>
        } />
        
        <Route path="/events/hfa-webinar-2020" element={
          <>
            <PageSeo pageKey="webinar2020" />
            
            <HFAWebinar2020 />
          </>
        } />
        
        <Route path="/events/ulemah-meeting-jan-2019/" element={
          <>
            <PageSeo pageKey="ulemahMeeting2019" />
            
            <HFAUleemahMeeting2019 />
          </>
        } />
        
        {/* HHIC Events */}
        <Route path="/events/hhic2019/" element={
          <>
            <PageSeo pageKey="hhic2019" />
            
            <HHIC2019 />
          </>
        } />
        
        <Route path="/events/hhic2018/" element={
          <>
            <PageSeo pageKey="hhic2018" />
            
            <HHIC2018 />
          </>
        } />
        
        <Route path="/events/hhic2017/" element={
          <>
            <PageSeo pageKey="hhic2017" />
            
            <HHIC2017 />
          </>
        } />
        
        <Route path="/events/hhic2016/" element={
          <>
            <PageSeo pageKey="hhic2016" />
            
            <HHIC2016 />
          </>
        } />
        
        <Route path="/events/hhic2015/" element={
          <>
            <PageSeo pageKey="hhic2015" />
            
            <HHIC2015 />
          </>
        } />
        
        {/* Muslim Expo */}
        <Route path="/events/muslimlife2016/" element={
          <>
            <PageSeo pageKey="muslimExpo" />
            
            <MuslimExpo />
          </>
        } />
        
        {/* Find More */}
        <Route path="/find-more-halal-food-authourity/" element={
          <>
            <PageSeo pageKey="findMore" />
            
            <FindMoreHalalFoodAuthority />
          </>
        } />
        
        {/* Products Categories */}
        <Route path="/food-and-beverages/" element={
          <>
            <PageSeo pageKey="foodBeverages" />
            
            <FoodAndBeverages />
          </>
        } />
        
        <Route path="/cosmetics/" element={
          <>
            <PageSeo pageKey="cosmetics" />
            
            <Cosmetics />
          </>
        } />
        
        <Route path="/pharmaceuticals/" element={
          <>
            <PageSeo pageKey="pharmaceuticals" />
            
            <Pharmaceuticals />
          </>
        } />
        
        <Route path="/ingredients/" element={
          <>
            <PageSeo pageKey="ingredients" />
            
            <Ingredients />
          </>
        } />
        
        <Route path="/additives-aromas/" element={
          <>
            <PageSeo pageKey="additivesAromas" />
            
            <AdditivesAndAromas />
          </>
        } />
        
        <Route path="/packaging-materials/" element={
          <>
            <PageSeo pageKey="packaging" />
            
            <PackagingMaterials />
          </>
        } />
        
        {/* UK Parliament */}
        <Route path="/uk-parliament-debate-on-banning-non-stun-slaughter-on-9th-may-hfa-perspective/" element={
          <>
            <PageSeo pageKey="ukParliamentDebate" />
            
            <UKParliamentDebateOnBanning />
          </>
        } />
        
        {/* Our Clients */}
        <Route path="/our-clients/" element={
          <>
            <PageSeo pageKey="ourClients" />
            
            <OurClients />
          </>
        } />
        
        {/* Exporting */}
        <Route path="/exporting-your-products-to-indonesia/" element={
          <>
            <PageSeo pageKey="exportIndonesia" />
            
            <ExportingYourProductsToIndonesia />
          </>
        } />
        
        {/* Events List */}
        <Route path="/our-events/" element={
          <>
            <PageSeo pageKey="eventsList" />
            
            <Events />
          </>
        } />

        {/* NotFound page */}

        <Route
          path="*"
          element={
            <>
              <PageSeo pageKey="notFound" />
              <NotFound />
            </>
          }
        />
      </Routes> 
      <Footer />
    </>
  );
}

export default App;