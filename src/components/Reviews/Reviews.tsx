'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Reviews.css';

export default function Reviews() {
    const reviews = [
        {
            name: 'Olenn.a',
            product: 'The Slim Taper Jeans',
            rating: 5,
            text: 'Absolutely love these jeans! The cut is flattering and they feel super comfortable all day.',
            image: '/images/review1.jpg',
        },
        {
            name: 'John D.',
            product: 'Classic Leather Jacket',
            rating: 4,
            text: 'Great quality and fit. Feels premium and stylish.',
            image: '/images/review2.jpg',
        },
        {
            name: 'Sophie M.',
            product: 'Oversized Sweater',
            rating: 5,
            text: 'So cozy and warm, my favorite for winter!',
            image: '/images/review3.jpg',
        },
    ];

    return (
        <section className="reviews-section">
            <Swiper
                modules={[Navigation]}
                navigation
                loop
                className="reviews-swiper"
            >
                {reviews.map((rev, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="review-slide">
                            <div className="review-text">
                                <span className="review-subtitle">People Are Talking</span>
                                <div className="review-rating">
                                    {'★'.repeat(rev.rating)}
                                </div>
                                <p className="review-quote">“{rev.text}”</p>
                                <p className="review-author">-- {rev.name}, {rev.product}</p>
                            </div>
                            <div className="review-image">
                                <img src={rev.image} alt={rev.product} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
