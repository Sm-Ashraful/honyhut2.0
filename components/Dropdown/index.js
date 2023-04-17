import React from "react";
import Link from "next/link";
import Image from "next/image";

const Dropdown = ({ subCategory, depthLevel, dropdown }) => {
  depthLevel = depthLevel + 1;

  return subCategory ? (
    <ul
      style={{ width: `270px`, minHeight: `370px` }}
      className={`absolute top-0 left-full flex flex-col flex-wrap bg-primary shadow-hnx ${
        dropdown ? "block" : "hidden"
      }`}
    >
      {subCategory.map((product, idx) => {
        return (
          <li>
            <div className="py-5  font-semibold  flex justify-between item-center mx-5">
              <Link
                href={`/brand-name/${product.title}`}
                className="flex justify-start items-center gap-[10px]"
              >
                <div className="relative w-[40px] h-[40px]">
                  <Image src={product.icon} fill cover />
                </div>
                <div>
                  <p className="font-bold capitalize ">{product.title}</p>
                  <p className="text-sm text-tertiary">
                    {product.items} products
                  </p>
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
