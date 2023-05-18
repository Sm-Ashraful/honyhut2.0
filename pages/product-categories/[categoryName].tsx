import React from "react";
import ProCategory from "../../components/product-Categories";
import FilterProducts from "@/components/all-products";

const ProductsCategory = () => {
  return (
    <div className="relative w-full top-[8.3rem] sm:top-[10.3rem] md:top-[11.4rem] lg:top-[11.1rem]">
      <div className="md:grid w-full md:gap-[10px] h-full relative">
        <div className="relative w-full">
          <ProCategory />
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
