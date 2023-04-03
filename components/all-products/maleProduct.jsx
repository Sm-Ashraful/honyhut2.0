import Link from "next/link";
import { useEffect, useState } from "react";

import CommonCard from "../CommonCard";
import people from "../../utils/fav-demo-data";

const MaleProducts = ({ category }) => {
  const [currentProducts, setCurrentProducts] = useState(null);
  const [submenuToggle, setSubmenuToggle] = useState(-1);

  const handleProduct = (product, subCategory) => {
    const subCategoryCopy = subCategory.submenu;
    const subMenuIndex = subCategoryCopy.findIndex((products) => {
      return products.title === product.title;
    });
    // subCategoryCopy.map((products) => {
    //   console.log("product: ", products);
    // });
    setCurrentProducts(subCategoryCopy[subMenuIndex]);
    setSubmenuToggle(subMenuIndex);
  };

  return (
    <section className="h-auto relative  max-w-full pt-4">
      {category.subCategory.map((subCategory, idx) => {
        return (
          <div className="w-auto shadow-allIn  pb-10">
            <div className="border-b-2 bg-secondary text-primary flex justify-center items-center py-[10px]">
              <h3 className="uppercase text-center mb-0">
                {subCategory.title}
              </h3>
            </div>
            <div className="md:pt-3 max-w-full flex flex-wrap justify-center items-center gap-[2px] md:gap-[.75rem]">
              {subCategory.items.map((product) => {
                return (
                  <span key={idx}>
                    <CommonCard product={product} percentage="hot" />
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MaleProducts;
