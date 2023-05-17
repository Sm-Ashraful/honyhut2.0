import React, { useEffect, useState, useRef } from "react";
import CategoryCard from "../Card/categoryCard";
import categoryData from "../../utils/category-demo-data";
import Link from "next/link";
import { ClassNames } from "@emotion/react";

const Categories = () => {
  const [category, setCategory] = useState(categoryData);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  const handleScroll = () => {
    const containerWidth = containerRef.current.offsetWidth;
    const cards = containerRef.current;
    let closestDistance = Infinity;
    let closestIndex = 0;
  };

  // useEffect(() => {
  //   containerRef.current.addEventListener("scroll", handleScroll);
  //   handleScroll();

  //   return () => {
  //     containerRef.current.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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
      className={`padding_inside relative top-52 lg:top-56 mb-[5rem] mt-[2rem] md:mt-[4rem]`}
    >
      <h2 class="mb-0 text-honey text-center md:text-center drop-shadow-md">
        <span>Product Categories</span>
        <hr class="w-[60px] my-[5px] border-2 mx-auto border-honey" />
        <hr class="w-[40px] my-[5px] border-1 mx-auto border-honey" />
      </h2>

      <div
        className={`flex flex-nowrap x-scrollable-content pb-[3rem] gap-[10px] rounded-md  transition-all delay-700`}
        ref={containerRef}
        style={{ scrollLeft: scrollPosition }}
      >
        {category.map((item, personIndex) => {
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
