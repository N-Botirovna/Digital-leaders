import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image from "../../../assets/images/home/Savanna.png";
import image1 from "../../../assets/images/home/Savanna1.png";
import image2 from "../../../assets/images/home/Savanna2.png";
import image3 from "../../../assets/images/home/Savanna.png";
import image4 from "../../../assets/images/home/Savanna3.png";
import LeaderCard from '../TopLeaders/LeaderCard';

const teamMembers = [
  {
    name: "Savannah Nguyen",
    role: "Community Manager",
    image: image,
  },
  {
    name: "Savannah Nguyen",
    role: "Community Manager",
    image: image1,
  },
  {
    name: "Savannah Nguyen",
    role: "Community Manager",
    image: image2,
  },
  {
    name: "Savannah Nguyen",
    role: "Community Manager",
    image: image3,
  },
  {
    name: "Savannah Nguyen",
    role: "Community Manager",
    image: image4,
  },
];

const TeamSwiper = () => {
  return (
    <div className="w-full py-6">
      <Swiper
        autoplay
        slidesPerView={5}
        className="pb-6"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <LeaderCard 
              image={member.image} 
              name={member.name} 
              position={member.role} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSwiper;

