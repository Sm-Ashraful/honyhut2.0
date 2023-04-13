import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { allProducts } from "../../utils/all-product";
import CommonCard from "../CommonCard";
import Link from "next/link";

import { FaHome, FaSearch } from "react-icons/fa";

const ProCategory = () => {
  const router = useRouter();
  const categoryName = router.query.categoryName;
  const [selectCategory, setSelectCategory] = useState(null);
  const [routeName, selectRouteName] = useState(categoryName);
  const [deptLevel, setDeptLevel] = useState(0);
  const pathName = router.pathname;
  const path = pathName.split("/");
  path.pop();
  if (selectCategory) {
    path.push(selectCategory.title);
  }

  useEffect(() => {
    allProducts.map((menu, index) => {
      if (menu.title === categoryName) {
        setSelectCategory(menu);
        setDeptLevel(1);
      } else {
        menu.subCategory.map((subCategory, idx) => {
          if (subCategory.title === categoryName) {
            setSelectCategory(subCategory);
            setDeptLevel(0);
          }
        });
      }
    });
  }, []);

  useEffect(() => {
    console.log("select categories: ", selectCategory);
    if (selectCategory) {
      selectRouteName(selectCategory.title);
    }
  }, [selectCategory]);

  useEffect(() => {
    router.push(`/product-categories/${routeName}`);
  }, [routeName]);

  return (
    selectCategory && (
      <section className="h-auto relative  max-w-full ">
        <div className="px-4 bg-white py-[10px] flex md:px-5 justify-start items-center">
          <p className="mb-0  text-xl font-bold">
            <FaHome className="text-secondary" />
          </p>
          <p className="text-lg">
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
        <div className="w-full pb-10 px-5">
          <div className="w-full">
            <h2
              className={`text-center text-secondary ${
                deptLevel === 0
                  ? "border-b border-primary-red flex justify-between items-center text-[1.5rem]"
                  : ""
              }`}
            >
              <span>{selectCategory.title}</span>
              {deptLevel === 0 && (
                <span className="flex text-primary-red">
                  <span className="text-sm mr-3">Search</span>
                  <FaSearch />
                </span>
              )}
            </h2>
            <div>
              {deptLevel > 0 ? (
                <div className="pb-5 ">
                  {selectCategory.subCategory.map((subCategory, index) => {
                    return (
                      <div className="overflow-hidden mb-8">
                        <p className="border-b mb-5 font-semibold text-[1.5rem] flex justify-between items-center">
                          <span className="flex justify-center items-center">
                            <span className="mb-2 md:mb-0 text-primary-red">
                              &#8658;
                            </span>
                            <span>{subCategory.title}</span>
                          </span>
                          <span className="flex text-primary-red">
                            <span className="text-sm mr-3">Search</span>
                            <FaSearch />
                          </span>
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px]">
                          {subCategory.items.map((product, idx) => {
                            return (
                              <Link href={`/product/${product.id}`} key={idx}>
                                <CommonCard product={product} />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
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
          </div>
        </div>
      </section>
    )
  );
};

export default ProCategory;
