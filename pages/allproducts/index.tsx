import React from "react";
import Products from "../../components/all-products";
import MaleProducts from "../../components/all-products/maleProduct";

import { menuItem } from "../../utils/menu-item";

const AllProducts = () => {
  return (
    <div className="padding_inside relative top-36 md:top-48">
      <Products />
      {menuItem.map((singleCategory) => {
        return <MaleProducts item={singleCategory} />;
      })}
    </div>
  );
};

export default AllProducts;
