/**
  Hero section for landing page.
  This have three part
  
 */

import React from "react";
import Image from "next/image";

import Card from "@/components/Update/Card";
import Slider from "@/components/Update/Slider";

import {
  mostPopularProducts,
  newItems,
} from "@/utils/New Data/MostPopularProducts";
import CardWithButton from "@/components/Update/CardWithButton";
import Link from "next/link";

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
];

const renderCategories = (categories) => {
  return (
    <div>
      <h2 className="relative  py-5">
        <span>Categories</span>
      </h2>
    </div>
  );
};

const renderNewItems = (newProducts) => {
  return (
    <React.Fragment>
      <h2 className="relative  py-5">
        <span>New Items</span>
      </h2>
      <div>
        {newProducts.slice(0, 4).map((product, idx) => {
          return (
            <Card
              key={idx}
              image={product.productPictures[0].url}
              name={product.name}
              MOQ={"10pcs"}
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
    </React.Fragment>
  );
};

const renderPopularItems = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

const HeroSection = ({ newProducts, categories }) => {
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
          {renderNewItems(newProducts)}
        </div>
        <div className="order-0 md:order-1  h-[380px] md:h-auto md:flex-1 rounded-lg overflow-hidden">
          <div className="h-[60%] md:h-[70%] max-w-full relative mb-4">
            <Slider />
          </div>
          <div className="h-[35%] md:h-[25%]  w-full flex gap-x-3">
            {categories.map((category, idx) => {
              return (
                <Link
                  href={`/product/category-page/${category.name}`}
                  key={idx}
                  className={`w-[150px] h-[120px] ${
                    idx % 2 === 0
                      ? "bg-[#e8f3ff] border-[#c6e2ff]"
                      : "bg-[#fcffe8] border-[#ffe8c6]"
                  } rounded-lg border-2 border-[#c6e2ff] relative`}
                >
                  <div className="min-w-full h-full relative">
                    <Image
                      src={category.categoryImage}
                      alt="category.name"
                      fill
                      contain
                    />
                  </div>
                  <p className="w-full absolute left-0 bottom-0 category-bg font-[800] h-[44px] flex justify-center items-center text-center">
                    {category.name}
                  </p>
                </Link>
              );
            })}
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
