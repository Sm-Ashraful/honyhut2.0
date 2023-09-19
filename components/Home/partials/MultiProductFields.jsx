import React from "react";
import MultiCardBox from "../../Update/MultiCardBox";
import { Products } from "@/utils/New Data/Ptoducts";

const MultiProductFields = () => {
  return (
    <div className="w-full relative top-[8.09rem] sm:top-[8.2rem] md:top-[9.4rem] lg:top-[9.3rem] md:px-[3rem] lg:px-[4rem] xl:px-[5rem] py-5">
      <div className="grid grid-cols-3 gap-5">
        <MultiCardBox
          product={Products}
          title={"Analyst's Choice"}
          position={"text-center"}
          subtitle={
            "Goods & services handpicked by B2B sourcing & procurement specialists"
          }
          type={"multiShow"}
        />
        <MultiCardBox
          product={Products}
          title="Low MOQ"
          position={"text-center"}
          subtitle={
            "Find products from certified low MOQ manufacturers & wholesale suppliers"
          }
          type={"multiShow"}
        />
        <MultiCardBox
          product={Products}
          title={"OEM Products"}
          position={"text-center"}
          subtitle={
            "Reliable OEM companies offering thousands of popular OEM parts & items"
          }
          type={"multiShow"}
        />
      </div>
    </div>
  );
};

export default MultiProductFields;
