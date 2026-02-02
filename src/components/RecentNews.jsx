import React from 'react';
import { useTranslation } from 'react-i18next';
import image from '../assets/imgi_16_ezgif.com-animated-gif-maker-2-5 (1).gif';
import image2 from '../assets/imgi_17_Press-Release.png';
import image3 from '../assets/imgi_24_UK-and-Indonesia-Promote-New-Economic-Ties-768x432.png';

export default function RecentNews() {
  const { t } = useTranslation();

  // Get news items array from translations
  const newsItems = t('home.news.newsItems', { returnObjects: true });

  // Image array - keep these as imports since they're static assets
  const images = [image, image2, image3];

  return (
    <section className="news-section">
      <div className="container">
        <h2 className="news-main-title">{t('home.news.title')}</h2>
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <div key={item.id} className="news-card">
              <div className="news-image-wrapper">
                <img loading='lazy' src={images[index]} alt={item.title} />
              </div>
              <div className="news-content">
                <h3 className="news-card-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <a href="#" className="read-more">{t('home.news.readMore')}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}