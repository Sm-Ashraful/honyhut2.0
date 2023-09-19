import React from "react";
import { Products } from "@/utils/New Data/Ptoducts";
import MultiCardBox from "@/components/Update/MultiCardBox";

const NewProducts = () => {
  return (
    <div className="w-full relative top-[8.09rem] sm:top-[8.2rem] md:top-[9.4rem] lg:top-[9.3rem] md:px-[3rem] lg:px-[4rem] xl:px-[5rem] py-5">
      <MultiCardBox
        product={Products}
        title={"New Arrivals"}
        subtitle={
          "Goods & services handpicked by B2B sourcing & procurement specialists"
        }
        type="singleShow"
      />
    </div>
  );
};

export default NewProducts;
