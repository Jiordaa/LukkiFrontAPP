import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import './MainBanner.scss';

import { OneSlideBanner } from "@/pages/homePage/components/mainBanner/OneSlideBanner";
import { useEffect, useState } from 'react';
import { getBannerInfo } from '@/shared/api/banners/getBannerInfo';

export default function MainBanner() {
  const [bannerList, setBannerList] = useState<any[] | null>(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const bannersResponse = await getBannerInfo('main-banner');
        if (bannersResponse) {
          setBannerList(bannersResponse);
        }
      } catch (e) {
        console.error("Ошибка загрузки баннеров", e);
      }
    };

    fetchBanners();
  }, []);

  return (
    <Swiper
      className="mySwiper"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {bannerList &&
        bannerList.map((oneSlide: any, index: number) => (
          <SwiperSlide key={index}>
            <OneSlideBanner
              imgSrc={oneSlide?.src}
              linkHref={oneSlide?.href}
              linkTitle={oneSlide?.title}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}