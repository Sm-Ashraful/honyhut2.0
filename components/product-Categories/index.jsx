import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { allProducts } from "../../utils/all-product";
import CommonCard from "../CommonCard";
import Link from "next/link";

import { FaHome } from "react-icons/fa";

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
      <>
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
        <div className="w-full grid md:grid-cols-5 gap-5">
          <div className="col-span-1 bg-white hidden md:block"></div>
          <div className="w-full md:col-span-4 ">
            <h2 className="shadow-md">
              <span className="">{selectCategory.title}</span>
            </h2>
            <div>
              {deptLevel > 0 ? (
                <div>
                  {selectCategory.subCategory.map((subCategory, index) => {
                    return (
                      <div className="overflow-hidden">
                        <p className="border-b mb-5">
                          <span>{subCategory.title}</span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default ProCategory;
