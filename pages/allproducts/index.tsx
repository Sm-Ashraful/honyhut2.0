import React from "react";
import Products from "../../components/all-products"
import MaleProducts from "../../components/all-products/maleProduct"
import FemaleProducts from "../../components/all-products/femaleProduct"
import CondomProducts from "../../components/all-products/condomProduct"
import CannabiesProducts from "../../components/all-products/cannabiesProducts"

const AllProducts = () => {
  return (
    <div className="padding_inside relative top-36 md:top-48">
      <Products/>
      <MaleProducts/>
      <FemaleProducts/>
      <CondomProducts/>
      <CannabiesProducts/>
    </div>
  );
};

export default AllProducts;
