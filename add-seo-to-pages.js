// This script helps you quickly add SEO to all your pages
import fs  from 'fs';
import path from 'path';

// List all your page components
const pages = [
  'AboutPage.jsx',
  'CertificationProcedure.jsx',
  'TerminationProcedure.jsx',
  'FeePolicy.jsx',
  'ComplaintsCommittee.jsx',
  'ProvisionForUseOfHfaLogo.jsx',
  'HfaImpartialityPolicy.jsx',
  'HfaQualityPolicy.jsx',
  'CoperateAndFinanceGovernment.jsx',
  'ComplaintsAndAppealsProcedure.jsx',
  'FoodSamplingAndAnalysisPolicy.jsx',
  'FAQPage.jsx',
  'Contact.jsx',
  'HFAEventPlanning2025.jsx',
  'HFAWebinar2020.jsx',
  'HFAUleemahMeeting2019.jsx',
  'HHIC2019.jsx',
  'HHIC2018.jsx',
  'HHIC2017.jsx',
  'HHIC2016.jsx',
  'HHIC2015.jsx',
  'MuslimLifestyleExpo.jsx',
  'FindMoreHalalFoodAuthority.jsx',
  'FoodAndBeverages.jsx',
  'Cosmetics.jsx',
  'Pharmaceuticals.jsx',
  'Ingredients.jsx',
  'AdditivesAndAromas.jsx',
  'PackagingMaterials.jsx',
  'UKParliamentDebateOnBanning.jsx',
  'OurClients.jsx',
  'ExportingYourProductsToIndonesia.jsx',
  'Events.jsx'
];

// Template to add to each page
const seoTemplate = `
import { useTranslation } from 'react-i18next';
import PageSeo from '../components/PageSeo';
import Breadcrumb from '../components/Breadcrumb';

// Add inside your component function:
// const { t } = useTranslation();
// 
// return (
//   <>
//     <PageSeo pageKey="yourPageKey" />
//     <Breadcrumb />
//     {/* Your existing JSX */}
//   </>
// );
`;

console.log('Add this template to each page:');
console.log(seoTemplate);
console.log('\nPage keys to use in PageSeo component:');

pages.forEach(page => {
  const pageName = page.replace('.jsx', '');
  const pageKey = pageName
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '')
    .replace(/-page$/, '');
  
  console.log(`- ${pageName}: pageKey="${pageKey}"`);
});