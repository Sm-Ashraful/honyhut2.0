import Link from "next/link";
import { useState } from "react";

import CommonCard from "../CommonCard";
import people from "../../utils/fav-demo-data";

const MaleProducts = ({ item }) => {
  const [currentSubcategory, setCurrentSubcategory] = useState(item.submenu[0]);

  const handleSubCategory = (subCategory) => {
    setCurrentSubcategory(subCategory);
  };

  return (
    <section className="h-auto my-10 pb-5 relative shadow-allIn">
      <div className="padding_inside w-auto">
        <div className="shadow-sm">
          <h3>{item.title}</h3>
        </div>

        <div
          className="flex md:pt-3 space-x-2 justify-start w-auto"
          style={{ flexWrap: "nowrap" }}
        >
          {item.submenu.map((subCategory) => {
            console.log(item.submenu[0]);
            return (
              <div className="flex" key={subCategory.title}>
                <Link href="#">
                  <button
                    onClick={(e) => handleSubCategory(subCategory)}
                    className="px-4 py-2 text-sm md:text-xl font-bold text-white hover:text-honey shadow-sm bg-secondary rounded hover:bg-white hover:rounded"
                  >
                    {subCategory.title}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
        <hr className="h-px my-2  bg-gray border-0 dark:bg-gray" />

        <div className="w-full overflow-x-auto x-scrollable-content">
          <div className="flex w-full">
            {currentSubcategory.submenu.map((product, index) => {
              return (
                <p
                  className="mr-5 bg-primary-red text-primary p-2 rounded-md text-sm "
                  key={index}
                  style={{ whiteSpace: "nowrap" }}
                >
                  {product.title}
                </p>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3  text-sm">
          {people.map((item, idx) => {
            return <CommonCard product={item} key={idx} percentage="hot" />;
          })}
        </div>
      </div>
    </section>
  );
};

export default MaleProducts;
