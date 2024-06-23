import React, { useState } from "react";
import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const ProductDetailsSlider = ({ images }) => {
  const [active, setActive] = useState();
  return (
    <div className="flex">
      <div className="w-1/6 mr-1 lg:mr-2.5">
        <div className="btn-prev-slide cursor-pointer flex items-center justify-center my-2.5 w-[56px] lg:w-[70px]">
          <BsChevronUp />
        </div>
        <Swiper
          onSwiper={setActive}
          loop={true}
          slidesPerView={5}
          navigation={{
            nextEl: ".btn-next-slide",
            prevEl: ".btn-prev-slide",
          }}
          direction="vertical"
          modules={[Navigation, Thumbs]}
          className={
            "relative w-full h-[350px] lg:h-[440px] xl:h-[490px] flex-1"
          }
        >
          {images.map((img, i) => (
            <SwiperSlide
              key={i}
              className=" cursor-pointer swiper-thumb-img-container"
            >
              <img
                src={img}
                alt="product images"
                className="lg:w-[70px] w-[56px] border-2"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="btn-next-slide cursor-pointer flex items-center justify-center my-2.5  w-[56px] lg:w-[70px]">
          <BsChevronDown />
        </div>
      </div>

      <Swiper
        loop={true}
        spaceBetween={10}
        modules={[Navigation, Thumbs]}
        className={"w-full flex-1"}
        thumbs={{ swiper: active && !active.destroyed ? active : null }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt="product images"
              className="w-[450px] cursor-zoom-in"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductDetailsSlider;
