import React, { useEffect, useState, useRef } from "react";
import CategoryCard from "../Card/categoryCard";
import categoryData from "../../utils/category-demo-data";
import Link from "next/link";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import styles from "./style.module.css";
const Categories = () => {
  const [category, setCategory] = useState(categoryData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardBoxRef = useRef(null);

  const handlePreviousCategory = (e) => {
    let width = cardBoxRef.current.clientWidth;
    cardBoxRef.current.scrollLeft -= width;
  };

  const handleNextCategory = (e) => {
    let width = cardBoxRef.current.clientWidth;
    cardBoxRef.current.scrollLeft += width;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < category.length - 3) {
        setCurrentIndex(currentIndex + 1);
        handleNextCategory();

        // if(){}
      } else {
        setCurrentIndex(0);
        cardBoxRef.current.scrollLeft = 0;
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <section className={`padding_inside relative top-36 md:top-48 `}>
      <h2 className="">Top Categories</h2>
      <hr className="h-px my-5 bg-gray border-0 dark:bg-gray" />
      <div
        className="flex items-center gap-3 justify-between p-6 scroll-smooth x-scrollable-content rounded-md"
        ref={cardBoxRef}
      >
        {category.map((item, index) => {
          return (
            <div className={`${styles.categoryCard}`} key={index}>
              <Link href={`/product-categories/${item.name}`}>
                <CategoryCard key={index} name={item.name} image={item.image} />
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        <button className={styles.prev} onClick={handlePreviousCategory}>
          <FiChevronLeft />
        </button>
        <button className={styles.next} onClick={handleNextCategory}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Categories;
