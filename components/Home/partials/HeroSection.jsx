/**
  Hero section for landing page.
  This have three part
  
 */

import React from "react";
import Listing from "../../../Assets/listing-box.svg";
import Image from "next/image";
import { categories } from "@/utils/New Data/categories";
import { MdKeyboardArrowRight } from "react-icons/md";
import Card from "@/components/Update/Card";
import Slider from "@/components/Update/Slider";

import InfinityLooper from "../../Update/InfinityLooper";

import {
  mostPopularProducts,
  newItems,
} from "@/utils/New Data/MostPopularProducts";

const sliderCat = [
  {
    name: "Electronics",
    image: "/sliderCat/e_ent.png",
  },
  {
    name: "Supplements",
    image: "/sliderCat/os_ent.png",
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
    name: "Supplements",
    image: "/sliderCat/os_ent.png",
  },
  {
    name: "Life Style X Fashion",
    image: "/sliderCat/lf_ent.png",
  },
  {
    name: "Hardware X Machinery",
    image: "/sliderCat/h_ent.png",
  },
];

const renderNewItems = () => {
  return (
    <>
      <h2 className="relative  py-5">
        <span>New Items</span>
      </h2>
      <div>
        {newItems.slice(0, 4).map((product, idx) => {
          return (
            <Card
              key={idx}
              image={product.image[0]}
              name={product.name}
              s_desc={product.s_desc}
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
        <button className="pb-2 w-full border-2 border-[#666] rounded-full mx-auto text-center px-5 py-2 hover:bg-secondary hover:text-white hover:border-0">
          See All
        </button>
      </div>
    </>
  );
};

const renderPopularItems = () => {
  return (
    <>
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
        <button className="pb-2 w-full border-2 border-[#666] rounded-full mx-auto text-center px-5 py-2 hover:bg-secondary hover:text-white hover:border-0">
          See All
        </button>
      </div>
    </>
  );
};

const HeroSection = () => {
  return (
    <div
      className="w-full relative md:px-[3rem] lg:px-[4rem] xl:px-[5rem] md:h-[580px] md:py-5"
      style={{
        backgroundImage: `url('hks_gsol_bg.jpg')`, // Use backticks and quotes around the URL
        backgroundPosition: "top",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full flex flex-col md:flex-row gap-5 ">
        <div className="order-1 md:order-0 md:block w-full  md:w-1/4 bg-white rounded-lg px-5">
          {renderNewItems()}
        </div>
        <div className="order-0 md:order-1  h-[380px] md:h-auto md:flex-1 rounded-lg overflow-hidden">
          <div className="h-[60%] md:h-[70%] max-w-full relative mb-4">
            <Slider />
          </div>
          <div className="h-[35%] md:h-[25%]  w-full">
            <InfinityLooper speed="20" direction="left">
              {sliderCat.map((category, idx) => {
                return (
                  <div
                    key={idx}
                    className={`w-[150px] ${
                      idx % 2 === 0
                        ? "bg-[#e8f3ff] border-[#c6e2ff]"
                        : "bg-[#fcffe8] border-[#ffe8c6]"
                    } rounded-lg border-2 border-[#c6e2ff] relative`}
                  >
                    <div className="min-w-full h-full relative">
                      <Image
                        src={category.image}
                        alt="category.name"
                        fill
                        contain
                      />
                    </div>
                    <p className="w-full absolute left-0 bottom-0 category-bg font-[800] h-[44px] flex justify-center items-center text-center">
                      {category.name}
                    </p>
                  </div>
                );
              })}
            </InfinityLooper>
          </div>
        </div>
        <div className="order-2 md:order-2 md:block w-full md:w-1/4 bg-white rounded-lg px-5">
          {renderPopularItems()}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
