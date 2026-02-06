import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Seo = ({
  title,
  description,
  image,
  article = false,
  canonicalUrl,
  keywords = [],
  lang,
  structuredData,
}) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentLanguage = lang || i18n.language;

  // Default values
  const siteTitle = t('seo.siteTitle', 'Your Site Name');
  const siteDescription = description || t('seo.siteDescription', 'Default site description');
  const siteUrl = 'https://yourdomain.com';
  const siteImage = image || `${siteUrl}/og-image.jpg`;
  
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const pageUrl = canonicalUrl || `${siteUrl}${location.pathname}`;
  const pageType = article ? 'article' : 'website';

  // Language alternates
  const languageAlternates = ['en', 'fr', 'de', 'es', 'it'].map(lang => ({
    hrefLang: lang,
    href: `${siteUrl}/${lang}${location.pathname.replace(/^\/[a-z]{2}/, '')}`,
  }));

  return (
    <HelmetProvider>
      <Helmet htmlAttributes={{ lang: currentLanguage }}>
        {/* Basic Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={siteDescription} />
        {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={pageType} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />
        <meta property="og:locale" content={currentLanguage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={siteImage} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />
        
        {/* Language Alternates */}
        {languageAlternates.map(({ hrefLang, href }) => (
          <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Structured Data */}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
      </Helmet>
    </HelmetProvider>
  );
};

export default Seo;