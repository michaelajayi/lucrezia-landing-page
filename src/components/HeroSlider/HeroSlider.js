import React, { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HeroSlider.css";
import { Autoplay, Pagination, EffectFade, Keyboard, Navigation } from "swiper";
import Bg from "../../assets/img/lucrezia-bg.png";
import BgTwo from "../../assets/img/lucrezia-hero.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Hero from "../Hero/Hero";

const HeroSlider = () => {
  const id = useId();

  const sliders = [
    {
      bg: Bg,
      heading: "Discover the Height of Luxury Living",
      subHeading: "In Africa's Ultra Executive Neighbourhood",
    },

    {
      bg: BgTwo,
      heading: "Discover the Height of Luxury Living",
      subHeading: "In Africa's Ultra Executive Neighbourhood",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        keyboard={{ enabled: true }}
        effect={"fade"}
        modules={[Autoplay, Pagination, Keyboard, Navigation, EffectFade]}
        className='mySwiper'
      >
        {sliders.map((slider, index) => (
          <SwiperSlide key={`${index}-${id}`}>
            <Hero slider={slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSlider;
