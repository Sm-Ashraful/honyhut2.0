import React from "react";
import MultiCardBox from "../../Update/MultiCardBox";
import { Products } from "@/utils/New Data/Ptoducts";
import Link from "next/link";

const MultiProductFields = ({ products }) => {
  let girlsFashion = [];
  let shoe = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].productType === "girls") {
      girlsFashion.push(products[i]);
    }
  }
  for (let i = 0; i < products.length; i++) {
    if (products[i].productType === "shoe") {
      shoe.push(products[i]);
    }
  }

  return (
    <div className="w-full relative  md:px-[3rem] lg:px-[4rem] xl:px-[5rem] py-5">
      <div className="grid md:grid-cols-3 gap-5">
        <MultiCardBox
          product={girlsFashion}
          productCategory={"Girls Fashion"}
          position={"text-center"}
          subtitle={
            "Goods & services handpicked by B2B sourcing & procurement specialists"
          }
          type={"multiShow"}
          linkUrl="girls-fashion"
        />

        <MultiCardBox
          product={shoe}
          productCategory="Shoes"
          position={"text-center"}
          subtitle={
            "Find products from certified low MOQ manufacturers & wholesale suppliers"
          }
          type={"multiShow"}
          linkUrl="Shoes"
        />

        <MultiCardBox
          product={Products}
          productCategory={"Electronics"}
          position={"text-center"}
          subtitle={
            "Reliable OEM companies offering thousands of popular OEM parts & items"
          }
          type={"multiShow"}
          linkUrl="electronics"
        />
      </div>
    </div>
  );
};

export default MultiProductFields;
