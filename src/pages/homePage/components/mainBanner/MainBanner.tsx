import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import './MainBanner.scss';

import {OneSlideBanner} from "@/pages/homePage/components/mainBanner/OneSlideBanner";

export default function MainBanner() {

    return (
        <Swiper className="mySwiper"
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <OneSlideBanner imgSrc='/banner/logo.jpg' linkHref="#" linkTitle="SHOP ALL"/>
            </SwiperSlide>
            <SwiperSlide>
                <OneSlideBanner imgSrc='/banner/second-slide.png' linkHref="#" linkTitle="SHOP ALL"/>
            </SwiperSlide>
            <SwiperSlide>
                <OneSlideBanner imgSrc='/banner/third-slide.png' linkHref="#" linkTitle="SHOP ALL"/>
            </SwiperSlide>
        </Swiper>
    );
}










