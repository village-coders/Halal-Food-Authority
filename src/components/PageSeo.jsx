import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const PageSeo = ({ pageKey, image, article = false, structuredData }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentLang = location.pathname.split('/')[1] || 'en';
  
  // Site defaults
  const siteTitle = t('seo.siteTitle', 'Halal Food Authority');
  const siteUrl = 'https://halalfoodauthority.com';
  
  // Get page-specific SEO data
  const pageTitle = t(`seo.${pageKey}.title`, siteTitle);
  const pageDescription = t(`seo.${pageKey}.description`, t('seo.siteDescription', ''));
  const pageKeywords = t(`seo.${pageKey}.keywords`, t('seo.defaultKeywords', ''));
  
  // Build full title
  const fullTitle = pageTitle.includes(siteTitle) ? pageTitle : `${pageTitle} | ${siteTitle}`;
  
  // Build URL
  const pageUrl = `${siteUrl}${location.pathname}`;
  
  // Build language alternates
  const languages = ['en', 'fr', 'de', 'es', 'it'];
  const pathWithoutLang = location.pathname.replace(/^\/(en|fr|de|es|it)/, '');
  
  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={pageDescription} />
      {pageKeywords && <meta name="keywords" content={pageKeywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:locale" content={currentLang} />
      
      {image && <meta property="og:image" content={image} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={pageDescription} />
      
      {image && <meta name="twitter:image" content={image} />}
      
      {/* Canonical */}
      <link rel="canonical" href={pageUrl} />
      
      {/* Language Alternates */}
      {languages.map(lang => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${siteUrl}/${lang === 'en' ? '' : lang + '/'}${pathWithoutLang}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${pathWithoutLang}`} />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default PageSeo;