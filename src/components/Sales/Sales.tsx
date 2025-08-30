/*'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Sales.css';
import { Antonio } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"], weight: "400" });

export default function Sales() {
  return (
    <section className={`sales-section ${antonio.className}`}>
      <h2 className="sales-title">New items on sale</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={'auto'} // чтобы slides имели фиксированную ширину из CSS
        className="sales-swiper"
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <SwiperSlide key={index} className="sales-slide">
            <div className="sales-card">
              <span className="sales-text">Item {index + 1}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}*/

/*'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Sales.css';
import { Antonio } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"], weight: "400" });

export default function Sales() {
  return (
    <section className={`sales-section ${antonio.className}`}>
      <h2 className="sales-title">New items on sale</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={'auto'} // размеры из CSS
        className="sales-swiper"
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <SwiperSlide key={index} className="sales-slide">
            <div className="sales-card">
              <span className="sales-text">Item {index + 1}</span>

              <div className="sales-info">
                <p className="product-name">Product Name {index + 1}</p>
                <p className="product-price">$99.99</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
*/

'use client'

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Sales.css';
import { Antonio } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"], weight: "400" });

export default function Sales() {
  const [activeTab, setActiveTab] = useState<'Men' | 'Women'>('Men');

  const products = {
    Men: Array.from({ length: 8 }).map((_, i) => ({
      name: `Men's Item ${i + 1}`,
      price: `$${(50 + i * 5).toFixed(2)}`
    })),
    Women: Array.from({ length: 8 }).map((_, i) => ({
      name: `Women's Item ${i + 1}`,
      price: `$${(60 + i * 6).toFixed(2)}`
    }))
  };

  return (
    <section className={`sales-section ${antonio.className}`}>
      <h2 className="sales-title">New items on sale</h2>

      {/* Переключатели */}
      <div className="sales-tabs-container">
        <div className="sales-tabs">
          {['Men', 'Women'].map(tab => (
            <span
              key={tab}
              onClick={() => setActiveTab(tab as 'Men' | 'Women')}
              className={`sales-tab-text ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="sales-tabs-line"></div>
      </div>

      {/* Слайдер */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={'auto'}
        className="sales-swiper"
      >
        {products[activeTab].map((item, index) => (
          <SwiperSlide key={index} className="sales-slide">
            <div className="sales-card">
              <div className="sales-info">
                <p className="product-name">{item.name}</p>
                <p className="product-price">{item.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}



