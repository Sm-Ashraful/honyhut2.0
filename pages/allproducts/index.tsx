import React from "react";
import Products from "../../components/all-products";
import MaleProducts from "../../components/all-products/maleProduct";

import { allProducts } from "../../utils/all-product";
import categoryItem from "../../utils/category-demo-data";

const AllProducts = () => {
  return (
    <div className="padding_inside relative top-36 md:top-48">
      <div className="grid grid-cols-4 gap-[10px] h-full relative">
        <div
          className="fixed mr-0"
          style={{ width: `calc((100% / 4) - 10px)` }}
        >
          <Products categories={categoryItem} />
        </div>
        <div
          className="col-span-3 relative w-full"
          style={{ left: `calc((100% / 4))` }}
        >
          {allProducts.map((category, idx) => {
            return <MaleProducts category={category} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
