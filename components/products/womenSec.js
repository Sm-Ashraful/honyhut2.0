import React, { useEffect, useState } from "react";
import productData from "../../utils/products-demo";
import Link from "next/link";
import ByMoreSection from "./buyMore";
import CommonCard from "../CommonCard";

import { menuItem } from "../../utils/menu-item";

const Women = () => {
  const [product, setProduct] = useState(null);
  const [currentSubCategory, setCurrentSubCategory] = useState(null);
  const [activeTitle, setActiveTitle] = useState("");

  useEffect(() => {
    menuItem.map((menu, index) => {
      if (menu.title === "Female Enhancement") {
        setProduct(menu);
        setCurrentSubCategory(menu.submenu[0]);
      }
    });
  }, []);

  useEffect(() => {}, [currentSubCategory]);

  const handleSubmenu = (submenu) => {
    setCurrentSubCategory(submenu);
    setActiveTitle(submenu.title);
  };

  return (
    <div className="relative top-36 md:top-48 flex flex-col md:flex-row mt-16">
      <section className="padding_inside w-full overflow-auto">
        <div className="flex justify-between items-center md:flex-col md:justify-start md:items-start">
          <h2 className="mb-0 text-honey ">
            <span>For Women</span>
            <hr class="w-[60px] my-[5px] border-2 ml-0" />
          </h2>
          <div className="flex pt-8 md:pt-3 space-x-5 justify-between">
            {product &&
              product.submenu.map((submenu, index) => {
                return (
                  <button
                    onClick={() => handleSubmenu(submenu)}
                    className={`text-2xl  hover:text-honey hover:underline ${
                      activeTitle === submenu.title
                        ? "text-honey underline"
                        : "text-gray"
                    }`}
                  >
                    {submenu.title}
                  </button>
                );
              })}
          </div>
        </div>

        <div className="relative pt-5">
          <div>
            <div className="grid grid-cols-2 gap-[10px]  pb-5">
              {currentSubCategory &&
                currentSubCategory.submenu.map((submenu, index) => {
                  return submenu.details.map((item, idx) => {
                    return (
                      <Link href={`/product/${item.id}`}>
                        <CommonCard
                          key={idx}
                          product={item}
                        />
                      </Link>
                    );
                  });
                })}
            </div>
          </div>
        </div>
      </section>

      {/* Buy More section  */}
      <section className="padding_inside w-full overflow-hidden">
        <h2 className="pt-2 md:pb-3 text-honey">
          <span> Buy More Save More</span>
          <hr class="w-[60px] my-[5px] border-2 ml-0" />
        </h2>
        <div className="w-full h-[280px]">
          <ByMoreSection />
        </div>
      </section>
    </div>
  );
};

export default Women;
