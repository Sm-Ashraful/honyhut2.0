import Link from "next/link";
import { useEffect, useState } from "react";

import CommonCard from "../CommonCard";
import people from "../../utils/fav-demo-data";

const MaleProducts = ({ category }) => {
  return (
    <section className="h-auto relative  max-w-full pt-4">
      {category.subCategory.map((subCategory, idx) => {
        return (
          <div className="pb-10">
            <div className="md:pt-3 max-w-full grid grid-cols-2 md:grid-cols-5 gap-[5px] md:gap-[10px] mx-2">
              {subCategory.items.map((product) => {
                return (
                  <Link
                    href={`/product/${product.id}`}
                    key={idx}
                    className=" md:mt-5 mt-2"
                  >
                    <CommonCard product={product} percentage="hot" />
                  </Link>
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
