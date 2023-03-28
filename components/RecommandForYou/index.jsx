import React, { useState, useEffect } from "react";
import Link from "next/link";

import people from "../../utils/fav-demo-data";
import CommonCard from "../CommonCard";

const RecommendProduct = ({ top, className }) => {
  return (
    <section
      className={`padding_inside relative ${
        top ? `top-${top}` : `top-36 md:top-48 `
      }`}
    >
      <h2 className="mb-0 ">JUST FOR YOU</h2>
      <hr className="h-px my-8 bg-gray border-0 dark:bg-gray" />
      <div
        className={`${
          className
            ? `${className}`
            : `grid grid-cols-2 md:grid-cols-4 gap-5 cursor-pointer`
        } `}
      >
        {people.map((item, index) => {
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
