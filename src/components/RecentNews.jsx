import React from 'react';
import image from '../assets/imgi_16_ezgif.com-animated-gif-maker-2-5 (1).gif'
import image2 from '../assets/imgi_17_Press-Release.png'
import image3 from '../assets/imgi_24_UK-and-Indonesia-Promote-New-Economic-Ties-768x432.png'

const newsData = [
  {
    id: 1,
    title: "Unlock Opportunities For Growth And Innovation",
    excerpt: "Explore the halal industry and unlock exciting opportunities! Whether it's food production,",
    image: image, // Replace with your actual image path
  },
  {
    id: 2,
    title: "UK Parliament Debate On Banning Non-Stun Slaughter On 9th May – HFA Perspective",
    excerpt: "A recent Early Day Motion (EDM 1394) was tabled in the UK",
    image: image2,
  },
  {
    id: 3,
    title: "Exporting Your Products To Indonesia",
    excerpt: "Halal certification will be mandatory for nearly all food and beverage products",
    image: image3,
  }
];

export default function RecentNews() {
  return (
    <section className="news-section">
      <div className="container">
        <h2 className="news-main-title">Recent News</h2>
        <div className="news-grid">
          {newsData.map((item) => (
            <div key={item.id} className="news-card">
              <div className="news-image-wrapper">
                <img loading='lazy' src={item.image} alt={item.title} />
              </div>
              <div className="news-content">
                <h3 className="news-card-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <a href="#" className="read-more">READ MORE</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}