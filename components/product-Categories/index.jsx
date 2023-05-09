import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { allProducts } from "../../utils/all-product";
import CommonCard from "../CommonCard";
import Link from "next/link";
import FilterProducts from "@/components/all-products";

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
    if (selectCategory) {
      selectRouteName(selectCategory.title);
    }
  }, [selectCategory]);

  useEffect(() => {
    router.push(`/product-categories/${routeName}`);
  }, [routeName]);

  return (
    selectCategory && (
      <section className="h-auto relative max-w-full ">
        {/* <div className="px-4 bg-white py-[10px] flex md:px-5 justify-start items-center">
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
        </div> */}
        <div className="w-full pb-10">
          <div className="w-full">
            <div className="w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-[10px] flex justify-start items-center shadow-md">
              <span className="mb-0 text-xxl text-white text-center w-full">
                {selectCategory.title}
              </span>
            </div>

            <div className="w-full  md:mr-0 md:block z-0 pt-[20px]  md:px-[9rem]">
              <FilterProducts />
            </div>

            {/* {deptLevel === 0 && (
              <span className="flex text-primary-red">
                <span className="text-sm mr-3">Search</span>
                <FaSearch />
              </span>
            )} */}

            <div className="md:px-[9rem] px-5">
              {deptLevel > 0 ? (
                <div className="pb-5 ">
                  {selectCategory.subCategory.map((subCategory, index) => {
                    return (
                      <div className="overflow-hidden mb-8 pt-8">
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
