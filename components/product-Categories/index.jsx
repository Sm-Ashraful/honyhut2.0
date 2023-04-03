import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { menuItem } from "../../utils/menu-item";
import CommonCard from "../CommonCard";
import Link from "next/link";

const ProCategory = () => {
  const router = useRouter();
  const categoryName = router.query.categoryName;
  const [selectCategory, setSelectCategory] = useState(null);
  const [routeName, selectRouteName] = useState(categoryName);

  useEffect(() => {
    menuItem.map((menu, index) => {
      if (menu.title === categoryName) {
        setSelectCategory(menu);
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
      <div className="w-full grid md:grid-cols-5 gap-5">
        <div className="col-span-1 bg-white hidden md:block">
          <div className="px-3 py-10">
            {menuItem.map((menu, index) => {
              return (
                <div key={index}>
                  <p className="pb-5">
                    <span onClick={() => setSelectCategory(menu)}>
                      {menu.title}
                    </span>
                    <span>
                      {menu.submenu.map((subCategories, index) => {
                        return (
                          <p className="pl-3">
                            <span>{subCategories.title}</span>
                          </p>
                        );
                      })}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full md:col-span-4 ">
          <h2 className="text-center text-primary-red shadow-md">
            <span className="border-b-2">{selectCategory.title}</span>
          </h2>
          <div>
            {selectCategory &&
              selectCategory.submenu.map((subCategory, index) => {
                return (
                  <div className="overflow-hidden">
                    <p className="border-b mb-5">
                      <span>{subCategory.title}</span>
                    </p>
                    <div className="flex flex-wrap justify-start shadow-allIn">
                      {subCategory.submenu.map((item, index) => {
                        return (
                          <div className="grid grid-cols-1 gap-2 py-5 px-2 ">
                            <p className="border-b-2 mr-5 border-b-honey">
                              <strong className="">{item.title}</strong>
                            </p>
                            <div className="flex gap-[10px] pt-5 justify-between items-center">
                              {item.details.map((product, index) => {
                                return (
                                  <Link href={`/product/${item.id}`}>
                                    <CommonCard product={product} key={index} />
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    )
  );
};

export default ProCategory;
