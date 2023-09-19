import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { featureCategories } from "../../../utils/New Data/categories";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

const FeatureCategories = () => {
  return (
    <div className="mt-10 w-full relative top-[8.09rem] sm:top-[8.2rem] md:top-[9.4rem] lg:top-[9.3rem] md:px-[3rem] lg:px-[4rem] xl:px-[5rem]  overflow-hidden">
      <div className="flex items-end">
        <h2 className="!ml-0">Feature categories</h2>
        <p className="text-gray-400 text-sm">
          The most in-demand categories among buyers.
        </p>
      </div>
      <div className="bg-white py-4 mt-5 rounded-lg">
        <Swiper
          slidesPerView={9}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {featureCategories.map((cat, idx) => {
            return (
              <div>
                <SwiperSlide>
                  <div className="rounded-full w-full overflow-hidden border p-2">
                    <img src={cat.image} alt="" />
                  </div>
                  <p className="text-center text-sm pt-2">{cat.name}</p>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureCategories;
