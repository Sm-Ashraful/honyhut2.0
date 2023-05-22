import React from "react";
import Link from "next/link";
import Image from "next/image";

const Dropdown = ({ subCategory, depthLevel, dropdown }) => {
  depthLevel = depthLevel + 1;

  return subCategory ? (
    <ul
      style={{ width: `auto`, minHeight: `220px` }}
      className={`absolute px-[5rem] top-0 left-full flex items-center bg-white shadow-hnx ${
        dropdown ? "block" : "hidden"
      }`}
    >
      {subCategory.map((product, idx) => {
        return (
          <li>
            <div className=" py-5  font-semibold  flex justify-between item-center mx-8">
              <Link href={`/brand-name/${product.title}`}>
                <div className=" flex flex-col justify-start items-center gap-[10px]">
                  <div className="relative w-[140px] h-[120px]">
                    <Image src={product.icon} alt={product.title} fill cover />
                  </div>
                  <div>
                    <p className="font-bold capitalize text-center">
                      {product.title}
                    </p>
                    <p className="text-sm text-tertiary text-center hover:no-underline">
                      {product.items} products
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  ) : null;
};

export default Dropdown;
