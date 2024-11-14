import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { CalendarOutlined } from "@ant-design/icons";
import image from "../../../assets/images/home/Replace.png";

const posts = [
  {
    id: 1,
    date: "17 Sep, 2024",
    title: "Setting Up Post Schedules with EventBridge Scheduler & CDK",
    description:
      "One key feature of any blogging platform is the ability to schedule posts for future publication. Hashnode introduced this functionality in June 2022.",
    image: image,
  },
  {
    id: 2,
    date: "17 Sep, 2024",
    title: "Another Post Title Here",
    description:
      "Description for the second post goes here. Adjust the content as needed for each post.",
    image: image,
  },
  {
    id: 3,
    date: "17 Sep, 2024",
    title: "And Another Post Title",
    description:
      "Third post description, giving more details about the content of the post.",
    image: image,
  },
  {
    id: 4,
    date: "17 Sep, 2024",
    title: "Setting Up Post Schedules with EventBridge Scheduler & CDK",
    description:
      "One key feature of any blogging platform is the ability to schedule posts for future publication. Hashnode introduced this functionality in June 2022.",
    image: image,
  },
];

const PostCarousel = () => {
  return (
    <div className="w-full py-8 overflow-hidden margin-auto">
      <Swiper
        modules={[Autoplay]}
        centeredSlides={true}
        loop={true}
        className="pb-6"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id} className={`flex justify-between mx-3 ${post.id === 0 || post.id === 3 ? "bg-white shadow-lg bg-opacity-40" : ""}`}>
            <div className="max-w-lg bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[370px]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-grow flex-col">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <CalendarOutlined className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{post.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PostCarousel;
