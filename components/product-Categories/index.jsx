import React from "react";

import CommonCard from "../CommonCard";
import ListView from "../list-view";
import Link from "next/link";

const ProCategory = ({ selectCategory, deptLevel, isViewProperty }) => {
  return (
    <section className="relative max-w-full ">
      {deptLevel > 0 ? (
        <div className="pb-5">
          {selectCategory.subCategory.map((subCategory, index) => {
            return (
              <div className="overflow-hidden mb-8 pt-8">
                {isViewProperty === "list" ? (
                  <div className="grid gap-[10px]">
                    {subCategory.items.map((product, idx) => {
                      return (
                        <Link href={`/product/${product.id}`} key={idx}>
                          <ListView product={product} />
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px]">
                    {subCategory.items.map((product, idx) => {
                      return (
                        <Link href={`/product/${product.id}`} key={idx}>
                          <CommonCard product={product} />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="pb-5">
          {isViewProperty === "list" ? (
            <div className="grid gap-[10px]">
              {subCategory.items.map((product, idx) => {
                return (
                  <Link href={`/product/${product.id}`} key={idx}>
                    <ListView product={product} />
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px] pb-5 pt-[10px]">
              {selectCategory.items.map((product, idx) => {
                return (
                  <Link href={`/product/${product.id}`} key={idx}>
                    <CommonCard product={product} />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ProCategory;
