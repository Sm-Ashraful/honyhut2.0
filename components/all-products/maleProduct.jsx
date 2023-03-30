import Link from "next/link";
import { useEffect, useState } from "react";

import CommonCard from "../CommonCard";
import people from "../../utils/fav-demo-data";

const MaleProducts = ({ item }) => {
  const [currentProducts, setCurrentProducts] = useState(null);

  const handleProduct = (product) => {
    setCurrentProducts(product);
  };

  useEffect(() => {
    item.submenu.map((subCategory) => {
      subCategory.submenu.map((products) => {
        setCurrentProducts(products);
      });
    });
  }, []);

  return (
    <section className="h-auto my-10 pb-5 relative shadow-allIn">
      <div className="padding_inside w-auto">
        <div className="shadow-sm">
          <h3>{item.title}</h3>
        </div>

        <div className="md:pt-3 ">
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
                  <div className="flex w-full">
                    {subCategory.submenu.map((product, index) => {
                      return (
                        <div>
                          <p
                            className="mr-5 bg-primary-red text-primary p-2 rounded-full text-sm "
                            key={index}
                            style={{ whiteSpace: "nowrap" }}
                            onClick={() => handleProduct(product)}
                          >
                            {product.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-wrap">
                  {subCategory.submenu.map((products, idx) => {
                    return (
                      <div className="grid grid-cols-2 gap-3 pt-5">
                        {products.details.map((item, idx) => {
                          return (
                            <div>
                              <CommonCard
                                product={item}
                                key={idx}
                                percentage="hot"
                              />
                            </div>
                          );
                        })}
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
