import { Swiper } from "swiper/react";
import SwiperCore, { Lazy, Navigation } from "swiper/core";

import "swiper/swiper-bundle.css";
// import "~swiper/swiper.min.css";
// import "~swiper/components/navigation/navigation.min.css";

import styles from "./Carousel.module.scss";

SwiperCore.use([Navigation, Lazy]);

const Carousel = ({ children }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        navigation={true}
        loop={true}
        lazy={true}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </>
  );
};

export default Carousel;
