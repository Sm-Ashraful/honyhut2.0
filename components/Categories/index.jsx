import React, { useEffect, useState, useRef } from "react";
import CategoryCard from "../Card/categoryCard";
import categoryData from "../../utils/category-demo-data";
import Link from "next/link";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Categories = () => {
  const [category, setCategory] = useState(categoryData);
  // const [currentIndex, setCurrentIndex] = useState(0);
  const cardBoxRef = useRef(null);

  // const handlePreviousCategory = (e) => {
  //   let width = cardBoxRef.current.clientWidth;
  //   cardBoxRef.current.scrollLeft -= width;
  // };

  // const handleNextCategory = (e) => {
  //   let width = cardBoxRef.current.clientWidth;
  //   cardBoxRef.current.scrollLeft += width;
  // };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (currentIndex < category.length - 3) {
  //       setCurrentIndex(currentIndex + 1);
  //       handleNextCategory();

  //       // if(){}
  //     } else {
  //       setCurrentIndex(0);
  //       cardBoxRef.current.scrollLeft = 0;
  //     }
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, [currentIndex]);

  return (
    <section className={`padding_inside relative top-36 md:top-48 mt-16`}>
      <h2 className="mb-0 text-primary-red md:text-center">Top Categories</h2>
      <hr className="h-[2px] mt-[5px]  bg-gray border-0" />
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
