// **Women Products Section
// **Developed by Dev-2(Mehedi Hasan Munna)

import React, { useEffect, useState } from "react";
import productData from "../../utils/products-demo";
import Link from "next/link";
import ByMoreSection from "./buyMore";
import CommonCard from "../CommonCard";

import { menuItem } from "../../utils/menu-item";

const Women = () => {
  const [product, setProduct] = useState(null);
  const [pillProduct, setPillProduct] = useState(null);
  const [liquidShotsProduct, setLiquidShotsProduct] = useState(null);
  const [currentSubCategory, setCurrentSubCategory] = useState(null);

  useEffect(() => {
    menuItem.map((menu, index) => {
      if (menu.title === "Female Enhancement") {
        setProduct(menu);
        setCurrentSubCategory(menu.submenu[0]);
      }
    });
  }, []);

  useEffect(() => {
  }, [currentSubCategory]);

  const handleSubmenu = (submenu) => {
    setCurrentSubCategory(submenu);
  };

  return (
    <div className="relative top-36 md:top-48 grid md:grid-cols-2">
      <section className="padding_inside w-full h-128 overflow-auto">
        <div className="flex justify-between items-center md:flex-col md:justify-start md:items-start">
          <h2 className="mb-0">For Women</h2>
          <div className="flex pt-8 md:pt-3 space-x-5 justify-between">
            {product &&
              product.submenu.map((submenu, index) => {
                return (
                  <button
                    onClick={() => handleSubmenu(submenu)}
                    className=" text-2xl text-gray hover:text-honey hover:underline"
                  >
                    {submenu.title}
                  </button>
                );
              })}
          </div>
        </div>
        <hr className="h-px mb-5  bg-gray border-0 dark:bg-gray" />
        <div className="relative">
          <div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 sm:grid-cols-3">
              {currentSubCategory &&
                currentSubCategory.submenu.map((submenu, index) => {
                  return submenu.details.map((item, idx) => {
                    return (
                      <Link href={`/product/${item.id}`}>
                        <CommonCard
                          key={idx}
                          product={item}
                          percentage={`Hot`}
                        />
                      </Link>
                    );
                  });
                })}
            </div>
          </div>
        </div>
      </section>
      <section className="padding_inside w-full h-128 overflow-hidden">
        <h2 className="pt-2 md:pb-3">Buy More Save More</h2>
        <hr className="h-px mb-5  bg-gray border-0 dark:bg-gray" />
        <div className="w-full h-96 md:h-4/5">
          <ByMoreSection />
        </div>
      </section>
    </div>
  );
};

export default Women;
