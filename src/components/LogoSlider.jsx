import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Eiac from '../assets/imgi_13_8-3.png';
import Indonesia from '../assets/imgi_14_9-3.png';
import SFDA from '../assets/imgi_15_10-3.png';
import IFST from '../assets/imgi_3_11-3.png';
import Hak from '../assets/turkey-partner.png';
import WHalal from '../assets/imgi_5_1-3.png';
import MCC from '../assets/imgi_6_2-3.png';
import KMFDS from '../assets/imgi_7_3-3.png';
import HALAL from '../assets/imgi_8_4-3.png';
import HALALGim from '../assets/imgi_9_5-3.png';
import Qatar from '../assets/imgi_10_6-3.png';
import HalalInd from '../assets/imgi_11_Untitled-design-7.png';
import SASO from '../assets/imgi_12_7-3.png';


const partners = [
  { id: 1, name: 'EIAC', logo: Eiac },
  { id: 2, name: 'Halal Indonesia', logo: Indonesia },
  { id: 3, name: 'SFDA', logo: SFDA },
  { id: 4, name: 'IFST', logo: IFST },
  { id: 5, name: 'HAK Turkey', logo: Hak },
  { id: 6, name: 'World Halal Food Council', logo: WHalal },
  { id: 12, name: 'Ministry of Climate Change', logo: MCC },
  { id: 7, name: 'Korea Ministry of Food and Drugs Safety', logo: KMFDS },
  { id: 8, name: 'Halal', logo: HALAL },
  { id: 9, name: 'Halal Gimdes', logo: HALALGim },
  { id: 10, name: 'State of Qatar', logo: Qatar },
  { id: 11, name: 'SASO', logo: SASO },
  // Add more to fill the loop
];




export default function LogoSlider() {
  return (
    <section className="logo-slider-section">
      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          className="partner-swiper"
        >
          {partners.map((partner) => (
            <SwiperSlide className="swiper-slide" key={partner.id}>
              <div className="logo-wrapper">
                <img loading='lazy' src={partner.logo} alt={partner.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}