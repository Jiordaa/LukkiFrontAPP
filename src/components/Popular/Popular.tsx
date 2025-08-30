'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Popular.css';
import { Antonio } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"], weight: "400" });

export default function Popular() {
  const popularProducts = Array.from({ length: 10 }).map((_, i) => ({
    name: `Popular Item ${i + 1}`,
    price: `$${(40 + i * 3).toFixed(2)}`
  }));

  return (
    <section className={`popular-section ${antonio.className}`}>
      <h2 className="popular-title">Most popular items</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={'auto'}
        className="popular-swiper"
      >
        {popularProducts.map((item, index) => (
          <SwiperSlide key={index} className="popular-slide">
            <div className="popular-card">
              <div className="popular-info">
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
