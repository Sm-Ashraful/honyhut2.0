import Link from "next/link";
import { useEffect, useState } from "react";

import CommonCard from "../CommonCard";
import people from "../../utils/fav-demo-data";

const MaleProducts = ({ item }) => {
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
    <section className="h-auto my-10 pb-5 relative shadow-allIn max-w-full">
      <div className="padding_inside w-auto">
        <div className="shadow-sm">
          <h3>{item.title}</h3>
        </div>

        <div className="md:pt-3 max-w-full">
          {item.submenu.map((subCategory) => {
            return (
              <>
                <div className="pt-5" key={subCategory.title}>
                  <button className="text-xl md:text-2xl font-bold text-secondary hover:text-honey shadow-sm rounded hover:bg-white hover:rounded">
                    {subCategory.title}
                  </button>
                </div>
                <hr className="h-px my-2  bg-gray border-0 dark:bg-gray" />

                <div className="w-full overflow-x-auto x-scrollable-content">
                  <div className="flex w-full cursor-pointer">
                    {subCategory.submenu.map((product, index) => {
                      return (
                        <div>
                          <p
                            className="mr-5 bg-primary-red text-primary p-2 rounded-full text-sm "
                            key={index}
                            style={{ whiteSpace: "nowrap" }}
                            onClick={() => handleProduct(product, subCategory)}
                          >
                            {product.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div
                  className="flex flex-wrap items-center "
                  style={{ flexWrap: "wrap" }}
                >
                  {subCategory.submenu.map((products, idx) => {
                    return (
                      <div
                        className={`pt-5 grow ${
                          currentProducts &&
                          currentProducts.title === products.title
                            ? "order-1"
                            : ""
                        }`}
                        key={idx}
                      >
                        <div className="flex flex-wrap justify-around items-center ">
                          {products.details.map((item, idx) => {
                            return (
                              <span key={idx}>
                                <CommonCard product={item} percentage="hot" />
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MaleProducts;
