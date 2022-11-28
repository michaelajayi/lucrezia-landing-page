import React from "react";
import { Container, Image } from "react-bootstrap";
import { Autoplay, Keyboard, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./GallerySlider.css";

const GallerySlider = ({ gallery }) => {
  return (
    <Container fluid className='px-0'>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        centeredSlides={true}
        grabCursor={true}
        slideToClickedSlide={true}
        // effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        keyboard={{ enabled: true }}
        pagination={{
          type: "fraction",
        }}
        modules={[Keyboard, Autoplay, Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 2,
          },
        }}
      >
        {gallery &&
          gallery.map((gallery, index) => (
            <SwiperSlide key={index}>
              <div className='gallery-slider-wrapper'>
                <Image src={gallery.img} className='gallery-slider-img' />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
};

export default GallerySlider;
