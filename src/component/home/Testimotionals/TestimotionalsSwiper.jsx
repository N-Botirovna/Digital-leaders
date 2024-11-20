import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay } from 'swiper/modules'; 
import avatar from '../../../assets/images/home/michael.png'

import SlideItem from "./SlideItem";

const TestimotionalsSwiper = ({reverse}) => {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={3}
      spaceBetween={10}
      modules={[ Autoplay]}
      autoplay={{
        delay:0,
        disableOnInteraction: false,
        reverseDirection: reverse,
      }}
      speed={3000}
      loop={true}
      className={`h-[70vh] w-[22vw] `}
    >
      <SwiperSlide>
        <SlideItem  text="We trust their guidance implicitly. Their strategic insights have guided us through challenges and positioned us for growth."
            name="Michael Brown"
            role="Startup Founder" avatar={avatar}/>
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem text="The team was exceptional and helped us overcome significant hurdles to reach our goals efficiently."
            name="Sophia Lee"
            role="Product Manager" 
            avatar={avatar}/>
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem  text="We trust their guidance implicitly. Their strategic insights have guided us through challenges and positioned us for growth."
            name="Michael Brown"
            role="Startup Founder" avatar={avatar}/>
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem text="The team was exceptional and helped us overcome significant hurdles to reach our goals efficiently."
            name="Sophia Lee"
            role="Product Manager" 
            avatar={avatar}/>
      </SwiperSlide>
      
    </Swiper>
  );
};

export default TestimotionalsSwiper;
