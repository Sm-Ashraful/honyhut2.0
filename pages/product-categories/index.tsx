import React from "react";
import ProCategory from "../../components/product-Categories";
import MaleProducts from "../../components/product-Categories/maleProduct";
import FemaleProducts from "../../components/product-Categories/femaleProduct";
import CondomProducts from "../../components/product-Categories/condomProduct";
import CannabiesProducts from "../../components/product-Categories/cannabiesProducts";

const ProductsCategory = () => {
  return (
    <div className="padding_inside relative top-36 md:top-48">
      <ProCategory />
      <div className=" grid md:grid-cols-4">
        <div className="md:col-span-1"></div>
        <div className="md:col-span-3">
          <MaleProducts />
          <FemaleProducts />
          <CondomProducts />
          <CannabiesProducts />
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
