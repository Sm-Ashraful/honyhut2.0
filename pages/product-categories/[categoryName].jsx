import React, { useState, useEffect } from "react";
import ProCategory from "../../components/product-Categories";
import FilterProducts from "@/components/all-products";
import { allProducts } from "@/utils/all-product";
import { useRouter } from "next/router";

import HeroTop from "@/components/common/top-component";
import { useSelector } from "react-redux";

const ProductsCategory = () => {
  const router = useRouter();
  const categoryName = router.query.categoryName;
  const [selectCategory, setSelectCategory] = useState(null);

  const isViewProperty = useSelector((state) => state.sidebar.isViewProperty);

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

  return (
    <div className="relative w-full top-[8.09rem] md:top-[9.4rem] lg:top-[9.3rem]">
      {selectCategory && (
        <div>
          <HeroTop title={categoryName} />
          <div className="md:grid w-full md:gap-[10px] h-full relative padding_inside">
            <div className="w-full">
              <FilterProducts />
            </div>
            <div className="relative w-full">
              <ProCategory
                selectCategory={selectCategory}
                deptLevel={deptLevel}
                isViewProperty={isViewProperty}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsCategory;
