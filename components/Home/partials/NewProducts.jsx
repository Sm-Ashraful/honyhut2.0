import React from "react";
import { Products } from "@/utils/New Data/Ptoducts";
import MultiCardBox from "@/components/Update/MultiCardBox";
import Link from "next/link";
import Card from "@/components/Update/Card";

const NewProducts = ({ newProducts }) => {
  return (
    <div className="w-full relative md:px-[3rem] lg:px-[4rem] xl:px-[5rem] py-5">
      <div className="w-full bg-white p-5 rounded-lg border ">
        <div>
          <div className="flex justify-between items-center pb-2">
            <h2 className="!ml-0">New Arrivals</h2>
            <Link
              href={`/product/category-page/new-arrivals`}
              className="text-sm cursor-pointer hover:text-[#777] bg-customTheme hover:bg-white px-4 py-2 rounded-full text-customText"
            >
              See more
            </Link>
          </div>
          <p className="text-[#666] text-sm leading-4">
            Goods & services handpicked by B2B sourcing & procurement
            specialists
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-5">
          {newProducts.slice(0, 4).map((item, idx) => {
            return (
              <Link href={`/product/${item._id}`}>
                <Card
                  key={idx}
                  image={
                    item.image ? item.image[0] : item.productPictures[1].url
                  }
                  name={item.name}
                  MOQ={item?.MOQ}
                  price={item.price}
                  typo={item.typo}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
