import React, { useState, useEffect } from "react";
import Link from "next/link";

import CommonCard from "../CommonCard";

const RecommendProduct = ({ title, products, top, className }) => {
  return (
    <section
      className={`padding_inside relative ${
        top ? `top-${top}` : `top-36 md:top-48 `
      } mt-10`}
    >
      <h2 className="text-honey md:text-center text-center mb-0">{title}
      <hr class="w-[60px] my-[5px] border-2 mx-auto" />
      </h2>
      <div
        className={`${
          className
            ? `${className}`
            : `grid grid-cols-2 md:grid-cols-4 gap-[10px] cursor-pointer pt-5`
        } `}
      >
        {products.map((item, index) => {
          return (
            <Link href={`/product/${item.id}`}>
              <CommonCard key={index} product={item} percentage={`Hot`} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default RecommendProduct;
