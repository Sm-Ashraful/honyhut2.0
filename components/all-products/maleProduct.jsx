import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import CommonCard from "../CommonCard";
import { FaHome } from "react-icons/fa";

const MaleProducts = ({ category }) => {
  const route = useRouter();
  const pathName = route.pathname;
  const path = pathName.split("/");
  return (
    <section className="h-auto relative  max-w-full">
      <div className="px-4 bg-white py-[10px] flex md:px-5 justify-start items-center shadow-md">
        <p className="mb-0  text-xl font-bold">
          <FaHome className="text-secondary" />
        </p>
        <p>
          {path.map((linkName) => {
            return (
              <span>
                <span className="mx-2"> {"/"} </span>{" "}
                <span className="capitalize underline">{linkName}</span>
              </span>
            );
          })}
        </p>
      </div>
      {category.subCategory.map((subCategory, idx) => {
        return (
          <div className="pb-10">
            <div className="md:pt-3 max-w-full grid grid-cols-2 md:grid-cols-4 gap-[5px] md:gap-[10px] mx-2">
              {subCategory.items.map((product, index) => {
                return (
                  <Link
                    href={`/product/${product.id}`}
                    key={idx}
                    className=" md:mt-5 mt-2"
                  >
                    <CommonCard key={index} product={product} />
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
