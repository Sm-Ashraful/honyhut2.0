import React from "react";
import ProCategory from "../../components/product-Categories";
import FilterProducts from "@/components/all-products";

const ProductsCategory = () => {
  return (
    <div className="relative top-36 md:top-52 md:px-4">
      <div className="md:grid md:grid-cols-4 w-full md:gap-[10px] h-full relative">
        <div className="md:fixed w-full  md:mr-0 md:block grid-cols-width">
          <FilterProducts />
        </div>
        <div className="col-span-3 relative w-full grid-cols-left ">
          <ProCategory />
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
