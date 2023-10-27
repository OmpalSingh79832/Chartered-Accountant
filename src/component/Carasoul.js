import Buss1 from "../img/buss1.webp";
import Buss2 from "../img/buss2.jpeg";
import Buss3 from "../img/buss3.webp";
import Buss4 from "../img/buss4.webp";
import Buss5 from "../img/buss5.webp";
import Buss from "../img/buss.jpg"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Import Swiper styles

import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carasoul() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src= {Buss1}  alt='' /></SwiperSlide>
        <SwiperSlide><img src={Buss2} alt='' /></SwiperSlide>
        <SwiperSlide><img src={Buss3} alt='' /></SwiperSlide>
        <SwiperSlide><img src={Buss4} alt='' /></SwiperSlide>
        <SwiperSlide><img src={Buss5} alt='' /></SwiperSlide>
        <SwiperSlide><img src={Buss} alt='' /></SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
