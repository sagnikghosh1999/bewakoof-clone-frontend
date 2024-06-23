import React from "react";

import ProductCard from "../Products/ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

// import required modules
import { Navigation, Autoplay } from "swiper";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeProductsContainer = ({ productData }) => {
  return (
    <div className="sm:px-4 px-2 bg-[url('https://images.bewakoof.com/web/bg-web-mc-land-page.svg')] bg-no-repeat w-full w-full py-3 bg-cover">
      <div className=" w-full px-4 py-3 uppercase lg:px-5 sm:px-auto font-[500] text-[18px] tracking-[1.5px] md:text-center">
        Biggest deals !
      </div>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={0}
        slidesPerGroup={2}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 4,
            slidesPerGroup: 4,
          },
          840: {
            slidesPerView: 5,
            spaceBetween: 4,
            slidesPerGroup: 5,
          },
        }}
        navigation={{
          nextEl: ".btn-next-slide",
          prevEl: ".btn-prev-slide",
        }}
        modules={[Navigation, Autoplay]}
        className={"relative my-4 md:my-6"}
      >
        {productData.slice(0, 15).map((item, i) => (
          <SwiperSlide className={"w-full"} key={i}>
            <ProductCard product={item} key={i} />
          </SwiperSlide>
        ))}
        <div className="btn-next-slide absolute top-[44%] flex justify-center items-center cursor-pointer  text-[10px] lg:text-[16px] bg-opacity-60 right-0 z-20 h-8 w-8 lg:h-10 lg:w-10 bg-white rounded-full">
          <BsChevronRight />
        </div>
        <div className="btn-prev-slide absolute top-[44%] flex justify-center items-center cursor-pointer text-[10px] lg:text-[16px] bg-opacity-60 left-0 z-20 h-8 w-8 lg:h-10 lg:w-10 bg-white rounded-full">
          <BsChevronLeft />
        </div>
      </Swiper>
      <div className=" w-full px-4 py-3 cursor-pointer lg:px-5 sm:px-auto underline text-[#42a2a2] font-[600] text-[14px] leading-[18px] text-center">
        <Link to="/products">Explore All</Link>
      </div>
    </div>
  );
};

export default HomeProductsContainer;
