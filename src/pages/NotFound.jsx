import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PageSeo from '../components/PageSeo';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageSeo pageKey="notFound" />
      <div style={{ textAlign: 'center', padding: '50px 20px' }}>
        <h1>404</h1>
        <h2>{t('notFound.title', 'Page Not Found')}</h2>
        <p>{t('notFound.message', 'The page you are looking for does not exist.')}</p>
        <Link to="/" style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#2A5C3D',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          marginTop: '20px'
        }}>
          {t('notFound.backHome', 'Go to Homepage')}
        </Link>
      </div>
    </>
  );
};

export default NotFound;