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
      <h2 className="mb-0 text-primary-red md:text-center">{title}</h2>
      <hr className="h-[2px] bg-gray border-0" />
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
