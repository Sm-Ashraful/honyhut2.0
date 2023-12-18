// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function CategorySlider({ categories, handleCategory }) {
  //  h-[65px] h-[85px]
  if (!categories) return null;
  return (
    <div className="padding_inside w-full  mt-5">
      <div className="bg-[#0c1228] rounded-md ">
        <Swiper
          slidesPerView={5}
          navigation={true}
          modules={[Navigation]}
          className="w-full h-full "
        >
          {categories.map((category, idx) => {
            return (
              <SwiperSlide
                key={idx}
                onClick={() => handleCategory(category._id)}
                className="px-3 min-w-fit text-white py-3  !flex justify-center items-center text-center hover:bg-black/10 cursor-pointer"
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
