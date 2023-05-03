import React, { useState, useEffect } from "react";
import Link from "next/link";

import CommonCard from "../CommonCard";

const RecommendProduct = ({ title, products, top, className }) => {
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = (e) => {
    e.preventDefault();
    setSeeMore(!seeMore);
  };
  return (
    <section
      className={`padding_inside relative ${
        top ? `top-${top}` : `top-36 md:top-48 `
      } mt-10`}
    >
      <h2 className="text-honey md:text-center text-center">
        {title}
        <hr class="w-[60px] my-[5px] border-2 mx-auto border-honey" />
        <hr class="w-[40px] my-[5px] border-1 mx-auto border-honey" />
      </h2>
      <div
        className={`${
          className
            ? `${className}`
            : `grid grid-cols-2 md:grid-cols-4 gap-[10px] cursor-pointer pt-5`
        } `}
      >
        {products.map((item, index) => {
          if (seeMore) {
            return (
              <Link href={`/product/${item.id}`}>
                <CommonCard key={index} product={item} percentage={`Hot`} />
              </Link>
            );
          } else {
            if (index < 8) {
              return (
                <Link href={`/product/${item.id}`}>
                  <CommonCard key={index} product={item} percentage={`Hot`} />
                </Link>
              );
            }
          }
        })}
      </div>
      {products.length > 8 && (
        <div className="w-full flex justify-center ">
          <span
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-yellow-100 border border-transparent font-semibold text-yellow-500 hover:text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-yellow-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800 cursor-pointer
        "
            onClick={handleSeeMore}
          >
            {seeMore === true ? <p>See Less</p> : <p>Load more &#187; </p>}
          </span>
        </div>
      )}
    </section>
  );
};

export default RecommendProduct;
