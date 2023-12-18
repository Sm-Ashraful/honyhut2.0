import React, { useState, useEffect } from "react";
import Link from "next/link";

import CommonCard from "../CommonCard";

const RecommendProduct = ({ title, products, className, top }) => {
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = (e) => {
    e.preventDefault();
    setSeeMore(!seeMore);
  };
  console.log("Product: ", products);

  return (
    <section
      className={`padding_inside relative ${
        top ? top : `mb-[5rem] mt-[2rem] md:mt-[4rem] lg:mt-10`
      }`}
    >
      <h2 className="text-honey md:text-center text-center drop-shadow-md">
        {title}
        <hr class="w-[60px] my-[5px] border-2 mx-auto border-honey" />
        <hr class="w-[40px] my-[5px] border-1 mx-auto border-honey" />
      </h2>
      <div
        className={`${
          className
            ? `${className}`
            : `grid grid-cols-2 md:grid-cols-4 gap-[10px] cursor-pointer pt-[2rem]`
        } `}
      >
        {products.map((item, index) => {
          if (seeMore) {
            return (
              <Link href={`/product/details/${item.slug}`}>
                <CommonCard key={index} product={item} percentage={`Hot`} />
              </Link>
            );
          } else {
            if (index < 4) {
              return (
                <Link href={`/product/details/${item.slug}`}>
                  <CommonCard key={index} product={item} percentage={`Hot`} />
                </Link>
              );
            }
          }
        })}
      </div>
    </section>
  );
};

export default RecommendProduct;
