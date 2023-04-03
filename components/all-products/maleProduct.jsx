import Link from "next/link";
import { useEffect, useState } from "react";

import CommonCard from "../CommonCard";
import people from "../../utils/fav-demo-data";

const MaleProducts = ({ category }) => {
  return (
    <section className="h-auto relative  max-w-full pt-4">
      {category.subCategory.map((subCategory, idx) => {
        return (
          <div className="w-auto shadow-allIn  pb-10">
            <div className="md:pt-3 max-w-full flex flex-wrap justify-center md:justify-start items-center gap-[2px] md:gap-[.75rem]">
              {subCategory.items.map((product) => {
                return (
                  <span key={idx} className="md:ml-5 md:mt-5 mt-2 mx-2">
                    <CommonCard product={product} percentage="hot" />
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MaleProducts;
