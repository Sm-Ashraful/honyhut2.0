import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import Card from "../Card";

import productData from "../../utils/products-demo";
import styles from "../Categories/style.module.css";

const CannabiesProducts = () => {
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
      } else {
        setCurrentIndex(0);
        cardBoxRef.current.scrollLeft = 0;
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <section className="h-auto my-2 relative">
      <div className="p-5 w-auto">
        <div className="shadow-sm">
          <h1 className=" font-bold pt-7 pl-1">Cannabies Accessories</h1>
        </div>
        <div className="flex pt-8 md:pt-3 space-x-2 justify-start w-auto">
          <Link href="#">
            <button className="px-4 text-md font-bold  text-white hover:text-honey shadow-sm bg-secondary rounded hover:bg-white hover:rounded">
              Rolling Paper
            </button>
          </Link>
          <Link href="#">
            <button className="px-4 text-md font-bold  text-white hover:text-honey shadow-sm bg-secondary rounded hover:bg-white hover:rounded">
              Cone Paper
            </button>
          </Link>
        </div>
      </div>
      <hr className="h-px my-4 bg-gray border-0 dark:bg-gray" />
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

export default CannabiesProducts;
