import React from "react";
import MultiCardBox from "../../Update/MultiCardBox";
import { Products } from "@/utils/New Data/Ptoducts";
import Link from "next/link";

const MultiProductFields = ({ products }) => {
  let analyticProduct = [];
  let lowMoq = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].productType === "analytic") {
      analyticProduct.push(products[i]);
    }
  }
  for (let i = 0; i < products.length; i++) {
    if (products[i].productType === "low") {
      lowMoq.push(products[i]);
    }
  }

  return (
    <div className="w-full relative  md:px-[3rem] lg:px-[4rem] xl:px-[5rem] py-5">
      <div className="grid md:grid-cols-3 gap-5">
        <Link href="/product/category-page/Analyst's Choice">
          <MultiCardBox
            product={analyticProduct}
            productCategory={"Analyst's Choice"}
            position={"text-center"}
            subtitle={
              "Goods & services handpicked by B2B sourcing & procurement specialists"
            }
            type={"multiShow"}
          />
        </Link>
        <Link href="/product/category-page/Low MOQ">
          <MultiCardBox
            product={lowMoq}
            productCategory="Low MOQ"
            position={"text-center"}
            subtitle={
              "Find products from certified low MOQ manufacturers & wholesale suppliers"
            }
            type={"multiShow"}
          />
        </Link>

        <Link href="/product/category-page/OEM Products">
          <MultiCardBox
            product={Products}
            productCategory={"OEM Products"}
            position={"text-center"}
            subtitle={
              "Reliable OEM companies offering thousands of popular OEM parts & items"
            }
            type={"multiShow"}
          />
        </Link>
      </div>
    </div>
  );
};

export default MultiProductFields;
