import React, { useEffect, useState, useRef } from "react";
import CategoryCard from "../Card/categoryCard";
import categoryData from "../../utils/category-demo-data";
import Link from "next/link";

const Categories = () => {
  const [category, setCategory] = useState(categoryData);
  const cardBoxRef = useRef(null);

  return (
    <section
      className={`padding_inside relative top-36 md:top-48 mt-16 mb-16 md:mb-32`}
    >
      <h2 class="mb-0 text-primary-red text-center">
        <span>Top Categories</span>
        <hr class="w-[45px] my-[5px] border-2 mx-auto" />
      </h2>

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-[10px] rounded-md pt-5"
        ref={cardBoxRef}
      >
        {category.map((item, index) => {
          return (
            <Link key={index} href={`/product-categories/${item.name}`}>
              <CategoryCard
                key={index}
                name={item.name}
                image={item.image}
                totalItem={item.totalItem}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
