import React from "react";
import ProCategory from "../../components/product-Categories";
import FilterProducts from "@/components/all-products";

const ProductsCategory = () => {
  return (
    <div className="relative top-36 md:top-[150px]">
        {/* <div className="w-full  md:mr-0 md:block col-span-1 z-0 pt-[20px]">
          <FilterProducts />
        </div> */}
      <div className="md:grid w-full md:gap-[10px] h-full relative">
        <div className="relative w-full">
          <ProCategory />
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
