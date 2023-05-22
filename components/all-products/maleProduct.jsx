import Link from "next/link";

import CommonCard from "../CommonCard";
import ListView from "../list-view";

const MaleProducts = ({ category }) => {
  return (
    <section className="h-auto relative  max-w-full">
      {category.subCategory.map((subCategory, idx) => {
        return (
          <div className="pb-10">
            <div className="max-w-full grid  gap-[5px] md:gap-[10px] mx-2">
              {subCategory.items.map((product, index) => {
                return (
                  <Link
                    href={`/product/${product.id}`}
                    key={idx}
                    className=" md:mt-5 mt-2"
                  >
                    <ListView key={index} product={product} />
                  </Link>
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
