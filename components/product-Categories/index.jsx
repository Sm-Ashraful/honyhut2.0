import React from "react";

import CategoryCard from "../Card/categoryCard";
import categoryData from "../../utils/category-demo-data";
import { menuItems } from "../../utils/menu-item";

const ProCategory = () => {
  console.log("menuItems: s", menuItems);
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        {categoryData.map((category, index) => {
          return <CategoryCard image={category.image} name={category.name} />;
        })}
      </div>
      <div className="col-span-4 bg-primary-red"></div>
    </div>
  );
};

export default ProCategory;
