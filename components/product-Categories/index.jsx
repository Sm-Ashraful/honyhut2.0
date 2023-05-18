import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { allProducts } from "../../utils/all-product";
import CommonCard from "../CommonCard";
import Link from "next/link";
import FilterProducts from "@/components/all-products";

import HeroTop from "../common/top-component";

const ProCategory = () => {
  const router = useRouter();
  const categoryName = router.query.categoryName;
  const [selectCategory, setSelectCategory] = useState(null);
  const [routeName, selectRouteName] = useState(categoryName);
  const [deptLevel, setDeptLevel] = useState(0);

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

  return (
    selectCategory && (
      <section className="h-auto relative max-w-full ">
        <div className="w-full pb-10">
          <HeroTop title={selectCategory.title} />
          <div className="w-full padding_inside">
            <div className="w-full  md:mr-0 md:block z-0 pt-[20px]  ">
              <FilterProducts />
            </div>

            <div className="px-5">
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
