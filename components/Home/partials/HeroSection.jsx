import React from "react";
import Listing from "../../../Assets/listing-box.svg";
import Image from "next/image";
import { categories } from "@/utils/New Data/categories";
import { MdKeyboardArrowRight } from "react-icons/md";
import Card from "@/components/Update/Card";
import Slider from "@/components/Update/Slider";

import { mostPopularProducts } from "@/utils/New Data/MostPopularProducts";

const sliderCat = [
  {
    name: "Electronics",
    image: "/sliderCat/e_ent.png",
  },
  {
    name: "Life Style X Fashion",
    image: "/sliderCat/lf_ent.png",
  },
  {
    name: "Hardware X Machinery",
    image: "/sliderCat/h_ent.png",
  },
  {
    name: "Online Show",
    image: "/sliderCat/os_ent.png",
  },
];

const HeroSection = () => {
  return (
    <div
      className="w-full relative md:px-[3rem] lg:px-[4rem] xl:px-[5rem] h-[580px] py-5"
      style={{
        backgroundImage: `url('hks_gsol_bg.jpg')`, // Use backticks and quotes around the URL
        backgroundPosition: "top",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full flex gap-5 ">
        <div className="w-1/4 bg-white rounded-lg">
          <h2 className="relative flex items-center gap-3 py-5">
            <span>
              <Image src={Listing} alt="list-icon" width={20} height={20} />
            </span>
            <span>Categories</span>
          </h2>
          <div className="px-5 text-[#2d2d2d]">
            {categories.map((category, idx) => {
              return (
                <p
                  key={idx}
                  className="text-[15px] py-1.5 flex justify-between"
                >
                  <span> {category.name}</span>
                  <span>
                    <MdKeyboardArrowRight />
                  </span>
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex-1 rounded-lg overflow-hidden">
          <div className="h-[70%] max-w-full relative mb-4">
            <Slider />
          </div>
          <div className="h-[25%] flex gap-5 w-full">
            {sliderCat.map((category, idx) => {
              return (
                <div
                  key={idx}
                  className="w-1/4 bg-[#e8f3ff] rounded-lg border-2 border-[#c6e2ff] relative"
                >
                  <div className="min-w-full h-full relative">
                    <Image
                      src={category.image}
                      alt="category.name"
                      fill
                      contain
                    />
                  </div>
                  <p className="w-full absolute left-0 bottom-0 category-bg font-[500] h-[44px] flex justify-center items-center text-center">
                    {category.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/4 bg-white rounded-lg px-5">
          <h2 className="relative  py-5">
            <span>Most Popular</span>
          </h2>
          <div>
            {mostPopularProducts.slice(0, 4).map((product, idx) => {
              return (
                <Card
                  key={idx}
                  image={product.image[0]}
                  name={product.name}
                  MOQ={product.MOQ}
                  price={product.price}
                  type="flex"
                  style={{
                    width: "100%",
                    marginBottom: "10px",
                  }}
                />
              );
            })}
          </div>
          <div className="mx-2">
            <button className="pb-2 w-full border-2 border-[#666] rounded-full mx-auto text-center px-5 py-2">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
