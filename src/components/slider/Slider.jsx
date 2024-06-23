import React from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Sliders({ data }) {
  //   SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 1,
            loop: true,
          },
        }}
        autoplay={{
          delay: 4000,
        }}
        navigation={{
          nextEl: ".btn-next-slide",
          prevEl: ".btn-prev-slide",
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className={"relative"}
      >
        {data.map((e, i) => (
          <SwiperSlide className={"w-full"} key={i}>
            <Link to="/products/men-printed-shirts">
              <img src={e.url} alt={e.title} />
            </Link>
          </SwiperSlide>
        ))}
        <div className="btn-next-slide absolute top-[44%] flex justify-center items-center cursor-pointer  text-[12px] lg:text-[20px] bg-opacity-60 right-4 md:right-8 z-20 h-10 w-10 lg:h-14 lg:w-14 bg-white rounded-full">
          <BsChevronRight />
        </div>
        <div className="btn-prev-slide absolute top-[44%] flex justify-center items-center cursor-pointer text-[12px] lg:text-[20px] bg-opacity-60 left-4 md:left-8 z-20 h-10 w-10 lg:h-14 lg:w-14 bg-white rounded-full">
          <BsChevronLeft />
        </div>
      </Swiper>
    </>
  );
}
