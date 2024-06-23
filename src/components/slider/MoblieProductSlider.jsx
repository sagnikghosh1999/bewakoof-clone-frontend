import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const MoblieProductSlider = ({ images }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: true,
          },
        }}
        autoplay={{
          delay: 4000,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className={"relative"}
      >
        {images.map((img, i) => (
          <SwiperSlide className={"w-full"} key={i}>
            <div>
              <img src={img} alt="product " />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MoblieProductSlider;
