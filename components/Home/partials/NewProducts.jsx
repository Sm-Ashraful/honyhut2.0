import React from "react";
import { Products } from "@/utils/New Data/Ptoducts";
import MultiCardBox from "@/components/Update/MultiCardBox";

const NewProducts = ({ newProducts }) => {
  console.log("New products: ", newProducts);
  // const products = [];
  // for (let i = 0; i < 4; i++) {
  //   products.push(NewProducts[i]);
  // }
  return (
    <div className="w-full relative md:px-[3rem] lg:px-[4rem] xl:px-[5rem] py-5">
      <MultiCardBox
        product={newProducts}
        productCategory={"New Arrivals"}
        subtitle={
          "Goods & services handpicked by B2B sourcing & procurement specialists"
        }
        type="singleShow"
      />
    </div>
  );
};

export default NewProducts;
