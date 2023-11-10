import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { categories } from "@/utils/New Data/categories";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function CategorySlider() {
  const [swiperRef, setSwiperRef] = useState(null);

  //  h-[65px] h-[85px]

  return (
    <div className="padding_inside w-full  mt-5">
      <div className="bg-[#0c1228] rounded-md">
        <Swiper
          slidesPerView={5}
          onSwiper={setSwiperRef}
          navigation={true}
          modules={[Navigation]}
          className="w-full h-full "
        >
          {categories.map((category, idx) => {
            return (
              <SwiperSlide
                key={idx}
                className="pl-5 text-white  !flex justify-center items-center text-center hover:bg-black/10"
              >
                {category.name}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
