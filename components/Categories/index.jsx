import React, { useEffect, useState, useRef } from "react";
import CategoryCard from "../Card/categoryCard";
import categoryData from "../../utils/category-demo-data";
import Link from "next/link";
import { ClassNames } from "@emotion/react";

const Categories = () => {
  const [category, setCategory] = useState(categoryData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const cardBoxRef = useRef(null);

  /** useEffect(() => {
    const lastIndex = categoryData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, categoryData]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]); */

  return (
    <section
      className={`padding_inside relative top-36 md:top-48 mt-16 mb-16 md:mb-32`}
    >
      <h2 class="mb-0 text-honey text-center md:text-center drop-shadow-md">
        <span>Top Categories</span>
        <hr class="w-[60px] my-[5px] border-2 mx-auto border-honey" />
        <hr class="w-[40px] my-[5px] border-1 mx-auto border-honey" />
      </h2>

      <div
        className={`grid grid-cols-2 md:grid-cols-5 gap-[10px] rounded-md pt-5 transition-all delay-700`}
        ref={cardBoxRef}
      >
        {category.map((item, personIndex) => {
          console.log("The render effect");
          const animationClass =
            personIndex % 2 === 0 ? "animate-right" : "animate-left";
          return (
            <Link key={personIndex} href={`/product-categories/${item.name}`}>
              <CategoryCard
                animationClass={animationClass}
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
