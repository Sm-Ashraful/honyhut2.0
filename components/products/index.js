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
    <section className="padding_inside relative top-36 md:top-48 h-auto mt-16 mb-16">
      <h2 className="mb-0 text-honey text-center">
        <span>Top Products</span>
        <hr class="w-[45px] my-[5px] border-2 mx-auto" />
      </h2>
      <div className="relative">
        <div
          className="flex items-center pt-5 gap-[10px] scroll-smooth x-scrollable-content pb-5"
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
