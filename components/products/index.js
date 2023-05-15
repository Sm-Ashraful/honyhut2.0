import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import Card from "../Card";

import productData from "../../utils/products-demo";
import styles from "../Categories/style.module.css";
import Gallery from "../gallery/gallery";

const addProduct = [
  {
    id: 1,
    image: "/Category/Condoms.jpeg",
    name: "Winter Sell",
    quote: "OFF 50-70%",
  },
  {
    id: 2,
    image: "/Category/Condoms-2.jpeg",
    name: "Winter Sell",
    quote: "OFF 50-70%",
  },
];

const Products = () => {
  const [product, setProduct] = useState(productData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const cardBoxRef = useRef(null);

  useEffect(() => {
    setIntervalId(
      setInterval(() => {
        if (currentIndex < product.length - 3) {
          setCurrentIndex(currentIndex + 1);
          handleNextCategory();
        } else {
          setCurrentIndex(0);
          cardBoxRef.current.scrollLeft = 0;
        }
      }, 5000)
    );

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handlePreviousCategory = (e) => {
    clearInterval(intervalId);
    setCurrentIndex(currentIndex - 1);
    let width = cardBoxRef.current.clientWidth;
    cardBoxRef.current.scrollLeft -= width;
  };

  const handleNextCategory = (e) => {
    clearInterval(intervalId);
    setCurrentIndex(currentIndex + 1);
    let width = cardBoxRef.current?.clientWidth; // Add a null check
    if (width) {
      // Add a check for null
      cardBoxRef.current.scrollLeft += width;
    }
  };
  function handleTouchStart(e) {
    e.preventDefault();
    clearInterval(intervalId);
  }

  return (
    <section className="padding_inside relative top-52 lg:top-56 mb-[5rem] mt-[2rem] md:mt-[4rem]">
      <h2 className="mb-0 text-honey text-center drop-shadow-md">
        <span>Top Products</span>
        <hr class="w-[60px] my-[5px] border-2 mx-auto border-honey" />
        <hr class="w-[40px] my-[5px] border-1 mx-auto border-honey" />
      </h2>
      <div className="relative">
        <div
          className="flex items-center py-5 scroll-smooth x-scrollable-content"
          ref={cardBoxRef}
          onTouchStart={handleTouchStart}
        >
          {product.map((item, index) => {
            return (
              <Link href={`/product/${item.id}`}>
                <Card key={index} product={item} />
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
      </div>
    </section>
  );
};

export default Products;
