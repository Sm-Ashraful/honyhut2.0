import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import Card from "../Card";

import productData from "../../utils/products-demo";
import styles from "../Categories/style.module.css";

const Products = () => {
  const [product, setProduct] = useState(productData);
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
      if (currentIndex < product.length - 3) {
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
    <section className="padding_inside relative top-36 md:top-48 h-auto my-5">
      <h2 className="mb-0 ">Top Products</h2>
      <hr className="h-px my-8 bg-gray border-0 dark:bg-gray" />
      <div
        className="flex items-center gap-3 justify-between p-6 scroll-smooth x-scrollable-content rounded-md"
        ref={cardBoxRef}
      >
        {product.map((item, index) => {
          return (
            <Link href={`/product/${item.id}`}>
              <Card key={index} product={item} percentage={`20%`} />
            </Link>
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

export default Products;
