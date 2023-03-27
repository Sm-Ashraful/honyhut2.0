import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { menuItem } from "../../utils/menu-item";
import CommonCard from "../CommonCard";

const ProCategory = () => {
  const [selectCategory, setSelectCategory] = useState(menuItem[0]);
  const router = useRouter();
  const categoryName = router.query;

  useEffect(() => {
    console.log("Router: ", categoryName);
  }, []);

  return (
    <div className="grid grid-cols-5 gap-5">
      <div className="col-span-1 bg-white">
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
      <div className="col-span-4">
        <h2 className="text-center text-primary-red shadow-md">
          <span className="border-b-2">
            {selectCategory ? selectCategory.title : "Male Enhancement"}
          </span>
        </h2>
        <div>
          {selectCategory &&
            selectCategory.submenu.map((subCategory, index) => {
              return (
                <div className="overflow-hidden">
                  <p className="border-b">
                    <span>{subCategory.title}</span>
                  </p>
                  <div className="flex flex-wrap justify-evenly">
                    {subCategory.submenu.map((item, index) => {
                      return (
                        <div className=" p-5">
                          <p className="border-b-2 border-b-honey">
                            <strong className="">{item.title}</strong>
                          </p>
                          <div className="flex justify-center space-x-5 flex-wrap">
                            {item.details.map((product, index) => {
                              return (
                                <CommonCard product={product} key={index} />
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
  );
};

export default ProCategory;
