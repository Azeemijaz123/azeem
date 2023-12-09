import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Styles.css';

// import required modules
import { Autoplay, Pagination, Navigation,EffectFade } from 'swiper/modules';


const Slider = () => {
  return (
    <Swiper 
    spaceBetween={30}
    effect={'fade'}
    navigation={true}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    modules={[EffectFade,Autoplay, Navigation, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
    </SwiperSlide>
  </Swiper>
  )
}

export default Slider