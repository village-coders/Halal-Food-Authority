import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const { t } = useTranslation();
  const location = useLocation();
  
  // Skip breadcrumb on home page
  if (location.pathname === '/' || location.pathname.match(/^\/(en|fr|de|es|it)\/?$/)) {
    return null;
  }
  
  const pathnames = location.pathname.split('/').filter(x => x);
  
  // Remove language code for display
  const displayPaths = pathnames.filter(path => !['en', 'fr', 'de', 'es', 'it'].includes(path));
  
  if (displayPaths.length === 0) return null;

  return (
    <nav aria-label="breadcrumb" className="breadcrumb" style={{
      padding: '10px 20px',
      marginBottom: '20px',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #dee2e6'
    }}>
      <ol style={{
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: 0,
        padding: 0,
        fontSize: '14px'
      }}>
        <li style={{ marginRight: '5px' }}>
          <Link 
            to={`/${pathnames[0] || 'en'}`} 
            style={{ 
              color: '#2A5C3D', 
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            {t('seo.breadcrumb.home', 'Home')}
          </Link>
          <span style={{ margin: '0 5px', color: '#6c757d' }}>/</span>
        </li>
        
        {displayPaths.map((path, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === displayPaths.length - 1;
          
          // Clean up path for display
          const cleanPath = path
            .replace(/-/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());
          
          const displayName = t(`seo.breadcrumb.${path}`, cleanPath);
          
          return (
            <li key={path} style={{ marginRight: '5px' }}>
              {isLast ? (
                <span style={{ color: '#6c757d' }}>{displayName}</span>
              ) : (
                <>
                  <Link 
                    to={routeTo} 
                    style={{ 
                      color: '#2A5C3D', 
                      textDecoration: 'none',
                      fontWeight: '500'
                    }}
                  >
                    {displayName}
                  </Link>
                  <span style={{ margin: '0 5px', color: '#6c757d' }}>/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;